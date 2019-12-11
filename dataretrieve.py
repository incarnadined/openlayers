import lxml.html as lh
import pandas as pd
import requests
import geojson
import pyproj

url = 'https://wiki.osgeo.org/wiki/Edu_current_initiatives#Current_members_of_the_Geo_for_All_Labs_Network'
page = requests.get(url)
doc = lh.fromstring(page.content)
tr_elements = doc.xpath('//tr')

table = []
for i in tr_elements[0]:
    heading = i.text_content()
    heading = heading.strip()
    table.append((heading, []))

for i in range(1, len(tr_elements)):
    r = tr_elements[i]

    column = 0
    for c in r.iterchildren():
        data = c.text_content()
        data = data.strip()
        table[column][1].append(data)
        column+=1

dataframe = {title:column for (title,column) in table}
df = pd.DataFrame(dataframe)        

points = []

for i in range(len(table[1][1])):
    longlat = df.loc[i,'Coordinates (longitude, latitude)']
    name = df.loc[i,'Laboratory name and institution']

    try:
        long = float(longlat.split(', ')[0])
        lat = float(longlat.split(', ')[1])

        #Because OpenLayers uses the Web-Mercator projection, convert to this format first
        wgs84 = pyproj.Proj("+init=EPSG:3857")
        x, y = wgs84(long, lat)

        print(type(x),type(y),name, longlat)
        print(x,y, longlat, name)

        #Deal with data that is recorded incorrectly (latlong not longlat)
        if x == float('inf') or y == float('inf'):
            print('hey')
            x, y = wgs84(lat, long)

        point = geojson.Point((x,y))
        print(x,y,'\n\n\n\n')
        points.append(geojson.Feature(geometry=point, properties={'name': name}))
        #print(name,': ',longlat)
    except ValueError:
        pass    

points_collection = geojson.FeatureCollection(points)

with open('data.geojson','w')as f:
    geojson.dump(points_collection, f)

import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import GeoJSON from 'ol/format/GeoJSON';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';


var geojsonObject = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.250296,
          52.831497
        ]
      },
      "properties": {
        "name": "University of Nottingham"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.837305,
          41.967426
        ]
      },
      "properties": {
        "name": "University of Girona"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.396873,
          50.936974
        ]
      },
      "properties": {
        "name": "University of Southampton"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          14.390363,
          50.10183
        ]
      },
      "properties": {
        "name": "Czech Technical University in Prague"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.611536,
          54.980656
        ]
      },
      "properties": {
        "name": "Open Source Geospatial Lab Newcastle University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.095939,
          45.803516
        ]
      },
      "properties": {
        "name": "Politecnico di Milano - Polo Territoriale di Como"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.56273,
          52.380531
        ]
      },
      "properties": {
        "name": "University of Warwick"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.039473,
          52.198849
        ]
      },
      "properties": {
        "name": "UNEP/GRID Warsaw Centre"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.961098,
          46.028362
        ]
      },
      "properties": {
        "name": "University of Applied Sciences and Arts of Southern Switzerland (SUPSI)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.5481,
          47.3764
        ]
      },
      "properties": {
        "name": "Open Source Geospatial Laboratory at ETH Zurich"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          14.493651,
          41.630815
        ]
      },
      "properties": {
        "name": "University of Molise"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.013407,
          52.178478
        ]
      },
      "properties": {
        "name": "Institute of Geodesy and Cartography (IGiK)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.103889,
          44.4325
        ]
      },
      "properties": {
        "name": "Faculty of Geography, University of Bucharest"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.418833,
          47.188778
        ]
      },
      "properties": {
        "name": "University Alba Regia Technical Faculty Institute of Geoinformatics OSGeo Lab"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.1737,
          48.77996
        ]
      },
      "properties": {
        "name": "Stuttgart University of Applied Sciences"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -49.23329,
          -25.45304
        ]
      },
      "properties": {
        "name": "Laboratorio Geoespacial Livre, Federal University of Paraná"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.246043,
          48.728888
        ]
      },
      "properties": {
        "name": "Institute of Geography, Pavol Jozef Šafárik University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.06564,
          4.62799
        ]
      },
      "properties": {
        "name": "OSGeoLabUD, Universidad Distrital Francisco José de Caldas"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -56.176441,
          -34.902405
        ]
      },
      "properties": {
        "name": "Universidad de la República"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          11.139053,
          46.064827
        ]
      },
      "properties": {
        "name": "Dipartimento di Ingegneria Civile Ambientale e Meccanica, University of Trento"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.67024,
          49.41739
        ]
      },
      "properties": {
        "name": "University of Heidelberg"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.6764,
          35.7818
        ]
      },
      "properties": {
        "name": "North Carolina State University OSGeoREL"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.524696,
          42.393578
        ]
      },
      "properties": {
        "name": "University of Massachusetts Amherst"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.251311,
          38.958578
        ]
      },
      "properties": {
        "name": "University of Kansas"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.766945,
          38.548801
        ]
      },
      "properties": {
        "name": "Center for Spatial Sciences, University of California, Davis"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -102.5791,
          22.7608
        ]
      },
      "properties": {
        "name": "Laboratorio de Software Libre"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.357886,
          41.153667
        ]
      },
      "properties": {
        "name": "Kent State University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.73,
          35.306944
        ]
      },
      "properties": {
        "name": "Center for Applied GIScience, University of North Carolina, Charlotte"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          101.721298,
          3.172932
        ]
      },
      "properties": {
        "name": "University of Nottingham, Malaysia campus"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          101.874222,
          2.943748
        ]
      },
      "properties": {
        "name": "Universiti Teknologi Malaysia (UTM)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.059875,
          14.656005
        ]
      },
      "properties": {
        "name": "National College of Public Administration and Governance(NCPAG), University of the Philippines"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.062241,
          14.64372
        ]
      },
      "properties": {
        "name": "Environmental Science for Social Change (ESSC)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.3503,
          17.4454
        ]
      },
      "properties": {
        "name": "Lab for Spatial Informatics, IIIT Hyderabad"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.175045,
          33.52006
        ]
      },
      "properties": {
        "name": "Geospatial Research and Education Lab(GREL), Institute of Space Technology (IST)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          28.22847,
          -25.75429
        ]
      },
      "properties": {
        "name": "Department of Geography, Geoinformatics and Meteorology, University of Pretoria"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.858574,
          -1.249038
        ]
      },
      "properties": {
        "name": "Regional Centre for  Mapping of Resources for Development (RCMRD)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.191617,
          5.650366
        ]
      },
      "properties": {
        "name": "University of Ghana"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          144.962006,
          -37.797932
        ]
      },
      "properties": {
        "name": "The University of Melbourne"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.328799,
          27.714506
        ]
      },
      "properties": {
        "name": "Spatial {Query} Lab at Texas A&M University - Corpus Christi"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.566004,
          23.039568
        ]
      },
      "properties": {
        "name": "CEPT University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.57,
          -31.54
        ]
      },
      "properties": {
        "name": "Programa de Gestión de Información y Gestión de Datos -IRPHa Universidad Nacional de San Juan"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.940005,
          33.42551
        ]
      },
      "properties": {
        "name": "GeoDa Center for Geospatial Analysis and Computation, Arizona State University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          23.72931,
          37.983716
        ]
      },
      "properties": {
        "name": "National Technical University of Athens"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.352222,
          48.856614
        ]
      },
      "properties": {
        "name": "IGN- France"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.173403,
          41.385064
        ]
      },
      "properties": {
        "name": "Universitat Oberta de Catalunya"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.665662,
          51.9875
        ]
      },
      "properties": {
        "name": "ISRIC - World Soil Information foundation"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -8.41154,
          43.362344
        ]
      },
      "properties": {
        "name": "Universidade da Coruña"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.484623,
          5.263234
        ]
      },
      "properties": {
        "name": "Geoinformatic Unit,  Universiti Sains Malaysia"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          85.55,
          27.616667
        ]
      },
      "properties": {
        "name": "Kathmandu University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          11.133042,
          46.187865
        ]
      },
      "properties": {
        "name": "GIS and Remote Sensing Unit, Fondazione Edmund Mach"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -3.17909,
          51.481581
        ]
      },
      "properties": {
        "name": "University of South Wales"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.676207,
          45.523452
        ]
      },
      "properties": {
        "name": "Portland State University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.821946,
          -1.292066
        ]
      },
      "properties": {
        "name": "IGAD Climate Prediction and Applications Center"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -38.543395,
          -3.718394
        ]
      },
      "properties": {
        "name": "Federal University of Ceará"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -2.223409,
          51.872215
        ]
      },
      "properties": {
        "name": "University of Gloucestershire"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          79.9008,
          6.7964
        ]
      },
      "properties": {
        "name": "University of Moratuwa"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.452,
          31.198
        ]
      },
      "properties": {
        "name": "Fudan University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.230691,
          38.938859
        ]
      },
      "properties": {
        "name": "Haskell Indian Nations University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.963888,
          45.8085
        ]
      },
      "properties": {
        "name": "University of Zagreb, Faculty of Geodesy"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.1547,
          -16.4949
        ]
      },
      "properties": {
        "name": "GeoBolivia-Vice-presidency of the State"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.641474,
          45.950252
        ]
      },
      "properties": {
        "name": "Geodesy and Geomatics Engineering, University of New Brunswick"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.78995,
          6.7102
        ]
      },
      "properties": {
        "name": "Faculty of Geomatics, Sabaragamuwa University of Sri Lanka"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          79.973167,
          6.914867
        ]
      },
      "properties": {
        "name": "Dpt of IT, Faculty of Computing, Sri Lanka Institute of Information Technology"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          6.1487,
          46.2253
        ]
      },
      "properties": {
        "name": "University of Geneva - Institute for Environmental Sciences"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.8169,
          47.22341
        ]
      },
      "properties": {
        "name": "Geometa Lab at HSR - University of Applied Sciences Rapperswil"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          30.515647,
          50.456936
        ]
      },
      "properties": {
        "name": "National University of \"Kyiv-Mohyla Academy\", Ecology Faculty"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          22.996707,
          40.567811
        ]
      },
      "properties": {
        "name": "Centre for Research and Technology Hellas - Hellenic Institute of Transport"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          139.938952,
          35.902681
        ]
      },
      "properties": {
        "name": "Centre for Spatial Information Science(CSIS), University of Tokyo"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.407096,
          27.764053
        ]
      },
      "properties": {
        "name": "FOSS4Geo Academy @ Del Mar College National Open Geospatial Technology Consortium"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          135.507556,
          34.593067
        ]
      },
      "properties": {
        "name": "Osaka City University(OCU)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.962795,
          44.400133
        ]
      },
      "properties": {
        "name": "Università di Genova - Laboratorio di Geomatica"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.456207,
          28.069303
        ]
      },
      "properties": {
        "name": "Universidad de Las Palmas de Gran Canaria - Escuela de Ingenierías Industriales y Civiles - Grado en Ingenieria Geomática y Topografía"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.964831,
          40.768703
        ]
      },
      "properties": {
        "name": "Center for Advanced Research on Spatial Information, Hunter College - CUNY"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          22.961498,
          40.627516
        ]
      },
      "properties": {
        "name": "Hellenic digital earth Centre of Excellence, Aristotle University of Thessaloniki - AUTH"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.039586,
          47.823711
        ]
      },
      "properties": {
        "name": "Interfaculty Department of Geoinformatics - Z_GIS, University of Salzburg"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.132457,
          51.079735
        ]
      },
      "properties": {
        "name": "The GI Science Group @ the Department of Geomatics Engineering, University of Calgary"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          34.78346,
          30.85332
        ]
      },
      "properties": {
        "name": "Ben Gurion University of the Negev (BGU)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.476321,
          44.805499
        ]
      },
      "properties": {
        "name": "University of Belgrade, Faculty of Civil Engineering, Department of geodesy and geoinformatics"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          125.400779,
          43.99896
        ]
      },
      "properties": {
        "name": "Open Geospatial Laboratory of Northeast Institute of Geography and Agroecology, CAS"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.16305,
          45.773875
        ]
      },
      "properties": {
        "name": "Bay College"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          30.475278,
          50.382597
        ]
      },
      "properties": {
        "name": "Taras Shevchenko National University of Kyiv (TSNUK) OSGeo Research and Education Lab, Faculty of Geography, Department of Physical Geography and Geoecology"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.001944,
          39.012222
        ]
      },
      "properties": {
        "name": "University of Colorado Denver, Department of Geography and Environmental Sciences"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.481608,
          43.561984
        ]
      },
      "properties": {
        "name": "French Space Agency CNES"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -56.203617,
          -34.905912
        ]
      },
      "properties": {
        "name": "Comunidad gvSIG Uruguay"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.054403,
          47.481916
        ]
      },
      "properties": {
        "name": "Department of Geodesy and Surveying, Budapest University of Technology and Economics"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.116913,
          42.376398
        ]
      },
      "properties": {
        "name": "Center for Geographic Analysis, Harvard University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.240679,
          43.515866
        ]
      },
      "properties": {
        "name": "Community Mapping Lab Green Mountain College"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.55149,
          35.59506
        ]
      },
      "properties": {
        "name": "National Environmental Modeling and Analysis Center (NEMAC), UNC Asheville"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.60893,
          35.068353
        ]
      },
      "properties": {
        "name": "Birds Eye View GIS"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.38097,
          43.6591
        ]
      },
      "properties": {
        "name": "Geographic Information Science and Systems Research Group, Department of Geography and Environmental Studies, Ryerson University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          153.014556,
          -27.49734
        ]
      },
      "properties": {
        "name": "School of Geography Planning and Environmental Management , University of Queensland"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.085741,
          49.043274
        ]
      },
      "properties": {
        "name": "ETIS Lab ENSEA UCP CNRS UMR 8051 , University of Cergy Pontoise"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.442079,
          35.611559
        ]
      },
      "properties": {
        "name": "Department of Global Studies, Warren Wilson College"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.529557,
          43.474073
        ]
      },
      "properties": {
        "name": "The Spatial Lab, Dept of Geography & Environmental Studies Wilfrid Laurier University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          30.05,
          31.2333
        ]
      },
      "properties": {
        "name": "National Authority for Remote Sensing & Space Sciences"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          82.863503,
          54.986816
        ]
      },
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "star",
        "name": "Geomatics and Virtual Reality Research Group, Siberian State University of Geosystems and Technologies"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.87889,
          -34.40596
        ]
      },
      "properties": {
        "name": "SMART Open Source Geospatial Laboratory, University of Wollongong"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.054717,
          47.481911
        ]
      },
      "properties": {
        "name": "Department of Photogrammetry and Geoinformatics, Faculty of Civil Engineering, Budapest University of Technology and Economics"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.370095,
          36.300059
        ]
      },
      "properties": {
        "name": "Geospatial Exploration Lab, Department of Geosciences, East Tennessee State University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.26551,
          49.593812
        ]
      },
      "properties": {
        "name": "Dept. of Geoinformatics, Palacký University Olomouc"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.133427,
          51.524773
        ]
      },
      "properties": {
        "name": "University College London"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.438534,
          41.451795
        ]
      },
      "properties": {
        "name": "A World Bridge"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.23434,
          45.48046
        ]
      },
      "properties": {
        "name": "IREA-CNR"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          6.6595,
          46.77938
        ]
      },
      "properties": {
        "name": "HEIG-VD GIS-Lab University of Applied Sciences Western Switzerland at Yverdon"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          139.403,
          35.5664
        ]
      },
      "properties": {
        "name": "Global Studies and Collaboration(GSC), Aoyama Gakuin University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.612086,
          14.079753
        ]
      },
      "properties": {
        "name": "Remote Sensing & GIS, Asian Institute of\nTechnology"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.499691,
          9.191132
        ]
      },
      "properties": {
        "name": "Geographic Information Science and Systems Research Group, School of Information Technology and Computing, American University of Nigeria"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          59.534125,
          36.306903
        ]
      },
      "properties": {
        "name": "Department of Geography"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          11.332129,
          43.312688
        ]
      },
      "properties": {
        "name": "Laboratorio Dati Economici Storici Territoriali University of Siena"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          23.70755,
          37.96124
        ]
      },
      "properties": {
        "name": "Spatial Analysis Research Group Department of Geography, Harokopio University of Athens"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.780893,
          30.766247
        ]
      },
      "properties": {
        "name": "Geoinformatics Lab, Department of Civil Engineering PEC University of Technology, Chandigarh, India"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.626971,
          41.877591
        ]
      },
      "properties": {
        "name": "DePaul University, Department of Geography"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.401185,
          43.075844
        ]
      },
      "properties": {
        "name": "University of Wisconsin, Cartography Lab"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.816531,
          -1.279007
        ]
      },
      "properties": {
        "name": "Center for Agricultural Networking and Information Sharing (CANIS)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.0009,
          38.7917
        ]
      },
      "properties": {
        "name": "Spatiotemporal Data Research and Education Laboratory Southern Illinois University Edwardsville, Computer Science Department"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          41.6333,
          -81.3666
        ]
      },
      "properties": {
        "name": "Lakeland Community College, Geography and Geospatial Technology"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          126.946214,
          37.565073
        ]
      },
      "properties": {
        "name": "GIS Lab of Ewha Womans University Dept of Social Studies (Geography), Ewha Womans University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          177.407999,
          -17.668684
        ]
      },
      "properties": {
        "name": "School of Science & Technology GeoForAll Lab of The University of Fiji"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.08731,
          4.636
        ]
      },
      "properties": {
        "name": "Laboratorio de Geomática de la Universidad Nacional de Colombia, Sede Bogotá"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.656918,
          -33.467547
        ]
      },
      "properties": {
        "name": "Centro de Investigación en Recursos Naturales y Sustentabilidad (CIRENYS), Universidad Bernardo O Higgins"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.920816,
          41.320066
        ]
      },
      "properties": {
        "name": "Spatial-Ecology and GeoComputation at Yale"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          57.497599,
          -20.233947
        ]
      },
      "properties": {
        "name": "University of Mauritius"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -156.779008,
          71.289655
        ]
      },
      "properties": {
        "name": "A World Bridge"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.139759,
          52.636878
        ]
      },
      "properties": {
        "name": "Pete Fisher Unit, University of Leicester"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.180909,
          30.411775
        ]
      },
      "properties": {
        "name": "Landscape Architecture, Louisiana State University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.666866,
          49.222782
        ]
      },
      "properties": {
        "name": "Tomas Bata University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          57.688529,
          11.966565
        ]
      },
      "properties": {
        "name": "Department of Earth Sciences, University of Gothenburg"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          52.416686,
          -4.066497
        ]
      },
      "properties": {
        "name": "Department of Geography and Earth Science, Aberystwyth University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.117262,
          47.469102
        ]
      },
      "properties": {
        "name": "Indikatrix.org"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          41.258026,
          -96.011635
        ]
      },
      "properties": {
        "name": "Laboratory for Cartography and GIS, University of Nebraska"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.484908,
          3.337001
        ]
      },
      "properties": {
        "name": "LabSIG UNGS"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          53.385066,
          -6.601791
        ]
      },
      "properties": {
        "name": "Maynooth University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -34.603684,
          -58.381559
        ]
      },
      "properties": {
        "name": "Nodo IDE del Instituto de Geografía"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.809,
          75.8613
        ]
      },
      "properties": {
        "name": "Suresh Gyan Vihar University"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.042538,
          9.93731
        ]
      },
      "properties": {
        "name": "Universidad de Costa Rica – Escuela de Geografía"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.853329,
          -32.897047
        ]
      },
      "properties": {
        "name": "Universidad Tecnológica Nacional"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          178.447779,
          -18.148794
        ]
      },
      "properties": {
        "name": "USP Geospatial Science Laboratories"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          22.285146,
          60.456165
        ]
      },
      "properties": {
        "name": "UTU Geospatial"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          144.961258,
          -37.799853
        ]
      },
      "properties": {
        "name": "Spatial@Melbourne"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.117262,
          47.469102
        ]
      },
      "properties": {
        "name": "Indikatrix.org"
      }
    }
  ]
}

var vectorSource = new VectorSource({
  features: (new GeoJSON()).readFeatures(geojsonObject)
});


var vectorLayer = new VectorLayer({
  source: vectorSource
});

var map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    vectorLayer
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
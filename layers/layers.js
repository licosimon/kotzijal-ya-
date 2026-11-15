ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:103598").setExtent([144842.339211, 1437409.493180, 882843.336935, 1907300.383878]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ICTA_FRIJOL_1 = new ol.format.GeoJSON();
var features_ICTA_FRIJOL_1 = format_ICTA_FRIJOL_1.readFeatures(json_ICTA_FRIJOL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:103598'});
var jsonSource_ICTA_FRIJOL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICTA_FRIJOL_1.addFeatures(features_ICTA_FRIJOL_1);
var lyr_ICTA_FRIJOL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICTA_FRIJOL_1, 
                style: style_ICTA_FRIJOL_1,
                popuplayertitle: 'ICTA_FRIJOL',
                interactive: true,
                title: '<img src="styles/legend/ICTA_FRIJOL_1.png" /> ICTA_FRIJOL'
            });
var format_suelos__2 = new ol.format.GeoJSON();
var features_suelos__2 = format_suelos__2.readFeatures(json_suelos__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:103598'});
var jsonSource_suelos__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_suelos__2.addFeatures(features_suelos__2);
var lyr_suelos__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_suelos__2, 
                style: style_suelos__2,
                popuplayertitle: 'suelos_',
                interactive: true,
    title: 'suelos_<br />\
    <img src="styles/legend/suelos__2_0.png" /> Acasaguastlán<br />\
    <img src="styles/legend/suelos__2_1.png" /> Alotenango<br />\
    <img src="styles/legend/suelos__2_2.png" /> Areas Fragosas<br />\
    <img src="styles/legend/suelos__2_3.png" /> Atitlán<br />\
    <img src="styles/legend/suelos__2_4.png" /> Balanjuyú<br />\
    <img src="styles/legend/suelos__2_5.png" /> Barberena<br />\
    <img src="styles/legend/suelos__2_6.png" /> Camanchá<br />\
    <img src="styles/legend/suelos__2_7.png" /> Camanchá erosionada<br />\
    <img src="styles/legend/suelos__2_8.png" /> Camantulul<br />\
    <img src="styles/legend/suelos__2_9.png" /> Cauqué<br />\
    <img src="styles/legend/suelos__2_10.png" /> Chinautla<br />\
    <img src="styles/legend/suelos__2_11.png" /> Chipó<br />\
    <img src="styles/legend/suelos__2_12.png" /> Chocolá<br />\
    <img src="styles/legend/suelos__2_13.png" /> Chol<br />\
    <img src="styles/legend/suelos__2_14.png" /> Chuarrancho<br />\
    <img src="styles/legend/suelos__2_15.png" /> Cimas Volcánicas<br />\
    <img src="styles/legend/suelos__2_16.png" /> Colojate<br />\
    <img src="styles/legend/suelos__2_17.png" /> Cuilapa<br />\
    <img src="styles/legend/suelos__2_18.png" /> Cutzán<br />\
    <img src="styles/legend/suelos__2_19.png" /> Escuintla<br />\
    <img src="styles/legend/suelos__2_20.png" /> Fraijanes<br />\
    <img src="styles/legend/suelos__2_21.png" /> Guatemala<br />\
    <img src="styles/legend/suelos__2_22.png" /> Guatemala fase pendiente<br />\
    <img src="styles/legend/suelos__2_23.png" /> Guatemala fase quebrada<br />\
    <img src="styles/legend/suelos__2_24.png" /> Jalapa<br />\
    <img src="styles/legend/suelos__2_25.png" /> Jigua<br />\
    <img src="styles/legend/suelos__2_26.png" /> Lava Volcánica<br />\
    <img src="styles/legend/suelos__2_27.png" /> Mocá<br />\
    <img src="styles/legend/suelos__2_28.png" /> Morán<br />\
    <img src="styles/legend/suelos__2_29.png" /> Osuna<br />\
    <img src="styles/legend/suelos__2_30.png" /> Pacaya<br />\
    <img src="styles/legend/suelos__2_31.png" /> Palín<br />\
    <img src="styles/legend/suelos__2_32.png" /> Panán<br />\
    <img src="styles/legend/suelos__2_33.png" /> Patzicía<br />\
    <img src="styles/legend/suelos__2_34.png" /> Patzité<br />\
    <img src="styles/legend/suelos__2_35.png" /> Pinula<br />\
    <img src="styles/legend/suelos__2_36.png" /> Poaquil<br />\
    <img src="styles/legend/suelos__2_37.png" /> Quiché<br />\
    <img src="styles/legend/suelos__2_38.png" /> Salamá<br />\
    <img src="styles/legend/suelos__2_39.png" /> Salamá fase quebrada<br />\
    <img src="styles/legend/suelos__2_40.png" /> Samayac<br />\
    <img src="styles/legend/suelos__2_41.png" /> Subinal<br />\
    <img src="styles/legend/suelos__2_42.png" /> Suchitepequez<br />\
    <img src="styles/legend/suelos__2_43.png" /> Suelos Aluviales<br />\
    <img src="styles/legend/suelos__2_44.png" /> Suelos de los valles<br />\
    <img src="styles/legend/suelos__2_45.png" /> Taxisco<br />\
    <img src="styles/legend/suelos__2_46.png" /> Tecpán<br />\
    <img src="styles/legend/suelos__2_47.png" /> Tolimán<br />\
    <img src="styles/legend/suelos__2_48.png" /> Totonicapán<br />\
    <img src="styles/legend/suelos__2_49.png" /> Yepocapa<br />\
    <img src="styles/legend/suelos__2_50.png" /> Zacualpa<br />\
    <img src="styles/legend/suelos__2_51.png" /> <br />' });
var format_CAPACIDADDEUSO_3 = new ol.format.GeoJSON();
var features_CAPACIDADDEUSO_3 = format_CAPACIDADDEUSO_3.readFeatures(json_CAPACIDADDEUSO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:103598'});
var jsonSource_CAPACIDADDEUSO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAPACIDADDEUSO_3.addFeatures(features_CAPACIDADDEUSO_3);
var lyr_CAPACIDADDEUSO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAPACIDADDEUSO_3, 
                style: style_CAPACIDADDEUSO_3,
                popuplayertitle: 'CAPACIDAD DE USO',
                interactive: true,
    title: 'CAPACIDAD DE USO<br />\
    <img src="styles/legend/CAPACIDADDEUSO_3_0.png" /> Agricultura con Mejoras<br />\
    <img src="styles/legend/CAPACIDADDEUSO_3_1.png" /> Agricultura sin  Limitaciones<br />\
    <img src="styles/legend/CAPACIDADDEUSO_3_2.png" /> Agricultura sin limitaciones<br />\
    <img src="styles/legend/CAPACIDADDEUSO_3_3.png" /> Agroforesteria con cultivos anuales<br />\
    <img src="styles/legend/CAPACIDADDEUSO_3_4.png" /> Agroforesteria con cultivos permanentes<br />\
    <img src="styles/legend/CAPACIDADDEUSO_3_5.png" /> Agua<br />\
    <img src="styles/legend/CAPACIDADDEUSO_3_6.png" /> Areas Protegidas de Proteccion<br />\
    <img src="styles/legend/CAPACIDADDEUSO_3_7.png" /> Sistemas Silvopastoriles<br />\
    <img src="styles/legend/CAPACIDADDEUSO_3_8.png" /> Tierras Forestales de Producción<br />\
    <img src="styles/legend/CAPACIDADDEUSO_3_9.png" /> Tierras Forestales de Proteccion<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_ICTA_FRIJOL_1.setVisible(true);lyr_suelos__2.setVisible(true);lyr_CAPACIDADDEUSO_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ICTA_FRIJOL_1,lyr_suelos__2,lyr_CAPACIDADDEUSO_3];
lyr_ICTA_FRIJOL_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'FRIJOL_V': 'FRIJOL_V', 'maiz_varie': 'maiz_varie', });
lyr_suelos__2.set('fieldAliases', {'SIMBOLO': 'SIMBOLO', 'AERA__KM2_': 'AERA__KM2_', 'SERIE': 'SERIE', 'MAT_ORIG': 'MAT_ORIG', 'ALTITUD': 'ALTITUD', 'ALT_MIN': 'ALT_MIN', 'ALT_MAX': 'ALT_MAX', });
lyr_CAPACIDADDEUSO_3.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'NOMBRE': 'NOMBRE', 'CODIGO': 'CODIGO', 'HECTARES': 'HECTARES', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CONTADOR': 'CONTADOR', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'DIFERENCIA': 'DIFERENCIA', });
lyr_ICTA_FRIJOL_1.set('fieldImages', {'fid': '', 'DN': '', 'FRIJOL_V': '', 'maiz_varie': '', });
lyr_suelos__2.set('fieldImages', {'SIMBOLO': 'TextEdit', 'AERA__KM2_': 'TextEdit', 'SERIE': 'TextEdit', 'MAT_ORIG': 'TextEdit', 'ALTITUD': 'TextEdit', 'ALT_MIN': 'Range', 'ALT_MAX': 'Range', });
lyr_CAPACIDADDEUSO_3.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', 'NOMBRE': 'TextEdit', 'CODIGO': 'TextEdit', 'HECTARES': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CONTADOR': 'TextEdit', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', 'DIFERENCIA': 'TextEdit', });
lyr_ICTA_FRIJOL_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'FRIJOL_V': 'inline label - always visible', 'maiz_varie': 'inline label - always visible', });
lyr_suelos__2.set('fieldLabels', {'SIMBOLO': 'no label', 'AERA__KM2_': 'no label', 'SERIE': 'inline label - always visible', 'MAT_ORIG': 'no label', 'ALTITUD': 'no label', 'ALT_MIN': 'no label', 'ALT_MAX': 'no label', });
lyr_CAPACIDADDEUSO_3.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', 'NOMBRE': 'inline label - always visible', 'CODIGO': 'no label', 'HECTARES': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'CONTADOR': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', 'DIFERENCIA': 'no label', });
lyr_CAPACIDADDEUSO_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
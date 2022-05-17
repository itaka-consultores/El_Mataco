var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'GoogleSatellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_El_Mataco_1 = new ol.format.GeoJSON();
var features_El_Mataco_1 = format_El_Mataco_1.readFeatures(json_El_Mataco_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_El_Mataco_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_El_Mataco_1.addFeatures(features_El_Mataco_1);
var lyr_El_Mataco_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_El_Mataco_1, 
                style: style_El_Mataco_1,
                interactive: true,
    title: 'El_Mataco<br />\
    <img src="styles/legend/El_Mataco_1_0.png" /> 01<br />\
    <img src="styles/legend/El_Mataco_1_1.png" /> 02<br />\
    <img src="styles/legend/El_Mataco_1_2.png" /> 03<br />\
    <img src="styles/legend/El_Mataco_1_3.png" /> 04<br />\
    <img src="styles/legend/El_Mataco_1_4.png" /> 05<br />\
    <img src="styles/legend/El_Mataco_1_5.png" /> 06<br />\
    <img src="styles/legend/El_Mataco_1_6.png" /> 07<br />\
    <img src="styles/legend/El_Mataco_1_7.png" /> 08<br />\
    <img src="styles/legend/El_Mataco_1_8.png" /> 09<br />\
    <img src="styles/legend/El_Mataco_1_9.png" /> 10<br />\
    <img src="styles/legend/El_Mataco_1_10.png" /> 11<br />\
    <img src="styles/legend/El_Mataco_1_11.png" /> 12<br />\
    <img src="styles/legend/El_Mataco_1_12.png" /> 13<br />\
    <img src="styles/legend/El_Mataco_1_13.png" /> 14<br />\
    <img src="styles/legend/El_Mataco_1_14.png" /> 15<br />\
    <img src="styles/legend/El_Mataco_1_15.png" /> 16<br />\
    <img src="styles/legend/El_Mataco_1_16.png" /> 17<br />\
    <img src="styles/legend/El_Mataco_1_17.png" /> 18<br />\
    <img src="styles/legend/El_Mataco_1_18.png" /> 19<br />\
    <img src="styles/legend/El_Mataco_1_19.png" /> 20<br />\
    <img src="styles/legend/El_Mataco_1_20.png" /> 21<br />\
    <img src="styles/legend/El_Mataco_1_21.png" /> 22<br />\
    <img src="styles/legend/El_Mataco_1_22.png" /> 23<br />\
    <img src="styles/legend/El_Mataco_1_23.png" /> 24<br />\
    <img src="styles/legend/El_Mataco_1_24.png" /> 25<br />\
    <img src="styles/legend/El_Mataco_1_25.png" /> 26<br />\
    <img src="styles/legend/El_Mataco_1_26.png" /> <br />'
        });
var format_Contours_2 = new ol.format.GeoJSON();
var features_Contours_2 = format_Contours_2.readFeatures(json_Contours_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_2.addFeatures(features_Contours_2);
var lyr_Contours_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contours_2, 
                style: style_Contours_2,
                interactive: true,
    title: 'Contours<br />\
    <img src="styles/legend/Contours_2_0.png" /> 190<br />\
    <img src="styles/legend/Contours_2_1.png" /> 200<br />\
    <img src="styles/legend/Contours_2_2.png" /> 210<br />\
    <img src="styles/legend/Contours_2_3.png" /> 220<br />\
    <img src="styles/legend/Contours_2_4.png" /> 230<br />\
    <img src="styles/legend/Contours_2_5.png" /> 240<br />\
    <img src="styles/legend/Contours_2_6.png" /> 250<br />\
    <img src="styles/legend/Contours_2_7.png" /> 260<br />\
    <img src="styles/legend/Contours_2_8.png" /> 270<br />\
    <img src="styles/legend/Contours_2_9.png" /> 280<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_El_Mataco_1.setVisible(true);lyr_Contours_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_El_Mataco_1,lyr_Contours_2];
lyr_El_Mataco_1.set('fieldAliases', {'productor': 'productor', 'campo': 'campo', 'lote': 'lote', 'id_lote': 'id_lote', });
lyr_Contours_2.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_El_Mataco_1.set('fieldImages', {'productor': 'TextEdit', 'campo': 'TextEdit', 'lote': 'TextEdit', 'id_lote': 'TextEdit', });
lyr_Contours_2.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_El_Mataco_1.set('fieldLabels', {'productor': 'inline label', 'campo': 'inline label', 'lote': 'inline label', 'id_lote': 'header label', });
lyr_Contours_2.set('fieldLabels', {'ID': 'no label', 'ELEV': 'header label', });
lyr_Contours_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
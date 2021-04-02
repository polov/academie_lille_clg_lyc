var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Quartierprioritaire_1 = new ol.format.GeoJSON();
var features_Quartierprioritaire_1 = format_Quartierprioritaire_1.readFeatures(json_Quartierprioritaire_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quartierprioritaire_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quartierprioritaire_1.addFeatures(features_Quartierprioritaire_1);
var lyr_Quartierprioritaire_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Quartierprioritaire_1, 
                style: style_Quartierprioritaire_1,
                interactive: true,
                title: '<img src="styles/legend/Quartierprioritaire_1.png" /> Quartier prioritaire'
            });
var format_CollgeLycehorsREP_2 = new ol.format.GeoJSON();
var features_CollgeLycehorsREP_2 = format_CollgeLycehorsREP_2.readFeatures(json_CollgeLycehorsREP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CollgeLycehorsREP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CollgeLycehorsREP_2.addFeatures(features_CollgeLycehorsREP_2);
var lyr_CollgeLycehorsREP_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CollgeLycehorsREP_2, 
                style: style_CollgeLycehorsREP_2,
                interactive: true,
                title: '<img src="styles/legend/CollgeLycehorsREP_2.png" /> Collège / Lycée hors REP'
            });
var format_CollgeREPREP_3 = new ol.format.GeoJSON();
var features_CollgeREPREP_3 = format_CollgeREPREP_3.readFeatures(json_CollgeREPREP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CollgeREPREP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CollgeREPREP_3.addFeatures(features_CollgeREPREP_3);
var lyr_CollgeREPREP_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CollgeREPREP_3, 
                style: style_CollgeREPREP_3,
                interactive: true,
                title: '<img src="styles/legend/CollgeREPREP_3.png" /> Collège REP /REP + '
            });

lyr_OSMStandard_0.setVisible(true);lyr_Quartierprioritaire_1.setVisible(true);lyr_CollgeLycehorsREP_2.setVisible(true);lyr_CollgeREPREP_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Quartierprioritaire_1,lyr_CollgeLycehorsREP_2,lyr_CollgeREPREP_3];
lyr_Quartierprioritaire_1.set('fieldAliases', {'CODE_QP': 'CODE_QP', 'NOM_QP': 'NOM_QP', 'COMMUNE_QP': 'COMMUNE_QP', });
lyr_CollgeLycehorsREP_2.set('fieldAliases', {'Code etablissement': 'Code etablissement', 'Nature': 'Nature', 'Nom': 'Nom', 'CP': 'CP', 'Commune': 'Commune', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Classement REP': 'Classement REP', });
lyr_CollgeREPREP_3.set('fieldAliases', {'Code etablissement': 'Code etablissement', 'Nature': 'Nature', 'Nom': 'Nom', 'CP': 'CP', 'Commune': 'Commune', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Classement REP': 'Classement REP', });
lyr_Quartierprioritaire_1.set('fieldImages', {'CODE_QP': 'TextEdit', 'NOM_QP': 'TextEdit', 'COMMUNE_QP': 'TextEdit', });
lyr_CollgeLycehorsREP_2.set('fieldImages', {'Code etablissement': '', 'Nature': '', 'Nom': '', 'CP': '', 'Commune': '', 'Latitude': '', 'Longitude': '', 'Classement REP': '', });
lyr_CollgeREPREP_3.set('fieldImages', {'Code etablissement': '', 'Nature': '', 'Nom': '', 'CP': '', 'Commune': '', 'Latitude': '', 'Longitude': '', 'Classement REP': '', });
lyr_Quartierprioritaire_1.set('fieldLabels', {'CODE_QP': 'no label', 'NOM_QP': 'no label', 'COMMUNE_QP': 'inline label', });
lyr_CollgeLycehorsREP_2.set('fieldLabels', {'Code etablissement': 'no label', 'Nature': 'header label', 'Nom': 'inline label', 'CP': 'no label', 'Commune': 'inline label', 'Latitude': 'no label', 'Longitude': 'no label', 'Classement REP': 'inline label', });
lyr_CollgeREPREP_3.set('fieldLabels', {'Code etablissement': 'no label', 'Nature': 'header label', 'Nom': 'header label', 'CP': 'no label', 'Commune': 'inline label', 'Latitude': 'no label', 'Longitude': 'no label', 'Classement REP': 'header label', });
lyr_CollgeREPREP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
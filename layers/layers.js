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
var format_Collgeslyces_2 = new ol.format.GeoJSON();
var features_Collgeslyces_2 = format_Collgeslyces_2.readFeatures(json_Collgeslyces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Collgeslyces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Collgeslyces_2.addFeatures(features_Collgeslyces_2);
var lyr_Collgeslyces_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Collgeslyces_2, 
                style: style_Collgeslyces_2,
                interactive: true,
                title: '<img src="styles/legend/Collgeslyces_2.png" /> Collèges & lycées '
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
                title: '<img src="styles/legend/CollgeREPREP_3.png" /> Collège REP / REP +'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Quartierprioritaire_1.setVisible(true);lyr_Collgeslyces_2.setVisible(true);lyr_CollgeREPREP_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Quartierprioritaire_1,lyr_Collgeslyces_2,lyr_CollgeREPREP_3];
lyr_Quartierprioritaire_1.set('fieldAliases', {'CODE_QP': 'CODE_QP', 'NOM_QP': 'NOM_QP', 'COMMUNE_QP': 'COMMUNE_QP', });
lyr_Collgeslyces_2.set('fieldAliases', {'Code etablissement': 'Code etablissement', 'Nature': 'Nature', 'Patronyme uai': 'Patronyme uai', 'Code postal': 'Code postal', 'Localite d\'acheminement': 'Localite d\'acheminement', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CollgeREPREP_3.set('fieldAliases', {'Code': 'Code', 'Nom': 'Nom', 'Classement_Education_prioritaire': 'Classement_Education_prioritaire', 'Commune': 'Commune', 'Code_commune': 'Code_commune', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Quartierprioritaire_1.set('fieldImages', {'CODE_QP': 'TextEdit', 'NOM_QP': 'TextEdit', 'COMMUNE_QP': 'TextEdit', });
lyr_Collgeslyces_2.set('fieldImages', {'Code etablissement': '', 'Nature': '', 'Patronyme uai': '', 'Code postal': '', 'Localite d\'acheminement': '', 'Latitude': '', 'Longitude': '', });
lyr_CollgeREPREP_3.set('fieldImages', {'Code': '', 'Nom': '', 'Classement_Education_prioritaire': '', 'Commune': '', 'Code_commune': '', 'latitude': '', 'longitude': '', });
lyr_Quartierprioritaire_1.set('fieldLabels', {'CODE_QP': 'no label', 'NOM_QP': 'no label', 'COMMUNE_QP': 'no label', });
lyr_Collgeslyces_2.set('fieldLabels', {'Code etablissement': 'no label', 'Nature': 'no label', 'Patronyme uai': 'no label', 'Code postal': 'no label', 'Localite d\'acheminement': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_CollgeREPREP_3.set('fieldLabels', {'Code': 'no label', 'Nom': 'no label', 'Classement_Education_prioritaire': 'no label', 'Commune': 'no label', 'Code_commune': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CollgeREPREP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
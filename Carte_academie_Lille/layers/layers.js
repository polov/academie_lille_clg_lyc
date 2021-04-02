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
                interactive: false,
                title: '<img src="styles/legend/Quartierprioritaire_1.png" /> Quartier prioritaire'
            });
var format_CollgeetLyce_2 = new ol.format.GeoJSON();
var features_CollgeetLyce_2 = format_CollgeetLyce_2.readFeatures(json_CollgeetLyce_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CollgeetLyce_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CollgeetLyce_2.addFeatures(features_CollgeetLyce_2);
var lyr_CollgeetLyce_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CollgeetLyce_2, 
                style: style_CollgeetLyce_2,
                interactive: true,
                title: '<img src="styles/legend/CollgeetLyce_2.png" /> Collège et Lycée'
            });
var format_CollgeenREPREP_3 = new ol.format.GeoJSON();
var features_CollgeenREPREP_3 = format_CollgeenREPREP_3.readFeatures(json_CollgeenREPREP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CollgeenREPREP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CollgeenREPREP_3.addFeatures(features_CollgeenREPREP_3);
var lyr_CollgeenREPREP_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CollgeenREPREP_3, 
                style: style_CollgeenREPREP_3,
                interactive: true,
                title: '<img src="styles/legend/CollgeenREPREP_3.png" /> Collège en REP / REP + '
            });

lyr_OSMStandard_0.setVisible(true);lyr_Quartierprioritaire_1.setVisible(true);lyr_CollgeetLyce_2.setVisible(true);lyr_CollgeenREPREP_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Quartierprioritaire_1,lyr_CollgeetLyce_2,lyr_CollgeenREPREP_3];
lyr_Quartierprioritaire_1.set('fieldAliases', {'CODE_QP': 'CODE_QP', 'NOM_QP': 'NOM_QP', 'COMMUNE_QP': 'COMMUNE_QP', });
lyr_CollgeetLyce_2.set('fieldAliases', {'Code établissement': 'Code établissement', 'Appellation officielle': 'Appellation officielle', 'Dénomination principale': 'Dénomination principale', 'Patronyme uai': 'Patronyme uai', 'Secteur Public/Privé': 'Secteur Public/Privé', 'Adresse': 'Adresse', 'Lieu dit': 'Lieu dit', 'Boite postale': 'Boite postale', 'Code postal': 'Code postal', 'Localite d\'acheminement': 'Localite d\'acheminement', 'Commune': 'Commune', 'Coordonnee X': 'Coordonnee X', 'Coordonnee Y': 'Coordonnee Y', 'EPSG': 'EPSG', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Qualité d\'appariement': 'Qualité d\'appariement', 'Localisation': 'Localisation', 'Code nature': 'Code nature', 'Nature': 'Nature', 'Code état établissement': 'Code état établissement', 'Etat établissement': 'Etat établissement', 'Code département': 'Code département', 'Code région': 'Code région', 'Code académie': 'Code académie', 'Code commune': 'Code commune', 'Département': 'Département', 'Région': 'Région', 'Académie': 'Académie', 'Position': 'Position', 'secteur_prive_code_type_contrat': 'secteur_prive_code_type_contrat', 'secteur_prive_libelle_type_contrat': 'secteur_prive_libelle_type_contrat', 'code_ministere': 'code_ministere', 'libelle_ministere': 'libelle_ministere', 'date_ouverture': 'date_ouverture', });
lyr_CollgeenREPREP_3.set('fieldAliases', {'Annee': 'Annee', 'UAI': 'UAI', 'Region': 'Region', 'Code_region': 'Code_region', 'Département': 'Département', 'Académie': 'Académie', 'Code académie': 'Code académie', 'Code_departement': 'Code_departement', 'Commune': 'Commune', 'Code_commune': 'Code_commune', 'Collège tête de réseau': 'Collège tête de réseau', 'Classement_Education_prioritaire': 'Classement_Education_prioritaire', 'latitude': 'latitude', 'longitude': 'longitude', 'position': 'position', });
lyr_Quartierprioritaire_1.set('fieldImages', {'CODE_QP': 'TextEdit', 'NOM_QP': 'TextEdit', 'COMMUNE_QP': 'TextEdit', });
lyr_CollgeetLyce_2.set('fieldImages', {'Code établissement': '', 'Appellation officielle': '', 'Dénomination principale': '', 'Patronyme uai': '', 'Secteur Public/Privé': '', 'Adresse': '', 'Lieu dit': '', 'Boite postale': '', 'Code postal': '', 'Localite d\'acheminement': '', 'Commune': '', 'Coordonnee X': '', 'Coordonnee Y': '', 'EPSG': '', 'Latitude': '', 'Longitude': '', 'Qualité d\'appariement': '', 'Localisation': '', 'Code nature': '', 'Nature': '', 'Code état établissement': '', 'Etat établissement': '', 'Code département': '', 'Code région': '', 'Code académie': '', 'Code commune': '', 'Département': '', 'Région': '', 'Académie': '', 'Position': '', 'secteur_prive_code_type_contrat': '', 'secteur_prive_libelle_type_contrat': '', 'code_ministere': '', 'libelle_ministere': '', 'date_ouverture': '', });
lyr_CollgeenREPREP_3.set('fieldImages', {'Annee': '', 'UAI': '', 'Region': '', 'Code_region': '', 'Département': '', 'Académie': '', 'Code académie': '', 'Code_departement': '', 'Commune': '', 'Code_commune': '', 'Collège tête de réseau': '', 'Classement_Education_prioritaire': '', 'latitude': '', 'longitude': '', 'position': '', });
lyr_Quartierprioritaire_1.set('fieldLabels', {'CODE_QP': 'no label', 'NOM_QP': 'no label', 'COMMUNE_QP': 'no label', });
lyr_CollgeetLyce_2.set('fieldLabels', {'Code établissement': 'inline label', 'Appellation officielle': 'inline label', 'Dénomination principale': 'no label', 'Patronyme uai': 'no label', 'Secteur Public/Privé': 'no label', 'Adresse': 'no label', 'Lieu dit': 'no label', 'Boite postale': 'no label', 'Code postal': 'no label', 'Localite d\'acheminement': 'no label', 'Commune': 'inline label', 'Coordonnee X': 'no label', 'Coordonnee Y': 'no label', 'EPSG': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Qualité d\'appariement': 'no label', 'Localisation': 'no label', 'Code nature': 'no label', 'Nature': 'no label', 'Code état établissement': 'no label', 'Etat établissement': 'no label', 'Code département': 'no label', 'Code région': 'no label', 'Code académie': 'no label', 'Code commune': 'no label', 'Département': 'no label', 'Région': 'no label', 'Académie': 'no label', 'Position': 'no label', 'secteur_prive_code_type_contrat': 'no label', 'secteur_prive_libelle_type_contrat': 'no label', 'code_ministere': 'no label', 'libelle_ministere': 'no label', 'date_ouverture': 'no label', });
lyr_CollgeenREPREP_3.set('fieldLabels', {'Annee': 'no label', 'UAI': 'no label', 'Region': 'no label', 'Code_region': 'no label', 'Département': 'no label', 'Académie': 'no label', 'Code académie': 'no label', 'Code_departement': 'no label', 'Commune': 'inline label', 'Code_commune': 'no label', 'Collège tête de réseau': 'inline label', 'Classement_Education_prioritaire': 'inline label', 'latitude': 'no label', 'longitude': 'no label', 'position': 'no label', });
lyr_CollgeenREPREP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
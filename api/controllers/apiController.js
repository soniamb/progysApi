'use strict';
var sync_request = require("sync-request");
var sql = require('../db/db');

exports.addAction = function (req, res) {
    var ret = {'status': 500, 'type': null, 'data': null, 'error': null, message: null};

    var code = req.body.code;
    var type = req.body.type;
    var priorite = req.body.priorite;
    var demandeur = req.body.demandeur;
    var prov_de = req.body.prov_de;
    var analy_causes = req.body.analy_causes;
    var categorie = req.body.categorie;
    var desc_prob = req.body.desc_prob;
    var code_origine = req.body.code_origine;
    var taux_realisation = req.body.taux_realisation;
    var taux_efficacite = req.body.taux_efficacite;
    var observation = req.body.observation;
    var etat = req.body.etat;
    var date_cloture = req.body.date_cloture;
    var observation_cloture = req.body.observation_cloture;


    var requete = "INSERT INTO actions " +
        "(code, type, priorite, demandeur, prov_de, analy_causes, categorie, desc_prob, code_origine,taux_realisation," +
        "taux_efficacite, observation, etat, date_cloture, observation_cloture)" +
        " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    sql.query(requete, [code, type, priorite, demandeur, prov_de, analy_causes, categorie,
        desc_prob, code_origine, taux_realisation, taux_efficacite, observation, etat, date_cloture, observation_cloture], function (err, result) {
        if (err) {
            ret.status = 500;
            ret.error = err;
            ret.message = 'error on insert record in mysql data base';

        } else {
            ret.status = 200;
            ret.message = '1 record inserted';
        }
        res.status(ret.status);
        res.json(ret);

    });


};

exports.listOfActions = function (req, res) {
    var ret = {'status': 500, 'type': null, 'data': null, 'error': null, message: null};

    var requete = "SELECT * FROM actions";

    sql.query(requete, [], function (err, result) {
        if (err) {
            ret.status = 500;
            ret.error = err;
            ret.message = 'error get data from mysql data base';

        } else {
            ret.status = 200;
            ret.data = result;
            ret.message = 'All data recieved';
        }
        res.status(ret.status);
        res.json(ret);

    });


};

exports.updateAction = function (req, res) {

    var ret = {'status': 500, 'type': null, 'data': null, 'error': null, message: null};
    var id = req.body.id;
    var code = req.body.code;
    var type = req.body.type;
    var priorite = req.body.priorite;
    var demandeur = req.body.demandeur;
    var prov_de = req.body.prov_de;
    var analy_causes = req.body.analy_causes;
    var categorie = req.body.categorie;
    var desc_prob = req.body.desc_prob;
    var code_origine = req.body.code_origine;
    var taux_realisation = req.body.taux_realisation;
    var taux_efficacite = req.body.taux_efficacite;
    var observation = req.body.observation;
    var etat = req.body.etat;
    var date_cloture = req.body.date_cloture;
    var observation_cloture = req.body.observation_cloture;

    var requete = "UPDATE actions SET code = ?, type = ?, priorite = ?, demandeur = ?, prov_de = ?, analy_causes = ?, " +
        "categorie = ?, desc_prob = ?, code_origine = ?,taux_realisation = ?," +
        "taux_efficacite = ?, observation = ?, etat = ?, date_cloture = ?, observation_cloture = ? WHERE id = ?";

    sql.query(requete, [code, type, priorite, demandeur, prov_de, analy_causes, categorie,
        desc_prob, code_origine, taux_realisation, taux_efficacite, observation, etat, date_cloture, observation_cloture, id], function (err, result) {
        if (err) {
            ret.status = 500;
            ret.error = err;
            ret.message = 'error on update record in mysql data base';

        } else {
            ret.status = 200;
            ret.message = '1 record updated';
        }
        res.status(ret.status);
        res.json(ret);

    });
};


exports.addDetailAction = function (req, res) {
    var ret = {'status': 500, 'type': null, 'data': null, 'error': null, message: null};

    var id_action = req.body.id_action;
    var numero = req.body.numero;
    var type = req.body.type;
    var actiontxt = req.body.actiontxt;
    var observation = req.body.observation;
    var resp_realisation = req.body.resp_realisation;
    var date_debut_reel = req.body.date_debut_reel;
    var date_debut_prevu = req.body.date_debut_prevu;
    var date_fin_reel = req.body.date_fin_reel;
    var date_fin_prevu = req.body.date_fin_prevu;
    var realisationtxt = req.body.realisationtxt;
    var obser_realisation = req.body.obser_realisation;
    var resp_suivi = req.body.resp_suivi;
    var date_suivi = req.body.date_suivi;
    var taux_realisation = req.body.taux_realisation;
    var etat_action = req.body.etat_action;
    var obser_suivi = req.body.obser_suivi;
    var resp_mesure_efficacite = req.body.resp_mesure_efficacite;
    var date_mesure = req.body.date_mesure;
    var taux_efficacite = req.body.taux_efficacite;
    var etat_efficacite = req.body.etat_efficacite;
    var obser_efficacite = req.body.obser_efficacite;
    var cout_MO_Previs = req.body.cout_MO_Previs;
    var cout_MO_Reel = req.body.cout_MO_Reel;
    var cout_Materiel_Previs = req.body.cout_Materiel_Previs;
    var cout_Materiel_Reel = req.body.cout_Materiel_Reel;


    var requete = "INSERT INTO detail_action " +
        "(id_action, numero, type, actiontxt, observation, resp_realisation, date_debut_reel, date_debut_prevu, date_fin_reel,date_fin_prevu," +
        "realisationtxt, obser_realisation, resp_suivi, date_suivi,taux_realisation, etat_action,obser_suivi,resp_mesure_efficacite,date_mesure,taux_efficacite," +
        "etat_efficacite,obser_efficacite,cout_MO_Previs,cout_MO_Reel,cout_Materiel_Previs,cout_Materiel_Reel)" +
        " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    sql.query(requete, [id_action, numero, type, actiontxt, observation, resp_realisation, date_debut_reel, date_debut_prevu, date_fin_reel, date_fin_prevu,
        realisationtxt, obser_realisation, resp_suivi, date_suivi, taux_realisation, etat_action, obser_suivi, resp_mesure_efficacite, date_mesure, taux_efficacite,
        etat_efficacite, obser_efficacite, cout_MO_Previs, cout_MO_Reel, cout_Materiel_Previs, cout_Materiel_Reel], function (err, result) {
        if (err) {
            ret.status = 500;
            ret.error = err;
            ret.message = 'error on insert record in mysql data base';

        } else {
            ret.status = 200;
            ret.message = '1 record inserted';
        }
        res.status(ret.status);
        res.json(ret);

    });


};

exports.updateDetailAction = function (req, res) {

    var ret = {'status': 500, 'type': null, 'data': null, 'error': null, message: null};
    var id = req.body.id;
    var id_action = req.body.id_action;
    var numero = req.body.numero;
    var type = req.body.type;
    var actiontxt = req.body.actiontxt;
    var observation = req.body.observation;
    var resp_realisation = req.body.resp_realisation;
    var date_debut_reel = req.body.date_debut_reel;
    var date_debut_prevu = req.body.date_debut_prevu;
    var date_fin_reel = req.body.date_fin_reel;
    var date_fin_prevu = req.body.date_fin_prevu;
    var realisationtxt = req.body.realisationtxt;
    var obser_realisation = req.body.obser_realisation;
    var resp_suivi = req.body.resp_suivi;
    var date_suivi = req.body.date_suivi;
    var taux_realisation = req.body.taux_realisation;
    var etat_action = req.body.etat_action;
    var obser_suivi = req.body.obser_suivi;
    var resp_mesure_efficacite = req.body.resp_mesure_efficacite;
    var date_mesure = req.body.date_mesure;
    var taux_efficacite = req.body.taux_efficacite;
    var etat_efficacite = req.body.etat_efficacite;
    var obser_efficacite = req.body.obser_efficacite;
    var cout_MO_Previs = req.body.cout_MO_Previs;
    var cout_MO_Reel = req.body.cout_MO_Reel;
    var cout_Materiel_Previs = req.body.cout_Materiel_Previs;
    var cout_Materiel_Reel = req.body.cout_Materiel_Reel;

    var requete = "UPDATE detail_action SET id_action = ?, numero = ?, type = ?, actiontxt = ?, observation = ?, resp_realisation = ?, " +
        "date_debut_reel = ?, date_debut_prevu = ?, date_fin_reel = ?,date_fin_prevu = ?," +
        "realisationtxt = ?, obser_realisation = ?, resp_suivi = ?, date_suivi = ?, taux_realisation = ?, "+
        "etat_action = ?, obser_suivi = ?, resp_mesure_efficacite = ?, date_mesure = ?, taux_efficacite = ?, "+
        "etat_efficacite = ?, obser_efficacite = ?, cout_MO_Previs = ?, cout_MO_Reel = ?, cout_Materiel_Previs = ?, cout_Materiel_Reel = ?  WHERE id = ?";

    sql.query(requete, [id_action, numero, type, actiontxt, observation, resp_realisation, date_debut_reel, date_debut_prevu, date_fin_reel, date_fin_prevu,
        realisationtxt, obser_realisation, resp_suivi, date_suivi, taux_realisation, etat_action, obser_suivi, resp_mesure_efficacite, date_mesure, taux_efficacite,
        etat_efficacite, obser_efficacite, cout_MO_Previs, cout_MO_Reel, cout_Materiel_Previs, cout_Materiel_Reel,id], function (err, result) {
        if (err) {
            ret.status = 500;
            ret.error = err;
            ret.message = 'error on update record in mysql data base';

        } else {
            ret.status = 200;
            ret.message = '1 record updated';
        }
        res.status(ret.status);
        res.json(ret);

    });
};


exports.detailActionList = function (req, res) {
    var ret = {'status': 500, 'type': null, 'data': null, 'error': null, message: null};
    var id_action = req.params.id_action;

    var requete = "SELECT * FROM detail_action WHERE id_action = ?";

    sql.query(requete, [id_action], function (err, result) {
        if (err) {
            ret.status = 500;
            ret.error = err;
            ret.message = 'error get data from mysql data base';

        } else {
            ret.status = 200;
            ret.data = result;
            ret.message = 'All data recieved';
        }
        res.status(ret.status);
        res.json(ret);

    });


};


exports.uploadDoc = function (req, res) {

    var ret = {'status': 500, 'type': null, 'data': null, 'error': null, message: null};

    if (Object.keys(req.files).length === 0) {
        ret.message = 'No files were uploaded.';
        res.status(ret.status);
        res.json(ret);

    } else {
        let sampleFile = req.files.doc_action;
        ret.data = {};

                let requete = "INSERT INTO action_docs (id_action, nom, type, path) VALUES(?,?,?,?)";

                let id_action = req.body.id_action;
                let nom = req.files.doc_action.name;
                let type = req.files.doc_action.mimetype;
                let path = req.body.path;

                sql.query(requete, [id_action, nom, type, path], function (err, result) {
                    if (err) {
                        ret.status = 500;
                        ret.error = err;
                        ret.message = 'error on insert record in mysql data base';

                    } else {
                        ret.status = 200;
                        ret.message = '1 file detail inserted';
                    }
                    res.status(ret.status);
                    res.json(ret);

                });


    }
};


exports.docsActionList = function (req, res) {
    var ret = {'status': 500, 'type': null, 'data': null, 'error': null, message: null};
    var id_action = req.params.id_action;

    var requete = "SELECT * FROM action_docs WHERE id_action = ?";

    sql.query(requete, [id_action], function (err, result) {
        if (err) {
            ret.status = 500;
            ret.error = err;
            ret.message = 'error get data from mysql data base';

        } else {
            ret.status = 200;
            ret.data = result;
            ret.message = 'All data recieved';
        }
        res.status(ret.status);
        res.json(ret);

    });
};


exports.deleteDocs = function (req, res) {
    var ret = {'status': 500, 'type': null, 'data': null, 'error': null, message: null};
    var arrayIds = [];

    arrayIds = JSON.parse(req.body.docList);

    for(let i = 0 ; i < arrayIds.length ; i++){

        var requete = "DELETE FROM action_docs WHERE id = ?";

        sql.query(requete, [arrayIds[i]], function (err, result) {
            if (err) {
                ret.status = 500;
                ret.error = err;
                ret.message = 'Delete ERROR';

            } else {
                ret.status = 200;
                ret.data = result;
                ret.message = 'All docs deleted';
            }

        });

    }
    ret.status = 200;
    ret.message = 'All docs deleted';

    res.status(ret.status);
    res.json(ret);

};

exports.deleteDetailsAction = function (req, res) {
    var ret = {'status': 500, 'type': null, 'data': null, 'error': null, message: null};
    var arrayIds = [];

    arrayIds = JSON.parse(req.body.detailActionList);

    for(let i = 0 ; i < arrayIds.length ; i++){

        var requete = "DELETE FROM detail_action WHERE id = ?";

        sql.query(requete, [arrayIds[i]], function (err, result) {
            if (err) {
                ret.status = 500;
                ret.error = err;
                ret.message = 'Delete ERROR';

            } else {
                ret.status = 200;
                ret.data = result;
                ret.message = 'All details action deleted';
            }

        });

    }
    ret.status = 200;
    ret.message = 'All details action deleted';

    res.status(ret.status);
    res.json(ret);

};

exports.deleteActions = function (req, res) {
    var ret = {'status': 500, 'type': null, 'data': null, 'error': null, message: null};
    var arrayIds = [];

    arrayIds = JSON.parse(req.body.actionsList);

    for(let i = 0 ; i < arrayIds.length ; i++){

        var requete = "DELETE FROM actions WHERE id = ?";

        sql.query(requete, [arrayIds[i]], function (err, result) {
            if (err) {
                ret.status = 500;
                ret.error = err;
                ret.message = 'Delete ERROR';

            } else {
                ret.status = 200;
                ret.data = result;
                ret.message = 'All actions deleted';
            }

        });

    }
    ret.status = 200;
    ret.message = 'All actions deleted';

    res.status(ret.status);
    res.json(ret);

};


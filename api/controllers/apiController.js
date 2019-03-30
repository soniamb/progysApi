'use strict';
var sync_request = require("sync-request");
var sql = require('../db/db');

  exports.addAction = function (req, res) {
    var ret = {'status' : 500, 'type' : null, 'data': null, 'error': null,message:null};

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

      sql.query(requete,[code,type,priorite,demandeur,prov_de,analy_causes, categorie,
          desc_prob, code_origine,taux_realisation,taux_efficacite,observation,etat,date_cloture,observation_cloture ], function (err,result) {
          if (err){
              ret.status = 500;
              ret.error = err;
              ret.message = 'error on insert record in mysql data base';

          }else{
              ret.status = 200;
              ret.message = '1 record inserted';
          }
          res.status(ret.status);
          res.json(ret);

      });


  };

exports.listOfActions = function (req, res) {
    var ret = {'status' : 500, 'type' : null, 'data': null, 'error': null,message:null};

        var requete = "SELECT * FROM actions";

        sql.query(requete,[], function (err,result) {
            if (err){
                ret.status = 500;
                ret.error = err;
                ret.message = 'error get data from mysql data base';

            }else{
                ret.status = 200;
                ret.data = result;
                ret.message = 'All data recieved';
            }
            res.status(ret.status);
            res.json(ret);

        });


};


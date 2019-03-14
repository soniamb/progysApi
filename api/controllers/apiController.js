'use strict';
var sync_request = require("sync-request");
var sql = require('../db/db');

  exports.addAction = function (req, res) {
    var ret = {'status' : 500, 'type' : null, 'data': null, 'error': null,message:null};
    var categorie = req.body.categorie;
    var created_at = req.body.date_creation;
    var desc_prob = req.body.desc_prob;
    var code_origine = req.body.code_origine;

    if(categorie && created_at && code_origine && desc_prob)
    {

      var requete = "INSERT INTO actions (categorie, date_creation, desc_prob, code_origine) VALUES(?,?,?,?)";

      sql.query(requete,[ categorie, created_at, desc_prob, code_origine ], function (err,result) {
          if (err){
              ret.status = 501;
              ret.error = err;
              ret.message = 'error on insert record in mysql data base';

          }else{
              ret.status = 200;
              ret.message = '1record inserted';
          }
          res.status(ret.status);
          res.json(ret);

      });

    }else {
      ret.error = "Form data invalid";
      ret.status = 401;
        res.status(ret.status);
        res.json(ret);
    }

  };

exports.listOfActions = function (req, res) {
    var ret = {'status' : 500, 'type' : null, 'data': null, 'error': null,message:null};

        var requete = "SELECT * FROM actions";

        sql.query(requete, function (err,result) {
            if (err){
                ret.status = 501;
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

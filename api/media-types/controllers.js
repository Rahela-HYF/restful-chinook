const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM media_types ORDER by MediaTypeId DESC`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  getOne: (req, res) => {
    const id = req.params.id;

    const sql=`SELECT * FROM media_types WHERE MediaTypeId=${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
   },
  create: (req, res) => {
    // read row data from body
    const newMediaType = req.body; 
    
    const sql = `INSERT INTO media_types (MediaTypeId,Name) VALUES (${newMediaType.MediaTypeId},'${newMediaType.Name}')`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  update: (req, res) => {
    // read row data from body
    const id = req.params.id;
    const updateMediaType= req.body;
  

    const sql = `UPDATE media_types SET Name='${updateMediaType.Name}' WHERE MediaTypeId=${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json("Updated successfully")
    });
  },
  delete: (req, res) => {
    const id= req.params.id;
    const sql=`DELETE FROM media_types WHERE MediaTypeId=${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json("Record deleted successfully")
    });
   }
}

module.exports = controllers;

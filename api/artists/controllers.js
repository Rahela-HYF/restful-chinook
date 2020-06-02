const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM artists ORDER BY ArtistId DESC`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  getOne: (req, res) => { 
    const id =req.params.id;
    const sql=`SELECT * FROM artists WHERE ArtistId= ${id}`;
    
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  create: (req, res) => {
    const newArtist=req.body;
    const sql=`INSERT INTO artists (ArtistId,Name) VALUES (${newArtist.ArtistId},'${newArtist.Name}')`;
    // read row data from body

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
    const id= req.params.id;
    const updateArtist= req.body;

    const sql = `UPDATE artists SET Name='${updateArtist.Name}' WHERE ArtistId=${id}`;
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
    const sql=`DELETE FROM artists WHERE ArtistId=${id}`;
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

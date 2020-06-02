const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM genres ORDER BY GenreId DESC`;

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

    const sql=`SELECT * FROM genres WHERE GenreId=${id}`;
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
    const newGeneres = req.body; 
    
    const sql = `INSERT INTO genres (GenreId,Name) VALUES (${newGeneres.GenreId},'${newGeneres.Name}')`;
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
    const updateGenres= req.body;
   // const updateGenres = req.body;

    const sql = `UPDATE genres SET Name='${updateGenres.Name}' WHERE GenreId=${id}`;
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
    const sql=`DELETE FROM genres WHERE GenreId=${id}`;
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

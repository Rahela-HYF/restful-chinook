const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM albums ORDER BY AlbumId DESC`;

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
  const sql = `SELECT * FROM albums WHERE AlbumId = ${id}`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });

  },
  create: (req, res) => {
    const newAlbum= req.body;
    // read row data from body
    const sql = `INSERT INTO albums (AlbumId,Title,ArtistId) VALUES (${newAlbum.AlbumId},'${newAlbum.Title}'
    ,${newAlbum.ArtistId})`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(sql)
    });
  },
  update: (req, res) => {
    const updateAlbum= req.body;
    const id = req.params.id;

    const sql=`UPDATE albums SET Title ='${updateAlbum.Title}'
    ,ArtistId=${updateAlbum.ArtistId} WHERE AlbumId = ${id}`;
    // read row data from body
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json("Updated successfully")
    });
  },
  delete: (req, res) => {
    const id = req.params.id;

    const sql=`DELETE FROM albums WHERE AlbumId = ${id}`;
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

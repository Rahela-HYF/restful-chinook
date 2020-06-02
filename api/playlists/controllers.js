const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM playlists order by PlaylistId DESC`;

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

    const sql=`SELECT * FROM playlists WHERE PlaylistId=${id}`;
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
    const newPlaylist = req.body; 
    
    const sql = `INSERT INTO playlists (PlaylistId,Name) VALUES (${newPlaylist.PlaylistId},'${newPlaylist.Name}')`;
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
    const updatePlaylists= req.body;

    const sql = `UPDATE playlists SET Name='${updatePlaylists.Name}' WHERE PlaylistId=${id}`;
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
    const sql=`DELETE FROM playlists WHERE PlaylistId=${id}`;
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

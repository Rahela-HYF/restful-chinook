const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM tracks order by TrackId desc`;

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

    const sql=`SELECT * FROM tracks WHERE TrackId=${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
    
   },
  create: (req, res) => {
    const newTrack = req.body; 
    
    const sql = `INSERT INTO tracks (TrackId,Name,AlbumId,MediaTypeId,GenreId,Composer,Milliseconds,Bytes,UnitPrice) 
    VALUES (${newTrack.TrackId},'${newTrack.Name}',${newTrack.AlbumId},${newTrack.MediaTypeId}
   ,${newTrack.GenreId},'${newTrack.Composer}',${newTrack.Milliseconds},${newTrack.Bytes},${newTrack.UnitPrice} )`;
   
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  update: (req, res) => {
    const id = req.params.id;
    const updateTracks= req.body;

   const sql = `UPDATE tracks SET Name='${updateTracks.Name}',AlbumId=${updateTracks.AlbumId},MediaTypeId=${updateTracks.MediaTypeId},
     GenreId=${updateTracks.GenreId},Composer='${updateTracks.Composer}',Milliseconds=${updateTracks.Milliseconds},
     Bytes=${updateTracks.Bytes},UnitPrice=${updateTracks.UnitPrice}
     WHERE TrackId=${id}`;
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
    const sql=`DELETE FROM tracks WHERE TrackId=${id}`;
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

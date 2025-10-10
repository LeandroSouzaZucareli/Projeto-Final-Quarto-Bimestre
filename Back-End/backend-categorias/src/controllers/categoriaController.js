const db = require('../database/connection');

// CREATE
exports.createCategoria = (req, res) => {
  const { nome } = req.body;
  db.query('INSERT INTO categoria (nome) VALUES (?)', [nome], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, nome });
  });
};

// READ
exports.getCategorias = (req, res) => {
  db.query('SELECT * FROM categoria', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// UPDATE
exports.updateCategoria = (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  db.query('UPDATE categoria SET nome = ? WHERE id = ?', [nome, id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
};

// DELETE
exports.deleteCategoria = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM categoria WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
};
const db = require('../database/connection');

// CREATE - Criar novo cliente
exports.createCliente = (req, res) => {
  const { email, senha } = req.body;
  db.query('INSERT INTO clientes (email, senha) VALUES (?, ?)', [email, senha], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, email });
  });
};

// READ - Obter todos os clientes
exports.getClientes = (req, res) => {
  db.query('SELECT * FROM clientes', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// UPDATE - Atualizar os dados de um cliente (por exemplo, email ou senha)
exports.updateCliente = (req, res) => {
  const { id } = req.params;
  const { email, senha } = req.body;
  db.query('UPDATE clientes SET email = ?, senha = ? WHERE id = ?', [email, senha, id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204); // Atualização bem-sucedida sem corpo na resposta
  });
};

// DELETE - Deletar um cliente
exports.deleteCliente = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM clientes WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204); // Exclusão bem-sucedida sem corpo na resposta
  });
};

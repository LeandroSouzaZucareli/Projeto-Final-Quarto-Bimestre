const db = require('../database/connection');

// CREATE - Criar novo funcionario
exports.createFuncionario = (req, res) => {
  const { nome, cpf, senha, atividade } = req.body;
  db.query('INSERT INTO funcionario (nome, cpf, senha, atividade) VALUES (?, ?, ?, ?)', [nome, cpf, senha, atividade], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, cpf });
  });
};

// READ - Obter todos os Funcionario
exports.getFuncionario = (req, res) => {
  db.query('SELECT * FROM funcionario', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// UPDATE - Atualizar os dados de um Funcionario (por exemplo, senha ou atividade)
exports.updateFuncionario = (req, res) => {
  const { id } = req.params;
  const { senha, atividade } = req.body;
  db.query('UPDATE funcionario SET senha = ?, atividade = ? WHERE id = ?', [atividade, senha, id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204); // Atualização bem-sucedida sem corpo na resposta
  });
};

// DELETE - Deletar um cliente
exports.deleteFuncionario = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM funcionario WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204); // Exclusão bem-sucedida sem corpo na resposta
  });
};

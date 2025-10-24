const db = require('../database/connection');

// CREATE
exports.createProdutos = (req, res) => {
  const { nome, descricao, preco, min_estoque, estoque, categoria_fk, id_funcionario } = req.body;

  const sql = `
    INSERT INTO produtos 
      (nome, descricao, preco, min_estoque, estoque, categoria_fk, id_funcionario)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [nome, descricao, preco, min_estoque, estoque, categoria_fk, id_funcionario], (err, result) => {
    if (err) {
      // Verifica se o erro é de chave estrangeira
      if (err.code === 'ER_NO_REFERENCED_ROW_2') {
        return res.status(400).json({ message: 'Categoria ou Funcionário não encontrados (chave estrangeira inválida).' });
      }
      return res.status(500).send(err);
    }

    res.status(201).json({
      id_produtos: result.insertId,
      nome,
      descricao,
      preco,
      min_estoque,
      estoque,
      categoria_fk,
      id_funcionario
    });
  });
};

// READ (todos os produtos)
exports.getProdutos = (req, res) => {
  const sql = `
    SELECT p.*, c.nome AS categoria_nome, f.nome AS funcionario_nome
    FROM produtos p
    LEFT JOIN categoria c ON p.categoria_fk = c.id_categoria
    LEFT JOIN funcionario f ON p.id_funcionario = f.id_funcionario
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// READ (um produto específico)
exports.getProdutoById = (req, res) => {
  const { id } = req.params;
  const sql = `
    SELECT p.*, c.nome AS categoria_nome, f.nome AS funcionario_nome
    FROM produtos p
    LEFT JOIN categoria c ON p.categoria_fk = c.id_categoria
    LEFT JOIN funcionario f ON p.id_funcionario = f.id_funcionario
    WHERE p.id_produtos = ?
  `;
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).json({ message: 'Produto não encontrado' });
    res.json(results[0]);
  });
};

// UPDATE
exports.updateProdutos = (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco, min_estoque, estoque, categoria_fk, id_funcionario } = req.body;

  const sql = `
    UPDATE produtos
    SET nome = ?, descricao = ?, preco = ?, min_estoque = ?, estoque = ?, categoria_fk = ?, id_funcionario = ?
    WHERE id_produtos = ?
  `;

  db.query(sql, [nome, descricao, preco, min_estoque, estoque, categoria_fk, id_funcionario, id], (err, result) => {
    if (err) {
      if (err.code === 'ER_NO_REFERENCED_ROW_2') {
        return res.status(400).json({ message: 'Categoria ou Funcionário não encontrados (chave estrangeira inválida).' });
      }
      return res.status(500).send(err);
    }

    if (result.affectedRows === 0) return res.status(404).json({ message: 'Produto não encontrado' });
    res.sendStatus(204);
  });
};

// DELETE
exports.deleteProdutos = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM produtos WHERE id_produtos = ?';

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Produto não encontrado' });
    res.sendStatus(204);
  });
};

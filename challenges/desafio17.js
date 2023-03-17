// Crie uma query que insira na coleção resumoProdutos um documento com os campos: franquia com o valor McDonalds e totalProdutos com o valor sendo a quantidade total de produtos registrados na coleção produtos.
db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.countDocuments({}),
});

// Crie uma query que retorne os campos franquia e o totalProdutos da coleção resumoProdutos, resultantes da primeira query.
db.resumoProdutos.find({}, { _id: 0, franquia: 1, totalProdutos: 1 });

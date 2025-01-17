// Crie uma query que adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.
db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
);

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });

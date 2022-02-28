const shirtsRouter = require("express").Router();
const { GetShirts, AddShirt, UpdateShirt, DeleteShirt } = require("../controllers/shirts-controller")

shirtsRouter.get("/shirts", GetShirts);
shirtsRouter.post("/shirts", AddShirt);
shirtsRouter.put("/shirts/:id", UpdateShirt);
shirtsRouter.delete("/shirts/:id", DeleteShirt);

module.exports = shirtsRouter;
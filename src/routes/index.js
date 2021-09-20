const {Router} = require("express");
const helloRouter = Router();
const {steve} = require("../controllers");

helloRouter.get("/steve", steve);
helloRouter.post("/steve", steve);

module.exports = helloRouter;

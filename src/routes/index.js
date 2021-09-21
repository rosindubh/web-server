const {Router} = require("express");
const helloRouter = Router();
const {readSteve, addFilm, updateSteve, deleteSteve} = require("../controllers");

helloRouter.get("/steve", readSteve);
helloRouter.post("/steve", addFilm);
helloRouter.put("/steve", updateSteve);
helloRouter.patch("/steve", updateSteve);
helloRouter.delete("/steve", deleteSteve);

module.exports = helloRouter;

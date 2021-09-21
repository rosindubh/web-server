const {Router} = require("express");
const helloRouter = Router();
const {findFilms, addFilm, updateSteve, deleteFilm} = require("../controllers");

helloRouter.get("/steve", findFilms);
helloRouter.post("/steve", addFilm);
helloRouter.put("/steve", updateSteve);
helloRouter.patch("/steve", updateSteve);
helloRouter.delete("/steve", deleteFilm);

module.exports = helloRouter;

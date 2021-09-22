const {Router} = require("express");
const helloRouter = Router();
const {findFilms, addFilm, updateSteve, deleteFilm} = require("../controllers");

helloRouter.get("/films", findFilms);
helloRouter.post("/films", addFilm);
helloRouter.put("/films", updateSteve);
helloRouter.patch("/films", updateSteve);
helloRouter.delete("/films", deleteFilm);

module.exports = helloRouter;

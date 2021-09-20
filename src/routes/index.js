const {Router} = require("express");
const helloRouter = Router();
const {steve, helloWorld} = require("../controllers");

helloRouter.get("/steve", steve);
helloRouter.post("/steve", steve);
helloRouter.put("/steve", steve);
helloRouter.patch("/steve", steve);
helloRouter.delete("/steve", steve);

helloRouter.get("/helloWorld", helloWorld);
helloRouter.post("/helloWorld", helloWorld);
helloRouter.put("/helloWorld", helloWorld);
helloRouter.patch("/helloWorld", helloWorld);
helloRouter.delete("/helloWorld", helloWorld);






module.exports = helloRouter;

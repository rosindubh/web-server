const {Router} = require("express");
const helloRouter = Router();
const {steve, helloWorld, testObj, testPut, testPost, testDelete} = require("../controllers");

helloRouter.get("/steve", steve);

helloRouter.get("/helloWorld", helloWorld);

helloRouter.get("/testObj", testObj);
helloRouter.post("/testPost", testPost);
helloRouter.put("/testPut", testPut);
helloRouter.delete("/testDelete", testDelete);

module.exports = helloRouter;

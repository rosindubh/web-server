const {Router} = require("express");
const helloRouter = Router();
const {steve, helloWorld, testObj, testPut, testPost} = require("../controllers");

helloRouter.get("/steve", steve);


helloRouter.get("/helloWorld", helloWorld);


helloRouter.get("/testObj", testObj);

helloRouter.post("/testPost", testPost);


helloRouter.put("/testPut", testPut);





module.exports = helloRouter;

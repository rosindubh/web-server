const express = require("express");
const app = express();
const helloRouter = require("./routes")
app.use(express.json());

app.use(helloRouter)

app.listen(5000, () => {
    console.log("Listening on port 5000");
});





// const {helloWorld} = require("./controllers")


// app.get("/hello", helloWorld);


// app.get("/hello", (req, res) => {
//     res.send("Hello World!");
// });
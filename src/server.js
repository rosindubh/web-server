const express = require("express");
const app = express();
// const {helloWorld} = require("./controllers")
const helloRouter = require("./routes")
app.use(express.json());

// app.get("/hello", helloWorld);
app.use(helloRouter)
// app.get("/hello", (req, res) => {
//     res.send("Hello World!");
// });

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
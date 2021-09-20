const express = require("express");
const app = express();
const helloRouter = require("./routes")
app.use(express.json());

app.use(helloRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});





// const {helloWorld} = require("./controllers")


// app.get("/hello", helloWorld);


// app.get("/hello", (req, res) => {
//     res.send("Hello World!");
// });
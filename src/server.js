
const express = require("express");
const cors = require("cors");
const app = express();
const helloRouter = require("./routes")
app.use(express.json());
app.use(cors());

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
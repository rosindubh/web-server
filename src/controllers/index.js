// exports.helloWorld = (req, res) => {
//     res.send("Gary Steve Says Hello World!!");
// };

exports.readSteve = (req, res) => {
    const name = req.body.name
    res.send({ message: "sucessful get request"})
};

exports.addSteve = (req, res) => {
    const name = req.body.name;
    res.send({ message: `${name} smells`});
}
 
exports.updateSteve = (req, res) => {
    const update = req.body.name + "2.0";
    res.send({ message: update });
};

exports.deleteSteve = (req, res) => {
    res.send({ message: "successful delete request"})
}
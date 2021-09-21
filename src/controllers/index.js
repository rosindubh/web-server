const Film = require("../models")
exports.readSteve = (req, res) => {
    // const name = req.body.name
    res.json({ message: "sucessful get request"})
};

exports.addFilm = async (req, res) => {
  try {
    const film = new Film(req.body);
    await film.save();
    res.status(200).send({ film: film, message: "Successfully added film" });
  } catch (error) {
    res.status(500).send({ err: error });
  }
};
 
exports.updateSteve = (req, res) => {
    const update = req.body.name + "2.0";
    res.send({ message: update });
};

exports.deleteSteve = (req, res) => {
    res.send({ message: "successful delete request"})
}
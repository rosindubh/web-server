const Film = require("../models")

exports.findFilms = async (req, res) => {
  try {
    const list = await Film.find({});
    res.status(200).send({ allFilms: list });
  } catch (error) {
    res.status(500).send({ err: error });
  }
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

exports.deleteFilm = async (req, res) => {
  try {
    const film = new Film(req.body);
    await Film.findOneAndDelete(film)
    res.status(200).send({ film: film, message: "Successfully deleted film" });
  } catch (error) {
    res.status(500).send({ err: error });
  }  
}
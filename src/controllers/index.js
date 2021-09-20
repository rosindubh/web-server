exports.helloWorld = (req, res) => {
    res.send("Gary Steve Says Hello World!!");
};

exports.steve = (req, res) => {
    const name = req.body.name
    res.send(`${name} smells`)
};

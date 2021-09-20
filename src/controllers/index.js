// exports.helloWorld = (req, res) => {
//     res.send("Gary Steve Says Hello World!!");
// };

exports.steve = (req, res) => {
    const name = req.body.name
    res.send(`${name} smells!!`)
};

exports.helloWorld = (req, res) => {
    const name = req.body.name;
    const day = req.body.day;
    const date = req.body.date;
    const month = req.body.month;
    const add = req.body.add;
    const year = req.body.year;

    res.send(`Phil says, ${name} today is ${day} the ${date}${add} of ${month} ${year}`);
}

const obj = [
    {
        id: 0,
        name: 'phil',
        age: 61,

    }
];

exports.testObj = (req, res) => {
    res.send(obj);
}

exports.testPost = (req, res) => {
    const addEntry = req.body;
    obj.push(addEntry)
    res.send(obj);
}

exports.testPut = (req, res) => {
    const {id, name, age} = req.body;
    obj.map((entry) =>
        entry.id === id
            ? ((entry.name = name),
                (entry.age = age))
            : null
    )
    res.send(obj)
}
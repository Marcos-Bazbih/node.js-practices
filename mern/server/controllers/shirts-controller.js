const Shirt = require("../models/Shirt.js");

const GetShirts = (req, res) => {
    Shirt.find({}).then((data) => {
        res.send(data);
    });
};

const AddShirt = (req, res) => {
    Shirt.create(req.body).then((data) => {
        res.send(`shirt added successfully`);
    });
};

const UpdateShirt = (req, res) => {
    Shirt.findByIdAndUpdate({ _id: req.params.id }, req.body).then((data) => {
        Shirt.findOne({ _id: req.params.id }).then((data) => {
            res.send(data);
        });
    });
};

const DeleteShirt = (req, res) => {
    Shirt.findByIdAndRemove({ _id: req.params.id }).then((data) => {
        res.send(data);
    });
};

module.exports = { GetShirts, AddShirt, UpdateShirt, DeleteShirt };
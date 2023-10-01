const db = require('../models/');
const Household = db.household;

// Create and Save a new Household
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: 'Content can not be empty!' });
        return;
    }

    // Create a Household
    const household = new Household({
        name: req.body.name,
        address: req.body.address,
        postalCode: req.body.postalCode,
        phone: req.body.phone,
        email: req.body.email,
        active: req.body.active ? req.body.active : false,
    });

    // Save Household in the database
    household
        .save(household)
        .then((data) => {
        res.send(data);
        })
        .catch((err) => {
        res.status(500).send({
            message:
            err.message ||
            'Some error occurred while creating the Household.',
        });
    });
}

// Retrieve one Household from the database based on id
exports.findOne = (req, res) => {
    const id = req.params.id;
}

// Update a Household by the id in the request
export.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;


}


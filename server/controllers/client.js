const db = require('../models')
const Client = db.Client

// create adds a new client to the database
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Content cannot be empty!' });
        return;
    }

    const client = new Client({
        householdId: req.body.householdId,
        sex: req.body.sex,
        yearOfBirth: req.body.yearOfBirth,
        isDependent: req.body.isDependent,
        dietaryRestrictions: req.body.dietaryRestrictions,
        idType: req.body.idType,
        idNumber: req.body.idNumber,
    });

    if (req.body.isDependent) {
        client.name = req.body.name;
        client.phone = req.body.phone;
    }

    client.save(client).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'An error occurred while creating the client.'
        });
    }
}

// returns all clients in a household
exports.findAllInHousehold = (req, res) => {
    const householdId = req.query.householdId;
    var condition = householdId ? { householdId: { $match: householdId } } : {};

    Client.find(condition).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'An error occurred while retrieving clients.'
        });
    }
}

// returns all client matching a criteria
exports.findAllCriteriaMatch = (req, res) => {
    const field = req.query.field;
    const value = req.query.value;
    var condition = field ? { field: { $match: value } } : {};
    Client.find(condition).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'An error occurred while retrieving clients.'
        });
    }
}


// update a client
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Data to update cannot be empty!'
        });
        return;
    }

    const id = req.params.id;

    Client.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update client with id=${id}. Client not found!`
            });
        } else res.send({ message: 'Client was updated successfully.' });
    }).catch(err => {
        res.status(500).send({
            message: 'Error updating client with id=' + id
        });
    });
}

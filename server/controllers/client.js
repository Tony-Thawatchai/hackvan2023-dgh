import clientSchema from '../model/clientSchema.js';
import asyncHandler from 'express-async-handler';

// create adds a new client to the database
export const create = asyncHandler(async (req, res) => {
    console.log(req.body);
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({ message: 'Content cannot be empty!' });
        return;
    }

    const client = new clientSchema({
        householdId: req.body.householdId,
        // name: req.body.name,
        // phone: req.body.phone,
        sex: req.body.sex,
        yearOfBirth: req.body.yearOfBirth,
        isDependent: req.body.isDependent,
        dietaryRestrictions: req.body.dietaryRestrictions,
        idType: req.body.idType,
        idNumber: req.body.idNumber,
    });
    console.log('client body',req.body)

    if (!req.body.isDependent) {
        client.name = req.body.name;
        client.phone = req.body.phone;
    }

    client.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'An error occurred while creating the client.'
            });
            console.log(err);
        })
});

// returns all clients in a household
export const findAllInHousehold = asyncHandler(async (req, res) => {
    const householdId = req.query.householdId;
    var condition = householdId ? { householdId: { $match: householdId } } : {};

    clientSchema.find(condition).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'An error occurred while retrieving clients.'
        });
    })
});

export const getAll = asyncHandler(async (req, res) => {
    clientSchema.find().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'An error occurred while retrieving clients.'
        });
    })
});


// returns all client matching a criteria
export const findAllCriteriaMatch = asyncHandler(async (req, res) => {
    const field = req.query.field;
    const value = req.query.value;
    var condition = field ? { field: { $match: value } } : {};
    clientSchema.find(condition).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'An error occurred while retrieving clients.'
        });
    })
});


// update a client
export const update = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Data to update cannot be empty!'
        });
        return;
    }

    const id = req.params.id;

    clientSchema.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
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
});

export const remove = asyncHandler(async (req, res) => {
    const id = req.params.id;

    clientSchema.findByIdAndRemove(id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot delete client with id=${id}. Client not found!`
            });
        } else {
            res.send({
                message: 'Client was deleted successfully!'
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: 'Could not delete client with id=' + id
        });
    });
});

import householdSchema from '../model/householdSchema.js';

class Household {

  // Create and Save a new Household
  create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({ message: 'Content can not be empty!' });
      return;
    }

    // Create a Household
    const household = new householdSchema({
      name: req.body.name,
      address: req.body.address,
      postalCode: req.body.postalCode,
      phone: req.body.phone,
      email: req.body.email,
      active: req.body.active ? req.body.active : false,
    });
console.log('res.body',req.body)
    console.log('Household', household);

    // Save Household in the database
    return household
      .save()
      .then((data) => {

        console.log('Household created successfully', data);
        return res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            'Some error occurred while creating the Household.',
        });
      });
  }

  // Retrieve all householdSchema from the database based on address
  findByAddress = (req, res) => {
    householdSchema.find({ address: { $regex: req.params.address, $options: 'i' } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            'Some error occurred while retrieving householdSchema.',
        });
      })
  }

  // Update a Household by the id in the request
  update = (req, res) => {
    const id = req.params.id;

    Household.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Household with id=${id}. Maybe Household was not found!`
          });
        } else res.send({ message: "Household was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error updating Household with id=" + id
        });
      })
  }
}

export default Household;

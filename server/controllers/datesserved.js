import datesServedSchema from '../model/datesServedSchema.js' 

class DatesServed {
  // Create a new date served
  create = (req, res) => {
    const datesServed = new datesServedSchema({
      householdId: req.params.householdId,
      date: req.body.date
    })

    datesServed
      .save(datesServed)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({ message: err.message })
      })
  }

  // Get all dates served for a household
  findAll = (req, res) => {
    datesServedSchema.find({ householdId: req.params.householdId })
      .then(datesServed => {
        res.send(datesServed)
      })
      .catch(err => {
        res.status(500).send({ message: err.message })
      })
  }

  findLatest = (req, res) => {
    datesServedSchema.find({ householdId: req.params.householdId }).sort({ date: -1 }).limit(1)
      .then(datesServed => {
        res.send(datesServed)
      })
      .catch(err => {
        res.status(500).send({ message: err.message })
      })
  }
}

export default DatesServed;

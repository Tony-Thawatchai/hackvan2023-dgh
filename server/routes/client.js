import express from "express";
import clientSchema from "../model/client.js";

const router = express.Router();

// get all clients
router.get("/get", async (req, res) => {
  try {
    const clients = await clientSchema.find();
    res.json(clients);
    // res.send("Hello World from client.js");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// query client by id
router.get("/getone/:id", getID,  (req, res) => {
  
    res.json(res.clientID);


  // res.send(res.clientID)
});

// create new client
router.post("/post", async (req, res) => {
  const client = new clientSchema({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
  });

  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

// update client by id
router.patch("/patch/:id", getID, async (req, res) => {
  if (req.body.name != null) {
    res.clientID.name = req.body.name;
  }
  if (req.body.address != null) {
    res.clientID.address = req.body.address;
  }
  try {
    const updateClient = await res.clientID.save();
    res.json(updateClient);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

// delete client by id
router.delete("/delete/:id", getID, async (req, res) => {
  try {
    await res.clientID.remove();
    res.json({ message: "Deleted client" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

async function getID(req, res, next) {
  let clientID;
  try {
     clientID = await clientSchema.findById(req.params.id);
    if (clientID == null) {
      return res.status(404).json({ message: "Cannot find client" });
    }
    res.clientID = clientID; 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
  next();
  
}
export default router;

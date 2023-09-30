import express from "express";
import clientSchema from "../model/client.js";

const router = express.Router();

// get all clients
router.get("/", async (req, res) => {
  try {
    const clients = await clientSchema.find();
    res.json(clients);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }

  res.send("Hello World from client.js");
});

// query client by id
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// create new client
router.post("/",async (req, res) => {

  const client = new clientSchema({
    name: req.body.name,
    email: req.body.email

  });

  try{
    const newClient = await client.save();
    res.status(201).json(newClient);

  }catch(error){
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

// update client by id
router.patch("/:id", (req, res) => {
  res.send("patch request");
});

// delete client by id
router.delete("/:id", (req, res) => {
  res.send("delete request");
});

export default router;

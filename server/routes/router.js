import * as client from "../controllers/client.js";
import Household from "../controllers/household.js";
import DatesServed from "../controllers/datesserved.js";
import express from "express";

const router = express.Router();

const household = new Household();
const datesServed = new DatesServed();

// Client routes
router.post("/client/create", client.create);
router.get("/client/:id/update", client.update);
router.get("/household/:id/clients", client.findAllInHousehold);
router.get("/client/search", client.findAllCriteriaMatch);
router.delete("/client/:id/remove", client.remove);

// Household routes
router.post("/household/create", household.create);
router.get("/household/:id/update", household.update);
router.get("/household/search/:address", household.findByAddress);

// DatesServed routes
router.post("/datesserved/create", datesServed.create);
router.get("/household/:id/datesserved", datesServed.findAll);

export default router;

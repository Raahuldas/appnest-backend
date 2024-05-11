import { Router } from "express";
import { createContact, getAllContactDetails } from "../controllers/contact.controller.js";

const router = Router();

router.route("/create").post(createContact);
router.route("/get-all").get(getAllContactDetails);

export default router;
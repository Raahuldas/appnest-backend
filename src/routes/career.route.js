import { Router } from "express";
import { getAllCareerDetails, sendCareerForm } from "../controllers/career.controller.js";
import { upload } from "../middlewares/multer.js";

const router = Router()

router.route("/create").post(upload.single("resume"),sendCareerForm);
router.route("/get-all").get(getAllCareerDetails);

export default router;
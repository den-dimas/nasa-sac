import express from "express";
import * as nasaController from "../controllers/nasa.controller.js";

const router = express.Router();

router.get("/get-379", nasaController.get379);
router.get("/get-665", nasaController.get665);

router.get("/geta-379", nasaController.geta379);
router.get("/geta-665", nasaController.geta665);

export default router;

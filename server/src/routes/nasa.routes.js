import express from "express";
import * as nasaController from "../controllers/nasa.controller.js";

const router = express.Router();

/* === Route for Authentications === */
router.get("/get-379", nasaController.get379);
router.get("/get-665", nasaController.get665);

export default router;

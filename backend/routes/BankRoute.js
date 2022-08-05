import express from "express";
import {
    getBanks,
    getBankById,
    saveBank,
    updateBank,
    deleteBank
} from "../controllers/BankController.js";

const router = express.Router();

router.get('/banks', getBanks);
router.get('/banks/:id', getBankById);
router.post('/banks', saveBank);
router.patch('/banks/:id', updateBank); // Patch is uses for update in node js
router.delete('/banks/:id', deleteBank);

export default router;
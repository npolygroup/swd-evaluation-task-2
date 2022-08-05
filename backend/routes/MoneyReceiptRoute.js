import express from "express";
import {
    getMoneyRecipts,
    getMoneyReciptById,
    saveMoneyRecipt,
    updateMoneyRecipt,
    deleteMoneyRecipt
} from "../controllers/MoneyReceiptController.js";

const router = express.Router();

router.get('/money-receipts', getMoneyRecipts);
router.get('/money-receipts/:id', getMoneyReciptById);
router.post('/money-receipts', saveMoneyRecipt);
router.patch('/money-receipts/:id', updateMoneyRecipt); // Patch is uses for update in node js
router.delete('/money-receipts/:id', deleteMoneyRecipt);

export default router;
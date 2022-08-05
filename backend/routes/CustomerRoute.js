import express from "express";
import {
    getCustomers,
    getCustomerById,
    saveCustomer,
    updateCustomer,
    deleteCustomer
} from "../controllers/CustomerController.js";

const router = express.Router();

router.get('/customers', getCustomers);
router.get('/customers/:id', getCustomerById);
router.post('/customers', saveCustomer);
router.patch('/customers/:id', updateCustomer); // Patch is uses for update in node js
router.delete('/customers/:id', deleteCustomer);

export default router;
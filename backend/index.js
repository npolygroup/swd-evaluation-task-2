import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import mysql from "mysql2";
import bodyParser from "body-parser";

// Import routing

import CustomerRoute from "./routes/CustomerRoute.js";
import BankRoute from "./routes/BankRoute.js";
import MoneyReceiptRoute from "./routes/MoneyReceiptRoute.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(bodyParser.urlencoded({extended: true}));

// External File Uploaded
app.use(express.static("public"));

// Route Configure 
app.use(CustomerRoute);
app.use(BankRoute);
app.use(MoneyReceiptRoute);


// Server Creation

app.listen(3003,()=>{
    console.log("Server is Running on Port: 3003");
})
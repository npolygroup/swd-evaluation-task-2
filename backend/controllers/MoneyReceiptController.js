import MoneyRecipt from "../models/MoneyReceiptModule.js";



// Get All Money Recipt

export const getMoneyRecipts = async(req, res)=>{
    try {
        const response = await MoneyRecipt.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}


//Get Money Recipt by Id

export const getMoneyReciptById = async(req, res)=>{
    try {
        const response = await MoneyRecipt.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

//Create New Money Recipt

export const saveMoneyRecipt = async(req, res)=>{
    
    const customer_code = req.body.customer_code;
    const customer_name = req.body.customer_name;
    const bank_id = req.body.bank_id;
    const bank_name = req.body.bank_name;
    const amount = req.body.amount;
    const note = req.body.note;
    try {
        const createMoneyReceipt = await MoneyRecipt.create({customer_code: customer_code,
                                                             customer_name: customer_name,
                                                             bank_id: bank_id,
                                                             bank_name: bank_name,
                                                             amount: amount,
                                                             note: note});
        // console.log(createMoneyReceipt.id); This is the way to get last insert id
        res.status(201).json({msg: "Money Receipt Created Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
    
}


//Update New Money Recipt

export const updateMoneyRecipt = async(req, res)=>{

    const moneyReceipt = await MoneyRecipt.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!moneyReceipt) return res.status(404).json({msg: "No Data Found"});
    
    const customer_code = req.body.customer_code;
    const customer_name = req.body.customer_name;
    const bank_id = req.body.bank_id;
    const bank_name = req.body.bank_name;
    const amount = req.body.amount;
    const note = req.body.note;
    
    try {
        await MoneyRecipt.update({customer_code: customer_code,
                                  customer_name: customer_name,
                                  bank_id: bank_id,
                                  bank_name: bank_name,
                                  amount: amount,
                                  note: note},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Money Receipt Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}


//Delete New Money Recipt

export const deleteMoneyRecipt = async(req, res)=>{

    const moneyReceipt = await MoneyRecipt.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!moneyReceipt) return res.status(404).json({msg: "No Data Found"});
    try {
        await MoneyRecipt.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Money Receipt Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
    
}

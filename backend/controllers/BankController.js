import Bank from "../models/BankModule.js";

// Get Bank List
export const getBanks = async(req, res)=>{
    try {
        const response = await Bank.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// Get Bank By Id
export const getBankById = async(req, res)=>{
    try {
        const response = await Bank.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}


// Create Bank
export const saveBank = async(req, res)=>{

    const bankId = req.body.bank_id;
    const dupBank = await Bank.findOne({
        where:{
            bank_id : bankId
        }
    });
     
    if(dupBank){
        return res.status(300).json({msg: "This Bank Id is already exits."});
    }else{
        const bank_id = req.body.bank_id;
        const bank_name = req.body.bank_name;
        try {
            const createBank = await Bank.create({bank_id: bank_id, bank_name: bank_name});
            // console.log(createBank.id); This is the way to get last insert id
            res.status(201).json({msg: "Bank Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    }
}

// Update Bank
export const updateBank = async(req, res)=>{

    const bank = await Bank.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!bank) return res.status(404).json({msg: "No Data Found"});
    

    const bankId = req.body.bank_id;
    const dupBank = await Bank.findOne({
        where:{
            bank_id : bankId
        }
    });
     
    if(dupBank){
        return res.status(300).json({msg: "This Bank Id is already exits."});
    }else{

        const bank_id = req.body.bank_id;
        const bank_name = req.body.bank_name;
        
        try {
            await Bank.update({bank_id: bank_id, bank_name: bank_name},{
                where:{
                    id: req.params.id
                }
            });
            res.status(200).json({msg: "Bank Updated Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    }
}

// Delete Bank
export const deleteBank = async(req, res)=>{

    const bank = await Bank.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!bank) return res.status(404).json({msg: "No Data Found"});
    try {
        await Bank.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Bank Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const MoneyReceipt = db.define('money_receipt',{
    customer_code: DataTypes.INTEGER,
    customer_name: DataTypes.STRING,
    bank_id: DataTypes.INTEGER,
    bank_name: DataTypes.STRING,
    amount: DataTypes.DOUBLE(10,2),
    note: DataTypes.STRING,
},{
    freezeTableName: true
});

export default MoneyReceipt;

(async()=>{
    await db.sync();
})();
import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Customer = db.define('customer',{
    customer_code: DataTypes.INTEGER,
    customer_name: DataTypes.STRING,
    customer_address: DataTypes.STRING
},{
    freezeTableName: true
});

export default Customer;

(async()=>{
    await db.sync();
})();
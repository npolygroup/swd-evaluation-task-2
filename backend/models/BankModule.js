import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Bank = db.define('banks',{
    bank_id: DataTypes.INTEGER,
    bank_name: DataTypes.STRING,
},{
    freezeTableName: true
});

export default Bank;

(async()=>{
    await db.sync();
})();
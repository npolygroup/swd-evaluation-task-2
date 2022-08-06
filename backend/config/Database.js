import {Sequelize} from "sequelize";

const db = new Sequelize('nploy_native','root','',{
    host: 'localhost',
    port: '3306',
    dialect: "mysql"
});

export default db;
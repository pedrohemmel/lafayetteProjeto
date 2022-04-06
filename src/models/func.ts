import { sequelize } from "../instances/mysql";
import { Model, DataTypes } from "sequelize";

export interface FuncInstance extends Model{
    id_func: number
    nome_func: string
    email_func: string
    senha_func: string
}


export const Func = sequelize.define<FuncInstance>("Funcionário,",{
    id_func: {
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    nome_func:{
        type:DataTypes.STRING
    },
    email_func:{
        type:DataTypes.STRING
    },
    senha_func:{
        type:DataTypes.STRING
    },
},{
    tableName:'tbfunc',
    timestamps: false
})

import { sequelize } from "../instances/mysql";
import { Model, DataTypes } from "sequelize";

export interface GalInstance extends Model{
    id_gal: number
    id_func: number
    img_gal: string
    name_img: string
}


export const Gal = sequelize.define<GalInstance>("Galerias,",{
    id_gal: {
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    id_func:{
        type:DataTypes.INTEGER
    },
    img_gal:{
        type:DataTypes.STRING
    },
    name_img:{
        type:DataTypes.STRING
    },
},{
    tableName:'tbgalerias',
    timestamps: false
})

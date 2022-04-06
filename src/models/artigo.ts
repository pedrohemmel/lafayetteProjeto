import { sequelize } from "../instances/mysql";
import { Model, DataTypes } from "sequelize";

export interface ArtInstance extends Model{
    id_art: number
    id_func:number
    nome_img: string
    titulo_art: string
    texto_art: string
}


export const Art = sequelize.define<ArtInstance>("Artigo,",{
    
    id_art:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    id_func:{
        type:DataTypes.INTEGER
    },
    nome_img:{
        type:DataTypes.STRING
    },
    titulo_art:{
        type:DataTypes.STRING
    },
    texto_art:{
        type:DataTypes.STRING
    },

},{
    tableName:'tbartigos',
    timestamps: false
})

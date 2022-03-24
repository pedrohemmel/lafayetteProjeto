import {Request, Response} from 'express'
import { sequelize } from '../instances/mysql'

export const home = async (req:Request, res: Response) =>{
    try{
        await sequelize.authenticate()
        console.log("Conexão estabelecida!")
    }catch(error){
        console.log("Falha na conexão ", error)
    }


    res.render("pages/home",{

    })
}

export const slug = ((req:Request, res:Response) => {

    let slug:string = req.params.slug

    res.render(`pages/${slug}`)

})
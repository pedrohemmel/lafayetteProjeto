import {Request, Response} from 'express'
import { sequelize } from '../instances/mysql'


export const inicial = async (req:Request, res: Response) =>{
    try{
        await sequelize.authenticate()
        console.log("Conexão estabelecida!")
        res.render("pages/inicial")

    }catch(error){
        console.log("falha na conexão ",error)
        res.redirect("login")

    }

}

export const teams = (req:Request, res: Response) =>{
    let slug:string = req.params.slug

    res.render(`pages/teams/${slug}`)
}

export const galery = (req:Request, res: Response) =>{
    let slug:string = req.params.slug

    res.render(`pages/galery/${slug}`)
}

export const portal = (req:Request, res: Response) =>{
    let slug:string = req.params.slug

    res.render(`pages/portal/${slug}`)
}

export const slug = ((req:Request, res:Response) => {

    let slug:string = req.params.slug

    res.render(`pages/${slug}`)

})
import {Request, Response} from 'express'
import { sequelize } from '../instances/mysql'
import { json } from 'node:stream/consumers'
import { Func } from '../models/func'
import { Art } from '../models/artigo'
import { Gal } from '../models/gal';


export const inicial = (req:Request, res: Response) =>{
   
    res.render("pages/")

}

export const slug = async (req:Request, res:Response) => {

    let func = await Func.findAll()
    let artigo = await Art.findAll()
    let gal = await Gal.findAll()


    
    let slug:string = req.params.slug

    res.render(`pages/${slug}`,{

        func,
        artigo,
        gal
    })
}



export const teams = async (req:Request, res: Response) =>{
    let slug:string = req.params.slug
    let func = await Func.findAll()

    res.render(`pages/teams/${slug}`, {
        func
    })
}

export const galery = (req:Request, res: Response) =>{
    let slug:string = req.params.slug

    res.render(`pages/galery/${slug}`)
}

export const portal = (req:Request, res: Response) =>{
    let slug:string = req.params.slug

    res.render(`pages/portal/${slug}`)
}


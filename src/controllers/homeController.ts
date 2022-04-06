import {Request, Response} from 'express'
import { json } from 'node:stream/consumers'
import { Func } from '../models/func'
import { Art } from '../models/artigo'


export const home = (req:Request, res: Response) =>{

    res.render("pages/home"

    )


}

export const blog = async (req:Request, res: Response) =>{
    let artigo = await Art.findAll()

    console.log("ARTIGOS: ", JSON.stringify(artigo))

    res.render("pages/blog",{
        artigo

    })
}

export const slug = async (req:Request, res:Response) => {

    let func = await Func.findAll()
    let artigo = await Art.findAll()
    
    let slug:string = req.params.slug

    res.render(`pages/${slug}`,{

        func,
        artigo
    })
    
}


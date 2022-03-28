import {Request, Response} from 'express'

export const inicial = (req:Request, res: Response) =>{

    res.render("pages/inicial")
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
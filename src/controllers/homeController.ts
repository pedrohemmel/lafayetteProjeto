import {Request, Response} from 'express'

export const home = (req:Request, res: Response) =>{

    res.render("pages/home",{

    })
}

export const slug = ((req:Request, res:Response) => {

    let slug:string = req.params.slug

    res.render(`pages/${slug}`)

})
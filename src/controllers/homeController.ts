import {Request, Response} from 'express'

export const inicial = (req:Request, res: Response) =>{

    res.render("pages/inicial",{


    })
}

export const slug = ((req:Request, res:Response) => {

    let sluger:string = req.params.slug

    res.render(`pages/${sluger}`)

    

})


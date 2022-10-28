import {Request, Response} from "express"

import IController from "./ControllerInterface"

let data:any[]=[
    {id:1, nama:"Joko"},
    {id:2, nama:"Moko"},
    {id:3, nama:"Koko"},
    {id:4, nama:"Soko"},
]

class UserController implements IController{
    index(req: Request, res: Response): Response {
        return res.send(data)

        // throw new Error("Method not implemented.")
    }
    create(req: Request, res: Response): Response {
        const {id, nama} = req.body

        data.push({
            id,
            nama
        })
        return res.send("data berhasil ditambahkan")

        // throw new Error("Method not implemented.")
    }
    show(req: Request, res: Response): Response {
        const {id} = req.params
        let show = data.find(item => item.id == id);
        return res.send(show);
        throw new Error("Method not implemented.")
    }
    update(req: Request, res: Response): Response {
        const {id} = req.params
        const {nama} = req.body
        let update = data.find(item => item.id == id)
        // console.log(update)
        update.nama = nama
        return res.send("data berhasil diperbaharui")
        // throw new Error("Method not implemented.")
    }
    delete(req: Request, res: Response): Response {
        const {id} = req.params
        // let oldData = data
        let deleteData = data.filter(item => item.id != id)
        return res.send(deleteData);
        // throw new Error("Method not implemented.")
    }
    
}

export default new UserController();
import {Request, Response} from "express"


class AuthController {
    register(req: Request, res: Response): Response {
        return res.send(req.body)

        // throw new Error("Method not implemented.")
    }
    login(req: Request, res:Response): Response{
        return res.send(req.body)

    }
    
}

export default new AuthController();
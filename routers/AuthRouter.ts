import {Router, Request, Response} from 'express'
import IRouter from './RouterInterface'
import AuthController from '../controllers/AuthController'

class UserRoutes implements IRouter{
    public router : Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public routes(): void{

        this.router.post("/register", AuthController.register);

        this.router.post("/login", AuthController.login);
    }
}

export default new UserRoutes().router
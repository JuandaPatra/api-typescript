import {Router, Request, Response} from 'express'
import IRouter from './RouterInterface'
import AuthController from '../controllers/AuthController'

abstract class BaseRouter implements IRouter{
    public router : Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    abstract routes(): void;
}

export default BaseRouter;
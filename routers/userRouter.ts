import BaseRouter from './BaseRouter';

import UserController from '../controllers/UserController';

import {auth} from '../middleware/AuthMiddleware'

class UserRoutes extends BaseRouter{

    public routes(): void{
        this.router.get("/", auth, UserController.index);

        this.router.post("/", UserController.create);

        this.router.get("/:id", UserController.show);

        this.router.patch("/:id", UserController.update);

        this.router.delete("/:id", UserController.delete);
    }
}

export default new UserRoutes().router
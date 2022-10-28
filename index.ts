import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// morgan perlu install npm i morgan dan npm i @types/morgan
import morgan from 'morgan'

import compression from 'compression'

import helmet from 'helmet'
import cors from 'cors'


import UserRoutes from './routers/userRouter'
dotenv.config();

class App{
  public app : Express ;

  constructor(){
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins():void{
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(cors());
    this.app.use(compression())
    this.app.use(helmet())
  }
  protected routes():void{
    this.app.route("/").get((req: Request, res:Response)=>{
      res.send('⚡️Express + TypeScript Server');

    });


    this.app.use("/users", UserRoutes)
  }
}

const port = process.env.PORT;
const app = new App().app;
app.listen(port,()=>{
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
})

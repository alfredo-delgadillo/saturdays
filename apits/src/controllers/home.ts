import express from 'express'
import { Request, Response } from 'express'

export default class HomeController {
    public router = express.Router();

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/home', (req: Request, res: Response) => {
            res.send("Hi from home index");
        });
        this.router.get('/home/:name', (req: Request, res: Response) => {
            res.send("Hi from home get by name " + req.params.name);
        });
        
        this.router.post('/home', (req: Request, res: Response) => {
            res.send("Hi from home post " + req.body);
        });
    }
}
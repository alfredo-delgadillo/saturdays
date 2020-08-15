import express from 'express'
import { Request, Response } from 'express'

export default class ProductController {
    public router = express.Router();

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/product', (req: Request, res: Response) => {
            res.send("Hi from product index");
        });
        this.router.get('/product/:name', (req: Request, res: Response) => {
            res.send("Hi from product get by name " + req.params.name);
        });
        
        this.router.post('/product', (req: Request, res: Response) => {
            res.send("Hi from product post " + req.body);
        });
    }
}
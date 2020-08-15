import express from 'express'
import { Application } from 'express'

class App {
    public app: Application

    constructor(appInit: { middleWares: any; controllers: any; }) {
        this.app = express();

        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/api', controller.router)
        })
    }

    public listen() {
        this.app.listen(3000, () => {
            console.log(`App listening on 3000`)
        })
    }
}

export default App
import * as ctrl from "./controllers/index"
import App from './app'

import * as bodyParser from 'body-parser'

const app = new App({
    controllers: [
        new ctrl.HomeController(),
        new ctrl.ProductController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true })
    ]
})

app.listen();
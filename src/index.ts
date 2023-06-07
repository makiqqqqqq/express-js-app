import express, {Request, Response} from 'express'
import bodyParser from "body-parser";
import {productsRouter} from "./routers/products-router";
import {usersRouter} from "./routers/users-router";

const app = express()
const port = process.env.PORT || 5000;
const parserMiddleware = bodyParser.json()

app.use(parserMiddleware)

app.get('/', (req: Request, res: Response) => {
    res.send(`Start server - port: ${port}`)
})

app.use('/products', productsRouter)
app.use('/users', usersRouter)

//start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

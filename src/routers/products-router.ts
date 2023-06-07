import {Router, Request, Response} from "express";
import {products, users} from "../utils/data";
import {emptyCheck} from "../helpers";

export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
    const searchString = req.query.title?.toString() || '';
    const filteredProducts = products.filter((p) => p.title.toLowerCase().includes(searchString));
    emptyCheck(filteredProducts, res)
});
productsRouter.get('/:id', (req: Request, res: Response) => {
    const product = products.find(({id}) => id === Number(req.params.id))
    emptyCheck(product, res)
})
productsRouter.post('/', (req: Request, res: Response) => {
    const newProduct = {
        id: Number(new Date()),
        title: req.body.title
    }
    products.push(newProduct)

    res.status(201).send(newProduct)
})
productsRouter.put('/:id', (req: Request, res: Response) => {
    const searchEl = products.find(({id}) => id === Number(req.params.id))
    if (searchEl) {
        searchEl.title = req.body.title
        res.status(200).send(searchEl)
    } else {
        res.send(404)
    }

})
productsRouter.delete('/:id', (req: Request, res: Response) => {
    products.forEach((product) => {
        if (product.id === Number(req.params.id)) {
            users.splice(product.id, 1)
            res.send(204)
        } else {
            res.send(404)
        }
    })

})
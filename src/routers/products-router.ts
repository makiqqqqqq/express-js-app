import {Router, Request, Response} from "express";
import {emptyCheck} from "../helpers";
import {productsRepository} from "../repository/products-repository";

export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
    const foundProducts = productsRepository.findProducts(req.query.title?.toString())
    emptyCheck(foundProducts, res)
});

productsRouter.get('/:id', (req: Request, res: Response) => {
    const product = productsRepository.findProductById(Number(req.params.id))
    emptyCheck(product, res)
})

productsRouter.post('/', (req: Request, res: Response) => {
    const newProduct = productsRepository.createProduct(req.body.title)

    res.status(201).send(newProduct)
})

productsRouter.put('/:id', (req: Request, res: Response) => {
    const isUpdated = productsRepository.updateProductById(Number(req.params.id), req.body.title)

    if (isUpdated) {
        const updatedProduct = productsRepository.findProductById(Number(req.params.id))
        res.send(updatedProduct)
    } else {
        res.send(404)
    }
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = productsRepository.deleteProductById(Number(req.params.id));
    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }

})
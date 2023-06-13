import { Products} from "../utils/types";
export const products: Products = [{id: 1, title: 'tomato'}, {id: 2, title: "orange"}];

export const productsRepository = {

    findProducts(title?: string) {
        if (title) {
            return products.filter((p) => p.title.toLowerCase().includes(title))
        } else {
            return products
        }
    },

    findProductById(id: number) {
        return products.find((product) => product.id === Number(id))
    },

    createProduct(title?: string) {
        const newProduct = {
            id: Number(new Date()),
            title: title || ""
        }
        products.push(newProduct)
        return newProduct
    },

    updateProductById(id: number, title: string) {
        const selectProduct = products.find((product) => product.id === id);
        if (selectProduct) {
            selectProduct.title = title
            return true
        } else return false
    },

    deleteProductById(id: number) {
        products.forEach((product) => {
            if (product.id === id) {
                products.splice(product.id, 1)

                return true
            }
        })
        return false
    }
}
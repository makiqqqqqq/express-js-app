export type Products = Product[];
export type Users = User[];
export interface Product {
    id: number,
    title: string,
}
export interface User {
    id: number,
    name: string,
    age: number
}
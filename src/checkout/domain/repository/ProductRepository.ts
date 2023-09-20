import { Product } from "../entities/Product"


export interface ProductRepository {
    save(product: Product): Promise<void>
    count(): Promise<number>
    findById(productId: string): Promise<Product>
}
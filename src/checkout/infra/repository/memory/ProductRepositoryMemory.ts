import { Product } from "../../../domain/entities/Product";
import { ProductRepository } from "../../../domain/repository/ProductRepository";

export default class ProductRepositoryMemory implements ProductRepository{
    products: Product[]
    
    constructor (){
        this.products = []
    }
    findById(productId: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    
    async save(product:Product): Promise<void> {
        this.products.push(product)
    }

    async count(): Promise<number>{
        return this.products.length
    }
}
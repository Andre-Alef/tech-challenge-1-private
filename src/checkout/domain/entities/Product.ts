import { ProductComponent } from "./ProductComponent";

interface IProduct {
    category: string;
    description: string;
    name: string;
    price: number;
    productComponent: ProductComponent[]
}

export class Product {
    readonly id
    readonly category 
    readonly description
    readonly name
    readonly price
    readonly productComponent
    constructor(
      product: IProduct
       ){
        const { category, description, name, price, productComponent } = product;
        this.category  = category 
        this.description = description
        this.name = name
        this.price = price
        this.productComponent = productComponent
        this.id = "1"
   }
}
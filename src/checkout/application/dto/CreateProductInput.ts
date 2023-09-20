interface IProductComponent {
    type: string;
    quantity: number;
    componentId: string;
}



export interface CreateProductInput {
    category: string;
    description: string;
    name: string;
    price: number;
    productComponent: IProductComponent[]
}

// export class CreateProductInput {
//     private category 
//     private description
//     private name
//     private price
//     private productComponent
//     constructor(
//       product: IProduct
//        ){
//         const { category, description, name, price, productComponent } = product;
//         this.category  = category 
//         this.description = description
//         this.name = name
//         this.price = price
//         this.productComponent = productComponent

//         return {
//             category
//         };
//    }
// }
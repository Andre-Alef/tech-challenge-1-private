export interface IPersonalizations {
    componentId: string;
    quantity: number;
    price: number;
}

interface IOrdemItem {
    price: number;
    personalizations: IPersonalizations[];
    productId: string;
}
export default class OrderItem{
    readonly itemId
    readonly price
    readonly personalizations
    readonly productId
    constructor(
        params: IOrdemItem
       ){
        const {price, personalizations, productId} = params
        this.itemId = "1"
        this.price = price
        this.personalizations = personalizations
        this.productId = productId
       }

    getTotal(){
        return this.price * 1 //this.quantity
    }
}


import Cpf from "./Cpf"
import Item from "./Item"
import OrderCode from "./OrderCode"
import OrderItem, { IPersonalizations } from "./OrderItem"
import { Product } from "./Product"

export default class Order {
    private cpf: Cpf | undefined
    private orderItems: OrderItem[]
    private freight: number
     code: OrderCode
    constructor(cpf?: string, readonly issueDate: Date = new Date(), readonly sequence: number = 1){
        this.cpf = cpf ? new Cpf(cpf) : undefined
        this.orderItems = []
        this.freight = 0
        this.code = new OrderCode(issueDate, sequence)
        
    }

    addItem(product: Product, personalizations: IPersonalizations[]){
        
        this.orderItems.push(new OrderItem({
            productId: product.id,
            personalizations,
            price: 1
        }))
    }
    getCpf(){
        return this?.cpf?.value
    }

    getCode(){
        return this.code.value
    }  

    getOrderItems(){
        return this.orderItems
    }

    getTotal(){
        let total = 0
        for(const orderItem of this.orderItems){
            total += orderItem.getTotal()
        }
        return total
    }
}
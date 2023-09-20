import { IPersonalizations } from "../../domain/entities/OrderItem";

interface IOrderItem {
    productId: string;
    personalizations: IPersonalizations[]
}
interface IPlaceOrderInput {
    cpf?: string;
    orderItems: IOrderItem[]
}
export default class PlaceOrderInput {

    readonly cpf
    readonly orderItems
    constructor(params: IPlaceOrderInput){
        this.cpf = params.cpf
        this.orderItems = params.orderItems
    }
}
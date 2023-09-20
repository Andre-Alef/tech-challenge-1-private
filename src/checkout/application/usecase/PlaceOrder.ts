import { Component } from "../../domain/entities/Component";
import Order from "../../domain/entities/Order";
import { IPersonalizations } from "../../domain/entities/OrderItem";
import AbstractRepositoryFactory from "../../domain/factory/AbstractRepositoryFactory";
import { ComponentRepository } from "../../domain/repository/ComponentRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import { ProductRepository } from "../../domain/repository/ProductRepository";
import PlaceOrderInput from "../dto/PlaceOrderInput";
import PlaceOrderOutput from "../dto/PlaceOrderOutput";
import PlaceOrderOutputAssembler from "../dto/PlaceOrderOutputAssembler";

export default class PlaceOrder{
    productRepository: ProductRepository;
    componentRepository: ComponentRepository;
    orderRepository: OrderRepository;
    
    constructor(abstractRepositoryFactory: AbstractRepositoryFactory){
        this.productRepository = abstractRepositoryFactory.createProductRepository()
     //   this.couponRepository = abstractRepositoryFactory.createCouponRepository()
        this.componentRepository = abstractRepositoryFactory.createComponentRepository()
        this.orderRepository = abstractRepositoryFactory.createOrderRepository()
    }

    async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput>{
        let sequence = await this.orderRepository.count()
        
        const order = new Order(input.cpf, new Date(), ++sequence)
        for(const orderItem of input.orderItems){
            const product = await this.productRepository.findById(orderItem.productId)
            if(!product) throw new Error("Product does not exists")
            let component: Component | undefined    
            let personalizations: IPersonalizations[] = []
            for(const {componentId, quantity} of orderItem.personalizations){
                component = await this.componentRepository.findById(componentId)
                if(!component) throw new Error("Component does not exists")
                personalizations.push({componentId, quantity, price: component.price})
            }
            order.addItem(product, personalizations)
        }
        this.orderRepository.save(order)
        return PlaceOrderOutputAssembler.assembly(order)
        
    }
}
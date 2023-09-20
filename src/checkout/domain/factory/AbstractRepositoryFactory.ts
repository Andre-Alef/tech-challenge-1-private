import {ComponentRepository} from "../repository/ComponentRepository";
import ItemRepository from "../repository/ItemRepository";
import OrderRepository from "../repository/OrderRepository";
import { ProductRepository } from "../repository/ProductRepository";

export default interface AbstractRepositoryFactory{
    createItemRepository(): ItemRepository
    createOrderRepository(): OrderRepository
    createComponentRepository(): ComponentRepository
    createProductRepository(): ProductRepository
}
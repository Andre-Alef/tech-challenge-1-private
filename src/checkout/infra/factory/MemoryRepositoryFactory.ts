import AbstractRepositoryFactory from "../../domain/factory/AbstractRepositoryFactory";
import {ComponentRepository} from "../../domain/repository/ComponentRepository";
import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";


import ItemRepositoryMemory from "../repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "../repository/memory/OrderRepositoryMemory";
import { ProductRepository } from "../../domain/repository/ProductRepository";
import ProductRepositoryMemory from "../repository/memory/ProductRepositoryMemory";
import { ComponentRepositoryMemory } from "../repository/memory/ComponentRepositoryMemory";

export default class MemoryRepositoryFactory implements AbstractRepositoryFactory {
    constructor(){}
    createItemRepository(): ItemRepository {
        return new ItemRepositoryMemory()
    }
    createOrderRepository(): OrderRepository {
        return new OrderRepositoryMemory()
    }
    createComponentRepository(): ComponentRepository {
        return new ComponentRepositoryMemory()
    }
    createProductRepository(): ProductRepository {
        return new ProductRepositoryMemory()
    }

}

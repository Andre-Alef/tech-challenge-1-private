import AbstractRepositoryFactory from "../../domain/factory/AbstractRepositoryFactory";
import {ComponentRepository} from "../../domain/repository/ComponentRepository";
import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import DatabaseConnection from "../database/DatabaseConnection";
import ItemRepositoryDatabase from "../repository/database/ItemRepositoryDatabase";
import OrderRepositoryDatabase from "../repository/database/OrderRepositoryDatabase";
import { ProductRepository } from "../../domain/repository/ProductRepository";

export default class DatabaseRepositoryFactory implements AbstractRepositoryFactory {
    constructor(readonly databaseConnection: DatabaseConnection){}
    createItemRepository(): ItemRepository {
        return new ItemRepositoryDatabase(this.databaseConnection)
    }
    createOrderRepository(): OrderRepository {
        return new OrderRepositoryDatabase(this.databaseConnection)
    }
    createComponentRepository(): ComponentRepository {
        throw new Error("")
    }
    createProductRepository(): ProductRepository {
        throw new Error("")
    }

}
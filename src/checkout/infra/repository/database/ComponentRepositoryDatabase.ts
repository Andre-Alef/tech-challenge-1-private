import { Component } from "../../../domain/entities/Component";
import { ComponentRepository } from "../../../domain/repository/ComponentRepository";
import DatabaseConnection from "../../database/DatabaseConnection";
import { PrismaClient } from "@prisma/client"
export default class ComponentRepositoryDatabase implements ComponentRepository {
    readonly prisma
    constructor(readonly databaseConnection : DatabaseConnection){
         this.prisma = new PrismaClient();
         this.prisma.$connect()
    }

    async save(component: Component): Promise<void> {
        this.prisma.component.create({
            data: { category: component.category, description: component.description, name: component.name, price: component.price } 
        })
   
    }

    async findById(componentId: string): Promise<Component | undefined> {
        const component = await this.prisma.component.findUnique({
            where: {
                id: Number(componentId)
            }
        })
        const { category, description, name, price} = component as any
        return  new Component({category, description, name, price}) || undefined
    }

    async count(){
        const [data] = await this.databaseConnection.query("select count(*)::int from ccca.order",[])
        return data.count
    }
}
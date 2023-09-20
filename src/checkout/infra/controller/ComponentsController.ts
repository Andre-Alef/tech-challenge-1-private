import { PrismaClient } from "@prisma/client";
import PlaceOrder from "../../application/usecase/PlaceOrder";
import DatabaseConnection from "../database/DatabaseConnection";
import DatabaseRepositoryFactory from "../factory/DatabaseRepositoryFactory";

export class ComponentsController {
  readonly prisma
  constructor(readonly databaseConnection : DatabaseConnection){
       this.prisma = new PrismaClient();
       this.prisma.$connect()
  }
   

    async getProducts() {

        const user = await this.prisma.product.findUnique({
            where: {
              id: 1,
            },
          })
          console.log({user})
        return user
    }

    async placeOrder(params: any, body: any){
        const placeOrder = new PlaceOrder(new DatabaseRepositoryFactory(this.databaseConnection))
        const order = await placeOrder.execute(body)
        console.log({order})
        return order;
    }
}
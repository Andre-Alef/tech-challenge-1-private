import Order from "../../../domain/entities/Order";
import OrderRepository from "../../../domain/repository/OrderRepository";
import DatabaseConnection from "../../database/DatabaseConnection";

export default class OrderRepositoryDatabase implements OrderRepository {
    constructor(readonly databaseConnection : DatabaseConnection){

    }

    async save(order: Order): Promise<void> {
        const [orderData] = await this.databaseConnection.query(`
        insert into 
            ccca.order 
            (
              code,
              cpf,
              issue_date,
              freight,
              sequence,
              coupon,
              total
            )
               values ($1, $2, $3, $4, $5, $6, $7) returning *`, 
            [order.getCode(), order.getCpf(), order.issueDate,  order.sequence, order.getTotal()])

            for(const orderItem of order.getOrderItems()){
                await this.databaseConnection.query(`
                insert into 
                    ccca.order_item 
                     (id_order, id_item, price, quantity) 
                      values ($1, $2, $3, $4)`,[orderData.id, orderItem.price])
            }
    }

    async count(){
        const [data] = await this.databaseConnection.query("select count(*)::int from ccca.order",[])
        return data.count
    }
}
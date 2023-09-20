import PlaceOrderInput from "../../src/checkout/application/dto/PlaceOrderInput"
import GetOrder from "../../src/checkout/application/query/GetOrder"
import PlaceOrder from "../../src/checkout/application/usecase/PlaceOrder"
import DatabaseConnectionAdapter from "../../src/checkout/infra/database/DatabaseConnectionAdapter"
import DatabaseRepositoryFactory from "../../src/checkout/infra/factory/DatabaseRepositoryFactory"
import MemoryRepositoryFactory from "../../src/checkout/infra/factory/MemoryRepositoryFactory"
import CouponRepositoryMemory from "../../src/checkout/infra/repository/memory/CouponRepositoryMemory"
import ItemRepositoryMemory from "../../src/checkout/infra/repository/memory/ItemRepositoryMemory"
import OrderRepositoryMemory from "../../src/checkout/infra/repository/memory/OrderRepositoryMemory"

let placeOrder:PlaceOrder
let getOrder: GetOrder
beforeEach(() => {
   // const databaseConnection = new DatabaseConnectionAdapter()
    const itemRepository = new ItemRepositoryMemory()
    const orderRepository = new OrderRepositoryMemory()
    const couponRepository = new CouponRepositoryMemory()
    placeOrder = new PlaceOrder(new MemoryRepositoryFactory())
  //  getOrder = new GetOrder(databaseConnection)
})

test('should get order by code', async () => {
    const input:PlaceOrderInput = {
        cpf: "847.903.332-05",
        issueDate: new Date('2021-03-01'),
        orderItems: [
            {
                idItem: 1,
                quantity: 1
            },
            {
                idItem: 2,
                quantity: 1
            },
            {
                idItem: 3,
                quantity: 3
            }

        ],
        coupon: 'Vale20'
    }
    
    const placeOrderOutput = await placeOrder.execute(input)
    //const getOrderOutput =  await getOrder.execute(placeOrderOutput.code)
    //expect(getOrderOutput.total).toBe(4872)
})
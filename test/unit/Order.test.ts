import Item from "../../src/checkout/domain/entities/Item"
import Order from "../../src/checkout/domain/entities/Order"

test("should not create order with invalid CPF", () =>{
  expect(() => new Order("111.111.111-11")).toThrow(new Error("Invalid cpf"))
})

test("should create order", () =>{
    const order = new Order("847.903.332-05")
    expect(order).toBeDefined()
  })

  test("should create order with 3 items", () =>{
    const order = new Order("847.903.332-05")
   // order.addItem(new Item(1, "test", "test description", 50), 1)
   

    const total  = order.getTotal()
    expect(total).toBe(6090)
  })
 

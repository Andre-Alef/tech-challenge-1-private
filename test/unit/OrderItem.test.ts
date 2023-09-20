import OrderItem from "../../src/checkout/domain/entities/OrderItem"


test("should create order item", () => {
    const orderItem = new OrderItem({personalizations: [], price: 50, productId: "1"})
    const total = orderItem.getTotal()
    expect(total).toBe(2000)
})
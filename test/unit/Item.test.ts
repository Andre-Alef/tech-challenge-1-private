import Item from "../../src/checkout/domain/entities/Item"

test('should create item', () => {
    const item = new Item(1, "category", "description", 50)
    expect(item.idItem).toBe(1)
})


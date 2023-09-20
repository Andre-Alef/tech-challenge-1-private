import {Component} from "../../src/checkout/domain/entities/Component"

 test('should create item', () => {
     const component = new Component({
        category: "test",
        description: "desc",
        name: "name",
        price: 1
     })
     //expect(component.).toBe("FILLET")
 })

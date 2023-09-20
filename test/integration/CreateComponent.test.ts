import { CreateComponentInput } from "../../src/checkout/application/dto/CreateComponentInput"
import {CreateComponent} from "../../src/checkout/application/usecase/CreateComponent"
import MemoryRepositoryFactory from "../../src/checkout/infra/factory/MemoryRepositoryFactory"


let createComponent:CreateComponent

beforeEach(() => {
    createComponent = new CreateComponent(new MemoryRepositoryFactory())
})
test("Should create component",async  () => {
    const input:CreateComponentInput = {
        category: "test",
        description: "test",
        price: 10,
        name: "name"
    }
    
    const output = await createComponent.execute(input)
    expect(output.description).toBe("test")
    
})
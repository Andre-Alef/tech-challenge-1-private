import { CreateComponentInput } from "../../src/checkout/application/dto/CreateComponentInput"
import { CreateProductInput } from "../../src/checkout/application/dto/CreateProductInput"
import {CreateComponent} from "../../src/checkout/application/usecase/CreateComponent"
import { CreateProduct } from "../../src/checkout/application/usecase/CreateProduct"
import MemoryRepositoryFactory from "../../src/checkout/infra/factory/MemoryRepositoryFactory"
import { ComponentRepositoryMemory } from "../../src/checkout/infra/repository/memory/ComponentRepositoryMemory"



let createProduct:CreateProduct
let createComponent: CreateComponent
const createComponentRepository = new ComponentRepositoryMemory()
const memoryRepositoryFactory = new MemoryRepositoryFactory() 


beforeEach(() => {

    createComponent = new CreateComponent(memoryRepositoryFactory)
    console.log("Herreee")
    createProduct = new CreateProduct(memoryRepositoryFactory)    
  
    
    
})
test("Should not create component",async  () => {
    const input:CreateProductInput = {
        category: "test",
        description: "test",
        price: 10,
        name: "name",
        productComponent: [{
            componentId: "1",
            quantity: 2,
            type: "Test"
        }]
    }
    
    
   await expect(createProduct.execute(input)).rejects.toThrowError("Component does not exists")
    
})

test.only("Should create component",async  () => {
    const input:CreateProductInput = {
        category: "test",
        description: "test",
        price: 10,
        name: "name",
        productComponent: [{
            componentId: "1",
            quantity: 2,
            type: "Test"
        }]
    }

    const componentInput: CreateComponentInput = {
        category: "Test",
        description: "Salad",
        name: "Salad",
        price: 1
    }
    await createComponent.execute(componentInput)
    const output = await createProduct.execute(input)
    
    expect(output.description).toBe("test")
    
})
import {Component} from "../../domain/entities/Component";
import {Product} from "../../domain/entities/Product";
import {ProductComponent} from "../../domain/entities/ProductComponent";
import AbstractRepositoryFactory from "../../domain/factory/AbstractRepositoryFactory";
import { ComponentRepository } from "../../domain/repository/ComponentRepository";
import { ProductRepository } from "../../domain/repository/ProductRepository";
import { CreateProductInput } from "../dto/CreateProductInput";
import PlaceOrderOutputAssembler from "../dto/PlaceOrderOutputAssembler";

export class CreateProduct{
    componentRepository: ComponentRepository;
    productRepository: ProductRepository;
    
    constructor(abstractRepositoryFactory: AbstractRepositoryFactory){
        this.componentRepository = abstractRepositoryFactory.createComponentRepository()
        this.productRepository = abstractRepositoryFactory.createProductRepository()
    }

    async execute(input: CreateProductInput): Promise<any>{ //Promise<PlaceOrderOutput>{
        
        const productComponent = input.productComponent.map((component) => (new ProductComponent({...component})))
 
        for(const component of productComponent) {
            
          const componentExists = await this.componentRepository.findById(component.componentId)
          if(!componentExists) throw new Error("Component does not exists")

        }
        const product = new Product({...input, productComponent})
        this.productRepository.save(product)
        return product;
        //return PlaceOrderOutputAssembler.assembly(ingredient)
        
    }
}
import {Component} from "../../domain/entities/Component";
import AbstractRepositoryFactory from "../../domain/factory/AbstractRepositoryFactory";
import { ComponentRepository } from "../../domain/repository/ComponentRepository";
import { CreateComponentInput } from "../dto/CreateComponentInput";

import PlaceOrderOutputAssembler from "../dto/PlaceOrderOutputAssembler";

export class CreateComponent{
    componentRepository: ComponentRepository;
    
    constructor(abstractRepositoryFactory: AbstractRepositoryFactory){
        console.log("before")
        this.componentRepository = abstractRepositoryFactory.createComponentRepository()
        console.log("after")
    }

    async execute(input: CreateComponentInput): Promise<any>{ //Promise<PlaceOrderOutput>{
        
        const component = new Component({...input})
        this.componentRepository.save(component)
        return component;
        //return PlaceOrderOutputAssembler.assembly(ingredient)
        
    }
}
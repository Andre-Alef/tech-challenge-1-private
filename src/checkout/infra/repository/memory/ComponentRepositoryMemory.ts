import {Component} from "../../../domain/entities/Component";
import {ComponentRepository} from "../../../domain/repository/ComponentRepository";


export class ComponentRepositoryMemory implements ComponentRepository{
    components: Component[]
    
    constructor (){
        
        this.components = []
        console.log("Contructor")
    }
    
    async save(component:Component): Promise<void> {
        this.components.push(component)
        console.log("==", this.components)
    }

    async count(): Promise<number>{
        return this.components.length
    }

    async findById(componentId: string): Promise<Component | undefined> {
        const component = this.components.find((component) => component.id === componentId)
        console.log("Component repo", componentId, component, this.components)
        return component
    }
}
import {Component} from "../entities/Component"

export interface ComponentRepository {
    save(order: Component): Promise<void>
    count(): Promise<number>
    findById(componentId: string): Promise<Component | undefined>
}
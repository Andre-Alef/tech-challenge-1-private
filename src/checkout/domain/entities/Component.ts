interface IComponent {
    category: string,
    description: string,
    price: number,
    name: string,
}

export class Component {
    readonly id
    readonly category
    readonly description
    readonly price
    readonly name
    constructor(
      component: IComponent){
        const {category, description, name, price} = component
        this.category = category
        this.description = description
        this.name = name
        this.price = price
        this.id = "1"
   }
}
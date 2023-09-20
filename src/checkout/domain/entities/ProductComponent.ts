export interface IProductComponent {
    type: string;
    quantity: number;
    id?: string;
    componentId: string
}

export class ProductComponent {
    readonly id 
    readonly quantity
    readonly type
    readonly componentId
    
    constructor(
      productComponent: IProductComponent
       ){
        const { id, quantity, type, componentId } = productComponent;
        this.id  = id 
        this.quantity = quantity
        this.type = type  
        this.componentId = componentId   
   }

   getComponentId() {
    return this.componentId
   }
}
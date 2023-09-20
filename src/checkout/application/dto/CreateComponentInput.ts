export class CreateComponentInput {
    constructor(readonly category: string,
        readonly description: string,
        readonly price: number,
        readonly name: string){}
}
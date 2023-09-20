import { ComponentsController } from "../../../checkout/infra/controller/ComponentsController";
import DatabaseConnection from "../database/DatabaseConnection";
import Http from "./Http";

export default class Router {

	constructor (readonly http: Http, readonly databaseConnection: DatabaseConnection) {
		this.configure();
	}

	configure () {
		
		this.http.on("/orders", "get", async (params: any, body: any) => {
			const componentsController = new ComponentsController(this.databaseConnection);
			return componentsController.getProducts();
		});

		
	}
}
import express, {Request, Response} from "express"

import DatabaseConnectionAdapter from "./shared/infra/database/DatabaseConnectionAdapter";
import ExpressAdapter  from "./shared/infra/http/ExpressAdapter";
import Router from "./shared/infra/http/Router";

const app = express()

app.get("/test", (req:Request, res: Response) => {
    res.send("Hello word")
})
//app.listen(3000)



const http = new ExpressAdapter();
const databaseConnection = new DatabaseConnectionAdapter();


new Router(http, databaseConnection);

http.listen(3000);
console.log("App started 😍😍")

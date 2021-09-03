import {Express, Request, Response} from "express";
import UserTasksRouter from "@Core/routes/User/Tasks/UserTasksRouter";

export default class Routes {
    constructor(private app: Express) {
        this.setRoutes();
        this.setRouteIfNotFound()
    }

    setRoutes() {
        new UserTasksRouter(this.app);
    }

    setRouteIfNotFound(){
        this.app.use((request: Request, response: Response) => {
            const code = 404;
            response.status(code);
            return response.json({ error: 'Route not found or not registered yet.' });
        })
    }
}

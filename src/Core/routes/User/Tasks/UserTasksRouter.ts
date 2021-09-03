import Router from "@Core/routes/Router";
import { Request, Response } from "express";
import { ResponseAdapter } from "@Core/routes/ResponseAdapter";
import { SaveTaskPresenter } from '@Presentation/Presenters/User/Tasks/SaveTaskPresenter';

export default class UserTasksRouter extends Router {
    protected setRoutes(): void {

        this.app.post('/api/v1/user/insert-task', (req: Request, res: Response) => {
          return ResponseAdapter.adapt(SaveTaskPresenter.factory, req, res);
        });

      

    }
}

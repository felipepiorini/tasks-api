import Router from "@Core/routes/Router";
import { Request, Response } from "express";
import { ResponseAdapter } from "@Core/routes/ResponseAdapter";
import { ListTasksPresenter } from '@Presentation/Presenters/Admin/Tasks/ListTasksPresenter';

export default class AdminTasksRouter extends Router {
    protected setRoutes(): void {

        this.app.get('/api/v1/admin/list-tasks', (req: Request, res: Response) => {
          return ResponseAdapter.adapt(ListTasksPresenter.factory, req, res);
        });

    }
}
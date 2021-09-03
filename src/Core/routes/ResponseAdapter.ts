import {Request, Response} from "express";
import {Presenter} from "@Presentation/Presenters/Presenter";
import {HttpResponse} from "@Presentation/Http/HttpResponse";
import {RequestError} from "@Presentation/Http/HttpResponse/Errors/RequestError";

export class ResponseAdapter {

    private presenter: Presenter<any, any>;

    constructor(
        private presenterFactory: Function,
        private request: Request,
        private response: Response
    ) {
        this.instancePresenter()
            .then(() => {
                this.handlePresenter();
            })
    }

    public static adapt(presenterFactory: Function, request: Request, response: Response) {
        new ResponseAdapter(presenterFactory, request, response);
    }

    private instancePresenter() {
        return new Promise((resolve, reject) => {
            try {
                this.presenter = this.presenterFactory(this.request, this.response.locals.session)
                resolve([]);
            } catch (err) {

                if (err instanceof HttpResponse) {
                    this.sendError(err.error, err.getStatusCode());
                } else {
                    this.handleError(err);
                }
            }
        })
    }

    private handlePresenter() {
        this.presenter.handle()
            .then((result: HttpResponse<any>) => {
                this.send(result);
            })
            .catch((err: Error) => {
                this.handleError(err);
            });
    }

    private handleError(err: Error) {
        switch (true) {
            case err instanceof RequestError:
                this.sendError(err, 400);
                break;

            default:
                this.internalServerError(err);
        }
    }

    private send(result: HttpResponse<any>) {
       
        this.response.status(result.getStatusCode());

        if (result.getStatusCode() >= 500) {
            return this.handleError(result.error);
        }

        if (result.getStatusCode() >= 200 && result.getStatusCode() < 300) {
            return this.response.json(result.data);
        }

        if (result.getStatusCode() >= 400 && result.getStatusCode() < 500) {
            return this.sendError(result.error, result.getStatusCode())
        }

        this.response.send();
    }

    private sendError(e: Error, code: number) {
        let jsonResponse: any = {};

        this.response.status(code);

        if (e) {
            jsonResponse.error = e.name;
            jsonResponse.message = e.message;
        }

        this.response.json(jsonResponse);
    }

    private internalServerError(err: Error) {
        this.sendError(new Error('Internal server error'), 500);
    }
}

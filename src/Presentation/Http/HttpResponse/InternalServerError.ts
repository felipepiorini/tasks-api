import {HttpResponse} from "@Presentation/Http/HttpResponse";

export class InternalServerError extends HttpResponse<any> {
    constructor(e: Error) {
        super(500);
        this.error = e;
    }
}

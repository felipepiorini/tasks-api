import {HttpResponse} from "@Presentation/Http/HttpResponse";

export class Unauthorized extends HttpResponse<any> {
    constructor(e?: Error) {
        super(401);
        if (e) {
            this.error = e;
        }
    }
}
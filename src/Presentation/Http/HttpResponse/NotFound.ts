import {HttpResponse} from "@Presentation/Http/HttpResponse";

export class NotFound extends HttpResponse<any> {

    constructor() {
        super(404);
    }
}

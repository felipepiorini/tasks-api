import {HttpResponse} from "@Presentation/Http/HttpResponse";

export class NotImplemented extends HttpResponse<any> {
    constructor() {
        super(501);
    }
}

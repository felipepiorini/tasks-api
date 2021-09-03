import {HttpResponse} from "@Presentation/Http/HttpResponse";


export class Forbidden extends HttpResponse<any> {

    constructor() {
        super(403);
    }
}

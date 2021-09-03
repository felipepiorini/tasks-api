import {HttpResponse} from "../HttpResponse";


export class BadRequest extends HttpResponse<any> {
    constructor(e: Error) {
        super(400);
        this.error = e;
    }
}

import {HttpResponse} from "@Presentation/Http/HttpResponse";

export class Success<RESPONSE> extends HttpResponse<RESPONSE> {
    constructor(public data: RESPONSE, code: 200|201|204 = 200) {
        super(code);
    }
}
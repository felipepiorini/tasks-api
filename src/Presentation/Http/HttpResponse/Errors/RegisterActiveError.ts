import { RequestError } from "@Presentation/Http/HttpResponse/Errors/RequestError";

export class RegisterActiveError extends RequestError {
    constructor() {
        super();
        this.message = 'RegisterActive';
        this.name = 'RegisterActiveError';
    }
}

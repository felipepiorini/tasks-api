import {RequestError} from "@Presentation/Http/HttpResponse/Errors/RequestError";

export class MissingParamError extends RequestError {
    constructor(param: string) {
        super();
        this.message = `${param}`
    }
}

import {HttpResponse} from "@Presentation/Http/HttpResponse";
import { Success } from "./Success";
import { NotFound } from "./NotFound";
import { InternalServerError } from "./InternalServerError";
import { BadRequest } from "./BadRequest";
import { Unauthorized } from "./Unauthorized";
import {NotImplemented} from "@Presentation/Http/HttpResponse/NotImplemented";

export class HttpResponseFactory<OBJ> {
    protected constructor() {
    }

    public static factory<RES>() {
        return new HttpResponseFactory<RES>();
    }

    public Success(data: OBJ, code: 200|201|204 = 200): HttpResponse<OBJ> {
        return new Success<OBJ>(data, code)
    }

    public NotFound(): HttpResponse<any> {
        return new NotFound();
    }

    public InternalServerError(e: Error): HttpResponse<any> {
        return new InternalServerError(e);
    }

    public BadRequest(e: Error): HttpResponse<any> {
        return new BadRequest(e);
    }

    public Unauthorized(e?: Error): HttpResponse<any> {
        return new Unauthorized(e);
    }

    public NotImplemented() {
        return new NotImplemented();
    }
}

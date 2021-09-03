import {HttpResponseFactory} from "@Presentation/Http/HttpResponse/HttpResponseFactory";
import {HttpResponse} from "@Presentation/Http/HttpResponse";

export abstract class Presenter<REQUEST, RESPONSE> {
    protected httpResponse: HttpResponseFactory<RESPONSE>;

    protected constructor(
        protected request: REQUEST,
    ) {
        this.httpResponse = HttpResponseFactory.factory();
    }

    public abstract handle(): Promise<HttpResponse<RESPONSE>>;
}

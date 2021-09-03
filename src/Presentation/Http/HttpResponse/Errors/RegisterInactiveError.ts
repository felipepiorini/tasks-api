import { RequestError } from "@Presentation/Http/HttpResponse/Errors/RequestError";

export class RegisterInactiveError extends RequestError {
    constructor() {
        super();
        this.message = 'RegisterInactive';
        this.name = 'RegisterInactiveError';
    }
}

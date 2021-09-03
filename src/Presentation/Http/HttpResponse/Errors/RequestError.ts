export abstract class RequestError extends Error {
    protected constructor(private code?: number) {
        super();
        this.name = this.constructor.name;
    }
}

export abstract class HttpResponse<OBJ> {
    public error?: Error;
    public data?: OBJ;

    protected constructor(
        public statusCode: 200|201|204|400|403|401|404|500|501
    ) {

    }

    getStatusCode() {
        return this.statusCode;
    }
}

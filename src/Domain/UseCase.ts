export abstract class UseCase<RETURNING> {

    constructor() {}

    public abstract handle(): Promise<RETURNING>
}

import {MySQL} from "@Data/Source/MySQL/MySQL";

export class RepositoryRaw<MODEL extends MySQL> {
    constructor(
        protected Model: MODEL
    ) {
    }

    get model() {
        return this.Model;
    }
}

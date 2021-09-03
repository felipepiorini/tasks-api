import {Express} from "express";

export default abstract class Router {

    constructor(protected app: Express){
        this.setRoutes()
    }

    protected abstract setRoutes(): void;
}

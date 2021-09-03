import {TasksModel} from "@Data/Source/MySQL/Task/TasksModel";
import {RepositoryRaw} from "@Domain/RepositoryRaw";

export class TasksRepository extends RepositoryRaw<TasksModel>{

    constructor() {
        super(
            new TasksModel()
        );
    }
    
    async getListsTasks() {
        return await this.model.getListsTasks();
    }

}
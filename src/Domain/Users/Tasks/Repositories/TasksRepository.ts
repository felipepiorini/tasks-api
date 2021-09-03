import {TasksModel} from "@Data/Source/MySQL/Task/TasksModel";
import {RepositoryRaw} from "@Domain/RepositoryRaw";

export class TasksRepository extends RepositoryRaw<TasksModel>{

    constructor() {
        super(
            new TasksModel()
        );
    }
    
    async insertTask(userId: number, description: string, dateEnd: string, status: string) {
        return await this.model.insertTask(userId, description, dateEnd, status);
    }

}
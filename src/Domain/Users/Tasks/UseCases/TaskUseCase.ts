import {UseCase} from "@Domain/UseCase";
import {TasksRepository} from "@Domain/Users/Tasks/Repositories/TasksRepository";
import { ITaskResponse } from "@Domain/Users/Tasks/types";
export class TaskUseCase extends UseCase<ITaskResponse> {

    constructor(
        private userId: number,
        private description: string,
        private dateEnd: string,
        private status: string,
        private tasksRepository: TasksRepository,
    ) {
        super();
    }

    async handle(): Promise<any> {

        try {
            await this.tasksRepository.insertTask(this.userId, this.description, this.dateEnd, this.status);
            console.log(`Nova task cadastrada pelo userId ${this.userId} em ${this.dateEnd}`)
        } catch (e) {
            console.log(e)
            throw new Error(e);
        }

    }
}
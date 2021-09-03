import {UseCase} from "@Domain/UseCase";
import {TasksRepository} from "@Domain/Admin/Tasks/Repositories/TasksRepository";
import { IListTaskResponse } from "@Domain/Admin/Tasks/types";

export class ListTaskUseCase extends UseCase<IListTaskResponse> {

    constructor(
        private tasksRepository: TasksRepository,
    ) {
        super();
    }

    async handle(): Promise<any> {

        try {

            return await this.tasksRepository.getListsTasks();
         
        } catch (e) {
            console.log(e)
            throw new Error(e);
        }

    }
}
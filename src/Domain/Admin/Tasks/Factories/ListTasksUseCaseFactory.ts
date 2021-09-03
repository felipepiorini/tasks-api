import {ListTaskUseCase} from "@Domain/Admin/Tasks/UseCases/ListTaskUseCase";
import {IRequest} from "@Presentation/Contracts/Users/Tasks/Tasks.contracts";
import {TasksRepository} from "@Domain/Admin/Tasks/Repositories/TasksRepository";

export function ListTasksUseCaseFactory(req: IRequest) {

    return new ListTaskUseCase(
        new TasksRepository(),
    );
}

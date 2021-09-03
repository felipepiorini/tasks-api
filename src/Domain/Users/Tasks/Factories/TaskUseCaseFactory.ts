import {TaskUseCase} from "@Domain/Users/Tasks/UseCases/TaskUseCase";
import {IRequest} from "@Presentation/Contracts/Users/Tasks/Tasks.contracts";
import {TasksRepository} from "@Domain/Users/Tasks/Repositories/TasksRepository";

export function TaskUseCaseFactory(req: IRequest) {

    return new TaskUseCase(
        req.body.userId,
        req.body.description,
        req.body.dateEnd,
        req.body.status,
        new TasksRepository(),
    );
}

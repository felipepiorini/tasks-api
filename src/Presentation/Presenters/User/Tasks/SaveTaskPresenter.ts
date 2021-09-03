import {Presenter} from "@Presentation/Presenters/Presenter";
import {HttpResponse} from "@Presentation/Http/HttpResponse";
import {IRequest, IResponse} from "@Presentation/Contracts/Users/Tasks/Tasks.contracts";
import {TaskUseCase} from "@Domain/Users/Tasks/UseCases/TaskUseCase";
import {TaskUseCaseFactory} from "@Domain/Users/Tasks/Factories/TaskUseCaseFactory";
import {InvalidParamError} from "@Presentation/Http/HttpResponse/Errors/InvalidParamError";

export class SaveTaskPresenter extends Presenter<IRequest, IResponse> {

    protected constructor(
        req: IRequest,
        private TaskUseCase: TaskUseCase
    ) {
        super(req);
    }

    public static factory(req: IRequest) {
        
        SaveTaskPresenter.validate(req);

        return new SaveTaskPresenter(
            req,
            TaskUseCaseFactory(req)
        )
    }

    async handle(): Promise<HttpResponse<IResponse>> {
        const response = await this.TaskUseCase.handle();

        return this.httpResponse.Success({
            message: "task save successfully",
            data: response
        }, 200)
    }

    public static validate(req: IRequest) {
        if (!req.body.userId) {
            throw new InvalidParamError('Informar o userId')
        }

        if (req.body.description.length > 255) {
            throw new InvalidParamError('A descrição não pode conter mais que 255 caracteres')
        }
    }
    
}

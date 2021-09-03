import {Presenter} from "@Presentation/Presenters/Presenter";
import {HttpResponse} from "@Presentation/Http/HttpResponse";
import {IRequest, IResponse} from "@Presentation/Contracts/Admin/Tasks/Tasks.contracts";
import {ListTaskUseCase} from "@Domain/Admin/Tasks/UseCases/ListTaskUseCase";
import {ListTasksUseCaseFactory} from "@Domain/Admin/Tasks/Factories/ListTasksUseCaseFactory";

export class ListTasksPresenter extends Presenter<IRequest, IResponse> {

    protected constructor(
        req: IRequest,
        private ListTaskUseCase: ListTaskUseCase
    ) {
        super(req);
    }

    public static factory(req: IRequest) {
        
        return new ListTasksPresenter(
            req,
            ListTasksUseCaseFactory(req)
        )
    }

    async handle(): Promise<HttpResponse<IResponse>> {
        const data = await this.ListTaskUseCase.handle();

        return this.httpResponse.Success({
            message: "success",
            data: data 
        }, 200)
    }
    
}

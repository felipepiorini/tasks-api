import {ListTaskUseCase} from "@Domain/Admin/Tasks/UseCases/ListTaskUseCase"
import {ListTasksPresenter} from "./ListTasksPresenter"
import {Success} from "@Presentation/Http/HttpResponse/Success";

const mockResponseObject = () => ({
    "message": expect.any(String),
    "data": expect.any(String),
})

const fakeRequest = {
	body: {  
		any: "any"
    }
}

function MakePresenter(fakeRequest: any) {
    return ListTasksPresenter.factory(fakeRequest)
}

describe('GET api/v1/admin/list-tasks', () => {

    test('Deve retornar 200 se sucesso', async () => {

        jest.spyOn(ListTaskUseCase.prototype, "handle")
        .mockImplementationOnce(() => {
            return Promise.resolve('any')
        })
      
        const presenter = MakePresenter(fakeRequest);
        const response: any = await presenter.handle();
    
        expect(response).toBeInstanceOf(Success)
        expect(response.data).toEqual(mockResponseObject())
      
    })

});
import {TaskUseCase} from "@Domain/Users/Tasks/UseCases/TaskUseCase"
import {SaveTaskPresenter} from "./SaveTaskPresenter"
import {Success} from "@Presentation/Http/HttpResponse/Success";
import { InvalidParamError } from "@Presentation/Http/HttpResponse/Errors/InvalidParamError";

const bodyRequestComplete = {
	body: {  
		userId: "any_id",
        description: "any_description"
    }
}

const bodyRequestWithoutUser = {
	body: {  
        description: "any_description"
    }
}

const bodyRequestWithDescriptionTooLarge = {
	body: {  
        userId: "any_id",
        description: "any_description_too_large any_description_too_large any_description_too_large any_description_too_large any_description_too_large any_description_too_large any_description_too_large any_description_too_large any_description_too_large any_description_too_large any_description_too_large any_description_too_large any_description_too_large any_description_too_large"
    }
}

function MakePresenter(reqObj: any) {
    return SaveTaskPresenter.factory(reqObj)
}

describe('Save Tasks Tests', () => {

    test('Deve retornar 200 com um retorno success se todos os parametros forem enviados', async () => {
        jest.spyOn(TaskUseCase.prototype, "handle")
            .mockImplementationOnce(() => {
                return Promise.resolve('any')
            })

        const presenter = MakePresenter(bodyRequestComplete);
        const response: any = await presenter.handle();

        expect(response).toBeInstanceOf(Success)
        expect(response.data.message).toEqual('task save successfully')
    })

    test('Deve retornar 400 BadRequest com um retorno de parametro invalido userId', async () => {
        jest.spyOn(TaskUseCase.prototype, "handle")
            .mockImplementationOnce(() => {
                return Promise.resolve('any')
            })

        try {  
            MakePresenter(bodyRequestWithoutUser);
        } catch (e) {
            expect(e).toBeInstanceOf(InvalidParamError)
            expect(e.message).toEqual('Informar o userId')
        }
    })

    test('Deve retornar 400 BadRequest com um retorno de parametro invalido description too large', async () => {
        jest.spyOn(TaskUseCase.prototype, "handle")
            .mockImplementationOnce(() => {
                return Promise.resolve('any')
            })

        try {  
            MakePresenter(bodyRequestWithDescriptionTooLarge);
        } catch (e) {
            expect(e).toBeInstanceOf(InvalidParamError)
            expect(e.message).toEqual('A descrição não pode conter mais que 255 caracteres')
        }
    })

});
export interface IRequest {
    body: {
        userId: number,
        description: string,
        dateEnd: string,
        status: string,
    }
}

export interface IResponse {
    message: string,
    data: {
        id: string,
        description: string,
        dateEnd: string,
        userId: string,
        userName: string
    }
}
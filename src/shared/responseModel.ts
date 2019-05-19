export class ResponseModel {
    body: any;
    statusCode: string;

    constructor(body: any, statusCode: string) {
        this.body = body;
        this.statusCode = statusCode;
    }
};
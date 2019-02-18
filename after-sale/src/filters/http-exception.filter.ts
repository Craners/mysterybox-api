import { ExceptionFilter, ArgumentsHost, Catch, HttpException, HttpStatus } from "@nestjs/common";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(error: Error, host: ArgumentsHost) {

        const response = host.switchToHttp().getResponse();

        const status = (error instanceof HttpException) ? error.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        response
            .status(status)
            .json(error);
    }
}
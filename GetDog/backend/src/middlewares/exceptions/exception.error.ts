import { HttpException, HttpStatus } from '@nestjs/common';

export class ExceptionError extends HttpException {
  constructor(mensagem: string, httpStatus: HttpStatus) {
    super(mensagem, httpStatus);
  }
}
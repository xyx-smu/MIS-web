export class ApiError implements Error {
  name: string;
  message: string;
  stack?: string;
  code: number;
  constructor(code: number, message: string) {
    this.name = "Api Error";
    this.code = code;
    this.message = message;
  }
}

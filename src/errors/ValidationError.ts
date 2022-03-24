import { ValidationError as libValidationError } from "class-validator";

class ValidationError extends Error {
  errorList?: libValidationError[];

  length: number;

  constructor(errorList?: libValidationError[], customMessage?: string) {
    super();
    this.name = "Validation Error";

    if (customMessage) {
      this.message = customMessage;
    } else if (errorList && errorList.length > 0) {
      this.message = errorList[0].toString();
    } else {
      this.message = "No errors specified";
    }

    if (errorList?.length) {
      this.length = errorList.length;
    } else {
      this.length = 0;
    }

    this.errorList = errorList;
  }
}

export default ValidationError;

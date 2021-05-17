import {HttpErrorResponse} from "@angular/common/http";

export const extractApiErrors = (error: HttpErrorResponse): BookingApp.ApiError[] => {
  console.log(JSON.stringify(error));
  let errors: BookingApp.ApiError[] = [{title: 'Error', details: 'Ooops something went wrong'}];
  if (error && error.error && error.error.errors ) {
    errors = error.error.errors;
  }
  return errors;
}

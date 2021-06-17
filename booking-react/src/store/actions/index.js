export const extractApiErrors = (resError) => {
    let errors = [{title: 'Error!', detail: 'Oooops, something went wrong! '}];
    if( resError && resError.data && resError.data.errors) {
        errors = resError.data.errors;
    }
    return errors;
}

export * from './auth.action';
export * from './rentals.action';
export * from './bookings.action';


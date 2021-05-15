import React from 'react';
import {ErrorMessage} from "@hookform/error-message";

const FormError = ({children, errors, name}) => {
    const error = errors[name] || null;

    if (!error) { return null; }

    return <div className="alert alert-danger" children={children(error.message)}></div>
}

export default FormError;

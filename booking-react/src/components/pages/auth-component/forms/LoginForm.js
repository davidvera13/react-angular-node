import React from 'react';
import {useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';


const LoginForm = ({onSubmit}) => {
    debugger;
    // eslint-disable-next-line
    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: "all"
    });

    const Error = ({ children }) =>
        <div className='alert alert-danger'>
            { children }
        </div>


    // eslint-disable-next-line
    const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    debugger;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    {
                        ...register(
                            "email",
                            {
                                required: "Email is required",
                                pattern: {
                                    value: EMAIL_PATTERN,
                                    message: "Must be valid email format!"
                                }
                            }
                        )
                    }
                    name="email"
                    type="email"
                    className="form-control"
                    id="email" />
            </div>
            <div>
                <ErrorMessage as={<Error />} errors={errors} name="email">
                    {({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <p key={type}>HELLO<div className='alert alert-danger'>{message}</div></p>
                        ))
                    }
                </ErrorMessage>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    {
                        ...register(
                            "password",
                            {
                                required: "Password is required",
                                minLength: {
                                    value: 5,
                                    message: "Password is too short"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Password is too long"
                                }
                            }
                        )
                    }
                    name="password"
                    type="password"
                    className="form-control"
                    id="password" />
            </div>
            <div>
                <ErrorMessage as={<Error />} errors={errors} name="password">
                    {({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                        ))
                    }
                </ErrorMessage>
            </div>

            <button
                type="submit"
                className="btn btn-booking-main">Submit</button>
        </form>
    );
};

export default LoginForm;

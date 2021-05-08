import React from 'react';
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";

const RegisterForm = ({onSubmit}) => {
    // eslint-disable-next-line
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        criteriaMode: "all"
    });

    const Error = ({ children }) =>
        <div className='alert alert-danger'>
            { children }
        </div>

    // eslint-disable-next-line
    const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    {
                        ...register(
                            "username",
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
                    name="username"
                    type="text"
                    className="form-control"
                    id="username" />
            </div>
            <div>
                <ErrorMessage as={<Error />}  errors={errors} name="username">
                    {({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                        ))
                    }
                </ErrorMessage>
            </div>


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
                            <p key={type}>{message}</p>
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

            <div className="form-group">
                <label htmlFor="passwordConfirmation">Confirm Password</label>
                <input
                    {
                        ...register(
                            "passwordConfirmation",
                            {
                                required: true,
                                minLength: 5,
                                maxLength: 20,
                                validate: {
                                    sameAsPassword: (value) => value === getValues()["password"]  // sameAsPassword('password', getValues())
                                }
                            }
                        )
                    }
                    name="passwordConfirmation"
                    type="password"
                    className="form-control"
                    id="passwordConfirmation" />
            </div>

            <div>
                {
                    errors.passwordConfirmation &&
                    <div className='alert alert-danger'>
                        {
                            errors.passwordConfirmation.type === 'required' &&
                            <span>Password confirmation is required</span>
                        }
                        {
                            errors.passwordConfirmation.type === 'minLength' &&
                            <span>Password confirmation is too short</span>
                        }
                        {
                            errors.passwordConfirmation.type === 'maxLength' &&
                            <span>Password confirmation is too long</span>
                        }
                        {
                            errors.passwordConfirmation.type === 'sameAsPassword' &&
                            <span>Password and password confirmation are not the same</span>
                        }
                    </div>
                }
            </div>

            <button
                type="submit"
                className="btn btn-booking-main">Submit</button>
        </form>
    )
}

export default RegisterForm;

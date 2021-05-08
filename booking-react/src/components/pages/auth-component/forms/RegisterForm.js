import React from 'react';
import {useForm} from "react-hook-form";

const RegisterForm = ({onSubmit}) => {
    // eslint-disable-next-line
    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm();

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
                                required: true,
                                minLength: 5,
                                maxLength: 20
                            }
                        )
                    }
                    name="username"
                    type="text"
                    className="form-control"
                    id="username" />
            </div>

            <div>
                {
                    errors.password &&
                    <div className='alert alert-danger'>
                        {
                            errors.password.type === 'required' &&
                            <span>Password is required</span>
                        }
                        {
                            errors.password.type === 'minLength' &&
                            <span>Password is too short</span>
                        }
                        {
                            errors.password.type === 'maxLength' &&
                            <span>Password is too long</span>
                        }
                    </div>
                }
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    {
                        ...register(
                            "email",
                            {
                                required: true,
                                pattern: EMAIL_PATTERN
                            }
                        )
                    }
                    name="email"
                    type="email"
                    className="form-control"
                    id="email" />
            </div>
            <div>
                {
                    errors.email &&
                    <div className='alert alert-danger'>
                        {
                            errors.email.type === 'required' &&
                            <span>Email is required</span>
                        }
                        {
                            errors.email.type === 'pattern' &&
                            <span>Must be valid email format!</span>
                        }

                    </div>
                }
            </div>


            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    {
                        ...register(
                            "password",
                            {
                                required: true,
                                minLength: 5,
                                maxLength: 20
                            }
                        )
                    }
                    type="password"
                    className="form-control"
                    id="password" />
            </div>
            <div>
                {
                    errors.password &&
                    <div className='alert alert-danger'>
                        {
                            errors.password.type === 'required' &&
                            <span>Password is required</span>
                        }
                        {
                            errors.password.type === 'minLength' &&
                            <span>Password is too short</span>
                        }
                        {
                            errors.password.type === 'maxLength' &&
                            <span>Password is too long</span>
                        }
                    </div>
                }
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

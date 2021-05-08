import React from 'react';
import {useForm} from "react-hook-form";


const LoginForm = ({onSubmit}) => {
    // eslint-disable-next-line
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // eslint-disable-next-line
    const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    name="password"
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

            <button
                type="submit"
                className="btn btn-booking-main">Submit</button>
        </form>
    );
};

export default LoginForm;

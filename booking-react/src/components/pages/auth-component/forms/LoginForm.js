import React from 'react';
import {useForm} from "react-hook-form";


const LoginForm = ({onSubmit}) => {
    // eslint-disable-next-line
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = (data) => {
    //     // eslint-disable-next-line
    //     console.log(data);
    //     console.log("email : " + watch("email"));
    //     console.log("passwd: " + watch("password"));
    // }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    {...register("email")}
                    name="email"
                    type="email"
                    className="form-control"
                    id="email" />
                {/* <div className="alert alert-danger">
            <div>
              Email is required.
            </div>
            <div>
              Must be valid email format!
            </div>
          </div> */}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    {...register("password")}
                    name="password"
                    type="password"
                    className="form-control"
                    id="password" />
            </div>

            <button
                type="submit"
                className="btn btn-booking-main">Submit</button>
        </form>
    );
};

export default LoginForm;

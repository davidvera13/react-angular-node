import React from 'react';
import RegisterForm from "./forms/RegisterForm";
import { registerUser } from '../../../store/actions/index';
import { Redirect } from 'react-router-dom'
import ApiErrors from '../auth-component/forms/ApiErrors'


class Register extends React.Component {

    state = {
        shouldRedirect: false,
        errors: []
    }

    // eslint-disable-next-line
    signUp = (registerData) => {
        registerUser(registerData)
            .then(() => {
                console.log('Success !')
                this.setState({shouldRedirect: true});
            })
            .catch(errors => {
                console.log(errors);
                this.setState({ errors })
            });
    };
    render() {
        const { shouldRedirect, errors } = this.state;
        if (shouldRedirect) {
            // redirect to login page
            // return <Redirect to="/login" />;
            return <Redirect to={{pathname: '/login', state: { message: 'You have been successfully registered'}}} />
        };

        return(
            <div className="booking-form">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="page-title">Register</h1>
                        <RegisterForm onSubmit={this.signUp} />

                        <ApiErrors errors={errors} />

                    </div>
                    <div className="col-md-6 ml-auto">
                        <div className="image-container">
                            <h2 className="catchphrase">As our member you have access to most awesome places in the world.</h2>
                            <img src="/images/register-image.jpg" alt="Register an user" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;

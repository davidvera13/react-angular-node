import React from 'react';
import LoginForm from "./forms/LoginForm";
import { loginUser } from '../../../store/actions/index';
import {Redirect} from "react-router-dom";
import ApiErrors from '../auth-component/forms/ApiErrors'


class Login extends React.Component {

    state = {
        shouldRedirect: false,
        errors: []
    }

    // eslint-disable-next-line
     signIn = (loginData) => {
        // console.log(loginData)
        // alert(JSON.stringify(loginData));
         loginUser(loginData)
             .then((token) => {
                 console.log('token:')
                 console.log(token)
                 this.setState({shouldRedirect: true});
             })
             .catch(errors => {
                 console.log(errors);
                 this.setState({ errors })
             });
    };


    render() {
        const { errors, shouldRedirect} = this.state;
        if (shouldRedirect) {
            return <Redirect to={{ pathname: '/' }} />
        }

        return(
            <div className="booking-form">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="page-title">Login</h1>
                        {/* <!-- <div className="alert alert-success">
        Some message
      </div> --> */}
                        <LoginForm onSubmit={this.signIn} />
                        <ApiErrors errors = {errors} />
                    </div>
                    <div className="col-md-6 ml-auto">
                        <div className="image-container">
                            <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
                            <img src="/images/login-image.jpg" alt="Login an user" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;

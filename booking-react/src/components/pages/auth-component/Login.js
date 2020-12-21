import React from 'react';
import store from '../../../store'
import { StateContext } from "../../../state-context";

class Login extends React.Component {
    render() {
        return(
            <div>
                <h1>Login page</h1>
                <hr />
                <p>{JSON.stringify(this.context.rentals())}</p>

            </div>
        )
    }
}

Login.contextType = StateContext;
export default Login;
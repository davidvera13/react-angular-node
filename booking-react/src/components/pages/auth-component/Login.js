import React from 'react';
import connect from "../../../store/connect";


class Login extends React.Component {
    render() {
        const { rentals } = this.props;
        return(
            <div>
                <h1>Login page</h1>
                <hr />
                <p>{JSON.stringify(rentals())}</p>

            </div>
        )
    }
}

export default connect(Login);
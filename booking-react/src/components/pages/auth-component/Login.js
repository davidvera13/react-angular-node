import React from 'react';
import connect from "../../../store/connect";


class Login extends React.Component {
    render() {
        const { data } = this.props;
        return(
            <div>
                <h1>Login page</h1>
                <hr />
                <p>{JSON.stringify(data())}</p>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.data2
    }
}
export default connect(mapStateToProps)(Login);
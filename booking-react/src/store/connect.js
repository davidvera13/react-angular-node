import React from "react";
import {StateContext} from "../state-context";

// this functional can be imported and used in any other class or functional component
// by exporting default : export default connect(myfunctionorclass)
const connect = (Component) => {
    // return class extends React.Component {} => anonymous class
    class Connect extends React.Component {
        alertMessage() {
            alert("Hello world")
        }
        render() {
            // return <Component alert={this.alertMessage} />
            // this will return only rentals
            //return <Component rentals={this.context.rentals} />
            // this will return all from the store
            return <Component {... this.context} />
        }
    }
    Connect.contextType = StateContext;

    return Connect;
}
export default connect;
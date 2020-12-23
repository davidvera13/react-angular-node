import React from "react";
import {StateContext} from "../state-context";

// this functional can be imported and used in any other class or functional component
// by exporting default : export default connect(myfunctionorclass)
const connect = (selectedState) => {
    return (Component) => {
        // return class extends React.Component {} => anonymous class
        class Connect extends React.Component {
            alertMessage() {
                alert("Hello world")
            }
            render() {
                const initialState = this.context ;
                const slice = selectedState(initialState)
                // return <Component alert={this.alertMessage} />
                // this will return only rentals
                //return <Component rentals={this.context.rentals} />
                // this will return all from the store
                return <Component {... slice} />
            }
        }
        Connect.contextType = StateContext;

        return Connect;
    }
}

export default connect;
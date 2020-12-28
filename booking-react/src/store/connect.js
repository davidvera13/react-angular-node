import React from 'react';
import { StateContext } from './Provider';

const connect = selectedState => Component => {
    class Connect extends React.Component {
        constructor(props, context) {
            super(props);

            this.state = {
                slice: selectedState(context.getState())
            }

            this.unsubscribe = context.subscribe(() => this.handleStateChange(context));
        }

        componentWillUnmount() {
            this.unsubscribe();
        }

        handleStateChange = (context) => {
            const rootState = context.getState();
            this.setState({slice: selectedState(rootState)})
        }

        render() {
            const { dispatch } = this.context;
            const {slice} = this.state;
            return <Component {...slice} dispatch={dispatch} />
        }
    }
    Connect.contextType = StateContext;
    return Connect;
}


export default connect;
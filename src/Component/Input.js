import React, {Component, Fragment} from 'react';

class Input extends Component {
    state = {
        input_val : ''
    };
    render() {
        return (
            <Fragment>
                <Input placeholder={this.props.placeholder} value={this.state.input_val} onChange={this.handleChange}/>
                <div>{this.state.input_val}</div>
            </Fragment>
        );
    }
}
export default Input;
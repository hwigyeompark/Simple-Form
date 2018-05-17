import React, {Component, Fragment} from 'react';
import Input from "./Input";

class SimpeForm extends Component{
    state = {
        msg: ''
    };

    render(){
        return(
            <Fragment>
                Name <Input/>
            </Fragment>
        )
    }
}
export default SimpeForm;
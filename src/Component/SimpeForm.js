import React, {Component, Fragment} from 'react';
import Input from "./Input";
import Button from "./Button";

class SimpeForm extends Component{
    state = {
        msg: ''
    };
    

    render(){
        return(
            <Fragment>
                Name <Input placeholder="name"/>
                Phone <Input placeholder="phone"/>
                Nickname <Input placeholder="nickname"/>
                <Button title = "버튼" buttonClick={this.onClick}/>
            </Fragment>
        )
    }
}
export default SimpeForm;
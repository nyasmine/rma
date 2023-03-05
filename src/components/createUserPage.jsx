import React, { Component } from "react";
import {render} from "react-dom";

class CreateUser extends Component {
    //Checking if user is already logged in.
    //List of states, put them in drop down menu.
    state = {
        province: ['Alberta', 'British-Columbia',
            'Ontario', 'Nova-Scotia', 'Quebec',
            'Saskatchewan', 'Manitoba', 'PEI', 'Newfoundland & Labrador',
            'Yukon', 'Nunavut', 'New-Brunswick', 'Northwest Territories']
    };

    provinceDrpDwnValues(state){
        for (let i = 0; i < state.size; i++){
            let value = state[i];
            console.log(value);
        }

    }

    render() {
        return(
            <React.Fragment>
                <input className="m-2" type={"text"} placeholder={'First Name'}/>
                <input className="m-2" type={"text"} placeholder={'Last Name'}/>
                <input className="m-2" type={"text"} placeholder={'Email Address'}/>
                <input className="m-2" type={"text"} placeholder={'Password'}/>
                <input className="m-2" type={"text"} placeholder={'Address'}/>
                <input className="m-2" type={"text"} placeholder={'Postal Code'}/>
                {/*<div className="dropdown">*/}
                {/*    <label for="dropdown">Choose your Province</label>*/}
                {/*    <select className="dropdown">Province</select>*/}
                {/*    <option value=this.provinceDrpDwnValues>*/}
                {/*        this.provinceDrpDwnValues*/}
                {/*    </option>*/}
                {/*</div>*/}
                <button className="btn btn-primary m-2">Create Account</button>
            </React.Fragment>);
    }
}

export default CreateUser;
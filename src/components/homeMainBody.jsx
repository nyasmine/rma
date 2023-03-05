import React, { Component } from "react";
import {render} from "react-dom";
import createUserPage from "./createUserPage";

class HomeMainBody extends Component {
    // //Checking if user is already logged in.
    // state = {
    //     isLoggedIn: false
    // };

    handleCreateUser() {
        console.log('Create User Clicked');
    }

    handleLogIn(){
        console.log('Here is the LogIn Page!')
    }


    render() {
        return(
        <React.Fragment>
            <button onClick={this.handleCreateUser} className="btn btn-primary m-2">Create User</button>
            <button onClick={this.handleLogIn} className="btn btn-primary m-2">Log In</button>
            <input className="m-2" type={"text"} placeholder={'Search'}/>
        </React.Fragment>);
    }
}

export default HomeMainBody;
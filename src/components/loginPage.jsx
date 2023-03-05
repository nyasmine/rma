import React, { Component } from "react";
import {render} from "react-dom";


class Login extends Component {

    render() {
        return(
            <React.Fragment>
                <div>
                    <a>{this.state.links.map(links => <li key={links}>{links}</li>)}</a>
                </div>
            </React.Fragment>);
    }
}

export default Footer;
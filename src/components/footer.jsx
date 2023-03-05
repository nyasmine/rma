import React, { Component } from "react";
import {render} from "react-dom";


class Footer extends Component {
    state = {
        links: ['About Us', 'Contact Us', 'Terms of Service', 'Copyrights' ]
    };
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
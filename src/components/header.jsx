import React, { Component } from "react";
import {render} from "react-dom";
import rateMyAppLogo from './RateMyApartmentTempLogo.png';


class Header extends Component {

    render() {
        return(
            <React.Fragment>
                <img src={rateMyAppLogo} />
            </React.Fragment>);
    }
}

export default Header;
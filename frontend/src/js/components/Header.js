import React, {Component} from "react";
import AppSettings from "./AppSettings";

class Header extends Component {
    render() {
        return (
            <header>
                <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <AppSettings/>
            </header>
        );
    }
}

export default Header;
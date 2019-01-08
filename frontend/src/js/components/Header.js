import React, {Component} from "react";
import AppSettings from "./AppSettings";
import Clock from 'react-live-clock';

class Header extends Component {
    render() {
        return (
            <header className={this.props.appTheme}>
                <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <Clock format={'HH:mm'} ticking={true} timezone={'Europe/Prague'} />

                <AppSettings toggleTheme={this.props.toggleTheme}/>
            </header>
        );
    }
}

export default Header;
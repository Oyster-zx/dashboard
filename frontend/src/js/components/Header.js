import React, {Component} from "react";
import AppSettings from "./AppSettings";
import Clock from 'react-live-clock';
import Logo from "./Logo";

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            active: false
        }
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <header className={`${this.props.appTheme} ${this.state.active ? 'nav-opened' : ''}`}>
                <button  onClick={this.handleClick} className={`${this.state.active ? 'nav-opened' : ''}`} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <Clock format={'HH:mm'} ticking={true} timezone={'Europe/Prague'} />

                <AppSettings toggleTheme={this.props.toggleTheme}/>

                <nav className={`${this.state.active ? 'opened' : ''}`}>

                    <Logo/>

                    <div className="nav-content">
                        {/*<h2>Notes</h2>*/}
                        {/*<ul id="nav-notes">*/}
                            {/*<li className="nothing">There are no notes to navigate</li>*/}
                        {/*</ul>*/}

                        {/*<h2>Todos</h2>*/}
                        {/*<ul id="nav-todos">*/}
                            {/*<li className="nothing">There are no todos to navigate</li>*/}
                        {/*</ul>*/}

                        {/*<h2>Counters</h2>*/}
                        {/*<ul id="nav-counters">*/}
                            {/*<li className="nothing">There are no counters to navigate</li>*/}
                        {/*</ul>*/}
                    </div>

                </nav>
            </header>
        );
    }
}

export default Header;
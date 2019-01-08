import React, {Component} from "react";
import Switch from "react-switch";

class AppSettings extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            active: false,
            switched: false
        }
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    handleChange = () => {
        this.setState({
            switched: !this.state.switched
        });
        this.props.toggleTheme();
    }

    render() {
        return (
            <div className="settings">
                <a onClick={this.handleClick}
                   className={`open-settings-menu${this.state.active ? ' menu-opened' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <div className={`settings-menu${this.state.active ? ' d-block' : ''}`}>
                    <div>
                        <h2>App theme</h2>
                        <div className="d-flex justify-content-center mb-5">

                            <div className='mr-2'>Light</div>

                            <Switch
                                onChange={this.handleChange}
                                checked={this.state.switched}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                onColor={'#000'}
                                onHandleColor={'#fff'}
                                offColor={'#fff'}
                                offHandleColor={'#000'}
                                id="normal-switch"
                            />

                            <div className='ml-2'>Dark</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppSettings;
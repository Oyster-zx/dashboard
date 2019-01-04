import React, {Component} from "react";

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

    render() {
        return (
            <div className="settings">
                <a onClick={this.handleClick} className={`open-settings-menu${this.state.active ? ' menu-opened' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <div className={`settings-menu${this.state.active ? ' d-block' : ''}`}>
                    <div>
                        <h2>App theme</h2>

                        <input type="checkbox" id="app-theme-selector" checked/>
                        <label htmlFor="app-theme-selector" data-light="light" data-dark="dark"></label>
                    </div>
                    <div>
                        <h2>Background</h2>
                        {/*<input type="radio" id="app-background-default" name="app-background-selector" />*/}
                            {/*<label htmlFor="app-background-default" className="app-background-change">Default</label>*/}
                            {/*<input type="radio" id="app-background-flickr" name="app-background-selector">*/}
                                {/*<label htmlFor="app-background-flickr" className="app-background-change">*/}
                                    {/*Flickr*/}
                                    {/*<a href="#" id="refreshBg" className="disabled">refresh</a>*/}
                                {/*</label>*/}
                                {/*<input type="radio" id="app-background-custom" name="app-background-selector" />*/}
                                    {/*<label htmlFor="app-background-custom" className="app-background-change">*/}
                                        {/*Custom*/}
                                        {/*<input type="file" id="file-selector" disabled/>*/}
                                            {/*<label htmlFor="file-selector">choose image</label>*/}
                                    {/*</label>*/}
                    </div>
                    <div>
                        <a href="#contact" className="link-contact">Contact us</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppSettings;
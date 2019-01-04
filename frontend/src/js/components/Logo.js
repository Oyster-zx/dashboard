import React, {Component} from "react";

class Logo extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={'logo'}>
                <img src={'logo-pink.svg'} alt="Dashboard Logo" />
            </div>
        );
    }
}

export default Logo;
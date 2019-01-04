import React, {Component} from "react";

class AddNew extends Component {

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

        let test;
        if (this.state.active) {
              this.class += 'je';
        } else {
            this.class += 'not';
        }

        return (
            <div className="add-new">
                {test}
                <div className={`add-new__choice${this.state.active ? ' opened' : ''}`}>

                    <ul>
                        <li><a href="" data-target="note">Note</a></li>
                        <li><a href="" data-target="todo">Todo</a></li>
                        <li><a href="" data-target="counter">Counter</a></li>
                    </ul>
                </div>
                <button onClick={this.handleClick}><i className="fa fa-plus fa-2x"></i></button>
            </div>
        );
    }
}

export default AddNew;
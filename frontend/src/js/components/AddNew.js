import React, {Component} from "react";
import Note from "./Note";
import Counter from "./Counter";

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

        return (
            <div className="add-new">
                <div className={`add-new__choice${this.state.active ? ' opened' : ''}`}>

                    <ul>
                        <li><a href="#" onClick={this.props.addNote}>Note</a></li>
                        <li><a href="#" onClick={this.props.addTodo}>Todo</a></li>
                        <li><a href="#" onClick={this.props.addCounter}>Counter</a></li>
                    </ul>
                </div>
                <button onClick={this.handleClick}><i className="fa fa-plus fa-2x"></i></button>
            </div>
        );
    }
}

export default AddNew;
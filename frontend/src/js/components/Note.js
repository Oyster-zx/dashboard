import React, {Component} from "react";
import 'regenerator-runtime/runtime';

class Note extends Component {

    constructor(props) {
        super(props);

        this.changeText = this.changeText.bind(this);

        this.state = {
            text: "Add some text..."
        }
    }

    changeText(event) {
        this.setState({
            text: event.target.value
        });
    }


    render() {
        return (
            <div className={'note'}>
                <input type="text" onChange={this.changeText} placeholder={this.state.text}/>
            </div>
        );
    }
}

export default Note;
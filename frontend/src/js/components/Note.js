import React, {Component} from "react";
import 'regenerator-runtime/runtime';

class Note extends Component {

    constructor(props) {
        super(props);

        this.changeText = this.changeText.bind(this);

        this.state = {
            key: this.props.widgetKey,
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
            <div className={'module note'}>
                <textarea className='note-text' onChange={this.changeText} placeholder={this.state.text} autoFocus="true"/>
                <button className="fa fa-times-circle fa-lg remove-btn" onClick={() => this.props.deleteWidget(this.state.key)} />
            </div>
        );
    }
}

export default Note;
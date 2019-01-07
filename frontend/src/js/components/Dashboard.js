import React, {Component} from "react";
import AddNew from "./AddNew";
import Note from "./Note";
import Counter from "./Counter";
import Todo from "./Todo";

class Dashboard extends Component {


    constructor(props) {
        super(props);

        this.state = {
            widgets: []
        }
    }

    updateStateWithWidget = (widget) => {
        this.setState({
            widgets: [...this.state.widgets, widget]
        });
    }

    addNote = () => {
        let newNote = <Note/>;
        this.updateStateWithWidget(newNote);

        // todo send to backend
    }

    addCounter = () => {
        let newCounter = <Counter/>;
        this.updateStateWithWidget(newCounter);

        // todo send to backend
    }

    addTodo = () => {
        let newTodo = <Todo/>;
        this.updateStateWithWidget(newTodo);

        // todo send to backend
    }

    createTasks = (item) => {
        return <li key={Math.random()}>{item}</li>
    }

    render() {
        const listItems = this.state.widgets.map(this.createTasks);

        return (
            <main id="dashboard">
                <div className={'container'}>
                    <h1>Hello {this.props.User.getName()}</h1>
                </div>

                <ul className="theList">{listItems}</ul>

                <AddNew addNote={this.addNote} addCounter={this.addCounter} addTodo={this.addTodo}/>
            </main>
        );
    }
}

export default Dashboard;
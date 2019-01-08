import React, {Component} from "react";
import AddNew from "./AddNew";
import Note from "./Note";
import Counter from "./Counter";
import Todo from "./Todo";
import ReactDOM from "react-dom";
import Header from "./Header";

class Dashboard extends Component {


    constructor(props) {
        super(props);

        this.state = {
            widgets: [],
            lightTheme: true
        }
    }

    updateStateWithWidget = (widget) => {
        this.setState({
            widgets: [...this.state.widgets, widget]
        });
    }

    addNote = () => {
        const key = Math.random();
        const newNote = {key: key, template: <Note widgetKey={key} deleteWidget={this.deleteWidget}/>};
        this.updateStateWithWidget(newNote);

        // todo send to backend
    }

    addCounter = () => {
        const key = Math.random();
        const newCounter = {key: key, template: <Counter widgetKey={key} deleteWidget={this.deleteWidget}/>};
        this.updateStateWithWidget(newCounter);

        // todo send to backend
    }

    addTodo = () => {
        const key = Math.random();
        let newTodo = {key: key, template: <Todo widgetKey={key} deleteWidget={this.deleteWidget}/>};
        this.updateStateWithWidget(newTodo);

        // todo send to backend
    }

    createTasks = (item) => {
        return <li key={item.key}>{item.template}</li>
    }

    deleteWidget = (key) => {
        const filteredItems = this.state.widgets.filter(item => {
            return item.key !== key
        })
        this.setState({
            widgets: filteredItems,
        })
    }

    toggleTheme = () => {
        this.setState({
            lightTheme: !this.state.lightTheme
        })
    }

    render() {
        const appTheme = this.state.lightTheme ? ' app-theme-light' : 'app-theme-dark';
        const listItems = this.state.widgets.map(this.createTasks);

        ReactDOM.render(<Header appTheme={appTheme} toggleTheme={this.toggleTheme}/>, document.getElementById('header'));

        return (
            <main id="dashboard" className={`app-background-default ${appTheme}`}>
                <div className="user-info d-flex">
                    <h3 className="mb-0">Hello, {this.props.User.getName()}!</h3>
                    <button className='btn btn-secondary btn-sm ml-4'>Log Out</button>
                </div>

                <ul className="d-flex">{listItems}</ul>

                <AddNew addNote={this.addNote} addCounter={this.addCounter} addTodo={this.addTodo}/>
            </main>
        );
    }
}

export default Dashboard;
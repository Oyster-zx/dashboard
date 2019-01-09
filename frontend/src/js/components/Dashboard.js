import React, {Component} from "react";
import AddNew from "./AddNew";
import Note from "./Note";
import Counter from "./Counter";
import Todo from "./Todo";
import ReactDOM from "react-dom";
import Header from "./Header";
import Constants from "./Constants";
import App from "../App";
import AppSettings from "./AppSettings";

let renderHeader = true;

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            widgets: [],
            lightTheme: true,
            latestDashboard: null
        }
    }

    componentDidMount() {
        this.props.dashboard.windows[0].notes.map(note => {
            this.addNoteFromDb(note.id, note.text);
        });
    }

    updateStateWithWidget = (widget) => {
        this.setState(prevState => ({
            widgets: [...prevState.widgets, widget]
        }));
    }

    addNoteFromDb = (id, text) => {
        const key = Math.random();
        const newNote = {
            key: key,
            template: <Note widgetKey={key} deleteWidget={this.deleteWidget} text={text}/>,
            type: 'Note',
            id: id
        };
        this.updateStateWithWidget(newNote);
    }

    sendData = async (newWidget) => {
        let response = await fetch(`${Constants.SERVER}/dashboard/add${newWidget.type}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                user_name: this.props.user.getName(),
                password: this.props.user.getEmail(),
                text: ""
            })
        });
        let body = await response.json();
        newWidget.id = body.id;
        this.updateStateWithWidget(newWidget);
    }

    addNote = async () => {
        const key = Math.random();
        const newNote = {
            key: key,
            template: <Note widgetKey={key} deleteWidget={this.deleteWidget} text={""}/>,
            type: 'Note'
        };

       this.sendData(newNote);
    }

    addCounter = () => {
        const key = Math.random();
        const newCounter = {
            key: key,
            template: <Counter widgetKey={key} deleteWidget={this.deleteWidget}/>,
            type: 'Counter'
        };

        this.sendData(newCounter);
    }

    addTodo = () => {
        const key = Math.random();
        let newTodo = {
            key: key,
            template: <Todo widgetKey={key} deleteWidget={this.deleteWidget}/>,
            type: 'Todo'
        };

        this.updateStateWithWidget(newTodo);
    }

    createTasks = (item) => {
        return <li key={item.key}>{item.template}</li>
    }

    deleteWidget = async (key) => {
        let deletedItem;
        const filteredItems = this.state.widgets.filter(item => {
            if (item.key !== key) {
                return true;
            }
            deletedItem = item;
            return false;
        });
        if (deletedItem) {
            console.log(deletedItem);
            let response = await fetch(`${Constants.SERVER}/dashboard/remove${deletedItem.type}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    user_name: this.props.user.getName(),
                    password: this.props.user.getEmail(),
                    id: `${deletedItem.id}`
                })
            });

            this.setState({
                widgets: filteredItems,
            })
        }
    }

    toggleTheme = () => {
        this.setState({
            lightTheme: !this.state.lightTheme
        })
    }

    logOut = () => {
        // var auth2 = gapi.auth2.getAuthInstance();
        // auth2.signOut().then(function () {
        //     console.log('User signed out.');
        // });
        // console.log(document.cookie)
        //
        // var res = document.cookie;
        // var multiple = res.split(";");
        // for(var i = 0; i < multiple.length; i++) {
        //     var key = multiple[i].split("=");
        //     document.cookie = key[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
        // }
        //
        // console.log(document.cookie)
        //
        // ReactDOM.render(<div></div>, document.getElementById('header'));
        ReactDOM.render(<App/>, document.getElementById('root'));
        // return (
            {/*<App/>*/}
        // )
    }

    render() {
        const appTheme = this.state.lightTheme ? ' app-theme-light' : 'app-theme-dark';
        const listItems = this.state.widgets.map(this.createTasks);

        return (
            <div>
            <Header appTheme={appTheme} toggleTheme={this.toggleTheme}/>
            <main id="dashboard" className={`app-background-default ${appTheme}`}>
                <div className="user-info d-flex">
                    <h3 className="mb-0">Hello, {this.props.user.getName()}!</h3>
                    <button className='btn btn-secondary btn-sm ml-4' onClick={this.logOut}>Log Out</button>
                </div>

                <ul className="d-flex">{listItems}</ul>

                <AddNew addNote={this.addNote} addCounter={this.addCounter} addTodo={this.addTodo}/>
            </main>
            </div>
        );
    }
}

export default Dashboard;
import React, {Component} from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from "./components/Dashboard";

class App extends Component {


    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            user: null,
            dashboard: null
        }
    }

    setUser = (user) => {

    }

    render() {
        let toRender;
        if (this.state.isLoggedIn)
            toRender = <Dashboard user={this.state.user} dashboard={this.state.dashboard}/>
        else
            toRender = <LoginForm />

        return (
            toRender
        )
    }
}


export default App;

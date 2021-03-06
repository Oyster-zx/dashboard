import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Button, Form, FormFeedback, FormGroup, Label, Input, Col} from 'reactstrap';
import Logo from "./Logo";
import App from "../App";
import Dashboard from "./Dashboard";
import User from "./User";
import Constants from "./Constants";

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);

        fetch('url', {
            username: this.state.username,
            password: this.state.password
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));

        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="login-form paper-content-holder">
                    <Logo/>
                    <h1 className="font-secondary">Log in</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="password" />
                            </Col>
                        </FormGroup>
                        <div className="d-flex flex-column align-items-center">
                            <Button color="primary" type="submit">Login</Button>
                            {/*<p className={'my-3'}>or</p>*/}

                            <Button className="g-signin2 btn-transparent mt-3" data-onsuccess="onSignIn">Login with Google</Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default LoginForm;

window.onSignIn = async (googleUser) =>{
    let profile = googleUser.getBasicProfile();
    let user = new User(profile.getId(), profile.getName(), profile.getImageUrl(), profile.getEmail());

    let response;
    await fetch(`${Constants.SERVER}/dashboard/read`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            user_name: user.getName(),
            password: user.getEmail()
        })
    })
        .then(res => response = res)
        .catch(error => alert(error));

    let dashboard;
    if(response != null) {
        dashboard = await response.json();
        console.log(dashboard);
        ReactDOM.render(<Dashboard user={user} dashboard={dashboard}/>, document.getElementById('root'));
    }

};
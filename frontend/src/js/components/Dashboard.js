import React, {Component} from "react";
import AddNew from "./AddNew";

class Dashboard extends Component {

    render() {
        return (
            <main id="dashboard">
                <div className={'container'}>
                    <h1>Hello {this.props.User.getName()}</h1>
                </div>

                <AddNew/>
            </main>
        );
    }
}

export default Dashboard;
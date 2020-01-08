import React, { Component } from "react";
import Users from "../user/Users";
import { isAuthenticated } from "../auth";
import { Redirect } from "react-router-dom";

class Admin extends Component {
    state = {
        redirectToHome: false
    };

    componentDidMount() {
        if (isAuthenticated().user.role !== "admin") {
            this.setState({ redirectToHome: true });
        }
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <div className="jumbotron">
                    <h2>Admin Dashboard</h2>
                    <p className="lead">Youn can begin editing</p>
                </div>
                <div className="container-fluid">
                    <div className="row">
                            <hr />
                            <Users />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;

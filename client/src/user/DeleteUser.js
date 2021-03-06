import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { remove } from "./apiUser";

class DeleteUser extends Component {
    state = {
        redirect: false
    };

    deleteAccount = () => {
        
        const userId = this.props.userId;
        remove(userId);
          
                this.setState({ redirect: true });
            
        
    };

    deleteConfirmed = () => {
        let answer = window.confirm(
            "Are you sure you want to delete your account?"
        );
        if (answer) {
            this.deleteAccount();
        }
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        return (
            <button
                onClick={this.deleteConfirmed}
                className="btn btn-raised btn-danger"
            >
                Delete Profile
            </button>
        );
    }
}

export default DeleteUser;

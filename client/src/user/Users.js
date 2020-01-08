import React, { Component } from "react";
import { list } from "./apiUser";
import DefaultProfile from "../img/student.png";
import { Link } from "react-router-dom";


class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        list().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ users: data });
            }
        });
    }

    renderUsers = users => (
        <div className="row">
            {users.map((user, i) => (
                <div className="card col-md-3" >
                    <img
                        style={{ height: "200px", width: "auto" }}
                        className="img-thumbnail"
                        src={`${process.env.REACT_APP_API_URL}/user/photo/${
                            user._id
                        }`}
                        onError={i => (i.target.src = `${DefaultProfile}`)}
                        alt={user.name}
                    />
                    <div className="card-body" style={{textAlign:"center"}}>
                        <h5 className="card-title" style={{fontWeight:"bold", fontSize:"19px"}}>{user.name}</h5>
                        {user.modules.map((module, i) => (
                        <p className="card-text" style={{fontFamily:"Oswald"}}>{module.moduleName} : {module.moduleTitle} <br/>
                         <span className="card-text">{module.Validation} : {module.Note} </span></p>
                        ))}
                        <Link
                            to={`/user/${user._id}`}
                            className="btn btn-raised btn-primary btn-sm"
                            style={{backgroundColor:"#2460A7FF"}}
                        >
                            View Profile
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );

    render() {
        const { users } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5" style={{color:"#813E1D", textAlign:"center"}}>RESULTS</h2>
                <hr/>
               
                {this.renderUsers(users)}
            </div>
        );
    }
}

export default Users;

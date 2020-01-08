import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { Redirect, Link } from "react-router-dom";
import { read } from "./apiUser";
import DefaultProfile from "../img/student.png";
import DeleteUser from "./DeleteUser";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: { modules: [] },
      redirectToSignin: false,
      error: "",
      posts: []
    };
  }





  init = userId => {
    const token = isAuthenticated().token;
    read(userId, token).then(data => {
      if (data.error) {
        this.setState({ redirectToSignin: true });
      } else {
        this.setState({ user: data });
      }
    });
  };



  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.init(userId);
  }



  render() {
    const { redirectToSignin, user } = this.state;
    if (redirectToSignin) return <Redirect to="/signin" />;

    const photoUrl = user._id
      ? `${process.env.REACT_APP_API_URL}/user/photo/${
          user._id
        }?${new Date().getTime()}`
      : DefaultProfile;

    return (
      <div className="container">
        <h2 className="mt-5 mb-5"style={{color:"#2460A7FF", textAlign:"center", fontFamily:"Oswald"}}>Profile</h2>
        <div className="row">
          <div className="col-md-4">
            <img
              style={{ height: "200px", width: "auto" }}
              className="img-thumbnail"
              src={photoUrl}
              onError={i => (i.target.src = `${DefaultProfile}`)}
              alt={user.name}
            />
          </div>

          <div className="col-md-8">
            <div className="lead mt-2">
              <p style={{fontFamily:"Oswald"}}>Hello! {user.name}</p>
              <p style={{fontFamily:"Oswald"}}>
                <span style={{fontWeight:"bold"}}> Email: </span>
                {user.email}</p>
              <p style={{fontFamily:"Oswald"}}>{`Joined ${new Date(user.created).toDateString()}`}</p>
              <p style={{fontFamily:"Oswald"}}>  
                   {user.modules.map((module, i) => (
                        <p >
                          <span style={{fontWeight:"bold"}}> {module.moduleName} </span> : {module.moduleTitle} <br/>
                         <span>{module.Validation} : {module.Note} </span></p>
                        ))}
              </p>
            </div>


            <div>
              {isAuthenticated().user &&
                isAuthenticated().user.role === "admin" && (
                  <div className="card mt-5">
                    <div className="card-body">
                      <h5 className="card-title">Admin</h5>
                      <p className="mb-2 text-danger">
                        Edit/Delete as an Admin
                      </p>
                      <Link
                        className="btn btn-raised btn-success mr-5"
                        to={`/user/edit/${user._id}`}
                      >
                        Edit Profile
                      </Link>
                      {/*<DeleteUser userId={user._id} />*/}
                      <DeleteUser />
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

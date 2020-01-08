import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { read, update } from "./apiUser";
import { Redirect } from "react-router-dom";
import DefaultProfile from "../img/student.png";

class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: {modules: []},
      error: "",
      loading: false,
      redirectToProfile: false,
      modules:[{
        _id: "",
        moduleTitle:"",
        Note:""
    }]
    };

  }

  init = userId => {
    const token = isAuthenticated().token;
    read(userId, token).then(data => {
      if (data.error) {
        this.setState({ redirectToProfile: true });
      } else {
        this.setState({
          user: data
        });
      }
    });
  };
  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.init(userId);
  }

  handleChange = (name,i) => event => {
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  updatemodules = (index) => event => {
    const modules = this.state.user.modules;
    modules[index].moduleTitle = event.target.value;
    this.setState({
      "modules.moduleTitle": modules.moduleTitle
    });
  };

  updateNote = (index) => event => {
    const modules = this.state.user.modules;
    modules[index].Note = event.target.value;
    this.setState({
      "modules.Note": modules.Note
    });
  };
  clickSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });


      const userId = this.props.match.params.userId;
      const token = isAuthenticated().token;
this.state.user.modules.map((module,i)=>{
    update( userId,token, module).then(data => {
    if (data.error) {
      this.setState({ error: data.error });
    } else  {
      console.log("good");
    } 
  });
})
    
    
  };

  signupForm = (name, email, modules) => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={this.handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={this.handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>

     

    

      {modules.map((module, i) => (
                    <div className="form-group" key={i}>
                       <hr />

                       
                        <label className="text-muted" >{module.moduleName} Title</label>
                        <input
                          onChange={
                            this.updatemodules(i)
                          }
                          type="text"
                          className="form-control"
                          value={module.moduleTitle}
                        />
                         <label className="text-muted" >{module.moduleName} Note</label>
                        <input
                          onChange={ this.updateNote(i)}
                          type="text"
                          className="form-control"
                          value={module.Note}
                        />
                         <hr />
                      </div>
                        ))}


      <button onClick={this.clickSubmit} className="btn btn-raised btn-primary">
        Update
      </button>
    </form>
  );

  render() {
    const {
      id,
      name,
      email,
      modules
    } = this.state.user;

    const{
      loading,
      error,
      redirectToProfile
    } = this.state;

    if (redirectToProfile) {
      return <Redirect to={`/user/${id}`} />;
    }

    const photoUrl = id
      ? `${
          process.env.REACT_APP_API_URL
        }/user/photo/${id}?${new Date().getTime()}`
      : DefaultProfile;

    return (
      <div className="container">
        <h2 className="mt-5 mb-5">Edit Profile</h2>
        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>

        {loading ? (
          <div className="jumbotron text-center">
            <h2>Loading...</h2>
          </div>
        ) : (
          ""
        )}

        <img
          style={{ height: "200px", width: "auto" }}
          className="img-thumbnail"
          src={photoUrl}
          onError={i => (i.target.src = `${DefaultProfile}`)}
          alt={name}
        />

        {isAuthenticated().user.role === "admin" &&
          this.signupForm(name, email,modules)}

        
      </div>
    );
  }
}

export default EditProfile;

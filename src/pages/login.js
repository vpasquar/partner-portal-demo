import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class UserLogin extends Component {
    //state just includes the articles that will be stored once we contact our API (database)

    state = {
        signup: false,
        fName: "",
        lName: "",
        uName: "",
        eMail: "",
        passW: "",
        activeUser: ""
    };

    componentDidMount() {
        // console.log("component mounted")
    };

    initializeState = () => { //for resetting forms once submitted.
        this.setState({
            fName: "",
            lName: "",
            uName: "",
            eMail: "",
            passW: "",
            isLoggedIn: false
        });
    }

    setSignup = e => { //for when the user wants to login or signup
        e.preventDefault();
        const { name, value } = e.target
        if (name === "signup") {
            this.initializeState();
            this.setState({
                signup: true
            });
        } else {
            this.initializeState();
            this.setState({
                signup: false
            });
        };
    };

    handleLogout = () => {
        // API.logoutUser()
        //     .then(res => {
        //         this.setState({ activeUser: "" });
        //     });

    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const query = {
            fName: this.state.fName,
            lName: this.state.lName,
            username: this.state.uName,
            eMail: this.state.eMail,
            password: this.state.passW
        };

        if (this.state.signup) {
            // API.saveNewUser(query)
            //     .then(res => {
            //         this.initializeState();
            //         this.setState({ signup: false });
            //         // console.log(res);
            //         alert("welcome to echopack")
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     })
        } else {
            // console.log("logging in user with: " + query);
            // API.loginUser(query)
            //     .then(res => {
            //         // console.log("after initial login");
            //         API.checkUser()
            //             .then(res => {
            //                 if (res.data.user) {
            //                     this.setState({
            //                         isLoggedIn: true
            //                     })
            //                     this.props.history.push('/')
            //                 } else {
            //                     alert("user not yet signed in")
            //                 }
            //             })
            //             .catch(err => {
            //                 console.log(err)
            //             })
            //         // redirect to what page? how do we check if logged in?
            //         // this is where passport comes into play.
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     })
        }
    }

    render() {
        const { fName, lName, uName, eMail, passW } = this.state;
        const loginEnabled =
            (uName.length > 0) &&
            (passW.length > 0)
        const signupEnabled =
            (loginEnabled)     &&
            (eMail.length > 0) 
            

        // if (this.state.isLoggedIn) {
        //     return <Redirect to="/"/>
        // }
        return (
            
            <div className="login-container">
               <div className="left-login-panel">
                  <span id="left-login-content">
                  <h1> CloudScann </h1>
                  <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum" </p>
                   </span>       
               </div>
               <div className="main-user-section right-login-panel">
                  <div className="signup-log-form">

                      <ul className="tab-group">
                         <li id="signup-tab"className="tab active">
                             <a onClick={this.setSignup} name="signup" value="signup">
                               Sign Up </a>
                         </li>
                         <li id="login-tab" className="tab">
                            <a onClick={this.setSignup} name="login" value="login">
                            Log In</a>
                         </li>
                      </ul>

                      <div className="tab-content">

                        {this.state.signup ? (

                        <div id="signup">
                              <h1> Sign Up ! </h1>
                              <form className = "signup-form" action="/api/User" method="post">
                                 <div className="field-wrap">
                                     <label>
                                         First Name
                                          <span className="req">*</span>
                                     </label>
                                     <input
                                        value={this.state.fName}
                                        onChange={this.handleInputChange}
                                        name="fName"
                                        placeholder="First Name (not required)"
                                        id="new-first"
                                     />
                                 </div>

                                 <div className="field-wrap">
                                     <label>
                                         Last Name<span className="req">*</span>
                                     </label>
                                     <input
                                         value={this.state.lName}
                                         onChange={this.handleInputChange}
                                         name="lName"
                                         placeholder="Last Name (not required)"
                                         id="new-last" 
                                     />
                                 </div>

                                 <div className="field-wrap">
                                     <label>
                                         User-Name <span className="req">*</span>
                                     </label>
                                     <input
                                         value={this.state.uName}
                                         onChange={this.handleInputChange}
                                         name="uName"
                                         placeholder="UserName (required)" 
                                         id="new-user"
                                     />
                                 </div>

                                 <div className="field-wrap">
                                     <label>
                                         Email Address
                                     </label>
                                     <input
                                         value={this.state.eMail}
                                         onChange={this.handleInputChange}
                                         name="eMail"
                                         placeholder="Email (required)"
                                         id="new-email"
                                         type="email"
                                     />
                                 </div>
                              
                                 <div className="field-wrap">
                                     <label>
                                         Set A Password<span className="req">*</span>
                                     </label>
                                     <input 
                                         value={this.state.passW}
                                         onChange={this.handleInputChange}
                                         name="passW"
                                         placeholder="Password (required)"
                                         id="new-pass"
                                         type="password"
                                     />
                                 </div>
                              
                                 <button 
                                     disabled = {!signupEnabled}
                                     onClick={this.handleFormSubmit}
                                     name="submitSignup"
                                     //type="submit" 
                                     className="button button-block">
                                     Sign Up
                                 </button>
                              </form>

                        </div>

                        ) : (

                        <div id="login">

                            <h1>Welcome Back!</h1>
                      
                            <form className= "login-form" action="/api/login" method="post">
                      
                                <div className="field-wrap">
                                    <label>
                                        Username<span className="req">*</span>
                                    </label>
                                    <input
                                       value={this.state.uName}
                                       onChange={this.handleInputChange}
                                       name="uName"
                                       placeholder="UserName (required)" 
                                       id="login-user"
                                    />
                                </div>
                          
                                <div className="field-wrap">
                                    <label>
                                        Password<span className="req">*</span>
                                    </label>
                                    <input
                                        value={this.state.passW}
                                        onChange={this.handleInputChange}
                                        name="passW"
                                        placeholder="UserName (required)" 
                                        id="login-pass"
                                        type="password"
                                    />
                                </div>
                          
                                <p className="forgot"><a href="/">Forgot Password?</a></p>
                          
                                <button
                                   disabled={!loginEnabled}
                                   onClick={this.handleFormSubmit}
                                   name="submitLogin"
                                   //type="submit" 
                                   className="button button-block">
                                   Log In
                                </button>
                      
                            </form>

                        </div> 

                        )}

                      </div>  
                  </div> 
               </div>
            </div> 
          
        );
    }
}

export default UserLogin;
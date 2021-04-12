import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Button, ButtonGroup } from "react-bootstrap";

import API from "../utils/API";
import User from "../components/User";
import Logo from "../assets/myfeels-logo-lg.png";

function Login({ authUser }) {
    //login form
    const [formName, setFormName] = useState("");

    //no initial login error
    const [loginError, setLoginError] = useState("");

    //click button to change view
    const handleButtons = (event) => {
        setFormName(event.target.value);
    };

    //submit form
    const handleSubmitUser = (values) => {
        formName === "login" ? handleLogin(values) : handleSignup(values);
    };

    //user login
    const handleLogin = (userData) => {
        API.login(userData)
            .then((res) => {
                authUser(res);
            })
            .catch((err) => {
                console.log("Error: ", err)
                setLoginError("Login")
            });
    };

    //user signup
    const handleSignup = (userData) => {
        API.signup(userData)
            .then((res) => {
                authUser(res);
            })
            .catch((err) => {
                console.log("Error: ", err)
                setLoginError("Signup")
            });
    };

    return(
        <main style={{ backgroundColor: "#BFE2FF" }}>
            <div className="flexbox-container" style={{ backgroundColor: "white" }}>
                <br />
                <div className="flexbox-container">
                    <ButtonGroup>
                        <Button variant="outline-primary" size="lg" value="login" onClick={handleButtons}>
                            Login
                        </Button>
                        <Button variant="outline-primary" size="lg" value="signup" onClick={handleButtons}>
                            Sign Up
                        </Button>
                    </ButtonGroup>
                    <br />
                </div>
                {(() => {
                    switch (formName) {
                        case "login":
                            return (
                                <div className="container" style={{ margin: "5px" }}>
                                    <div className="container" style={{ alignContent: "center", textAlign: "center" }}>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <img src={Logo} alt="How are you feeling?" />
                                    </div>
                                    <br />
                                    <h2 style={{ color: "#BFE2FF" }}>Login to your account:</h2>
                                    <br />
                                    {loginError === "login" ? <Alert variant="danger">Your information could not be verified. Please try again.</Alert> : <></>}
                                    <User name={formName} submitUser={handleSubmitUser} />
                                    <br/><br/><br/>
                                </div>
                            );
                        case "signup":
                            return (
                                <div className="container" style={{ margin: "5px" }}>
                                    <div className="container" style={{ alignContent: "center", textAlign: "center" }}>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <img src={Logo} alt="How are you feeling?" />
                                    </div>
                                    <br />
                                    <h2 style={{ color: "#FFC300" }}>Sign up for an Account:</h2>
                                    <br />
                                    {loginError === "signup" ? <Alert variant="danger">Error. User with this email already exists. Please try logging in.</Alert> : <></>}
                                    <User name={formName} submitUser={handleSubmitUser} />
                                    <br/><br/><br/>
                                </div>
                            );
                        default:
                            return (
                                <div className="container" style={{ margin: "5px" }}>
                                    <div className="container" style={{ alignContent: "center", textAlign: "center" }}>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <img src={Logo} alt="How are you feeling?" />
                                    </div>
                                    <br />
                                    <div style={{ textAlign: "center", margin: "5px" }}>
                                        <h2 style={{ color: "#BFE2FF" }}>
                                            <em>“The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.”</em>
                                        </h2>
                                        <br />
                                        <h3 style={{ color: "#FFC300" }}>Hellen Keller</h3>
                                        <br/><br/>
                                    </div>
                                </div>
                            );
                    }
                })()}
            </div>
        </main>
    );
}
export default Login;

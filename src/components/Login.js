import React, { Component } from 'react'
import { firestoreApp } from '../firebase/firebaseInit'

export default class Login extends Component {

    login(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        firestoreApp.auth().signInWithEmailAndPassword(email,password)
            .then((u) => {
                alert("Successfull login.");
                console.log("Successfull login.");
            })
            .catch((err) => {
                alert("Error: " + err.toString());
                console.log("error login.");
            })
    }
    


    render() {
        return (
            <div className="outer">
                <div className="inner ">
                    <form>

                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input id="email" type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input id="password" type="password" className="form-control required" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />{" "}
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.login}>Sign in</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="/sign-in">password?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

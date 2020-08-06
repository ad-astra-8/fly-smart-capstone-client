import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from './services/auth-api-service';
import TokenService from './services/token-service';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      params: {
        loginUsername: "",
        loginPassword: "",
      },
    };
  }

  validateloginUsername(inputEmail) {
    let outputEmail = inputEmail;
    let mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;
    if (!inputEmail.match(mailformat)) {
      outputEmail = "";
    }
    return outputEmail;
  }

  validateloginPassword(inputloginPassword) {
    let outputloginPassword = inputloginPassword;
    // at least one number, one lowercase and one uppercase letter
    // at least eight characters that are letters, numbers or the underscore
    let loginPasswordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;

    if (!inputloginPassword.match(loginPasswordformat)) {
      outputloginPassword = "";
    }
    return outputloginPassword;
  }



  handleSubmit = (event) => {
    event.preventDefault();
    console.log('hello')

    const { loginUsername, loginPassword } = event.target
    console.log(loginUsername.value)
    console.log(loginPassword.value)

    AuthApiService.postLogin({
      userName: loginUsername.value,
      password: loginPassword.value,

    })

      .then(response => {
        loginUsername.value = ''
        loginPassword.value = ''
        TokenService.saveAuthToken(response.authToken)
        TokenService.saveUserId(response.userId)
        window.location = '/homepage'


        // .then(response => {
        // })


      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const errorMessage = this.state.error ? (
      <p className="error-message">{this.state.error}</p>) : (false);

    return (
      <section className="login-component">
        <div className="login-div">
          <h1 className="title">Fly Smart</h1>
          <h2 className="subtitle">Log in!</h2>
          <div className="form-div">
            <form className="login-form" onSubmit={this.handleSubmit}>
              {errorMessage}
              <label htmlFor="loginUsername">Username: new.user@ymail.com</label>
              <input
                className="login-input"
                type="text"
                name="loginUsername"
                placeholder="my.username@ymail.com"
                required
              />
              <p class="error-message">username is not valid, please try again</p>

              <label htmlFor="loginPassword">Password: Newpassword1</label>
              <input
                className="login-input"
                type="Password"
                name="loginPassword"
                placeholder="Password"
                required
              />
              <p class="error-message">password is not valid, please try again</p>

              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
          <div className="link-register">
            <p>Don't have an account yet?</p>
            <Link to="/register" className="register-link">Sign up here</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;

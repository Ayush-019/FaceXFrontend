import React, { Component } from "react";
import "./Signin.css"

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SigninEmail: "",
      SigninPassword: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ SigninEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ SigninPassword: event.target.value });
  };

  onSubmitSignin = () => {
    fetch("https://facex-abc.azurewebsites.net/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.SigninEmail,
        password: this.state.SigninPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.onroute("home");
          this.props.addUser(user);
        }
      });
  };
  
  render() {
    const { onroute } = this.props;
    return (
      <div>
        <article className="br3 shadow-5 mw6 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l  center">
          <main className="pa4 clr">
            <div className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0 clr">Sign In</legend>
                <div className="mt3">
                  <label className="db fw7 lh-copy f5 clr" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 email"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw7 lh-copy f5" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                  onClick={this.onSubmitSignin}
                />
              </div>
              <div className="lh-copy mt3 pointer">
                <p
                  onClick={() => onroute("register")}
                  className="f6 link dim black db"
                >
                  Register
                </p>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Signin;

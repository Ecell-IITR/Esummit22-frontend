import React, { Component } from "react";
import Axios from "axios";
import { Link } from "next/link";
import CustomGradientBtn from "../customGradientBtn";

export class AccountSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
      social_signup: false,
      toggleEye: "",
      toggleConfirmEye: "",
      image_url: "",
      name_error: "",
      name_error_bool: false,
      email_error: "",
      email_error_bool: false,
      pass_error: "",
      pass_error_bool: false,
      confirm_pass_ok: false,
      confirmpass_error: "",
      confirmpass_error_bool: false,
    };
  }
  emptyValidate = (data) => {
    setTimeout(
      function () {
        switch (data) {
          case "full_name":
            this.setState({
              name_error_bool: true,
              name_error: "Name cannot be Empty !",
            });
            break;
          case "email":
            this.setState({
              email_error_bool: true,
              email_error: "Email cannot be Empty !",
            });
            break;
          case "password":
            this.setState({
              pass_error_bool: true,
              pass_error: "Password cannot be blank !",
            });
            break;
          case "confirm_password":
            this.setState({
              confirmpass_error_bool: true,
              confirmpass_error: "Confirm Password cannot be blank !",
            });
            break;
          default:
            break;
        }
      }.bind(this),
      100
    );
  };
  nameValidate = () => {
    setTimeout(
      function () {
        if (this.state.full_name.length < 3) {
          this.setState({
            name_error_bool: true,
            name_error: "  *Name should be more than 3 letters",
          });
        } else {
          this.setState({
            name_error_bool: false,
            name_error: "",
          });
        }
      }.bind(this),
      1000
    );
  };
  emailValidate = () => {
    setTimeout(
      function () {
        var re = /\S+@\S+\.\S+/;
        if (!this.state.email.match(re)) {
          this.setState({
            email_error_bool: true,
            email_error: "  *Email is not valid",
          });
        } else {
          this.setState({
            email_error_bool: false,
            email_error: "",
          });
        }
      }.bind(this),
      1000
    );
  };
  passValidate = () => {
    setTimeout(
      function () {
        if (this.state.password.length < 7) {
          this.setState({
            pass_error_bool: true,
            pass_error: "  *Password should be more than 8 letters",
            confirm_pass_ok: false,
          });
        } else {
          this.setState({
            pass_error_bool: false,
            pass_error: "",
            confirm_pass_ok: true,
          });
        }
      }.bind(this),
      1000
    );
  };
  confirmPassValidate = () => {
    setTimeout(
      function () {
        if (this.state.password !== this.state.confirm_password) {
          this.setState({
            confirmpass_error_bool: true,
            confirmpass_error: " *Both passwords do not match",
          });
        } else {
          this.setState({
            confirmpass_error_bool: false,
            confirmpass_error: "",
          });
        }
      }.bind(this),
      1000
    );
  };
  onChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };
  handleToggle = () => {
    this.setState({
      toggleEye: !this.state.toggleEye,
    });
    if (document.getElementById("iPassword").type === "password") {
      document.getElementById("iPassword").type = "text";
    } else {
      document.getElementById("iPassword").type = "password";
    }
  };
  handleConfirmToggle = () => {
    this.setState({
      toggleConfirmEye: !this.state.toggleConfirmEye,
    });
    if (document.getElementById("iConfirmPassword").type === "password") {
      document.getElementById("iConfirmPassword").type = "text";
    } else {
      document.getElementById("iConfirmPassword").type = "password";
    }
  };
  handleNext = () => {
    const {
      full_name,
      email,
      password,
      confirm_password,
      social_signup,
      name_error,
      name_error_bool,
      email_error,
      email_error_bool,
      pass_error,
      pass_error_bool,
      confirmpass_error,
      confirmpass_error_bool,
    } = this.state;
    if (!full_name) {
      return this.emptyValidate("full_name");
    }
    if (!email) {
      return this.emptyValidate("email");
    } else if (email && email_error) return this.emailValidate();

    if (!password) {
      return this.emptyValidate("password");
    } else if (password && pass_error) return this.passValidate();

    if (!confirm_password) {
      return this.emptyValidate("confirm_password");
    } else if (confirm_password && confirmpass_error)
      return this.confirmPassValidate();
    let data = {
      full_name: full_name,
      email: email,
      password: password,
      confirm_password: confirm_password,
      social_signup: social_signup,
    };

    this.props.handleSubmit(data);
  };

  render() {
    const {
      email,
      full_name,
      password,
      confirm_password,
      toggleConfirmEye,
      toggleEye,
      name_error,
      name_error_bool,
      email_error,
      email_error_bool,
      pass_error,
      pass_error_bool,
      confirmpass_error,
      confirmpass_error_bool,
      confirm_pass_ok,
    } = this.state;
    return (
      <div>
        <div id="login-heading">CREATE AN ACCOUNT</div>

        <div className="login-iEmail-header">
          <input
            id="iname"
            className="register-form"
            type="text"
            placeholder="Enter your Full name"
            name="full_name"
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            value={full_name}
            onChange={(event) => {
              this.nameValidate();
              this.onChange(event);
            }}
            spellCheck="false"
            required
          />
        </div>
        <div className="error-msg">{name_error}</div>

        <div className="login-iEmail-header">
          <input
            id="iEmail"
            type="email"
            className="register-form"
            placeholder="Enter Email id"
            name="email"
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            value={email}
            onChange={(event) => {
              if (this.state.social_signup) {
                return this.emailvalidate();
              } else {
                //   this.onChange(event);
                this.emailValidate();

                this.onChange(event);
              }
            }}
            spellCheck="false"
            required
          />
        </div>
        <div className="error-msg">{email_error}</div>

        <div className="login-iPassword-header">
          <input
            id="iPassword"
            type="password"
            className="register-form"
            placeholder="Enter password"
            name="password"
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            value={password}
            onChange={(event) => {
              this.passValidate();
              this.onChange(event);
            }}
            spellCheck="false"
            required
          />
          <span className="login-iPassword-img" onClick={this.handleToggle}>
            <img
              alt="eye confirm"
              className="toggleeye"
              src={"login/login-password-eye.svg"}
            />
          </span>
        </div>
        {/* <span>
            {pass_error_bool === "" ? null : (
              <img
                alt="correc/wrong"
                src={
                  pass_error_bool === "true"
                    ? null
                    : pass_error_bool === "false"
                    ? tickMark
                    : null
                }
              />
            )}
          </span> */}

        <div className="error-msg">{pass_error}</div>

        {confirm_pass_ok ? (
          <div className="">
            <div className="login-iPassword-header">
              <input
                id="iConfirmPassword"
                type="password"
                className="register-form"
                placeholder="Enter your password again"
                name="confirm_password"
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                value={confirm_password}
                onChange={(event) => {
                  this.confirmPassValidate();
                  this.onChange(event);
                }}
                spellCheck="false"
                required
              />
            </div>
            <div className="error-msg">{confirmpass_error}</div>
          </div>
        ) : null}

        <div style={{ paddingTop: "1.2vh" }} className="next-mobile-container">
          <div className="login-button" onClick={this.handleNext}>
            <CustomGradientBtn text={"NEXT"} />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountSetup;

import FetchApi from "../utils/fetchAPI";
import { Login_API } from "../utils/APIs";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { useRouter } from "next/router";
import CustomGradientBtn from "../components/customGradientBtn";
import { Authenticate } from "../utils";

const Login = () => {
  const [loading, setloading] = useState(false);
  const [state_email, setEmail] = useState("");
  const [state_password, setpassword] = useState("");
  const [email_error, setemail_error] = useState("");
  const [pass_error, setpass_error] = useState("");
  const [email_error_bool, setemail_error_bool] = useState("");
  const [pass_error_bool, setpass_error_bool] = useState("");
  const [toggleEye, changetoggleEye] = useState(true);

  const router = useRouter();

  const handleToggle = () => {
    changetoggleEye(!toggleEye);

    if (document.getElementById("iPassword").type === "password") {
      document.getElementById("iPassword").type = "text";
    } else {
      document.getElementById("iPassword").type = "password";
    }
  };

  const passValidate = () => {
    setTimeout(function () {
      if (state_password.length < 7) {
        setpass_error_bool("true");
        setpass_error("Password should be more than 8 letters");
      } else {
        setpass_error_bool("false");
        setpass_error("");
      }
    }, 1000);
  };

  const emailValidate = () => {
    setTimeout(function () {
      var re = /\S+@\S+\.\S+/;
      if (!state_email.match(re)) {
        setemail_error_bool("true");
        setemail_error("Email is not valid");
      } else {
        setemail_error_bool("false");
        setemail_error("");
      }
    }, 1000);
  };

  const handleSubmit = () => {
    setloading(false);

    const data = {
      email: state_email,
      password: state_password,
    };

    FetchApi("post", Login_API, data, null)
      .then((res) => {
        setloading(false);
        // if (res.data.token) {
        //   localStorage.setItem("user_token", res.data.token);
        //   console.log(res.data);
        // }
        if (res.data.role) {
          localStorage.setItem("user_role_type", res.data.role);
        }
        Authenticate(res.data.user, res.data.token);
        if (res.data.role === "CA") {
          router.push("/cap/leaderboard");
        } else {
          router.push("/dashboard");
        }
        // if (String(localStorage.getItem("user_role_type")) === "CA") {
        //   const { history } = this.props;
        //   history.push("/campus-ambassador");
        // } else {
        //   const { history } = this.props;
        //   history.push("/dashboard");
        // }
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
        toast.error("Entered Wrong Email or Password");
      });
  };

  return (
    <div className="login-container">
      <div className="login-container-bck">
        <img src={"login/login-bck-img.png"} className="bcki" />
      </div>

      <div className="login-container-box">
        <div id="login-heading">LOGIN</div>
        <div className="login-box-design1">
          <img alt="design" className="" src={"login/login-bck-design1.svg"} />
        </div>
        <div className="login-box-design2">
          <img alt="design" className="" src={"login/login-bck-design2.svg"} />
        </div>
        <div className="login-iEmail-header">
          <input
            id="iEmail"
            type="email"
            className="login-form"
            placeholder="Enter Email id"
            name="email"
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            value={state_email}
            onChange={(event) => {
              setEmail(event.target.value);
              emailValidate();
            }}
            spellCheck="false"
            required
          />
        </div>
        <div className="reg-error">{email_error}</div>
        <div className="login-iPassword-header">
          <input
            id="iPassword"
            type="password"
            className="login-form"
            placeholder="Enter password"
            name="password"
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            value={state_password}
            onChange={(event) => {
              setpassword(event.target.value);
              passValidate();
            }}
            spellCheck="false"
            required
          />
          <span className="login-iPassword-img" onClick={handleToggle}>
            <img
              alt="eye confirm"
              className=""
              src={"login/login-password-eye.svg"}
            />
          </span>

          {/* <span className="login-iPassword-img">
          {this.state.pass_error_bool === "" ? null : (
            <img
              alt="correc/wrong"
              src={
                this.state.pass_error_bool === "true"
                  ? CrossForm
                  : this.state.pass_error_bool === "false"
                  ? tickMark
                  : null
              }
            />
          )}
        </span> */}
        </div>
        <div className="reg-error">{pass_error}</div>
        {loading ? (
          <img src={"login/login-password-eye.svg"} width="50px" alt="" />
        ) : (
          <div className="login-button" onClick={handleSubmit}>
            Login
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

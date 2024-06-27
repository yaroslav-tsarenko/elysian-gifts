import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./SignIn.css";

const SignIn = ({ className = "" }) => {
  return (
    <div className={`sign-in3 ${className}`}>
      <div className="sign-up-parent">
        <h1 className="sign-up1">Sign up</h1>
        <div className="sign-up-to">Sign up to get rewards, and many more</div>
      </div>
      <form className="input-fields">
        <div className="name-address-username">
          <div className="name-address-username-labels">
            <div className="your-name">Your Name</div>
          </div>
          <TextField
            className="email-country-password"
            placeholder="Email"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d1d1d1" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
        </div>
        <div className="name-address-username1">
          <div className="address-wrapper">
            <div className="address">Address</div>
          </div>
          <div className="country-parent">
            <div className="country">Country</div>
            <img
              className="email-country-spacer"
              alt=""
              src="/email-country-spacer.svg"
            />
          </div>
        </div>
        <div className="name-address-username2">
          <div className="username-parent">
            <div className="username">Username</div>
            <img
              className="name-address-spacer"
              alt=""
              src="/frame-153-11.svg"
            />
          </div>
          <div className="password-parent">
            <div className="password1">Password</div>
            <img className="frame-item" alt="" src="/frame-153-1.svg" />
          </div>
        </div>
        <Button
          className="button1"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#6c63ff",
            borderRadius: "4px",
            "&:hover": { background: "#6c63ff" },
            height: 76,
          }}
        >
          Sign Up
        </Button>
      </form>
      <div className="or-sign-up">or, sign up with</div>
      <div className="social-auth-buttons">
        <img
          className="social-auth-button-containers"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className="social-auth-button-containers1"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className="social-auth-button-containers2"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
      </div>
    </div>
  );
};

SignIn.propTypes = {
  className: PropTypes.string,
};

export default SignIn;

import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./ContactInfoFields.css";

const ContactInfoFields = ({ className = "" }) => {
  return (
    <div className={`contact-info-fields ${className}`}>
      <div className="contact-info-labels">
        <div className="contact-information">Contact Information</div>
        <TextField
          className="form-field"
          placeholder="Email"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#d9d9d9" },
            "& .MuiInputBase-root": { height: "54px", backgroundColor: "#fff" },
            "& .MuiInputBase-input": { color: "#000" },
          }}
        />
      </div>
      <h2 className="payment-information">Payment Information</h2>
      <div className="card-information-parent">
        <div className="card-information">Card Information</div>
        <div className="form-field1">
          <div className="card-number-placeholder">1234 1234 1234 1234</div>
          <div className="card-details-fields">
            <img
              className="card-detail-fields"
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className="card-detail-fields1"
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className="card-detail-fields2"
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className="icon" alt="" src="/icon.svg" />
        </div>
        <div className="expiry-date-fields">
          <TextField
            className="form-field2"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d9d9d9" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
          <TextField
            className="form-field3"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d9d9d9" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
        </div>
      </div>
      <div className="contact-info-labels1">
        <div className="carholder-name">Carholder Name</div>
        <TextField
          className="form-field4"
          placeholder="Name on Card"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#d9d9d9" },
            "& .MuiInputBase-root": { height: "54px", backgroundColor: "#fff" },
            "& .MuiInputBase-input": { color: "#d9d9d9" },
          }}
        />
      </div>
      <div className="country-or-region-parent">
        <div className="country-or-region">Country or region</div>
        <div className="form-field5">
          <div className="usa">USA</div>
          <img
            className="region-dropdown-icon"
            alt=""
            src="/region-dropdown.svg"
          />
          <img className="icon1" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="verification-placeholder-parent">
        <input className="verification-placeholder" type="checkbox" />
        <div className="i-verified-that">
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className="verification-graphic-icon"
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className="i-verified-that1">
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
      </div>
      <Button
        className="button2"
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
        Pay Now
      </Button>
    </div>
  );
};

ContactInfoFields.propTypes = {
  className: PropTypes.string,
};

export default ContactInfoFields;

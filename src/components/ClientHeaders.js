import PropTypes from "prop-types";
import "./ClientHeaders.css";

const ClientHeaders = ({
  className = "",
  heading3MarketResearch,
  clientsDynatapng,
  clientsAskablepng,
  clientsFocuspng,
  clientsNielsenpng,
  clientsTolunapng,
  clientsEnginepng,
}) => {
  return (
    <div className={`client-headers ${className}`}>
      <h1 className="heading-33">{heading3MarketResearch}</h1>
      <div className="clients-dynatapng-parent">
        <img
          className="clients-dynatapng-icon"
          loading="lazy"
          alt=""
          src={clientsDynatapng}
        />
        <img
          className="clients-askablepng-icon"
          loading="lazy"
          alt=""
          src={clientsAskablepng}
        />
        <img
          className="clients-focuspng-icon"
          loading="lazy"
          alt=""
          src={clientsFocuspng}
        />
        <img
          className="clients-nielsenpng-icon"
          alt=""
          src={clientsNielsenpng}
        />
        <img className="clients-tolunapng-icon" alt="" src={clientsTolunapng} />
        <img className="clients-enginepng-icon" alt="" src={clientsEnginepng} />
      </div>
    </div>
  );
};

ClientHeaders.propTypes = {
  className: PropTypes.string,
  heading3MarketResearch: PropTypes.string,
  clientsDynatapng: PropTypes.string,
  clientsAskablepng: PropTypes.string,
  clientsFocuspng: PropTypes.string,
  clientsNielsenpng: PropTypes.string,
  clientsTolunapng: PropTypes.string,
  clientsEnginepng: PropTypes.string,
};

export default ClientHeaders;

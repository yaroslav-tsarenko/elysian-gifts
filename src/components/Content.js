import Header1 from "./Header1";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content2 ${className}`}>
      <Header1 />
      <div className="dashboard-container">
        <div className="welcome-message-container">
          <h1 className="welcome-darnell">Welcome, Darnell</h1>
        </div>
        <div className="your-personal-dashboard">Your Personal Dashboard</div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;

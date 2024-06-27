import ClientHeaders from "./ClientHeaders";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`client-headers-parent ${className}`}>
      <div className="client-headers1">
        <h1 className="heading-27">Just a few of our satisfied clients</h1>
        <div className="market-research-header">
          <img
            className="clients-uk-boxtpng-icon"
            loading="lazy"
            alt=""
            src="/clientsukboxtpng@2x.png"
          />
          <img
            className="clients-uk-djspng-icon"
            loading="lazy"
            alt=""
            src="/clientsukdjspng@2x.png"
          />
          <img
            className="clients-uk-citizensadvicepng-icon"
            loading="lazy"
            alt=""
            src="/clientsukcitizensadvicepng@2x.png"
          />
          <img
            className="clients-uk-nhspng-icon"
            loading="lazy"
            alt=""
            src="/clientsuknhspng@2x.png"
          />
          <img
            className="clients-uk-cityguildspng-icon"
            alt=""
            src="/clientsukcityguildspng@2x.png"
          />
          <img
            className="clients-uk-hexagonpng-icon"
            alt=""
            src="/clientsukhexagonpng@2x.png"
          />
          <img
            className="clients-nectarpng-icon"
            alt=""
            src="/clientsnectarpng@2x.png"
          />
          <img
            className="clients-simbapng-icon"
            alt=""
            src="/clientssimbapng@2x.png"
          />
          <img
            className="clients-scopepng-icon"
            alt=""
            src="/clientsscopepng@2x.png"
          />
          <img
            className="clients-uk-independentpng-icon"
            alt=""
            src="/clientsukindependentpng@2x.png"
          />
        </div>
      </div>
      <ClientHeaders
        heading3MarketResearch="Market Research"
        clientsDynatapng="/clientsdynatapng@2x.png"
        clientsAskablepng="/clientsaskablepng@2x.png"
        clientsFocuspng="/clientsfocuspng@2x.png"
        clientsNielsenpng="/clientsnielsenpng@2x.png"
        clientsTolunapng="/clientstolunapng@2x.png"
        clientsEnginepng="/clientsenginepng@2x.png"
      />
      <ClientHeaders
        heading3MarketResearch="Education"
        clientsDynatapng="/clientskingscollegepng@2x.png"
        clientsAskablepng="/clientsuniversitystirlingpng@2x.png"
        clientsFocuspng="/clientsuniofbrightonpng@2x.png"
        clientsNielsenpng="/clientsukbristolpng@2x.png"
        clientsTolunapng="/clientsukbirminghampng@2x.png"
        clientsEnginepng="/clientsukleedspng@2x.png"
      />
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;

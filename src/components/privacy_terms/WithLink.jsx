import React from "react";
import "../../stylings/privacy_terms.css";

function WithLink({ content }) {
  return (
    <div className="optionsWrapper">
      <h3 className="optionsHeader">
        {`${content.number}.`}
        <span>{content.title}</span>
      </h3>

      <span
        style={{
          
          gap: "5px",
          display: "flex",
          flexDirection: "row", 
          fontSize:'14px',
          lineHeight: '20px'
        }}
      >
        {content.textOne}
        <a
          href="support@irescue.ng"
          style={{ color: "black", cursor: "pointer" }}
        >
          {content.link}
        </a>
      </span>
      <span
        style={{
          gap: "5px",
          display: "flex",
          flexDirection: "row",
          fontSize:'14px',
          lineHeight: '20px'
        }}
      >
        {content.textTwo}
      </span>
    </div>
  );
}

export default WithLink;

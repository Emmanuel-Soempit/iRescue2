import React from "react";
import Header from "../components/Header";
import Logo from "../assets/images/brand.png";
import "../stylings/privacy_terms.css";
import LastUpdated from "../components/privacy_terms/lastUpdated";
import { privacyConstants } from "../utils/constants";
import WithOptions from "../components/privacy_terms/WithOptions";
import WithSubTitle from "../components/privacy_terms/WithSubTitle";
import WithLink from "../components/privacy_terms/WithLink";
import Footer from "../components/Footer";


const updateInfo = {
  lastUpdated: "April 10th, 2024",
  content:
    'This Privacy Policy outlines how iRescue collects, uses, shares, and protects your information when you use our mobile application and related services (referred to as the "iRescue App"). By using the iRescue App, you agree to the collection and use of your information in accordance with this Privacy Policy.',
};

function Privacy() {
  return (
    <div className="Main">
      <main className="navWrapper">
        <Header logo={Logo} isFixed={true} linkColor="" />
      </main>

      <body className="body">
        <h1 className="mainHeader">Privacy Policy for IRescue App</h1>
        <LastUpdated
          lastUpdated={updateInfo.lastUpdated}
          content={updateInfo.content}
        />
        <div className="contentWrapper">
         {
            privacyConstants.map(content => content.options && <WithOptions key={content.number} content={content} />)
         }
         {
            privacyConstants.map(content => content.subTitle && <WithSubTitle key={content.number} content={content} />)
         }
         {
            privacyConstants.map(content => content.link && <WithLink key={content.number} content={content} />)
         }

        </div>

        <div style={{backgroundColor: 'black', width: '100vw', height: '100vh', padding: '10px'}}>

        <Footer/>
        </div>
      </body>
    </div>
  );
}

export default Privacy;

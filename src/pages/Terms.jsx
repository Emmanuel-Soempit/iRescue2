import React from "react";
import Header from "../components/Header";
import Logo from "../assets/images/brand.png";
import "../stylings/privacy_terms.css";
import LastUpdated from "../components/privacy_terms/lastUpdated";
import { privacyConstants, termsConstants } from "../utils/constants";
import WithOptions from "../components/privacy_terms/WithOptions";
import WithSubTitle from "../components/privacy_terms/WithSubTitle";
import WithLink from "../components/privacy_terms/WithLink";
import Footer from "../components/Footer";


const updateInfo = {
  lastUpdated: "April 10th, 2024",
  content:
    'Welcome to iRescue! These Terms and Conditions ("Terms") govern your use of the iRescue mobile application and related services (referred to as the "iRescue App"). By accessing or using the iRescue App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the iRescue App.',
};

function Terms() {
  return (
    <div className="Main">
      <main className="navWrapper">
        <Header logo={Logo} isFixed={true} linkColor="" />
      </main>

      <body className="body">
        <h1 className="mainHeader">Terms and Condition for iRescue App</h1>
        <LastUpdated
          lastUpdated={updateInfo.lastUpdated}
          content={updateInfo.content}
        />
        <div className="contentWrapper">
         {
            termsConstants.map(content => content.options && <WithOptions key={content.number} content={content} />)
         }
         {
            termsConstants.map(content => content.subTitle && <WithSubTitle key={content.number} content={content} />)
         }
         {
            termsConstants.map(content => content.textOne && <WithLink key={content.number} content={content} />)
         }

        </div>

        <div style={{backgroundColor: 'black', width: '100vw', height: '100vh', padding: '10px'}}>

        <Footer/>
        </div>
      </body>
    </div>
  );
}

export default Terms;

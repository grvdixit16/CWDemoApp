import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  const bannerStyle = {
    color: "white",
    backgroundColor: "#0099CC",

  }
  return (
    <div style={bannerStyle} className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>A place to learn knowledge.</p>
      </div>
    </div>
  );
};

export default Banner;

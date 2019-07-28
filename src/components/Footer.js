import React from "react";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 0,
    backgroundColor: "white",
    padding: 10
  }
};

const Footer = () => (
  <div style={styles.root}>
    <div>
      <div>
        <img
          src="/images/assets/icons/Company-defailt.svg"
          style={styles.whatsappLogo}
          alt="Whatsapp-logo"
        />
      </div>
      <div>JOBS</div>
    </div>
    <div>
      <div>
        <img
          src="/images/assets/icons/Company-defailt.svg"
          style={styles.whatsappLogo}
          alt="Whatsapp-logo"
        />
      </div>
      <div>APPLIES</div>
    </div>
    <div>
      <div>
        <img
          src="/images/assets/icons/Company-defailt.svg"
          style={styles.whatsappLogo}
          alt="Whatsapp-logo"
        />
      </div>
      <div>PROFILE</div>
    </div>
  </div>
);

export default Footer;

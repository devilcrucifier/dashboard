import React from "react";
import CardView from "./common/CardView";
import FlexView from "./common/FlexView";

const styles = {
  root: {
    padding: "20px"
  },
  enableButton: {
    borderRadius: 30,
    color: "white",
    backgroundColor: "#008080",
    fontSize: 16,
    padding: 15,
    fontWeight: "bold"
  },
  whatsappLogo: {
    width: 90,
    position: "absolute"
  },
  card: {
    padding: 20,
    margin: 10,
    width: 280,
    flex: "0 0 auto",
    borderStyle: "solid",
    borderWidth: 2
  },
  alert: {
    fontWeight: "bold",
    fontSize: 17
  },
  similarJobs: {
    alignItems: "center",
    marginBottom: "20px"
  }
};

const WhatsAppAlert = () => (
  <div style={styles.root}>
    <CardView styles={styles.card}>
      <div style={{ display: "flex" }}>
        <div>
          <FlexView style={{ alignItems: "center" }}>
            <span style={styles.alert}>Get Alerts on WhatsApp</span>
          </FlexView>

          <FlexView styles={styles.similarJobs}>
            <span>For Similar Jobs</span>
          </FlexView>
          <button style={styles.enableButton}>ENABLE NOW</button>
        </div>
        <div>
          <img
            src="/images/assets/icons/whatsapp.png"
            style={styles.whatsappLogo}
            alt="Whatsapp-logo"
          />
        </div>
      </div>
    </CardView>
  </div>
);

export default WhatsAppAlert;

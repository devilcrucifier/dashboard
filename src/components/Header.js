import React from "react";
import { userDetails } from "./constants";

const styles = {
  root: {
    display: "flex",
    padding: 20,
    backgroundColor: "#008080",
    flexDirection: "column",
    color: "white",
    fontWeight: 0
  },
  userDetails: {
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 30
  },
  input: {
    height: 20,
    borderRadius: 5,
    border: 0,
    padding: 10
  }
};

class Header extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <div>
          <h2>{userDetails.name}</h2>
        </div>

        <div style={styles.userDetails}>
          {userDetails.education} | {userDetails.experience}
        </div>

        <input style={styles.input} placeholder="Search Jobs" />
      </div>
    );
  }
}

export default Header;

import React from "react";

const styles = {
  loading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: 300
  }
};

const Loading = () => <div style={styles.loading}>Loading...</div>;

export default Loading;

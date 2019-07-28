import React from "react";
import { jobTypeList } from "./constants";
import CardView from "./common/CardView";
import FlexView from "./common/FlexView";

const styles = {
  root: {
    display: "flex",
    padding: "20px",
    backgroundColor: "#F4A460",
    flexDirection: "column",
    fontWeight: 0
  },
  input: {
    width: "100%",
    height: "20px",
    borderRadius: "5px",
    border: 0
  },
  cardContainer: {
    display: "flex",
    overflow: "scroll"
  },
  card: {
    padding: 20,
    margin: 10,
    marginLeft: 6,
    width: 130,
    flex: "0 0 auto",
    backgroundColor: "white",
    color: "black"
  },
  jobType: {
    fontWeight: "bold",
    fontSize: 16
  },
  jobNumber: {
    fontSize: 14,
    marginTop: 5,
    color: "grey"
  }
};

const JobsByCategories = () => (
  <div style={styles.root}>
    <h3>Jobs By Categories</h3>

    <div style={styles.cardContainer}>
      {jobTypeList.map(jobType => (
        <CardView styles={styles.card}>
          <FlexView styles={{ alignItems: "center" }}>
            <span style={styles.jobType}>{jobType.type}</span>
          </FlexView>

          <FlexView styles={{ alignItems: "center" }}>
            <span style={styles.jobNumber}>{jobType.number} Jobs</span>
          </FlexView>
        </CardView>
      ))}
    </div>
  </div>
);

export default JobsByCategories;

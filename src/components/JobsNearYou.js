import React from "react";
import CardView from "./common/CardView";
import FlexView from "./common/FlexView";

const styles = {
  root: {
    padding: "20px"
  },
  heading: {
    display: "flex",
    justifyContent: "space-between"
  },
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
    width: 200
  },
  subheading: {
    color: "grey",
    marginTop: 6,
    marginBottom: 8
  },
  subtext: {
    color: "#008080"
  },
  carousal: {
    overflow: "scroll"
  },
  card: {
    padding: 20,
    margin: "10px 10px 10px 5px",
    width: 230,
    flex: "0 0 auto"
  },
  posted: {
    justifyContent: "flex-end",
    color: "grey",
    margin: 10
  },
  description: {
    alignItems: "center",
    color: "grey"
  },
  company: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 20,
    color: "grey"
  }
};

const JobsNearYou = ({ jobList }) => (
  <div style={styles.root}>
    <div style={{ display: "flex", margin: 6 }}>
      <div>
        <img
          src="/images/assets/icons/Jobs-Near-You.svg"
          alt="jobs-near-You-logo"
        />
      </div>
      <div>
        <div style={styles.heading}>
          <div style={styles.mainText}>Jobs Near You</div>
          <div style={styles.subtext}>VIEW</div>
        </div>

        <div style={styles.subheading}>
          <span>In and around </span>
          <span style={styles.subtext}>SECTOR 30, GURUGRAM</span>
        </div>
      </div>
    </div>

    <FlexView styles={styles.carousal}>
      {jobList.map(job => (
        <CardView styles={styles.card}>
          <FlexView styles={{ alignItems: "center" }}>
            <span style={{ fontWeight: "bold", fontSize: 17 }}>
              {job.title}
            </span>
          </FlexView>

          <FlexView styles={styles.company}>
            <span>{job.company}</span>
          </FlexView>

          <FlexView styles={styles.description}>
            <span style={{ fontSize: 14 }}>{job.location}</span>
          </FlexView>

          <FlexView styles={styles.description}>
            <span style={{ fontSize: 14 }}>&#8377; 8000-22500 per month</span>
          </FlexView>

          <FlexView styles={styles.posted}>Posted 5 days ago</FlexView>
        </CardView>
      ))}
    </FlexView>
  </div>
);

export default JobsNearYou;

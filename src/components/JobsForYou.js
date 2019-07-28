import React from "react";
import CardView from "./common/CardView";
import FlexView from "./common/FlexView";
import { jobPreferences } from "./constants";

const styles = {
  root: {
    padding: "20px"
  },
  subtext: {
    color: "#008080"
  },
  carousal: { overflow: "scroll" },
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
  preferenceCard: {
    padding: 20,
    margin: 10,
    borderRadius: 30,
    whiteSpace: "nowrap",
    border: "solid 1px",
    boxShadow: 0,

  },
  company: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 20,
    color: "grey"
  }
};

const JobsForYou = ({ jobList }) => (
  <div style={styles.root}>
    <div style={{ display: "flex", margin: 6 }}>
      <div>
        <img
          src="/images/assets/icons/Jobs-For-You.svg"
          alt="jobs-for-You-logo"
        />
      </div>
      <div>
        <div style={styles.heading}>
          <div style={styles.mainText}>Jobs For You</div>
          <div style={styles.subtext}>VIEW</div>
        </div>

        <div style={styles.subheading}>
          <span>Based on your </span>
          <span style={styles.subtext}>PREFERENCES</span>
        </div>
      </div>
    </div>

    <div style={{ display: "flex", overflow: "scroll" }}>
      {jobPreferences.map(preference => (
        <CardView styles={styles.preferenceCard}>
          <div>{preference.type}</div>
        </CardView>
      ))}
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

export default JobsForYou;

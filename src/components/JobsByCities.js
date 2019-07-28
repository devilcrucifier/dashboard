import React from "react";
import { jobCityList } from "./constants";
import CardView from "./common/CardView";
import FlexView from "./common/FlexView";

const styles = {
  root: {
    padding: "20px",
    marginBottom: 100
  },
  subtext: {
    color: "#008080"
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
  cityImage: {
    width: "100%",
    borderRadius: 10
  },
  card: {
    padding: 20,
    margin: 8,
    width: 130,
    flex: "0 0 auto",
    boxShadow: 0
  },
  city: {
    fontWeight: "bold",
    fontSize: 16
  }
};

const JobsByCities = () => (
  <div style={styles.root}>
    <div style={{ display: "flex", margin: 6 }}>
      <div>
        <img
          src="/images/assets/icons/Jobs-by-Location.svg"
          alt="jobs-near-You-logo"
        />
      </div>
      <div style={styles.heading}>
        <div style={styles.mainText}>Jobs By Cities</div>
        <div style={styles.subtext}>VIEW ALL</div>
      </div>
    </div>

    <div style={{ display: "flex", overflow: "scroll" }}>
      {jobCityList.map(jobCity => (
        <CardView styles={styles.card}>
          <FlexView styles={{ alignItems: "center" }}>
            <img
              alt="city"
              src="/images/assets/city_images/delhi.jpeg"
              style={styles.cityImage}
            />
          </FlexView>
          <FlexView styles={{ alignItems: "center" }}>
            <span style={styles.city}>{jobCity.city}</span>
          </FlexView>
          <FlexView styles={{ alignItems: "center" }}>
            <span style={{ fontSize: 14 }}>{jobCity.number} Jobs</span>
          </FlexView>
        </CardView>
      ))}
    </div>
  </div>
);

export default JobsByCities;

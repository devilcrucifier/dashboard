import React from "react";
import Header from "./Header";
import JobsNearYou from "./JobsNearYou";
import JobsByCategories from "./JobsByCategories";
import JobsForYou from "./JobsForYou";
import WhatsAppAlert from "./WhatsAppAlert";
import JobsByCities from "./JobsByCities";
import Footer from "./Footer";
import { url } from "./constants";
import Loading from "./Loading";

class HomePage extends React.Component {
  state = {
    error: null,
    isLoading: true,
    jobList: []
  };

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoading: false,
            jobList: result
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }

  render() {
    const { jobList, isLoading } = this.state;
    return (
      <React.Fragment>
        <Header />
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <JobsNearYou jobList={jobList} />
            <JobsByCategories />
            <JobsForYou jobList={jobList} />
            <WhatsAppAlert />
            <JobsByCities />
          </div>
        )}

        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;

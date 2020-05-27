import React from "react";
import "./campaign.css";
import FixedButton from "../../shared/fixedButton/fixedBtn";
import Map from "./components/map";
import CampaignInfo from "./components/campaignInfo";
import Topic from "./components/topic";
import IntroClip from "./components/introClip";
import CarouselCampaign from "./components/carouselCampaign";
import ReactPageScroller from "react-page-scroller";

export default class Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }
  handlePageChange = (number) => {
    this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
  };

  render() {
    return (
      <React.Fragment>
        <FixedButton />
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >
          <CarouselCampaign />
          <CampaignInfo />
          <Map />
          <Topic />
          <IntroClip />
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}

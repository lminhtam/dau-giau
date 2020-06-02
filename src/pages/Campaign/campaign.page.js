import React from "react";
import FixedButton from "../../shared/fixedButton/fixedBtn";
import "./campaign.css";
import CampaignInfo from "./components/campaignInfo";
import CarouselCampaign from "./components/carouselCampaign";
import IntroClip from "./components/introClip";
import Map from "./components/map";

export default class Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlockScrollUp: false,
      isBlockScrollDown: false,
      prevScrollY: 0,
      index: 0
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    if (e.currentTarget.scrollY >= window.innerHeight * 2) {
      this.setState({ isBlockScrollDown: true })
    }
    if (this.state.isBlockScrollDown) {
      this.setState({ index: this.state.index + 1 })
      window.scrollTo({
        top: window.innerHeight * 2
      })
    }
    if (this.state.index > 4) {
      this.setState({ isBlockScrollDown: false })
    }
  }

  render() {
    return (
      <div>
        <FixedButton />
        <CarouselCampaign />
        <CampaignInfo />
        <Map index={this.state.index} />
        <IntroClip />
      </div>
    );
  }
}

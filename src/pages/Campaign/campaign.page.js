import React from "react";
import "./campaign.css";
import CampaignInfo from "./components/campaignInfo";
import CarouselCampaign from "./components/carouselCampaign";
import IntroClip from "./components/introClip";
import Map from "./components/map";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import FixedButton from "shared/fixedButton/fixedBtn";

export default class Campaign extends React.Component {
  targetRef = React.createRef();
  targetElement = null;
  constructor(props) {
    super(props);
    this.state = {
      isBlockScrollUp: false,
      isBlockScrollDown: false,
      index: 0
    };
  }
  componentDidMount() {
    this.targetElement = this.targetRef.current;
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearAllBodyScrollLocks();
  }

  handleScroll = (e) => {
    if (e.currentTarget.scrollY > window.innerHeight * 2) {
      console.info('> map', this.state.index)
      if (this.state.index > 80) {
        if (this.state.isBlockScrollDown) {
          enableBodyScroll(this.targetElement);
        }
        console.info('> index 80', this.state.index)
        this.setState({ isBlockScrollDown: false })
      } else {
        if (!this.state.isBlockScrollDown) {
          window.scrollTo({
            top: window.innerHeight * 2
          })
          disableBodyScroll(this.targetElement);
        }
        console.info('< index 80', this.state.index)
        this.setState({ isBlockScrollDown: true })
      }
    } else if (e.currentTarget.scrollY < window.innerHeight * 2) {
      console.info('< map', this.state.index)
      if (this.state.index > 0) {
        console.info('> index 0', this.state.index)
        this.setState({ isBlockScrollUp: true })
        if (!this.state.isBlockScrollUp) {
          window.scrollTo({
            top: window.innerHeight * 2
          })
          disableBodyScroll(this.targetElement);
        }
      } else {
        if (this.state.isBlockScrollUp) {
          enableBodyScroll(this.targetElement);
        }
        console.info('< index 0', this.state.index)
        this.setState({ isBlockScrollUp: false })
      }
    }

  }

  onWheel = (e) => {
    if (this.state.isBlockScrollDown) {
      this.setState({ index: this.state.index + 1 })
    }
    if (this.state.isBlockScrollUp) {
      this.setState({ index: this.state.index - 1 })
    }
  }

  render() {
    return (
      <div ref={this.targetRef} onWheel={this.onWheel}>
        <CarouselCampaign />
        <CampaignInfo />
        <Map index={this.state.index} />
        <IntroClip />
        <FixedButton from="campaign" />
      </div>
    );
  }
}

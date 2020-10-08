import "font-awesome/css/font-awesome.min.css";
import React from "react";
import "../campaign.css";
import BottomInfo from '../../../shared/bottomInnfo/bottomInfo'

export default class IntroClip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div id="normalAlign">
        <iframe
          title="Intro Campaign"
          width="80%"
          height={`${(this.state.width * 0.8 * 9) / 16}`}
          src={"https://www.youtube.com/embed/VbjJHXfVOl4"}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <BottomInfo />
      </div>
    );
  }
}

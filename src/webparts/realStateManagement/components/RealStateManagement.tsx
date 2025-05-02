import * as React from 'react';
import styles from './RealStateManagement.module.scss';
import { IRealStateManagementProps } from './IRealStateManagementProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp';
import { Icon } from '@fluentui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface IRealStateManagementState {

}

require("../assets/css/style.css");
require("../assets/css/fabric.min.css");


export default class RealStateManagement extends React.Component<IRealStateManagementProps, IRealStateManagementState> {

  constructor(props: IRealStateManagementProps, state: IRealStateManagementState) {
    super(props);

    this.state = {

    };
  }


  public render(): React.ReactElement<IRealStateManagementProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    var settingsone = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      autoplay: false,
      vertical: true,
      verticalSwiping: true,
      cssEase: "linear",
      // rowrows: 2,
      slidesPerRow: 1
    }

    return (

      <div className="realStateManagement">
        <div className="ms-Grid-row">

          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg3">
            
          </div>

        </div>
      </div>

    );
  }
}

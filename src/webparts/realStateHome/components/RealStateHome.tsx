import * as React from 'react';
import styles from './RealStateHome.module.scss';
import { IRealStateHomeProps } from './IRealStateHomeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export interface IRealStateHomeState {

}

require("../assets/css/style.css");
require("../assets/css/fabric.min.css");

export default class RealStateHome extends React.Component<IRealStateHomeProps, IRealStateHomeState> {

  constructor(props: IRealStateHomeProps, state: IRealStateHomeState) {
    super(props);

    this.state = {
      
    };
  }
  
  public render(): React.ReactElement<IRealStateHomeProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
    
        <div className="realStateHome">
         
        </div>
      
    );
  }
}

import * as React from 'react';
import styles from './RealStateHome.module.scss';
import { IRealStateHomeProps } from './IRealStateHomeProps';
import { escape, set } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from 'office-ui-fabric-react';
import { PrimaryButton } from '@fluentui/react';
import { IIconProps } from 'office-ui-fabric-react';


export interface IRealStateHomeState {

}

const POIIcon : IIconProps  = { iconName : "POI" };

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

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      autoplay: true,
      cssEase: "linear",
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };

    // function SampleNextArrow(props) {
    //   const { className, style, onClick } = props;
    //   return (
    //     <Icon iconName='ChevronLeft' className={className + 'arrow-icon'} style={{ ...style }} onClick={onClick}></Icon>
    //   );
    // }

    // function SamplePrevArrow(props) {
    //   const { className, style, onClick } = props;
    //   return (
    //     <Icon iconName='ChevronRight' className={className + 'arrow-icon'} style={{ ...style }} onClick={onClick}></Icon>
    //   );
    // }

    return (

      <div className="realStateHome">

        <div className='ms-Grid-row'>
          <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12'>
            <Slider {...settings}>
              <div className='RealStateHome'>
                <img src='https://blog.shortpoint.com/wp-content/uploads/2017/03/real_estate15.jpg' alt="Wp-Content" />
                <div className='overlayContent'>
                  <h2>Real Estate News 1</h2>
                  <p>Monday, March 23 at 18:30</p>
                  <PrimaryButton className='viewMore' text='View More' />
                </div>
              </div>

              <div className='RealStateHome'>
                <img src='https://blog.shortpoint.com/wp-content/uploads/2017/03/real_estate16.jpg' alt="Wp-Content" />
                <div className='overlayContent'>
                  <h2>Real Estate News 2</h2>
                  <p>Wednesday, December 12 at 15:30</p>
                  <PrimaryButton className='viewMore' text='View More' />
                </div>
              </div>

              <div className='RealStateHome'>
                <img src='https://blog.shortpoint.com/wp-content/uploads/2017/03/real_estate14.jpg' alt="Wp-Content" />
                <div className='overlayContent'>
                  <h2>Real Estate News 3</h2>
                  <p>Fridat, June 19 at 14:00</p>
                  <PrimaryButton className='viewMore' text='View More' />
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className='ms-Grid-row'>
          <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg3'>
            <div className='RealState-Container'>
              <div className='RealStateHomeImage'>
                <img src='https://www.shortpoint.com/wp-content/uploads/2017/03/real_estate4.jpg' alt='RealState-Home Image' />
              </div>
              <div className='StateHome-Dec'>
                <h2>1360-1370 N Fruit Ave <br />
                  Fresno, CA 12728,USA
                </h2>
                <hr className='Realstate-Line'/>
              </div>
              <div className='StateHome-Addr'>
                <p>Lorem Ipsum has been the industry's <br />
                  standard dummy text ever since the <br />
                  1500, when an unknown printer took <br />
                  gallery of type and scrambled it to make <br />
                  a type specimen book. </p>
                  <br />
                <hr className='Real-Line'/>
                  <br />
                <div className='StateHome-Time'>
                  <Icon iconName='Recent' className='Icon'></Icon>
                  <span> Aug 12,2017 at 2:45AM</span>
                </div>
              </div>
              <div className="viewMap">
                <PrimaryButton className='Map-button' iconProps={POIIcon} text="View on the Map" />
              </div>
            </div>

          </div>

          <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg3'>
            <div className='RealState-Container'>
              <div className='RealStateHomeImage'>
                <img src='https://www.shortpoint.com/wp-content/uploads/2017/03/real_estate1.jpg' alt='RealState-Home Image' />
              </div>
              <div className='StateHome-Dec'>
                <h2>1360-1370 N Fruit Ave <br />
                  Fresno, CA 12728,USA
                </h2>
                <hr className='Realstate-Line'/>
              </div>
              <div className='StateHome-Addr'>
                <p>Lorem Ipsum has been the industry's <br />
                  standard dummy text ever since the <br />
                  1500, when an unknown printer took <br />
                  gallery of type and scrambled it to make <br />
                  a type specimen book. </p>
                  <br />
                <hr className='Real-Line'/>
                  <br />
                <div className='StateHome-Time'>
                  <Icon iconName='Recent' className='Icon'></Icon>
                  <span> Aug 12,2017 at 2:45AM</span>
                </div>
              </div>
              <div className="viewMap">
                <PrimaryButton className='Map-button' iconProps={POIIcon} text="View on the Map" />
              </div>
            </div>

          </div>

          <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg3'>
            <div className='RealState-Container'>
              <div className='RealStateHomeImage'>
                <img src='https://www.shortpoint.com/wp-content/uploads/2017/03/real_estate2.jpg' alt='RealState-Home Image' />
              </div>
              <div className='StateHome-Dec'>
                <h2>1360-1370 N Fruit Ave <br />
                  Fresno, CA 12728,USA
                </h2>
                <hr className='Realstate-Line'/>
              </div>
              <div className='StateHome-Addr'>
                <p>Lorem Ipsum has been the industry's <br />
                  standard dummy text ever since the <br />
                  1500, when an unknown printer took <br />
                  gallery of type and scrambled it to make <br />
                  a type specimen book. </p>
                  <br />
                <hr className='Real-Line'/>
                  <br />
                <div className='StateHome-Time'>
                  <Icon iconName='Recent' className='Icon'></Icon>
                  <span> Aug 12,2017 at 2:45AM</span>
                </div>
              </div>
              <div className="viewMap">
                <PrimaryButton className='Map-button' iconProps={POIIcon} text="View on the Map" />
              </div>
            </div>

          </div>

          <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg3'>
            <div className='RealState-Container'>
              <div className='RealStateHomeImage'>
                <img src='https://www.shortpoint.com/wp-content/uploads/2017/03/real_estate3.jpg' alt='RealState-Home Image' />
              </div>
              <div className='StateHome-Dec'>
                <h2>1360-1370 N Fruit Ave <br />
                  Fresno, CA 12728,USA
                </h2>
                <hr className='Realstate-Line'/>
              </div>
              <div className='StateHome-Addr'>
                <p>Lorem Ipsum has been the industry's <br />
                  standard dummy text ever since the <br />
                  1500, when an unknown printer took <br />
                  gallery of type and scrambled it to make <br />
                  a type specimen book. </p>
                  <br />
                <hr className='Real-Line'/>
                  <br />
                <div className='StateHome-Time'>
                  <Icon iconName='Recent' className='Icon'></Icon>
                  <span> Aug 12,2017 at 2:45AM</span>
                </div>
              </div>
              <div className="viewMap">
                <PrimaryButton iconProps={POIIcon} text="View on the Map" />
              </div>
            </div>

          </div>
        </div>

      </div>

    );
  }
}

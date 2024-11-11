import * as React from 'react';
import styles from './Demoproject.module.scss';
import { IDemoprojectProps } from './IDemoprojectProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as moment from 'moment';
import { sp } from '@pnp/sp/presets/all';
import { Icon } from 'office-ui-fabric-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Calendar from 'react-calendar';

export interface IDemoprojectState {
  BenifitsData : any;
}

require("../assets/css/style.css"); 

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplaySpeed: 2000,
  nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // />
    <img className={className + " arrow-img-icon"} src={require("../assets/Image/next.jpg")} style={{ ...style }} onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" }}
    //   onClick={onClick}
    // />
    <img className={className + " arrow-img-icon"} src={require("../assets/Image/back.jpg")} style={{ ...style }} onClick={onClick} />
  );
}
export default class Demoproject extends React.Component<IDemoprojectProps, IDemoprojectState> {

  constructor(props: IDemoprojectProps, state: IDemoprojectState){
    super(props);

    this.state = {
      BenifitsData : ""
    };
  }

  public render(): React.ReactElement<IDemoprojectProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
        <div className="demoproject">
          <div className='ms-Grid'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col'>
                <div className='Header'>
                  <div className='Header-Text'>
                    <h3>Sabina, Welcome to <br /> Benefits & Payroll!</h3>
                    <p>Here you'll find all the resources for your PTO, time cards and <br /> benefit related needs!</p>
                  </div>
                  <div className='Benifit-Image'>
                    <img src='https://th.bing.com/th/id/OIP.Z_K5lbrWEnAGsSJ1_6cIPwHaE8?rs=1&pid=ImgDetMain' alt="Benefits image" />
                  </div>
                </div>
              </div>
            </div>
          
              <div className='ms-Grid-col'>
                <div className='Benifits-Icons'>
                  <div className='All-Icons'>
                    <Icon iconName='DateTime' className='Items-Icon'/>
                    <p>TimeSheet</p>
                  </div>

                  <div className='All-Icons'>
                    <Icon iconName='RedEye12' className='Items-Icon'/>
                    <p>Vision</p>
                  </div>

                  <div className='All-Icons'>
                    <Icon iconName='CircleDollar' className='Items-Icon'/>
                    <p>401K Plan</p>
                  </div>

                  <div className='All-Icons'>
                    <Icon iconName='AddWork' className='Items-Icon'/>
                    <p>Project</p>
                  </div>

                  <div className='All-Icons'>
                    <Icon iconName='Globe' className='Items-Icon'/>
                    <p>Helpdesk</p>
                  </div>
                  
                  <div className='All-Icons'>
                    <Icon iconName='Calendar' className='Items-Icon'/>
                    <p>Holidays</p>
                  </div>

                </div>
              </div>

              <div className='ms-Grid-col'>
               
                <Slider {...settings}>
                  {/* <Icon className='prevleft' iconName='ChevronLeft' /> */}
                  {
                    this.state.BenifitsData.length > 0 && 
                      this.state.BenifitsData.map((item) => {
                        return (
                          <>
                            <div className='Slider'>
                                  <div className='Benifits-res'>
                                    <img src={item.Image}></img>
                                    <p>{item.Title}</p>
                                  </div>
                            </div>
                          </>
                        );
                      })
                  }
                  {/* <Icon className='nextright' iconName='ChevronRight'/> */}
                </Slider>
              </div>

          </div>
        </div>
    );
  }

  public async componentDidMount() {
    this.GetBenifits();
  }

  public async GetBenifits() {
    const benifitsroll = await sp.web.lists.getByTitle("Details").items.select(
      "ID",
      "Title",
      "Image"
    ).get().then((data) => {
      let AllData = [];
      console.log(data);
      console.log(benifitsroll);
      if(data.length > 0) {
        data.forEach((item) => {
          AllData.push({
            ID: item.Id ? item.Id : "",
            Title: item.Title ? item.Title : "",
            Image: item.Image ? JSON.parse(item.Image).serverRelativeUrl : ""
          });
        });
        this.setState({ BenifitsData : AllData });
      } 
    }).catch((error) => {
      console.log("Error Retrived" , error);
    });
  }

}

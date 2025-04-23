import * as React from 'react';
import styles from './RealStateResource.module.scss';
import { IRealStateResourceProps } from './IRealStateResourceProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp';
import { Icon } from 'office-ui-fabric-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrimaryButton } from '@fluentui/react';

export interface IRealStateState {
  RealStateNews: any;
}

require("../assets/css/style.css");
require("../assets/css/fabric.min.css");


export default class RealStateResource extends React.Component<IRealStateResourceProps, IRealStateState> {

  constructor(props: IRealStateResourceProps, state: IRealStateState) {
    super(props);

    this.state = {
      RealStateNews: ""
    };
  }


  public render(): React.ReactElement<IRealStateResourceProps> {
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
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img className={className + " arrow-img-icon"} src={require("../assets/Image/next.jpg")} style={{ ...style }} onClick={onClick} />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img className={className + " arrow-img-icon"} src={require("../assets/Image/back.jpg")} style={{ ...style }} onClick={onClick} />
      );
    }


    return (

      <div className="realStateResource">
        <div className='ms-Grid'>


          <div className="RealState-Header">
            <div className='ms-Grid-col'>
              <div className='State-Resource'>
                <div className='All-Icon'>
                  <Icon iconName="Home" className='Items-Icon' />
                  <p>254</p>
                  <span>Open Purposes</span>
                </div>

                <div className='All-Icon'>
                  <Icon iconName='Group' className='Items-Icon' />
                  <p>136</p>
                  <span>Customers Pending</span>
                </div>

                <div className='All-Icon'>
                  <Icon iconName='Work' className='Items-Icon' />
                  <p>285</p>
                  <span>Total Transactions</span>
                </div>

                <div className='All-Icon'>
                  <Icon iconName='Mail' className='Items-Icon' />
                  <p>1 453</p>
                  <span>Total Messages</span>
                </div>

                <div className='All-Icon'>
                  <Icon iconName='Money' className='Items-Icon' />
                  <p>230 450 $</p>
                  <span>Total Revenue</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <br />
          </div>

          <div>
            <br />
          </div>

          <div className='ms-Grid-row'>
            <div className='ms-Grid-col ms-sm9 ms-md9 ms-lg12'>
              <Slider {...settings}>
                {
                  this.state.RealStateNews.length > 0 &&
                  this.state.RealStateNews.map((item) => {
                    return (
                      <>
                        <div className='Slider'>
                          <div className='realstate'>
                            <h2>{item.Title}</h2>
                            <p>{item.Description}</p>
                          </div>
                        </div>
                      </>
                    );
                  })
                }
              </Slider>
            </div>
          </div>

          <div>
            <div className='ms-Grid-row'>

              <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg2 p-0">
                <div className='realstate-container'>
                  <div className="realstate-text">
                    <p className="realstate-heading">
                      Lorem ipsum dolor <br /> sit amet
                    </p>
                    <p className="realstate-description">
                      Sed sed lacus rutrum ex hendrerit pellentesque non eget nisl. Quisque in fermentum lacus.
                      Aenean bibendum enim eu malesuada posuere. Proin eu sollicitudin libero. <br />
                      Sed sed lacus rutrum ex hendrerit pellentesque non eget nisl. Quisque in fermentum lacus.
                      Aenean bibendum enim eu malesuada posuere. Proin eu sollicitudin libero.
                    </p>
                    <PrimaryButton text="Read More" className="readmore-button" />
                  </div>
                </div>
              </div>

              <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg5 p-0">
                <div className='docs-panel'>
                  <div className="docs-header">
                    <Icon iconName="TextDocument" className="doc-icon" />
                    <h2>Docs</h2>
                  </div>
                  <span className="shared-docs-label">Shared Documents</span>

                  <div className="doc-section">
                    <div className="doc-item">
                      <Icon iconName="WordDocument" className="doc-icon-circle-word" />
                      <div className="doc-content">
                        <h3>Agreement</h3>
                        <p>Donec ut maximus magna. Quisque id placerat ex. Pellentesque habitant morbi tristique senectus...</p>
                      </div>
                    </div>
                    <hr />

                    <div className="doc-item">
                      <Icon iconName="PowerPointDocument" className="doc-icon-circle-ppt" />
                      <div className="doc-content">
                        <h3>Company Presentation</h3>
                        <p>Donec ut maximus magna. Quisque id placerat ex. Pellentesque habitant morbi tristique senectus...</p>
                      </div>
                    </div>
                    <hr />

                    <div className="doc-item">
                      <Icon iconName="ExcelDocument" className="doc-icon-circle-excel" />
                      <div className="doc-content">
                        <h3>Customers List</h3>
                        <p>Donec ut maximus magna. Quisque id placerat ex. Pellentesque habitant morbi tristique senectus...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg5 p-0'>
                <div className='Event-container'>

                  <div className='Event'>  
                    <Icon iconName='Calendar' className='CalenderIcon'></Icon>
                    <h2>Events</h2>
                  </div>
                  <span>Upcoming Events</span>

                  <div className='Event-Section'>
                    <div className='Event-Time'>
                      <span className='day'>5</span>
                      <p className='month'>JUN</p>
                    </div>

                    <div className='Event-Details'>
                      <div className='event-Title'>
                        <Icon iconName='Group' className='Even-Icon'></Icon><h3>Team Dinner</h3>
                        <div className='Event-Location'>
                          <Icon iconName='Recent' className='Inform-Icon'></Icon><p>12:00AM- 12:00AM</p>
                          <Icon iconName='POI' className='Inform-Icon'></Icon><p>London, UK</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className='Event-Section'>
                    <div className='Event-Time'>
                      <span className='day'>5</span>
                      <p className='month'>JUN</p>
                    </div>

                    <div className='Event-Details'>
                      <div className='event-Title'>
                        <Icon iconName='Recent' className='Even-Icon'></Icon><h3>Perfomance Bi-Annual Review</h3>
                        <div className='Event-Location'>
                          <Icon iconName='Recent' className='Inform-Icon'></Icon><p>12:00AM- 12:00AM</p>
                          <Icon iconName='POI' className='Inform-Icon'></Icon><p>San-Francisko, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className='Event-Section'>
                    <div className='Event-Time'>
                      <span className='day'>5</span>
                      <p className='month'>JUN</p>
                    </div>

                    <div className='Event-Details'>
                      <div className='event-Title'>
                        <Icon iconName='Work' className='Even-Icon'></Icon><h3>Trade License Renewal</h3>
                        <div className='Event-Location'>
                          <Icon iconName='Recent' className='Inform-Icon'></Icon><p>12:00AM- 12:00AM</p>
                          <Icon iconName='POI' className='Inform-Icon'></Icon><p>Roma,Italy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className='Event-Section'>
                    <div className='Event-Time'>
                      <span className='day'>6</span>
                      <p className='month'>JUN</p>
                    </div>

                    <div className='Event-Details'>
                      <div className='event-Title'>
                        <Icon iconName='Trophy2' className='Even-Icon'></Icon><h3>Hack Night</h3>
                        <div className='Event-Location'>
                          <Icon iconName='Recent' className='Inform-Icon'></Icon><p>12:00AM- 12:00AM</p>
                          <Icon iconName='POI' className='Inform-Icon'></Icon><p>Kiev, Ukraine</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className='Event-Section'>
                    <div className='Event-Time'>
                      <span className='day'>6</span>
                      <p className='month'>JUN</p>
                    </div>

                    <div className='Event-Details'>
                      <div className='event-Title'>
                        <Icon iconName='Trophy2' className='Even-Icon'></Icon><h3>End of Year Review</h3>
                        <div className='Event-Location'>
                          <Icon iconName='CalendarWorkWeek' className='Inform-Icon'></Icon><p>12:00AM- 12:00AM</p>
                          <Icon iconName='POI' className='Inform-Icon'></Icon><p>Berlin, Germany</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                </div>
              </div> */}

              {/* <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg5 p-0'>
                <div className='EventContainer'>

                  <div className='Header'>
                    <Icon iconName='Calendar' className='CalendarIcon' />
                    <h2>Events</h2>
                  </div>
                  <span className='SubTitle'>Upcoming Events</span>

                  {[
                    { day: '5', month: 'JUN', title: 'Team Dinner', icon: 'Group', time: '12:00AM - 12:00AM', location: 'London, UK' },
                    { day: '5', month: 'JUN', title: 'Performance Bi-Annual Review', icon: 'Recent', time: '12:00AM - 12:00AM', location: 'San-Francisko, USA' },
                    { day: '5', month: 'JUN', title: 'Trade License Renewal', icon: 'Work', time: '12:00AM - 12:00AM', location: 'Rome, Italy' },
                    { day: '6', month: 'JUN', title: 'Hack Night', icon: 'Trophy2', time: '12:00AM - 12:00AM', location: 'Kiev, Ukraine' },
                    { day: '6', month: 'JUN', title: 'End of Year Review', icon: 'CalendarWorkWeek', time: '12:00AM - 12:00AM', location: 'Berlin, Germany' }
                  ].map((event, index) => (
                    <div key={index}>
                      <div className='EventSection'>
                        <div className='EventTime'>
                          <span className='Day'>{event.day}</span>
                          <p className='Month'>{event.month}</p>
                        </div>
                        <div className='EventDetails'>
                          <div className='EventTitle'>
                            <Icon iconName={event.icon} className='EventIcon' />
                            <h3>{event.title}</h3>
                          </div>
                          <div className='EventLocation'>
                            <Icon iconName='Clock' className='DetailIcon' />
                            <p>{event.time}</p>
                            <Icon iconName='POI' className='DetailIcon' />
                            <p>{event.location}</p>
                          </div>
                        </div>
                      </div>
                      {index < 4 && <hr />}
                    </div>
                  ))}

                </div>
              </div> */}

              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg5 p-0'>
                <div className="event-container">
                  <div className="header">
                    <Icon iconName="Calendar" className="calendar-icon" />
                    <h2>Events</h2>
                  </div>
                  <p className="subtitle">Upcoming Events</p>


                  <div className="event-row">
                    <div className="event-date">
                      <span className="day">5</span>
                      <span className="month">JUN</span>
                    </div>
                    <div className="event-info">
                      <div className="title-row">
                        <Icon iconName="Group" className="icon" />
                        <h3>Team Dinner</h3>
                      </div>
                      <div className="details">
                        <Icon iconName="Recent" className="icon" />
                        <p>12:00AM - 12:00AM</p>
                        <Icon iconName="POI" className="icon" />
                        <p>London, UK</p>
                      </div>
                    </div>
                  </div>
                  <hr className='he-line'/>


                  <div className="event-row">
                    <div className="event-date">
                      <span className="day">5</span>
                      <span className="month">JUN</span>
                    </div>
                    <div className="event-info">
                      <div className="title-row">
                        <Icon iconName="Recent" className="icon" />
                        <h3>Performance Bi-Annual Review</h3>
                      </div>
                      <div className="details">
                        <Icon iconName="Recent" className="icon" />
                        <p>12:00AM - 12:00AM</p>
                        <Icon iconName="POI" className="icon" />
                        <p>San-Francisco, USA</p>
                      </div>
                    </div>
                  </div>
                  <hr className='he-line'/>

                  <div className="event-row">
                    <div className="event-date">
                      <span className="day">5</span>
                      <span className="month">JUN</span>
                    </div>
                    <div className="event-info">
                      <div className="title-row">
                        <Icon iconName="Work" className="icon" />
                        <h3>Trade License Renewal</h3>
                      </div>
                      <div className="details">
                        <Icon iconName="Recent" className="icon" />
                        <p>12:00AM - 12:00AM</p>
                        <Icon iconName="POI" className="icon" />
                        <p>Roma, Italy</p>
                      </div>
                    </div>
                  </div>
                  <hr className='he-line'/>

                  <div className="event-row">
                    <div className="event-date">
                      <span className="day">6</span>
                      <span className="month">JUN</span>
                    </div>
                    <div className="event-info">
                      <div className="title-row">
                        <Icon iconName="Trophy2" className="icon" />
                        <h3>Hack Night</h3>
                      </div>
                      <div className="details">
                        <Icon iconName="Recent" className="icon" />
                        <p>12:00AM - 12:00AM</p>
                        <Icon iconName="POI" className="icon" />
                        <p>Kiev, Ukraine</p>
                      </div>
                    </div>
                  </div>
                  <hr className='he-line'/>

                  <div className="event-row">
                    <div className="event-date">
                      <span className="day">6</span>
                      <span className="month">JUN</span>
                    </div>
                    <div className="event-info">
                      <div className="title-row">
                        <Icon iconName="CalendarWorkWeek" className="icon" />
                        <h3>End of Year Review</h3>
                      </div>
                      <div className="details">
                        <Icon iconName="Recent" className="icon" />
                        <p>12:00AM - 12:00AM</p>
                        <Icon iconName="POI" className="icon" />
                        <p>Berlin, Germant</p>
                      </div>
                    </div>
                  </div>
                  <hr className='he-line'/>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    );
  }

  public async componentDidMount() {
    this.GetRealStateNews();
  }

  public async GetRealStateNews() {
    const realState = await sp.web.lists.getByTitle("RealState News").items.select(
      "ID",
      "Title",
      "Description"
    ).get().then((data) => {
      let AllData = [];
      console.log(data);
      console.log(realState);
      if (data.length > 0) {
        data.forEach((item) => {
          AllData.push({
            ID: item.Id ? item.Id : "",
            Title: item.Title ? item.Title : "",
            Description: item.Description ? item.Description : "",
          });
        });
        this.setState({ RealStateNews: AllData });
      }
    }).catch((error) => {
      console.log("Error Retrived", error);
    });
  }

}

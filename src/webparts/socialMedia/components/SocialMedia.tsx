import * as React from 'react';
import styles from './SocialMedia.module.scss';
import { ISocialMediaProps } from './ISocialMediaProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import * as moment from 'moment';
import { Icon, PrimaryButton } from 'office-ui-fabric-react';
import { Calendar, defaultCalendarStrings } from '@fluentui/react';

export interface ISocialMediaState {
  AllPayHolidays : any;
  AllNames : any;
  Name : any;
}

require("../assets/css/style.css");

export default class SocialMedia extends React.Component<ISocialMediaProps, ISocialMediaState> {

  constructor(props: ISocialMediaProps, state: ISocialMediaState){
    super(props);

    this.state = {
      AllPayHolidays : "",
      AllNames : "",
      Name : "",
   
    };
  }

  public render(): React.ReactElement<ISocialMediaProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
        <div className="socialMedia">
          <div className='ms-Grid'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col'>
                <div className='social-text'>
                  <h2>PAY & HOLIDAYS</h2>
                  {
                    this.state.AllPayHolidays.length > 0 && 
                      this.state.AllPayHolidays.map((item) => {
                        return (
                          <>
                            <div className='ms-Grid-col'>
                              {
                                item.Name == "Holiday" ?
                                <>
                                  <div className='holiday-schedule'>
                                    <div className='card'>
                                      <p>{moment(new Date(item.Date)).format("DD")}</p>
                                      <span>{moment(new Date(item.Date)).format("MMM")}</span>
                                    </div>
                                    <div className='card-details'>
                                      <h4>{item.Title}</h4>
                                      <p>{item.Description}</p>
                                    </div>
                                    <div className='Holiday-Name'>{item.Name}</div>
                                  </div>
                                </>
                                :
                                <>
                                  {
                                    item.Name == "Pay" ?
                                    <>
                                      <div className='Pay-schedule'>
                                        <div className='card'>
                                          <p>{moment(new Date(item.Date)).format("DD")}</p>
                                          <span>{moment(new Date(item.Date)).format("MMM")}</span>
                                        </div>
                                        <div className='card-details'>
                                          <h4>{item.Title}</h4>
                                          <p>{item.Description}</p>
                                        </div>
                                        <div className='Payed-Name'>{item.Name}</div>
                                      </div>
                                    </>
                                     : 
                                     <></>
                                  }
                                </>
                              }
                            </div>
                          </>
                        );
                      })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

  public async componentDidMount() {
    this.GetPayHolidays();
  }

  public async GetPayHolidays() {
    const payholidays = await sp.web.lists.getByTitle("Pay & Holidays").items.select(
      "ID",
      "Date",
      "Title",
      "Description",
      "Name"
    ).get().then((data) => {
      let AllData = [];
      console.log(data);
      console.log(payholidays);

      if(data.length > 0) {
        data.forEach((item) => {
          AllData.push({
            ID : item.Id ? item.Id : "",
            Date : item.Date ? item.Date : "",
            Title: item.Title ? item.Title : "",
            Description : item.Description ? item.Description : "",
            Name : item.Name ? item.Name : ""
          });
        });
        this.setState({ AllPayHolidays : AllData });
        console.log(this.state.AllPayHolidays);
      }
    }).catch((Error) => {
      console.log("Error Retrived" , Error);
    });
  }
}


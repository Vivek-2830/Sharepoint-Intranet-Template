import * as React from 'react';
import styles from './FeedBack.module.scss';
import { IFeedBackProps } from './IFeedBackProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import { PrimaryButton, TextField } from 'office-ui-fabric-react';

export interface IFeedBackState {
  Feedback : any;
  AddFeedback : any;
}

require("../assets/css/style.css");

export default class FeedBack extends React.Component<IFeedBackProps, IFeedBackState> {

  constructor(props: IFeedBackProps, state: IFeedBackState){
    super(props);

    this.state = {
      Feedback : "",
      AddFeedback : ""
    };
  }

  public render(): React.ReactElement<IFeedBackProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      
        <div className="feedBack">
          <div className='ms-Grid'>
              <div className='ms-Grid-col'>
                <div className='My-Feedback'>
                  <h2>WE WANT TO HEAR FROM YOU!</h2>
                  <div className='Feedback-Form'>
                    <TextField 
                      placeholder='Is there anything else you would like to see on this Payroll & Benefits page?'
                      name="Feedback"
                      type="Text"
                      multiline rows = {4}
                      required={true}
                      onChange={(value) =>
                      this.setState({ Feedback: value.target["value"]})
                      }
                      value={this.state.Feedback}
                    />
                  </div>
                  <div className='Feedback-button'>
                    <PrimaryButton 
                      text="Submit my feedback"
                      type="Add"
                      onClick={() => this.setState({ AddFeedback : "" } , () => this.FeedbackAdd())}
                    ></PrimaryButton>
                  </div>
                </div>
                <footer className="footer">
                    <div className='footer-text'>Copyright (c) 2024 ORIGAMI</div>
                    <div className='contact-text'>Contact: vivekg1082004@outlook.com</div>
                </footer>
              </div>
          </div>
        </div>
    );
  }

  public async FeedbackAdd() {
    if (this.state.Feedback.length == 0) {
    }
    else {
      const addfeedback = await sp.web.lists.getByTitle("Feedback").items.add({
        Feedback : this.state.Feedback
      }).catch((error) => {
        console.log(error);
      });
      this.setState({ AddFeedback : addfeedback });
      this.setState({ Feedback : "" });
    }
  }

}

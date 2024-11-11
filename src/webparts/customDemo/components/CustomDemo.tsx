import * as React from 'react';
import styles from './CustomDemo.module.scss';
import { ICustomDemoProps } from './ICustomDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import { FabricBase, Icon, PrimaryButton, TextField } from 'office-ui-fabric-react';
import { IIconProps } from '@pnp/spfx-controls-react';

export interface ICustomDemoState {
  AllGotQuestionData : any;
  ArrowButton: boolean; 
  ReadAnswer: any;
  Answer : any;
  Downbutton: boolean;
  SelectedId : any;
}

const ChevronDownMed : IIconProps = { iconName : 'ChevronDownMed'};

require("../assets/css/style.css");

export default class CustomDemo extends React.Component<ICustomDemoProps, ICustomDemoState> {

  constructor(props: ICustomDemoProps, state: ICustomDemoState){
    super(props);

    this.state = {
      AllGotQuestionData : "",
      ArrowButton : true,
      ReadAnswer : "",
      Answer : "",
      Downbutton : true,
      SelectedId : ""
    };
  }


  public render(): React.ReactElement<ICustomDemoProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
        <div className="customDemo">
         <div className='ms-Grid'>
          <div className='ms-Grid-row'>
            <div className='ms-Grid-col'>
              <div className='got-question'>
                <h2>GOT QUESTIONS?</h2>
                    {
                      this.state.AllGotQuestionData.length > 0 && 
                        this.state.AllGotQuestionData.map((item) => {
                          return (
                            <>
                              <div className='ms-Grid-col'>
                                <div className='question'>
                                  <div className='qustion-item'> 
                                      <h3>
                                        <Icon className='arrow-down' iconName={this.state.ArrowButton == false && this.state.SelectedId == item.ID ?  "ChevronUp" : "ChevronDown"} onClick={()=> this.setState({ SelectedId : item.ID }, () => this.handleClick(item.ID))}></Icon>
                                        {item.Questions} 
                                      </h3>
                                  </div>
                                  <div className='Questions'>
                                    {
                                      (this.state.ArrowButton == false && this.state.SelectedId == item.ID) ? 
                                      <>
                                          <p>{item.Answer}</p>
                                      </>  :
                                      <></>
                                    }
                                      
                                  </div>
                                </div>
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
    this.GetGotQuestions();
  }

  public async GetGotQuestions() {
    const questions = await sp.web.lists.getByTitle("GOT QUESTIONS").items.select(
      "ID",
      "Questions",
      "Answer"
    ).get().then((data) => {
      let AllData = [];
      console.log(data);
      console.log(questions);

      if(data.length > 0) {
        data.forEach((item) => {
          AllData.push({
            ID: item.Id ? item.Id : "",
            Questions: item.Questions ? item.Questions : "",
            Answer: item.Answer ? item.Answer : ""
          });
        });
        this.setState({ AllGotQuestionData : AllData });
        console.log(this.state.AllGotQuestionData);
      }
    }).catch((Error) => {
      console.log("Error Retrived", Error);
    });
  }

  public async GetReadGotQuestion(ID) {
    let readAllData = this.state.AllGotQuestionData.filter((item) => {
      if (item.ID == ID) {
        return item;
      }
    });
    this.setState({
      Answer : readAllData[0].Answer
    });
  this.GetGotQuestions();
  }

  public handleClick = (id) => {
    // Conditional logic to set different state values
    if (this.state.ArrowButton === false) {
      this.setState({ArrowButton:true});
      this.setState({SelectedId:id});
    } else if(this.state.ArrowButton === true && this.state.SelectedId == id){
      this.setState({ArrowButton:true});
      this.setState({ArrowButton:false});
      this.setState({SelectedId:id});
    }
    else {
      this.setState({ArrowButton:false});
      this.setState({SelectedId:id});
    }
    console.log(this.state.ArrowButton);
    console.log(this.state.SelectedId);
  }

}

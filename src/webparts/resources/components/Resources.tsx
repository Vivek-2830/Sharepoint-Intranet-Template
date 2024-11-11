import * as React from 'react';
import styles from './Resources.module.scss';
import { IResourcesProps } from './IResourcesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Calendar from 'react-calendar';


require("../assets/css/style.css");

export default class Resources extends React.Component<IResourcesProps, {}> {
  public render(): React.ReactElement<IResourcesProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      
        <div className="resources">
          <div className='ms-Grid-col'>
              <div className='Other-Resource'>
                <h2>OTHER RESOURCE</h2>
                  <div className='Items-text'>
                    <div className='resource-item'>
                      <img src="https://th.bing.com/th/id/R.39b4b6d36149500a1c2320255e2efcdb?rik=L1gNNJVF0TzL1w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Y0k3cYNTuG0%2fUqK_cexVySI%2fAAAAAAAAAoY%2frKNhU3432Zc%2fs640%2fprofessionals-traveler.jpg&ehk=L%2bSq05caLu4KczRuXdz7dG59R3oBV1%2bDqFCUi2D%2fzPM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"  alt="Travel & Expense Policies"/>
                      <h2>TRAVEL & EXPENSE POLICIES</h2>
                    </div>

                    <div className='resource-item'>
                      <img src="https://cdn.gobankingrates.com/wp-content/uploads/2021/01/savings-iStock-1177056123-e1609885817397.jpg"  alt="Discounts & Savings" />
                      <h2>DISCOUNTS & SAVINGS</h2>
                    </div>

                    <div className='resource-item'>
                      <img src="https://smartway2.com/wp-content/uploads/2021/04/shutterstock_708649936-980x622.jpg"  alt="Employee Wellness" />
                      <h2>EMPLOYEE WELLNESS</h2>
                    </div>

                    <div className='resource-item'>
                      <img src="https://img.freepik.com/premium-photo/marketer-analityc-manager-team-dressed-suits-working-with-paper-charts-laptops-white-office-interior_506452-3517.jpg"  alt="Financial Planning" />
                      <h2>FINANCIAL PLANNING</h2>
                    </div>

                  </div>
               </div>
          </div>
        </div>
    );
  }
}

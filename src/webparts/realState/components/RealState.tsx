import * as React from 'react';
import styles from './RealState.module.scss';
import { IRealStateProps } from './IRealStateProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp';
import { Icon } from 'office-ui-fabric-react';


export interface IRealStateState {

}

require("../assets/css/style.css");
require("../assets/css/fabric.min.css");

export default class RealState extends React.Component<IRealStateProps, IRealStateState> {

  constructor(props: IRealStateProps, state: IRealStateState) {
    super(props);

    this.state = {

    };
  }

  public render(): React.ReactElement<IRealStateProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (

      <div className="realState">
        <div className='ms-Grid'>

          <div className="LandingPage-Image">
            <div className="Real-State-Image">
              <img src="https://blog.shortpoint.com/wp-content/uploads/2017/03/logo.png" alt="State Logo" />
            </div>

            <div className="State-Text">
              <div className="text">
                <span>Suspendisse eu molestie diam. Vestibulum posuere vel diam at pulvinar.</span>
              </div>
              <div className="text">
                <span>Aliquam gravida nisi est, eget accumsan turpis ultricies eget. In dictum ultricies nulla nec tincidunt.</span>
              </div>
              <div className="text">
                <span>Aliquam at rutrum orci. Vestibulum fringilla a quam non porttitor. Cras quis facilisis massa.</span>
              </div>
            </div>
          </div>

         

        </div>
      </div>

    );
  }
}

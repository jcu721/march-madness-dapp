import {observer} from 'mobx-react';
import React from 'react';

import CreateBracketScreen from './CreateBracketScreen';
import StartScreen from './StartScreen';
import SubmitBracketScreen from './SubmitBracketScreen';


const ErrorDisplay = observer(function ErrorDisplay({application}) {
  if (application.errorMessage) {
    return <div className="alert alert-warning">{application.errorMessage}</div>;
  }
  else {
    return null;
  }
});

@observer
class Application extends React.Component {
  _renderMainComponent() {
    switch (this.props.application.screen) {
    case 'StartScreen':
      return <StartScreen {...this.props}/>;
    case 'CreateBracketScreen':
      return <CreateBracketScreen {...this.props}/>;
    case 'SubmitBracketScreen':
      return <SubmitBracketScreen {...this.props}/>;
    }
  }

  render() {
    return (
      <div className="container">
        <header className="page-header">
          <h1>Ethereum Bracket Challenge</h1>
        </header>
        <ErrorDisplay application={this.props.application}/>
        {this._renderMainComponent()}
      </div>
    );
  }
}

export default Application;
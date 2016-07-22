import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import DatePicker from 'material-ui/DatePicker';
import Auto from './Auto.js';
import Icon from './Icon.js';

class App extends React.Component {
  getChildContext() {
   return {muiTheme: getMuiTheme(darkBaseTheme)};
 }

  render(){

    return(
      <div>
          <RaisedButton label="Default" />
          <AppBar title="sun hao" />
            <DatePicker hintText="Portrait Dialog" />
            <DatePicker hintText="Landscape Dialog" mode="landscape" />
            <DatePicker hintText="Dialog Disabled" disabled={true} />
            <Auto />
            <Icon />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;

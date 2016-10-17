import * as React from 'react'
import * as ReactDom from 'react-dom'
import TopBar from './components/top-bar'
import TopTabs from './components/tab-container'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <TopBar />
      <TopTabs />
    </div>
  </MuiThemeProvider>
);

document.addEventListener('DOMContentLoaded', function () {
    ReactDom.render(<App />, document.getElementById('app'))
});

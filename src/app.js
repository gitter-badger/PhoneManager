import * as React from 'react'
import * as ReactDom from 'react-dom'
import TopBar from './components/top-bar'
import BottomMenu from './components/bottom-menu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Box, Page} from 'react-layout-components'
import AboutPhoneView from './components/about-phone-view'
import DefaultCss from './styles'

const muiTheme = getMuiTheme(
  Object.assign({}, {
    /* Overwrite */
  },
  DefaultCss
));

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Box fit flex column>
      <TopBar />
      <Box flexGrow={1}>
        <AboutPhoneView />
      </Box>
      <BottomMenu />
    </Box>
  </MuiThemeProvider>
);

document.addEventListener('DOMContentLoaded', function () {
    ReactDom.render(<App />, document.getElementById('app'))
});
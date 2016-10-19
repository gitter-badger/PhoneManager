import React from 'react'
import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'
import {Box, Container} from 'react-layout-components'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

const styles = {
  toolbar: {
    backgroundColor: '#87E0E8',
    color: '#FFF',
    height: 55,
    fontFamily: 'roboto, serif',
    fontSize: 14,
    paddingLeft: 0,
    alignItems: 'center',
    paddingLeft: 212
  },
  fontIcon: {
    color: '#FFF',
    fontSize: 26,
  }
};

const TopBar = () => (
    <Toolbar style={styles.toolbar}>
      <Box flex="1 1 0" justifyContent="center">
        <h1 style={styles.title}>Nextbit Robin Phone Manager</h1>
      </Box>
      <Box alignContent="flex-end">
        <FontIcon
          className="material-icons"
          style={styles.fontIcon}
        >
          info_outline
        </FontIcon>
      </Box>
    </Toolbar>
);

export default TopBar

import React from 'react'
import AppBar from 'material-ui/AppBar'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';


const TopBar = () => (
    <Toolbar>
      <ToolbarGroup />
      <ToolbarGroup>
          <RaisedButton label="Sync" primary={true} />
      </ToolbarGroup>
    </Toolbar>
);

export default TopBar

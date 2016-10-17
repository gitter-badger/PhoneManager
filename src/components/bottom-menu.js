import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

const BottomMenu = () => (
  <Paper zDepth={1}>
    <BottomNavigation selectedIndex={0}>
      <BottomNavigationItem
      icon={<FontIcon className="material-icons">phone_android</FontIcon>}
      label="About Robin" />
      <BottomNavigationItem
        icon={<FontIcon className="material-icons">apps</FontIcon>}
        label="Apps"
      />
      <BottomNavigationItem
        icon={<FontIcon className="material-icons">music_note</FontIcon>}
        label="Music"
      />
      <BottomNavigationItem
        icon={<FontIcon className="material-icons">video_library</FontIcon>}
        label="Videos"
      />
      <BottomNavigationItem
        icon={<FontIcon className="material-icons">photo</FontIcon>}
        label="Photos"
      />
    </BottomNavigation>
  </Paper>
);

export default BottomMenu;

import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

const TopTabs = () => (
  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">phonelink_ring</FontIcon>}
      label="About Robin"
    />
    <Tab
      icon={<FontIcon className="material-icons">apps</FontIcon>}
      label="Apps"
    />
    <Tab
      icon={<FontIcon className="material-icons">music_note</FontIcon>}
      label="Music"
    />
  </Tabs>
);

export default TopTabs;

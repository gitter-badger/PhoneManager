import React from 'react'
import {Box, Container} from 'react-layout-components'
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';

const AboutPhoneView = () => (
  <Box flexGrow={1}>
    <Box flex="0 0 256px">
      <Container borderRight="1px solid #eee">
        <List>
          <ListItem primaryText="About Your Robin" leftIcon={<FontIcon className="material-icons">perm_device_information</FontIcon>} />
          <ListItem primaryText="Storage" leftIcon={<FontIcon className="material-icons">sd_storage</FontIcon>} />
          <ListItem primaryText="System Updates" leftIcon={<FontIcon className="material-icons">system_update</FontIcon>} />
          <ListItem primaryText="Factory Reset" leftIcon={<FontIcon className="material-icons">autorenew</FontIcon>} />
        </List>
      </Container>
    </Box>
    <Box flexGrow={1}></Box>
  </Box>
)

export default AboutPhoneView

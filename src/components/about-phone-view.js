import React from 'react'
import {Box, Container} from 'react-layout-components'
import {List, ListItem} from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import DefaultCss from './../styles'

const styles = {
  boxContainer: {
    position: 'relative',
  },
  blur: {
    background: 'url("./images/wallpaper.jpg") no-repeat 0 35%',
    width: '100%',
    height: '100%',
    filter: 'blur(2px)',
    position: 'absolute',
    overflow: 'hidden',
  },
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  listItem: {
    marginTop: 25,
    backgroundColor: '#FFF',
    borderRadius: 4,
    boxShadow: ('0px 2px 15px 0px ' + DefaultCss.palette.shadow),
  },
  listItemInnerDiv: {
    padding: '16px 16px 16px 55px',
  },
  community: {
    bottom: 25,
    width: '100%',
    justifyContent: 'center',
  }
};

const AboutPhoneView = () => (
  <Box flexGrow={1}>
    <Box flex="0 0 20%" style={styles.boxContainer}>
      <div style={styles.blur}></div>
      <Container style={styles.container}>
        <List>
          <ListItem style={styles.listItem} innerDivStyle={styles.listItemInnerDiv} primaryText="Backup" leftIcon={<FontIcon color={DefaultCss.palette.primary} className="material-icons">perm_device_information</FontIcon>} />
          <ListItem style={styles.listItem} innerDivStyle={styles.listItemInnerDiv} primaryText="Sync" leftIcon={<FontIcon color={DefaultCss.palette.primary} className="material-icons">autorenew</FontIcon>} />
          <ListItem style={styles.listItem} innerDivStyle={styles.listItemInnerDiv} primaryText="Updates" leftIcon={<FontIcon color={DefaultCss.palette.primary} className="material-icons">system_update</FontIcon>} />
          <ListItem style={styles.listItem} innerDivStyle={styles.listItemInnerDiv} primaryText="Factory Reset" leftIcon={<FontIcon color={DefaultCss.palette.primary} className="material-icons">sd_storage</FontIcon>} />
        </List>
      </Container>
      <Container absolute style={styles.community}>
        <List>
          <ListItem style={styles.listItem} innerDivStyle={styles.listItemInnerDiv} primaryText="Community" leftIcon={<FontIcon color={DefaultCss.palette.primary} className="material-icons">group</FontIcon>} />
        </List>
      </Container>
    </Box>
    <Box flexGrow={1}></Box>
  </Box>
)

export default AboutPhoneView

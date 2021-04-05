import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useEffect} from 'react'
import { useHistory } from 'react-router';

//Mapping the Drawer Links to the actual route names i.e pm1
const CURRENT_LINK_MAP = {
  'Feed':'/slambook/home',
  'Login':'/slambook/login',
  'Register':'/slambook/register',
  'Dashboard':'/slambook/dash/default',
  
  'Home':'/slambook/home',
  'My Blogs':'/slambook/dash/default',
  'Create Blogs':'/slambook/dash/add',
  'Settings':'/slambook/dash/settings',
  'Logout':'/slambook/home',
}








const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  activeLink:{
    backgroundColor:"#61eb85",
    paddingLeft:"10%",
    height:"35px",
    paddingTop:"2%"
  }
});

export default function CustomDrawer({drawerState,setDrawerState,LIST_OF_LINKS,currentLink,setCurrentLink}) {
  const classes = useStyles();
  const [leftSide, setLeftSide] = React.useState(0)

  const history = useHistory()

  useEffect(() => {
    setLeftSide(setLeftSide^1);
  }, [drawerState])

  const toggleDrawer = (state) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState(drawerState^1);                    //This function is inherited from Resume comp, it changes the openDrawer state var in Resume Comp on every click when this drawer is open.
    setLeftSide(state);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {
          LIST_OF_LINKS
        .map((text, index) => (
          
          text===currentLink
          ?
          (<ListItem button key={text} onClick={()=>{setCurrentLink(text);history.push(CURRENT_LINK_MAP[text])}} class={classes.activeLink}>
            <ListItemText primary={text} />
          </ListItem>)
          :
          (<ListItem button key={text} onClick={()=>{setCurrentLink(text);history.push(CURRENT_LINK_MAP[text])}} >
            <ListItemText primary={text} />
          </ListItem>)
          
          ))

        }
      </List>
    </div>
  );

  const anchor="left";
  return (
    <div>
      {
          <SwipeableDrawer
            anchor="left"
            open={leftSide}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
      }
    </div>
  );
}

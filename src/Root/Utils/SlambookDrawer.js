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

export default function SlambookDrawer({openDrawer,OpenDrawer,CurrentTopic,currentTopic}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open:false
  });

  useEffect(() => {
    setState({ ...state, open: openDrawer });
  }, [openDrawer])

  const toggleDrawer = (cmd) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    OpenDrawer();                    //This function is inherited from Resume comp, it changes the openDrawer state var in Resume Comp on every click when this drawer is open.
    setState({ ...state, open: cmd });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          'WorkExperience',
          'Skills',
          'Projects',
          'Position of Responsibility',
          'Education',
          'Certificates/Papers'
        ]
        .map((text, index) => (
          
          currentTopic==="biodata-"+index
          ?
          (<ListItem button key={text} onClick={()=>{CurrentTopic('biodata-'+index)}} class={classes.activeLink}>
            <ListItemText primary={text} />
          </ListItem>)
          :
          (<ListItem button key={text} onClick={()=>{CurrentTopic('biodata-'+index)}} >
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
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
      }
    </div>
  );
}

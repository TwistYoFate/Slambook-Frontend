import { AppBar, IconButton, makeStyles, Typography } from '@material-ui/core'
import  ToolBar  from '@material-ui/core/Toolbar'
import  {Grid,Button}  from '@material-ui/core'
import React, { useEffect } from 'react'
import {Link, Redirect, useHistory} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../Redux/Actions/Actions'

const useStyles = makeStyles({
  AppBar:{
    backgroundColor:"#61eb85",
  },
  Links:{
    textDecoration:0,
    color:"white"
  },
  center:{
    alignContent:"center",
  },
})

function Navbar_Dash() {

  
  const [redirectToHome, setRedirectToHome] = React.useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  

  function handleLogout(e){
    e.preventDefault();
    localStorage.clear();
    // setRedirectToHome(true);
    dispatch({type:Actions.UserActions.LOGOUT_USER})
    history.replace('/slambook/home')
  }


  const classes = useStyles()
    return (
      <AppBar className={classes.AppBar}>
        <ToolBar>
          <Grid container direction="row">

          <Grid item xs={6} md={6}>
            <Typography>
              <h2>Slambook</h2>
            </Typography>
          </Grid>

          <Grid item container xs={6} md={6}>
               <Grid container spacing={1} className={classes.center} >
                  <Grid item>
                  <Link to="/slambook/home" className={classes.Links}><Button>Home</Button></Link>
                  </Grid>
                  <Grid item>
                  <Link to="/slambook/dash/default" className={classes.Links}><Button>My Blogs</Button></Link>
                  </Grid>
                  <Grid item>
                  <Link to="/slambook/dash/add" className={classes.Links}><Button>Create Blog</Button></Link>
                  </Grid>
                  <Grid item>
                  <Link to="/slambook/dash/settings" className={classes.Links}><Button>Settings</Button></Link>            
                  </Grid>
                  <Grid item>
                  <Link to="/slambook/home" className={classes.Links}><Button onClick={(e)=>{handleLogout(e)}}>Logout</Button></Link>            
                  </Grid>
              </Grid>
          </Grid>
              
          </Grid>
        
              <div>
                {
                  // redirectToHome?<Redirect to="/slambook/home" />:null
                }
              </div>

        </ToolBar>
      </AppBar>
    )
}

export default Navbar_Dash


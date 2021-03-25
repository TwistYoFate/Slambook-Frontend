import { AppBar, IconButton, makeStyles, Typography } from '@material-ui/core'
import  ToolBar  from '@material-ui/core/Toolbar'
import  {Grid}  from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  AppBar:{
    backgroundColor:"#61eb85",
  },
  Links:{
    textDecoration:0,
  },
  LinkItems:{
    alignContent:"center",
  },
})

function Navbar_Home() {
  const classes = useStyles()
    return (
      <AppBar className={classes.AppBar}>
        <ToolBar>
          <Grid container direction="row">

          <Grid item xs={4} md={4}>
            <Typography>
              <h2>Slambook</h2>
            </Typography>
          </Grid>

          <Grid item container xs={6} md={6}>
               <Grid container spacing={4} className={classes.LinkItems} >
                  <Grid item>
                  <Link to="/slambook/home" className={classes.Links}>Feed</Link>
                  </Grid>
                  <Grid item>
                  <Link to="/slambook/login" className={classes.Links}>Login</Link>
                  </Grid>
                  <Grid item>
                  <Link to="/slambook/register" className={classes.Links}>Register</Link>            
                  </Grid>
              </Grid>
          </Grid>
              
          </Grid>
        
              

        </ToolBar>
      </AppBar>
    )
}

export default Navbar_Home


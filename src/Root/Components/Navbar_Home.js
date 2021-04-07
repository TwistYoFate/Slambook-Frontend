import { AppBar, Button, IconButton, makeStyles, Typography } from '@material-ui/core'
import  ToolBar  from '@material-ui/core/Toolbar'
import  {Grid}  from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import { useSelector } from 'react-redux'

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
  title:{
    fontFamily: 'Permanent Marker, cursive',
    // fontSize:"20px"
    color:"black"
  }
})

function Navbar_Home({currentLink, setCurrentLink}) {
  const {user} = useSelector(state => state.user)
  const [isTokenThere, setIsTokenThere] = useState(false)
  useEffect(() => {
    setIsTokenThere(localStorage.getItem("token"));
  })

  const classes = useStyles()
    return (
      <AppBar className={classes.AppBar}>
        <ToolBar>
          <Grid container direction="row">

          <Grid item xs={6} md={6}>
            <Typography>
              <h2 className={classes.title}>Slambook</h2>
            </Typography>
          </Grid>

          <Grid item container xs={6} md={6}>
               <Grid container spacing={1} className={classes.LinkItems} >
                  <Grid item>
                    {
                      currentLink==="Feed"?
                      <Link to="/slambook/home" className={classes.Links}><Button style={{backgroundColor:"white"}}>Feed</Button></Link>
                      :
                      <Link to="/slambook/home" onClick={()=>setCurrentLink("Feed")} className={classes.Links}><Button>Feed</Button></Link>
                    }
                  </Grid>
                  {
                    !user?
                    <>
                    <Grid item>
                      {
                        currentLink==="Login"?
                        <Link to="/slambook/login" className={classes.Links} ><Button style={{backgroundColor:"white"}}>Login</Button></Link>
                        :
                        <Link to="/slambook/login" onClick={()=>setCurrentLink("Login")} className={classes.Links}><Button>Login</Button></Link>
                      }
                    </Grid>
                    <Grid item>
                      {
                        currentLink==="Register"?
                        <Link to="/slambook/register" className={classes.Links}><Button style={{backgroundColor:"white"}}>Register</Button></Link>           
                        : 
                        <Link to="/slambook/register" onClick={()=>setCurrentLink("Register")} className={classes.Links}><Button>Register</Button></Link>            
                      }
                    </Grid>
                    </>
                    :
                    null  
                  }
                  
                  <Grid item>
                    {
                      isTokenThere?<Link to="/slambook/dash/default" className={classes.Links}><Button>Dashboard</Button></Link>:null            
                    }
                  </Grid>
              </Grid>
          </Grid>
              
          </Grid>
        
              

        </ToolBar>
      </AppBar>
    )
}

export default Navbar_Home


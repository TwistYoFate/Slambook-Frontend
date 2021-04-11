import {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import {Grid, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
  AppBar:{
    backgroundColor:"#61eb85",
  },
  contact:{
    color:"#213A7F",
    textDecoration:0,
    paddingTop:"1%",
    fontFamily:"roboto"
  },
  linkedin:{
    color:"#213A7F",
    textDecoration:0,
  }

})





function Navbar_Resume({OpenDrawer}) {
  const classes = useStyles()
    return (
      <AppBar className={classes.AppBar}>
        <ToolBar>
          <Grid container >

          <Grid item xs={1}>
          <IconButton onClick={()=>{OpenDrawer()}}>
            <MenuIcon xs={1} sm={0} />
          </IconButton>
          </Grid>
          
          <Grid md={7}/>

          <Grid item md={4} className={classes.contact}>
            daybond007@gmail.com &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/deepanshu-yadav-b89311128/" className={classes.linkedin}>LinkedIn</a>
          </Grid>

          </Grid>
          

        </ToolBar>
      </AppBar>
    )
}

export default Navbar_Resume

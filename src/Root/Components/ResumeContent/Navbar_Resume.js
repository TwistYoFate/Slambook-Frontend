import {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
  AppBar:{
    backgroundColor:"#61eb85",
  }
})





function Navbar_Resume({OpenDrawer}) {
  const classes = useStyles()
    return (
      <AppBar className={classes.AppBar}>
        <ToolBar>
          <IconButton onClick={()=>{OpenDrawer()}}>
            <MenuIcon xs={1} sm={0} />
          </IconButton>
          <Typography>
            
          </Typography>

        </ToolBar>
      </AppBar>
    )
}

export default Navbar_Resume

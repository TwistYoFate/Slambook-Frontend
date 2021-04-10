import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import AddBlog from '../Components/AddBlog'
import MyBlogs from '../Components/MyBlogs'
import {AppBar, Grid, Hidden, Toolbar, Typography} from '@material-ui/core'
import Navbar_Dash from '../Components/Navbar_Dash'
import { useDispatch, useSelector } from 'react-redux'
import Unauthorized from '../Components/Unauthorized'
import Actions from '../Redux/Actions/Actions'
import Settings from '../Components/Settings'


//Hamburger
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CusDrawer from '../Utils/CusDrawer'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles({
    AppBar:{
        backgroundColor:"#61eb85",
    },
    IconButton:{
        backgroundColor:"#61eb85",
        position:"fixed",
        top:15,
        left:50,
        zIndex:10000,
    },
    MenuIcon:{
        color:"black",
        backgroundColor:"#61eb85",
    },
    header:{
        color:"#61eb85",
        positin:"fixed",
        top:0,
        left:50
    },
    title:{
        fontFamily: 'Permanent Marker, cursive',
        // fontSize:"20px"
        color:"black"
      }
})

//Array of Links for Drawer
const LIST_OF_LINKS=[
    'Home',
    'My Blogs',
    'Create Blog',
    'Settings',
    'Logout',
]



function Dash() {
    const classes = useStyles()
    const {pm1} = useParams()
    // const {user,blogs,isTokenThere,setIsTokenThere} = props;
    const {user} = useSelector(state => state.user)
    // const [loggedIn, setLoggedIn] = useState(false)

    // States
    const [drawerState, setDrawerState] = React.useState(0)
    const [currentLink, setCurrentLink] = React.useState("My Blogs")


    const dispatch = useDispatch()

    const history = useHistory()
    return (

        
        <div className="dash">
        {
                !drawerState && user?
                <Hidden smUp>
                <h2 className={classes.header}>{currentLink}</h2>
                <IconButton onClick={()=>{setDrawerState(drawerState^1)}} className={classes.IconButton}>
                    <MenuIcon className={classes.MenuIcon} xs={1} sm={0} />
                </IconButton>
                </Hidden>
                :
                <CusDrawer drawerState={drawerState} setDrawerState={setDrawerState} LIST_OF_LINKS={LIST_OF_LINKS} currentLink={currentLink} setCurrentLink={setCurrentLink} />
        }
        {    
                user?<Grid container direction="column" spacing={10}>
                <Grid item>
                    <Hidden smDown>
                        <Navbar_Dash currentLink={currentLink} setCurrentLink={setCurrentLink} />
                    </Hidden>
                    <Hidden smUp>
                        <AppBar className={classes.AppBar}>
                            <Toolbar>
                            <Grid item xs={12}>
                                <Typography>
                                    <h2 className={classes.title}>Slambook</h2>
                                </Typography>
                            </Grid>
                            </Toolbar>
                        </AppBar>
                    </Hidden>
                </Grid>

                <Grid item container direction="row" >
                    
                    <Grid item xs={0} md={2} />

                    <Grid item xs={12} md={8}>
                    {
                        
                        {
                             default:<MyBlogs user={user}/>,
                             add:<AddBlog user={user} />,
                             settings:<Settings user={user} />
                        }[pm1]
                        
                        
                    }
                    </Grid>

                    <Grid item xs={0} md={2} />

                </Grid>
            </Grid>
            :
                        <Unauthorized />
        }
        </div>
    )
}

export default Dash

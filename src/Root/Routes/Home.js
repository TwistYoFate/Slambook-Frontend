import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar_Home from '../Components/Navbar_Home'
import Register from '../Components/Register'
import Login from '../Components/Login'
import AllBlogs from '../Components/AllBlogs'
import BlogDetail from '../Components/BlogDetail'
import { AppBar, Grid, Hidden, Toolbar, Typography} from '@material-ui/core'
import { useSelector } from 'react-redux'
import ResetPassword from '../Components/ResetPassword'
import Hamburger from '../Utils/Hamburger'


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
        bottom:5,
        right:5,
        zIndex:1,
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
    'Feed',
    'Login',
    'Register',
    'Dashboard'
]

function Home() {
    const classes = useStyles()
    const {pm1} = useParams()
    
    // States
    const [drawerState, setDrawerState] = React.useState(0)
    const [currentLink, setCurrentLink] = React.useState("Feed")

    


    const user = useSelector(state => state.user)
    return (
        <div className="home">
            {
            !drawerState?
            <Hidden smUp>
            <h2 className={classes.header}>{currentLink}</h2>
            <IconButton onClick={()=>{setDrawerState(drawerState^1)}} className={classes.IconButton}>
                <MenuIcon xs={1} sm={0} className={classes.MenuIcon}/>
            </IconButton>
            </Hidden>
            :
            <CusDrawer drawerState={drawerState} setDrawerState={setDrawerState} LIST_OF_LINKS={LIST_OF_LINKS} currentLink={currentLink} setCurrentLink={setCurrentLink} />
            }
            <Grid container direction="column" spacing={10}>
                <Grid item>
                    <Hidden smDown>
                        <Navbar_Home currentLink={currentLink} setCurrentLink={setCurrentLink}/>
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
                            home:<AllBlogs />,
                            login:<Login />,
                            register:<Register />,
                            blogdetail:<BlogDetail />,
                            reset:<ResetPassword />
                        }[pm1]
                    }
                    </Grid>

                    <Grid item xs={0} md={2} />

                </Grid>
            </Grid>
            
        </div>
    )
}

export default Home


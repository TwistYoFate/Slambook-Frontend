import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    footer:{
       position:"fixed",
       top:"93vh",
       height:"30px",
    },
    div:{
        position:"relative",
        height:"100%",
        top:"15%",
    },
    name:{
        color:"#61eb85",
        fontFamily: 'Permanent Marker, cursive',
        textDecoration:0,
    },
    name_hover:{
        color:"white",
        fontFamily: 'Permanent Marker, cursive',
        textDecoration:0,
    }
})
function Footer() {
    const classes = useStyles()
    return (
        <div>
            <AppBar className={classes.footer}>
                <div className={classes.div}>
                    This website is solely developed by &nbsp; 
                    <Link to="/" className={classes.name} 
                    onMouseEnter={(event)=>{event.target.className=classes.name_hover}}
                    onMouseLeave={(event)=>{event.target.className=classes.name}}
                    >
                        Deepanshu Yadav
                    </Link>
                </div>
                    
            </AppBar>
        </div>
    )
}

export default Footer

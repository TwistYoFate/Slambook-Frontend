import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    WorkExperience:{
      paddingTop:"10%"
    },
    title:{
        color:"#61eb85"
    },
    noDecor:{
        textDecoration:0,
        color:"black"
    },
    noDecor_hover:{
        textDecoration:0,
        color:"blue"
    }  
})

function Projects() {
    const classes = useStyles()
    return (
        <Grid container>
        <Grid item xs={0} sm={1}/>
        <Grid item container xs={12} sm={8} spacing={3} direction="column" className={classes.WorkExperience}>
            <Grid item container>
                <Typography variant="h4" className={classes.title}>
                Projects
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <Typography variant="h5" align="left">
                    <Link to="/slambook/home" className={classes.noDecor} 
                    onMouseEnter={(event)=>{event.target.className=classes.noDecor}}
                    onMouseLeave={(event)=>{event.target.className=classes.noDecor_hover}}
                    >• Slambook - MERN Stack based Blogging Webapp</Link><br/><br/>
                </Typography>
                <div style={{textAlign:"left"}}>
                <p>It is a portfolio-cum-blogging-app which I solely created to learn&nbsp;fullstack development and actually understand how things work. Things that I learned and used in this project are :
    <br /><br />
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; <strong>Frontend :</strong> React, Redux and Redux-Saga
    <br />
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull;&nbsp;<strong>Backend&nbsp;:</strong> Express/Node.js,&nbsp;Bcrypt(Hashing), Mongoose(ODM), Nodemailer(Mailing)
    <br />
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; <strong>Database :&nbsp;</strong>MongoDB Atlas Cloud
    <br />
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull;<strong> Authorization :</strong> Json Web Tokens (JWT)
    <br />
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; <strong>VersionControl : </strong>Git
    <br />
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; <strong>Deployment :</strong> AWS EC2
  </p>
                </div>
            </Grid>
        </Grid> 
        <Grid item xs={0} sm={3}/>
    </Grid>
    )
}

export default Projects

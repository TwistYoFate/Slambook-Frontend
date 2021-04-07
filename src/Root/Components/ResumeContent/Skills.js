import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles({
    skills:{
      paddingTop:"10%"
    },
    title:{
        color:"#61eb85"
    }    
})


function Skills() {
    
    const classes = useStyles()

    return (

        <Grid container>
        <Grid item xs={0} sm={1}/>
        <Grid item container xs={12} sm={8} spacing={3} direction="column" className={classes.skills}>
            <Grid item container>
                <Typography variant="h4" className={classes.title}>
                    Skills
                </Typography>
            </Grid>
            <Grid item container>
                <div style={{textAlign:"left"}}>
                <p>&bull; <strong>Languages&nbsp; :&nbsp;&nbsp;</strong>Python, Javascript, C/C++
</p>
<p>&bull;<strong> Front&nbsp;End&nbsp; :&nbsp;&nbsp;</strong>HTML5,&nbsp;CSS3,&nbsp;Material-UI,&nbsp;React&nbsp;with&nbsp;Redux&nbsp;&amp; Redux-SAGA
</p>
<p>&bull; <strong>Back End&nbsp; :&nbsp;&nbsp;</strong>Express/Node.js , Nodemailer, Tinymce-react
</p>
<p>&bull; <strong>Database&nbsp; :&nbsp;&nbsp;</strong>MongoDB, MongoDB Atlas
</p>
<p>&bull; <strong>Designing&nbsp; :&nbsp;&nbsp;</strong>Adobe&nbsp;Photoshop,&nbsp;Adobe&nbsp;Illustrator
</p>
<p>&bull; <strong>Others&nbsp; :&nbsp; </strong>Jira, VMware ESXI 5.5
</p>

                </div>
            </Grid>
        </Grid> 
        <Grid item xs={0} sm={3}/>
    </Grid>

//     {
//         •Languages :	Python,Javascript,C/C++
// •Front End   :	HTML5, CSS3, Material-UI, React with Redux & SAGA
// •Virtualization   :  VMWare ESXI 5.5
// •Designing :  Adobe Photoshop, Adobe Illustrator

//     }

    )
}

export default Skills

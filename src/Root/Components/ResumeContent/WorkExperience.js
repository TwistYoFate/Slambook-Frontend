import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles({
    WorkExperience:{
      paddingTop:"5%"
    },
    title:{
        color:"#61eb85"
    }  
})


function WorkExperience() {
    
    const classes = useStyles()

    return (

        <Grid container>
        <Grid item xs={0} sm={1}/>
        <Grid item container xs={12} sm={8} spacing={3} direction="column" className={classes.WorkExperience}>
            <Grid item container>
                <Typography variant="h4" className={classes.title}>
                Work Experience
                </Typography>
            </Grid>
            <Grid item container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" align="left">
                    NEC Corporation (Nov-2020 - Current)                   
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography align="left">
                    In NEC I have learned a lot about a vast variety of latest and rare technologies like,
                    Networking, Virtualization,Virtual Machines, Hypervisors, Cloud, Containers, Data Center, 
                    Telecommunication.
                    </Typography>
                </Grid>
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

export default WorkExperience

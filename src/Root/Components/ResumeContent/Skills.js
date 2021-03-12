import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles({
    skills:{
      paddingTop:"20%"
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
                <Grid item sm={4} xs={12}>
                    <Typography align="left">
                    Languages                    
                    </Typography>
                </Grid>
                <Grid item sm={8} xs={12} >
                    <Typography align="left">
                    Python, Javascript, C/C++                    
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container>
                <Grid item sm={4} xs={12}>
                    <Typography align="left">
                    Front End                     
                    </Typography>
                </Grid>
                <Grid item sm={8} xs={12}>
                    <Typography align="left">
                    HTML5, CSS3, Material-UI, React with Redux & SAGA                    
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container>
                <Grid item sm={4} xs={12}>
                    <Typography align="left">
                    Designing                    
                    </Typography>
                </Grid>
                <Grid item sm={8} xs={12}>
                    <Typography align="left">
                    Adobe Photoshop, Adobe Illustrator, Figma                    
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

export default Skills

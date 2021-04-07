import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    WorkExperience:{
      paddingTop:"10%"
    },
    title:{
        color:"#61eb85"
    }  
})


function POR() {
    const classes = useStyles()
    return (
        <Grid container>
        <Grid item xs={0} sm={1}/>
        <Grid item container xs={12} sm={8} spacing={3} direction="column" className={classes.WorkExperience}>
            <Grid item container>
                <Typography variant="h4" className={classes.title}>
                Positions of Responsibility
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <Typography align="left">
                •Manager Graphics Design in GENERO2K19 (College Fest)<br/><br/>
                •Organised <span style={{color:"red"}}>TEDxABESEC-2019</span> as Production Head and Designer
                </Typography>
            </Grid>
        </Grid> 
        <Grid item xs={0} sm={3}/>
    </Grid>
    )
}

export default POR

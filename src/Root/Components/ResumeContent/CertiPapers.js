import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles({
    CertiPapers:{
      paddingTop:"5%"
    },
    certi:{
        height:"30%",
        width:"50%"
    },
    title:{
        color:"#61eb85"
    }    
})


function CertiPapers() {
    
    const classes = useStyles()

    return (

        <Grid container>
        <Grid item xs={0} sm={1}/>
        <Grid item container xs={12} sm={10} spacing={3} direction="column" className={classes.CertiPapers}>
            <Grid item container>
                <Typography variant="h4" className={classes.title}>
                Certificates/Papers
                </Typography>
            </Grid>
            <Grid item container>
                {/* <Grid item xs={12}>
                    <Typography variant="h5" align="left">
                    Codechef                    
                    </Typography>
                </Grid> */}
                <Grid item xs={12} >
                    <Paper elevation={3} variant="outlined">
                        <img src="./codechef-certi-1.png" height="50%" width="100%"/>
                    </Paper>
                </Grid>
            </Grid>

        </Grid> 
        <Grid item xs={0} sm={1}/>
    </Grid>

//     {
//         •Languages :	Python,Javascript,C/C++
// •Front End   :	HTML5, CSS3, Material-UI, React with Redux & SAGA
// •Virtualization   :  VMWare ESXI 5.5
// •Designing :  Adobe Photoshop, Adobe Illustrator

//     }

    )
}

export default CertiPapers

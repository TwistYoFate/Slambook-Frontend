import React from 'react'
import Typography from '@material-ui/core/Typography'
import Tables, { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    education:{
      paddingTop:"20%"
    },
    title:{
        color:"#61eb85"
    }    
})



function Education() {

    const classes = useStyles()
    
    return (
        <Grid container>
            <Grid item xs={0} sm={1}/>
            <Grid item container xs={12} sm={8} spacing={3} direction="column" className={classes.education}>
                <Grid item container>
                    <Typography variant="h4" className={classes.title}>
                     Education
                    </Typography>
                </Grid>
                <Grid item container>
                    <Grid item sm={8} xs={12}>
                        <Typography align="left">
                            B.Tech in Computer Science and Engineering from ABES Engineering College(AKTU)
                        </Typography>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Typography align="right">
                            80.6%
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item sm={8} xs={12}>
                        <Typography align="left">
                            High School Certification from The Avadh School(CBSE)                        
                        </Typography>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Typography align="right">
                            80%
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item sm={8} xs={12}>
                        <Typography align="left">
                            Senior Secondary Certification from DALIMSS(CBSE)                        
                        </Typography>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Typography align="right">
                            95%
                        </Typography>
                    </Grid>
                </Grid>
            </Grid> 
            <Grid item xs={0} sm={3}/>
        </Grid>

        // <div className="education" style={{padding:"15%",textAlign:"left"}}>
        //     <Typography>
        //         <h1>Education</h1>
        //     </Typography>
            
        //     <p>
        //     B.Tech in Computer Science and Engineering from ABES Engineering College(AKTU)&nbsp;&nbsp;80.8%<br/>
        //     High School Certification from The Avadh School(CBSE)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;80%<br/>
        //     Senior Secondary Certification from DALIMSS(CBSE)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;95%
        //     </p>
            
        // </div>
    )
}

export default Education

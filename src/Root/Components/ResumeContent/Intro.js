import React from 'react'
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useState } from 'react'

const useStyles = makeStyles({
    intro:{
        backgroundColor:"#213a7f", //#213a7f #25252e
        height:"100vh",
    },
    leftIntro:{ 
        height:"100vh",
        color:"white"
    },
    rightIntro:{
        backgroundImage:'url("introback.jpg")',
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"right",
        height:"100%",
        color:"white",
        transparent:"30%"
    }
})

function Intro() {
    const classes = useStyles()
    return (
            <Grid container xs={12} className={classes.intro} spacing={3}>
                <Grid item sm={7} className={classes.leftIntro}>
                    <LeftIntro />
                </Grid>
                <Grid item sm={5}>
                    <Box variant="div" className={classes.rightIntro}>
                    </Box>
                </Grid>
            </Grid>
    )
}

export default Intro
//Scroll down for more







function LeftIntro(){

    //This will give animation to the "Hello World"
    const [counter,setCounter] = useState(0)            // Counter state to count the current index to color
    
    setTimeout(() => {                                  //timeout will wait for 1 sec at every render and then increase the counter 
        setCounter((counter+1)%5)
    }, 1000);
    
    const greet = [{id:0,char:'H'},{id:1,char:'e'},{id:2,char:'l'},{id:3,char:'l'},{id:4,char:'o'}]  //This is the array of Hello character objects
    
    return(
        <Grid container style={{ height:"100%", paddingTop:"10%"}}>
            <Grid item xs={2}/>
            <Grid item xs={8}>
            <Typography variant="h2">
            {
                greet.map(letter=>{
                    if(letter.id===counter)
                    return(
                        <span key={letter.id} style={{color:"#61EB85"}}>
                            {letter.char}
                        </span>
                        
                    )
                    else
                    return(
                        <span key={letter.id} style={{color:"white"}}>
                            {letter.char}
                        </span>
                    )
                })
            }
            </Typography>
            <Typography variant="body2" display="block" align="left" >
            Do you want to work with someone who you could trust ? Someone who gives his all when doing something he likes ?
            Well, you've come to the right page.
            <br/> 
            <br/>
            I'm <span style={{color:"#61EB85", fontSize:"20px", fontFamily:"Rock Salt, cursive"}}>Deepanshu Yadav.</span>
            <br/>
            <br/>
            Out of many things that I love doing Solving Problems, Coding and Playing Chess are among the latest.
            What I believe from my experience, and inputs from my peers is that I am good both Creatively and Technically.
            So if you want to work with me, do check out my resume below.
            </Typography>
            </Grid>
            <Grid item xs={2}/>
        </Grid>
    )
}
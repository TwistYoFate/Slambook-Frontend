import { Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import Actions from '../Redux/Actions/Actions'
import { CustomButton, CustomTextField } from '../Utils/CustomUI'
import Loader from '../Utils/Loader'
import test from '../Utils/Test'
import {makeStyles} from '@material-ui/styles'


//npm install html-react-parser --save
import ReactHTMLParser from 'react-html-parser';

const useStyles = makeStyles({
    
    author : {backgroundColor:"#61eb85",
    color:"black",
    paddingLeft:"10px",
    paddingTop:"2px",
    paddingBottom:"2px",
    borderTopRightRadius:"20px"
    }
})

function BlogDetail(props) {
    const classes = useStyles()
    const [redirectToDash,setRedirectToDash] = useState(false)
    const {blog} = useHistory().location.state
    const {user} = useSelector(state=>state.user)
    const [token, setToken] = useState(null)
    React.useEffect(() => {
        setToken(localStorage.getItem('token'));
    })
    const dispatch = useDispatch()
    const onClickHandle=(e)=>{
        e.preventDefault()
        // test(user.username)
        // test(blog.username)
        if(user.username===blog.username){
            dispatch({type:Actions.BlogActions.DELETE_BLOG_FROM_DB,payload:{id:blog._id}})
            setRedirectToDash(true);   
        }
        
    }
    console.log(blog)
    return (
        <div className="blogdetail">
            <Typography variant="h3" align="left">
            {blog.title}    
            </Typography>
            {/* <hr color="#61eb85" /> */}
            <Grid container direction="row">
                <Grid item xs={12} className={classes.author}>
                <Typography variant="subtitle1" align="left">
                    By {blog.author}    
                </Typography>
                </Grid>

                {/* <Grid item xs={12} md={6}>
                <Typography variant="h6" align="right">
                    {blog.timestamp}    
                </Typography>
                </Grid> */}
            </Grid>
            <br />
            {/* <Typography variant="body1" align="left"> */}
            {ReactHTMLParser(blog.body)}
            {/* </Typography> */}
            {/* <CustomTextField
                // id="outlined-multiline-static"
                multiline
                InputProps={{
                    readOnly: true,
                }}
                rows={50}
                defaultValue={blog.body}
                variant="outlined"
                  // type="textarea"
                  id="body"
                  required
                  fullWidth="true"
                  // placeholder="Body"
            /> */}
            <br /> <br /> 
            {
                user&&token?<CustomButton onClick={(e)=>{onClickHandle(e)}}>Delete</CustomButton>:null
                
            }
            {
                redirectToDash?<Loader url="/slambook/home" />:null
            }
        </div>
    )
}

export default BlogDetail

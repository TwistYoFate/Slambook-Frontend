import { Grid } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Actions from '../Redux/Actions/Actions'
import MediaCard from '../Utils/MediaCard'

function MyBlogs({user}) {
    const {blogs} = useSelector(state => state.blogs)
    // const {user} = useSelector(state => state.user)
    const [myBlogs,setMyBlogs] = React.useState()
    // const history = useHistory();
    
    const dispatch = useDispatch()
    React.useEffect(() => {
        setMyBlogs(blogs?.filter(blog=>blog.username===user.username))
        let token = localStorage.getItem("token");
        if(token && !(user)){
            dispatch({type:Actions.UserActions.RELOGIN_USER_USING_TOKEN})
        }
        if(!blogs)
            dispatch({type:Actions.BlogActions.GET_ALL_BLOGS_FROM_DB})
    }, [])
    
    console.log(myBlogs)
    return (
        <Grid container direction="row" spacing={2}>
            {
                myBlogs?.map(blog=>{
                    return(
                        <Grid item className="preview" key={blog._id}>
                            <MediaCard blog={blog} allowDelete={true} user={user} />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default MyBlogs

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector,useDispatch } from 'react-redux';
import Actions from '../Redux/Actions/Actions';
import SvgIcon from '@material-ui/core/SvgIcon'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'

import ReactHTMLParser from 'react-html-parser'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({blog,allowDelete}) {
  const {user} = useSelector(state => state.user)
  const classes = useStyles();
  const [clickedLike, setClickedLike] = useState(0)
  const dispatch = useDispatch()

  function handleLikeUnlike(e){
      e.preventDefault();
      setClickedLike(clickedLike^1);
      // console.log("card id ,",blog)
      dispatch({type:Actions.BlogActions.SAVE_LIKE_TO_DB,payload:{id:blog._id}})
  }

  //side effect
  // useEffect(() => {
  // }, [clickedLike])
  
  return (
    <Card className={classes.root}>
      <Link to={{
          pathname:"/slambook/blogdetail",
          state:{blog:blog}}}
          style={{textDecoration:0}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={blog?.image?blog?.image:null}
          title={blog?.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {blog?.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {ReactHTMLParser(blog?.body.substring(0,50)+"...")}
          </Typography>
        </CardContent>
      </CardActionArea>
        </Link>

      <CardActions>
       
        <IconButton onClick={(e)=>{handleLikeUnlike(e)}}>
        {
          blog.likes.likedBy[user?.username]?<FavoriteIcon color="error" />:<FavoriteIcon />
        }
        </IconButton>
        {/* <Button size="small" color="primary" >
          Like
        </Button> */}
        <Button size="small" color="primary">
          {blog?.likes.total}
        </Button>
      </CardActions>
    </Card>
  );
}
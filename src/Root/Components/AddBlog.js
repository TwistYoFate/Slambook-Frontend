import React from 'react'
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Redirect } from 'react-router';
import Actions from '../Redux/Actions/Actions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { CustomButton, CustomTextField  } from '../Utils/CustomUI';

//tinyMCE - text editor
import { Editor } from '@tinymce/tinymce-react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


function AddBlog({user}) {
  const classes = useStyles()
//   const [username, setUsername] = useState();
//   const [author, setAuthor] = useState();
  const [redirectToDash, setRedirectToDash] = useState(false);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
//   const [likes,setLikes] = useState();
  const [myUser,setMyUser] = useState(false);
    
  const dispatch = useDispatch();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    setMyUser({
    //   username: user.username,
      author: `${user.firstName} ${user.lastName}`,
      title:title,
      body:body,
      likes:{
          total:0,
          likedBy:{}
      }
    });
    setRedirectToDash(true);
  };

  const handleChangeBody = (content,editor) => {
    
    setBody(content)
  }

  useEffect(() => {
    if(myUser)
        dispatch({ type: Actions.BlogActions.SAVE_BLOG_TO_DB, payload: myUser });
  }, [myUser]);
    
    return (
        <div className="addblog">
                <h1>Write new blog</h1>
                <form id="add_blog_form" onSubmit={onSubmitHandle}>
                <CustomTextField
                label="Title"
                variant="outlined"
                multiline
                rows={2}               
                id="title"
                fullWidth="true"
                required
                placeholder="Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                />
                <br /><br />

                <Editor
         initialValue="<p>This is the initial content of the editor</p>"
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }}
         onEditorChange={handleChangeBody}
       />
                
                {/* <CustomTextField
                // id="outlined-multiline-static"
                label="Body"
                multiline
                rows={50}
                // defaultValue="Default Value"
                variant="outlined"
                  // type="textarea"
                  id="body"
                  required
                  fullWidth="true"
                  // placeholder="Body"
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                /><br /><br /> */}
                <CustomButton type="submit" form="add_blog_form">Create</CustomButton>
                {/* <button>Create</button> */}
                </form>
                <>
                  {
                      redirectToDash?<Redirect to="/slambook/dash/default" />:null
                  }
                </>
        </div>
    )
}

export default AddBlog

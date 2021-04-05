import { Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import Actions from '../Redux/Actions/Actions';

function Unauthorized() {
    const history = useHistory()
    function onClickHandle(e){
        e.preventDefault();
        localStorage.clear();
        history.replace('/slambook/login')
    }
    return (
        <div>
            {
                <Typography>
                <h1>You are not logged in.</h1><br />
                <Link to="/slambook/login" style={{textDecoration:0}}>
                    <h1 onClick={(e)=>{onClickHandle(e)}}>Relogin</h1>
                </Link>
                </Typography>
            }
        </div>
    )
}

export default Unauthorized

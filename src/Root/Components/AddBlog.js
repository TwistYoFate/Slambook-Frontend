import React from 'react'
import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'

function AddBlog() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const user = useSelector(state => state.user)
    useEffect(() => {
        if(localStorage.getItem("token"))
            setIsLoggedIn(true);
    }, [user])
    return (
        <div>
            {
                isLoggedIn?<p>Visible Data</p>:<p>Hidden data</p>
            }
        </div>
    )
}

export default AddBlog

import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar_Home from '../Components/Navbar_Home'
import Register from '../Components/Register'
import Login from '../Components/Login'
import AllBlogs from '../Components/AllBlogs'
import BlogDetail from '../Components/BlogDetail'

function Home() {
    const {pm1} = useParams()
    return (
        <div className="home">
            <Navbar_Home />
            {
                {
                    home:<AllBlogs />,
                    login:<Login />,
                    register:<Register />,
                    blogdetail:<BlogDetail />
                }[pm1]
            }
        </div>
    )
}

export default Home

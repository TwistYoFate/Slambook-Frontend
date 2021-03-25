import React from 'react'
import { useParams } from 'react-router'
import AddBlog from '../Components/AddBlog'
import MyBlogs from '../Components/MyBlogs'

function Dash() {
    const {pm1} = useParams()
    return (
        <div>
            {
                {
                    default:<MyBlogs />,
                    add:<AddBlog />,
                    
                }[pm1]
            }
        </div>
    )
}

export default Dash

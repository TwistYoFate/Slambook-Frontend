import React from 'react'
import AddBlog from '../Components/AddBlog'
import MyBlogs from '../Components/MyBlogs'

function Dash({pm2}) {
    return (
        <div>
            {
                {
                    default:<MyBlogs />,
                    add:<AddBlog />,
                    
                }[pm2]
            }
        </div>
    )
}

export default Dash

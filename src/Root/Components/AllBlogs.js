import React from 'react'
import BlogCard from './BlogCard'

import {Link} from 'react-router-dom'

function AllBlogs() {
    const blogs=[
        {
            id:1,
            title:"Card Title",
            body:"I am a very simple card. I am good at containing small bits of information.\
            I am convenient because I require little markup to use effectively.",
            author:"Deepanshu"
        },
        {
            id:2,
            title:"Card Title 2",
            body:"I am a very simple card. I am good at containing small bits of information.\
            I am convenient because I require little markup to use effectively.",
            author:"Dibbu"
        }
    ]

    return (
        <div>
            {
                blogs.map(blog=>{
                    return(
                        <div className="preview" key={blog.id}>
                            <Link to={{
                                pathname:"/slambook/blogdetail",
                                state:{blog:blog}}}>
                            <BlogCard blog={blog}/>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllBlogs

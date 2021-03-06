import React from 'react'
import { useHistory } from 'react-router-dom'

function BlogDetail(props) {
    const {blog} = useHistory().location.state
    console.log(blog)
    return (
        <div className="blogdetail">
            <h2>{blog.title}</h2>
            <h5>{blog.author}</h5>
            <p>{blog.body}</p>
        </div>
    )
}

export default BlogDetail

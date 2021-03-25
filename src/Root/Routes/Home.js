import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar_Home from '../Components/Navbar_Home'
import Register from '../Components/Register'
import Login from '../Components/Login'
import AllBlogs from '../Components/AllBlogs'
import BlogDetail from '../Components/BlogDetail'
import { Grid} from '@material-ui/core'
import { useSelector } from 'react-redux'

function Home() {
    const {pm1} = useParams()

    const user = useSelector(state => state.user)
    return (
        <div className="home">
            <Grid container direction="column" spacing={10}>
                <Grid item>
                    <Navbar_Home />
                </Grid>

                <Grid item container direction="row" >
                    
                    <Grid item xs={0} md={2} />

                    <Grid item xs={12} md={8}>
                    {
                        {
                            home:<AllBlogs />,
                            login:<Login />,
                            register:<Register />,
                            blogdetail:<BlogDetail />,
                        }[pm1]
                    }
                    </Grid>

                    <Grid item xs={0} md={2} />

                </Grid>
            </Grid>
            
        </div>
    )
}

export default Home

import React from 'react'
import { Redirect } from 'react-router';

function Loader({url}) {
    const [redirectToHome, setRedirectToHome] = React.useState(false)    
    React.useEffect(() => {
        setTimeout(() => {
            return(
                <div>
                    {
                        setRedirectToHome(true)
                    }
                </div>
            )
        }, 2000);
    }, [])

    return (
        <div>
            <p>Loading...</p>
            {
                redirectToHome?<Redirect to={url} />:null
            }
        </div>
    )
}

export default Loader

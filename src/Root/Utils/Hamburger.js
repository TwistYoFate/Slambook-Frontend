import { Hidden, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import CusDrawer from './CusDrawer'

function Hamburger({ToggleDrawerState}) {
    const [drawerState, setDrawerState] = React.useState(0)
    
    function ToggleDrawerState(e){
        e.preventDefault();
        setDrawerState(drawerState^1);
    }

    return (
        <div>
            {
            !drawerState?
            <IconButton onClick={(e)=>{ToggleDrawerState(e)}}>
                <MenuIcon xs={1} sm={0} />
            </IconButton>:
            <Hidden mdUp>
                <CusDrawer drawerState={drawerState} ToggleDrawerState={ToggleDrawerState}/>
            </Hidden>
            }
        </div>
    )
}

export default Hamburger

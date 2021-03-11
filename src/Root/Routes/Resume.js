import React from 'react'
import Navbar_Resume from '../Components/ResumeContent/Navbar_Resume'
import Button from '@material-ui/core/Button'
import Intro from '../Components/ResumeContent/Intro'
import { Grid, Paper, Tab, Tabs } from '@material-ui/core'
import Biodata from '../Components/ResumeContent/Biodata'
import CustomDrawer from '../Utils/CustomDrawer'
import {useState,useEffect,useRef} from 'react'


function Resume() {
    // This state property is used to sync the working of Drawer.
    const [openDrawer,setOpenDrawer] = useState(0)

    function OpenDrawer(){
      setOpenDrawer(openDrawer^1);
      console.log(openDrawer)
    }

    //This state property is used to sync the working of the Scroll to fields via clicking in drawer links
    const [currentTopic, setCurrentTopic] = useState(null)
    
    function CurrentTopic(val){
      setCurrentTopic(val);
      console.log(val);
    }

    

    return (
        <div className="resume">
          {
            console.log(useRef())
          }
            <CustomDrawer openDrawer={openDrawer} OpenDrawer={OpenDrawer} CurrentTopic={CurrentTopic} currentTopic={currentTopic}/>
            <Grid container direction="column" spacing={8}>
                
                <Grid item>
                <Navbar_Resume OpenDrawer={OpenDrawer} />
                </Grid>

                <Grid item>
                <Intro />
                </Grid>

                <CustomDrawer />

                <Grid item>
                <Biodata currentTopic={currentTopic}/>
                </Grid>

            </Grid>

            {/* <Paper square>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="Active">
                    Hello
                </Tab>
                <Tab label="Disabled" disabled />
                <Tab label="Active" />
              </Tabs>
            </Paper> */}
        </div>
    )
}

export default Resume

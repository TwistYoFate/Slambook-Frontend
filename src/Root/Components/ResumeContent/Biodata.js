import { Grid, Box } from '@material-ui/core'
import {useEffect} from 'react'
import {Education,Skills,POR,Projects,WorkExperience,CertiPapers} from './Index'

const comps = [
  {view:<WorkExperience />,id:0},
  {view:<Skills />,id:1},
  {view:<Projects />,id:2},
  {view:<POR />,id:3},
  {view:<Education />,id:4},
  {view:<CertiPapers />,id:5},
]


function Biodata({currentTopic}) {
  
  useEffect(() => {
      currentTopic?document.getElementById(currentTopic).scrollIntoView({behaviour:"smooth"}):null;
  },[currentTopic])
  
  return (
    <div>
      <Grid container sm={12} direction="column">
        {
            comps.map((comp)=>{
              return(
                <Box variant="div" item container id={"biodata-"+comp.id} key={comp.id}>
                    <Grid item>
                      {comp.view}
                    </Grid>
                </Box>
              )
            })
        }
      </Grid>
    </div>
  )
}

export default Biodata

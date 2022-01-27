import react from "react"
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import memoriesLogo from './img/memoIMG.png'
import Posts from "./components/Posts/Posts"
import Form from "./components/Form/form"

function App () {
      return(
          <Container maxWidth='lg'>
          <AppBar position="static" color="inherit">
          <Typography variant='h2' align="center" >Memories </Typography>
          <img src={memoriesLogo}  alt="memories_logo" height='100' width='100'></img>
          </AppBar>
          <Grow in>
            <Container >
            <Grid container justify='space-between' alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                 <Posts/>
                </Grid>
                <Grid item xs={12} sm={4}>
                 <Form/>
                </Grid>
            </Grid>
            </Container>
          </Grow>
          </Container>
      )
}

export default App
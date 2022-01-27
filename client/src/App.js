import React,{useEffect} from "react"
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import {useDispatch} from "react-redux"
import memoriesLogo from './img/memoIMG.png'
import Posts from "./components/Posts/Posts"
import {getPosts} from "./actions/actPosts"
import Form from "./components/Form/Form"
import useStyle from './styles'
function App () {
    const classes = useStyle()
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getPosts());

    },[dispatch])
      return(
          <Container maxWidth='lg'>
          <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant='h2' align="center" >Memories </Typography>
          <img src={memoriesLogo} className={classes.image}   alt="memories_logo" height='60' ></img>
          </AppBar>
          <Grow in>
            <Container >
            <Grid container justifyContent='space-between' alignItems="stretch" spacing={3}>
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
import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles'
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import { Box, Container } from '@material-ui/core';
//import './style.css';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        padding: 24
    },
    toolbar: {
        minHeight: 64
    }
})

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <div class={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <Navbar />
                        <Feed />
                    </Box>
                </Container>

            </main>
        </div>
    )
}

export default Home;
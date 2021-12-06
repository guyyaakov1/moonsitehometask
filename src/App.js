import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";


                                                   
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navbar from './Components/Navbar';
import { Routes } from './Routes/Routes';



const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
const App = () => {


  const classes = useStyles();


  return (
    <div className="app">
      <Router>
        <CssBaseline />
       <Navbar/>

        {/* Hero unit */}

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Routes/>
          
        </Container>
        </Router>
    </div>
  );
};



export default App;

import React, {  useState } from 'react'
import { registerApi } from '../../api/actions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import validator from 'validator';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



  
  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


const Register = (props) => {
    const [user, setUser] = useState({email:'',password:''})

    let onChange = (e) => {
      console.log(user);
  
      let name = e.target.name
      setUser({
        ...user,
        [name]: e.target.value
      })
  
    }

    const subnit = async () => {

        try {
          const result = await registerApi(user);
          console.log(result);
          localStorage.setItem('userToken',result.data.token)
          props.history.push('/')
    
        } catch (error) {
          console.log(error);
        }
      }

    const classes = useStyles();

    return ( 
        <div>
   

            <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Register
        </Typography>
          <form className={classes.input} noValidate>
          {
        !validator.isEmail(user.email) && 'error' //=> true

      }
            <TextField
              onChange={onChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={onChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={subnit}
            >
              Register
          </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  
        </div>
    )
}

export default Register;
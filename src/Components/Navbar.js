import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import * as Actions from '../api/actions'



const Navbar = () => {
 

    return (
        <AppBar position="relative">
              
            <Toolbar>
                <Link to="/" > 
                <Typography variant="h6" color="black" noWrap>
                    HomePage
                    </Typography>
                </Link>
                <Link to="/addpost" > 
                <Typography variant="h6" color="black" noWrap>
                    Add Post
                    </Typography>
                </Link>
                <Link to="/followers">
                    <Typography variant="h6" color="black" noWrap>
                        Followers
          </Typography>
                </Link>
                <Link to="/login">
                    <Typography variant="h6" color="black" noWrap>
                        login
          </Typography>
                </Link>
                <Link  color="inherit" to="/Register">
                    <Typography variant="h6" color="black" noWrap>
                    Register
          </Typography>
                </Link>
                <Button onClick={Actions.logOut} href="/">log out</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
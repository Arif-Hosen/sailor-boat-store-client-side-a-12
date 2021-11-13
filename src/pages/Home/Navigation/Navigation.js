import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: ' #ff0101' }} position="sticky">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                </IconButton> */}
                    <Typography variant="h6" component="div" >
                        {/* <i class="fas fa-ship"></i> */}
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <i style={{ fontSize: 30, margin: '8px', color: 'black' }} className="fas fa-anchor"></i>
                            <span style={{ color: 'black', fontWeight: 400 }}>  SAILOR BOAT</span>
                            <span style={{ color: 'white', fontWeight: 300 }}> STORE</span>
                        </Link>


                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <Link to='/explore' style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Explore</Button></Link>
                    {user?.email ? <Box>
                        <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'white' }} >
                            <Button color="inherit">Dashboard</Button>
                        </NavLink>
                        <span style={{ backgroundColor: 'black', padding: 5, borderRadius: '5px' }}><small>{user.displayName}</small></span>
                        <Button onClick={logOut} color="inherit">Logout</Button>
                    </Box>

                        : <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Login</Button></Link>}
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;
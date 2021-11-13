import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
import Navigation from '../../Home/Navigation/Navigation';
import { Box } from '@mui/system';
import Footer from '../../Shared/Footer/Footer';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    // console.log('loginData', loginData)
    const history = useHistory();
    const { user, authError, registerUser, isLoading } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <Box>
            <Navigation></Navigation>
            <Container>

                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%', marginTop: 20 }} src='https://image.freepik.com/free-vector/happy-man-his-boat-background_23-2147620627.jpg' alt='log'></img>
                    </Grid>

                    <Grid item sx={{ mt: 8, mx: 'auto' }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>
                            Register
                        </Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                variant="standard"
                                name='name'
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type="email"
                                label="Your Email"
                                variant="standard"
                                name='email'
                                onBlur={handleOnBlur}
                            />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type="password"
                                label="Your Password"
                                variant="standard"
                                name='password'
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type="password"
                                label="Retype Your Password"
                                variant="standard"
                                name='password2'
                                onBlur={handleOnBlur}
                            />

                            <Button style={{ backgroundColor: ' #ff0101' }} sx={{ width: '75%', m: 1 }} type='submit' variant='contained'>Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to='/login'>
                                <Button variant="text">Already Registerd?Please Login</Button>
                            </NavLink>
                        </form>}

                        {/* if is loading is true, then visible spinner */}
                        {isLoading && <CircularProgress sx={{ m: 5 }} />
                        }

                        {/* after succesfully registered, give a alert message */}
                        {user.email && <Alert severity="success">User created successfully!</Alert>}

                        {/* if any error occured, give the error message */}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>

                </Grid>
            </Container>
            <Footer></Footer>
        </Box>



    );
};

export default Register;
import React, { useState } from 'react'; import Navigation from '../../Home/Navigation/Navigation';
import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    // get input from input field and set a state
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    // handler for email password authentication
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2}>

                    <Grid data-aos="flip-right" item xs={12} md={6}>
                        <img style={{ width: '100%', marginTop: 20 }} src='https://image.freepik.com/free-vector/happy-man-his-boat-background_23-2147620627.jpg' alt='log'></img>
                    </Grid>

                    <Grid data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500" item sx={{ mt: 8, mx: 'auto' }} xs={8} md={6}>
                        <Typography variant="body1" gutterBottom>
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                variant="standard"
                                name='email'
                                onChange={handleOnChange}
                            />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type="password"
                                label="Your Password"
                                variant="standard"
                                name='password'
                                onChange={handleOnChange}
                            />

                            <Button style={{ backgroundColor: ' #ff0101' }} sx={{ width: '75%', m: 1 }} type='submit' variant='contained'>Login</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to='/register'>
                                <Button variant="text">New user? Please register</Button>
                            </NavLink>

                            {/* if is loading is true, then visible spinner */}
                            {isLoading && <CircularProgress sx={{ m: 5 }} />
                            }

                            {/* after succesfully registered, give a alert message */}
                            {user.email && <Alert severity="success">User login successfully!</Alert>}

                            {/* if any error occured, give the error message */}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>

                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;
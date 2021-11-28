import React from 'react';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './ChooseUs.css'




const WhyChooseUs = () => {
    return (
        <Box className='backImage' sx={{ my: 20, py: 6 }}>
            <Typography data-aos="zoom-in" variant='h4' style={{ backgroundColor: 'black', color: 'white' }} sx={{ mt: -13, mx: 9, p: 4 }}>Why <span style={{ color: 'red' }}>Choose Us??</span></Typography>

            <Box style={{ color: 'white' }} sx={{ flexGrow: 1, p: 8 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    <Grid item xs={4} sm={4} md={6} >

                        <img style={{ width: '100%' }} src="https://as1.ftcdn.net/v2/jpg/02/59/03/10/1000_F_259031007_rof0VQS5ES8JZ1FdSdTy69MfUBpn9Mjq.jpg" alt="" />

                    </Grid>
                    <Grid sx={{ textAlign: 'left' }} item xs={4} sm={4} md={6} >

                        <Typography variant='h6' >
                            <i style={{ fontSize: 25, marginRight: 8 }} class="fas fa-people-arrows"></i>
                            Personalized Service</Typography>
                        <Typography data-aos="flip-right" variant='body1' sx={{}}>We makes customers feel more valued, which inspires greater brand loyalty.</Typography>

                        <Typography sx={{ mt: 3 }} variant='h6' >
                            <i
                                style={{ fontSize: 25, marginRight: 8 }} className="fas fa-headset"></i> 24/7 Support</Typography>
                        <Typography data-aos="flip-right" variant='body1' sx={{ mb: 3 }}> Customers can get help and find answers to questions as soon as they come up—24/7 and in real-time.</Typography>
                        <Typography variant='h6' >
                            <i style={{ fontSize: 25, marginRight: 8 }} class="fas fa-handshake"></i>
                            Trusted Company</Typography>
                        <Typography data-aos="flip-right" variant='body1' sx={{}}> We provide actual price of the product as market price.</Typography>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
};

export default WhyChooseUs;
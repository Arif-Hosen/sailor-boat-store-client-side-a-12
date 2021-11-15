import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <h2>this is footer</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                <Grid item xs={4} sm={4} md={4}>
                    <Box sx={{ textAlign: 'left', p: 5 }}>
                        <Typography gutterBottom variant="h5" component="div"
                            style={{ color: ' white', borderBottom: '3px solid red' }}
                        >About us
                        </Typography>
                        <Typography variant="body1" color="text.secondary" style={{ color: ' lightGray', paddingTop: 20 }}>
                            We makes customers feel more valued, which inspires greater brand loyalty.Customers can get help and find answers to questions as soon as they come up—24/7 and in real-time.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Box sx={{ textAlign: 'left', p: 5 }}>
                        <Typography gutterBottom variant="h5" component="div"
                            style={{ color: ' white', borderBottom: '3px solid red' }}
                        >Contact
                        </Typography>
                        <Typography variant="body1" color="text.secondary" style={{ color: ' lightGray', paddingTop: 20 }}>
                            Telephone: 1-567-124-44227
                        </Typography>
                        <Typography variant="body1" color="text.secondary" style={{ color: ' lightGray', paddingTop: 20 }}>
                            Address: New-York, USA
                        </Typography>
                        <Typography variant="body1" color="text.secondary" style={{ color: ' lightGray', paddingTop: 20 }}>
                            E-mail: sailorboatstore21@gmail.com
                        </Typography>
                        <Typography variant="h5" style={{ color: 'white', marginTop: 20 }}>
                            <i style={{ marginRight: 20, padding: 8, backgroundColor: 'navy', borderRadius: '50%' }} className="fab fa-facebook"></i>
                            <i style={{ marginRight: 20, padding: 8, backgroundColor: 'red', borderRadius: '50%' }} className="fab fa-youtube"></i>
                            <i style={{ marginRight: 20, padding: 8, backgroundColor: 'blue', borderRadius: '25px' }} className="fab fa-linkedin"></i>
                            <i style={{ marginRight: 20, padding: 8, backgroundColor: 'green', borderRadius: '50%' }} className="fas fa-globe-americas"></i>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Box sx={{ textAlign: 'left', p: 5 }}>
                        <Typography gutterBottom variant="h5" component="div"
                            style={{ color: ' white', borderBottom: '3px solid red' }}
                        >Newsletter
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ color: ' lightGray', paddingTop: 20 }}>
                            <TextField
                                style={{ backgroundColor: 'white', width: '75%', border: '2px solid red', marginBottom: 15 }}
                                label="Your E-mail"

                                variant="filled" />
                            <br />
                            <Button style={{ width: '75%', backgroundColor: 'red' }} variant='contained'>Subscribe</Button>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ p: 3 }} style={{ backgroundColor: 'red', color: 'white' }}>
                <Typography variant='h9' >© Sailor Boat Store - 2021 | All Right Reserved. Developed By Arif</Typography>
            </Box>
        </div>
    );
};

export default Footer;
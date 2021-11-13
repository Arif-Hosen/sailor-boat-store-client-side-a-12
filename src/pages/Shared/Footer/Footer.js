import { Grid, Typography } from '@mui/material';
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
                        <Typography variant="body2" color="text.secondary" style={{ color: ' lightGray', paddingTop: 20 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet...
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Box sx={{ textAlign: 'left', p: 5 }}>
                        <Typography gutterBottom variant="h5" component="div"
                            style={{ color: ' white', borderBottom: '3px solid red' }}
                        >About us
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ color: ' lightGray', paddingTop: 20 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet...
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Box sx={{ textAlign: 'left', p: 5 }}>
                        <Typography gutterBottom variant="h5" component="div"
                            style={{ color: ' white', borderBottom: '3px solid red' }}
                        >About us
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ color: ' lightGray', paddingTop: 20 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet...
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
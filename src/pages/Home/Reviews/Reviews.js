import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('https://mighty-journey-58632.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);

            })
    }, [])




    return (
        <Container >
            <Typography data-aos="fade-down-right" sx={{ mt: 9, mb: 4 }} variant='h4'><i className="fas fa-users"></i> Customers <span style={{ color: 'red' }}> Reviews</span></Typography>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>


                {reviews.map(review => <Grid xs={4} sm={4} md={4}> <Paper data-aos="fade-right" sx={{ p: 3, m: 2 }}>
                    <Typography variant='h6'>
                        <i style={{ fontSize: 35 }} className="fas fa-user-circle"></i><br />
                        {review.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {review.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {review.review}
                    </Typography>


                    <Rating name="read-only" value={parseInt(review.rate)} readOnly />

                </Paper>
                </Grid>)}

            </Grid>
        </Container >
    );
};

export default Reviews;
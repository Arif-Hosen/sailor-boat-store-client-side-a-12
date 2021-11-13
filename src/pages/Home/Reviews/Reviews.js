import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2>Customers Reviews</h2>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>


                {reviews.map(review => <Grid xs={4} sm={4} md={4}> <Paper sx={{ p: 3, m: 2 }}>
                    <Typography variant='h6'>
                        {review.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {review.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {review.review}
                    </Typography>
                </Paper>
                </Grid>)}

            </Grid>
        </div>
    );
};

export default Reviews;
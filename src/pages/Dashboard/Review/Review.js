import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import useAuth from './../../../Hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const [review, setReview] = useState('');
    const [rate, setRate] = useState('');

    const handleReview = e => {
        setReview(e.target.value);
    }
    const handleRate = e => {
        const rate = e.target.value;
        if (rate <= 5) {
            setRate(e.target.value);
        }

    }

    const handleOnsubmit = e => {
        const newReview = { name: user.displayName, email: user.email, review: review, rate: rate }
        // console.log(newReview);

        fetch('https://mighty-journey-58632.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(alert('successful'))
        e.preventDefault();
    }

    return (
        <Box>
            <Typography sx={{ my: 7 }} variant='h5'> Give Your valuable Review</Typography>
            <form onSubmit={handleOnsubmit}>
                <TextField sx={{ width: '25%' }}
                    disabled defaultValue={user.displayName} id="outlined-basic" label="Your Name" variant="outlined" />
                <br />
                <TextField sx={{ my: 3, width: '25%' }}
                    onBlur={handleReview}
                    id="outlined-multiline-static"
                    label="Your Feedback"
                    multiline
                    rows={4}

                />
                <br />
                <TextField
                    sx={{ width: '25%' }}
                    onBlur={handleRate}
                    id="outlined-number"
                    label="Rate us(0-5)"
                    type="number"
                    defaultValue='0-5'
                    InputLabelProps={{
                        shrink: true,
                    }}></TextField>

                <br />
                <Button sx={{ my: 5 }} type='submit' variant='contained'>Submit</Button>
            </form>
        </Box>
    );
};

export default Review;
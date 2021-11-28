import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        console.log(e.target.value)
        setEmail(e.target.value);
        e.preventDefault();
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://mighty-journey-58632.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    setSuccess(true);
                }

            })
        e.preventDefault();
    }

    return (
        <div>
            <Typography data-aos="fade-right" sx={{ my: 7 }} variant='h5'> Make An <span style={{ color: 'red' }} >Admin</span></Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    type='email'
                    onBlur={handleOnBlur}
                    label="Email"
                    variant="standard" />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Admin Added successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;
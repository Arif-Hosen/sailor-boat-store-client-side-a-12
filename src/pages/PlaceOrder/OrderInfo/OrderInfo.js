import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Alert } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const OrderInfo = ({ productName, productId }) => {
    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '', address: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);
    const [orderSuccess, setOrderSuccess] = useState(false);


    // handler input field inforamation
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setOrderInfo(newInfo);
    }

    // handler, send order data to db
    const handleOrderSubmit = e => {

        // collect data
        const order = {
            ...orderInfo,
            productName: productName,
            productId: productId,
            status: 'Pending...'
        }
        console.log(order);
        // console.log(appointment);
        // send to server
        fetch('https://mighty-journey-58632.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true);

                }
            })


        e.preventDefault();
    }
    return (
        <Paper>
            <Box>
                <form onSubmit={handleOrderSubmit}>
                    {/* <TextField
                                        sx={{ width: '100%', my: 2 }}
                                        name='productName'
                                        label='Product'
                                        defaultValue={product.name}
                                        variant="filled" /> */}
                    <TextField
                        sx={{ width: '100%', my: 2 }}
                        name='customerName'
                        label='Your Name'
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        variant="filled" />
                    <TextField
                        sx={{ width: '100%', my: 2 }}
                        defaultValue={user.email}
                        name="email"
                        label='Email'
                        onBlur={handleOnBlur}
                        variant="filled" />
                    <TextField
                        sx={{ width: '100%', my: 2 }} label='Phone'
                        name="phone"
                        onBlur={handleOnBlur}
                        variant="filled" />
                    <TextField
                        sx={{ width: '100%', my: 2 }} label='Address'
                        name="address"
                        onBlur={handleOnBlur}
                        variant="filled" />
                    <Button
                        type='submit'
                        style={{ backgroundColor: ' #ff0101' }} sx={{ my: 4 }}
                        variant='contained'>Place Order</Button>
                </form>
                {
                    orderSuccess && <Alert severity="success">Order Placed Successfully !</Alert>
                }
            </Box>
        </Paper>
    );
};

export default OrderInfo;
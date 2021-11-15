import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography, Alert } from '@mui/material';


const AddProduct = () => {
    const initialProduct = { name: '', description: '', price: '', img: '' }
    const [product, setProduct] = useState(initialProduct);
    const [success, setSuccess] = useState(false);

    // console.log(product);
    // handler to get from textfield
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newProduct = { ...product };

        newProduct[field] = value;
        setProduct(newProduct);
    }

    // after button click product object post on database collection
    const handleOnSubmit = e => {
        // work due
        fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    setSuccess(true);
                }

            })
        e.preventDefault();
    }
    return (
        <Box>
            <Typography variant='h5'>Add <span style={{ color: 'red' }}>Product</span></Typography>

            <form onSubmit={handleOnSubmit}>
                <TextField
                    onBlur={handleOnBlur}
                    name='name'
                    sx={{ width: '50%', mt: 5 }}
                    label="Product Name"
                    variant="standard" />
                <br />
                <TextField
                    onBlur={handleOnBlur}
                    name='description'
                    sx={{ width: '50%', mt: 5 }}
                    label="Description"
                    variant="standard" />
                <br />
                <TextField
                    onBlur={handleOnBlur}
                    name='price'
                    sx={{ width: '50%', mt: 5 }}
                    label="Price"
                    variant="standard" />
                <br />
                <TextField
                    onBlur={handleOnBlur}
                    name='img'
                    sx={{ width: '50%', mt: 5 }}
                    label="Image Url"
                    variant="standard" />
                <br />
                <Button sx={{ mt: 5 }}
                    type='submit'
                    variant='contained'>Add Product</Button>
            </form>
            {
                success && <Alert severity="success">Product added successfully!</Alert>
            }
        </Box>
    );
};

export default AddProduct;
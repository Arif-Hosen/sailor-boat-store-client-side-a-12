import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://mighty-journey-58632.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = id => {
        fetch(`https://mighty-journey-58632.herokuapp.com/product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainning = products.filter(product => product._id !== id);
                    setProducts(remainning)
                }
            })
    }

    return (
        <div>
            <Typography data-aos="fade-right" sx={{ mt: 8, mb: 5 }} variant='h5'>Manage <span style={{ color: 'red' }}>Product</span></Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Image</TableCell>
                            <TableCell>Product Name</TableCell>

                            <TableCell >Price</TableCell>

                            <TableCell >Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ width: '25%' }} >< img style={{ width: '100%' }} src={row.img} alt="" /></TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>

                                <TableCell >{row.price}</TableCell>

                                <TableCell ><Button
                                    onClick={() => handleDelete(row._id)}
                                    variant='contained' style={{ backgroundColor: 'salmon' }}>Delete Product</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProduct;
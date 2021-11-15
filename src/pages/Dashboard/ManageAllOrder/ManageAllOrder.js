import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    const [update, setUpdate] = useState(false);

    // load orders to order collection
    useEffect(() => {
        fetch('https://mighty-journey-58632.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [update])

    // handle status update by put method
    const handleShipped = id => {
        const newId = { id }
        fetch('https://mighty-journey-58632.herokuapp.com/approve', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newId)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setUpdate(true);
                }
            })
    }

    // delete myorder by delete api
    const handleDelete = (id) => {
        //   confirmation message
        if (window.confirm("Do you really want to leave?")) {
            fetch(`https://mighty-journey-58632.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);

                    }
                })
        }



    }

    return (
        <div>
            <Typography sx={{ mt: 8, mb: 5 }} variant='h5'>Manage <span style={{ color: 'red' }}>All Orders</span></Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Product Name</TableCell>
                            <TableCell >Order Status</TableCell>
                            <TableCell >Cancel</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.customerName}
                                </TableCell>

                                <TableCell >{row.email}</TableCell>
                                <TableCell >{row.productName}</TableCell>

                                <TableCell ><Button
                                    onClick={() => handleShipped(row._id)}
                                    style={{ backgroundColor: 'gold', color: 'black' }} variant='contained'>{row.status}</Button></TableCell>
                                <TableCell ><Button
                                    onClick={() => handleDelete(row._id)}
                                    variant='contained' style={{ backgroundColor: 'salmon' }}>Cancel Order</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default ManageAllOrder;
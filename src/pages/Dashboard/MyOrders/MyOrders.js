import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from './../../../Hooks/useAuth';
import { Button, Typography } from '@mui/material';

const MyOrders = () => {
    const [myOrders, setMyorders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        const url = `https://mighty-journey-58632.herokuapp.com/myorder/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyorders(data))
    }, [])

    // delete myorder by delete api
    const handleDelete = (id) => {
        //   confirmation message
        if (window.confirm("Do you really want to leave?")) {
            fetch(`https://mighty-journey-58632.herokuapp.com/myorder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        const remaining = myOrders.filter(order => order.productId !== id);
                        setMyorders(remaining);

                    }
                })
        }



    }
    return (
        <div>
            <Typography data-aos="fade-left" sx={{ mt: 7 }} variant='h5'>Welcome <span style={{ color: 'red' }}>{user.displayName}</span></Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Phone</TableCell>
                            <TableCell >Order Status</TableCell>
                            <TableCell >Cancel</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.productName}
                                </TableCell>

                                <TableCell >{row.email}</TableCell>
                                <TableCell >{row.phone}</TableCell>
                                <TableCell ><Button
                                    style={{ backgroundColor: 'gold', color: 'black' }} variant='contained'>{row.status}</Button></TableCell>
                                <TableCell ><Button
                                    onClick={() => handleDelete(row.productId)}
                                    variant='contained' style={{ backgroundColor: 'salmon' }}>Cancel Order</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default MyOrders;
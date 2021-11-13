import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from './../../../Hooks/useAuth';
import { Button } from '@mui/material';

const MyOrders = () => {
    const [myOrders, setMyorders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        const url = `http://localhost:5000/myorder/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyorders(data))
    }, [])

    // delete api
    const handleDelete = (id) => {
        // window.confirm('Are you sure you wish to delete this item?')
        if (window.confirm("Do you really want to leave?")) {
            fetch(`http://localhost:5000/myorder/${id}`, {
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
            <h2>Welcome {user.displayName}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Phone</TableCell>
                            <TableCell >Address</TableCell>
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
                                <TableCell >{row.address}</TableCell>
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
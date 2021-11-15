import { CardActionArea, Container, Grid, Card, CardMedia, CardContent, Typography, Paper, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Home/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import OrderInfo from '../OrderInfo/OrderInfo';


const PlaceOrder = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();


    // console.log(id);

    useEffect(() => {
        fetch(`https://mighty-journey-58632.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    return (

        <Box>
            <Navigation></Navigation>
            <Container>

                <h2 style={{ margin: '50px auto' }}>Model: {product.name}</h2>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={4} sm={8} md={8} >

                        <Card sx={{ width: '100%' }}>
                            <CardActionArea sx={{ display: 'flex' }}>
                                <CardMedia
                                    sx={{ width: '75%' }}
                                    component="img"

                                    image={product.img}
                                    alt="green iguana"
                                />
                                <Box>
                                    <CardContent sx={{ textAlign: 'left' }}>
                                        <Typography gutterBottom variant="h5" component="div"
                                            style={{ color: ' #ff0101' }}
                                        >
                                            {product.name}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {product.description}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            $    {product.price}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>





                    <Grid item xs={4} sm={8} md={4} >
                        <h2>Give Your Info</h2>
                        <OrderInfo
                            key={product._id}
                            productId={product._id}
                            productName={product.name}
                        ></OrderInfo>
                    </Grid>
                </Grid>

            </Container >
            <Footer></Footer>
        </Box>
    );
};

export default PlaceOrder;
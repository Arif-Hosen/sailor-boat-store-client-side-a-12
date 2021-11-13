import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import Navigation from '../../Home/Navigation/Navigation';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';



const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/explore')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (

        <div>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <Container>
                    <Typography variant='h4' sx={{ mt: 9 }}>
                        Our <span style={{ color: ' #ff0101' }} >All Collection</span>
                    </Typography>
                    <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>

                        {
                            products.map(product => <Grid item xs={4} sm={4} md={4} >
                                <Card sx={{ maxWidth: 345, mb: 4, mt: 5, textAlign: 'start' }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={product.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.description}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            $    {product.price}
                                        </Typography>
                                    </CardContent>
                                    <Link style={{ textDecoration: 'none', color: 'white' }}
                                        to={`/placeorder/${product._id}`}>
                                        <Button style={{ backgroundColor: ' #ff0101', margin: 10 }} variant='contained' sx={{ fontWeight: 300 }}>Order Now</Button>
                                    </Link>
                                </Card>
                            </Grid>
                            )
                        }

                    </Grid >
                </Container>

            </Box>
            <Footer></Footer>
        </div>


    );
};

export default Explore;

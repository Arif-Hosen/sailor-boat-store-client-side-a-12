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
import { Link } from 'react-router-dom';



const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://mighty-journey-58632.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Container>
                <Typography data-aos="fade-right" variant='h4' sx={{ mt: 9 }}>
                    Our <span style={{ color: ' #ff0101' }} >Collection</span>
                </Typography>
                <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        products.map(product => <Grid item xs={4} sm={4} md={4} >
                            <Card data-aos="zoom-in-up" sx={{ maxWidth: 345, mb: 4, mt: 5, textAlign: 'start' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography data-aos="fade-right" gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography data-aos="fade-left" variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $    {product.price}
                                    </Typography>
                                </CardContent>
                                <Link data-aos="fade-up"
                                    data-aos-duration="3000" style={{ textDecoration: 'none', color: 'white' }}
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




    );
};

export default Products;








// json
// [
//     {
//         "name": "Hinckley Talaria 55 MKII",
//         "img": "https://as2.ftcdn.net/v2/jpg/04/39/15/19/1000_F_439151925_MMvpj8lQNykAx847sUMmTBDPvixOfhPr.jpg",
//         "price": 100000,
//         "description": "The Hinckley Talaria 55 MKII range capitalizes on the highly successful Swift Trawler range and the expertise of Groupe Beneteaus experience producing luxury boats."
//     },
//     {
//         "name": "Back Cove 34O",
//         "img": "https://as1.ftcdn.net/v2/jpg/02/59/03/10/1000_F_259031007_rof0VQS5ES8JZ1FdSdTy69MfUBpn9Mjq.jpg",
//         "price": 150000,
//         "description": " These boats offer simplicity, performances, and comfortable interiors and cockpits geared towards daysailing and coastal cruising."
//     },
//     {
//         "name": "FLYER 9 SPACEDECK",
//         "img": "https://as1.ftcdn.net/v2/jpg/00/20/00/40/1000_F_20004079_wkGwzbSzZ9HNVTRY35rDAyoeRRyZuAjh.jpg",
//         "price": 170000,
//         "description": "Our Flyer range was conceived to be the day-boat of your dreams. "
//     },
//     {
//         "name": "Back Cove 39O",
//         "img": "https://as1.ftcdn.net/v2/jpg/00/91/69/58/1000_F_91695838_ctnLWAzSnZoWNOjykEsl98mkFWswYmO0.jpg",
//         "price": 105000,
//         "description": " Back Cove 39O Edition encourages and empowers sailors to expand their comfort zone by joining competitive one-design racing and adventure sailing."
//     },
//     {
//         "name": "ANTARES 11 FLY",
//         "img": "https://as1.ftcdn.net/v2/jpg/02/31/03/44/1000_F_231034413_Fry5NY5kS9Am3FgAE1cc1Ub1Wc4Yg5Rm.jpg",
//         "price": 190000,
//         "description": "The Antares is a true memory-maker. This range of powerboats wholly represents our passion for pure water-born freedom."
//     },
//     {
//         "name": "OCEANIS YACHT 62",
//         "img": "https://as2.ftcdn.net/v2/jpg/01/23/49/71/1000_F_123497156_fSt77cepPlsRwhjMxUSVGqFhLYiHZ7W5.jpg",
//         "price": 180000,
//         "description": "Heir to more than 40 years of experience of the First range launched by BENETEAU in 1977, the First Yacht sets the course for high-performance"
//     },
//     {
//         "name": "GRAN TURISMO 45",
//         "img": "https://as2.ftcdn.net/v2/jpg/01/95/24/65/1000_F_195246555_iDpE3MjlNSzud0CBUZQO5KA9bQAupiLO.jpg",
//         "price": 200000,
//         "description": "GRAN TURISMO 45 is our range of long-distance, blue water cruisers and for years has set the standard for sailboat design and construction."
//     },
//     {
//         "name": "SWIFT TRAWLER 41 FLY",
//         "img": "https://as1.ftcdn.net/v2/jpg/00/43/59/00/1000_F_43590010_0qrAiLfLUJ2ipy4raxeSFVDki8IZg8gW.jpg",
//         "price": 80000,
//         "description": "The Swift Trawler range is smart without being difficult, balanced without being bland. She has reinvented what a trawler can be and does not compromise on space"
//     },
//     {
//         "name": "MONTE CARLO 52",
//         "img": "https://as1.ftcdn.net/v2/jpg/01/51/41/94/1000_F_151419416_nQwlmg6CDIK3L0Ac8HGMiKOOc0BAN0N1.jpg",
//         "price": 300000,
//         "description": "The Monte Carlo range of motor yachts embodies timeless elegance and no-compromise craftsmanship. "
//     },
//     {
//         "name": "OCEANIS 34.1 NEW",
//         "img": "https://as1.ftcdn.net/v2/jpg/01/56/65/76/1000_F_156657633_Yt2MkfpiPbZmKbuIIUD9vDeyMA6lLt8j.jpg",
//         "price": 199000,
//         "description": "The OCEANIS 34.1 NEW is the culmination of our Oceanis philosophy where cruising comfort, performance"
//     }
// ]

// start here
// import React from 'react';


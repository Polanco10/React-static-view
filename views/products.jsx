const React = require('react');
const Product = require('./components/product')
const DefaultLayout = require('./layouts/default');
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


function Products(props) {
    let products = props['products']
    console.log(products)
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: '1'
    }));
    return (
        <DefaultLayout title={props.title}>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map((product, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item><Product name={product.name} price={product.price}></Product></Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </DefaultLayout>
    );
}

module.exports = Products;
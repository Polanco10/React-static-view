const React = require('react');
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Product(props) {
    const name = props.name;
    const price = props.price
    return (<Card sx={{ maxWidth: 345 }}>
        <CardActionArea >
            <CardMedia
                component="img"
                height="140"
                image="/img//producto.jpg"
                alt="product"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Tiene un precio de: ${price}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>);
}

module.exports = Product;
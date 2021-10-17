const express = require('express');
const morgan = require('morgan');
var reactViews = require('express-react-views');


const productRouter = require('./routes/productRoutes');

const app = express();

//morgan -> logger middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());
app.use(express.static(__dirname + '/public'));


app.use('*', productRouter); //middleware -> mounting multiple routers


module.exports = app;

const express = require('express');

const productCtrl = require('./controllers/product.ctrl');

const app = express();

const PORT = 7878;

//app.use(express.static('./img'))

app.use('/images', express.static('images'))

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api/products', productCtrl);

app.listen(PORT, () => console.log(`server up ${PORT}`));
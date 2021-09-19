
const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
const adminRoutes = require('./routes/admin');
const shopsrouter = require('./routes/shop');

app.use('/admin',adminRoutes);
app.use(shopsrouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'pageNotFound.html'));
});
app.listen(3000);
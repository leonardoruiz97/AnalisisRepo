require('dotenv').config()
const express = require('express');
//const session = require('express-session')
const path =  require('path');
const morgan = require('morgan');





const app = express();

//db conection



app.locals.baseURL = 'http://localhost:3000'



// importing routes
//const indexRoutes = require('./routes/index');
//const profesoresRoutes;


app.use(express.static(path.join(__dirname,'./public')))

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
//app.use(validator());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//settings
app.set('port',process.env.PORT || 3000);

app.get('/',function(req,res) {
    res.render('compraDespacho');
  });

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

module.exports = app;
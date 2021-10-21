const express = require('express');


const app = express();
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use('/assets',express.static(__dirname+'/public'));
app.use('/assets/css',express.static(__dirname+'/public'));
app.use('/assets/img',express.static(__dirname+'/public'));
app.use('/assets/img/blog',express.static(__dirname+'/public'));
app.use('/assets/img/clients',express.static(__dirname+'/public'));
app.use('/assets/img/portfolio',express.static(__dirname+'/public'));
app.use('/assets/img/team',express.static(__dirname+'/public'));
app.use('/assets/img/testimonials',express.static(__dirname+'/public'));
app.use('/assets/js',express.static(__dirname+'/public'));
app.use('/assets/vendor',express.static(__dirname+'/public'));
app.use('/assets/vendor/aos',express.static(__dirname+'/public'));
app.use('/assets/vendor/bootstrap',express.static(__dirname+'/public'));
app.use('/assets/vendor/bootstrap/css',express.static(__dirname+'/public'));
app.use('/assets/vendor/bootstrap/js',express.static(__dirname+'/public'));
app.use('/assets/vendor/bootstrap-icons',express.static(__dirname+'/public'));
app.use('/assets/vendor/bootstrap-icons/fonts',express.static(__dirname+'/public'));
app.use('/assets/vendor/glightbox',express.static(__dirname+'/public'));
app.use('/assets/vendor/glightbox/css',express.static(__dirname+'/public'));
app.use('/assets/vendor/glightbox/js',express.static(__dirname+'/public'));
app.use('/assets/vendor/isotope-layout',express.static(__dirname+'/public'));
app.use('/assets/vendor/php-email-form',express.static(__dirname+'/public'));
app.use('/assets/vendor/purecounter',express.static(__dirname+'/public'));
app.use('/assets/vendor/remixicon',express.static(__dirname+'/public'));
app.use('/assets/vendor/swiper',express.static(__dirname+'/public'));

app.get('/', (req, res) => {
	res.render('index', {title: 'Home'})
});

app.listen(3000, (err) => {
	if(err){console.log(err); emit.end(-1);}
});
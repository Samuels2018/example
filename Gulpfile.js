const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const babel = require('babelify');
const browser = require('browserify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');

/*gulp.task('styles', (done)=> {
	gulp .src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));
		done();
});*/

gulp.task('assest-css', (done) => {
	gulp .src('assest/assets/css/*')
		.pipe(gulp.dest('public/assets/css'));
	done();
})

gulp.task('assest-js', (done) => {
	gulp .src('assest/assets/js/*')
		.pipe(gulp.dest('public/assets/js'));
	done();
})

gulp.task('assest-img', (done) => {
	gulp .src('assest/assets/img/*')
		.pipe(gulp.dest('public/assets/img'));
	done();
})
gulp.task('assest-img-blog', (done) => {
	gulp .src('assest/assets/img/blog/*')
		.pipe(gulp.dest('public/assets/img/blog/'));
	done();
})
gulp.task('assest-img-client', (done) => {
	gulp .src('assest/assets/img/clients/*')
		.pipe(gulp.dest('public/assets/img/clients'));
	done();
})
gulp.task('assest-img-team', (done) => {
	gulp .src('assest/assets/img/team/*')
		.pipe(gulp.dest('public/assets/img/team'));
	done();
})
gulp.task('assest-img-portfolio', (done) => {
	gulp .src('assest/assets/img/portfolio/*')
		.pipe(gulp.dest('public/assets/img/portfolio'));
	done();
})
gulp.task('assest-img-testimonials', (done) => {
	gulp .src('assest/assets/img/testimonials/*')
		.pipe(gulp.dest('public/assets/img/testimonials'));
	done();
})


gulp.task('vendor', (done)=> {
	gulp .src('assest/assets/vendor/*')
		.pipe(gulp.dest('public/assets/vendor'));
		done();
})

gulp.task('vendor-aos', (done)=> {
	gulp .src('assest/assets/vendor/aos/*')
		.pipe(gulp.dest('public/assets/vendor/aos'));
		done();
})

gulp.task('vendor-bootstrap', (done)=> {
	gulp .src('assest/assets/vendor/bootstrap/*')
		.pipe(gulp.dest('public/assets/vendor/bootstrap'));
		done();
})

gulp.task('vendor-bootstrap-css', (done)=> {
	gulp .src('assest/assets/vendor/bootstrap/css/*')
		.pipe(gulp.dest('public/assets/vendor/bootstrap/css'));
		done();
})

gulp.task('vendor-bootstrap-js', (done)=> {
	gulp .src('assest/assets/vendor/bootstrap/js/*')
		.pipe(gulp.dest('public/assets/vendor/bootstrap/js'));
		done();
})

gulp.task('vendor-bootstrap-icons', (done)=> {
	gulp .src('assest/assets/vendor/bootstrap-icons/*')
		.pipe(gulp.dest('public/assets/vendor/bootstrap-icons'));
		done();
})

gulp.task('vendor-bootstrap-icons-fonts', (done)=> {
	gulp .src('assest/assets/vendor/bootstrap-icons/fonts/*')
		.pipe(gulp.dest('public/assets/vendor/bootstrap-icons/fonts'));
		done();
})

gulp.task('vendor-glightbox', (done)=> {
	gulp .src('assest/assets/vendor/glightbox/*')
		.pipe(gulp.dest('public/assets/vendor/glightbox'));
		done();
})

gulp.task('vendor-glightbox-css', (done)=> {
	gulp .src('assest/assets/vendor/glightbox/css/*')
		.pipe(gulp.dest('public/assets/vendor/glightbox/css'));
		done();
})
gulp.task('vendor-glightbox-js', (done)=> {
	gulp .src('assest/assets/vendor/glightbox/js/*')
		.pipe(gulp.dest('public/assets/vendor/glightbox/js'));
		done();
})


gulp.task('vendor-isotope-layout', (done)=> {
	gulp .src('assest/assets/vendor/isotope-layout/*')
		.pipe(gulp.dest('public/assets/vendor/isotope-layout'));
		done();
})

gulp.task('vendor-php-email-form', (done)=> {
	gulp .src('assest/assets/vendor/php-email-form/*')
		.pipe(gulp.dest('public/assets/vendor/php-email-form'));
		done();
})

gulp.task('vendor-purecounter', (done)=> {
	gulp .src('assest/assets/vendor/purecounter/*')
		.pipe(gulp.dest('public/assets/vendor/purecounter'));
		done();
})

gulp.task('vendor-remixicon', (done)=> {
	gulp .src('assest/assets/vendor/remixicon/*')
		.pipe(gulp.dest('public/assets/vendor/remixicon'));
		done();
})
gulp.task('vendor-swiper', (done)=> {
	gulp .src('assest/assets/vendor/swiper/*')
		.pipe(gulp.dest('public/assets/vendor/swiper'));
		done();
})

function compile(watch){
	let bundle = browser('./src/index.js', {debug: true});
	if(watch){
		bundle = watchify(bundle);
		bundle.on('update', () => {
			console.log('bundling.....');
			rebundle();
		});
	}

	function rebundle(){
		bundle
			.transform(babel)
			.bundle()
			.on('error', function (err) {console.log(err); this.emit('end') })
			.pipe(source('index.js'))
			.pipe(rename('app.js'))
			.pipe(gulp.dest('public'));
	}

	rebundle();
}



gulp.task('build', function(){return compile();});
gulp.task('watch', function(){return compile(true);});

gulp.task('default', gulp.series('assest-css','assest-js',
'assest-img','assest-img-blog','assest-img-client',
'assest-img-team','assest-img-portfolio','assest-img-testimonials',
'vendor','vendor-aos','vendor-bootstrap','vendor-bootstrap-css','vendor-bootstrap-js',
'vendor-bootstrap-icons','vendor-bootstrap-icons-fonts',
'vendor-glightbox','vendor-glightbox-css','vendor-glightbox-js',
'vendor-isotope-layout','vendor-php-email-form','vendor-purecounter',
'vendor-remixicon','vendor-swiper','build'));	


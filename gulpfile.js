var gulp        = require('gulp'),
	sass        = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat      = require('gulp-concat'),
	uglifyjs    = require('gulp-uglifyjs'),
	uglifycss   = require('gulp-uglifycss'),
	rename      = require('gulp-rename');


gulp.task('sass', function() {
	return gulp.src('app/sass/main.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});


gulp.task('uglify-js', function() {
  return gulp.src('app/js/*.js')
    .pipe(uglifyjs())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/js/'));
});

gulp.task('uglify-css', function() {
	return gulp.src('app/css/main.css')
	.pipe(uglifycss({

		"maxLineLen": 80,
      	"uglyComments": true
	}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css/'));
});



gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		noyify: false, 
	});
});

gulp.task('watch', ['browser-sync', 'sass', 'uglify-js', 'uglify-css'], function() {
	gulp.watch('app/sass/main.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('build', ['sass', 'uglify-js', 'uglify-css'], function(){

	var buildCss = gulp.src([
		'app/css/main.min.css'
	])
	.pipe(gulp.dest('dist/css'));
	var buildJs = gulp.src([
		'app/js/main.min.js'
	])
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src([
		'app/index.html'
	])
	.pipe(gulp.dest('dist/'))
});
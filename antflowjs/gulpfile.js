var gulp = require('gulp');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('inject', function(){
	var wiredep = require('wiredep').stream;
	var inject = require('gulp-inject');

	var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {read: false});
	var injectOptions = {
		ignorePath: '/public'
	};

	var options = {
		bowerJson: require('./bower.json'),
		directory: './public/lib',
		ignorePath: '../../public'
	};

	return gulp.src('./src/views/*.ejs')
		.pipe(wiredep(options))
		.pipe(inject(injectSrc, injectOptions))
		.pipe(gulp.dest('./src/views'));
});

gulp.task('run', ['inject'], function(cb){
	var exec = require('child_process').exec;
	
	exec('node server.js', function(err, stdout, stderr){
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});
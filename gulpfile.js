var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('QA', function() {
	require('./config/endpoint')('QA');
	runTest();
});


function runTest() {
	return gulp
		.src(['testcase/test.js'], { read: false})
		.pipe(mocha({
			reporter: 'spec'
		}));
}
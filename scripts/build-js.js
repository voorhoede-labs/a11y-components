const concat = require('gulp-concat');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const onStreamError = require('../lib/on-stream-error');
const paths = require('../lib/paths');

gulp.src(paths.src + 'components/**/*.js')
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(concat('index.js'))
	.pipe(uglify())
	.on('error', onStreamError)
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(paths.static));

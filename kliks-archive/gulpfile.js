const gulp        = require('gulp');
const fileinclude = require('gulp-file-include');
const ghPages = require('gulp-gh-pages');
const sass = require('gulp-sass');
const server = require('browser-sync').create();

const { watch, series } = require('gulp');

const paths = {
  scripts: {
    src: './',
    dest: './build/'
  }
};

// Reload Server
async function reload() {
  server.reload();
}

// Copy assets after build
async function copyAssets() {
  gulp.src(['assets/**/*'])
    .pipe(gulp.dest(paths.scripts.dest));
}

async function includeHTML(){
  return gulp.src([
    '*.html',
    '!./includes/header.html', // ignore
    '!./includes/footer.html' // ignore
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}

// Build files html and reload server
async function buildAndReload() {
  await includeHTML();
  await copyAssets();
  reload();
}

//deploy to github pages
gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

// Sass compiler
async function compileSass() {
  gulp.src('assets/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
}

gulp.task('icons', function() {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('assets/webfonts/'));
});

exports.includeHTML = includeHTML;

exports.default = async function() {
  // Init serve files from the build folder
  server.init({
    server: {
      baseDir: paths.scripts.dest
    }
  });
  // Build and reload at the first time
  buildAndReload();
  // Watch Sass task
  watch('assets/scss/styles.scss',  series(compileSass));
  // Watch task
  watch(["*.html","assets/**/*"], series(buildAndReload));
  
};
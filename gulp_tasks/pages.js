var gulp            = require( 'gulp' ),
    plumber         = require( 'gulp-plumber' );



// Pages
gulp.task( 'pages', function() {
  return gulp.src( [ gulp.paths.pages ] )
    .pipe( plumber({
      errorHandler: function( error ) {
        console.log( error.message );
        this.emit( 'end' );
    }}))
    .pipe( gulp.dest( gulp.paths.pagesDest ) );

});

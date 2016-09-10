var gulp            = require( 'gulp' ),
    plumber         = require( 'gulp-plumber' ),
    browserSync     = require( 'browser-sync' );



// Images
gulp.task( 'images', function() {
  return gulp.src( [ gulp.paths.images ] )
    .pipe( plumber({
      errorHandler: function( error ) {
        console.log( error.message );
        this.emit( 'end' );
    }}))
    .pipe( gulp.dest( gulp.paths.imagesDest ) )
    .pipe( browserSync.reload( {stream:true} ) );
});

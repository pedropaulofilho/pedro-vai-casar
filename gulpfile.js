// 
// Use 'node_modules' and 'www' directories from
// branch Develop before run any task
// --------------------------------------------------------- //


// Modules
// --------------------------------------------------------- //
var gulp = require('gulp');

// Tasks
// --------------------------------------------------------- //
gulp.task( 'build', function() {
  return gulp.src('www/**/*.*')
    .pipe( gulp.dest( './' ) );

});

// Default
// --------------------------------------------------------- //
gulp.task( 'default', ['build'] );


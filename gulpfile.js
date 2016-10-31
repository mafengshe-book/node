var gulp = require("gulp"),
  deploy = require("gulp-gh-pages");

var file = require('gulp-file');

gulp.task('deploy', function () {
  return gulp.src("_book/**/*.*")
    .pipe(file('CNAME', "node.books.mafengshe.com"))
    .pipe(deploy({cname:'node.books.mafengshe.com'}))
    .on("error", function(err){
      console.log(err)
    })
});
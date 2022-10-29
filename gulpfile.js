const gulp = require("gulp");
const gulpUglify = require("gulp-uglify");
const clean = require("gulp-clean");

gulp.task("minify-js-index", async function () {
     gulp.src(["index.js"]).pipe(gulpUglify()).pipe(gulp.dest("dist/"));
});

gulp.task("minify-js-routes", async function () {
     gulp.src(["src/routes/*.js"])
          .pipe(gulpUglify())
          .pipe(gulp.dest("dist/routes"));
});
gulp.task("minify-js-routes", async function () {
     gulp.src(["src/routes/*.js"])
          .pipe(gulpUglify())
          .pipe(gulp.dest("dist/routes"));
});
gulp.task("minify-js-models", async function () {
     gulp.src(["src/models/*.js"])
          .pipe(gulpUglify())
          .pipe(gulp.dest("dist/models"));
});
gulp.task("minify-js-config", async function () {
     gulp.src(["src/config/*.js"])
          .pipe(gulpUglify())
          .pipe(gulp.dest("dist/config"));
});

gulp.task("clean", function () {
     return gulp
          .src("dist", {
               read: false,
               allowEmpty: true,
          })
          .pipe(clean());
});

gulp.task(
     "build",
     gulp.series(
          "clean",
          "minify-js-index",
          "minify-js-routes",
          "minify-js-models",
          "minify-js-config"
     )
);

const { dest, src, watch } = require("gulp");
const sass = require("gulp-dart-sass");
const csso = require("gulp-csso");
const prefix = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

function scss() {
  return src("scss/**/*.scss")
    .pipe(sass())
    .pipe(prefix())
    .pipe(csso())
    .pipe(sourcemaps.write("."))
    .pipe(dest("./"))
    .pipe(browserSync.stream());
}

exports.scss = scss;

exports.default = function () {
  browserSync.init({
    server: {
      baseDir: ".",
      index: "/index.html",
    },
  });
  watch("scss/**/*.scss", scss);
  watch("./*.html").on("change", browserSync.reload);
};

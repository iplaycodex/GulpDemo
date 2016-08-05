// 引入 gulp
var gulp = require('gulp');

// 引入组件
var minifycss = require('gulp-clean-css');//css压缩
var uglify = require('gulp-uglify');//js压缩
var concat = require('gulp-concat');//文件合并


//合并、压缩、重命名css
gulp.task('css', function () {
    return gulp.src(['/Content/flags/famfamfam-flags.css', '/Scripts/sweetalert/sweet-alert.css',
        'Content/meronic/assets/global/plugins/simple-line-icons/simple-line-icons.min.css', 'Content/meronic/assets/global/plugins/bootstrap/css/bootstrap.min.css', 'Content/meronic/assets/global/plugins/uniform/css/uniform.default.css',
        'Content/meronic/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css', 'Content/meronic/assets/global/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css', 'Content/meronic/assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css',
        'Content/meronic/assets/global/plugins/fullcalendar/fullcalendar.min.css', 'Content/meronic/assets/global/plugins/jqvmap/jqvmap/jqvmap.css', 'Content/meronic/assets/global/plugins/bootstrapValidator/css/bootstrapValidator.css',
        'Content/meronic/assets/admin/pages/css/tasks.css', 'Content/meronic/assets/global/css/components.css', 'Content/meronic/assets/global/css/plugins.css', 'Content/meronic/assets/admin/layout/css/layout.css', 'Content/meronic/assets/admin/layout/css/themes/darkblue.css',
        'Content/meronic/assets/admin/layout/css/custom.css', 'Content/meronic/assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css', 'Scripts/sweetalert/sweet-alert.css', 'Content/fsmStyle/fsmCommon.css', 'Views/Shared/_Layout_dropdownMenu.css'])
      .pipe(minifycss())
      .pipe(concat('layout.min.css'))
      .pipe(gulp.dest('release/layout/css'));
});


// 合并、压缩js文件
gulp.task('js', function () {
    return gulp.src([
        'Content/meronic/assets/global/plugins/jquery.lazyload.min.js',
        'Content/meronic/assets/global/plugins/jqvmap/jqvmap/jquery.vmap.js',
        'Content/meronic/assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.russia.js',
        'Content/meronic/assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.world.js',
        'Content/meronic/assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.europe.js',
        'Content/meronic/assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.germany.js',
        'Content/meronic/assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.usa.js',
        'Content/meronic/assets/global/plugins/jqvmap/jqvmap/data/jquery.vmap.sampledata.js',
        'Content/meronic/assets/global/plugins/flot/jquery.flot.min.js',
        'Content/meronic/assets/global/plugins/flot/jquery.flot.resize.min.js',
        'Content/meronic/assets/global/plugins/flot/jquery.flot.categories.min.js',
        'Content/meronic/assets/global/plugins/fullcalendar/fullcalendar.min.js',
        'Content/meronic/assets/global/plugins/jquery-easypiechart/jquery.easypiechart.min.js',
        'Content/meronic/assets/global/plugins/raphael-min.js',
        'Content/meronic/assets/global/plugins/jquery.sparkline.min.js',
        'Content/meronic/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datetimepicker.min.js',
        'Content/meronic/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datetimepicker.fr.js',
        'Content/themes/amcharts/amcharts.js',
        'Content/themes/amcharts/serial.js',
        'Content/themes/amcharts/pie.js',
        'Content/themes/amcharts/themes/light.js',
        'Content/themes/amcharts/lang/zh.js',
        'Scripts/allen/js2.js',
        'Content/meronic/assets/global/scripts/portlet-draggable.js',
        'Areas/HomePage/Content/IndexOfCustomerService/charts.js',
    ])
      .pipe(uglify())
      .pipe(concat('homepage.min.js'))
      .pipe(gulp.dest('release/homepage'));
});

// 默认任务
gulp.task('default', function () {
    gulp.run('js', 'css');//

    // Watch .css files
    gulp.watch('Areas/*.css', ['css']);

    // Watch .js files
    gulp.watch('Areas/*.js', ['js']);
});
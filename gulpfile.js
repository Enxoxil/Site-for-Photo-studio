/* 
===================================== 

            GULP builder

=====================================
*/

/*
=====================================
        Для установки сборщика в новый 
    проект надо скопировать (
       - #src,
       - gulpfile.js,
       - package.json
    ) в корень проекта, после запустить
    терминал и прописать 'npm i'.
        Будут установлены все пакеты.
        После установки запускаем GULP 
=====================================
*/

// START ===== variable =====
let p_Fold = require("path").basename(__dirname); // путь к продакшн папке
// имя папки будет взято то в которой лежат исходники
let s_Fold = "#src"; // путь к исходникам
let fs = require("fs"); // вспомогательная переменная для автодобавления шрифтов в scss
// END ===== variable =====

// START ===== path =====
let path = {
    build: {
        // Пути к папкам для продакшена
        html: p_Fold + "/",
        css: p_Fold + "/css/",
        js: p_Fold + "/js/",
        img: p_Fold + "/img/",
        fonts: p_Fold + "/fonts/",
        video: p_Fold + "/video",
    },
    src: {
        //Пути к папкам с исходниками
        html: [s_Fold + "/*.html", "!" + s_Fold + "/_*.html"], // Ловим все файлы с .html и исключаем все файли с _.html
        css: s_Fold + "/scss/style.scss",
        js: s_Fold + "/js/script.js",
        img: s_Fold + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: s_Fold + "/fonts/*.ttf",
        video: s_Fold + "/video/**/*.mp4",
    },
    watch: {
        //Следим за исходниками
        html: s_Fold + "/**/*.html",
        css: s_Fold + "/scss/**/*.scss",
        js: s_Fold + "/js/**/*.js",
        img: s_Fold + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        video: s_Fold + "/video/**/*.mp4",
    },
    clean: "./" + p_Fold + "/", // Удаление папки проекта при запуске галпа
};
// END ===== path =====

// START ===== add-ons gulp =====

let { src, dest } = require("gulp"), // инициализация аддонов
    gulp = require("gulp"),
    browsersync = require("browser-sync").create(),
    fileinclude = require("gulp-file-include"),
    del = require("del"),
    autoprefixer = require("gulp-autoprefixer"),
    group_media = require("gulp-group-css-media-queries"),
    clean_css = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify-es").default,
    imagemin = require("gulp-imagemin"),
    webp = require("gulp-webp"),
    webphtml = require("gulp-webp-html"),
    webpcss = require("gulp-webpcss"),
    svgSprite = require("gulp-svg-sprite"),
    ttf2woff = require("gulp-ttf2woff"),
    ttf2woff2 = require("gulp-ttf2woff2"),
    fonter = require("gulp-fonter");

const scss = require("gulp-sass")(require("sass"));

// END ===== add-ons gulp =====

// START ===== function =====

function browserSync() {
    // функция запуска сервера аддон browsersync
    browsersync.init({
        // инициализация
        server: {
            baseDir: "./" + p_Fold + "/",
        },
        port: 3000,
        notify: false,
    });
}

function html() {
    // Работа с HTML
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(webphtml()) /* заменит тег img в HTML на <picture>
        <source srcset= "адрес webp изображения">
        <img scr="адрес обычного изображения>"
        </picture>*/
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream());
}

function css() {
    // Работа со стилями
    return src(path.src.css)
        .pipe(
            // scss to css
            scss({
                outputStyle: "expanded",
            }),
        )
        .pipe(group_media()) // группиовка медиазапросов
        .pipe(
            // Автопрефиксер для всех браузеров последние 5 версий
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true, // стиль написания
            }),
        )
        .pipe(
            webpcss({
                // добавление стилей webp формата в css с помощью функции в js и автоматически добавит соответствующий класс
                webpClass: ".webp",
                noWebpClass: ".no-webp",
            }),
        )
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(
            // минификация css файла с подключением в HTML
            rename({
                extname: ".min.css",
            }),
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
}

function js() {
    // Работа с JS
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(uglify()) // минификация js файла
        .pipe(
            rename({
                extname: ".min.js",
            }),
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream());
}
function video() {
    return src(path.src.video)
        .pipe(dest(path.build.video))
        .pipe(browsersync.stream());
}
function images() {
    // Работа с изображениями
    return src(path.src.img)
        .pipe(
            // сжатие webp формата
            webp({
                quality: 70,
            }),
        )
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(
            // сжатие изображений
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3,
            }),
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream());
}

gulp.task("svgSprite", function () {
    // ВРУЧНУЮ! делаем sprite
    // запустить через терминал gulp svgSprite
    return gulp
        .src([s_Fold + "/iconsprite/*.svg"])
        .pipe(
            svgSprite({
                mode: {
                    stack: {
                        sprite: "../icons/icons.svg",
                        //example: true,
                    },
                },
            }),
        )
        .pipe(dest(path.build.img));
});

gulp.task("otf2ttf", function () {
    // ВРУЧНУЮ! Преобразовуем otf to ttf
    // запустить задачу gulp otf2ttf в консоли
    return src([s_Fold + "/fonts/*.otf"])
        .pipe(
            fonter({
                formats: ["ttf"],
            }),
        )
        .pipe(dest(s_Fold + "/fonts/"));
    // выгружаем в папку с исходниками для дальнейшего авто преобразования в woff woff2
});

function fonts() {
    // работаем со шрифтами
    //конвертер шрифтов в woff и woff2
    src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
    return src(path.src.fonts).pipe(ttf2woff2()).pipe(dest(path.build.fonts));
}

function fontsStyler() {
    // Ф-я подключит шрифты в fonts.scss, но в ручную меняем в fonts.scss
    // font family (1) font weight (3) font style (4)
    let file_content = fs.readFileSync(s_Fold + "/scss/fonts.scss");
    if (file_content == "") {
        fs.writeFile(s_Fold + "/scss/fonts.scss", "", techFunc);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split(".");
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(
                            s_Fold + "/scss/fonts.scss",
                            '@include font("' +
                                fontname +
                                '", "' +
                                fontname +
                                '", "400", "normal");\r\n',
                            techFunc,
                        );
                    }
                    c_fontname = fontname;
                }
            }
        });
    }
}

function techFunc() {} // сервисная функция

function watchFiles() {
    // Функция следилка
    gulp.watch([path.watch.html], html); // Ловим изменения в html и запускаем ф-ю html
    gulp.watch([path.watch.js], js); // Ловим изменения в js
    gulp.watch([path.watch.css], css); // ловим изменения в css и запускаем ф-ю css
    gulp.watch([path.watch.img], images); // Ловим изменения в images
    gulp.watch([path.watch.video], video); // Ловим изменения в video
}

function clean() {
    return del(path.clean);
}
// END ===== function =====

// START ===== сценарии =====
let build = gulp.series(
    // запуск сценария который запускает ниже перечисленные функции
    clean,
    gulp.parallel(css, html, js, images, fonts, video),
    gulp.parallel(fontsStyler, browserSync),
);

let watch = gulp.parallel(build, watchFiles);
// Стартовый сценарий
// END ===== сценарии =====

// START ===== экспортируем аддоны в переменные для работы =====
exports.fontsStyler = fontsStyler;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = video;
exports.build = build;
exports.watch = watch;
exports.default = watch;

// END ===== экспортируем аддоны в переменные для работы =====

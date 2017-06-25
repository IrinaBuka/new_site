
var common_path = "js";


requirejs.config({
    waitSeconds: 15,
    shim: {

        bootstrap: {
            deps: ['jquery']
        },

    },
    paths: {
        jquery: "common/jquery-3.1.1.min",
        bootstrap: "common/bootstrap.min",
        wow: "common/wow",
        slick: "common/slick.min",
    },
    baseUrl: common_path,
    urlArgs: 'v=0.12'
});


requirejs(['app/common/script'], function(common) {

    common.init();
});
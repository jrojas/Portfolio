var portfolioCore = (function ($, window, undefined) {
    //Varibles for the Core Class 
    var doc = window.document;

    //Finds DOM elements for caching   

    var init = function () {


    };

    var findSelector = function (selector, context) {


        var ret = {},
            that = this,
            jqEls, i = 0;

        if (context && context.find) {
            jqEls = context.find(selector);
        } else {
            jqEls = $(selector);
        }

        ret = jqEls.get();
        ret.length = jqEls.length;
        ret.query = function (sel) {
            return that.query(sel, jqEls);
        }
        return ret;



    };

    var bind = function (el, evt, fn) {
        $(el).on(evt, fn);

    };

    var pub = function (evt) {

        $(doc).trigger(evt, evt.data);

    };

    var sub = function (evt, fn) {

        $(doc).on(evt, fn);


    };

    var append = function (app, template) {



        $(app).html(template.innerText.trim());





    }

    return {

        findSelector: findSelector,
        bind: bind,
        pub: pub,
        sub: sub,
        init: init,
        append: append





    };

}(jQuery, window));
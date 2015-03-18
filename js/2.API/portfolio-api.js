var portfolioAPI = (function (Core) {

    var init = function () {

    };

    var find = function (el) {

        return Core.findSelector('#' + el);

    };

    var bind = function (el, evt, fn) {

        Core.bind(el, evt, fn);

    };

    var publish = function (evt) {

        Core.pub(evt);



    };

    var subscribe = function (evt, fn) {
        Core.sub(evt, fn);

    };

    var append = function (app, template) {

        Core.append(app, template);
    }





    return {
        start: init,
        find: find,
        bind: bind,
        publish: publish,
        subscribe: subscribe,
        append: append


    };
})(portfolioCore);
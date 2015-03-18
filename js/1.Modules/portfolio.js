"use strict";
// Start Router
var Router = (function (api) {
    // var app = api.find('app')[0];
    var routes = [{
            hash: '#home',
            template: api.find('home-id-template')[0],
            appContainer: api.find('app')[0]
            },
        {
            hash: '#portfolio',
            template: api.find('portfolio-id-template')[0],
            appContainer: api.find('app')[0]
                },
        {
            hash: '#about',
            template: api.find('about-id-template')[0],
            appContainer: api.find('app')[0]

                },
        {
            hash: '#contact',
            template: api.find('contact-id-template')[0],
            appContainer: api.find('app')[0]

                }


                 ];

    var defaultRoute = '#home';
    var currentHash = '';

    var startRouting = function () {
        window.location.hash = window.location.hash || defaultRoute;
        setInterval(hashCheck, 100);
    }

    var hashCheck = function () {
        if (window.location.hash != currentHash) {
            for (var i = 0, currentRoute; currentRoute = routes[i++];) {
                if (window.location.hash == currentRoute.hash) {

                    api.append(currentRoute.appContainer, currentRoute.template);

                }

                currentHash = window.location.hash

            }
        }
    }



    return {
        startRouting: startRouting
    };
})(portfolioAPI);

// Start Navigation

var NavigationModule = (function (api) {
    var $homeid, $portfolioid, $aboutid, $contactmeid

    var init = function () {

        //Find & Bind DOM Elements       

        $homeid = api.find('home-id')[0];
        $portfolioid = api.find('portfolio-id')[0];
        $aboutid = api.find('about-id')[0];
        $contactmeid = api.find('contact-id')[0];

        //Bind click events

        api.bind($homeid, 'click', _handleClick);
        api.bind($portfolioid, 'click', _handleClick);
        api.bind($aboutid, 'click', _handleClick);
        api.bind($contactmeid, 'click', _handleClick);


    }

    //private function

    var _handleClick = function () {
        var data = this;
        if (data) {
            api.publish({
                type: data.id,
                data: data


            });

        }
    }



    return {
        start: init


    };
})(portfolioAPI);

/*
// Start Pages
var PageModule = (function (api) {
    var $homeidtemplate, $portfolioid, $aboutid, $contactmeid, $erroridtemplate, app

    var init = function () {
        //Find DOM Elements

        $homeidtemplate = api.find('home-id-template')[0];
        $portfolioid = api.find('portfolio-id-template')[0];
        $aboutid = api.find('about-id-template')[0];
        $contactmeid = api.find('contact-id-template')[0];
        $erroridtemplate = api.find('error-id-template')[0];
        app = api.find('app')[0];

        //listen click events

        api.subscribe({
            'home-id': _loadPage,
            'portfolio-id': _loadPage,
            'about-id': _loadPage,
            'contact-id': _loadPage
        });


    }

    //private function




    var _loadPage = function (e, type) {




        if (type.id === $homeidtemplate.className) {

            api.append(app, $homeidtemplate);


        }



        if (type.id === $portfolioid.className) {

            api.append(app, $portfolioid)


        }

        if (type.id === $aboutid.className) {

            api.append(app, $aboutid);

        }
        if (type.id === $contactmeid.className) {

            api.append(app, $contactmeid);




        }


    }


    return {
        start: init


    };

})(portfolioAPI);


*/



Router.startRouting();
NavigationModule.start();
//PageModule.start()
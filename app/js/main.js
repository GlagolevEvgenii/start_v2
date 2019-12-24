// style for development
function pageWidget(pages) {
    var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
    widgetWrap.prependTo("body");
    for (var i = 0; i < pages.length; i++) {
        $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
    }
    var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
    widgetStilization.prependTo(".widget_wrap");
}
$(document).ready(function ($) {
     pageWidget(['index']);
});
// style for development


(function () {
    "use strict";
    var body = document.querySelector('body'),
        isMobile = false,
        scrollTopPosition,
        browserYou,
        _winWidth = $(window).outerWidth();
    var genFunc = {
        initialized: false,
        initialize: function () {
            if (this.initialized) return;
            this.initialized = true;
            this.build();
        },
        build: function () {
            // browser
            browserYou = this.getBrowser();
            if (browserYou.platform == 'mobile') {
                isMobile = true;
                document.documentElement.classList.add('mobile');
            } else {
                document.documentElement.classList.add('desktop');
            }
            if ((browserYou.browser == 'ie')) {
                document.documentElement.classList.add('ie');
            }
            if (navigator.userAgent.indexOf("Edge") > -1) {
                document.documentElement.classList.add('edge');
            }
            if (navigator.userAgent.search(/Macintosh/) > -1) {
                document.documentElement.classList.add('macintosh');
            }
            if ((browserYou.browser == 'ie' && browserYou.versionShort < 9) || ((browserYou.browser == 'opera' || browserYou.browser == 'operaWebkit') && browserYou.versionShort < 18) || (browserYou.browser == 'firefox' && browserYou.versionShort < 30)) {
                alert('Обновите браузер');
            }
            if (document.querySelector('.yearN') !== null) {
                this.copyright();
            }
        },
        copyright: function () {
            var yearBlock = document.querySelector('.yearN'),
                yearNow = new Date().getFullYear().toString();
            if (yearNow.length) {
                yearBlock.innerText = yearNow;
            }
        },
        getBrowser: function () {
            var ua = navigator.userAgent;
            var bName = function () {
                if (ua.search(/Edge/) > -1) return "edge";
                if (ua.search(/MSIE/) > -1) return "ie";
                if (ua.search(/Trident/) > -1) return "ie11";
                if (ua.search(/Firefox/) > -1) return "firefox";
                if (ua.search(/Opera/) > -1) return "opera";
                if (ua.search(/OPR/) > -1) return "operaWebkit";
                if (ua.search(/YaBrowser/) > -1) return "yabrowser";
                if (ua.search(/Chrome/) > -1) return "chrome";
                if (ua.search(/Safari/) > -1) return "safari";
                if (ua.search(/maxHhon/) > -1) return "maxHhon";
            }();

            var version;
            switch (bName) {
                case "edge":
                    version = (ua.split("Edge")[1]).split("/")[1];
                    break;
                case "ie":
                    version = (ua.split("MSIE ")[1]).split(";")[0];
                    break;
                case "ie11":
                    bName = "ie";
                    version = (ua.split("; rv:")[1]).split(")")[0];
                    break;
                case "firefox":
                    version = ua.split("Firefox/")[1];
                    break;
                case "opera":
                    version = ua.split("Version/")[1];
                    break;
                case "operaWebkit":
                    bName = "opera";
                    version = ua.split("OPR/")[1];
                    break;
                case "yabrowser":
                    version = (ua.split("YaBrowser/")[1]).split(" ")[0];
                    break;
                case "chrome":
                    version = (ua.split("Chrome/")[1]).split(" ")[0];
                    break;
                case "safari":
                    version = ua.split("Safari/")[1].split("")[0];
                    break;
                case "maxHhon":
                    version = ua.split("maxHhon/")[1];
                    break;
            }
            var platform = 'desktop';
            if (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) platform = 'mobile';
            var browsrObj;
            try {
                browsrObj = {
                    platform: platform,
                    browser: bName,
                    versionFull: version,
                    versionShort: version.split(".")[0]
                };
            } catch (err) {
                browsrObj = {
                    platform: platform,
                    browser: 'unknown',
                    versionFull: 'unknown',
                    versionShort: 'unknown'
                };
            }
            return browsrObj;
        },
    };
    genFunc.initialize();
})();



$(document).ready(function ($) {
    ///*===============================some heights========================================*/
    function heightBlock() {
        $('.js_height-block').each(function (i, e) {
                var elH = e.getElementsByClassName("height");
                var maxHeight = 0;
                for (var i = 0; i < elH.length; ++i) {
                    elH[i].style.height = "";
                    if (maxHeight < elH[i].clientHeight) {
                        maxHeight = elH[i].clientHeight;
                    }
                }
                for (var i = 0; i < elH.length; ++i) {
                    elH[i].style.height = maxHeight + "px";
                }
            }
        )
    }
    setTimeout(function () {
        heightBlock();
    }, 1000);



});



				
				
		
		



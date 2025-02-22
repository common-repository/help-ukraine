// This script is the prettified version of the script at https://helpukrainewinwidget.org/cdn/widget.js
// It is copied here to minimize concerns about adding third-party JavaScript to sites and beautified to allow for code review.
// It also includes some changes to allow translation of the strings inside the widget.

! function() {
    function t(t) {
        return t && t.__esModule ? t.default : t
    }
    var e;
    e = "@charset \"UTF-8\";.huww-widget{background-color:#fff;border-radius:12.8px;box-shadow:0 4px 12px rgba(0,0,0,.1);z-index:99999}.huww-widget.huww-widget-top-left{left:25.6px;position:fixed;top:25.6px}.huww-widget.huww-widget-top-right{position:fixed;right:25.6px;top:25.6px}.huww-widget.huww-widget-bottom-right{bottom:25.6px;position:fixed;right:25.6px}.huww-widget.huww-widget-bottom-left{bottom:25.6px;left:25.6px;position:fixed}.huww-widget .huww-logo{position:absolute;right:-12.8px;top:-12.8px}.huww-widget-four{padding:19.2px 12.8px 12.8px 25.6px}.huww-widget-four .huww-half-flag{bottom:0;left:0;position:absolute;top:0;width:12.8px}.huww-widget-four .huww-hashtag{margin-bottom:12.8px;margin-top:3.2px}.huww-widget-three{padding:25.6px 12.8px 12.8px;text-align:center}.huww-widget-three .huww-title{color:#0b3c94;font-size:22.4px;line-height:28.8px}.huww-widget-three .huww-subtitle{color:#f7d648;padding-bottom:12.8px}.huww-widget-two{margin-top:25.6px;padding:25.6px 12.8px 12.8px;text-align:center}.huww-widget-two .huww-divider{background:#e5e5e5;display:block;height:1px;margin:12.8px 0;width:100%}.huww-widget-two .huww-flag{margin:-51.2px auto 12.8px}.huww-widget-one{margin-right:19.2px;padding:12.8px 12.8px 12.8px 76.8px}.huww-widget-one .huww-flag{bottom:12.8px;height:57.6px;left:12.8px;position:absolute;top:12.8px}.huww-flag{width:51.2px}.huww-flag .huww-flag-top{background:#2559b5;border-radius:12.8px 12.8px 0 0;height:25.6px;width:51.2px}.huww-flag .huww-flag-bottom{background:#f7d648;border-radius:0 0 12.8px 12.8px;height:25.6px;width:51.2px}.huww-half-flag .huww-half-flag-top{background:#2559b5;border-radius:12.8px 0 0 0;height:25.6px;height:50%;width:51.2px;width:100%}.huww-half-flag .huww-half-flag-bottom{background:#f7d648;border-radius:0 0 0 12.8px;height:25.6px;height:50%;width:51.2px;width:100%}.huww-title{font-size:20.8px;line-height:25.6px}.huww-subtitle,.huww-title{font-family:inter var,-apple-system,BlinkMacSystemFont,helvetica neue,Helvetica,sans-serif;font-weight:700;margin:0;opacity:.8}.huww-subtitle{font-size:22.4px;line-height:28.8px}.huww-link{color:#3798ce;font-family:Roboto,sans-serif;font-size:19.2px;font-weight:500;line-height:22.4px;text-decoration:none}.huww-link:hover:after{content:\"▸\"}.huww-logo{background-color:#015bbb;border-radius:25.6px;display:block;height:25.6px;overflow:hidden;text-decoration:none;transition:width .3s;width:25.6px}.huww-logo .huww-logo-img{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle fill='%23015BBB' cx='16' cy='16' r='16'/%3E%3Cg fill='%23FFF' fill-rule='nonzero'%3E%3Cpath d='M8.794 22.096h1.302v-1.26H8.934c-.784 0-1.274-.504-1.274-1.288v-1.442c0-.91-.21-1.764-1.05-2.128.84-.308 1.064-1.12 1.064-2.044V12.45c0-.784.476-1.302 1.26-1.302h1.162V9.902H8.78c-1.638 0-2.646.896-2.646 2.17v1.904c0 .84-.084 1.344-1.134 1.344v1.358c1.036 0 1.134.588 1.134 1.386v1.848c0 1.274 1.022 2.184 2.66 2.184ZM23.202 22.096c1.638 0 2.66-.91 2.66-2.184v-1.848c0-.798.098-1.386 1.134-1.386V15.32c-1.05 0-1.134-.504-1.134-1.344v-1.904c0-1.274-1.008-2.17-2.646-2.17H21.9v1.246h1.162c.784 0 1.26.518 1.26 1.302v1.484c0 .924.224 1.736 1.064 2.044-.84.364-1.05 1.218-1.05 2.128v1.442c0 .784-.49 1.288-1.274 1.288H21.9v1.26h1.302Z'/%3E%3C/g%3E%3Cpath d='M20.17 16.325 16.004 20.5l-4.165-4.175m0 0a2.834 2.834 0 0 1-.715-2.849 2.787 2.787 0 0 1 2.185-1.936 2.76 2.76 0 0 1 2.695 1.094 2.76 2.76 0 0 1 2.691-1.08 2.788 2.788 0 0 1 2.178 1.931 2.835 2.835 0 0 1-.705 2.843' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E\");background-size:cover;height:25.6px;position:absolute;right:0;top:0;width:25.6px}.huww-logo .huww-logo-text{color:#fff;font-family:Roboto,sans-serif;font-size:12.8px;font-weight:600;line-height:25.6px;overflow:hidden;position:absolute;right:25.6px;top:0;white-space:nowrap;width:70.4px}.huww-logo:hover{width:115.2px}.huww-button{background:rgba(55,152,206,.12);border-radius:6.4px;color:#3798ce;display:block;font-family:Roboto,sans-serif;font-size:19.2px;font-weight:500;line-height:41.6px;text-align:center;text-decoration:none}.huww-button:hover{text-decoration:underline}.huww-hashtag{color:#000;font-family:Roboto,sans-serif;font-size:19.2px;font-weight:400;margin:0;opacity:.6}";
    var o = "https://helpukrainewin.org",
        i = ["top-left", "top-right", "bottom-right", "bottom-left"],
        w = ["two", "three", "four"];

    function h(t, e, o) {
        return t && "string" == typeof t && -1 !== e.indexOf(t) ? t : o
    }

    function n() {
        var t = arguments[0];
        "string" == typeof t && (t = document.createElement(t));
        var e = 1,
            o = arguments[1];
        if (o && "object" == typeof o && null == o.nodeType && !Array.isArray(o)) {
            for (var i in o)
                if (Object.prototype.hasOwnProperty.call(o, i)) {
                    var w = o[i];
                    "string" == typeof w ? t.setAttribute(i, w) : null != w && (t[i] = w)
                } e++
        }
        for (; e < arguments.length; e++) a(t, arguments[e]);
        return t
    }

    function a(t, e) {
        if ("string" == typeof e) t.appendChild(document.createTextNode(e));
        else if (null == e);
        else if (null != e.nodeType) t.appendChild(e);
        else {
            if (!Array.isArray(e)) throw new RangeError("Unsupported child node: " + e);
            for (var o = 0; o < e.length; o++) a(t, e[o])
        }
    }

    function l(t) {
        return n("div", {
            class: "huww-widget huww-widget-two huww-widget-".concat(t)
        }, g(), n("p", {
            class: "huww-title"
        }, helpUkraine.stop_war_help), n("div", {
            class: "huww-divider"
        }), n("a", {
            class: "huww-link",
            href: o,
            target: "_blank"
        }, helpUkraine.see_what_do), p())
    }

    function u(t) {
        return n("div", {
            class: "huww-widget huww-widget-three huww-widget-".concat(t)
        }, n("p", {
            class: "huww-title"
        }, helpUkraine.stop_war), n("p", {
            class: "huww-subtitle"
        }, helpUkraine.help_ukraine), n("a", {
            class: "huww-button",
            href: o,
            target: "_blank"
        }, helpUkraine.see_how), p())
    }

    function d(t) {
        return n("div", {
            class: "huww-widget huww-widget-four huww-widget-".concat(t)
        }, n("p", {
            class: "huww-title"
        }, helpUkraine.help_ukraine_win), n("p", {
            class: "huww-hashtag"
        }, helpUkraine.hashtag), n("a", {
            class: "huww-link",
            href: o,
            target: "_blank"
        }, helpUkraine.see_how_help), p(), n("div", {
            class: "huww-half-flag"
        }, n("div", {
            class: "huww-half-flag-top"
        }), n("div", {
            class: "huww-half-flag-bottom"
        })))
    }

    function p() {
        return n("a", {
            class: "huww-logo",
            href: "https://helpukrainewinwidget.org",
            target: "_blank"
        }, n("span", {
            class: "huww-logo-img"
        }), n("span", {
            class: "huww-logo-text"
        }, helpUkraine.get_widget))
    }

    function g() {
        return n("div", {
            class: "huww-flag"
        }, n("div", {
            class: "huww-flag-top"
        }), n("div", {
            class: "huww-flag-bottom"
        }))
    }

    function s() {
        var o, n, a;
        o = document.createElement("style"), document.head.appendChild(o), o.appendChild(document.createTextNode(t(e))),
            function(t) {
                document.body.append((e = t.widgetType, o = t.widgetPosition, {
                    two: l,
                    three: u,
                    four: d
                } [e](o)));
                var e, o
            }((n = document.getElementById("help-ukraine-win"), {
                widgetPosition: helpUkraine.position,
                widgetType: helpUkraine.variation
            }))
    }
    "loading" !== document.readyState ? setTimeout(s) : document.addEventListener("DOMContentLoaded", s)
}();

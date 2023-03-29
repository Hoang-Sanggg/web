(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define('main', ['exports'], factory) :
            (global = global || self, factory(global.main = {}));
}(this, (function (exports) {
    'use strict';

    const globalJS = {
        autoFillNoImage: () => {
            setTimeout(() => {
                $("img").each(function () {
                    if ($(this).hasAttr("data-src")) {
                        if ($(this).attr("data-src") === "") {
                            $(this).attr("data-src", "/no-image.png");
                            $(this).attr("src", "/no-image.png");
                            $(this).addClass("noImage");
                        }
                    } else if ($(this).hasAttr("src")) {
                        if ($(this).attr("src") === "") {
                            $(this).attr("src", "/no-image.png");
                            $(this).addClass("noImage");
                        }
                    }
                });
            }, 150);
        },
        autoClone: () => {
            var cloneId = $("[id*='autoClone-']");
            cloneId.each(function (e) {
                var id = $(this).attr("id").slice(10); // console.log(id);

                $(this).clone().appendTo("[id*='autoCloneHere-" + id + "']");
            });
        },
        setBackground: () => {
            var position = ["", "top", "left", "right", "bottom"];
            jQuery.each(position, function (index, item) {
                //
                //
                $(`[setBackground${item}]`).each(function () {
                    var background = $(this).attr("setBackground" + item);
                    var bgMobile = $(this).attr("setBackgroundMobile");
                    var breakpoint = $(this).attr("breakpoint");
                    $(this).css({
                        "background-size": "cover",
                        "background-position": `${item} center`,
                        // "background-image": `url(${background})`,
                        "background-repeat": "no-repeat"
                    });
                    console.log(typeof bgMobile);

                    if (typeof bgMobile != "undefined") {
                        if (ww < breakpoint) {
                            $(this).css({
                                "background-image": "url(" + bgMobile + ")"
                            });
                        } else {
                            $(this).css({
                                "background-image": "url(" + background + ")"
                            });
                        }
                    } else {
                        $(this).css({
                            "background-image": "url(" + background + ")"
                        });
                    }
                });
            });
        },
        scrollToTop: () => {
            $(window).on("scroll", function () {
                if ($(this).scrollTop() >= $("#main-banner").outerHeight() - $("header").outerHeight() || $(this).scrollTop() >= $("#page-banner").outerHeight() - $("header").outerHeight()) {
                    $("#scrollToTop").addClass("active");
                } else {
                    $("#scrollToTop").removeClass("active");
                }
            });
            $("#scrollToTop").on("click", function () {
                $("html,body").animate({
                    scrollTop: 0
                });
            });
            $("#fixed-tool .toggle-icon").on("click", function () {
                $(this).parent().toggleClass("active");
            });
        },
        checkListItem: () => {
            $("main ul").each(function () {
                $(this).addClass("list-item-added");
            });
        },
        inputButtonSubmit: () => {
            $("input[type='submit']").each(function () {
                if ($(this).parent().is(".btn")) {
                    //
                    $(this).parent().addClass("has-input-submit");
                    $(this).parent().attr("data-title", $(this).val());
                }
            });
        },
        init: () => {
            globalJS.autoFillNoImage();
            globalJS.autoClone();
            globalJS.setBackground();
            globalJS.scrollToTop();
            globalJS.inputButtonSubmit();
            globalJS.checkListItem();
        }
    };

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
        return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var swiper = createCommonjsModule(function (module, exports) {
        /**
         * Swiper 8.3.2
         * Most modern mobile touch slider and framework with hardware accelerated transitions
         * https://swiperjs.com
         *
         * Copyright 2014-2022 Vladimir Kharlampidi
         *
         * Released under the MIT License
         *
         * Released on: December 22, 2022
         */
        !function (e, t) {
            module.exports = t();
        }(commonjsGlobal, function () {

            function e(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
            }

            function t(s, a) {
                void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach(i => {
                    void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
                });
            }

            const s = {
                body: {},

                addEventListener() { },

                removeEventListener() { },

                activeElement: {
                    blur() { },

                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() { }

                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},

                    setAttribute() { },

                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function a() {
                const e = "undefined" != typeof document ? document : {};
                return t(e, s), e;
            }

            const i = {
                document: s,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() { },

                    pushState() { },

                    go() { },

                    back() { }

                },
                CustomEvent: function () {
                    return this;
                },

                addEventListener() { },

                removeEventListener() { },

                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),

                Image() { },

                Date() { },

                screen: {},

                setTimeout() { },

                clearTimeout() { },

                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),

                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e);
                }

            };

            function n() {
                const e = "undefined" != typeof window ? window : {};
                return t(e, i), e;
            }

            class r extends Array {
                constructor(e) {
                    "number" == typeof e ? super(e) : (super(...(e || [])), function (e) {
                        const t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,

                            set(e) {
                                t.__proto__ = e;
                            }

                        });
                    }(this));
                }

            }

            function l(e) {
                void 0 === e && (e = []);
                const t = [];
                return e.forEach(e => {
                    Array.isArray(e) ? t.push(...l(e)) : t.push(e);
                }), t;
            }

            function o(e, t) {
                return Array.prototype.filter.call(e, t);
            }

            function d(e, t) {
                const s = n(),
                    i = a();
                let l = [];
                if (!t && e instanceof r) return e;
                if (!e) return new r(l);

                if ("string" == typeof e) {
                    const s = e.trim();

                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        let e = "div";
                        0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                        const t = i.createElement(e);
                        t.innerHTML = s;

                        for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e]);
                    } else l = function (e, t) {
                        if ("string" != typeof e) return [e];
                        const s = [],
                            a = t.querySelectorAll(e);

                        for (let e = 0; e < a.length; e += 1) s.push(a[e]);

                        return s;
                    }(e.trim(), t || i);
                } else if (e.nodeType || e === s || e === i) l.push(e); else if (Array.isArray(e)) {
                    if (e instanceof r) return e;
                    l = e;
                }

                return new r(function (e) {
                    const t = [];

                    for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);

                    return t;
                }(l));
            }

            d.fn = r.prototype;
            const c = {
                addClass: function () {
                    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

                    const a = l(t.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.add(...a);
                    }), this;
                },
                removeClass: function () {
                    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

                    const a = l(t.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.remove(...a);
                    }), this;
                },
                hasClass: function () {
                    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

                    const a = l(t.map(e => e.split(" ")));
                    return o(this, e => a.filter(t => e.classList.contains(t)).length > 0).length > 0;
                },
                toggleClass: function () {
                    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

                    const a = l(t.map(e => e.split(" ")));
                    this.forEach(e => {
                        a.forEach(t => {
                            e.classList.toggle(t);
                        });
                    });
                },
                attr: function (e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

                    for (let s = 0; s < this.length; s += 1) if (2 === arguments.length) this[s].setAttribute(e, t); else for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);

                    return this;
                },
                removeAttr: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);

                    return this;
                },
                transform: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;

                    return this;
                },
                transition: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;

                    return this;
                },
                on: function () {
                    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

                    let [a, i, n, r] = t;

                    function l(e) {
                        const t = e.target;
                        if (!t) return;
                        const s = e.target.dom7EventData || [];
                        if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) n.apply(t, s); else {
                            const e = d(t).parents();

                            for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && n.apply(e[t], s);
                        }
                    }

                    function o(e) {
                        const t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
                    }

                    "function" == typeof t[1] && ([a, n, r] = t, i = void 0), r || (r = !1);
                    const c = a.split(" ");
                    let p;

                    for (let e = 0; e < this.length; e += 1) {
                        const t = this[e];
                        if (i) for (p = 0; p < c.length; p += 1) {
                            const e = c[p];
                            t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                                listener: n,
                                proxyListener: l
                            }), t.addEventListener(e, l, r);
                        } else for (p = 0; p < c.length; p += 1) {
                            const e = c[p];
                            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                listener: n,
                                proxyListener: o
                            }), t.addEventListener(e, o, r);
                        }
                    }

                    return this;
                },
                off: function () {
                    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

                    let [a, i, n, r] = t;
                    "function" == typeof t[1] && ([a, n, r] = t, i = void 0), r || (r = !1);
                    const l = a.split(" ");

                    for (let e = 0; e < l.length; e += 1) {
                        const t = l[e];

                        for (let e = 0; e < this.length; e += 1) {
                            const s = this[e];
                            let a;
                            if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length) for (let e = a.length - 1; e >= 0; e -= 1) {
                                const i = a[e];
                                n && i.listener === n || n && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === n ? (s.removeEventListener(t, i.proxyListener, r), a.splice(e, 1)) : n || (s.removeEventListener(t, i.proxyListener, r), a.splice(e, 1));
                            }
                        }
                    }

                    return this;
                },
                trigger: function () {
                    const e = n();

                    for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];

                    const i = s[0].split(" "),
                        r = s[1];

                    for (let t = 0; t < i.length; t += 1) {
                        const a = i[t];

                        for (let t = 0; t < this.length; t += 1) {
                            const i = this[t];

                            if (e.CustomEvent) {
                                const t = new e.CustomEvent(a, {
                                    detail: r,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                i.dom7EventData = s.filter((e, t) => t > 0), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData;
                            }
                        }
                    }

                    return this;
                },
                transitionEnd: function (e) {
                    const t = this;
                    return e && t.on("transitionend", function s(a) {
                        a.target === this && (e.call(this, a), t.off("transitionend", s));
                    }), this;
                },
                outerWidth: function (e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
                        }

                        return this[0].offsetWidth;
                    }

                    return null;
                },
                outerHeight: function (e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
                        }

                        return this[0].offsetHeight;
                    }

                    return null;
                },
                styles: function () {
                    const e = n();
                    return this[0] ? e.getComputedStyle(this[0], null) : {};
                },
                offset: function () {
                    if (this.length > 0) {
                        const e = n(),
                            t = a(),
                            s = this[0],
                            i = s.getBoundingClientRect(),
                            r = t.body,
                            l = s.clientTop || r.clientTop || 0,
                            o = s.clientLeft || r.clientLeft || 0,
                            d = s === e ? e.scrollY : s.scrollTop,
                            c = s === e ? e.scrollX : s.scrollLeft;
                        return {
                            top: i.top + d - l,
                            left: i.left + c - o
                        };
                    }

                    return null;
                },
                css: function (e, t) {
                    const s = n();
                    let a;

                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (a = 0; a < this.length; a += 1) for (const t in e) this[a].style[t] = e[t];

                            return this;
                        }

                        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
                    }

                    if (2 === arguments.length && "string" == typeof e) {
                        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;

                        return this;
                    }

                    return this;
                },
                each: function (e) {
                    return e ? (this.forEach((t, s) => {
                        e.apply(t, [t, s]);
                    }), this) : this;
                },
                html: function (e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : null;

                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;

                    return this;
                },
                text: function (e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;

                    return this;
                },
                is: function (e) {
                    const t = n(),
                        s = a(),
                        i = this[0];
                    let l, o;
                    if (!i || void 0 === e) return !1;

                    if ("string" == typeof e) {
                        if (i.matches) return i.matches(e);
                        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                        if (i.msMatchesSelector) return i.msMatchesSelector(e);

                        for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;

                        return !1;
                    }

                    if (e === s) return i === s;
                    if (e === t) return i === t;

                    if (e.nodeType || e instanceof r) {
                        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) if (l[o] === i) return !0;

                        return !1;
                    }

                    return !1;
                },
                index: function () {
                    let e,
                        t = this[0];

                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);

                        return e;
                    }
                },
                eq: function (e) {
                    if (void 0 === e) return this;
                    const t = this.length;
                    if (e > t - 1) return d([]);

                    if (e < 0) {
                        const s = t + e;
                        return d(s < 0 ? [] : [this[s]]);
                    }

                    return d([this[e]]);
                },
                append: function () {
                    let e;
                    const t = a();

                    for (let s = 0; s < arguments.length; s += 1) {
                        e = s < 0 || arguments.length <= s ? void 0 : arguments[s];

                        for (let s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                            const a = t.createElement("div");

                            for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild);
                        } else if (e instanceof r) for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]); else this[s].appendChild(e);
                    }

                    return this;
                },
                prepend: function (e) {
                    const t = a();
                    let s, i;

                    for (s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                        const a = t.createElement("div");

                        for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
                    } else if (e instanceof r) for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]); else this[s].insertBefore(e, this[s].childNodes[0]);

                    return this;
                },
                next: function (e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]);
                },
                nextAll: function (e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return d([]);

                    for (; s.nextElementSibling;) {
                        const a = s.nextElementSibling;
                        e ? d(a).is(e) && t.push(a) : t.push(a), s = a;
                    }

                    return d(t);
                },
                prev: function (e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([]);
                    }

                    return d([]);
                },
                prevAll: function (e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return d([]);

                    for (; s.previousElementSibling;) {
                        const a = s.previousElementSibling;
                        e ? d(a).is(e) && t.push(a) : t.push(a), s = a;
                    }

                    return d(t);
                },
                parent: function (e) {
                    const t = [];

                    for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));

                    return d(t);
                },
                parents: function (e) {
                    const t = [];

                    for (let s = 0; s < this.length; s += 1) {
                        let a = this[s].parentNode;

                        for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode;
                    }

                    return d(t);
                },
                closest: function (e) {
                    let t = this;
                    return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
                },
                find: function (e) {
                    const t = [];

                    for (let s = 0; s < this.length; s += 1) {
                        const a = this[s].querySelectorAll(e);

                        for (let e = 0; e < a.length; e += 1) t.push(a[e]);
                    }

                    return d(t);
                },
                children: function (e) {
                    const t = [];

                    for (let s = 0; s < this.length; s += 1) {
                        const a = this[s].children;

                        for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s]);
                    }

                    return d(t);
                },
                filter: function (e) {
                    return d(o(this, e));
                },
                remove: function () {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);

                    return this;
                }
            };

            function p(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t);
            }

            function u() {
                return Date.now();
            }

            function h(e, t) {
                void 0 === t && (t = "x");
                const s = n();
                let a, i, r;

                const l = function (e) {
                    const t = n();
                    let s;
                    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
                }(e);

                return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = r.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
            }

            function m(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
            }

            function f(e) {
                return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
            }

            function g() {
                const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    t = ["__proto__", "constructor", "prototype"];

                for (let s = 1; s < arguments.length; s += 1) {
                    const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];

                    if (null != a && !f(a)) {
                        const s = Object.keys(Object(a)).filter(e => t.indexOf(e) < 0);

                        for (let t = 0, i = s.length; t < i; t += 1) {
                            const i = s[t],
                                n = Object.getOwnPropertyDescriptor(a, i);
                            void 0 !== n && n.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i]);
                        }
                    }
                }

                return e;
            }

            function v(e, t, s) {
                e.style.setProperty(t, s);
            }

            function b(e) {
                let {
                    swiper: t,
                    targetPosition: s,
                    side: a
                } = e;
                const i = n(),
                    r = -t.translate;
                let l,
                    o = null;
                const d = t.params.speed;
                t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);

                const c = s > r ? "next" : "prev",
                    p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                    u = () => {
                        l = new Date().getTime(), null === o && (o = l);
                        const e = Math.max(Math.min((l - o) / d, 1), 0),
                            n = 0.5 - Math.cos(e * Math.PI) / 2;
                        let c = r + n * (s - r);
                        if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                            [a]: c
                        }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                                [a]: c
                            });
                        }), void i.cancelAnimationFrame(t.cssModeFrameID);
                        t.cssModeFrameID = i.requestAnimationFrame(u);
                    };

                u();
            }

            let w, y, C;

            function T() {
                return w || (w = function () {
                    const e = n(),
                        t = a();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function () {
                            let t = !1;

                            try {
                                const s = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0;
                                    }

                                });
                                e.addEventListener("testPassiveListener", null, s);
                            } catch (e) { }

                            return t;
                        }(),
                        gestures: "ongesturestart" in e
                    };
                }()), w;
            }

            function x(e) {
                return void 0 === e && (e = {}), y || (y = function (e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e;
                    const s = T(),
                        a = n(),
                        i = a.navigator.platform,
                        r = t || a.navigator.userAgent,
                        l = {
                            ios: !1,
                            android: !1
                        },
                        o = a.screen.width,
                        d = a.screen.height,
                        c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let p = r.match(/(iPad).*OS\s([\d_]+)/);
                    const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                        h = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        m = "Win32" === i;
                    let f = "MacIntel" === i;
                    return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = r.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l;
                }(e)), y;
            }

            function S() {
                return C || (C = function () {
                    const e = n();
                    return {
                        isSafari: function () {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    };
                }()), C;
            }

            Object.keys(c).forEach(e => {
                Object.defineProperty(d.fn, e, {
                    value: c[e],
                    writable: !0
                });
            });
            var E = {
                on(e, t, s) {
                    const a = this;
                    if (!a.eventsListeners || a.destroyed) return a;
                    if ("function" != typeof t) return a;
                    const i = s ? "unshift" : "push";
                    return e.split(" ").forEach(e => {
                        a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
                    }), a;
                },

                once(e, t, s) {
                    const a = this;
                    if (!a.eventsListeners || a.destroyed) return a;
                    if ("function" != typeof t) return a;

                    function i() {
                        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;

                        for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];

                        t.apply(a, n);
                    }

                    return i.__emitterProxy = t, a.on(e, i, s);
                },

                onAny(e, t) {
                    const s = this;
                    if (!s.eventsListeners || s.destroyed) return s;
                    if ("function" != typeof e) return s;
                    const a = t ? "unshift" : "push";
                    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
                },

                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const s = t.eventsAnyListeners.indexOf(e);
                    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
                },

                off(e, t) {
                    const s = this;
                    return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(e => {
                        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((a, i) => {
                            (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
                        });
                    }), s) : s;
                },

                emit() {
                    const e = this;
                    if (!e.eventsListeners || e.destroyed) return e;
                    if (!e.eventsListeners) return e;
                    let t, s, a;

                    for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];

                    "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), a = e) : (t = n[0].events, s = n[0].data, a = n[0].context || e), s.unshift(a);
                    return (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
                        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
                            e.apply(a, [t, ...s]);
                        }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
                            e.apply(a, s);
                        });
                    }), e;
                }

            };
            var $ = {
                updateSize: function () {
                    const e = this;
                    let t, s;
                    const a = e.$el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                        width: t,
                        height: s,
                        size: e.isHorizontal() ? t : s
                    }));
                },
                updateSlides: function () {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t];
                    }

                    function s(e, s) {
                        return parseFloat(e.getPropertyValue(t(s)) || 0);
                    }

                    const a = e.params,
                        {
                            $wrapperEl: i,
                            size: n,
                            rtlTranslate: r,
                            wrongRTL: l
                        } = e,
                        o = e.virtual && a.virtual.enabled,
                        d = o ? e.virtual.slides.length : e.slides.length,
                        c = i.children(`.${e.params.slideClass}`),
                        p = o ? e.virtual.slides.length : c.length;
                    let u = [];
                    const h = [],
                        m = [];
                    let f = a.slidesOffsetBefore;
                    "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
                    let g = a.slidesOffsetAfter;
                    "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
                    const b = e.snapGrid.length,
                        w = e.slidesGrid.length;
                    let y = a.spaceBetween,
                        C = -f,
                        T = 0,
                        x = 0;
                    if (void 0 === n) return;
                    "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * n), e.virtualSize = -y, r ? c.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : c.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const S = a.grid && a.grid.rows > 1 && e.grid;
                    let E;
                    S && e.grid.initSlides(p);
                    const $ = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(e => void 0 !== a.breakpoints[e].slidesPerView).length > 0;

                    for (let i = 0; i < p; i += 1) {
                        E = 0;
                        const r = c.eq(i);

                        if (S && e.grid.updateSlide(i, r, p, t), "none" !== r.css("display")) {
                            if ("auto" === a.slidesPerView) {
                                $ && (c[i].style[t("width")] = "");
                                const n = getComputedStyle(r[0]),
                                    l = r[0].style.transform,
                                    o = r[0].style.webkitTransform;
                                if (l && (r[0].style.transform = "none"), o && (r[0].style.webkitTransform = "none"), a.roundLengths) E = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0); else {
                                    const e = s(n, "width"),
                                        t = s(n, "padding-left"),
                                        a = s(n, "padding-right"),
                                        i = s(n, "margin-left"),
                                        l = s(n, "margin-right"),
                                        o = n.getPropertyValue("box-sizing");
                                    if (o && "border-box" === o) E = e + i + l; else {
                                        const {
                                            clientWidth: s,
                                            offsetWidth: n
                                        } = r[0];
                                        E = e + t + a + i + l + (n - s);
                                    }
                                }
                                l && (r[0].style.transform = l), o && (r[0].style.webkitTransform = o), a.roundLengths && (E = Math.floor(E));
                            } else E = (n - (a.slidesPerView - 1) * y) / a.slidesPerView, a.roundLengths && (E = Math.floor(E)), c[i] && (c[i].style[t("width")] = `${E}px`);

                            c[i] && (c[i].swiperSlideSize = E), m.push(E), a.centeredSlides ? (C = C + E / 2 + T / 2 + y, 0 === T && 0 !== i && (C = C - n / 2 - y), 0 === i && (C = C - n / 2 - y), Math.abs(C) < 0.001 && (C = 0), a.roundLengths && (C = Math.floor(C)), x % a.slidesPerGroup == 0 && u.push(C), h.push(C)) : (a.roundLengths && (C = Math.floor(C)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && u.push(C), h.push(C), C = C + E + y), e.virtualSize += E + y, T = E, x += 1;
                        }
                    }

                    if (e.virtualSize = Math.max(e.virtualSize, n) + g, r && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                        width: `${e.virtualSize + a.spaceBetween}px`
                    }), a.setWrapperSize && i.css({
                        [t("width")]: `${e.virtualSize + a.spaceBetween}px`
                    }), S && e.grid.updateWrapperSize(E, u, t), !a.centeredSlides) {
                        const t = [];

                        for (let s = 0; s < u.length; s += 1) {
                            let i = u[s];
                            a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - n && t.push(i);
                        }

                        u = t, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n);
                    }

                    if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
                        const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
                        c.filter((e, t) => !a.cssMode || t !== c.length - 1).css({
                            [s]: `${y}px`
                        });
                    }

                    if (a.centeredSlides && a.centeredSlidesBounds) {
                        let e = 0;
                        m.forEach(t => {
                            e += t + (a.spaceBetween ? a.spaceBetween : 0);
                        }), e -= a.spaceBetween;
                        const t = e - n;
                        u = u.map(e => e < 0 ? -f : e > t ? t + g : e);
                    }

                    if (a.centerInsufficientSlides) {
                        let e = 0;

                        if (m.forEach(t => {
                            e += t + (a.spaceBetween ? a.spaceBetween : 0);
                        }), e -= a.spaceBetween, e < n) {
                            const t = (n - e) / 2;
                            u.forEach((e, s) => {
                                u[s] = e - t;
                            }), h.forEach((e, s) => {
                                h[s] = e + t;
                            });
                        }
                    }

                    if (Object.assign(e, {
                        slides: c,
                        snapGrid: u,
                        slidesGrid: h,
                        slidesSizesGrid: m
                    }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                        v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + s);
                    }

                    if (p !== d && e.emit("slidesLengthChange"), u.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== w && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                        const t = `${a.containerModifierClass}backface-hidden`,
                            s = e.$el.hasClass(t);
                        p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t);
                    }
                },
                updateAutoHeight: function (e) {
                    const t = this,
                        s = [],
                        a = t.virtual && t.params.virtual.enabled;
                    let i,
                        n = 0;
                    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);

                    const r = e => a ? t.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0];

                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
                        if (t.params.centeredSlides) (t.visibleSlides || d([])).each(e => {
                            s.push(e);
                        }); else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                            const e = t.activeIndex + i;
                            if (e > t.slides.length && !a) break;
                            s.push(r(e));
                        }
                    } else s.push(r(t.activeIndex));

                    for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
                        const e = s[i].offsetHeight;
                        n = e > n ? e : n;
                    }

                    (n || 0 === n) && t.$wrapperEl.css("height", `${n}px`);
                },
                updateSlidesOffset: function () {
                    const e = this,
                        t = e.slides;

                    for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
                },
                updateSlidesProgress: function (e) {
                    void 0 === e && (e = this && this.translate || 0);
                    const t = this,
                        s = t.params,
                        {
                            slides: a,
                            rtlTranslate: i,
                            snapGrid: n
                        } = t;
                    if (0 === a.length) return;
                    void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
                    let r = -e;
                    i && (r = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

                    for (let e = 0; e < a.length; e += 1) {
                        const l = a[e];
                        let o = l.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                        const d = (r + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                            c = (r - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                            p = -(r - o),
                            u = p + t.slidesSizesGrid[e];
                        (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c;
                    }

                    t.visibleSlides = d(t.visibleSlides);
                },
                updateProgress: function (e) {
                    const t = this;

                    if (void 0 === e) {
                        const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0;
                    }

                    const s = t.params,
                        a = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: i,
                        isBeginning: n,
                        isEnd: r
                    } = t;
                    const l = n,
                        o = r;
                    0 === a ? (i = 0, n = !0, r = !0) : (i = (e - t.minTranslate()) / a, n = i <= 0, r = i >= 1), Object.assign(t, {
                        progress: i,
                        isBeginning: n,
                        isEnd: r
                    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), r && !o && t.emit("reachEnd toEdge"), (l && !n || o && !r) && t.emit("fromEdge"), t.emit("progress", i);
                },
                updateSlidesClasses: function () {
                    const e = this,
                        {
                            slides: t,
                            params: s,
                            $wrapperEl: a,
                            activeIndex: i,
                            realIndex: n
                        } = e,
                        r = e.virtual && s.virtual.enabled;
                    let l;
                    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = r ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass));
                    let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                    s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
                    let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                    s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
                },
                updateActiveIndex: function (e) {
                    const t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: a,
                            snapGrid: i,
                            params: n,
                            activeIndex: r,
                            realIndex: l,
                            snapIndex: o
                        } = t;
                    let d,
                        c = e;

                    if (void 0 === c) {
                        for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);

                        n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
                    }

                    if (i.indexOf(s) >= 0) d = i.indexOf(s); else {
                        const e = Math.min(n.slidesPerGroupSkip, c);
                        d = e + Math.floor((c - e) / n.slidesPerGroup);
                    }
                    if (d >= i.length && (d = i.length - 1), c === r) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
                    const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    Object.assign(t, {
                        snapIndex: d,
                        realIndex: p,
                        previousIndex: r,
                        activeIndex: c
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
                },
                updateClickedSlide: function (e) {
                    const t = this,
                        s = t.params,
                        a = d(e).closest(`.${s.slideClass}`)[0];
                    let i,
                        n = !1;
                    if (a) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === a) {
                        n = !0, i = e;
                        break;
                    }
                    if (!a || !n) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
                    t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
                }
            };
            var M = {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {
                        params: t,
                        rtlTranslate: s,
                        translate: a,
                        $wrapperEl: i
                    } = this;
                    if (t.virtualTranslate) return s ? -a : a;
                    if (t.cssMode) return a;
                    let n = h(i[0], e);
                    return s && (n = -n), n || 0;
                },
                setTranslate: function (e, t) {
                    const s = this,
                        {
                            rtlTranslate: a,
                            params: i,
                            $wrapperEl: n,
                            wrapperEl: r,
                            progress: l
                        } = s;
                    let o,
                        d = 0,
                        c = 0;
                    s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || n.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
                    const p = s.maxTranslate() - s.minTranslate();
                    o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
                },
                minTranslate: function () {
                    return -this.snapGrid[0];
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1];
                },
                translateTo: function (e, t, s, a, i) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
                    const n = this,
                        {
                            params: r,
                            wrapperEl: l
                        } = n;
                    if (n.animating && r.preventInteractionOnTransition) return !1;
                    const o = n.minTranslate(),
                        d = n.maxTranslate();
                    let c;

                    if (c = a && e > o ? o : a && e < d ? d : e, n.updateProgress(c), r.cssMode) {
                        const e = n.isHorizontal();
                        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c; else {
                            if (!n.support.smoothScroll) return b({
                                swiper: n,
                                targetPosition: -c,
                                side: e ? "left" : "top"
                            }), !0;
                            l.scrollTo({
                                [e ? "left" : "top"]: -c,
                                behavior: "smooth"
                            });
                        }
                        return !0;
                    }

                    return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, i), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, i), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
                        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, s && n.emit("transitionEnd"));
                    }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0;
                }
            };

            function P(e) {
                let {
                    swiper: t,
                    runCallbacks: s,
                    direction: a,
                    step: i
                } = e;
                const {
                    activeIndex: n,
                    previousIndex: r
                } = t;
                let l = a;

                if (l || (l = n > r ? "next" : n < r ? "prev" : "reset"), t.emit(`transition${i}`), s && n !== r) {
                    if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
                    t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
                }
            }

            var k = {
                slideTo: function (e, t, s, a, i) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);

                    if ("string" == typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t;
                    }

                    const n = this;
                    let r = e;
                    r < 0 && (r = 0);
                    const {
                        params: l,
                        snapGrid: o,
                        slidesGrid: d,
                        previousIndex: c,
                        activeIndex: p,
                        rtlTranslate: u,
                        wrapperEl: h,
                        enabled: m
                    } = n;
                    if (n.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
                    const f = Math.min(n.params.slidesPerGroupSkip, r);
                    let g = f + Math.floor((r - f) / n.params.slidesPerGroup);
                    g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && n.emit("beforeSlideChangeStart");
                    const v = -o[g];
                    if (n.updateProgress(v), l.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
                        const t = -Math.floor(100 * v),
                            s = Math.floor(100 * d[e]),
                            a = Math.floor(100 * d[e + 1]);
                        void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? r = e : t >= s && t < a && (r = e + 1) : t >= s && (r = e);
                    }

                    if (n.initialized && r !== p) {
                        if (!n.allowSlideNext && v < n.translate && v < n.minTranslate()) return !1;
                        if (!n.allowSlidePrev && v > n.translate && v > n.maxTranslate() && (p || 0) !== r) return !1;
                    }

                    let w;
                    if (w = r > p ? "next" : r < p ? "prev" : "reset", u && -v === n.translate || !u && v === n.translate) return n.updateActiveIndex(r), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== l.effect && n.setTranslate(v), "reset" !== w && (n.transitionStart(s, w), n.transitionEnd(s, w)), !1;

                    if (l.cssMode) {
                        const e = n.isHorizontal(),
                            s = u ? v : -v;

                        if (0 === t) {
                            const t = n.virtual && n.params.virtual.enabled;
                            t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame(() => {
                                n.wrapperEl.style.scrollSnapType = "", n._swiperImmediateVirtual = !1;
                            });
                        } else {
                            if (!n.support.smoothScroll) return b({
                                swiper: n,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }), !0;
                            h.scrollTo({
                                [e ? "left" : "top"]: s,
                                behavior: "smooth"
                            });
                        }

                        return !0;
                    }

                    return n.setTransition(t), n.setTranslate(v), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, a), n.transitionStart(s, w), 0 === t ? n.transitionEnd(s, w) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
                        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, w));
                    }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd)), !0;
                },
                slideToLoop: function (e, t, s, a) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t;
                    }

                    const i = this;
                    let n = e;
                    return i.params.loop && (n += i.loopedSlides), i.slideTo(n, t, s, a);
                },
                slideNext: function (e, t, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const a = this,
                        {
                            animating: i,
                            enabled: n,
                            params: r
                        } = a;
                    if (!n) return a;
                    let l = r.slidesPerGroup;
                    "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
                    const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l;

                    if (r.loop) {
                        if (i && r.loopPreventsSlide) return !1;
                        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
                    }

                    return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
                },
                slidePrev: function (e, t, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const a = this,
                        {
                            params: i,
                            animating: n,
                            snapGrid: r,
                            slidesGrid: l,
                            rtlTranslate: o,
                            enabled: d
                        } = a;
                    if (!d) return a;

                    if (i.loop) {
                        if (n && i.loopPreventsSlide) return !1;
                        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
                    }

                    function c(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                    }

                    const p = c(o ? a.translate : -a.translate),
                        u = r.map(e => c(e));
                    let h = r[u.indexOf(p) - 1];

                    if (void 0 === h && i.cssMode) {
                        let e;
                        r.forEach((t, s) => {
                            p >= t && (e = s);
                        }), void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
                    }

                    let m = 0;

                    if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
                        const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                        return a.slideTo(i, e, t, s);
                    }

                    return a.slideTo(m, e, t, s);
                },
                slideReset: function (e, t, s) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
                },
                slideToClosest: function (e, t, s, a) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = 0.5);
                    const i = this;
                    let n = i.activeIndex;
                    const r = Math.min(i.params.slidesPerGroupSkip, n),
                        l = r + Math.floor((n - r) / i.params.slidesPerGroup),
                        o = i.rtlTranslate ? i.translate : -i.translate;

                    if (o >= i.snapGrid[l]) {
                        const e = i.snapGrid[l];
                        o - e > (i.snapGrid[l + 1] - e) * a && (n += i.params.slidesPerGroup);
                    } else {
                        const e = i.snapGrid[l - 1];
                        o - e <= (i.snapGrid[l] - e) * a && (n -= i.params.slidesPerGroup);
                    }

                    return n = Math.max(n, 0), n = Math.min(n, i.slidesGrid.length - 1), i.slideTo(n, e, t, s);
                },
                slideToClickedSlide: function () {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: s
                        } = e,
                        a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let i,
                        n = e.clickedIndex;

                    if (t.loop) {
                        if (e.animating) return;
                        i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - a / 2 || n > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p(() => {
                            e.slideTo(n);
                        })) : e.slideTo(n) : n > e.slides.length - a ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p(() => {
                            e.slideTo(n);
                        })) : e.slideTo(n);
                    } else e.slideTo(n);
                }
            };
            var L = {
                loopCreate: function () {
                    const e = this,
                        t = a(),
                        {
                            params: s,
                            $wrapperEl: i
                        } = e,
                        n = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
                    n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                    let r = n.children(`.${s.slideClass}`);

                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - r.length % s.slidesPerGroup;

                        if (e !== s.slidesPerGroup) {
                            for (let a = 0; a < e; a += 1) {
                                const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                n.append(e);
                            }

                            r = n.children(`.${s.slideClass}`);
                        }
                    }

                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
                    const l = [],
                        o = [];
                    r.each((e, t) => {
                        d(e).attr("data-swiper-slide-index", t);
                    });

                    for (let t = 0; t < e.loopedSlides; t += 1) {
                        const e = t - Math.floor(t / r.length) * r.length;
                        o.push(r.eq(e)[0]), l.unshift(r.eq(r.length - e - 1)[0]);
                    }

                    for (let e = 0; e < o.length; e += 1) n.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));

                    for (let e = l.length - 1; e >= 0; e -= 1) n.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
                },
                loopFix: function () {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: s,
                        loopedSlides: a,
                        allowSlidePrev: i,
                        allowSlideNext: n,
                        snapGrid: r,
                        rtlTranslate: l
                    } = e;
                    let o;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const d = -r[t] - e.getTranslate();

                    if (t < a) {
                        o = s.length - 3 * a + t, o += a;
                        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
                    } else if (t >= s.length - a) {
                        o = -s.length + t + a, o += a;
                        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
                    }

                    e.allowSlidePrev = i, e.allowSlideNext = n, e.emit("loopFix");
                },
                loopDestroy: function () {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: s
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index");
                }
            };

            function O(e) {
                const t = this,
                    s = a(),
                    i = n(),
                    r = t.touchEventsData,
                    {
                        params: l,
                        touches: o,
                        enabled: c
                    } = t;
                if (!c) return;
                if (t.animating && l.preventInteractionOnTransition) return;
                !t.animating && l.cssMode && l.loop && t.loopFix();
                let p = e;
                p.originalEvent && (p = p.originalEvent);
                let h = d(p.target);
                if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
                if (r.isTouchEvent = "touchstart" === p.type, !r.isTouchEvent && "which" in p && 3 === p.which) return;
                if (!r.isTouchEvent && "button" in p && p.button > 0) return;
                if (r.isTouched && r.isMoved) return;
                !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
                const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
                    f = !(!p.target || !p.target.shadowRoot);
                if (l.noSwiping && (f ? function (e, t) {
                    return void 0 === t && (t = this), function t(s) {
                        if (!s || s === a() || s === n()) return null;
                        s.assignedSlot && (s = s.assignedSlot);
                        const i = s.closest(e);
                        return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
                    }(t);
                }(m, h[0]) : h.closest(m)[0])) return void (t.allowClick = !0);
                if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
                o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
                const g = o.currentX,
                    v = o.currentY,
                    b = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
                    w = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;

                if (b && (g <= w || g >= i.innerWidth - w)) {
                    if ("prevent" !== b) return;
                    e.preventDefault();
                }

                if (Object.assign(r, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), o.startX = g, o.startY = v, r.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== p.type) {
                    let e = !0;
                    h.is(r.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (r.isTouched = !1)), s.activeElement && d(s.activeElement).is(r.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
                    const a = e && t.allowTouchMove && l.touchStartPreventDefault;
                    !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault();
                }

                t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p);
            }

            function z(e) {
                const t = a(),
                    s = this,
                    i = s.touchEventsData,
                    {
                        params: n,
                        touches: r,
                        rtlTranslate: l,
                        enabled: o
                    } = s;
                if (!o) return;
                let c = e;
                if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
                if (i.isTouchEvent && "touchmove" !== c.type) return;
                const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
                    h = "touchmove" === c.type ? p.pageX : c.pageX,
                    m = "touchmove" === c.type ? p.pageY : c.pageY;
                if (c.preventedByNestedSwiper) return r.startX = h, void (r.startY = m);
                if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(r, {
                    startX: h,
                    startY: m,
                    currentX: h,
                    currentY: m
                }), i.touchStartTime = u()));
                if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop) if (s.isVertical()) {
                    if (m < r.startY && s.translate <= s.maxTranslate() || m > r.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
                } else if (h < r.startX && s.translate <= s.maxTranslate() || h > r.startX && s.translate >= s.minTranslate()) return;
                if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
                if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
                r.currentX = h, r.currentY = m;
                const f = r.currentX - r.startX,
                    g = r.currentY - r.startY;
                if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;

                if (void 0 === i.isScrolling) {
                    let e;
                    s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle);
                }

                if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
                if (!i.startMoving) return;
                s.allowClick = !1, !n.cssMode && c.cancelable && c.preventDefault(), n.touchMoveStopPropagation && !n.nested && c.stopPropagation(), i.isMoved || (n.loop && !n.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
                let v = s.isHorizontal() ? f : g;
                r.diff = v, v *= n.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                let b = !0,
                    w = n.resistanceRatio;

                if (n.touchReleaseOnEdges && (w = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (b = !1, n.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** w)) : v < 0 && i.currentTranslate < s.maxTranslate() && (b = !1, n.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** w)), b && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), n.threshold > 0) {
                    if (!(Math.abs(v) > n.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
                }

                n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && s.freeMode || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
            }

            function I(e) {
                const t = this,
                    s = t.touchEventsData,
                    {
                        params: a,
                        touches: i,
                        rtlTranslate: n,
                        slidesGrid: r,
                        enabled: l
                    } = t;
                if (!l) return;
                let o = e;
                if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
                a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const d = u(),
                    c = d - s.touchStartTime;

                if (t.allowClick) {
                    const e = o.path || o.composedPath && o.composedPath();
                    t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
                }

                if (s.lastClickTime = u(), p(() => {
                    t.destroyed || (t.allowClick = !0);
                }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
                let h;
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? n ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
                if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: h
                });
                let m = 0,
                    f = t.slidesSizesGrid[0];

                for (let e = 0; e < r.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                    const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                    void 0 !== r[e + t] ? h >= r[e] && h < r[e + t] && (m = e, f = r[e + t] - r[e]) : h >= r[e] && (m = e, f = r[r.length - 1] - r[r.length - 2]);
                }

                let g = null,
                    v = null;
                a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
                const b = (h - r[m]) / f,
                    w = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

                if (c > a.longSwipesMs) {
                    if (!a.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (b >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + w) : t.slideTo(m)), "prev" === t.swipeDirection && (b > 1 - a.longSwipesRatio ? t.slideTo(m + w) : null !== v && b < 0 && Math.abs(b) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m));
                } else {
                    if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + w) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + w), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
                }
            }

            function A() {
                const e = this,
                    {
                        params: t,
                        el: s
                    } = e;
                if (s && 0 === s.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: a,
                    allowSlidePrev: i,
                    snapGrid: n
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
            }

            function D(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
            }

            function B() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: s,
                        enabled: a
                    } = e;
                if (!a) return;
                let i;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const n = e.maxTranslate() - e.minTranslate();
                i = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
            }

            let G = !1;

            function N() { }

            const H = (e, t) => {
                const s = a(),
                    {
                        params: i,
                        touchEvents: n,
                        el: r,
                        wrapperEl: l,
                        device: o,
                        support: d
                    } = e,
                    c = !!i.nested,
                    p = "on" === t ? "addEventListener" : "removeEventListener",
                    u = t;

                if (d.touch) {
                    const t = !("touchstart" !== n.start || !d.passiveListener || !i.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r[p](n.start, e.onTouchStart, t), r[p](n.move, e.onTouchMove, d.passiveListener ? {
                        passive: !1,
                        capture: c
                    } : c), r[p](n.end, e.onTouchEnd, t), n.cancel && r[p](n.cancel, e.onTouchEnd, t);
                } else r[p](n.start, e.onTouchStart, !1), s[p](n.move, e.onTouchMove, c), s[p](n.end, e.onTouchEnd, !1);

                (i.preventClicks || i.preventClicksPropagation) && r[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0);
            };

            var _ = {
                attachEvents: function () {
                    const e = this,
                        t = a(),
                        {
                            params: s,
                            support: i
                        } = e;
                    e.onTouchStart = O.bind(e), e.onTouchMove = z.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = B.bind(e)), e.onClick = D.bind(e), i.touch && !G && (t.addEventListener("touchstart", N), G = !0), H(e, "on");
                },
                detachEvents: function () {
                    H(this, "off");
                }
            };

            const V = (e, t) => e.grid && t.grid && t.grid.rows > 1;

            var j = {
                addClasses: function () {
                    const e = this,
                        {
                            classNames: t,
                            params: s,
                            rtl: a,
                            $el: i,
                            device: n,
                            support: r
                        } = e,
                        l = function (e, t) {
                            const s = [];
                            return e.forEach(e => {
                                "object" == typeof e ? Object.keys(e).forEach(a => {
                                    e[a] && s.push(t + a);
                                }) : "string" == typeof e && s.push(t + e);
                            }), s;
                        }(["initialized", s.direction, {
                            "pointer-events": !r.touch
                        }, {
                                "free-mode": e.params.freeMode && s.freeMode.enabled
                            }, {
                                autoheight: s.autoHeight
                            }, {
                                rtl: a
                            }, {
                                grid: s.grid && s.grid.rows > 1
                            }, {
                                "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                            }, {
                                android: n.android
                            }, {
                                ios: n.ios
                            }, {
                                "css-mode": s.cssMode
                            }, {
                                centered: s.cssMode && s.centeredSlides
                            }, {
                                "watch-progress": s.watchSlidesProgress
                            }], s.containerModifierClass);

                    t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses();
                },
                removeClasses: function () {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses();
                }
            };
            var F = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: 0.5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: 0.85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function q(e, t) {
                return function (s) {
                    void 0 === s && (s = {});
                    const a = Object.keys(s)[0],
                        i = s[a];
                    "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                        auto: !0
                    }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
                        enabled: !0
                    }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                        enabled: !1
                    }), g(t, s)) : g(t, s)) : g(t, s);
                };
            }

            const R = {
                eventsEmitter: E,
                update: $,
                translate: M,
                transition: {
                    setTransition: function (e, t) {
                        const s = this;
                        s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
                    },
                    transitionStart: function (e, t) {
                        void 0 === e && (e = !0);
                        const s = this,
                            {
                                params: a
                            } = s;
                        a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({
                            swiper: s,
                            runCallbacks: e,
                            direction: t,
                            step: "Start"
                        }));
                    },
                    transitionEnd: function (e, t) {
                        void 0 === e && (e = !0);
                        const s = this,
                            {
                                params: a
                            } = s;
                        s.animating = !1, a.cssMode || (s.setTransition(0), P({
                            swiper: s,
                            runCallbacks: e,
                            direction: t,
                            step: "End"
                        }));
                    }
                },
                slide: k,
                loop: L,
                grabCursor: {
                    setGrabCursor: function (e) {
                        const t = this;
                        if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                        const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                        s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab";
                    },
                    unsetGrabCursor: function () {
                        const e = this;
                        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
                    }
                },
                events: _,
                breakpoints: {
                    setBreakpoint: function () {
                        const e = this,
                            {
                                activeIndex: t,
                                initialized: s,
                                loopedSlides: a = 0,
                                params: i,
                                $el: n
                            } = e,
                            r = i.breakpoints;
                        if (!r || r && 0 === Object.keys(r).length) return;
                        const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                        if (!l || e.currentBreakpoint === l) return;
                        const o = (l in r ? r[l] : void 0) || e.originalParams,
                            d = V(e, i),
                            c = V(e, o),
                            p = i.enabled;
                        d && !c ? (n.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (n.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && n.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                            const s = i[t] && i[t].enabled,
                                a = o[t] && o[t].enabled;
                            s && !a && e[t].disable(), !s && a && e[t].enable();
                        });
                        const u = o.direction && o.direction !== i.direction,
                            h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                        u && s && e.changeDirection(), g(e.params, o);
                        const m = e.params.enabled;
                        Object.assign(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
                    },
                    getBreakpoint: function (e, t, s) {
                        if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                        let a = !1;
                        const i = n(),
                            r = "window" === t ? i.innerHeight : s.clientHeight,
                            l = Object.keys(e).map(e => {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    const t = parseFloat(e.substr(1));
                                    return {
                                        value: r * t,
                                        point: e
                                    };
                                }

                                return {
                                    value: e,
                                    point: e
                                };
                            });
                        l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));

                        for (let e = 0; e < l.length; e += 1) {
                            const {
                                point: n,
                                value: r
                            } = l[e];
                            "window" === t ? i.matchMedia(`(min-width: ${r}px)`).matches && (a = n) : r <= s.clientWidth && (a = n);
                        }

                        return a || "max";
                    }
                },
                checkOverflow: {
                    checkOverflow: function () {
                        const e = this,
                            {
                                isLocked: t,
                                params: s
                            } = e,
                            {
                                slidesOffsetBefore: a
                            } = s;

                        if (a) {
                            const t = e.slides.length - 1,
                                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                            e.isLocked = e.size > s;
                        } else e.isLocked = 1 === e.snapGrid.length;

                        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
                    }
                },
                classes: j,
                images: {
                    loadImage: function (e, t, s, a, i, r) {
                        const l = n();
                        let o;

                        function c() {
                            r && r();
                        }

                        d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image(), o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c();
                    },
                    preloadImages: function () {
                        const e = this;

                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                        }

                        e.imagesToLoad = e.$el.find("img");

                        for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                            const a = e.imagesToLoad[s];
                            e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t);
                        }
                    }
                }
            },
                W = {};

            class X {
                constructor() {
                    let e, t;

                    for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];

                    if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
                        const e = [];
                        return d(t.el).each(s => {
                            const a = g({}, t, {
                                el: s
                            });
                            e.push(new X(a));
                        }), e;
                    }

                    const n = this;
                    n.__swiper__ = !0, n.support = T(), n.device = x({
                        userAgent: t.userAgent
                    }), n.browser = S(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], t.modules && Array.isArray(t.modules) && n.modules.push(...t.modules);
                    const r = {};
                    n.modules.forEach(e => {
                        e({
                            swiper: n,
                            extendParams: q(t, r),
                            on: n.on.bind(n),
                            once: n.once.bind(n),
                            off: n.off.bind(n),
                            emit: n.emit.bind(n)
                        });
                    });
                    const l = g({}, F, r);
                    return n.params = g({}, l, W, t), n.originalParams = g({}, n.params), n.passedParams = g({}, t), n.params && n.params.on && Object.keys(n.params.on).forEach(e => {
                        n.on(e, n.params.on[e]);
                    }), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = d, Object.assign(n, {
                        enabled: n.params.enabled,
                        el: e,
                        classNames: [],
                        slides: d(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === n.params.direction,
                        isVertical: () => "vertical" === n.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: n.params.allowSlideNext,
                        allowSlidePrev: n.params.allowSlidePrev,
                        touchEvents: function () {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                t = ["pointerdown", "pointermove", "pointerup"];
                            return n.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, n.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop;
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: n.params.focusableElements,
                            lastClickTime: u(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: n.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), n.emit("_swiper"), n.params.init && n.init(), n;
                }

                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
                }

                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
                }

                setProgress(e, t) {
                    const s = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const a = s.minTranslate(),
                        i = (s.maxTranslate() - a) * e + a;
                    s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
                }

                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "));
                }

                getSlideClasses(e) {
                    const t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ");
                }

                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.each(s => {
                        const a = e.getSlideClasses(s);
                        t.push({
                            slideEl: s,
                            classNames: a
                        }), e.emit("_slideClass", s, a);
                    }), e.emit("_slideClasses", t);
                }

                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    const {
                        params: s,
                        slides: a,
                        slidesGrid: i,
                        slidesSizesGrid: n,
                        size: r,
                        activeIndex: l
                    } = this;
                    let o = 1;

                    if (s.centeredSlides) {
                        let e,
                            t = a[l].swiperSlideSize;

                        for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > r && (e = !0));

                        for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > r && (e = !0));
                    } else if ("current" === e) for (let e = l + 1; e < a.length; e += 1) {
                        (t ? i[e] + n[e] - i[l] < r : i[e] - i[l] < r) && (o += 1);
                    } else for (let e = l - 1; e >= 0; e -= 1) {
                        i[l] - i[e] < r && (o += 1);
                    }

                    return o;
                }

                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: s
                    } = e;

                    function a() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
                    }

                    let i;
                    s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
                }

                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    const s = this,
                        a = s.params.direction;
                    return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = "";
                    }), s.emit("changeDirection"), t && s.update()), s;
                }

                changeLanguageDirection(e) {
                    const t = this;
                    t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
                }

                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    const s = d(e || t.params.el);
                    if (!(e = s[0])) return !1;
                    e.swiper = t;

                    const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;

                    let n = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            const t = d(e.shadowRoot.querySelector(i()));
                            return t.children = e => s.children(e), t;
                        }

                        return s.children ? s.children(i()) : d(s).children(i());
                    })();

                    if (0 === n.length && t.params.createElements) {
                        const e = a().createElement("div");
                        n = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each(e => {
                            n.append(e);
                        });
                    }

                    return Object.assign(t, {
                        $el: s,
                        el: e,
                        $wrapperEl: n,
                        wrapperEl: n[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                        wrongRTL: "-webkit-box" === n.css("display")
                    }), !0;
                }

                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
                }

                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    const s = this,
                        {
                            params: a,
                            $el: i,
                            $wrapperEl: n,
                            slides: r
                        } = s;
                    return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), n.removeAttr("style"), r && r.length && r.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(e => {
                        s.off(e);
                    }), !1 !== e && (s.$el[0].swiper = null, function (e) {
                        const t = e;
                        Object.keys(t).forEach(e => {
                            try {
                                t[e] = null;
                            } catch (e) { }

                            try {
                                delete t[e];
                            } catch (e) { }
                        });
                    }(s)), s.destroyed = !0), null;
                }

                static extendDefaults(e) {
                    g(W, e);
                }

                static get extendedDefaults() {
                    return W;
                }

                static get defaults() {
                    return F;
                }

                static installModule(e) {
                    X.prototype.__modules__ || (X.prototype.__modules__ = []);
                    const t = X.prototype.__modules__;
                    "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
                }

                static use(e) {
                    return Array.isArray(e) ? (e.forEach(e => X.installModule(e)), X) : (X.installModule(e), X);
                }

            }

            function Y(e, t, s, i) {
                const n = a();
                return e.params.createElements && Object.keys(i).forEach(a => {
                    if (!s[a] && !0 === s.auto) {
                        let r = e.$el.children(`.${i[a]}`)[0];
                        r || (r = n.createElement("div"), r.className = i[a], e.$el.append(r)), s[a] = r, t[a] = r;
                    }
                }), s;
            }

            function U(e) {
                return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
            }

            function K(e, t, s) {
                const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
                    i = e.transformEl ? t.find(e.transformEl) : t;
                let n = i.children(`.${a}`);
                return n.length || (n = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), i.append(n)), n;
            }

            function Z(e, t) {
                return e.transformEl ? t.find(e.transformEl).css({
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden"
                }) : t;
            }

            Object.keys(R).forEach(e => {
                Object.keys(R[e]).forEach(t => {
                    X.prototype[t] = R[e][t];
                });
            }), X.use([function (e) {
                let {
                    swiper: t,
                    on: s,
                    emit: a
                } = e;
                const i = n();
                let r = null,
                    l = null;

                const o = () => {
                    t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
                },
                    d = () => {
                        t && !t.destroyed && t.initialized && a("orientationchange");
                    };

                s("init", () => {
                    t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver(e => {
                        l = i.requestAnimationFrame(() => {
                            const {
                                width: s,
                                height: a
                            } = t;
                            let i = s,
                                n = a;
                            e.forEach(e => {
                                let {
                                    contentBoxSize: s,
                                    contentRect: a,
                                    target: r
                                } = e;
                                r && r !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, n = a ? a.height : (s[0] || s).blockSize);
                            }), i === s && n === a || o();
                        });
                    }), r.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d));
                }), s("destroy", () => {
                    l && i.cancelAnimationFrame(l), r && r.unobserve && t.el && (r.unobserve(t.el), r = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d);
                });
            }, function (e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a,
                    emit: i
                } = e;

                const r = [],
                    l = n(),
                    o = function (e, t) {
                        void 0 === t && (t = {});
                        const s = new (l.MutationObserver || l.WebkitMutationObserver)(e => {
                            if (1 === e.length) return void i("observerUpdate", e[0]);

                            const t = function () {
                                i("observerUpdate", e[0]);
                            };

                            l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0);
                        });
                        s.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData: void 0 === t.characterData || t.characterData
                        }), r.push(s);
                    };

                s({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), a("init", () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            const e = t.$el.parents();

                            for (let t = 0; t < e.length; t += 1) o(e[t]);
                        }

                        o(t.$el[0], {
                            childList: t.params.observeSlideChildren
                        }), o(t.$wrapperEl[0], {
                            attributes: !1
                        });
                    }
                }), a("destroy", () => {
                    r.forEach(e => {
                        e.disconnect();
                    }), r.splice(0, r.length);
                });
            }]);
            const J = [function (e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a,
                    emit: i
                } = e;
                const r = n();
                let l;
                s({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null
                    }
                }), t.mousewheel = {
                    enabled: !1
                };
                let o,
                    c = u();
                const h = [];

                function m() {
                    t.enabled && (t.mouseEntered = !0);
                }

                function f() {
                    t.enabled && (t.mouseEntered = !1);
                }

                function g(e) {
                    return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = new r.Date().getTime(), !1));
                }

                function v(e) {
                    let s = e,
                        a = !0;
                    if (!t.enabled) return;
                    const n = t.params.mousewheel;
                    t.params.cssMode && s.preventDefault();
                    let r = t.$el;
                    if ("container" !== t.params.mousewheel.eventsTarget && (r = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !r[0].contains(s.target) && !n.releaseOnEdges) return !0;
                    s.originalEvent && (s = s.originalEvent);
                    let c = 0;

                    const m = t.rtlTranslate ? -1 : 1,
                        f = function (e) {
                            let t = 0,
                                s = 0,
                                a = 0,
                                i = 0;
                            return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                                spinX: t,
                                spinY: s,
                                pixelX: a,
                                pixelY: i
                            };
                        }(s);

                    if (n.forceToAxis) {
                        if (t.isHorizontal()) {
                            if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                            c = -f.pixelX * m;
                        } else {
                            if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                            c = -f.pixelY;
                        }
                    } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
                    if (0 === c) return !0;
                    n.invert && (c = -c);
                    let v = t.getTranslate() + c * n.sensitivity;

                    if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                        const e = {
                            time: u(),
                            delta: Math.abs(c),
                            direction: Math.sign(c)
                        },
                            a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;

                        if (!a) {
                            o = void 0, t.params.loop && t.loopFix();
                            let r = t.getTranslate() + c * n.sensitivity;
                            const d = t.isBeginning,
                                u = t.isEnd;

                            if (r >= t.minTranslate() && (r = t.minTranslate()), r <= t.maxTranslate() && (r = t.maxTranslate()), t.setTransition(0), t.setTranslate(r), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                                clearTimeout(l), l = void 0, h.length >= 15 && h.shift();
                                const s = h.length ? h[h.length - 1] : void 0,
                                    a = h[0];
                                if (h.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) h.splice(0); else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                                    const s = c > 0 ? 0.8 : 0.2;
                                    o = e, h.splice(0), l = p(() => {
                                        t.slideToClosest(t.params.speed, !0, void 0, s);
                                    }, 0);
                                }
                                l || (l = p(() => {
                                    o = e, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                                }, 500));
                            }

                            if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), r === t.minTranslate() || r === t.maxTranslate()) return !0;
                        }
                    } else {
                        const s = {
                            time: u(),
                            delta: Math.abs(c),
                            direction: Math.sign(c),
                            raw: e
                        };
                        h.length >= 2 && h.shift();
                        const a = h.length ? h[h.length - 1] : void 0;
                        if (h.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s), function (e) {
                            const s = t.params.mousewheel;

                            if (e.direction < 0) {
                                if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
                            } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;

                            return !1;
                        }(s)) return !0;
                    }

                    return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
                }

                function b(e) {
                    let s = t.$el;
                    "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v);
                }

                function w() {
                    return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (b("on"), t.mousewheel.enabled = !0, !0);
                }

                function y() {
                    return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (b("off"), t.mousewheel.enabled = !1, !0);
                }

                a("init", () => {
                    !t.params.mousewheel.enabled && t.params.cssMode && y(), t.params.mousewheel.enabled && w();
                }), a("destroy", () => {
                    t.params.cssMode && w(), t.mousewheel.enabled && y();
                }), Object.assign(t.mousewheel, {
                    enable: w,
                    disable: y
                });
            }, function (e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a,
                    emit: i
                } = e;

                function n(e) {
                    let s;
                    return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s;
                }

                function r(e, s) {
                    const a = t.params.navigation;
                    e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
                }

                function l() {
                    if (t.params.loop) return;
                    const {
                        $nextEl: e,
                        $prevEl: s
                    } = t.navigation;
                    r(s, t.isBeginning && !t.params.rewind), r(e, t.isEnd && !t.params.rewind);
                }

                function o(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
                }

                function c(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
                }

                function p() {
                    const e = t.params.navigation;
                    if (t.params.navigation = Y(t, t.originalParams.navigation, t.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    }), !e.nextEl && !e.prevEl) return;
                    const s = n(e.nextEl),
                        a = n(e.prevEl);
                    s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
                        $nextEl: s,
                        nextEl: s && s[0],
                        $prevEl: a,
                        prevEl: a && a[0]
                    }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
                }

                function u() {
                    const {
                        $nextEl: e,
                        $prevEl: s
                    } = t.navigation;
                    e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass));
                }

                s({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), t.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }, a("init", () => {
                    !1 === t.params.navigation.enabled ? h() : (p(), l());
                }), a("toEdge fromEdge lock unlock", () => {
                    l();
                }), a("destroy", () => {
                    u();
                }), a("enable disable", () => {
                    const {
                        $nextEl: e,
                        $prevEl: s
                    } = t.navigation;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
                }), a("click", (e, s) => {
                    const {
                        $nextEl: a,
                        $prevEl: n
                    } = t.navigation,
                        r = s.target;

                    if (t.params.navigation.hideOnClick && !d(r).is(n) && !d(r).is(a)) {
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === r || t.pagination.el.contains(r))) return;
                        let e;
                        a ? e = a.hasClass(t.params.navigation.hiddenClass) : n && (e = n.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), n && n.toggleClass(t.params.navigation.hiddenClass);
                    }
                });

                const h = () => {
                    t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
                };

                Object.assign(t.navigation, {
                    enable: () => {
                        t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l();
                    },
                    disable: h,
                    update: l,
                    init: p,
                    destroy: u
                });
            }, function (e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a,
                    emit: i
                } = e;
                const n = "swiper-pagination";
                let r;
                s({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${n}-bullet`,
                        bulletActiveClass: `${n}-bullet-active`,
                        modifierClass: `${n}-`,
                        currentClass: `${n}-current`,
                        totalClass: `${n}-total`,
                        hiddenClass: `${n}-hidden`,
                        progressbarFillClass: `${n}-progressbar-fill`,
                        progressbarOppositeClass: `${n}-progressbar-opposite`,
                        clickableClass: `${n}-clickable`,
                        lockClass: `${n}-lock`,
                        horizontalClass: `${n}-horizontal`,
                        verticalClass: `${n}-vertical`,
                        paginationDisabledClass: `${n}-disabled`
                    }
                }), t.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                let l = 0;

                function o() {
                    return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length;
                }

                function c(e, s) {
                    const {
                        bulletActiveClass: a
                    } = t.params.pagination;
                    e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
                }

                function p() {
                    const e = t.rtl,
                        s = t.params.pagination;
                    if (o()) return;
                    const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        n = t.pagination.$el;
                    let p;
                    const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;

                    if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                        const a = t.pagination.bullets;
                        let i, o, u;
                        if (s.dynamicBullets && (r = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), n.css(t.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), i = Math.max(p - l, 0), o = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (o + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${s.bulletActiveClass}${e}`).join(" ")), n.length > 1) a.each(e => {
                            const t = d(e),
                                a = t.index();
                            a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`), a === i && c(t, "prev"), a === o && c(t, "next"));
                        }); else {
                            const e = a.eq(p),
                                n = e.index();

                            if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
                                const e = a.eq(i),
                                    r = a.eq(o);

                                for (let e = i; e <= o; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);

                                if (t.params.loop) {
                                    if (n >= a.length) {
                                        for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);

                                        a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`);
                                    } else c(e, "prev"), c(r, "next");
                                } else c(e, "prev"), c(r, "next");
                            }
                        }

                        if (s.dynamicBullets) {
                            const i = Math.min(a.length, s.dynamicMainBullets + 4),
                                n = (r * i - r) / 2 - u * r,
                                l = e ? "right" : "left";
                            a.css(t.isHorizontal() ? l : "top", `${n}px`);
                        }
                    }

                    if ("fraction" === s.type && (n.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), n.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                        let e;
                        e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        const a = (p + 1) / u;
                        let i = 1,
                            r = 1;
                        "horizontal" === e ? i = a : r = a, n.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(t.params.speed);
                    }

                    "custom" === s.type && s.renderCustom ? (n.html(s.renderCustom(t, p + 1, u)), i("paginationRender", n[0])) : i("paginationUpdate", n[0]), t.params.watchOverflow && t.enabled && n[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
                }

                function u() {
                    const e = t.params.pagination;
                    if (o()) return;
                    const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        a = t.pagination.$el;
                    let n = "";

                    if ("bullets" === e.type) {
                        let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                        t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);

                        for (let s = 0; s < i; s += 1) e.renderBullet ? n += e.renderBullet.call(t, s, e.bulletClass) : n += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;

                        a.html(n), t.pagination.bullets = a.find(U(e.bulletClass));
                    }

                    "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(n)), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(n)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
                }

                function h() {
                    t.params.pagination = Y(t, t.originalParams.pagination, t.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const e = t.params.pagination;
                    if (!e.el) return;
                    let s = d(e.el);
                    0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter(e => d(e).parents(".swiper")[0] === t.el))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), function (e) {
                        e.preventDefault();
                        let s = d(this).index() * t.params.slidesPerGroup;
                        t.params.loop && (s += t.loopedSlides), t.slideTo(s);
                    }), Object.assign(t.pagination, {
                        $el: s,
                        el: s[0]
                    }), t.enabled || s.addClass(e.lockClass));
                }

                function m() {
                    const e = t.params.pagination;
                    if (o()) return;
                    const s = t.pagination.$el;
                    s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass));
                }

                a("init", () => {
                    !1 === t.params.pagination.enabled ? f() : (h(), u(), p());
                }), a("activeIndexChange", () => {
                    (t.params.loop || void 0 === t.snapIndex) && p();
                }), a("snapIndexChange", () => {
                    t.params.loop || p();
                }), a("slidesLengthChange", () => {
                    t.params.loop && (u(), p());
                }), a("snapGridLengthChange", () => {
                    t.params.loop || (u(), p());
                }), a("destroy", () => {
                    m();
                }), a("enable disable", () => {
                    const {
                        $el: e
                    } = t.pagination;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
                }), a("lock unlock", () => {
                    p();
                }), a("click", (e, s) => {
                    const a = s.target,
                        {
                            $el: n
                        } = t.pagination;

                    if (t.params.pagination.el && t.params.pagination.hideOnClick && n && n.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
                        if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
                        const e = n.hasClass(t.params.pagination.hiddenClass);
                        i(!0 === e ? "paginationShow" : "paginationHide"), n.toggleClass(t.params.pagination.hiddenClass);
                    }
                });

                const f = () => {
                    t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), m();
                };

                Object.assign(t.pagination, {
                    enable: () => {
                        t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), p();
                    },
                    disable: f,
                    render: u,
                    update: p,
                    init: h,
                    destroy: m
                });
            }, function (e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i,
                    emit: n
                } = e;
                const r = a();
                let l,
                    o,
                    c,
                    u,
                    h = !1,
                    m = null,
                    f = null;

                function g() {
                    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                    const {
                        scrollbar: e,
                        rtlTranslate: s,
                        progress: a
                    } = t,
                        {
                            $dragEl: i,
                            $el: n
                        } = e,
                        r = t.params.scrollbar;
                    let l = o,
                        d = (c - o) * a;
                    s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`), i[0].style.height = `${l}px`), r.hide && (clearTimeout(m), n[0].style.opacity = 1, m = setTimeout(() => {
                        n[0].style.opacity = 0, n.transition(400);
                    }, 1e3));
                }

                function v() {
                    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                    const {
                        scrollbar: e
                    } = t,
                        {
                            $dragEl: s,
                            $el: a
                        } = e;
                    s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`, a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass);
                }

                function b(e) {
                    return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
                }

                function w(e) {
                    const {
                        scrollbar: s,
                        rtlTranslate: a
                    } = t,
                        {
                            $el: i
                        } = s;
                    let n;
                    n = (b(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), n = Math.max(Math.min(n, 1), 0), a && (n = 1 - n);
                    const r = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * n;
                    t.updateProgress(r), t.setTranslate(r), t.updateActiveIndex(), t.updateSlidesClasses();
                }

                function y(e) {
                    const s = t.params.scrollbar,
                        {
                            scrollbar: a,
                            $wrapperEl: i
                        } = t,
                        {
                            $el: r,
                            $dragEl: o
                        } = a;
                    h = !0, l = e.target === o[0] || e.target === o ? b(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), w(e), clearTimeout(f), r.transition(0), s.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), n("scrollbarDragStart", e);
                }

                function C(e) {
                    const {
                        scrollbar: s,
                        $wrapperEl: a
                    } = t,
                        {
                            $el: i,
                            $dragEl: r
                        } = s;
                    h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, w(e), a.transition(0), i.transition(0), r.transition(0), n("scrollbarDragMove", e));
                }

                function T(e) {
                    const s = t.params.scrollbar,
                        {
                            scrollbar: a,
                            $wrapperEl: i
                        } = t,
                        {
                            $el: r
                        } = a;
                    h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p(() => {
                        r.css("opacity", 0), r.transition(400);
                    }, 1e3)), n("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
                }

                function x(e) {
                    const {
                        scrollbar: s,
                        touchEventsTouch: a,
                        touchEventsDesktop: i,
                        params: n,
                        support: l
                    } = t,
                        o = s.$el;
                    if (!o) return;
                    const d = o[0],
                        c = !(!l.passiveListener || !n.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        p = !(!l.passiveListener || !n.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    if (!d) return;
                    const u = "on" === e ? "addEventListener" : "removeEventListener";
                    l.touch ? (d[u](a.start, y, c), d[u](a.move, C, c), d[u](a.end, T, p)) : (d[u](i.start, y, c), r[u](i.move, C, c), r[u](i.end, T, p));
                }

                function S() {
                    const {
                        scrollbar: e,
                        $el: s
                    } = t;
                    t.params.scrollbar = Y(t, t.originalParams.scrollbar, t.params.scrollbar, {
                        el: "swiper-scrollbar"
                    });
                    const a = t.params.scrollbar;
                    if (!a.el) return;
                    let i = d(a.el);
                    t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
                    let n = i.find(`.${t.params.scrollbar.dragClass}`);
                    0 === n.length && (n = d(`<div class="${t.params.scrollbar.dragClass}"></div>`), i.append(n)), Object.assign(e, {
                        $el: i,
                        el: i[0],
                        $dragEl: n,
                        dragEl: n[0]
                    }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && x("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
                }

                function E() {
                    const e = t.params.scrollbar,
                        s = t.scrollbar.$el;
                    s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && x("off");
                }

                s({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                        scrollbarDisabledClass: "swiper-scrollbar-disabled",
                        horizontalClass: "swiper-scrollbar-horizontal",
                        verticalClass: "swiper-scrollbar-vertical"
                    }
                }), t.scrollbar = {
                    el: null,
                    dragEl: null,
                    $el: null,
                    $dragEl: null
                }, i("init", () => {
                    !1 === t.params.scrollbar.enabled ? $() : (S(), v(), g());
                }), i("update resize observerUpdate lock unlock", () => {
                    v();
                }), i("setTranslate", () => {
                    g();
                }), i("setTransition", (e, s) => {
                    !function (e) {
                        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
                    }(s);
                }), i("enable disable", () => {
                    const {
                        $el: e
                    } = t.scrollbar;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
                }), i("destroy", () => {
                    E();
                });

                const $ = () => {
                    t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), E();
                };

                Object.assign(t.scrollbar, {
                    enable: () => {
                        t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), S(), v(), g();
                    },
                    disable: $,
                    updateSize: v,
                    setTranslate: g,
                    init: S,
                    destroy: E
                });
            }, function (e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;

                function i(e, t) {
                    const s = function () {
                        let e, t, s;
                        return (a, i) => {
                            for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;

                            return e;
                        };
                    }();

                    let a, i;
                    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                        return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
                    }, this;
                }

                function n() {
                    t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline);
                }

                s({
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                }), t.controller = {
                    control: void 0
                }, a("beforeInit", () => {
                    t.controller.control = t.params.controller.control;
                }), a("update", () => {
                    n();
                }), a("resize", () => {
                    n();
                }), a("observerUpdate", () => {
                    n();
                }), a("setTranslate", (e, s, a) => {
                    t.controller.control && t.controller.setTranslate(s, a);
                }), a("setTransition", (e, s, a) => {
                    t.controller.control && t.controller.setTransition(s, a);
                }), Object.assign(t.controller, {
                    setTranslate: function (e, s) {
                        const a = t.controller.control;
                        let n, r;
                        const l = t.constructor;

                        function o(e) {
                            const s = t.rtlTranslate ? -t.translate : t.translate;
                            "slide" === t.params.controller.by && (!function (e) {
                                t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid));
                            }(e), r = -t.controller.spline.interpolate(-s)), r && "container" !== t.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), r = (s - t.minTranslate()) * n + e.minTranslate()), t.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, t), e.updateActiveIndex(), e.updateSlidesClasses();
                        }

                        if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]); else a instanceof l && s !== a && o(a);
                    },
                    setTransition: function (e, s) {
                        const a = t.constructor,
                            i = t.controller.control;
                        let n;

                        function r(s) {
                            s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p(() => {
                                s.updateAutoHeight();
                            }), s.$wrapperEl.transitionEnd(() => {
                                i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd());
                            }));
                        }

                        if (Array.isArray(i)) for (n = 0; n < i.length; n += 1) i[n] !== s && i[n] instanceof a && r(i[n]); else i instanceof a && s !== i && r(i);
                    }
                });
            }, function (e) {
                let t,
                    {
                        swiper: s,
                        extendParams: i,
                        on: n,
                        emit: r
                    } = e;

                function l() {
                    if (!s.size) return s.autoplay.running = !1, void (s.autoplay.paused = !1);
                    const e = s.slides.eq(s.activeIndex);
                    let a = s.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p(() => {
                        let e;
                        s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), r("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), r("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), r("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), r("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), r("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), r("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l();
                    }, a);
                }

                function o() {
                    return void 0 === t && !s.autoplay.running && (s.autoplay.running = !0, r("autoplayStart"), l(), !0);
                }

                function d() {
                    return !!s.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, r("autoplayStop"), !0);
                }

                function c(e) {
                    s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(e => {
                        s.$wrapperEl[0].addEventListener(e, h);
                    }) : (s.autoplay.paused = !1, l())));
                }

                function u() {
                    const e = a();
                    "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1);
                }

                function h(e) {
                    s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(e => {
                        s.$wrapperEl[0].removeEventListener(e, h);
                    }), s.autoplay.paused = !1, s.autoplay.running ? l() : d());
                }

                function m() {
                    s.params.autoplay.disableOnInteraction ? d() : (r("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach(e => {
                        s.$wrapperEl[0].removeEventListener(e, h);
                    });
                }

                function f() {
                    s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, r("autoplayResume"), l());
                }

                s.autoplay = {
                    running: !1,
                    paused: !1
                }, i({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), n("init", () => {
                    if (s.params.autoplay.enabled) {
                        o();
                        a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f));
                    }
                }), n("beforeTransitionStart", (e, t, a) => {
                    s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d());
                }), n("sliderFirstMove", () => {
                    s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c());
                }), n("touchEnd", () => {
                    s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l();
                }), n("destroy", () => {
                    s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
                    a().removeEventListener("visibilitychange", u);
                }), Object.assign(s.autoplay, {
                    pause: c,
                    run: l,
                    start: o,
                    stop: d
                });
            }, function (e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;
                s({
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-thumbs"
                    }
                });
                let i = !1,
                    n = !1;

                function r() {
                    const e = t.thumbs.swiper;
                    if (!e || e.destroyed) return;
                    const s = e.clickedIndex,
                        a = e.clickedSlide;
                    if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
                    if (null == s) return;
                    let i;

                    if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
                        let e = t.activeIndex;
                        t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                        const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
                            a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                        i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s;
                    }

                    t.slideTo(i);
                }

                function l() {
                    const {
                        thumbs: e
                    } = t.params;
                    if (i) return !1;
                    i = !0;
                    const s = t.constructor;
                    if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), Object.assign(t.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }); else if (m(e.swiper)) {
                        const a = Object.assign({}, e.swiper);
                        Object.assign(a, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }), t.thumbs.swiper = new s(a), n = !0;
                    }
                    return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", r), !0;
                }

                function o(e) {
                    const s = t.thumbs.swiper;
                    if (!s || s.destroyed) return;
                    const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
                    let i = 1;
                    const n = t.params.thumbs.slideThumbActiveClass;
                    if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(n), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let e = 0; e < i; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(n); else for (let e = 0; e < i; e += 1) s.slides.eq(t.realIndex + e).addClass(n);
                    const r = t.params.thumbs.autoScrollOffset,
                        l = r && !s.params.loop;

                    if (t.realIndex !== s.realIndex || l) {
                        let i,
                            n,
                            o = s.activeIndex;

                        if (s.params.loop) {
                            s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                            const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                                a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                            i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, n = t.activeIndex > t.previousIndex ? "next" : "prev";
                        } else i = t.realIndex, n = i > t.previousIndex ? "next" : "prev";

                        l && (i += "next" === n ? r : -1 * r), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : void 0));
                    }
                }

                t.thumbs = {
                    swiper: null
                }, a("beforeInit", () => {
                    const {
                        thumbs: e
                    } = t.params;
                    e && e.swiper && (l(), o(!0));
                }), a("slideChange update resize observerUpdate", () => {
                    o();
                }), a("setTransition", (e, s) => {
                    const a = t.thumbs.swiper;
                    a && !a.destroyed && a.setTransition(s);
                }), a("beforeDestroy", () => {
                    const e = t.thumbs.swiper;
                    e && !e.destroyed && n && e.destroy();
                }), Object.assign(t.thumbs, {
                    init: l,
                    update: o
                });
            }, function (e) {
                let {
                    swiper: t,
                    extendParams: s,
                    emit: a,
                    once: i
                } = e;
                s({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: 0.02
                    }
                }), Object.assign(t, {
                    freeMode: {
                        onTouchStart: function () {
                            const e = t.getTranslate();
                            t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                                currentPos: t.rtl ? t.translate : -t.translate
                            });
                        },
                        onTouchMove: function () {
                            const {
                                touchEventsData: e,
                                touches: s
                            } = t;
                            0 === e.velocities.length && e.velocities.push({
                                position: s[t.isHorizontal() ? "startX" : "startY"],
                                time: e.touchStartTime
                            }), e.velocities.push({
                                position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                time: u()
                            });
                        },
                        onTouchEnd: function (e) {
                            let {
                                currentPos: s
                            } = e;
                            const {
                                params: n,
                                $wrapperEl: r,
                                rtlTranslate: l,
                                snapGrid: o,
                                touchEventsData: d
                            } = t,
                                c = u() - d.touchStartTime;
                            if (s < -t.minTranslate()) t.slideTo(t.activeIndex); else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1); else {
                                if (n.freeMode.momentum) {
                                    if (d.velocities.length > 1) {
                                        const e = d.velocities.pop(),
                                            s = d.velocities.pop(),
                                            a = e.position - s.position,
                                            i = e.time - s.time;
                                        t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < n.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || u() - e.time > 300) && (t.velocity = 0);
                                    } else t.velocity = 0;

                                    t.velocity *= n.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                                    let e = 1e3 * n.freeMode.momentumRatio;
                                    const s = t.velocity * e;
                                    let c = t.translate + s;
                                    l && (c = -c);
                                    let p,
                                        h = !1;
                                    const m = 20 * Math.abs(t.velocity) * n.freeMode.momentumBounceRatio;
                                    let f;
                                    if (c < t.maxTranslate()) n.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), p = t.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), n.loop && n.centeredSlides && (f = !0); else if (c > t.minTranslate()) n.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), p = t.minTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), n.loop && n.centeredSlides && (f = !0); else if (n.freeMode.sticky) {
                                        let e;

                                        for (let t = 0; t < o.length; t += 1) if (o[t] > -c) {
                                            e = t;
                                            break;
                                        }

                                        c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1], c = -c;
                                    }

                                    if (f && i("transitionEnd", () => {
                                        t.loopFix();
                                    }), 0 !== t.velocity) {
                                        if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), n.freeMode.sticky) {
                                            const s = Math.abs((l ? -c : c) - t.translate),
                                                a = t.slidesSizesGrid[t.activeIndex];
                                            e = s < a ? n.speed : s < 2 * a ? 1.5 * n.speed : 2.5 * n.speed;
                                        }
                                    } else if (n.freeMode.sticky) return void t.slideToClosest();

                                    n.freeMode.momentumBounce && h ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(() => {
                                        t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(n.speed), setTimeout(() => {
                                            t.setTranslate(p), r.transitionEnd(() => {
                                                t && !t.destroyed && t.transitionEnd();
                                            });
                                        }, 0));
                                    })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(() => {
                                        t && !t.destroyed && t.transitionEnd();
                                    }))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses();
                                } else {
                                    if (n.freeMode.sticky) return void t.slideToClosest();
                                    n.freeMode && a("_freeModeNoMomentumRelease");
                                }

                                (!n.freeMode.momentum || c >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                            }
                        }
                    }
                });
            }, function (e) {
                let t,
                    s,
                    a,
                    {
                        swiper: i,
                        extendParams: n
                    } = e;
                n({
                    grid: {
                        rows: 1,
                        fill: "column"
                    }
                }), i.grid = {
                    initSlides: e => {
                        const {
                            slidesPerView: n
                        } = i.params,
                            {
                                rows: r,
                                fill: l
                            } = i.params.grid;
                        s = t / r, a = Math.floor(e / r), t = Math.floor(e / r) === e / r ? e : Math.ceil(e / r) * r, "auto" !== n && "row" === l && (t = Math.max(t, n * r));
                    },
                    updateSlide: (e, n, r, l) => {
                        const {
                            slidesPerGroup: o,
                            spaceBetween: d
                        } = i.params,
                            {
                                rows: c,
                                fill: p
                            } = i.params.grid;
                        let u, h, m;

                        if ("row" === p && o > 1) {
                            const s = Math.floor(e / (o * c)),
                                a = e - c * o * s,
                                i = 0 === s ? o : Math.min(Math.ceil((r - s * c * o) / c), o);
                            m = Math.floor(a / i), h = a - m * i + s * o, u = h + m * t / c, n.css({
                                "-webkit-order": u,
                                order: u
                            });
                        } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);

                        n.css(l("margin-top"), 0 !== m ? d && `${d}px` : "");
                    },
                    updateWrapperSize: (e, s, a) => {
                        const {
                            spaceBetween: n,
                            centeredSlides: r,
                            roundLengths: l
                        } = i.params,
                            {
                                rows: o
                            } = i.params.grid;

                        if (i.virtualSize = (e + n) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - n, i.$wrapperEl.css({
                            [a("width")]: `${i.virtualSize + n}px`
                        }), r) {
                            s.splice(0, s.length);
                            const e = [];

                            for (let t = 0; t < s.length; t += 1) {
                                let a = s[t];
                                l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a);
                            }

                            s.push(...e);
                        }
                    }
                };
            }, function (e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;
                s({
                    creativeEffect: {
                        transformEl: null,
                        limitProgress: 1,
                        shadowPerProgress: !1,
                        progressMultiplier: 1,
                        perspective: !0,
                        prev: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1
                        },
                        next: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1
                        }
                    }
                });

                const i = e => "string" == typeof e ? e : `${e}px`;

                !function (e) {
                    const {
                        effect: t,
                        swiper: s,
                        on: a,
                        setTranslate: i,
                        setTransition: n,
                        overwriteParams: r,
                        perspective: l,
                        recreateShadows: o,
                        getEffectParams: d
                    } = e;
                    let c;
                    a("beforeInit", () => {
                        if (s.params.effect !== t) return;
                        s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                        const e = r ? r() : {};
                        Object.assign(s.params, e), Object.assign(s.originalParams, e);
                    }), a("setTranslate", () => {
                        s.params.effect === t && i();
                    }), a("setTransition", (e, a) => {
                        s.params.effect === t && n(a);
                    }), a("transitionEnd", () => {
                        if (s.params.effect === t && o) {
                            if (!d || !d().slideShadows) return;
                            s.slides.each(e => {
                                s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
                            }), o();
                        }
                    }), a("virtualUpdate", () => {
                        s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame(() => {
                            c && s.slides && s.slides.length && (i(), c = !1);
                        }));
                    });
                }({
                    effect: "creative",
                    swiper: t,
                    on: a,
                    setTranslate: () => {
                        const {
                            slides: e,
                            $wrapperEl: s,
                            slidesSizesGrid: a
                        } = t,
                            n = t.params.creativeEffect,
                            {
                                progressMultiplier: r
                            } = n,
                            l = t.params.centeredSlides;

                        if (l) {
                            const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                            s.transform(`translateX(calc(50% - ${e}px))`);
                        }

                        for (let s = 0; s < e.length; s += 1) {
                            const a = e.eq(s),
                                o = a[0].progress,
                                d = Math.min(Math.max(a[0].progress, -n.limitProgress), n.limitProgress);
                            let c = d;
                            l || (c = Math.min(Math.max(a[0].originalProgress, -n.limitProgress), n.limitProgress));
                            const p = a[0].swiperSlideOffset,
                                u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                                h = [0, 0, 0];
                            let m = !1;
                            t.isHorizontal() || (u[1] = u[0], u[0] = 0);
                            let f = {
                                translate: [0, 0, 0],
                                rotate: [0, 0, 0],
                                scale: 1,
                                opacity: 1
                            };
                            d < 0 ? (f = n.next, m = !0) : d > 0 && (f = n.prev, m = !0), u.forEach((e, t) => {
                                u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * r)}))`;
                            }), h.forEach((e, t) => {
                                h[t] = f.rotate[t] * Math.abs(d * r);
                            }), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
                            const g = u.join(", "),
                                v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                                b = c < 0 ? `scale(${1 + (1 - f.scale) * c * r})` : `scale(${1 - (1 - f.scale) * c * r})`,
                                w = c < 0 ? 1 + (1 - f.opacity) * c * r : 1 - (1 - f.opacity) * c * r,
                                y = `translate3d(${g}) ${v} ${b}`;

                            if (m && f.shadow || !m) {
                                let e = a.children(".swiper-slide-shadow");

                                if (0 === e.length && f.shadow && (e = K(n, a)), e.length) {
                                    const t = n.shadowPerProgress ? d * (1 / n.limitProgress) : d;
                                    e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                                }
                            }

                            const C = Z(n, a);
                            C.transform(y).css({
                                opacity: w
                            }), f.origin && C.css("transform-origin", f.origin);
                        }
                    },
                    setTransition: e => {
                        const {
                            transformEl: s
                        } = t.params.creativeEffect;
                        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), function (e) {
                            let {
                                swiper: t,
                                duration: s,
                                transformEl: a,
                                allSlides: i
                            } = e;
                            const {
                                slides: n,
                                activeIndex: r,
                                $wrapperEl: l
                            } = t;

                            if (t.params.virtualTranslate && 0 !== s) {
                                let e,
                                    s = !1;
                                e = i ? a ? n.find(a) : n : a ? n.eq(r).find(a) : n.eq(r), e.transitionEnd(() => {
                                    if (s) return;
                                    if (!t || t.destroyed) return;
                                    s = !0, t.animating = !1;
                                    const e = ["webkitTransitionEnd", "transitionend"];

                                    for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
                                });
                            }
                        }({
                            swiper: t,
                            duration: e,
                            transformEl: s,
                            allSlides: !0
                        });
                    },
                    perspective: () => t.params.creativeEffect.perspective,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0,
                        virtualTranslate: !t.params.cssMode
                    })
                });
            }, function (e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i,
                    emit: r
                } = e;
                const l = a(),
                    o = n();

                function c(e) {
                    if (!t.enabled) return;
                    const {
                        rtlTranslate: s
                    } = t;
                    let a = e;
                    a.originalEvent && (a = a.originalEvent);
                    const i = a.keyCode || a.charCode,
                        n = t.params.keyboard.pageUpDown,
                        d = n && 33 === i,
                        c = n && 34 === i,
                        p = 37 === i,
                        u = 39 === i,
                        h = 38 === i,
                        m = 40 === i;
                    if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
                    if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;

                    if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                        if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                            let e = !1;
                            if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                            const a = t.$el,
                                i = a[0].clientWidth,
                                n = a[0].clientHeight,
                                r = o.innerWidth,
                                l = o.innerHeight,
                                d = t.$el.offset();
                            s && (d.left -= t.$el[0].scrollLeft);
                            const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + n], [d.left + i, d.top + n]];

                            for (let t = 0; t < c.length; t += 1) {
                                const s = c[t];

                                if (s[0] >= 0 && s[0] <= r && s[1] >= 0 && s[1] <= l) {
                                    if (0 === s[0] && 0 === s[1]) continue;
                                    e = !0;
                                }
                            }

                            if (!e) return;
                        }

                        t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), r("keyPress", i);
                    }
                }

                function p() {
                    t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0);
                }

                function u() {
                    t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1);
                }

                t.keyboard = {
                    enabled: !1
                }, s({
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0,
                        pageUpDown: !0
                    }
                }), i("init", () => {
                    t.params.keyboard.enabled && p();
                }), i("destroy", () => {
                    t.keyboard.enabled && u();
                }), Object.assign(t.keyboard, {
                    enable: p,
                    disable: u
                });
            }, function (e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a,
                    emit: i
                } = e;
                s({
                    lazy: {
                        checkInView: !1,
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        scrollingElement: "",
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                }), t.lazy = {};
                let r = !1,
                    l = !1;

                function o(e, s) {
                    void 0 === s && (s = !0);
                    const a = t.params.lazy;
                    if (void 0 === e) return;
                    if (0 === t.slides.length) return;
                    const n = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                        r = n.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
                    !n.hasClass(a.elementClass) || n.hasClass(a.loadedClass) || n.hasClass(a.loadingClass) || r.push(n[0]), 0 !== r.length && r.each(e => {
                        const r = d(e);
                        r.addClass(a.loadingClass);
                        const l = r.attr("data-background"),
                            c = r.attr("data-src"),
                            p = r.attr("data-srcset"),
                            u = r.attr("data-sizes"),
                            h = r.parent("picture");
                        t.loadImage(r[0], c || l, p, u, !1, () => {
                            if (null != t && t && (!t || t.params) && !t.destroyed) {
                                if (l ? (r.css("background-image", `url("${l}")`), r.removeAttr("data-background")) : (p && (r.attr("srcset", p), r.removeAttr("data-srcset")), u && (r.attr("sizes", u), r.removeAttr("data-sizes")), h.length && h.children("source").each(e => {
                                    const t = d(e);
                                    t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                                }), c && (r.attr("src", c), r.removeAttr("data-src"))), r.addClass(a.loadedClass).removeClass(a.loadingClass), n.find(`.${a.preloaderClass}`).remove(), t.params.loop && s) {
                                    const e = n.attr("data-swiper-slide-index");

                                    if (n.hasClass(t.params.slideDuplicateClass)) {
                                        o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1);
                                    } else {
                                        o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1);
                                    }
                                }

                                i("lazyImageReady", n[0], r[0]), t.params.autoHeight && t.updateAutoHeight();
                            }
                        }), i("lazyImageLoad", n[0], r[0]);
                    });
                }

                function c() {
                    const {
                        $wrapperEl: e,
                        params: s,
                        slides: a,
                        activeIndex: i
                    } = t,
                        n = t.virtual && s.virtual.enabled,
                        r = s.lazy;
                    let c = s.slidesPerView;

                    function p(t) {
                        if (n) {
                            if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0;
                        } else if (a[t]) return !0;

                        return !1;
                    }

                    function u(e) {
                        return n ? d(e).attr("data-swiper-slide-index") : d(e).index();
                    }

                    if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(`.${s.slideVisibleClass}`).each(e => {
                        o(n ? d(e).attr("data-swiper-slide-index") : d(e).index());
                    }); else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e); else o(i);
                    if (r.loadPrevNext) if (c > 1 || r.loadPrevNextAmount && r.loadPrevNextAmount > 1) {
                        const e = r.loadPrevNextAmount,
                            t = Math.ceil(c),
                            s = Math.min(i + t + Math.max(e, t), a.length),
                            n = Math.max(i - Math.max(t, e), 0);

                        for (let e = i + t; e < s; e += 1) p(e) && o(e);

                        for (let e = n; e < i; e += 1) p(e) && o(e);
                    } else {
                        const t = e.children(`.${s.slideNextClass}`);
                        t.length > 0 && o(u(t));
                        const a = e.children(`.${s.slidePrevClass}`);
                        a.length > 0 && o(u(a));
                    }
                }

                function p() {
                    const e = n();
                    if (!t || t.destroyed) return;
                    const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
                        a = s[0] === e,
                        i = a ? e.innerWidth : s[0].offsetWidth,
                        l = a ? e.innerHeight : s[0].offsetHeight,
                        o = t.$el.offset(),
                        {
                            rtlTranslate: u
                        } = t;
                    let h = !1;
                    u && (o.left -= t.$el[0].scrollLeft);
                    const m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];

                    for (let e = 0; e < m.length; e += 1) {
                        const t = m[e];

                        if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                            if (0 === t[0] && 0 === t[1]) continue;
                            h = !0;
                        }
                    }

                    const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    h ? (c(), s.off("scroll", p, f)) : r || (r = !0, s.on("scroll", p, f));
                }

                a("beforeInit", () => {
                    t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
                }), a("init", () => {
                    t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
                }), a("scroll", () => {
                    t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c();
                }), a("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
                    t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
                }), a("transitionStart", () => {
                    t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c());
                }), a("transitionEnd", () => {
                    t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c());
                }), a("slideChange", () => {
                    const {
                        lazy: e,
                        cssMode: s,
                        watchSlidesProgress: a,
                        touchReleaseOnEdges: i,
                        resistanceRatio: n
                    } = t.params;
                    e.enabled && (s || a && (i || 0 === n)) && c();
                }), a("destroy", () => {
                    t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass);
                }), Object.assign(t.lazy, {
                    load: c,
                    loadInSlide: o
                });
            }];
            return X.use(J), X;
        });
    });

    var swiper_main_banner;

    function autoSlideNextOnThumbSlide(initSwiper, element, thumb) {
        let activeIndex = initSwiper.activeIndex + 1;
        let activeSlide = document.querySelector(`${element} ${thumb} .swiper-slide:nth-child(${activeIndex})`);
        let nextSlide = document.querySelector(`${element} ${thumb} .swiper-slide:nth-child(${activeIndex + 1})`);
        let prevSlide = document.querySelector(`${element} ${thumb} .swiper-slide:nth-child(${activeIndex - 1})`);

        if (nextSlide && !nextSlide.classList.contains("swiper-slide-visible")) {
            initSwiper.thumbs.swiper.slideNext();
        } else if (prevSlide && !prevSlide.classList.contains("swiper-slide-visible")) {
            initSwiper.thumbs.swiper.slidePrev();
        }
    }

    function swiperInit() {
        var swiperParameter = {
            speed: 500,
            observer: true,
            observeParents: true,
            breakpoints: {
                1280: {
                    spaceBetween: 30,
                    slidesPerView: 3
                },
                1024: {
                    spaceBetween: 15,
                    slidesPerView: 3
                },
                576: {
                    spaceBetween: 15,
                    slidesPerView: 2
                },
                320: {
                    spaceBetween: 10,
                    slidesPerView: 1
                }
            }
        };
        var onMobileWidth;
        ww >= 1024 ? onMobileWidth = false : onMobileWidth = true;
        swiper_main_banner = new swiper("#main-banner .swiper", {
            spaceBetween: 0,
            autoplay: {
                delay: 10000
            },
            lazy: true,
            effect: "creative",
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: ["-20%", 0, -1]
                },
                next: {
                    translate: ["100%", 0, 0]
                }
            },
            speed: 500,
            observer: true,
            observeParents: true,
            pagination: {
                el: "#main-banner .swiper-pagination"
            },
            navigation: {
                prevEl: "#main-banner .swiper-button-prev",
                nextEl: "#main-banner .swiper-button-next"
            },
            autoHeight: onMobileWidth
        });

        if (ww < 1024) {
            $("#main-banner .arrow-button [class*='swiper-button']").on("click", function () {
                console.log("sad");
                setTimeout(() => {
                    $("html,body").animate({
                        scrollTop: 0
                    });
                }, 500);
            });
        }

        var home_2 = new swiper(".home-2 .swiper", {
            spaceBetween: 0,
            speed: 500,
            observer: true,
            observeParents: true,
            lazy: {
                loadOnTransitionStart: true,
                loadPrevNext: true
            },
            navigation: {
                prevEl: ".home-2 .swiper-button-prev",
                nextEl: ".home-2 .swiper-button-next"
            },
            breakpoints: {
                1280: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 2
                },
                320: {
                    slidesPerView: 1
                }
            }
        });
        var home_3 = new swiper(".home-3 .swiper", {
            spaceBetween: 0,
            speed: 500,
            observer: true,
            observeParents: true,
            navigation: {
                prevEl: ".home-3 .swiper-button-prev",
                nextEl: ".home-3 .swiper-button-next"
            },
            breakpoints: {
                1280: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 2
                },
                320: {
                    slidesPerView: 1
                }
            }
        });
        var home_5 = new swiper(".home-5 .swiper", {
            ...swiperParameter,
            navigation: {
                prevEl: ".home-5 .swiper-button-prev",
                nextEl: ".home-5 .swiper-button-next"
            }
        }); // **** Introduce **** //

        var introduce_slide = new swiper(".introduce-slide .swiper", {
            ...swiperParameter,
            navigation: {
                prevEl: ".introduce-slide .swiper-button-prev",
                nextEl: ".introduce-slide .swiper-button-next"
            }
        }); // **** Product **** //

        var system_detail = new swiper(".systemdetail-1 .thumb .swiper", {
            speed: 500,
            observer: true,
            observeParents: true,
            allowTouchMove: false,
            breakpoints: {
                1280: {
                    spaceBetween: 20,
                    slidesPerView: 4
                },
                576: {
                    spaceBetween: 10,
                    slidesPerView: 3
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5
                }
            }
        });
        var system_main = new swiper(".systemdetail-1 .main .swiper", {
            speed: 500,
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            spaceBetween: 0,
            thumbs: {
                swiper: system_detail
            },
            navigation: {
                prevEl: ".systemdetail-1 .swiper-button-prev",
                nextEl: ".systemdetail-1 .swiper-button-next"
            },
            on: {
                slideChange: function () {
                    //
                    autoSlideNextOnThumbSlide(this, ".systemdetail-1", ".thumb");
                }
            }
        });
        var news_other = new swiper(".newsother .swiper", {
            ...swiperParameter,
            navigation: {
                prevEl: ".newsother .swiper-button-prev",
                nextEl: ".newsother .swiper-button-next"
            }
        });
    }

    var item = createCommonjsModule(function (module, exports) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = void 0;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }

        var Item = /*#__PURE__*/function () {
            /**
             * @constructs Item
             *
             * @param {*} item
             * @param {function} extractor
             */
            function Item(item) {
                var extractor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (i) {
                    return i;
                };

                _classCallCheck(this, Item);

                this.item = item;
                this.extractor = extractor;
            }
            /**
             * Construct array of items
             *
             * @param {*[]} items
             * @param {function} extractor
              * @return {Item[]}
             */


            _createClass(Item, [{
                key: "value",
                get:
                    /**
                     * Extract set item value used for partitioning
                     *
                     * @return {number}
                     */
                    function get() {
                        return this.extractor(this.item);
                    }
                /**
                 * Extract set item value used for partitioning
                 *
                 * @return {*}
                 */

            }, {
                key: "lean",
                value: function lean() {
                    return this.item;
                }
            }], [{
                key: "from",
                value: function from() {
                    var _this = this;

                    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    var extractor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (i) {
                        return i;
                    };
                    return items.map(function (i) {
                        return new _this(i, extractor);
                    });
                }
            }]);

            return Item;
        }();

        exports["default"] = Item;
    });

    unwrapExports(item);

    var subset = createCommonjsModule(function (module, exports) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = void 0;

        var _item = _interopRequireDefault(item);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }

        var Subset = /*#__PURE__*/function () {
            /**
             * Subset object represents a single partition
             *
             * @constructs Subset
             *
             * @param {Item[]} items
             */
            function Subset() {
                var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                _classCallCheck(this, Subset);

                this.items = items;
                this.sum = this.items.reduce(function (a, c) {
                    return a + c.value;
                }, 0);
            }
            /**
             * Returns number of set items
             *
             * @return {number}
             */


            _createClass(Subset, [{
                key: "count",
                value: function count() {
                    return this.items.length;
                }
                /**
                 * Appends new item
                 *
                 * @return {this}
                 */

            }, {
                key: "append",
                value: function append(item) {
                    if (!(item instanceof _item["default"])) {
                        throw new Error('Parameter must me of type \'Item\'');
                    }

                    this.items.push(item);
                    this.sum += item.value;
                    return this;
                }
                /**
                 * Returns lean items array
                 *
                 * @return {*[]}
                 */

            }, {
                key: "lean",
                value: function lean() {
                    return this.items.map(function (i) {
                        return i.lean();
                    });
                }
            }]);

            return Subset;
        }();

        exports["default"] = Subset;
    });

    unwrapExports(subset);

    var chronological = createCommonjsModule(function (module, exports) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = void 0;

        var _subset = _interopRequireDefault(subset);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }

        function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }

        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }

        function _iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;

            for (var i = 0, arr2 = new Array(len); i < len; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }

        var Chronological = /*#__PURE__*/function () {
            function Chronological() {
                _classCallCheck(this, Chronological);
            }

            _createClass(Chronological, null, [{
                key: "partition",
                value:
                    /**
                     * Partition items into subsets
                     *
                     * @static
                     *
                     * @param {Item[]} items
                     * @param {number} count
                     * @return {Subset[]}
                     */
                    function partition(items, count) {
                        var subsets = _toConsumableArray(Array(count)).map(function (_) {
                            return new _subset["default"]();
                        });

                        if (count > 0) {
                            items.forEach(function (item, index) {
                                return subsets[index % count].append(item);
                            });
                        }

                        return subsets;
                    }
                /**
                 * Append item to one of the subsets
                 *
                 * @static
                 *
                 * @param {Subset[]} subsets
                 * @param {Item} item
                 * @return {number}
                 */

            }, {
                key: "append",
                value: function append(subsets, item) {
                    if (!Array.isArray(subsets) || !subsets.length) {
                        throw new Error('Cannot append without subsets');
                    }

                    var count = subsets.reduce(function (a, c) {
                        return a + c.count();
                    }, 0);
                    var index = count % subsets.length;
                    subsets[index].append(item);
                    return index;
                }
            }]);

            return Chronological;
        }();

        exports["default"] = Chronological;
    });

    unwrapExports(chronological);

    var greedy = createCommonjsModule(function (module, exports) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = void 0;

        var _subset = _interopRequireDefault(subset);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }

        function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }

        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }

        function _iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;

            for (var i = 0, arr2 = new Array(len); i < len; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }

        var Greedy = /*#__PURE__*/function () {
            function Greedy() {
                _classCallCheck(this, Greedy);
            }

            _createClass(Greedy, null, [{
                key: "partition",
                value:
                    /**
                     * Partition items into subsets
                     *
                     * @static
                     *
                     * @param {Item[]} items
                     * @param {number} count
                     * @return {Subset[]}
                     */
                    function partition(items, count) {
                        var subsets = _toConsumableArray(Array(count)).map(function (_) {
                            return new _subset["default"]();
                        });

                        var sums = _toConsumableArray(Array(count)).map(function (_) {
                            return 0;
                        });

                        if (count > 0) {
                            _toConsumableArray(items).sort(function (a, b) {
                                return b.value - a.value;
                            }).forEach(function (item) {
                                var min = sums.reduce(function (min, sum, index) {
                                    return sums[min] <= sum ? min : index;
                                }, 0);
                                sums[min] += item.value;
                                item._subset = min;
                            });

                            items.forEach(function (item) {
                                return subsets[item._subset].append(item);
                            });
                        }

                        return subsets;
                    }
                /**
                 * Append item to one of the subsets
                 *
                 * @static
                 *
                 * @param {Subset[]} subsets
                 * @param {Item} item
                 * @return {number}
                 */

            }, {
                key: "append",
                value: function append(subsets, item) {
                    if (!Array.isArray(subsets) || !subsets.length) {
                        throw new Error('Cannot append without subsets');
                    }

                    var min = subsets.reduce(function (min, subset, index) {
                        return subsets[min].sum <= subset.sum ? min : index;
                    }, 0);
                    subsets[min].append(item);
                    return min;
                }
            }]);

            return Greedy;
        }();

        exports["default"] = Greedy;
    });

    unwrapExports(greedy);

    var set = createCommonjsModule(function (module, exports) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = void 0;

        var _chronological = _interopRequireDefault(chronological);

        var _greedy = _interopRequireDefault(greedy);

        var _item = _interopRequireDefault(item);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }

        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }

            return obj;
        }

        var Set = /*#__PURE__*/function () {
            /**
             * @constructs Set
             *
             * @param {*[]} items
             * @param {?function} extractor
             * @param {string} algorithm
             */
            function Set() {
                var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    _ref$extractor = _ref.extractor,
                    extractor = _ref$extractor === void 0 ? function (i) {
                        return i;
                    } : _ref$extractor,
                    _ref$algorithm = _ref.algorithm,
                    algorithm = _ref$algorithm === void 0 ? 'greedy' : _ref$algorithm;

                _classCallCheck(this, Set);

                this.extractor = extractor;
                this.items = _item["default"].from(items, this.extractor);
                var AlgorithmClass = this.constructor.algorithms[algorithm];

                if (typeof AlgorithmClass === 'undefined') {
                    throw new Error('Unsupported partitioning algorithm');
                }

                this.algorithm = AlgorithmClass;
                this.subsets = [];
            }
            /**
             * Partitions items into given number of subsets
             * according to the selected algorithm
             *
             * @param {number} count
             * @return {Subset[]}
             */


            _createClass(Set, [{
                key: "partition",
                value: function partition(count) {
                    this.subsets = this.algorithm.partition(this.items, count);
                    return this.subsets;
                }
                /**
                 * Appends item to one of the subsets
                 * according to selected algorithm and
                 * returns the index of the selected subset
                 *
                 * @param {*} item
                 * @return {number}
                 */

            }, {
                key: "append",
                value: function append(item) {
                    var wrapped = new _item["default"](item, this.extractor);
                    this.items.push(wrapped);
                    return this.algorithm.append(this.subsets, wrapped);
                }
            }]);

            return Set;
        }();

        exports["default"] = Set;

        _defineProperty(Set, "algorithms", {
            greedy: _greedy["default"],
            chronological: _chronological["default"]
        });
    });

    unwrapExports(set);

    var columns = createCommonjsModule(function (module, exports) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = void 0;

        var _set = _interopRequireDefault(set);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }

        function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }

        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        function _iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }

        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;

            for (var i = 0, arr2 = new Array(len); i < len; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
            if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }

        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);

            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
                keys.push.apply(keys, symbols);
            }

            return keys;
        }

        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i] != null ? arguments[i] : {};

                if (i % 2) {
                    ownKeys(Object(source), true).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                    });
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                } else {
                    ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    });
                }
            }

            return target;
        }

        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }

            return obj;
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }

        var Columns = /*#__PURE__*/function () {
            function Columns(container) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                _classCallCheck(this, Columns);

                this.container = container;
                this.options = _objectSpread({
                    columns: 1,
                    breakpoints: null,
                    column_class: 'column-js',
                    algorithm: 'greedy'
                }, options);
                this.set = new _set["default"](Array.from(this.container.children) || [], {
                    algorithm: this.options.algorithm,
                    extractor: function extractor(i) {
                        return i.getBoundingClientRect().height;
                    }
                });
                this.render();
            }

            _createClass(Columns, [{
                key: "count",
                value: function count() {
                    var columnCount = this.options.columns;
                    var windowWidth = window.innerWidth;
                    Object.entries(this.options.breakpoints || {}).some(function (_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            breakpoint = _ref2[0],
                            count = _ref2[1];

                        if (windowWidth < breakpoint) {
                            return true;
                        }

                        columnCount = count;
                    });
                    return columnCount;
                }
            }, {
                key: "append",
                value: function append(element) {
                    // Temporary append element to the first column
                    // to be able to calculate height
                    this.container.children[0].append(element);
                    var column = this.set.append(element);
                    this.container.children[column].append(element);
                    return this;
                }
            }, {
                key: "render",
                value: function render() {
                    var _this$container;

                    var count = this.count();

                    var columns = this._prepareColumns(count);

                    this.set.partition(count).forEach(function (c, i) {
                        var _columns$i;

                        return (_columns$i = columns[i]).append.apply(_columns$i, _toConsumableArray(c.lean()));
                    });
                    this.container.dataset.columns = count;

                    while (this.container.firstChild) {
                        this.container.removeChild(this.container.firstChild);
                    }

                    (_this$container = this.container).append.apply(_this$container, _toConsumableArray(columns));

                    return this;
                }
            }, {
                key: "setOptions",
                value: function setOptions() {
                    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    this.options = _objectSpread(_objectSpread({}, this.options), options);
                }
            }, {
                key: "_prepareColumns",
                value: function _prepareColumns(count) {
                    var _this = this;

                    var columns = [];

                    _toConsumableArray(Array(count)).forEach(function () {
                        var column = document.createElement('div');
                        column.classList.add(_this.options.column_class);
                        columns.push(column);
                    });

                    return columns;
                }
            }]);

            return Columns;
        }();

        exports["default"] = Columns;
    });

    var Columns = unwrapExports(columns);

    var aos = createCommonjsModule(function (module, exports) {
        !function (e, t) {
            module.exports = t();
        }(commonjsGlobal, function () {
            return function (e) {
                function t(o) {
                    if (n[o]) return n[o].exports;
                    var i = n[o] = {
                        exports: {},
                        id: o,
                        loaded: !1
                    };
                    return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
                }

                var n = {};
                return t.m = e, t.c = n, t.p = "dist/", t(0);
            }([function (e, t, n) {

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }

                var i = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];

                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                    }

                    return e;
                },
                    r = n(1),
                    a = (o(r), n(6)),
                    u = o(a),
                    c = n(7),
                    s = o(c),
                    f = n(8),
                    d = o(f),
                    l = n(9),
                    p = o(l),
                    m = n(10),
                    b = o(m),
                    v = n(11),
                    y = o(v),
                    g = n(14),
                    h = o(g),
                    w = [],
                    k = !1,
                    x = {
                        offset: 120,
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        disable: !1,
                        once: !1,
                        startEvent: "DOMContentLoaded",
                        throttleDelay: 99,
                        debounceDelay: 50,
                        disableMutationObserver: !1
                    },
                    j = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
                    },
                    O = function () {
                        w = (0, h.default)(), j();
                    },
                    M = function () {
                        w.forEach(function (e, t) {
                            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
                        });
                    },
                    S = function (e) {
                        return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
                    },
                    _ = function (e) {
                        x = i(x, e), w = (0, h.default)();
                        var t = document.all && !window.atob;
                        return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function () {
                            j(!0);
                        }) : document.addEventListener(x.startEvent, function () {
                            j(!0);
                        }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function () {
                            (0, b.default)(w, x.once);
                        }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
                    };

                e.exports = {
                    init: _,
                    refresh: j,
                    refreshHard: O
                };
            }, function (e, t) { }, , , , , function (e, t) {
                (function (t) {

                    function n(e, t, n) {
                        function o(t) {
                            var n = b,
                                o = v;
                            return b = v = void 0, k = t, g = e.apply(o, n);
                        }

                        function r(e) {
                            return k = e, h = setTimeout(f, t), M ? o(e) : g;
                        }

                        function a(e) {
                            var n = e - w,
                                o = e - k,
                                i = t - n;
                            return S ? j(i, y - o) : i;
                        }

                        function c(e) {
                            var n = e - w,
                                o = e - k;
                            return void 0 === w || n >= t || n < 0 || S && o >= y;
                        }

                        function f() {
                            var e = O();
                            return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
                        }

                        function d(e) {
                            return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
                        }

                        function l() {
                            void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
                        }

                        function p() {
                            return void 0 === h ? g : d(O());
                        }

                        function m() {
                            var e = O(),
                                n = c(e);

                            if (b = arguments, v = this, w = e, n) {
                                if (void 0 === h) return r(w);
                                if (S) return h = setTimeout(f, t), o(w);
                            }

                            return void 0 === h && (h = setTimeout(f, t)), g;
                        }

                        var b,
                            v,
                            y,
                            g,
                            h,
                            w,
                            k = 0,
                            M = !1,
                            S = !1,
                            _ = !0;

                        if ("function" != typeof e) throw new TypeError(s);
                        return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                    }

                    function o(e, t, o) {
                        var r = !0,
                            a = !0;
                        if ("function" != typeof e) throw new TypeError(s);
                        return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
                            leading: r,
                            maxWait: t,
                            trailing: a
                        });
                    }

                    function i(e) {
                        var t = "undefined" == typeof e ? "undefined" : c(e);
                        return !!e && ("object" == t || "function" == t);
                    }

                    function r(e) {
                        return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
                    }

                    function a(e) {
                        return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
                    }

                    function u(e) {
                        if ("number" == typeof e) return e;
                        if (a(e)) return f;

                        if (i(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = i(t) ? t + "" : t;
                        }

                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(l, "");
                        var n = m.test(e);
                        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
                    }

                    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    },
                        s = "Expected a function",
                        f = NaN,
                        d = "[object Symbol]",
                        l = /^\s+|\s+$/g,
                        p = /^[-+]0x[0-9a-f]+$/i,
                        m = /^0b[01]+$/i,
                        b = /^0o[0-7]+$/i,
                        v = parseInt,
                        y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
                        g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                        h = y || g || Function("return this")(),
                        w = Object.prototype,
                        k = w.toString,
                        x = Math.max,
                        j = Math.min,
                        O = function () {
                            return h.Date.now();
                        };

                    e.exports = o;
                }).call(t, function () {
                    return this;
                }());
            }, function (e, t) {
                (function (t) {

                    function n(e, t, n) {
                        function i(t) {
                            var n = b,
                                o = v;
                            return b = v = void 0, O = t, g = e.apply(o, n);
                        }

                        function r(e) {
                            return O = e, h = setTimeout(f, t), M ? i(e) : g;
                        }

                        function u(e) {
                            var n = e - w,
                                o = e - O,
                                i = t - n;
                            return S ? x(i, y - o) : i;
                        }

                        function s(e) {
                            var n = e - w,
                                o = e - O;
                            return void 0 === w || n >= t || n < 0 || S && o >= y;
                        }

                        function f() {
                            var e = j();
                            return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
                        }

                        function d(e) {
                            return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
                        }

                        function l() {
                            void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
                        }

                        function p() {
                            return void 0 === h ? g : d(j());
                        }

                        function m() {
                            var e = j(),
                                n = s(e);

                            if (b = arguments, v = this, w = e, n) {
                                if (void 0 === h) return r(w);
                                if (S) return h = setTimeout(f, t), i(w);
                            }

                            return void 0 === h && (h = setTimeout(f, t)), g;
                        }

                        var b,
                            v,
                            y,
                            g,
                            h,
                            w,
                            O = 0,
                            M = !1,
                            S = !1,
                            _ = !0;

                        if ("function" != typeof e) throw new TypeError(c);
                        return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                    }

                    function o(e) {
                        var t = "undefined" == typeof e ? "undefined" : u(e);
                        return !!e && ("object" == t || "function" == t);
                    }

                    function i(e) {
                        return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
                    }

                    function r(e) {
                        return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
                    }

                    function a(e) {
                        if ("number" == typeof e) return e;
                        if (r(e)) return s;

                        if (o(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = o(t) ? t + "" : t;
                        }

                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(d, "");
                        var n = p.test(e);
                        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
                    }

                    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    },
                        c = "Expected a function",
                        s = NaN,
                        f = "[object Symbol]",
                        d = /^\s+|\s+$/g,
                        l = /^[-+]0x[0-9a-f]+$/i,
                        p = /^0b[01]+$/i,
                        m = /^0o[0-7]+$/i,
                        b = parseInt,
                        v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
                        y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                        g = v || y || Function("return this")(),
                        h = Object.prototype,
                        w = h.toString,
                        k = Math.max,
                        x = Math.min,
                        j = function () {
                            return g.Date.now();
                        };

                    e.exports = n;
                }).call(t, function () {
                    return this;
                }());
            }, function (e, t) {

                function n(e) {
                    var t = void 0,
                        o = void 0,
                        i = void 0;

                    for (t = 0; t < e.length; t += 1) {
                        if (o = e[t], o.dataset && o.dataset.aos) return !0;
                        if (i = o.children && n(o.children)) return !0;
                    }

                    return !1;
                }

                function o() {
                    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                }

                function i() {
                    return !!o();
                }

                function r(e, t) {
                    var n = window.document,
                        i = o(),
                        r = new i(a);
                    u = t, r.observe(n.documentElement, {
                        childList: !0,
                        subtree: !0,
                        removedNodes: !0
                    });
                }

                function a(e) {
                    e && e.forEach(function (e) {
                        var t = Array.prototype.slice.call(e.addedNodes),
                            o = Array.prototype.slice.call(e.removedNodes),
                            i = t.concat(o);
                        if (n(i)) return u();
                    });
                }

                Object.defineProperty(t, "__esModule", {
                    value: !0
                });

                var u = function () { };

                t.default = {
                    isSupported: i,
                    ready: r
                };
            }, function (e, t) {

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }

                function o() {
                    return navigator.userAgent || navigator.vendor || window.opera || "";
                }

                Object.defineProperty(t, "__esModule", {
                    value: !0
                });

                var i = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                        }
                    }

                    return function (t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t;
                    };
                }(),
                    r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                    c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    s = function () {
                        function e() {
                            n(this, e);
                        }

                        return i(e, [{
                            key: "phone",
                            value: function () {
                                var e = o();
                                return !(!r.test(e) && !a.test(e.substr(0, 4)));
                            }
                        }, {
                            key: "mobile",
                            value: function () {
                                var e = o();
                                return !(!u.test(e) && !c.test(e.substr(0, 4)));
                            }
                        }, {
                            key: "tablet",
                            value: function () {
                                return this.mobile() && !this.phone();
                            }
                        }]), e;
                    }();

                t.default = new s();
            }, function (e, t) {

                Object.defineProperty(t, "__esModule", {
                    value: !0
                });

                var n = function (e, t, n) {
                    var o = e.node.getAttribute("data-aos-once");
                    t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
                },
                    o = function (e, t) {
                        var o = window.pageYOffset,
                            i = window.innerHeight;
                        e.forEach(function (e, r) {
                            n(e, i + o, t);
                        });
                    };

                t.default = o;
            }, function (e, t, n) {

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }

                Object.defineProperty(t, "__esModule", {
                    value: !0
                });

                var i = n(12),
                    r = o(i),
                    a = function (e, t) {
                        return e.forEach(function (e, n) {
                            e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
                        }), e;
                    };

                t.default = a;
            }, function (e, t, n) {

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }

                Object.defineProperty(t, "__esModule", {
                    value: !0
                });

                var i = n(13),
                    r = o(i),
                    a = function (e, t) {
                        var n = 0,
                            o = 0,
                            i = window.innerHeight,
                            a = {
                                offset: e.getAttribute("data-aos-offset"),
                                anchor: e.getAttribute("data-aos-anchor"),
                                anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                            };

                        switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
                            case "top-bottom":
                                break;

                            case "center-bottom":
                                n += e.offsetHeight / 2;
                                break;

                            case "bottom-bottom":
                                n += e.offsetHeight;
                                break;

                            case "top-center":
                                n += i / 2;
                                break;

                            case "bottom-center":
                                n += i / 2 + e.offsetHeight;
                                break;

                            case "center-center":
                                n += i / 2 + e.offsetHeight / 2;
                                break;

                            case "top-top":
                                n += i;
                                break;

                            case "bottom-top":
                                n += e.offsetHeight + i;
                                break;

                            case "center-top":
                                n += e.offsetHeight / 2 + i;
                        }

                        return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
                    };

                t.default = a;
            }, function (e, t) {

                Object.defineProperty(t, "__esModule", {
                    value: !0
                });

                var n = function (e) {
                    for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;

                    return {
                        top: n,
                        left: t
                    };
                };

                t.default = n;
            }, function (e, t) {

                Object.defineProperty(t, "__esModule", {
                    value: !0
                });

                var n = function (e) {
                    return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
                        return {
                            node: e
                        };
                    });
                };

                t.default = n;
            }]);
        });
    });

    var AOS = unwrapExports(aos);
    var aos_1 = aos.AOS;

    $.fn.hasAttr = function (name) {
        return this.attr(name) !== undefined;
    }; // ******* Global Variable s*******
    // *** Window


    var ww = $(window).width();
    var body = $("body"); // *** Header *** //

    var header = $("header");
    exports.height_header = header.outerHeight();
    var menu_nav = header.find("nav");
    var burger = header.find("#burger");
    var overlay = $("#overlay"); // *** Nav Moble *** //

    var nav_mobile = $(".nav-mobile");
    var ul_Child = nav_mobile.find(".has-child");
    var close_NB = nav_mobile.find(".close-nav-mobile"); // *** Banner *** //

    var pagesBanner = $("#page-banner");
    var mainBanner = $("#main-banner"); // *** Footer *** //

    $(".search-overlay").removeClass("active");
    var mainSection = $("main");
    var footer = $("footer"); // *** Component *** //
    // Search

    var btn_BackToTop = $("#back-to-top");
    const headerFunction = {
        onScroll: () => {
            $(window).on("scroll", function () {
                if ($(this).scrollTop() > exports.height_header) {
                    header.addClass("header-scroll");
                    $(".search-overlay").addClass("header-scroll");
                } else {
                    header.removeClass("header-scroll");
                    $(".search-overlay").removeClass("header-scroll");
                }

                exports.height_header = header.outerHeight();
                $("html").css({
                    "--header-height": header.outerHeight() + "px"
                });

                if ($(this).scrollTop() == 0) {
                    setTimeout(() => {
                        exports.height_header = header.outerHeight();
                        $("html").css({
                            "--header-height": header.outerHeight() + "px"
                        });
                    }, 300);
                }
            });

            if ($(window).scrollTop() > exports.height_header) {
                setTimeout(() => {
                    header.addClass("header-scroll");
                    setTimeout(() => {
                        exports.height_header = header.outerHeight();
                        $("html").css({
                            "--header-height": header.outerHeight() + "px"
                        });
                    }, 500);
                }, 300);
            }
        },
        removeActiveCpn: () => {
            burger.removeClass("active");
            nav_mobile.removeClass("active");
            overlay.removeClass("active");
            body.removeClass("ovh");
            header.removeClass("navMobileOpen");
        },
        navMobileSlide: () => {
            burger.on("click", function () {
                burger.toggleClass("active");
                nav_mobile.toggleClass("active");
                overlay.toggleClass("active");
                body.toggleClass("ovh");
                header.toggleClass("navMobileOpen");
            });
            overlay.on("click", function () {
                headerFunction.removeActiveCpn();
            });
            close_NB.on("click", function () {
                headerFunction.removeActiveCpn();
            });
        },
        navMobileChild: () => {
            var li = nav_mobile.find("li");
            var liChild = nav_mobile.find("li.has-child"); // nav_mobile.find("nav >ul >li").each(function (e) {
            // 	e++;
            // 	$(this).css("transition-delay", e * 0.3 + "s");
            // });
            //

            liChild.find("em").on("click", function () {
                if ($(this).closest("li").is(".checkActive")) {
                    $(this).closest("li").removeClass("checkActive");
                    $(this).closest("li").find(".child").slideUp();
                } else {
                    liChild.removeClass("checkActive");
                    $(this).closest("li").addClass("checkActive");
                    liChild.find(".child").slideUp();
                    $(this).closest("li").find(".child").slideDown();
                }
            }); // onLoad

            li.each(function () {
                if ($(this).is(".active")) {
                    $(this).find(".child").show();
                }
            });
        },
        searchActive: () => {
            //
            $(".search-icon").on("click", function () {
                $(".search-overlay").addClass("active");
                setTimeout(() => {
                    $(".search-overlay .searchbox input").trigger("focus");
                }, 500);
            });
            $(".search-overlay .searchbox input").on("focus", function () {
                $(this).parent().addClass("active");
            });
            $(".search-overlay .searchbox input").on("focusout", function () {
                $(this).parent().removeClass("active");
            }); // $(document).on("click", function (event) {
            // 	var $trigger = $("header");
            // 	var $trigger_2 = $(".search-overlay");
            // 	if (
            // 		$trigger !== event.target &&
            // 		!$trigger.has(event.target).length &&
            // 		$trigger_2 !== event.target &&
            // 		!$trigger_2.has(event.target).length
            // 	) {
            // 		$(".search-overlay").removeClass("active");
            // 	}
            // });

            $(".close-search").on("click", function () {
                $(".search-overlay").removeClass("active");
            });
            $(".search-overlay input").keyup(function () {
                $(".search-overlay .searchbox").addClass("fixed-title");

                if ($(this).val() == "") {
                    $(".search-overlay .searchbox").removeClass("fixed-title");
                }
            }); // Press ESC to close Search

            setTimeout(() => {
                $(window).on("keyup", function (event) {
                    var e = event.keyCode;

                    if (e == 27) {
                        $(".search-overlay").removeClass("active");
                    }
                });
            }, 500); // Trigger click with 2 button

            $(".search-overlay .searchbox input[type='text']").keypress(function (n) {
                if (n.keyCode == 13) $(".searchbox button").trigger("click"), console.log("click");
            });
        },
        escBtn: () => {
            $(window).on("keyup", function (event) {
                var e = event.keyCode;

                if (e == 27) {
                    nav_mobile.removeClass("active");
                    header.removeClass("blur-content");
                    burger.removeClass("active");
                    overlay.removeClass("active");
                    body.removeClass("ovh");
                    header.removeClass("navMobileOpen");
                }
            });
        },
        init: () => {
            headerFunction.onScroll();
            headerFunction.navMobileSlide();
            headerFunction.navMobileChild();
            headerFunction.searchActive();
            headerFunction.escBtn();
        }
    };

    function expandItem() {
        // Filter Load
        var hasLoadBtn = $("[has-expand-btn]");
        hasLoadBtn.each(function () {
            var $this = $(this);
            var expandBtn = $(this).find(".expand-btn");
            var list = $(this).find(".expand-item").length;
            var count;
            var countMobile = $(this).attr("item-count-mobile");
            countMobile != undefined && countMobile != 0 && ww < 576 ? count = Number($(this).attr("item-count-mobile")) : count = Number($(this).attr("item-count"));
            var expand = Number($(this).attr("item-expand")); //=// Init

            function init(initValue, thisFunction) {
                if (list >= initValue) {
                    thisFunction.find(".expand-item").slice(0, initValue).slideDown({
                        complete: function () {
                            $(this).addClass("done-animated");
                        }
                    });
                } else {
                    thisFunction.find(".expand-item").slideDown();
                    thisFunction.find(".expand-item").addClass("done-animated");
                }

                if (list == 0 || list <= initValue) {
                    expandBtn.hide();
                }
            }

            init(count, $this); // Click

            function expandBtnInit(initCount, thisFunction) {
                count = initCount + expand <= list ? initCount + expand : list;
                thisFunction.closest(hasLoadBtn).find(".expand-item").slice(0, count).slideDown({
                    complete: function () {
                        $(this).addClass("done-animated");
                    }
                }); // console.log(count);

                if (count == list) {
                    thisFunction.slideUp();
                }
            }

            expandBtn.on("click", function (e) {
                e.preventDefault();
                expandBtnInit(count, $(this));
            });
        });
    }

    function accordion() {
        var item = $(".accordion-item");
        var title = $(".accordion-title");
        var content = $(".accordion-content");
        title.on("click", function () {
            $(this).toggleClass(".active");
            $(this).closest(item).toggleClass("active");
            $(this).closest(item).find(content).slideToggle();
        }); // Onload
        // item.eq(0).addClass("active");
        // item.eq(0).find(content).slideDown();
    }

    function fancyboxCustom() {
        Fancybox.bind("[custom-fancybox-group-class]", {
            dragToClose: false,
            mainClass: "custom-fancybox-group-class",
            template: {
                closeButton: '<i class="fa-light fa-xmark"></i>'
            },
            parentEL: document.head,
            on: {
                done: function () {
                    console.log("open");
                },
                closing: function () {
                    console.log("close");
                }
            }
        });
        Fancybox.bind("[has-popup-qr]", {
            dragToClose: false,
            mainClass: "has-popup-qr",
            template: {
                closeButton: '<i class="fa-light fa-xmark"></i>'
            },
            parentEL: document.head,
            on: {
                done: function () {
                    console.log("open");
                },
                closing: function () {
                    console.log("close");
                }
            }
        });
    }

    function aosAnimation() {
        AOS.init({
            // disable: "mobile",
            duration: 1000,
            offset: 0,
            delay: 150 // once: true,

        });
        AOS.refresh();
    }

    function screenImage() {
        var touchItem = $("[has-touch-screen]");
        var screenLeft = $(this).attr("screen-left");
        var screenRight = $(this).attr("screen-right");
        var screen = ($(window).width() - $("main .container").width()) * 0.5;

        if (ww >= 1280) {
            setTimeout(() => {
                touchItem.each(function () {
                    if ($(this).hasAttr("screen-left")) {
                        $(this).css("margin-left", -screen);
                    } else {
                        $(this).css("margin-right", -screen);
                    }

                    $(this).addClass("screen-initial");
                });
            }, 150);
        } else {
            setTimeout(() => {
                touchItem.each(function () {
                    if ($(this).hasAttr("screen-left")) {
                        $(this).css("margin-left", "unset");
                    } else {
                        $(this).css("margin-right", "unset");
                    }

                    $(this).removeClass("screen-initial");
                });
            }, 150);
        }
    }

    var autoColumn;

    function columnJS() {
        if (document.getElementById("auto-column")) autoColumn = new Columns(document.getElementById("auto-column"), {
            columns: 1,
            breakpoints: {
                576: 2
            }
        });
    }

    function useVariables() {
        return {
            autoColumn: autoColumn,
            aosAnimation: aosAnimation
        };
    }

    function activeCommonNav() {
        if ($(".newslist-nav").length) {
            $(".newslist-nav nav").scrollTo("li.active", 0);
        }
    }

    $(document).ready(function () {
        // ---***--- Global JS ---***---
        globalJS.init(); // ---***--- Header ---***---

        headerFunction.init(); // ---***--- Swiper Init ---***---

        swiperInit(); // ---***--- Body ---***---

        expandItem();
        accordion();
        activeCommonNav(); // ---***--- Fancybox ---***---

        fancyboxCustom(); // ---***--- AOS ---***---

        aosAnimation();
        columnJS();
    });
    $(window).resize(function () {
        exports.height_header = header.outerHeight();
        $("html").css({
            "--header-height": header.outerHeight() + "px",
            "--fixed-header-height": header.outerHeight() + "px"
        });
        screenImage();
    });
    $(window).trigger("resize"); // ***** Preload ***** //

    document.onreadystatechange = () => {
        if (document.readyState === "complete") {
            /**
             * Turn on when Deploy
             */
            pagesBanner.addClass("initial");
        }
    };

    window.externalJS = {
        useVariables
    };

    exports.ww = ww;

    Object.defineProperty(exports, '__esModule', { value: true });

})));



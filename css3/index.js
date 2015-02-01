var xxx = 1;
var nextFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, k) {
            return setTimeout(a, k || 1)
        }
}(), areaMap = {
    news: "89",
    finance: "91",
    sports: "90",
    ent: "92",
    video: "131",
    tech: "93",
    auto: "94",
    media: "130",
    lady: "95",
    edu: "96"
}, i_fMap = {
    news: "207",
    finance: "208",
    sports: "209",
    ent: "210",
    tech: "211",
    auto: "212",
    lady: "213",
    edu: "214",
    video: "310",
    media: "306"
};
Page.$ = function () {
    var a = {}, k = /^(\s|\u00A0)+|(\s|\u00A0)+$/g, s = Object.prototype.toString;
    a.trim = function (a) {
        return (a || "").replace(k, "")
    };
    a.isFunction = function (a) {
        return "[object Function]" === s.call(a)
    };
    a.isString = function (a) {
        return "[object String]" === s.call(a)
    };
    a.isObject = function (a) {
        return "[object Object]" === s.call(a)
    };
    a.encodeUriData = function (c) {
        var f, m = [];
        for (f in c)c.hasOwnProperty(f) && (null === c[f] ? m.push(a.trim(f)) : m.push(a.trim(f) + "=" + a.trim(c[f])));
        return m.join("&")
    };
    a.id = function (a) {
        return document.getElementById(a)
    };
    a.tag = function (a, f) {
        return [].slice.call((f || document).getElementsByTagName(a) || [], 0)
    };
    a.cls = function (a, f) {
        return [].slice.call((f || document).getElementsByClassName(a) || [], 0)
    };
    a.each = function (a, f) {
        var m, h = (a || []).length;
        for (m = 0; m < h; m++)f(m, a[m])
    };
    a.removeClass = function (c, f, m) {
        c && (m = m || RegExp("\\s*\\b" + f + "\\b\\s*", "g"), "[object Array]" == Object.prototype.toString.call(c) ? (a.each(c, function (c, k) {
            a.removeClass(k, f, m)
        }), c = null) : c.classList ? c.classList.remove(f) : c.className = c.className.replace(m, " "))
    };
    a.hasClass =
        function (a, f) {
            return a.classList ? a.classList.contains(f) : !a ? !1 : RegExp("\\b" + f + "\\b").test(a.className)
        };
    a.addClass = function (c, f) {
        c && ("[object Array]" == Object.prototype.toString.call(c) ? (a.each(c, function (c, h) {
            a.addClass(h, f)
        }), c = null) : c.classList ? c.classList.add(f) : !a.hasClass(c, f) && (c.className = c.className + " " + f))
    };
    a.loadCss = function (a, f, m) {
        var h = document.createElement("link");
        h.rel = "stylesheet";
        h.type = "text/css";
        h.href = a;
        "onload"in h ? (h.onload = f, h.onerror = function () {
            console.log("login css err")
        }) :
            setTimeout(function () {
                f.call(h)
            }, 1E3);
        h.id = m;
        h.binded = !0;
        document.body.appendChild(h)
    };
    a.loadJs = loadScript;
    a.cookie = function (a, f, m) {
        var h = "", k, A;
        if ("undefined" != typeof f) {
            m = m || {};
            null === f && (f = "", m.expires = -1);
            if (m.expires && ("number" == typeof m.expires || m.expires.toUTCString))h = "number" == typeof m.expires ? new Date((new Date).getTime() + 864E5 * m.expires) : m.expires, h = "; expires=" + h.toUTCString();
            k = m.path ? "; path=" + m.path : "";
            A = m.domain ? "; domain=" + m.domain : "";
            m = m.secure ? "; secure" : "";
            document.cookie = [a, "=",
                encodeURIComponent(f), h, A, k, m].join("")
        } else return a && (k = (RegExp(a + "=([^;]*)").exec(document.cookie) || [])[1]), k
    };
    a.domready = function (a) {
        "loading" != document.readyState && document.body ? a.call(document) : document.addEventListener("DOMContentLoaded", a, !1)
    };
    a.loadImg = function (c) {
        a.each(c, function (a, c) {
            var h = c.getAttribute("orgsrc");
            h && nextFrame(function () {
                c.src = h;
                c.removeAttribute("orgsrc")
            })
        })
    };
    a.ajax = function (c) {
        var f = new XMLHttpRequest, k, h, y = "_jsonp" + (new Date).getTime(), A, s = function (a) {
            clearTimeout(A);
            f.abort();
            c.error(a);
            c.complete(a)
        };
        c.url = c.url || location.href;
        c.type = a.trim(c.type).toUpperCase();
        -1 < ["POST", "GET"].indexOf(c.type) ? 0 : c.type = "GET";
        f.open(c.type, c.url, c.async);
        "POST" == c.type && f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        void 0 === c.async ? c.async = !0 : 0;
        c.async = !!c.async;
        c.timeout = c.timeout || 5E3;
        c.cache = void 0 === c.cache ? !0 : !!c.cache;
        c.dataType = a.trim(c.dataType || "text").toLowerCase();
        -1 < ["text", "json", "jsonp"].indexOf(c.dataType) ? 0 : c.dataType = "text";
        c.data =
            c.data || {};
        !a.isFunction(c.success) ? c.success = function () {
        } : 0;
        !a.isFunction(c.error) ? c.error = function () {
        } : 0;
        !a.isFunction(c.complete) ? c.complete = function () {
        } : 0;
        c.cache || (c.data["_" + (new Date).getTime()] = null);
        "jsonp" == c.dataType && (c.type = "GET", /\?/.test(c.url) || (c.data.callback = "?"));
        a.isObject(c.data) ? c.data = a.encodeUriData(c.data) : isString(c.data) || (c.data = null);
        c.data && (c.url += (-1 < c.url.indexOf("?") ? "&" : "?") + c.data);
        if ("jsonp" == c.dataType)return window[y] = function (a) {
            clearTimeout(A);
            c.success(a);
            c.complete(a)
        }, c.url = c.url.replace(/=\?/, "=" + y), h = document.createElement("script"), h.onload = function () {
            document.head.removeChild(h);
            delete window[y]
        }, h.onerror = function (a) {
            document.head.removeChild(h);
            delete window[y];
            s(a)
        }, h.src = c.url, A = setTimeout(function () {
            h.onerror({type: "timeout", timeout: timeout})
        }, c.timeout), document.head.appendChild(h), f;
        f.onreadystatechange = function () {
            if (4 == f.readyState)if (200 <= f.status && 300 >= f.status || 304 == f.status) {
                k = f.responseText;
                "json" == c.dataType && (k = JSON.parse(k));
                var a = k;
                clearTimeout(A);
                c.success(a);
                c.complete(a)
            } else s(f)
        };
        A = setTimeout(function () {
            s(f)
        }, c.timeout);
        f.send(c.data);
        return f
    };
    a.buildDom = function (c) {
        var f = a.buildDom.div || document.createElement("div"), k = document.createDocumentFragment();
        a.buildDom.div = f;
        for (f.innerHTML = c; c = f.children[0];)k.appendChild(c);
        return k
    };
    return a
}();
var lowerAndroid23 = function () {
    if (2.3 >= parseFloat((navigator.userAgent.match(/Android (\d\.\d)(\.\d)*/i) || [])[1] || 100))return lowerAndroid23 = function () {
        return !0
    }, !0;
    lowerAndroid23 = function () {
        return !1
    };
    return !1
}, tagconf = function (a) {
    return 3 == a.type ? '<span class="zt-icon">ä¸“é¢˜</span>' : a.tag ? '<span class="dujia-icon">' + a.tag + "</span>" : void 0 !== a.cmt ? (1E4 <= a.cmt && (a.cmt = "9999+"), '<span class="cmt-num">' + a.cmt + "</span>") : ""
}, typeConf = function (a) {
    return 1 == a.type ? "img-link" : 2 == a.type ? "v-link" : "æµ‹è¯•" == a.tag ?
        "test-link" : ""
};
Page.main = function (a) {
    function k(a) {
        a = a.match(/.*\:\/\/([^\/]*).*/);
        "undefined" != typeof a && null != a && (host = a[1]);
        return host
    }

    Date.now();
    var s = document, c = function (a) {
        (new Image).src = "/g/s?aid=debug_tempt_log&bid=info&col1=indexClick&col2=" + a
    }, f = function () {
        var l = document.createElement("div"), g;
        return {
            init: function () {
                l.innerHTML = '<div id="tips" class="switch-tips" style="display:none;bottom:-30px;-webkit-transition-property: bottom;-webkit-transition-duration: 0.4s;-webkit-transition-timing-function: linear;"></div>';
                s.body.appendChild(l.children[0]);
                g = a.id("tips")
            }, show: function (a, l) {
                g.style.display = "block";
                g.style.webkitTransitionDuration = 0;
                g.innerHTML = a;
                l = l || 400;
                setTimeout(function () {
                    g.style.webkitTransitionDuration = l + "ms";
                    g.style.bottom = "0px"
                }, 40)
            }, hide: function () {
                setTimeout(function () {
                    g.style.bottom = "-30px";
                    setTimeout(function () {
                        g.style.display = "none"
                    }, 450)
                }, 1800)
            }
        }
    }();
    window.tips = f;
    var m = function () {
            var l = a.id("sports-ad");
            if (l) {
                var g = function () {
                    var g;
                    l.style.webkitTransitionDuration = "300ms";
                    l.style.webkitTransform = "translateY(-70px)";
                    setTimeout(function () {
                        l.style.webkitTransitionDuration =
                            "0ms";
                        g = a.cls("sports-ad-item", l).slice(0, 2);
                        a.each(g, function (a, g) {
                            l.appendChild(g)
                        });
                        l.style.webkitTransform = "translateY(0px)"
                    }, 1050)
                };
                2 >= a.cls("sports-ad-item", l).length || setInterval(g, 3E3)
            }
        }, h = function () {
            var l = a.id("stock-info");
            l && l.addEventListener("click", function (a) {
                if (a = this.getAttribute("data-href"))location.href = a.replace(/sid=[^&]*/, "sid=" + window.sid)
            }, !1)
        }, y = function () {
            var l = a.id("weather");
            l && l.addEventListener("click", function (a) {
                if (a = this.getAttribute("data-href"))location.href = a.replace(/sid=[^&]*/,
                    "sid=" + window.sid)
            }, !1)
        }, A = [{
            name: "sogou",
            logo: "sogou",
            text: "",
            isDefault: !0,
            url: window.sougouPrefix || "/g/index5/api/search.jsp",
            param: {type: "1", keyword: "{key}"}
        }, {
            name: "baidu",
            logo: "baidu",
            text: "",
            url: "/g/index5/api/search.jsp",
            param: {type: "2", word: "{key}"}
        }], F = function () {
            var l, g = a.id("search-hidden-params"), b = a.id("search-word"), d = a.id("search-form"), e = function (a, l) {
                for (var g in l)l.hasOwnProperty(g) && (a[g] = l[g]);
                return a
            }, c = function (a) {
                a = l.param;
                for (var c = "", f, n = l.url.split("?")[0] || "", h = l.url.split("?")[1] ||
                    "", k = [], O = {}, w, m = decodeURIComponent, k = h.split("&"), h = k.length; h--;)w = k[h], w = w.split("="), O[m(w[0])] = m(w[1]);
                d.method = "GET";
                d.action = n;
                g.innerHTML = "";
                a = e(O, a);
                a = e(a, {random: (new Date).valueOf()});
                for (f in a)c += '<input type="hidden" name="' + f + '" value="' + ("{key}" == a[f] ? b.value : a[f]) + '" />';
                g.innerHTML = c
            };
            d.addEventListener("submit", c, !1);
            b.addEventListener("focus", function (a) {
                this.value = ""
            });
            A.length && (a.each(A, function (a, g) {
                g.isDefault && (l = g)
            }), /OS 4/i.test(navigator.userAgent) && (b.setAttribute("readonly",
                ""), b.addEventListener("click", function (a) {
                a.preventDefault();
                c();
                d.submit()
            }, !1)))
        }, C = function () {
            var l = a.id("jumphelper"), g, b, d = 0, e = 0, f = function () {
                clearTimeout(g);
                clearTimeout(b);
                var a = document.body.scrollTop;
                a != d ? (d = a, g = setTimeout(f, 500)) : b = setTimeout(function () {
                    n()
                }, 800)
            }, n = function T(a) {
                l.style.display = "block";
                T.show = 2
            };
            a.id("gotop").addEventListener("click", function () {
                window.scrollTo(0, 1);
                c(5)
            }, !1);
            a.id("gobot").addEventListener("click", function () {
                window.scrollTo(0, 99999);
                c(6)
            }, !1);
            a.id("gotop").addEventListener("touchstart",
                function (a) {
                    a.stopPropagation()
                }, !1);
            a.id("gobot").addEventListener("touchstart", function (a) {
                a.stopPropagation()
            }, !1);
            document.body.addEventListener("touchstart", function () {
                e = 0
            }, !1);
            document.body.addEventListener("touchmove", function () {
                0 == e && (2 == n.show && (l.style.display = "none", n.show = 1), e = 1)
            }, !1);
            window.addEventListener("scroll", f, !1);
            n()
        }, D = function () {
            a.id("logolink").addEventListener("click", function () {
                var a = this.getAttribute("link");
                location.href = a
            }, !1)
        }, B = function () {
            var l = a.id("userRecomBtn");
            l && (window.dataCount = parseInt(l.getAttribute("data-count")), l.addEventListener("click", function () {
                var l = parseInt(this.getAttribute("data-click")), b = l % 3, l = l % 3 + 1;
                18 <= dataCount ? 2 == b && (l = 0) : 12 <= dataCount && 1 == b && (l = 0);
                var d = "userRecom" + l;
                a.id("userRecom" + b).style.display = "none";
                a.id(d).style.display = "";
                this.setAttribute("data-click", l)
            }, !1))
        }, u = function () {
            if (window.isShowQing) {
                var a = document.getElementById("head_qing_ad"), g = document.getElementById("head_qing_ad_img"), b = document.getElementById("head_qing_close_btn");
                b && (b.onclick = function (g) {
                    a.style.display = "none";
                    g.stopPropagation();
                    g.preventDefault();
                    loadMrg.loadAjax({url: "http://info.3g.qq.com/g/s?aid=debug_tempt_log&bid=headqingad&col1=close"})
                });
                a && (b = new Image, b.src = g.getAttribute("originsrc"), b.onload = function () {
                    g.src = this.src
                });
                r()
            }
        }, p = function () {
            var l = !1, g = ["mobads.baidu.com", "cpro.baidustatic.com", "m.adpro.cn"], b = g.slice(1, 3);
            try {
                if (self.frameElement && "iframe" == self.frameElement.tagName.toLowerCase()) {
                    var d = top.window;
                    isReport = !1;
                    if (d) {
                        var e = d.document.body.getElementsByTagName("script"),
                            c = [], f = "";
                        a.each(e, function (a, l) {
                            l.src ? (c.push(l.src), -1 != b.indexOf(k(l.src)) && (isReport = !0)) : isReport && (f += l.innerHTML)
                        });
                        Page.$.ajax({
                            url: "/g/s",
                            type: "POST",
                            data: {
                                aid: "debug_tempt_log",
                                bid: "info",
                                col1: "iframepage",
                                col2: encodeURIComponent(navigator.userAgent),
                                col3: encodeURIComponent(c.slice(0, 5).join("|")),
                                col4: encodeURIComponent(f)
                            },
                            success: function () {
                            }
                        });
                        var n = d.document.body.innerHTML;
                        a.each(g, function (g, b) {
                            if (-1 != n.indexOf(b)) {
                                var d = [].slice.call(top.window.document.body.children, 0);
                                a.each(d,
                                    function (a, g) {
                                        g && ("iframe" != g.tagName.toLowerCase() ? (g.style.display = "none", l = !0) : -1 == g.src.indexOf(".3g.qq.com") && (g.style.display = "none", l = !0))
                                    })
                            }
                        });
                        l && ((new Image).src = "/g/s?aid=debug_tempt_log&bid=info&col1=iframe_filter&col2=" + navigator.userAgent)
                    }
                }
            } catch (h) {
                Page.$.ajax({
                    url: "/g/s",
                    type: "POST",
                    data: {
                        aid: "debug_tempt_log",
                        bid: "info",
                        col1: "iframe_error",
                        col2: encodeURIComponent(navigator.userAgent),
                        col3: encodeURIComponent(h.message),
                        col4: encodeURIComponent(document.referrer + "|" + location.href)
                    },
                    success: function () {
                    }
                })
            }
        }, q = function () {
            var l = !1;
            try {
                var g = "header-adtip wrapper fixed-title jumphelper tips startpage".split(" "), b = "app.baidu.com 3glogo.gtimg.com 1.url.cn 3gimg.qq.com info.3g.qq.com res.imtt.qq.com".split(" "), d = ["badjs.init", "INFOHOME"], e = [], c = "";
                a.each(document.body.children, function (f, n) {
                    var h = n.tagName;
                    -1 == g.indexOf(n.getAttribute("id")) && ("script" != h.toLowerCase() && "link" != h.toLowerCase() && "style" != h.toLowerCase()) && (l = !0, n.innerHTML = "", n.style.display = "none");
                    "script" == h.toLowerCase() &&
                    ("" != n.src && -1 == b.indexOf(k(a.trim(n.src))) ? e.push(n.src) : "" == n.src && a.each(d, function (a, l) {
                        -1 == n.innerHTML.indexOf(l) && (c += n.innerHTML)
                    }))
                });
                0 < e.length && Page.$.ajax({
                    url: "/g/s",
                    type: "POST",
                    data: {
                        aid: "debug_tempt_log",
                        bid: "info",
                        col1: "home_filter",
                        col2: encodeURIComponent(navigator.userAgent),
                        col3: encodeURIComponent(e.slice(0, 5).join("|")),
                        col4: encodeURIComponent(c)
                    },
                    success: function () {
                    }
                });
                l && ((new Image).src = "/g/s?aid=debug_tempt_log&bid=info&col1=append_filter&col2=" + encodeURIComponent(navigator.userAgent))
            } catch (f) {
            }
        },
        v = function () {
            var a = /MQQBrowser\/([\d])/g.exec(navigator.userAgent);
            return !a ? !1 : 4 < parseInt(a[1])
        };
    window.startShowLA = function () {
        var a = document.getElementById("head_qing_ad_url");
        a && (a.onclick = function (g) {
            g.preventDefault();
            g = errorfunc = function () {
                if (v() && window.isBigQB)try {
                    mtt.installLiteApp(JSON.stringify(qingOption), function () {
                    } + "", function (a) {
                    } + "")
                } catch (g) {
                } else location.href = a.getAttribute("href")
            };
            loadMrg.loadAjax({
                url: "http://info.3g.qq.com/g/s?aid=debug_tempt_log&bid=headqingad&col1=open", cb: g,
                error: errorfunc
            })
        });
        document.getElementById("head_qing_ad").style.display = "block"
    };
    var r = function () {
            if (window.mtt && window.mtt.checkLiteAppInstallStatus)try {
                window.mtt.checkLiteAppInstallStatus(JSON.stringify({
                    apps: [{
                        appid: qingOption.key,
                        url: qingOption.url
                    }]
                }), function (a) {
                    a && "1" == a.status[0].status || window.startShowLA()
                } + "", function (a) {
                    window.startShowLA()
                } + "")
            } catch (a) {
                window.startShowLA()
            } else window.startShowLA()
        }, e = function () {
            window.expReCom = !1;
            B();
            setTimeout(function () {
                U()
            }, 200);
            D();
            E("text-ad-soso");
            E("text-ad-news");
            E("text-ad-sports");
            E("text-ad-ent");
            E("text-ad-finance");
            E("text-ad-tech");
            E("text-ad-auto");
            E("text-ad-lady");
            E("text-ad-edu");
            V();
            W();
            X();
            0 == document.body.scrollTop && window.scrollTo(0, 0);
            z();
            lowerAndroid23() || J();
            d();
            m();
            h();
            y();
            F();
            C();
            a.cookie("v5", "1", {path: "/", domain: ".3g.qq.com", expires: 365});
            asyncCall.call("runindex");
            f.init();
            L(Page.conf.current, !0);
            u();
            setTimeout(function () {
                p();
                q()
            }, 1E3)
        }, b = function (l) {
            var g = a.id("startpage"), b = a.id("wrapper"), d = Page.$.cookie, e = d("setupimg") ||
                0, c = function () {
                setTimeout(function () {
                    g.style.opacity = 0;
                    g.style.display = "none";
                    b.style.display = "block";
                    setTimeout(function () {
                        l && l()
                    }, 300)
                }, 1E3);
                g.removeEventListener("touchmove", c, !1);
                c = function () {
                }
            };
            if (g && 0 == e) {
                var n = function () {
                    a.hasClass(g, "fadeIn") && c()
                };
                g.addEventListener("touchmove", c, !1);
                g.addEventListener("webkitTransitionEnd", function () {
                    n();
                    n = function () {
                        g.removeEventListener("webkitTransitionEnd", n, !1)
                    }
                }, !1);
                g.classList.add("fadeIn");
                d("setupimg", 1, {expires: 1, domain: ".3g.qq.com"})
            } else b.style.display =
                "block", l && l()
        }, d = function () {
            window.addEventListener("click", function (a) {
                "A" == a.target.tagName ? a.target.getAttribute("href") && ("" != a.target.getAttribute("href") && "#" != a.target.getAttribute("href")) && (a.target.href = a.target.getAttribute("href").replace(/([?&])sid=[^&#]*/g, "$1sid=" + window.sid)) : a.target.getAttribute("data-href") && (a.preventDefault(), location.href = a.target.getAttribute("data-href"))
            }, !1)
        }, z = function () {
            var l = a.cls("more-btn"), g = function (g) {
                var l, b, d;
                if ("full" == Page.conf.current && (b = g.target.getAttribute("data-p"),
                        b = (parseInt(b) || 0) + 1, 3 != b)) {
                    l = a.cls("load-more", g.target.parentNode)[0];
                    l.style.display = "block";
                    g.target.style.display = "none";
                    l = g.target.getAttribute("data-mod");
                    d = g.target.getAttribute("data-ids");
                    g.preventDefault();
                    try {
                        g.stopImmediatePropagation()
                    } catch (e) {
                    }
                    g.stopPropagation();
                    K(l, b, d);
                    c(3)
                }
            };
            a.each(l, function (a, l) {
                l.addEventListener("click", g, !1)
            })
        }, w = function (a, g) {
            var b = a.split("#");
            return 1 < b.length ? b[0] + g + "#" + b[1] : b[0] + g
        }, K = function (b, g, d) {
            var e = a.cls("more-btn", a.id("mod-" + b))[0], c = e.getAttribute("data-title");
            if (!e.loading) {
                e.loading = !0;
                var n = "/g/index5/api/api.jsp?action=page,logPv&pg_area=" + b + "&pg_ids=" + d + "&pg_size=8", f = i_fMap[b];
                f && (n = n + "&i_f=" + f);
                Page.$.ajax({
                    url: n, dataType: "json", success: function (e) {
                        var n = "", f = null, h = null, k = [], N = null;
                        if (e.page && 0 == e.page.code) {
                            var h = 4, m = 8;
                            8 > e.page.data.list.length && (h = 3, m = 6);
                            e.page.data.list && (n += '<div class="list-mod"><ul class="cont-list">', a.each(e.page.data.list.slice(0, h), function (a, g) {
                                n += '<li><a href="' + w(g.url, "&iarea=" + areaMap[b]) + '" class="' + (typeConf(g) ||
                                "") + '">' + g.title + (tagconf(g) || "") + "</a></li>";
                                k.push(((g.url || "").match(/(^|&|\?)id=([^&]*)/i) || [])[2] || "")
                            }), n += '</ul><ul class="cont-list">', a.each(e.page.data.list.slice(h, m), function (a, g) {
                                n += '<li><a href="' + w(g.url, "&iarea=" + areaMap[b]) + '" class="' + (typeConf(g) || "") + '">' + g.title + (tagconf(g) || "") + "</a></li>";
                                k.push(((g.url || "").match(/(^|&|\?)id=([^&]*)/i) || [])[2] || "")
                            }), n += "</ul></div>");
                            n && (f = a.cls("more-btn", a.id("mod-" + b))[0], N = a.cls("load-more", a.id("mod-" + b))[0], h = f.parentNode, h.insertBefore(a.buildDom(n),
                                f))
                        }
                        f.setAttribute("data-p", g);
                        f.setAttribute("data-ids", d + k.join(","));
                        2 == g && (a.addClass(f, "channel-go"), f.innerHTML = "è¿›å…¥" + c + "é¢‘é“");
                        f.style.display = "block";
                        N.style.display = "none";
                        setTimeout(function () {
                            t && t.refresh()
                        }, 200)
                    }, complete: function () {
                        e.loading = !1
                    }
                })
            }
        }, G = [], I = function () {
            G = [];
            a.each("news finance sports ent video tech auto media lady edu".split(" "), function (b, g) {
                var e = a.id("mod-" + g);
                if (e) {
                    var d = e.offsetTop, c = 0;
                    "edu" == g && (c = -53);
                    G.push({id: g, top: d, bottom: d + e.offsetHeight + c, el: e})
                }
            })
        }, t = null,
        J = function () {
            var b = "", g = a.id("fixed-title");
            I();
            var e, d = !0, c = null, n = function (b) {
                    c = function () {
                        var b = null, g = [document.elementFromPoint(40, 48), document.elementFromPoint(100, 55), document.elementFromPoint(60, 62), document.elementFromPoint(200, 78), document.elementFromPoint(260, 48)];
                        a.each(g, function (e, d) {
                            var l;
                            a.hasClass(d, "module-c") && -100 > d.getBoundingClientRect().top || (l = d.compareDocumentPosition(g[e - 1]), 1 <= e && (b = 16 < l ? g[e - 1] : 8 < l ? d : 4 <= l ? g[e - 1] : 4 > l ? d : g[e - 1]))
                        });
                        return b
                    }()
                }, f = function (b, g) {
                    try {
                        var e = "",
                            d = "", l = window.innerHeight;
                        a.each(G, function (b, g) {
                            var c = g.el, n = c.offsetHeight, f = c.getBoundingClientRect().top;
                            if (f > -n && f <= l) {
                                if (!c.getAttribute("inScreen") || "0" == c.getAttribute("inScreen"))e = a.tag("H3", c)[0].innerText, d = a.tag("H3", c)[0].getAttribute("data-iarea"), n = "/g/index5/api/api.jsp?action=exp&expType=4&url=" + window.recomExpUrl.replace("user_recom", g.id) + "&iarea=" + d + "&title=" + encodeURIComponent(e) + "&sid=" + window.sid, loadMrg.loadAjax({url: n}), c.setAttribute("inScreen", "1")
                            } else c.setAttribute("inScreen",
                                "0")
                        })
                    } catch (c) {
                    }
                }, h = function () {
                    window.isReportChannel && f();
                    if (d) {
                        var c = pageYOffset + 0, n = null;
                        e != c && (e = c, a.each(G, function (a, g) {
                            g.top < c && g.bottom > c && (n = g)
                        }), n ? n.id != b && (b = n.id, g.style.display = "-webkit-box", g.innerHTML = a.cls("module-t", n.el)[0].innerHTML) : (g.style.display = "none", e = b = ""))
                    } else g.style.display = "none"
                }, k = function () {
                    c ? (window.scrollTo(0, pageYOffset + c.getBoundingClientRect().top - 60), setTimeout(function () {
                        h()
                    }, 200)) : a.each(G, function (a, g) {
                        g.id == b && window.scrollTo(0, g.top)
                    })
                }, w = function () {
                    h()
                },
                m = function (a) {
                    h(a);
                    n("scroll")
                };
            /OS [456]/i.test(navigator.userAgent) || window.addEventListener("touchmove", w);
            window.addEventListener("touchend", function () {
                console.log("touchend");
                n("window touchend")
            });
            var z = function () {
                90 == Math.abs(window.orientation) ? (d = !1, e = "", window.removeEventListener("scroll", m, !1), setTimeout(function () {
                    k();
                    window.addEventListener("scroll", m, !1);
                    setTimeout(n, 50)
                }, 200), setTimeout(function () {
                    b = "";
                    h()
                }, 0)) : (g.style.display = "none", d = !0, e = "", window.removeEventListener("scroll", m,
                    !1), setTimeout(function () {
                    k();
                    window.addEventListener("scroll", m, !1);
                    setTimeout(n, 50)
                }, 200), setTimeout(function () {
                    b = "";
                    I();
                    h()
                }, 500))
            };
            window.addEventListener("scroll", m, !1);
            "onorientationchange"in window ? window.addEventListener("orientationchange", function () {
                z()
            }, !1) : window.addEventListener("resize", function () {
                z()
            }, !1);
            z();
            t = {
                refresh: function () {
                    I();
                    h()
                }
            }
        }, H = function (a) {
            var g = document.createElement("IFRAME");
            g.id = "ifr01";
            g.name = "ifr01";
            g.style.position = "absolute";
            g.style.top = "-9999px";
            g.style.left =
                "-9999px";
            g.style.display = "none";
            g.src = "http://pt.3g.qq.com/s?aid=nLogout&sid=" + sid + "&redir_url=" + a;
            document.body.appendChild(g);
            setTimeout(function () {
                window.location.href = a
            }, 1E3)
        };
    window.isptinit = !1;
    var x = function (b) {
        !1 == window.isptinit ? a.loadJs(Page.conf.login.js, function () {
            window.isptinit || (P.check(), pt.init({
                auto: !1,
                ui: !0,
                bid: "info",
                acctHolder: "è¯·è¾“å…¥QQå·",
                pwdHolder: "QQå¯†ç ",
                mainTitle: "è…¾è®¯ç»Ÿä¸€ç™»å½•",
                onSuccess: function (a) {
                    window.sid = a.sid;
                    window.islogin = !0;
                    n && n()
                },
                onFailure: function () {
                },
                onCancel: function () {
                }
            }),
            b && b());
            window.isptinit = !0
        }) : (P.check(), b && b())
    }, n = function () {
    }, Y = function () {
        x(function () {
            pt.fire({ui: !0})
        })
    }, Z = function (b, g, e) {
        b.preventDefault();
        b.stopPropagation();
        a.id("login");
        window.islogin ? e && e() : (n = function () {
            a.id("footer-login").innerHTML = "é€€å‡º";
            if (a.isFunction(history.replaceState)) {
                var b = location.protocol + "//" + location.host + location.pathname, e = "", e = location.search, e = "" == e ? e + "?sid=" + window.sid : /[?&]sid=[^&#]*/g.test(e) ? e.replace(/([?&])sid=[^&#]*/g, "$1sid=" + window.sid) : e + "&sid=" + window.sid,
                    e = b + e + location.hash;
                window.history.replaceState(null, document.title, e)
            }
            var d = /sid=[^&]*/g, l = /^http:\/\/qzone2.z.qq.com\/login\.jsp/;
            a.each(a.tag("a"), function (a, b) {
                var g = b.getAttribute("href");
                g && (l.test(g) ? b.href = "http://info.z.qq.com/infocenter_v2.jsp?B_UID=" + user.uin + "&sid=" + window.sid + "&amp;g_f=275" : b.href = g.replace(d, "sid=" + window.sid))
            });
            g && g()
        }, Y())
    }, W = function () {
        a.id("login").addEventListener("click", function (a) {
            this.hasAttribute("count") ? location.href = INFOHOME.infoappPath + "/s?aid=user_subshow&plg_auth=1&sid=" +
            sid + "#news" : location.href = INFOHOME.infoappPath + "/usercenter/touch/?sid=" + sid
        }, !1);
        a.id("footer-login").addEventListener("click", function (a) {
            Z(a, function () {
                Q()
            }, function () {
                H(location.href.replace(/#.*$/, "").replace(/sid=[^&]*/g, "sid="))
            })
        }, !1);
        Q()
    }, P = function () {
        function b(e) {
            a.cookie(g, e, {path: "/", domain: ".3g.qq.com", expires: 365});
            (new Image).src = "/g/s?aid=debug_tempt_log&bid=info&col1=lostUinCookie&col2=" + e
        }

        var g = "ad_pqq";
        return {
            check: function () {
                var e = a.cookie("ad_pqq");
                if (!e || 0 > e)try {
                    var d = localStorage.getItem(g);
                    d ? b(d) : pt.load(function (a) {
                        if (a && 0 < a.length && (d = (a[0] || {}).uin || "") && 0 < d)b(d), localStorage.setItem(g, d)
                    })
                } catch (c) {
                }
            }
        }
    }(), Q = function () {
        window.islogin && Page.$.ajax({
            url: INFOHOME.infoappPath + "/usercenter/touch/api/api.jsp?action=msg_badge&sid=" + window.sid + "&callback=?",
            dataType: "jsonp",
            success: function (b) {
                b.msg_badge && 0 == b.msg_badge.code && (b = b.msg_badge.data.count || 0, 0 < b ? (a.id("num-tips").innerHTML = b, a.id("num-tips").style.display = "block", a.id("login").setAttribute("count", b)) : a.addClass(a.id("login"),
                    "tips"))
            }
        })
    }, X = function () {
        var b = a.id("pop-nav"), g = a.id("nav-pop"), e = a.id("nav-pop-pnl"), d = a.id("nav-pop-mask"), n = a.id("logolink").offsetHeight - 1, f = !1, h, k, w, m = /android/i.test(navigator.userAgent), z = /uc/i.test(navigator.userAgent), p = function (a) {
            a.preventDefault()
        };
        isNaN(n) || (a.removeClass(e, "new-nav-top"), a.removeClass(d, "new-pop-layer"), e.style.top = n + "px", d.style.top = n + "px");
        k = function () {
            g.style.display = "none";
            window.removeEventListener("touchmove", k, !1)
        };
        w = function () {
            g.style.display = "none";
            window.removeEventListener("scroll",
                w, !1)
        };
        b.addEventListener("touchend", function (e) {
            g.removeEventListener("webkitTransitionEnd", h, !1);
            e.preventDefault();
            try {
                e.stopImmediatePropagation()
            } catch (d) {
            }
            e.stopPropagation();
            a.hasClass(b, "active") ? (a.removeClass(g, "open"), a.addClass(g, "close"), a.removeClass(b, "active"), h = function () {
                g.style.display = "none";
                g.removeEventListener("webkitTransitionEnd", h, !1)
            }, g.addEventListener("webkitTransitionEnd", h, !1), m && z && window.removeEventListener("touchmove", p, !1)) : setTimeout(function () {
                var d = (a.id("header-adtip") ||
                {}).offsetHeight;
                d && (e.preventDefault(), e.stopPropagation());
                setTimeout(function () {
                    window.scrollTo(0, d)
                }, 50);
                g.style.opacity = "0";
                g.style.display = "block";
                a.removeClass(g, "close");
                a.addClass(b, "active");
                setTimeout(function () {
                    a.addClass(g, "open")
                }, 10);
                m && (z ? setTimeout(function () {
                    window.addEventListener("scroll", w, !1)
                }, 150) : window.addEventListener("touchmove", k, !1));
                m && z && window.addEventListener("touchmove", p, !1);
                c(1)
            }, 50)
        }, !1);
        document.addEventListener("touchstart", function () {
            f = !1
        }, !1);
        document.addEventListener("touchmove",
            function () {
                f = !0
            }, !1);
        document.addEventListener("touchend", function (e) {
            a.hasClass(b, "active") && "A" != e.target.tagName && (e.stopPropagation(), e.preventDefault());
            a.hasClass(b, "active") && (g.removeEventListener("webkitTransitionEnd", h, !1), h = function () {
                g.style.display = "none";
                g.removeEventListener("webkitTransitionEnd", h, !1)
            }, g.addEventListener("webkitTransitionEnd", h, !1), a.removeClass(g, "open"), a.addClass(g, "close"), a.removeClass(b, "active"), f && (g.style.display = "none"), m && z && window.removeEventListener("touchmove",
                p, !1))
        }, !1);
        a.id("nav-pop-pnl").addEventListener("touchend", function (a) {
            f || "A" == a.target.tagName && a.stopPropagation()
        }, !1)
    }, $ = function () {
        var b = function () {
            var a = [], b = !1, e, d, c = function (a, e, g) {
                var l = new Image;
                d = l;
                g = g || 0;
                1 < g || (l.onload = function () {
                    e && e(a);
                    l = l.onload = l.onerror = null;
                    b = !1;
                    n()
                }, l.onerror = function () {
                    c(a, e, g + 1);
                    l = l.onload = l.onerror = null;
                    n()
                }, b = !0, l.src = a)
            }, n = function (d) {
                var l;
                if (d || !b)if (l = a.splice(0, 1)[0])clearTimeout(e), e = setTimeout(function () {
                    n(!0)
                }, 100), c(l.src, function (a) {
                    l.callback(a)
                })
            };
            return {
                clear: function () {
                    a = [];
                    d && (d = d.onload = d.onerror = null);
                    b = !1
                }, push: function (b, e) {
                    a.push({src: b, callback: e});
                    n()
                }
            }
        }();
        b.loadImg = function (e, d) {
            var c = [], n, f;
            a.each(e, function (a, b) {
                var e = b.getBoundingClientRect();
                c.push({pos: e, img: b})
            });
            !0 !== d && b.clear();
            a.each(c, function (a, e) {
                -200 > e.pos.bottom || e.pos.top > 2.5 * window.innerHeight || (f = e.img, n = f.getAttribute("orgsrc"), b.push(n, function (a) {
                    return function (b) {
                        a.removeAttribute("orgsrc");
                        a.setAttribute("src", b)
                    }
                }(f)))
            })
        };
        return b
    }(), R = function () {
        try {
            var b =
                a.id("userRecom0");
            if (b) {
                var e = window.innerHeight, d = b.getBoundingClientRect().top;
                d > -b.offsetHeight && (d <= e && !1 == window.expReCom) && 6 <= window.dataCount && (window.expReCom = !0, loadMrg.loadAjax({url: window.expApi + window.sid}))
            }
        } catch (c) {
        }
    }, V = function () {
        var b = S.imgs || a.tag("img"), e = [], d = "", c = "", n, f = function () {
            R();
            e = [];
            a.each(b, function (a, b) {
                d = b.getAttribute("orgsrc");
                c = b.getAttribute("pl");
                d && ("full" == Page.conf.current ? e.push(b) : "1" != c && e.push(b))
            });
            $.loadImg(e)
        };
        f();
        R();
        window.addEventListener("scroll",
            function () {
                clearTimeout(n);
                n = setTimeout(f, 200)
            }, !1)
    }, S = function () {
        var b = S.imgs || a.tag("img"), e = [], d = [];
        a.each(b, function (a, b) {
            b.getAttribute("orgsrc") && ("1" == b.getAttribute("pl") ? e.push(b) : d.push(b))
        });
        var c = function () {
            a.loadImg(e);
            document.removeEventListener("touchstart", c, !1)
        }, n = function () {
            "full" == Page.conf.current && (a.loadImg(d), document.removeEventListener("touchstart", n, !1), document.removeEventListener("click", n, !1))
        };
        document.addEventListener("touchstart", c, !1);
        document.addEventListener("touchstart",
            n, !1);
        document.addEventListener("click", n, !1);
        200 < document.body.scrollTop && (c(), n())
    }, E = function (b, e) {
        var d = a.id(b), c = d ? d.children : [], c = [].slice.call(c, 0), n = c.length, f = 0;
        c[0] && a.addClass(c[0], "current");
        setInterval(function () {
            f %= n;
            a.removeClass(c, "current");
            a.addClass(c[f], "current");
            f++
        }, 5E3)
    }, U = function () {
        a.id("gosimp") && a.id("gofull") && (a.id("gosimp").addEventListener("click", function (a) {
            a.preventDefault();
            a.stopPropagation();
            "simple" != Page.conf.current && (a.preventDefault(), window.scrollTo(0, 0),
                M(a))
        }, !1), a.id("gofull").addEventListener("click", function (a) {
            a.preventDefault();
            a.stopPropagation();
            "full" != Page.conf.current && (a.preventDefault(), window.scrollTo(0, 0), M(a))
        }, !1))
    };
    a.cls("dot-slider");
    var L = function (a, b) {
        console.log("sw to " + a);
        var e;
        a && (e = {full: aa, simple: ba}[a]) && e(b)
    }, M = function (b) {
        console.log("toggle");
        b.preventDefault();
        b.preventDefault();
        "full" == Page.conf.current ? a.cookie("issimp", "1", {
            path: "/",
            domain: ".3g.qq.com",
            expires: 365
        }) : a.cookie("issimp", "0", {
            path: "/", domain: ".3g.qq.com",
            expires: 365
        });
        Page.conf.current = {full: "simple", simple: "full"}[Page.conf.current];
        L(Page.conf.current);
        c(4)
    }, aa = function (b) {
        a.addClass(a.id("gofull"), "current");
        a.removeClass(a.id("gosimp"), "current");
        b || f.show("ã€è§¦å±ç‰ˆã€‘ï¼Œæˆ‘ä»¬ä¸ºå“è´¨ä»£è¨€");
        a.each(a.cls("img-tit"), function (a, b) {
            var e = b.getAttribute("data-stitle");
            e && (b.innerHTML = e)
        });
        setTimeout(function () {
            a.removeClass(a.id("wrapper"), "simple-wrapper");
            "full" == Page.conf.current && Page.full && (Page.full.enter(), setTimeout(function () {
                f.hide()
            }, 1200));
            setTimeout(function () {
                t &&
                t.refresh()
            }, 200)
        }, 450);
        b = a.cls("more-btn");
        console.log("nodes", b);
        a.each(b, function (b, e) {
            e.getAttribute("data-title");
            1 == e.getAttribute("data-p") && (a.removeClass(e, "channel-go"), e.innerText = "æŸ¥çœ‹æ›´å¤š")
        })
    }, ba = function (b) {
        b || f.show("ã€æžé€Ÿç‰ˆã€‘ï¼Œæˆ‘ä»¬å’Œæ—¶é—´èµ›è·‘");
        a.addClass(a.id("gosimp"), "current");
        a.removeClass(a.id("gofull"), "current");
        a.each(a.cls("img-tit"), function (a, b) {
            var e = b.getAttribute("data-ltitle");
            e && (b.innerHTML = e)
        });
        setTimeout(function () {
            a.addClass(a.id("wrapper"), "simple-wrapper");
            Page.full && Page.full.leave();
            setTimeout(function () {
                f.hide()
            }, 1200);
            setTimeout(function () {
                t && t.refresh()
            }, 200)
        }, 450);
        b = a.cls("more-btn");
        a.each(b, function (b, e) {
            var d = e.getAttribute("data-title");
            a.addClass(e, "channel-go");
            e.innerText = "è¿›å…¥" + d + "é¢‘é“"
        })
    }, ca = function () {
        var a = function (a) {
            this._init(a);
            this.conf(a)
        };
        a.prototype = {
            _init: function (a) {
                var b = document.createElement("div");
                b.appendChild(Page.$.buildDom(a.html || ""));
                this.node = b.children[0];
                this.ADKEY = "tip";
                this.CNTKEY = "tip_c";
                this.UPDATEKEY = "tip_u";
                this.openType = a.types || "each";
                this.recordOn = a.recordOn || "close";
                this.maxCount = a.maxCount || 0;
                this.currentUpdateCount = a.updateCount || 0;
                a.name && (this.ADKEY = a.name + "_" + this.ADKEY, this.CNTKEY = a.name + "_" + this.CNTKEY, this.UPDATEKEY = a.name + "_" + this.UPDATEKEY);
                a.prepend ? document.body.insertBefore(this.node, document.body.children[0] || null) : document.body.appendChild(this.node)
            }, conf: function (a) {
                a = Page.$.cookie;
                var b = parseFloat(a(this.UPDATEKEY) || 0);
                if ((this.currentUpdateCount || 0) > b)a(this.ADKEY, "", {
                    expires: -1,
                    domain: ".3g.qq.com"
                }), a(this.CNTKEY,
                    {expires: -1, domain: ".3g.qq.com"}), a(this.UPDATEKEY, this.currentUpdateCount || 0, {
                    expires: 365,
                    domain: ".3g.qq.com"
                })
            }, needOpen: function () {
                var a = function () {
                };
                a.prototype = {
                    each: function (a) {
                        var b = Page.$.cookie;
                        a = b(a.ADKEY);
                        b = new Date;
                        date = (new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime();
                        return (parseFloat(a) || date - 1) < date
                    }, once: function (a) {
                        var b = Page.$.cookie;
                        return !b(a.ADKEY)
                    }, counter: function (a) {
                        var b = Page.$.cookie;
                        return !a.maxCount ? !0 : (parseInt(b(a.CNTKEY)) || 0) < a.maxCount
                    }, check: function (a,
                                        b) {
                        var e = a.split(","), d, c, g = !0, n;
                        d = 0;
                        for (c = e.length; d < c; d++)if (n = this[e[d]], !n(b)) {
                            g = !1;
                            break
                        }
                        return g
                    }
                };
                return new a
            }(), record: function () {
                var a = Page.$.cookie, b = parseInt(a(this.CNTKEY)) || 0;
                a(this.ADKEY, (new Date).getTime(), {expires: 365, domain: ".3g.qq.com"});
                a(this.CNTKEY, b + 1, {expires: 365, domain: ".3g.qq.com"})
            }, open: function () {
                this.needOpen.check(this.openType, this) && (this.node.style.display = "block", "open" == this.recordOn && this.record())
            }, close: function () {
                this.node.style.display = "none";
                "close" == this.recordOn &&
                this.record()
            }, trigger: function (a, b) {
            }, bind: function (a, b) {
            }
        };
        return {
            cretate: function (b) {
                return new a(b)
            }
        }
    }(), da = function () {
        if (!/mqqbrowser/i.test(navigator.userAgent) && !/g_f=(23462|22152|22580)/i.test(location.href)) {
            var b = ca.cretate({
                name: "banner",
                html: '<div id="header-adtip" style="position:relative;width:100%;background:#fff;display:none;font-size:0"><div style="position:relative;font-size:0;text-align:center"><a style="display:block;position:relative;" href="' + bannerAdUrl + '"><img src="' + bannerAdimg +
                '" alt="" width="100%" /><span class="close" style="position:absolute; padding:9px;width:22px;height:22px;right:0px;top:50%;margin-top:-20px;background-position:center center; background-repeat:no-repeat;background-image:url(http://3glogo.gtimg.com/wap30/info/info/img/browsers_ad_close_gray.png);background-size:25px 25px;"></span></a></div></div>',
                type: "each",
                maxCount: 0,
                recordOn: "close",
                prepend: !0
            });
            a.cls("close", a.id("header-adtip"))[0].addEventListener("click", function (a) {
                a.preventDefault();
                b.close();
                (new Image).src = "/g/s?aid=debug_tempt_log&bid=info&col1=closeQQAd&col2=home"
            }, !1);
            b.open()
        }
    };
    asyncCall.reg("pageinit", function (a) {
        Page.conf.current = "1" == a.version ? "simple" : "full";
        setTimeout(function () {
            b(function () {
                e();
                bannerAdUrl && bannerAdimg && da()
            })
        }, 180);
        a = document.createElement("link");
        a.async = !0;
        a.rel = "stylesheet";
        a.href = "http://3glogo.gtimg.com/wap30/info/info5/css/ptlogin_info.css";
        a.type = "text/css";
        document.body.appendChild(a);
        loadScript(Page.conf.login.js, function () {
        })
    });
    return {
        switchTo: L,
        toggle: M, tips: f
    }
}(Page.$);
(function () {
    var a = Math, k = /webkit/i.test(navigator.appVersion) ? "webkit" : /firefox/i.test(navigator.userAgent) ? "Moz" : "opera"in window ? "O" : "";
    /android/gi.test(navigator.appVersion);
    var s = /iphone|ipad/gi.test(navigator.appVersion), c = /playbook/gi.test(navigator.appVersion), f = /hp-tablet/gi.test(navigator.appVersion), m = "WebKitCSSMatrix"in window && "m11"in new WebKitCSSMatrix, h = "ontouchstart"in window && !f, y = k + "Transform"in document.documentElement.style, A = s || c, F = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
                return setTimeout(a, 17)
            }
    }(), C = window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, D = "onorientationchange"in window ? "orientationchange" : "resize", B = h ? "touchstart" : "mousedown", u = h ? "touchmove" : "mousemove", p = h ?
        "touchend" : "mouseup", q = h ? "touchcancel" : "mouseup", v = "translate" + (m ? "3d(" : "("), r = m ? ",0)" : ")", s = function (a, b) {
        var d = this, c = document, f;
        d.wrapper = "object" == typeof a ? a : c.getElementById(a);
        d.wrapper.style.overflow = "hidden";
        d.scroller = d.wrapper.children[0];
        d.options = {
            hScroll: !0,
            vScroll: !0,
            x: 0,
            y: 0,
            bounce: !0,
            bounceLock: !1,
            momentum: !0,
            lockDirection: !0,
            useTransform: !0,
            useTransition: !1,
            onRefresh: null,
            onBeforeScrollStart: function (a) {
                a.preventDefault()
            },
            onScrollStart: null,
            onBeforeScrollMove: null,
            onScrollMove: null,
            onBeforeScrollEnd: null,
            onScrollEnd: null,
            onTouchEnd: null,
            onDestroy: null
        };
        for (f in b)d.options[f] = b[f];
        d.x = d.options.x;
        d.y = d.options.y;
        d.options.useTransform = y ? d.options.useTransform : !1;
        d.options.hScrollbar = d.options.hScroll && d.options.hScrollbar;
        d.options.vScrollbar = d.options.vScroll && d.options.vScrollbar;
        d.options.useTransition = A && d.options.useTransition;
        d.scroller.style[k + "TransitionProperty"] = d.options.useTransform ? "-" + k.toLowerCase() + "-transform" : "top left";
        d.scroller.style[k + "TransitionDuration"] =
            "0";
        d.scroller.style[k + "TransformOrigin"] = "0 0";
        d.options.useTransition && (d.scroller.style[k + "TransitionTimingFunction"] = "cubic-bezier(0.33,0.66,0.66,1)");
        d.options.useTransform ? d.scroller.style[k + "Transform"] = v + d.x + "px," + d.y + "px" + r : d.scroller.style.cssText += ";position:absolute;top:" + d.y + "px;left:" + d.x + "px";
        setTimeout(function () {
            d.refresh()
        }, 200);
        d._bind(D, window);
        d._bind(B);
        h || d._bind("mouseout", d.wrapper)
    };
    s.prototype = {
        enabled: !0, pageScrolling: !1, x: 0, y: 0, steps: [], scale: 1, handleEvent: function (a) {
            switch (a.type) {
                case B:
                    if (!h &&
                        0 !== a.button)break;
                    this._start(a);
                    break;
                case u:
                    this._move(a);
                    break;
                case p:
                case q:
                    this._end(a);
                    break;
                case D:
                    this._resize();
                    break;
                case "mouseout":
                    this._mouseout(a);
                    break;
                case "webkitTransitionEnd":
                    this._transitionEnd(a)
            }
        }, _resize: function () {
            var a = this;
            setTimeout(function () {
                a.refresh()
            }, 500)
        }, _pos: function (a, b) {
            a = this.hScroll ? a : 0;
            b = this.vScroll ? b : 0;
            this.options.useTransform ? this.scroller.style[k + "Transform"] = v + a + "px," + b + "px" + r + " scale(" + this.scale + ")" : (a >>= 0, b >>= 0, this.scroller.style.left = a + "px", this.scroller.style.top =
                b + "px");
            this.x = a;
            this.y = b
        }, _start: function (a) {
            var b = h ? a.touches[0] : a, d, c;
            if (this.enabled) {
                this.options.onBeforeScrollStart && this.options.onBeforeScrollStart.call(this, a);
                this.options.useTransition && this._transitionTime(0);
                this.zoomed = this.animating = this.moved = !1;
                this.dirY = this.dirX = this.absDistY = this.absDistX = this.distY = this.distX = 0;
                if (this.options.momentum && (this.options.useTransform ? (d = getComputedStyle(this.scroller, null)[k + "Transform"].replace(/[^0-9-.,]/g, "").split(","), c = 1 * d[4], d = 1 * d[5]) : (c =
                        1 * getComputedStyle(this.scroller, null).left.replace(/[^0-9-]/g, ""), d = 1 * getComputedStyle(this.scroller, null).top.replace(/[^0-9-]/g, "")), c != this.x || d != this.y))this.options.useTransition ? this._unbind("webkitTransitionEnd") : C(this.aniTime), this.steps = [], this._pos(c, d);
                this.startX = this.x;
                this.startY = this.y;
                this.pointX = b.pageX;
                this.pointY = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.onScrollStart && this.options.onScrollStart.call(this, a);
                this._bind(u);
                this._bind(p);
                this._bind(q)
            }
        }, _move: function (e) {
            var b =
                h ? e.touches[0] : e, d = b.pageX - this.pointX, c = b.pageY - this.pointY, f = this.x + d, k = this.y + c, m = e.timeStamp || Date.now();
            if (!this.pageScrolling)if (Math.abs(c) > Math.abs(d))this.pageScrolling = !0; else {
                e.preventDefault();
                this.options.onBeforeScrollMove && this.options.onBeforeScrollMove.call(this, e);
                this.pointX = b.pageX;
                this.pointY = b.pageY;
                if (0 < f || f < this.maxScrollX)f = this.options.bounce ? this.x + d / 2 : 0 <= f || 0 <= this.maxScrollX ? 0 : this.maxScrollX;
                if (0 < k || k < this.maxScrollY)k = this.options.bounce ? this.y + c / 2 : 0 <= k || 0 <= this.maxScrollY ?
                    0 : this.maxScrollY;
                this.distX += d;
                this.distY += c;
                this.absDistX = a.abs(this.distX);
                this.absDistY = a.abs(this.distY);
                6 > this.absDistX && 6 > this.absDistY || (this.options.lockDirection && (this.absDistX > this.absDistY + 5 ? (k = this.y, c = 0) : this.absDistY > this.absDistX + 5 && (f = this.x, d = 0)), this.moved = !0, this._pos(f, k), this.dirX = 0 < d ? -1 : 0 > d ? 1 : 0, this.dirY = 0 < c ? -1 : 0 > c ? 1 : 0, 300 < m - this.startTime && (this.startTime = m, this.startX = this.x, this.startY = this.y), this.options.onScrollMove && this.options.onScrollMove.call(this, e))
            }
        }, _end: function (e) {
            if (!(h &&
                0 != e.touches.length)) {
                var b = h ? e.changedTouches[0] : e, d, c, f = {dist: 0, time: 0}, k = {
                    dist: 0,
                    time: 0
                }, m = (e.timeStamp || Date.now()) - this.startTime;
                d = this.x;
                c = this.y;
                this.pageScrolling && (e.preventDefault(), e.stopPropagation());
                this._unbind(u);
                this._unbind(p);
                this._unbind(q);
                this.options.onBeforeScrollEnd && this.options.onBeforeScrollEnd.call(this, e);
                if (!this.moved && !this.pageScrolling) {
                    if (h) {
                        for (d = b.target; 1 != d.nodeType;)d = d.parentNode;
                        "SELECT" != d.tagName && ("INPUT" != d.tagName && "TEXTAREA" != d.tagName) && (c = document.createEvent("MouseEvents"),
                            c.initMouseEvent("click", !0, !0, e.view, 1, b.screenX, b.screenY, b.clientX, b.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), c._fake = !0, d.dispatchEvent(c))
                    }
                    this._resetPos(200)
                } else {
                    this.pageScrolling = !1;
                    if (300 > m && this.options.momentum) {
                        f = d ? this._momentum(d - this.startX, m, -this.x, this.scrollerW - this.wrapperW + this.x, this.options.bounce ? this.wrapperW : 0) : f;
                        k = c ? this._momentum(c - this.startY, m, -this.y, 0 > this.maxScrollY ? this.scrollerH - this.wrapperH + this.y : 0, this.options.bounce ? this.wrapperH : 0) : k;
                        d = this.x +
                        f.dist;
                        c = this.y + k.dist;
                        if (0 < this.x && 0 < d || this.x < this.maxScrollX && d < this.maxScrollX)f = {
                            dist: 0,
                            time: 0
                        };
                        if (0 < this.y && 0 < c || this.y < this.maxScrollY && c < this.maxScrollY)k = {
                            dist: 0,
                            time: 0
                        }
                    }
                    f.dist || k.dist ? (b = a.max(a.max(f.time, k.time), 10), this.scrollTo(d >> 0, c >> 0, b)) : this._resetPos(200)
                }
                this.options.onTouchEnd && this.options.onTouchEnd.call(this, e)
            }
        }, _resetPos: function (a) {
            var b = 0 <= this.x ? 0 : this.x < this.maxScrollX ? this.maxScrollX : this.x, d = 0 <= this.y || 0 < this.maxScrollY ? 0 : this.y < this.maxScrollY ? this.maxScrollY : this.y;
            b == this.x && d == this.y ? this.moved && (this.options.onScrollEnd && this.options.onScrollEnd.call(this), this.moved = !1) : this.scrollTo(b, d, a || 0)
        }, _mouseout: function (a) {
            var b = a.relatedTarget;
            if (b)for (; b = b.parentNode;)if (b == this.wrapper)return;
            this._end(a)
        }, _transitionEnd: function (a) {
            a.target == this.scroller && (this._unbind("webkitTransitionEnd"), this._startAni())
        }, _startAni: function () {
            var e = this, b = e.x, d = e.y, c = Date.now(), f, h, k;
            e.animating || (e.steps.length ? (f = e.steps.shift(), f.x == b && f.y == d && (f.time = 0), e.animating = !0, e.moved = !0, e.options.useTransition ? (e._transitionTime(f.time), e._pos(f.x, f.y), e.animating = !1, f.time ? e._bind("webkitTransitionEnd") : e._resetPos(0)) : (k = function () {
                var m = Date.now(), p;
                m >= c + f.time ? (e._pos(f.x, f.y), e.animating = !1, e.options.onAnimationEnd && e.options.onAnimationEnd.call(e), e._startAni()) : (m = (m - c) / f.time - 1, h = a.sqrt(1 - m * m), m = (f.x - b) * h + b, p = (f.y - d) * h + d, e._pos(m, p), e.animating && (e.aniTime = F(k)))
            }, k())) : e._resetPos(400))
        }, _transitionTime: function (a) {
            this.scroller.style[k + "TransitionDuration"] =
                a + "ms"
        }, _momentum: function (e, b, d, c, f) {
            b = a.abs(e) / b;
            var h = b * b / 0.0012;
            0 < e && h > d ? (d += f / (6 / (6E-4 * (h / b))), b = b * d / h, h = d) : 0 > e && h > c && (c += f / (6 / (6E-4 * (h / b))), b = b * c / h, h = c);
            return {dist: h * (0 > e ? -1 : 1), time: b / 6E-4 >> 0}
        }, _offset: function (a) {
            for (var b = -a.offsetLeft, d = -a.offsetTop; a = a.offsetParent;)b -= a.offsetLeft, d -= a.offsetTop;
            return {left: b, top: d}
        }, _bind: function (a, b, d) {
            (b || this.scroller).addEventListener(a, this, !!d)
        }, _unbind: function (a, b, d) {
            (b || this.scroller).removeEventListener(a, this, !!d)
        }, destroy: function () {
            this.scroller.style.width =
                "auto";
            this.scroller.style[k + "Transform"] = "";
            this.enabled = !0;
            this.pageScrolling = !1;
            this.y = this.x = 0;
            this._unbind(D, window);
            this._unbind(B);
            this._unbind(u);
            this._unbind(p);
            this._unbind(q);
            this._unbind("mouseout", this.wrapper);
            this.options.useTransition && this._unbind("webkitTransitionEnd");
            this.options.onDestroy && this.options.onDestroy.call(this)
        }, refresh: function () {
            var a;
            this.wrapperW = this.wrapper.clientWidth;
            this.wrapperH = this.wrapper.clientHeight;
            this.scrollerW = this.scroller.offsetWidth;
            this.scrollerH =
                this.scroller.offsetHeight;
            this.maxScrollX = this.wrapperW - this.scrollerW;
            this.maxScrollY = this.wrapperH - this.scrollerH;
            this.dirY = this.dirX = 0;
            this.hScroll = this.options.hScroll && 0 > this.maxScrollX;
            this.vScroll = this.options.vScroll && (!this.options.bounceLock && !this.hScroll || this.scrollerH > this.wrapperH);
            a = this._offset(this.wrapper);
            this.wrapperOffsetLeft = -a.left;
            this.wrapperOffsetTop = -a.top;
            this.scroller.style[k + "TransitionDuration"] = "0";
            this._resetPos(200)
        }, scrollTo: function (a, b, d, c) {
            var f = a;
            this.stop();
            f.length || (f = [{x: a, y: b, time: d, relative: c}]);
            a = 0;
            for (b = f.length; a < b; a++)f[a].relative && (f[a].x = this.x - f[a].x, f[a].y = this.y - f[a].y), this.steps.push({
                x: f[a].x,
                y: f[a].y,
                time: f[a].time || 0
            });
            this._startAni()
        }, scrollToElement: function (c, b) {
            var d;
            if (c = c.nodeType ? c : this.scroller.querySelector(c))d = this._offset(c), d.left += this.wrapperOffsetLeft, d.top += this.wrapperOffsetTop, d.left = 0 < d.left ? 0 : d.left < this.maxScrollX ? this.maxScrollX : d.left, d.top = 0 < d.top ? 0 : d.top < this.maxScrollY ? this.maxScrollY : d.top, b = void 0 ===
            b ? a.max(2 * a.abs(d.left), 2 * a.abs(d.top)) : b, this.scrollTo(d.left, d.top, b)
        }, disable: function () {
            this.stop();
            this._resetPos(0);
            this.enabled = !1;
            this._unbind(u);
            this._unbind(p);
            this._unbind(q)
        }, enable: function () {
            this.enabled = !0
        }, stop: function () {
            C(this.aniTime);
            this.steps = [];
            this.animating = this.moved = !1
        }
    };
    "undefined" !== typeof exports ? exports.iScroll = s : window.iScroll = s
})();
var Swipe = function (a, k) {
    function s() {
        q = p.children;
        e = q.length;
        2 > q.length && (k.continuous = !1);
        u.transitions && (k.continuous && 3 > q.length) && (p.appendChild(q[0].cloneNode(!0)), p.appendChild(p.children[1].cloneNode(!0)), q = p.children);
        v = Array(q.length);
        r = a.getBoundingClientRect().width || a.offsetWidth;
        p.style.width = q.length * r + "px";
        for (var c = q.length; c--;) {
            var d = q[c];
            d.style.width = r + "px";
            d.setAttribute("data-index", c);
            u.transitions && (d.style.left = c * -r + "px", h(c, b > c ? -r : b < c ? r : 0, 0))
        }
        k.continuous && u.transitions &&
        (h(f(b - 1), -r, 0), h(f(b + 1), r, 0));
        u.transitions || (p.style.left = b * -r + "px");
        a.style.visibility = "visible"
    }

    function c() {
        k.continuous ? m(b + 1) : b < q.length - 1 && m(b + 1)
    }

    function f(a) {
        return (q.length + a % q.length) % q.length
    }

    function m(a, c) {
        if (b != a) {
            if (u.transitions) {
                var e = Math.abs(b - a) / (b - a);
                if (k.continuous) {
                    var m = e, e = -v[f(a)] / r;
                    e !== m && (a = -e * q.length + a)
                }
                for (m = Math.abs(b - a) - 1; m--;)h(f((a > b ? a : b) - m - 1), r * e, 0);
                a = f(a);
                h(b, r * e, c || d);
                h(a, 0, c || d);
                k.continuous && h(f(a - e), -(r * e), 0)
            } else a = f(a), A(b * -r, a * -r, c || d);
            b = a;
            B(k.callback &&
            k.callback(b, q[b]))
        }
    }

    function h(a, b, c) {
        y(a, b, c);
        v[a] = b
    }

    function y(a, b, c) {
        if (a = (a = q[a]) && a.style)a.webkitTransitionDuration = a.MozTransitionDuration = a.msTransitionDuration = a.OTransitionDuration = a.transitionDuration = c + "ms", a.webkitTransform = "translate(" + b + "px,0) translateZ(0)", a.msTransform = a.MozTransform = a.OTransform = "translateX(" + b + "px)"
    }

    function A(a, c, d) {
        if (d)var e = +new Date, f = setInterval(function () {
            var h = +new Date - e;
            h > d ? (p.style.left = c + "px", z && F(), k.transitionEnd && k.transitionEnd.call(event, b, q[b]),
                clearInterval(f)) : p.style.left = (c - a) * (Math.floor(100 * (h / d)) / 100) + a + "px"
        }, 4); else p.style.left = c + "px"
    }

    function F() {
        z = k.auto || 0;
        w = setTimeout(c, z)
    }

    function C(a) {
        a || (z = 0);
        clearTimeout(w);
        w = null
    }

    var D = function () {
    }, B = function (a) {
        setTimeout(a || D, 0)
    }, u = {
        addEventListener: !!window.addEventListener,
        touch: "ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch,
        transitions: function (a) {
            var b = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"], c;
            for (c in b)if (void 0 !==
                a.style[b[c]])return !0;
            return !1
        }(document.createElement("swipe"))
    };
    if (a) {
        var p = a.children[0], q, v, r, e;
        k = k || {};
        var b = parseInt(k.startSlide, 10) || 0, d = k.speed || 300;
        k.continuous = void 0 !== k.continuous ? k.continuous : !0;
        var z = k.auto || 0, w, K, G, I, t, J, H, x = {
            handleEvent: function (a) {
                switch (a.type) {
                    case "touchstart":
                        this.start(a);
                        break;
                    case "touchmove":
                        this.move(a);
                        break;
                    case "touchend":
                        B(this.end(a));
                        break;
                    case "webkitTransitionEnd":
                    case "msTransitionEnd":
                    case "oTransitionEnd":
                    case "otransitionend":
                    case "transitionend":
                        B(this.transitionEnd(a));
                        break;
                    case "resize":
                        B(s.call())
                }
                k.stopPropagation && a.stopPropagation()
            }, start: function (a) {
                a = a.touches[0];
                K = a.pageX;
                G = a.pageY;
                I = +new Date;
                J = t = H = void 0;
                p.addEventListener("touchmove", this, !1);
                p.addEventListener("touchend", this, !1)
            }, move: function (a) {
                if (!(1 < a.touches.length || a.scale && 1 !== a.scale)) {
                    k.disableScroll && a.preventDefault();
                    var c = a.touches[0];
                    t = c.pageX - K;
                    J = c.pageY - G;
                    "undefined" == typeof H && (H = !!(H || Math.abs(t) < Math.abs(J)));
                    H || (a.preventDefault(), C(!0), k.continuous ? (y(f(b - 1), t + v[f(b - 1)], 0), y(b,
                        t + v[b], 0), y(f(b + 1), t + v[f(b + 1)], 0)) : (t /= !b && 0 < t || b == q.length - 1 && 0 > t ? Math.abs(t) / r + 1 : 1, y(b - 1, t + v[b - 1], 0), y(b, t + v[b], 0), y(b + 1, t + v[b + 1], 0)))
                }
            }, end: function (a) {
                a = 250 > Number(+new Date - I) && 20 < Math.abs(t) || Math.abs(t) > r / 2;
                var c = !b && 0 < t || b == q.length - 1 && 0 > t;
                k.continuous && (c = !1);
                var e = 0 > t;
                H || (a && !c ? (e ? (k.continuous ? (h(f(b - 1), -r, 0), h(f(b + 2), r, 0)) : h(b - 1, -r, 0), h(b, v[b] - r, d), h(f(b + 1), v[f(b + 1)] - r, d), b = f(b + 1)) : (k.continuous ? (h(f(b + 1), r, 0), h(f(b - 2), -r, 0)) : h(b + 1, r, 0), h(b, v[b] + r, d), h(f(b - 1), v[f(b - 1)] + r, d), b = f(b - 1)),
                k.callback && k.callback(b, q[b])) : k.continuous ? (h(f(b - 1), -r, d), h(b, 0, d), h(f(b + 1), r, d)) : (h(b - 1, -r, d), h(b, 0, d), h(b + 1, r, d)));
                p.removeEventListener("touchmove", x, !1);
                p.removeEventListener("touchend", x, !1)
            }, transitionEnd: function (a) {
                parseInt(a.target.getAttribute("data-index"), 10) == b && (z && F(), k.transitionEnd && k.transitionEnd.call(a, b, q[b]))
            }
        };
        s();
        z && F();
        u.addEventListener ? (u.touch && p.addEventListener("touchstart", x, !1), u.transitions && (p.addEventListener("webkitTransitionEnd", x, !1), p.addEventListener("msTransitionEnd",
            x, !1), p.addEventListener("oTransitionEnd", x, !1), p.addEventListener("otransitionend", x, !1), p.addEventListener("transitionend", x, !1)), window.addEventListener("resize", x, !1)) : window.onresize = function () {
            s()
        };
        B(k.oninit && k.oninit(b, q[b]));
        return {
            setup: function () {
                s()
            }, stop: C, resume: function () {
                C();
                F(!0)
            }, slide: function (a, b) {
                C();
                m(a, b)
            }, prev: function () {
                C();
                k.continuous ? m(b - 1) : b && m(b - 1)
            }, next: function () {
                C();
                c()
            }, getPos: function () {
                return b
            }, getNumSlides: function () {
                return e
            }, kill: function () {
                C();
                p.style.width =
                    "auto";
                p.style.left = 0;
                for (var a = q.length; a--;) {
                    var b = q[a];
                    b.style.width = "100%";
                    b.style.left = 0;
                    u.transitions && y(a, 0, 0)
                }
                u.addEventListener ? (p.removeEventListener("touchstart", x, !1), p.removeEventListener("webkitTransitionEnd", x, !1), p.removeEventListener("msTransitionEnd", x, !1), p.removeEventListener("oTransitionEnd", x, !1), p.removeEventListener("otransitionend", x, !1), p.removeEventListener("transitionend", x, !1), window.removeEventListener("resize", x, !1)) : window.onresize = null
            }
        }
    }
};
asyncCall.reg("runindex", function () {
    Page.$.domready(function () {
        Page.full = function () {
            var a = Page.$, k = function () {
                var c = a.id("slideImage");
                a.tag("img", c);
                var f = a.tag("li", c).length;
                /OS 4/i.test(navigator.userAgent) || (Page.swiper = new Swipe(c, {
                    auto: 3E3,
                    continuous: !0,
                    callback: function (c, h) {
                        a.id("img-director").innerHTML = "<span>" + (c + 1) + "</span>/" + f
                    },
                    oninit: function () {
                        a.id("img-director").innerHTML = "<span>1</span>/" + f
                    }
                }), a.id("topImgPrev").addEventListener("touchend", function (a) {
                    a.preventDefault();
                    a.stopPropagation();
                    Page.swiper.prev()
                }), a.id("topImgNext").addEventListener("touchend", function (a) {
                    a.preventDefault();
                    a.stopPropagation();
                    Page.swiper.next()
                }), window.onresize = function () {
                    Page.swiper.setup()
                })
            }, s = function (c) {
                var f, k = a.id(c), m = a.tag("li", k), s = a.cls("prev", k.parentNode)[0], D = a.cls("next", k.parentNode)[0], B = a.tag("ul", k)[0], u = 0, p = function () {
                    f.x <= f.maxScrollX + 10 ? (a.removeClass(s, "last"), a.addClass(D, "last"), a.removeClass(k, "mask-layer")) : (-10 <= f.x ? a.addClass(s, "last") : a.removeClass(s, "last"), a.removeClass(D,
                        "last"), a.addClass(k, "mask-layer"))
                }, q = function () {
                    "simple" != Page.conf.current && (u = 0, a.each(m, function (a, c) {
                        var e = m[a].clientWidth, b = parseInt(window.getComputedStyle(m[a]).marginLeft), d = parseInt(window.getComputedStyle(m[a]).marginRight);
                        u += e + b + d
                    }), "app-slide" == c && (Page.$.id("app-slide").style.outline = "1px solid transparent"), B.style.width = u + "px")
                };
                q();
                "onorientationchange"in window ? window.addEventListener("orientationchange", function () {
                    setTimeout(q, 200)
                }, !1) : window.addEventListener("resize", function () {
                    setTimeout(q,
                        200)
                }, !1);
                return f = new iScroll(c, {
                    hScroll: !0, vScroll: !1, onBeforeScrollStart: function () {
                    }, onScrollEnd: function () {
                    }, onScrollMove: p, onAnimationEnd: p
                })
            }, c = !1, f = null, m = null;
            return {
                enter: function () {
                    Page.swiper && Page.swiper.resume();
                    c ? "full" == Page.conf.current && setTimeout(function () {
                        f = s("imgs-slide");
                        m = s("app-slide")
                    }, 600) : (k(), c = !0)
                }, leave: function () {
                    Page.swiper && Page.swiper.stop();
                    Page.swiper && Page.swiper.slide(0);
                    f && f.destroy();
                    m && m.destroy()
                }
            }
        }();
        Page.full.enter()
    })
});
var yyy = '2';
var ccc= '3';
<<<<<<< HEAD
var ddd='2'
=======
var uuu='3';
>>>>>>> test
/*FEND*/
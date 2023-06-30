/*!
 * FullCalendar v4.0.0-alpha.4
 * Docs & License: https://fullcalendar.io/
 * (c) 2018 Adam Shaw
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("superagent")))
    : "function" == typeof define && define.amd
    ? define(["superagent"], t)
    : "object" == typeof exports
    ? (exports.FullCalendar = t(require("superagent")))
    : (e.FullCalendar = t(e.superagent));
})("undefined" != typeof self ? self : this, function (e) {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 185))
    );
  })([
    ,
    function (e, t) {
      var n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        };
      (t.__extends = function (e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }),
        (t.__assign =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          });
    },
    function (e, t, n) {
      function r(e, t) {
        t.left &&
          k.applyStyle(e, { borderLeftWidth: 1, marginLeft: t.left - 1 }),
          t.right &&
            k.applyStyle(e, { borderRightWidth: 1, marginRight: t.right - 1 });
      }
      function i(e) {
        k.applyStyle(e, {
          marginLeft: "",
          marginRight: "",
          borderLeftWidth: "",
          borderRightWidth: "",
        });
      }
      function o() {
        document.body.classList.add("fc-not-allowed");
      }
      function a() {
        document.body.classList.remove("fc-not-allowed");
      }
      function s(e, t, n) {
        var r = Math.floor(t / e.length),
          i = Math.floor(t - r * (e.length - 1)),
          o = [],
          a = [],
          s = [],
          u = 0;
        l(e),
          e.forEach(function (t, n) {
            var l = n === e.length - 1 ? i : r,
              d = x.computeHeightAndMargins(t);
            d < l ? (o.push(t), a.push(d), s.push(t.offsetHeight)) : (u += d);
          }),
          n &&
            ((t -= u),
            (r = Math.floor(t / o.length)),
            (i = Math.floor(t - r * (o.length - 1)))),
          o.forEach(function (e, t) {
            var n = t === o.length - 1 ? i : r,
              l = a[t],
              u = s[t],
              d = n - (l - u);
            l < n && (e.style.height = d + "px");
          });
      }
      function l(e) {
        e.forEach(function (e) {
          e.style.height = "";
        });
      }
      function u(e) {
        var t = 0;
        return (
          e.forEach(function (e) {
            var n = e.firstChild;
            if (n instanceof HTMLElement) {
              var r = n.offsetWidth;
              r > t && (t = r);
            }
          }),
          t++,
          e.forEach(function (e) {
            e.style.width = t + "px";
          }),
          t
        );
      }
      function d(e, t) {
        var n = { position: "relative", left: -1 };
        k.applyStyle(e, n), k.applyStyle(t, n);
        var r = e.offsetHeight - t.offsetHeight,
          i = { position: "", left: "" };
        return k.applyStyle(e, i), k.applyStyle(t, i), r;
      }
      function c(e) {
        e.classList.add("fc-unselectable"),
          e.addEventListener("selectstart", z.preventDefault);
      }
      function p(e) {
        e.classList.remove("fc-unselectable"),
          e.removeEventListener("selectstart", z.preventDefault);
      }
      function f(e) {
        e.addEventListener("contextmenu", z.preventDefault);
      }
      function h(e) {
        e.removeEventListener("contextmenu", z.preventDefault);
      }
      function g(e) {
        var t,
          n,
          r = [],
          i = [];
        for (
          "string" == typeof e
            ? (i = e.split(/\s*,\s*/))
            : "function" == typeof e
            ? (i = [e])
            : Array.isArray(e) && (i = e),
            t = 0;
          t < i.length;
          t++
        )
          (n = i[t]),
            "string" == typeof n
              ? r.push(
                  "-" === n.charAt(0)
                    ? { field: n.substring(1), order: -1 }
                    : { field: n, order: 1 }
                )
              : "function" == typeof n && r.push({ func: n });
        return r;
      }
      function v(e, t, n) {
        var r, i;
        for (r = 0; r < n.length; r++) if ((i = m(e, t, n[r]))) return i;
        return 0;
      }
      function m(e, t, n) {
        return n.func
          ? n.func(e, t)
          : y(e[n.field], t[n.field]) * (n.order || 1);
      }
      function y(e, t) {
        return e || t
          ? null == t
            ? -1
            : null == e
            ? 1
            : "string" == typeof e || "string" == typeof t
            ? String(e).localeCompare(String(t))
            : e - t
          : 0;
      }
      function E() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = window.console;
        if (n && n.log) return n.log.apply(n, e);
      }
      function S() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = window.console;
        return n && n.warn ? n.warn.apply(n, e) : E.apply(null, e);
      }
      function b(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      function D(e, t) {
        var n = String(e);
        return "000".substr(0, t - n.length) + n;
      }
      function w(e, t) {
        return e - t;
      }
      function T(e) {
        return e % 1 == 0;
      }
      function R(e, t, n) {
        if (("function" == typeof e && (e = [e]), e)) {
          var r = void 0,
            i = void 0;
          for (r = 0; r < e.length; r++) i = e[r].apply(t, n) || i;
          return i;
        }
      }
      function _() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var n = 0; n < e.length; n++) if (void 0 !== e[n]) return e[n];
      }
      function C(e, t) {
        var n,
          r,
          i,
          o,
          a,
          s = function () {
            var l = new Date().valueOf() - o;
            l < t
              ? (n = setTimeout(s, t - l))
              : ((n = null), (a = e.apply(i, r)), (i = r = null));
          };
        return function () {
          return (
            (i = this),
            (r = arguments),
            (o = new Date().valueOf()),
            n || (n = setTimeout(s, t)),
            a
          );
        };
      }
      function M(e, t, n, r) {
        void 0 === n && (n = {});
        var i = {};
        for (var o in t) {
          var a = t[o];
          void 0 !== e[o]
            ? a === Function
              ? (i[o] = "function" == typeof e[o] ? e[o] : null)
              : (i[o] = a ? a(e[o]) : e[o])
            : void 0 !== n[o]
            ? (i[o] = n[o])
            : a === String
            ? (i[o] = "")
            : a && a !== Number && a !== Boolean && a !== Function
            ? (i[o] = a(null))
            : (i[o] = null);
        }
        if (r) for (var o in e) void 0 === t[o] && (r[o] = e[o]);
        return i;
      }
      function P(e) {
        var t = Math.floor(N.diffDays(e.start, e.end)) || 1,
          n = N.startOfDay(e.start);
        return { start: n, end: N.addDays(n, t) };
      }
      function I(e, t) {
        void 0 === t && (t = L.createDuration(0));
        var n = null,
          r = null;
        if (e.end) {
          r = N.startOfDay(e.end);
          var i = e.end.valueOf() - r.valueOf();
          i && i >= L.asRoughMs(t) && (r = N.addDays(r, 1));
        }
        return (
          e.start &&
            ((n = N.startOfDay(e.start)), r && r <= n && (r = N.addDays(n, 1))),
          { start: n, end: r }
        );
      }
      function O(e) {
        var t = I(e);
        return N.diffDays(t.start, t.end) > 1;
      }
      function H(e, t, n, r) {
        return "year" === r
          ? L.createDuration(n.diffWholeYears(e, t), "year")
          : "month" === r
          ? L.createDuration(n.diffWholeMonths(e, t), "month")
          : N.diffDayAndTime(e, t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var k = n(3),
        x = n(15),
        z = n(24),
        N = n(4),
        L = n(9);
      (t.compensateScroll = r),
        (t.uncompensateScroll = i),
        (t.disableCursor = o),
        (t.enableCursor = a),
        (t.distributeHeight = s),
        (t.undistributeHeight = l),
        (t.matchCellWidths = u),
        (t.subtractInnerElHeight = d),
        (t.preventSelection = c),
        (t.allowSelection = p),
        (t.preventContextMenu = f),
        (t.allowContextMenu = h),
        (t.parseFieldSpecs = g),
        (t.compareByFieldSpecs = v),
        (t.compareByFieldSpec = m),
        (t.flexibleCompare = y),
        (t.log = E),
        (t.warn = S),
        (t.capitaliseFirstLetter = b),
        (t.padStart = D),
        (t.compareNumbers = w),
        (t.isInt = T),
        (t.applyAll = R),
        (t.firstDefined = _),
        (t.debounce = C),
        (t.refineProps = M),
        (t.computeAlignedDayRange = P),
        (t.computeVisibleDayRange = I),
        (t.isMultiDayRange = O),
        (t.diffDates = H);
    },
    function (e, t) {
      function n(e, t, n) {
        var r = document.createElement(e);
        if (t)
          for (var i in t)
            "style" === i
              ? m(r, t[i])
              : E[i]
              ? (r[i] = t[i])
              : r.setAttribute(i, t[i]);
        return (
          "string" == typeof n ? (r.innerHTML = n) : null != n && s(r, n), r
        );
      }
      function r(e) {
        e = e.trim();
        var t = document.createElement(a(e));
        return (t.innerHTML = e), t.firstChild;
      }
      function i(e) {
        return Array.prototype.slice.call(o(e));
      }
      function o(e) {
        e = e.trim();
        var t = document.createElement(a(e));
        return (t.innerHTML = e), t.childNodes;
      }
      function a(e) {
        return S[e.substr(0, 3)] || "div";
      }
      function s(e, t) {
        for (var n = d(t), r = 0; r < n.length; r++) e.appendChild(n[r]);
      }
      function l(e, t) {
        for (var n = d(t), r = e.firstChild || null, i = 0; i < n.length; i++)
          e.insertBefore(n[i], r);
      }
      function u(e, t) {
        for (var n = d(t), r = e.nextSibling || null, i = 0; i < n.length; i++)
          e.parentNode.insertBefore(n[i], r);
      }
      function d(e) {
        return "string" == typeof e
          ? i(e)
          : e instanceof Node
          ? [e]
          : Array.prototype.slice.call(e);
      }
      function c(e) {
        e.parentNode && e.parentNode.removeChild(e);
      }
      function p(e, t) {
        return D.call(e, t);
      }
      function f(e, t) {
        return b.call(e, t);
      }
      function h(e, t) {
        for (
          var n = e instanceof HTMLElement ? [e] : e, r = [], i = 0;
          i < n.length;
          i++
        )
          for (var o = n[i].querySelectorAll(t), a = 0; a < o.length; a++)
            r.push(o[a]);
        return r;
      }
      function g(e, t) {
        for (
          var n = e instanceof HTMLElement ? [e] : e, r = [], i = 0;
          i < n.length;
          i++
        )
          for (var o = n[i].children, a = 0; a < o.length; a++) {
            var s = o[a];
            (t && !f(s, t)) || r.push(s);
          }
        return r;
      }
      function v(e, t, n) {
        n ? e.classList.add(t) : e.classList.remove(t);
      }
      function m(e, t, n) {
        for (var r in t) y(e, r, t[r]);
      }
      function y(e, t, n) {
        null == n
          ? (e.style[t] = "")
          : "number" == typeof n && w.test(t)
          ? (e.style[t] = n + "px")
          : (e.style[t] = n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var E = { className: !0, colSpan: !0, rowSpan: !0 },
        S = { "<tr": "tbody", "<td": "tr" };
      (t.createElement = n),
        (t.htmlToElement = r),
        (t.htmlToElements = i),
        (t.appendToElement = s),
        (t.prependToElement = l),
        (t.insertAfterElement = u),
        (t.removeElement = c);
      var b =
          Element.prototype.matches ||
          Element.prototype.matchesSelector ||
          Element.prototype.msMatchesSelector,
        D =
          Element.prototype.closest ||
          function (e) {
            var t = this;
            if (!document.documentElement.contains(t)) return null;
            do {
              if (f(t, e)) return t;
              t = t.parentElement || t.parentNode;
            } while (null !== t && 1 === t.nodeType);
            return null;
          };
      (t.elementClosest = p),
        (t.elementMatches = f),
        (t.findElements = h),
        (t.findChildren = g),
        (t.forceClassName = v);
      var w = /(top|left|right|bottom|width|height)$/i;
      (t.applyStyle = m), (t.applyStyleProp = y);
    },
    function (e, t) {
      function n(e, t) {
        var n = D(e);
        return (n[2] += 7 * t), w(n);
      }
      function r(e, t) {
        var n = D(e);
        return (n[2] += t), w(n);
      }
      function i(e, t) {
        var n = D(e);
        return (n[6] += t), w(n);
      }
      function o(e, t) {
        return a(e, t) / 7;
      }
      function a(e, t) {
        return (t.valueOf() - e.valueOf()) / 864e5;
      }
      function s(e, t) {
        return (t.valueOf() - e.valueOf()) / 36e5;
      }
      function l(e, t) {
        return (t.valueOf() - e.valueOf()) / 6e4;
      }
      function u(e, t) {
        return (t.valueOf() - e.valueOf()) / 1e3;
      }
      function d(e, t) {
        var n = f(e),
          r = f(t);
        return {
          years: 0,
          months: 0,
          days: Math.round(a(n, r)),
          milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf()),
        };
      }
      function c(e, t) {
        var n = p(e, t);
        return null !== n && n % 7 == 0 ? n / 7 : null;
      }
      function p(e, t) {
        return R(e) === R(t) ? Math.round(a(e, t)) : null;
      }
      function f(e) {
        return w([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
      }
      function h(e) {
        return w([
          e.getUTCFullYear(),
          e.getUTCMonth(),
          e.getUTCDate(),
          e.getUTCHours(),
        ]);
      }
      function g(e) {
        return w([
          e.getUTCFullYear(),
          e.getUTCMonth(),
          e.getUTCDate(),
          e.getUTCHours(),
          e.getUTCMinutes(),
        ]);
      }
      function v(e) {
        return w([
          e.getUTCFullYear(),
          e.getUTCMonth(),
          e.getUTCDate(),
          e.getUTCHours(),
          e.getUTCMinutes(),
          e.getUTCSeconds(),
        ]);
      }
      function m(e, t, n) {
        var r = e.getUTCFullYear(),
          i = y(e, r, t, n);
        if (i < 1) return y(e, r - 1, t, n);
        var o = y(e, r + 1, t, n);
        return o >= 1 ? Math.min(i, o) : i;
      }
      function y(e, t, n, r) {
        var i = w([t, 0, 1 + E(t, n, r)]),
          o = f(e),
          s = Math.round(a(i, o));
        return Math.floor(s / 7) + 1;
      }
      function E(e, t, n) {
        var r = 7 + t - n;
        return (-(7 + w([e, 0, r]).getUTCDay() - t) % 7) + r - 1;
      }
      function S(e) {
        return [
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          e.getHours(),
          e.getMinutes(),
          e.getSeconds(),
          e.getMilliseconds(),
        ];
      }
      function b(e) {
        return new Date(
          e[0],
          e[1] || 0,
          null == e[2] ? 1 : e[2],
          e[3] || 0,
          e[4] || 0,
          e[5] || 0
        );
      }
      function D(e) {
        return [
          e.getUTCFullYear(),
          e.getUTCMonth(),
          e.getUTCDate(),
          e.getUTCHours(),
          e.getUTCMinutes(),
          e.getUTCSeconds(),
          e.getUTCMilliseconds(),
        ];
      }
      function w(e) {
        return (
          1 === e.length && (e = e.concat([0])),
          new Date(Date.UTC.apply(Date, e))
        );
      }
      function T(e) {
        return !isNaN(e.valueOf());
      }
      function R(e) {
        return (
          1e3 * e.getUTCHours() * 60 * 60 +
          1e3 * e.getUTCMinutes() * 60 +
          1e3 * e.getUTCSeconds() +
          e.getUTCMilliseconds()
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DAY_IDS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]),
        (t.addWeeks = n),
        (t.addDays = r),
        (t.addMs = i),
        (t.diffWeeks = o),
        (t.diffDays = a),
        (t.diffHours = s),
        (t.diffMinutes = l),
        (t.diffSeconds = u),
        (t.diffDayAndTime = d),
        (t.diffWholeWeeks = c),
        (t.diffWholeDays = p),
        (t.startOfDay = f),
        (t.startOfHour = h),
        (t.startOfMinute = g),
        (t.startOfSecond = v),
        (t.weekOfYear = m),
        (t.dateToLocalArray = S),
        (t.arrayToLocalDate = b),
        (t.dateToUtcArray = D),
        (t.arrayToUtcDate = w),
        (t.isValidDate = T),
        (t.timeAsMs = R);
    },
    ,
    ,
    function (e, t, n) {
      function r(e, t) {
        return "object" == typeof e && e
          ? ("string" == typeof t && (e = u.__assign({ separator: t }, e)),
            new c.NativeFormatter(e))
          : "string" == typeof e
          ? new p.CmdFormatter(e, t)
          : "function" == typeof e
          ? new f.FuncFormatter(e)
          : void 0;
      }
      function i(e, t, n) {
        void 0 === n && (n = !1);
        var r = e.toISOString();
        return (
          (r = r.replace(".000", "")),
          n && (r = r.replace("T00:00:00Z", "")),
          r.length > 10 &&
            (null == t
              ? (r = r.replace("Z", ""))
              : 0 !== t && (r = r.replace("Z", a(t, !0)))),
          r
        );
      }
      function o(e) {
        return (
          d.padStart(e.getUTCHours(), 2) +
          ":" +
          d.padStart(e.getUTCMinutes(), 2) +
          ":" +
          d.padStart(e.getUTCSeconds(), 2)
        );
      }
      function a(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0 ? "-" : "+",
          r = Math.abs(e),
          i = Math.floor(r / 60),
          o = Math.round(r % 60);
        return t
          ? n + d.padStart(i, 2) + ":" + d.padStart(o, 2)
          : "GMT" + n + i + (o ? ":" + d.padStart(o, 2) : "");
      }
      function s(e, t, n, r) {
        var i = l(e, n.calendarSystem);
        return {
          date: i,
          start: i,
          end: t ? l(t, n.calendarSystem) : null,
          timeZone: n.timeZone,
          localeCodes: n.locale.codes,
          separator: r,
        };
      }
      function l(e, t) {
        var n = t.markerToArray(e.marker);
        return {
          marker: e.marker,
          timeZoneOffset: e.timeZoneOffset,
          array: n,
          year: n[0],
          month: n[1],
          day: n[2],
          hour: n[3],
          minute: n[4],
          second: n[5],
          millisecond: n[6],
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = n(1),
        d = n(2),
        c = n(188),
        p = n(58),
        f = n(189);
      (t.createFormatter = r),
        (t.buildIsoString = i),
        (t.formatIsoTimeString = o),
        (t.formatTimeZoneOffset = a),
        (t.createVerboseFormattingArg = s);
    },
    function (e, t) {
      function n(e, t) {
        var n = null,
          r = null;
        return (
          e.start && (n = t.createMarker(e.start)),
          e.end && (r = t.createMarker(e.end)),
          n || r ? (n && r && r < n ? null : { start: n, end: r }) : null
        );
      }
      function r(e, t) {
        var n,
          r,
          o = [],
          a = t.start;
        for (e.sort(i), n = 0; n < e.length; n++)
          (r = e[n]),
            r.start > a && o.push({ start: a, end: r.start }),
            r.end > a && (a = r.end);
        return a < t.end && o.push({ start: a, end: t.end }), o;
      }
      function i(e, t) {
        return e.start.valueOf() - t.start.valueOf();
      }
      function o(e, t) {
        var n = e.start,
          r = e.end,
          i = null;
        return (
          null !== t.start &&
            (n =
              null === n
                ? t.start
                : new Date(Math.max(n.valueOf(), t.start.valueOf()))),
          null != t.end &&
            (r =
              null === r
                ? t.end
                : new Date(Math.min(r.valueOf(), t.end.valueOf()))),
          (null === n || null === r || n < r) && (i = { start: n, end: r }),
          i
        );
      }
      function a(e, t) {
        return (
          (null === e.start ? null : e.start.valueOf()) ===
            (null === t.start ? null : t.start.valueOf()) &&
          (null === e.end ? null : e.end.valueOf()) ===
            (null === t.end ? null : t.end.valueOf())
        );
      }
      function s(e, t) {
        return (
          (null === e.end || null === t.start || e.end > t.start) &&
          (null === e.start || null === t.end || e.start < t.end)
        );
      }
      function l(e, t) {
        return (
          (null === e.start || (null !== t.start && t.start >= e.start)) &&
          (null === e.end || (null !== t.end && t.end <= e.end))
        );
      }
      function u(e, t) {
        return (
          (null === e.start || t >= e.start) && (null === e.end || t < e.end)
        );
      }
      function d(e, t) {
        return null != t.start && e < t.start
          ? t.start
          : null != t.end && e >= t.end
          ? new Date(t.end.valueOf() - 1)
          : e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseRange = n),
        (t.invertRanges = r),
        (t.intersectRanges = o),
        (t.rangesEqual = a),
        (t.rangesIntersect = s),
        (t.rangeContainsRange = l),
        (t.rangeContainsMarker = u),
        (t.constrainMarkerToRange = d);
    },
    function (e, t, n) {
      function r(e, t) {
        var n;
        return "string" == typeof e
          ? i(e)
          : "object" == typeof e && e
          ? o(e)
          : "number" == typeof e
          ? o(((n = {}), (n[t || "milliseconds"] = e), n))
          : null;
      }
      function i(e) {
        var t = w.exec(e);
        if (t) {
          var n = t[1] ? -1 : 1;
          return {
            years: 0,
            months: 0,
            days: n * (t[2] ? parseInt(t[2], 10) : 0),
            milliseconds:
              n *
              (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 +
                60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 +
                1e3 * (t[5] ? parseInt(t[5], 10) : 0) +
                (t[6] ? parseInt(t[6], 10) : 0)),
          };
        }
        return null;
      }
      function o(e) {
        return {
          years: e.years || e.year || 0,
          months: e.months || e.month || 0,
          days: (e.days || e.day || 0) + 7 * a(e),
          milliseconds:
            60 * (e.hours || e.hour || 0) * 60 * 1e3 +
            60 * (e.minutes || e.minute || 0) * 1e3 +
            1e3 * (e.seconds || e.second || 0) +
            (e.milliseconds || e.millisecond || e.ms || 0),
        };
      }
      function a(e) {
        return e.weeks || e.week || 0;
      }
      function s(e, t) {
        return (
          e.years === t.years &&
          e.months === t.months &&
          e.days === t.days &&
          e.milliseconds === t.milliseconds
        );
      }
      function l(e) {
        return (
          0 === e.years &&
          0 === e.months &&
          1 === e.days &&
          0 === e.milliseconds
        );
      }
      function u(e, t) {
        return {
          years: e.years + t.years,
          months: e.months + t.months,
          days: e.days + t.days,
          milliseconds: e.milliseconds + t.milliseconds,
        };
      }
      function d(e, t) {
        return {
          years: e.years - t.years,
          months: e.months - t.months,
          days: e.days - t.days,
          milliseconds: e.milliseconds - t.milliseconds,
        };
      }
      function c(e, t) {
        return {
          years: e.years * t,
          months: e.months * t,
          days: e.days * t,
          milliseconds: e.milliseconds * t,
        };
      }
      function p(e) {
        return h(e) / 365;
      }
      function f(e) {
        return h(e) / 30;
      }
      function h(e) {
        return y(e) / 864e5;
      }
      function g(e) {
        return y(e) / 36e5;
      }
      function v(e) {
        return y(e) / 6e4;
      }
      function m(e) {
        return y(e) / 1e3;
      }
      function y(e) {
        return (
          31536e6 * e.years +
          2592e6 * e.months +
          864e5 * e.days +
          e.milliseconds
        );
      }
      function E(e, t) {
        for (var n = null, r = 0; r < D.length; r++) {
          var i = D[r];
          if (t[i]) {
            var o = e[i] / t[i];
            if (!b.isInt(o) || (null !== n && n !== o)) return null;
            n = o;
          } else if (e[i]) return null;
        }
        return n;
      }
      function S(e, t) {
        var n = e.milliseconds;
        if (n) {
          if (n % 1e3 != 0) return { unit: "millisecond", value: n };
          if (n % 6e4 != 0) return { unit: "second", value: n / 1e3 };
          if (n % 36e5 != 0) return { unit: "minute", value: n / 6e4 };
          if (n) return { unit: "hour", value: n / 36e5 };
        }
        return e.days
          ? t || e.days % 7 != 0
            ? { unit: "day", value: e.days }
            : { unit: "week", value: e.days / 7 }
          : e.months
          ? { unit: "month", value: e.months }
          : e.years
          ? { unit: "year", value: e.years }
          : { unit: "millisecond", value: 0 };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var b = n(2),
        D = ["years", "months", "days", "milliseconds"],
        w = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
      (t.createDuration = r),
        (t.getWeeksFromInput = a),
        (t.durationsEqual = s),
        (t.isSingleDay = l),
        (t.addDurations = u),
        (t.subtractDurations = d),
        (t.multiplyDuration = c),
        (t.asRoughYears = p),
        (t.asRoughMonths = f),
        (t.asRoughDays = h),
        (t.asRoughHours = g),
        (t.asRoughMinutes = v),
        (t.asRoughSeconds = m),
        (t.asRoughMs = y),
        (t.wholeDivideDurations = E),
        (t.greatestDurationDenominator = S);
    },
    function (e, t, n) {
      function r(e, t, n, r) {
        var i = {},
          o = {},
          a = {},
          s = [],
          u = [],
          p = l(e.defs, t);
        for (var f in e.defs) {
          var h = e.defs[f];
          "inverse-background" === h.rendering &&
            (h.groupId
              ? ((i[h.groupId] = []), a[h.groupId] || (a[h.groupId] = h))
              : (o[f] = []));
        }
        for (var g in e.instances) {
          var v = e.instances[g],
            h = e.defs[v.defId],
            m = p[h.defId],
            y = v.range,
            E = !h.allDay && r ? c.computeVisibleDayRange(y, r) : y,
            S = d.intersectRanges(E, n);
          S &&
            ("inverse-background" === h.rendering
              ? h.groupId
                ? i[h.groupId].push(S)
                : o[v.defId].push(S)
              : ("background" === h.rendering ? s : u).push({
                  def: h,
                  ui: m,
                  instance: v,
                  range: S,
                  isStart: E.start && E.start.valueOf() === S.start.valueOf(),
                  isEnd: E.end && E.end.valueOf() === S.end.valueOf(),
                }));
        }
        for (var b in i)
          for (
            var D = i[b], w = d.invertRanges(D, n), T = 0, R = w;
            T < R.length;
            T++
          ) {
            var _ = R[T],
              h = a[b],
              m = p[h.defId];
            s.push({
              def: h,
              ui: m,
              instance: null,
              range: _,
              isStart: !1,
              isEnd: !1,
            });
          }
        for (var f in o)
          for (
            var D = o[f], w = d.invertRanges(D, n), C = 0, M = w;
            C < M.length;
            C++
          ) {
            var _ = M[C];
            s.push({
              def: e.defs[f],
              ui: p[f],
              instance: null,
              range: _,
              isStart: !1,
              isEnd: !1,
            });
          }
        return { bg: s, fg: u };
      }
      function i(e) {
        return (
          "background" === e.rendering || "inverse-background" === e.rendering
        );
      }
      function o(e, t, n) {
        e.hasPublicHandlers("eventRender") &&
          (t = t.filter(function (t) {
            var r = e.publiclyTrigger("eventRender", [
              {
                event: new p.default(
                  e.calendar,
                  t.eventRange.def,
                  t.eventRange.instance
                ),
                isMirror: n,
                isStart: t.isStart,
                isEnd: t.isEnd,
                el: t.el,
                view: e,
              },
            ]);
            return !1 !== r && (r && !0 !== r && (t.el = r), !0);
          }));
        for (var r = 0, i = t; r < i.length; r++) {
          var o = i[r];
          a(o.el, o);
        }
        return t;
      }
      function a(e, t) {
        e.fcSeg = t;
      }
      function s(e) {
        return e.fcSeg || null;
      }
      function l(e, t) {
        return h.mapHash(e, function (e) {
          return u(e, t);
        });
      }
      function u(e, t) {
        var n = [];
        return (
          t[""] && n.push(t[""]),
          t[e.defId] && n.push(t[e.defId]),
          n.push(e.ui),
          f.combineEventUis(n)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var d = n(8),
        c = n(2),
        p = n(16),
        f = n(25),
        h = n(12);
      (t.sliceEventStore = r),
        (t.hasBgRendering = i),
        (t.filterSegsViaEls = o),
        (t.getElSeg = s),
        (t.compileEventUis = l),
        (t.compileEventUi = u);
    },
    function (e, t) {
      function n(e) {
        return (e + "")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/'/g, "&#039;")
          .replace(/"/g, "&quot;")
          .replace(/\n/g, "<br />");
      }
      function r(e) {
        var t = [];
        for (var n in e) {
          var r = e[n];
          null != r && "" !== r && t.push(n + ":" + r);
        }
        return t.join(";");
      }
      function i(e) {
        var t = [];
        for (var r in e) {
          var i = e[r];
          null != i && t.push(r + '="' + n(i) + '"');
        }
        return t.join(" ");
      }
      function o(e) {
        return Array.isArray(e)
          ? e
          : "string" == typeof e
          ? e.split(/\s+/)
          : [];
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.htmlEscape = n),
        (t.cssToStr = r),
        (t.attrsToStr = i),
        (t.parseClassName = o);
    },
    function (e, t) {
      function n(e, t) {
        var r,
          i,
          o,
          a,
          s,
          l,
          u = {};
        if (t)
          for (r = 0; r < t.length; r++) {
            for (i = t[r], o = [], a = e.length - 1; a >= 0; a--)
              if ("object" == typeof (s = e[a][i]) && s) o.unshift(s);
              else if (void 0 !== s) {
                u[i] = s;
                break;
              }
            o.length && (u[i] = n(o));
          }
        for (r = e.length - 1; r >= 0; r--) {
          l = e[r];
          for (i in l) i in u || (u[i] = l[i]);
        }
        return u;
      }
      function r(e, t) {
        var n = {};
        for (var r in e) t(e[r], r) && (n[r] = e[r]);
        return n;
      }
      function i(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n;
      }
      function o(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          t[r[n]] = !0;
        }
        return t;
      }
      function a(e, t) {
        for (var n in e) if (e[n] !== t[n]) return !1;
        for (var n in t) if (!(n in e)) return !1;
        return !0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mergeProps = n),
        (t.filterHash = r),
        (t.mapHash = i),
        (t.arrayToHash = o),
        (t.isPropsEqual = a);
    },
    ,
    function (e, t, n) {
      function r(e, t, n, r) {
        for (var o = d(), a = 0, s = e; a < s.length; a++) {
          var l = s[a],
            u = h.parseEvent(l, t, n, r);
          u && i(u, o);
        }
        return o;
      }
      function i(e, t) {
        return (
          void 0 === t && (t = d()),
          (t.defs[e.def.defId] = e.def),
          e.instance && (t.instances[e.instance.instanceId] = e.instance),
          t
        );
      }
      function o(e, t, n) {
        var r = n.dateEnv,
          i = e.defs,
          o = e.instances;
        o = v.filterHash(o, function (e) {
          return !i[e.defId].recurringDef;
        });
        for (var a in i) {
          var s = i[a];
          if (s.recurringDef) {
            var l = g.expandRecurringRanges(s, t, n.dateEnv),
              u = s.recurringDef.duration;
            u ||
              (u = s.allDay
                ? n.defaultAllDayEventDuration
                : n.defaultTimedEventDuration);
            for (var d = 0, c = l; d < c.length; d++) {
              var p = c[d],
                f = h.createEventInstance(a, { start: p, end: r.add(p, u) });
              o[f.instanceId] = f;
            }
          }
        }
        return { defs: i, instances: o };
      }
      function a(e, t) {
        var n = e.instances[t];
        if (n) {
          var r = e.defs[n.defId],
            i = p(e, function (e) {
              return s(r, e);
            });
          return (i.defs[r.defId] = r), (i.instances[n.instanceId] = n), i;
        }
        return d();
      }
      function s(e, t) {
        return Boolean(e.groupId && e.groupId === t.groupId);
      }
      function l(e, t, n) {
        var r = n.opt("eventDataTransform"),
          i = t ? t.eventDataTransform : null;
        return i && (e = u(e, i)), r && (e = u(e, r)), e;
      }
      function u(e, t) {
        var n;
        if (t) {
          n = [];
          for (var r = 0, i = e; r < i.length; r++) {
            var o = i[r],
              a = t(o);
            a ? n.push(a) : null == a && n.push(o);
          }
        } else n = e;
        return n;
      }
      function d() {
        return { defs: {}, instances: {} };
      }
      function c(e, t) {
        return {
          defs: f.__assign({}, e.defs, t.defs),
          instances: f.__assign({}, e.instances, t.instances),
        };
      }
      function p(e, t) {
        var n = v.filterHash(e.defs, t),
          r = v.filterHash(e.instances, function (e) {
            return n[e.defId];
          });
        return { defs: n, instances: r };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = n(1),
        h = n(26),
        g = n(41),
        v = n(12);
      (t.parseEvents = r),
        (t.eventTupleToStore = i),
        (t.expandRecurring = o),
        (t.getRelevantEvents = a),
        (t.transformRawEvents = l),
        (t.createEmptyEventStore = d),
        (t.mergeEventStores = c),
        (t.filterEventStoreDefs = p);
    },
    function (e, t, n) {
      function r(e, t) {
        void 0 === t && (t = !1);
        var n = window.getComputedStyle(e),
          r = parseInt(n.borderLeftWidth, 10) || 0,
          i = parseInt(n.borderRightWidth, 10) || 0,
          o = parseInt(n.borderTopWidth, 10) || 0,
          a = parseInt(n.borderBottomWidth, 10) || 0,
          s = c.sanitizeScrollbarWidth(e.offsetWidth - e.clientWidth - r - i),
          l = c.sanitizeScrollbarWidth(e.offsetHeight - e.clientHeight - o - a),
          u = {
            borderLeft: r,
            borderRight: i,
            borderTop: o,
            borderBottom: a,
            scrollbarBottom: l,
            scrollbarLeft: 0,
            scrollbarRight: 0,
          };
        return (
          c.getIsRtlScrollbarOnLeft() && "rtl" === n.direction
            ? (u.scrollbarLeft = s)
            : (u.scrollbarRight = s),
          t &&
            ((u.paddingLeft = parseInt(n.paddingLeft, 10) || 0),
            (u.paddingRight = parseInt(n.paddingRight, 10) || 0),
            (u.paddingTop = parseInt(n.paddingTop, 10) || 0),
            (u.paddingBottom = parseInt(n.paddingBottom, 10) || 0)),
          u
        );
      }
      function i(e, t) {
        void 0 === t && (t = !1);
        var n = o(e),
          i = r(e, t),
          a = {
            left: n.left + i.borderLeft + i.scrollbarLeft,
            right: n.right - i.borderRight - i.scrollbarRight,
            top: n.top + i.borderTop,
            bottom: n.bottom - i.borderBottom - i.scrollbarBottom,
          };
        return (
          t &&
            ((a.left += i.paddingLeft),
            (a.right -= i.paddingRight),
            (a.top += i.paddingTop),
            (a.bottom -= i.paddingBottom)),
          a
        );
      }
      function o(e) {
        var t = e.getBoundingClientRect();
        return {
          left: t.left + window.pageXOffset,
          top: t.top + window.pageYOffset,
          right: t.right + window.pageXOffset,
          bottom: t.bottom + window.pageYOffset,
        };
      }
      function a() {
        return {
          left: window.pageXOffset,
          right: window.pageXOffset + document.documentElement.clientWidth,
          top: window.pageYOffset,
          bottom: window.pageYOffset + document.documentElement.clientHeight,
        };
      }
      function s(e) {
        var t = window.getComputedStyle(e);
        return (
          e.offsetHeight +
          parseInt(t.marginTop, 10) +
          parseInt(t.marginBottom, 10)
        );
      }
      function l(e) {
        for (var t = []; e instanceof HTMLElement; ) {
          var n = window.getComputedStyle(e);
          if ("fixed" === n.position) break;
          /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) &&
            t.push(e),
            (e = e.parentNode);
        }
        return t;
      }
      function u(e) {
        return l(e)
          .map(function (e) {
            return i(e);
          })
          .concat(a())
          .reduce(function (e, t) {
            return d.intersectRects(e, t) || t;
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var d = n(32),
        c = n(187);
      (t.computeEdges = r),
        (t.computeInnerRect = i),
        (t.computeRect = o),
        (t.computeHeightAndMargins = s),
        (t.getClippingParents = l),
        (t.computeClippingRect = u);
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(26),
        i = n(25),
        o = n(2),
        a = n(9),
        s = n(7),
        l = n(142),
        u = (function () {
          function e(e, t, n) {
            (this._calendar = e), (this._def = t), (this._instance = n || null);
          }
          return (
            (e.prototype.setProp = function (e, t) {
              var n, o;
              if (e in r.DATE_PROPS);
              else if (e in r.NON_DATE_PROPS)
                "function" == typeof r.NON_DATE_PROPS[e] &&
                  (t = r.NON_DATE_PROPS[e](t)),
                  this.mutate({ standardProps: ((n = {}), (n[e] = t), n) });
              else if (e in i.UNSCOPED_EVENT_UI_PROPS) {
                var a = void 0;
                "function" == typeof i.UNSCOPED_EVENT_UI_PROPS[e] &&
                  (t = i.UNSCOPED_EVENT_UI_PROPS[e](t)),
                  "color" === e
                    ? (a = { backgroundColor: t, borderColor: t })
                    : "editable" === e
                    ? (a = { startEditable: t, durationEditable: t })
                    : ((o = {}), (o[e] = t), (a = o)),
                  this.mutate({ standardProps: { ui: a } });
              }
            }),
            (e.prototype.setExtendedProp = function (e, t) {
              var n;
              this.mutate({ extendedProps: ((n = {}), (n[e] = t), n) });
            }),
            (e.prototype.setStart = function (e, t) {
              void 0 === t && (t = {});
              var n = this._calendar.dateEnv,
                r = n.createMarker(e);
              if (r && this._instance) {
                var i = this._instance.range,
                  s = o.diffDates(i.start, r, n, t.granularity),
                  l = null;
                if (t.maintainDuration) {
                  var u = o.diffDates(i.start, i.end, n, t.granularity),
                    d = o.diffDates(r, i.end, n, t.granularity);
                  l = a.subtractDurations(u, d);
                }
                this.mutate({ startDelta: s, endDelta: l });
              }
            }),
            (e.prototype.setEnd = function (e, t) {
              void 0 === t && (t = {});
              var n,
                r = this._calendar.dateEnv;
              if ((null == e || (n = r.createMarker(e))) && this._instance)
                if (n) {
                  var i = o.diffDates(
                    this._instance.range.end,
                    n,
                    r,
                    t.granularity
                  );
                  this.mutate({ endDelta: i });
                } else this.mutate({ standardProps: { hasEnd: !1 } });
            }),
            (e.prototype.setDates = function (e, t, n) {
              void 0 === n && (n = {});
              var r,
                i = this._calendar.dateEnv,
                a = { allDay: n.allDay },
                s = i.createMarker(e);
              if (
                s &&
                (null == t || (r = i.createMarker(t))) &&
                this._instance
              ) {
                var l = this._instance.range;
                !0 === n.allDay && (l = o.computeAlignedDayRange(l));
                var u = o.diffDates(l.start, s, i, n.granularity);
                if (r) {
                  var d = o.diffDates(l.end, r, i, n.granularity);
                  this.mutate({ startDelta: u, endDelta: d, standardProps: a });
                } else
                  (a.hasEnd = !1),
                    this.mutate({ startDelta: u, standardProps: a });
              }
            }),
            (e.prototype.moveStart = function (e) {
              var t = a.createDuration(e);
              t && this.mutate({ startDelta: t });
            }),
            (e.prototype.moveEnd = function (e) {
              var t = a.createDuration(e);
              t && this.mutate({ endDelta: t });
            }),
            (e.prototype.moveDates = function (e) {
              var t = a.createDuration(e);
              t && this.mutate({ startDelta: t, endDelta: t });
            }),
            (e.prototype.setAllDay = function (e, t) {
              void 0 === t && (t = {});
              var n = { allDay: e },
                r = t.maintainDuration;
              null == r && (r = this._calendar.opt("allDayMaintainDuration")),
                this._def.allDay !== e && (n.hasEnd = r),
                this.mutate({ standardProps: n });
            }),
            (e.prototype.formatRange = function (e) {
              var t = this._calendar.dateEnv,
                n = this._instance,
                r = s.createFormatter(
                  e,
                  this._calendar.opt("defaultRangeSeparator")
                );
              return this._def.hasEnd
                ? t.formatRange(n.range.start, n.range.end, r, {
                    forcedStartTzo: n.forcedStartTzo,
                    forcedEndTzo: n.forcedEndTzo,
                  })
                : t.format(n.range.start, r, { forcedTzo: n.forcedStartTzo });
            }),
            (e.prototype.mutate = function (e) {
              var t = this._def,
                n = this._instance;
              if (n) {
                this._calendar.dispatch({
                  type: "MUTATE_EVENTS",
                  instanceId: n.instanceId,
                  mutation: e,
                  fromApi: !0,
                });
                var r = this._calendar.state.eventStore;
                (this._def = r.defs[t.defId]),
                  (this._instance = r.instances[n.instanceId]);
              }
            }),
            (e.prototype.remove = function () {
              this._calendar.dispatch({
                type: "REMOVE_EVENT_DEF",
                defId: this._def.defId,
              });
            }),
            Object.defineProperty(e.prototype, "source", {
              get: function () {
                var e = this._def.sourceId;
                return e
                  ? new l.default(
                      this._calendar,
                      this._calendar.state.eventSources[e]
                    )
                  : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "start", {
              get: function () {
                return this._instance
                  ? this._calendar.dateEnv.toDate(this._instance.range.start)
                  : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "end", {
              get: function () {
                return this._instance && this._def.hasEnd
                  ? this._calendar.dateEnv.toDate(this._instance.range.end)
                  : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "id", {
              get: function () {
                return this._def.publicId;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "groupId", {
              get: function () {
                return this._def.groupId;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "allDay", {
              get: function () {
                return this._def.allDay;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "title", {
              get: function () {
                return this._def.title;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "url", {
              get: function () {
                return this._def.url;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "rendering", {
              get: function () {
                return this._def.rendering;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "startEditable", {
              get: function () {
                return this._def.ui.startEditable;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "durationEditable", {
              get: function () {
                return this._def.ui.durationEditable;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "constraint", {
              get: function () {
                return this._def.ui.constraints[0] || null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "overlap", {
              get: function () {
                return this._def.ui.overlap;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "allow", {
              get: function () {
                return this._def.ui.allows[0] || null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "backgroundColor", {
              get: function () {
                return this._def.ui.backgroundColor;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "borderColor", {
              get: function () {
                return this._def.ui.borderColor;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "textColor", {
              get: function () {
                return this._def.ui.textColor;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "classNames", {
              get: function () {
                return this._def.ui.classNames;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "extendedProps", {
              get: function () {
                return this._def.extendedProps;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })();
      t.default = u;
    },
    function (e, t, n) {
      function r(e) {
        var t, n;
        return function () {
          return (
            (t && o.isArraysEqual(t, arguments)) ||
              ((t = arguments), (n = e.apply(this, arguments))),
            n
          );
        };
      }
      function i(e, t) {
        var n = null;
        return function () {
          var r = e.apply(this, arguments);
          return (null === n || (n !== r && !t(n, r))) && (n = r), n;
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(57);
      (t.memoize = r), (t.memoizeOutput = i);
    },
    ,
    ,
    function (e, t, n) {
      function r(e, t, n) {
        function r() {
          if (s) {
            for (var e = 0, n = l; e < n.length; e++) {
              n[e].unrender();
            }
            t && t.apply(a, s), (s = null);
          }
        }
        function o() {
          (s && i.isArraysEqual(s, arguments)) ||
            (r(), (a = this), (s = arguments), e.apply(this, arguments));
        }
        void 0 === n && (n = []);
        var a,
          s,
          l = [];
        (o.dependents = l), (o.unrender = r);
        for (var u = 0, d = n; u < d.length; u++) {
          d[u].dependents.push(o);
        }
        return o;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(57);
      t.memoizeRendering = r;
    },
    function (e, t, n) {
      function r(e, t, n, r) {
        var i,
          o,
          s,
          l,
          u = e.dateEnv;
        return (
          t instanceof Date || "object" != typeof t
            ? (i = t)
            : ((i = t.date), (o = t.type), (s = t.forceOff)),
          (i = u.createMarker(i)),
          (l = { date: u.formatIso(i, { omitTime: !0 }), type: o || "day" }),
          "string" == typeof n && ((r = n), (n = null)),
          (n = n ? " " + a.attrsToStr(n) : ""),
          (r = r || ""),
          !s && e.opt("navLinks")
            ? "<a" +
              n +
              ' data-goto="' +
              a.htmlEscape(JSON.stringify(l)) +
              '">' +
              r +
              "</a>"
            : "<span" + n + ">" + r + "</span>"
        );
      }
      function i(e) {
        return e.opt("allDayHtml") || a.htmlEscape(e.opt("allDayText"));
      }
      function o(e, t, n, r) {
        var i,
          o,
          a = n.calendar,
          u = n.view,
          d = n.theme,
          c = n.dateEnv,
          p = [];
        return (
          l.rangeContainsMarker(t.activeRange, e)
            ? (p.push("fc-" + s.DAY_IDS[e.getUTCDay()]),
              u.opt("monthMode") &&
                c.getMonth(e) !== c.getMonth(t.currentRange.start) &&
                p.push("fc-other-month"),
              (i = s.startOfDay(a.getNow())),
              (o = s.addDays(i, 1)),
              e < i
                ? p.push("fc-past")
                : e >= o
                ? p.push("fc-future")
                : (p.push("fc-today"), !0 !== r && p.push(d.getClass("today"))))
            : p.push("fc-disabled-day"),
          p
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(11),
        s = n(4),
        l = n(8);
      (t.buildGotoAnchorHtml = r), (t.getAllDayHtml = i), (t.getDayClasses = o);
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(34),
        o = n(8),
        a = n(61),
        s = n(3),
        l = n(42),
        u = n(16),
        d = (function (e) {
          function t(t, n, r) {
            var i = e.call(this, t, r) || this;
            return (
              (i.needHitsDepth = 0),
              (i.el = n),
              i.isInteractable && a.default.registerComponent(i),
              i
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this),
                s.removeElement(this.el),
                this.isInteractable && a.default.unregisterComponent(this);
            }),
            (t.prototype.requestPrepareHits = function () {
              this.needHitsDepth++ || this.prepareHits();
            }),
            (t.prototype.requestReleaseHits = function () {
              --this.needHitsDepth || this.releaseHits();
            }),
            (t.prototype.prepareHits = function () {}),
            (t.prototype.releaseHits = function () {}),
            (t.prototype.queryHit = function (e, t) {
              return null;
            }),
            (t.prototype.isInteractionValid = function (e) {
              var t = this.calendar,
                n = this.props.dateProfile,
                r = e.mutatedEvents.instances;
              if (n)
                for (var i in r)
                  if (!o.rangeContainsRange(n.validRange, r[i].range))
                    return !1;
              return l.isInteractionValid(e, t);
            }),
            (t.prototype.isDateSelectionValid = function (e) {
              var t = this.props.dateProfile;
              return (
                !(t && !o.rangeContainsRange(t.validRange, e.range)) &&
                l.isDateSelectionValid(e, this.calendar)
              );
            }),
            (t.prototype.publiclyTrigger = function (e, t) {
              return this.calendar.publiclyTrigger(e, t);
            }),
            (t.prototype.publiclyTriggerAfterSizing = function (e, t) {
              return this.calendar.publiclyTriggerAfterSizing(e, t);
            }),
            (t.prototype.hasPublicHandlers = function (e) {
              return this.calendar.hasPublicHandlers(e);
            }),
            (t.prototype.triggerRenderedSegs = function (e, t) {
              var n = this.calendar;
              if (this.hasPublicHandlers("eventPositioned"))
                for (var r = 0, i = e; r < i.length; r++) {
                  var o = i[r];
                  this.publiclyTriggerAfterSizing("eventPositioned", [
                    {
                      event: new u.default(
                        n,
                        o.eventRange.def,
                        o.eventRange.instance
                      ),
                      isMirror: t,
                      isStart: o.isStart,
                      isEnd: o.isEnd,
                      el: o.el,
                      view: this,
                    },
                  ]);
                }
              n.state.loadingLevel ||
                (n.afterSizingTriggers._eventsPositioned = [null]);
            }),
            (t.prototype.triggerWillRemoveSegs = function (e, t) {
              for (var n = this.calendar, r = 0, i = e; r < i.length; r++) {
                var o = i[r];
                n.trigger("eventElRemove", o.el);
              }
              if (this.hasPublicHandlers("eventDestroy"))
                for (var a = 0, s = e; a < s.length; a++) {
                  var o = s[a];
                  this.publiclyTrigger("eventDestroy", [
                    {
                      event: new u.default(
                        n,
                        o.eventRange.def,
                        o.eventRange.instance
                      ),
                      isMirror: t,
                      el: o.el,
                      view: this,
                    },
                  ]);
                }
            }),
            (t.prototype.isValidSegDownEl = function (e) {
              return !(
                this.props.eventDrag ||
                this.props.eventResize ||
                s.elementClosest(e, ".fc-mirror") ||
                this.isInPopover(e)
              );
            }),
            (t.prototype.isValidDateDownEl = function (e) {
              var t = s.elementClosest(e, this.fgSegSelector);
              return (
                (!t || t.classList.contains("fc-mirror")) &&
                !s.elementClosest(e, ".fc-more") &&
                !s.elementClosest(e, "a[data-goto]") &&
                !this.isInPopover(e)
              );
            }),
            (t.prototype.isInPopover = function (e) {
              var t = s.elementClosest(e, ".fc-popover");
              return t && t !== this.el;
            }),
            t
          );
        })(i.default);
      (t.default = d),
        (d.prototype.isInteractable = !1),
        (d.prototype.useEventCenter = !0),
        (d.prototype.fgSegSelector = ".fc-event-container > *"),
        (d.prototype.bgSegSelector = ".fc-bgevent:not(.fc-nonbusiness)");
    },
    ,
    function (e, t, n) {
      function r(e) {
        e.preventDefault();
      }
      function i(e, t, n, r) {
        function i(e) {
          var t = s.elementClosest(e.target, n);
          t && r.call(t, e, t);
        }
        return (
          e.addEventListener(t, i),
          function () {
            e.removeEventListener(t, i);
          }
        );
      }
      function o(e, t, n, r) {
        var o;
        return i(e, "mouseover", t, function (e, t) {
          if (t !== o) {
            (o = t), n(e, t);
            var i = function (e) {
              (o = null), r(e, t), t.removeEventListener("mouseleave", i);
            };
            t.addEventListener("mouseleave", i);
          }
        });
      }
      function a(e, t) {
        var n = function (r) {
          t(r),
            l.forEach(function (t) {
              e.removeEventListener(t, n);
            });
        };
        l.forEach(function (t) {
          e.addEventListener(t, n);
        });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = n(3);
      (t.preventDefault = r),
        (t.listenBySelector = i),
        (t.listenToHoverBySelector = o);
      var l = [
        "webkitTransitionEnd",
        "otransitionend",
        "oTransitionEnd",
        "msTransitionEnd",
        "transitionend",
      ];
      t.whenTransitionDone = a;
    },
    function (e, t, n) {
      function r(e, n, r) {
        var i = u.refineProps(e, t.UNSCOPED_EVENT_UI_PROPS, {}, r),
          o = s.normalizeConstraint(i.constraint, n);
        return {
          startEditable: null != i.startEditable ? i.startEditable : i.editable,
          durationEditable:
            null != i.durationEditable ? i.durationEditable : i.editable,
          constraints: null != o ? [o] : [],
          overlap: i.overlap,
          allows: null != i.allow ? [i.allow] : [],
          backgroundColor: i.backgroundColor || i.color,
          borderColor: i.borderColor || i.color,
          textColor: i.textColor,
          classNames: i.classNames.concat(i.className),
        };
      }
      function i(e, n, i, o) {
        var a = {},
          s = {};
        for (var l in t.UNSCOPED_EVENT_UI_PROPS) {
          var d = e + u.capitaliseFirstLetter(l);
          (a[l] = n[d]), (s[d] = !0);
        }
        if (("event" === e && (a.editable = n.editable), o))
          for (var l in n) s[l] || (o[l] = n[l]);
        return r(a, i);
      }
      function o(e) {
        return e.reduce(a, d);
      }
      function a(e, t) {
        return {
          startEditable:
            null != t.startEditable ? t.startEditable : e.startEditable,
          durationEditable:
            null != t.durationEditable
              ? t.durationEditable
              : e.durationEditable,
          constraints: e.constraints.concat(t.constraints),
          overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
          allows: e.allows.concat(t.allows),
          backgroundColor: t.backgroundColor || e.backgroundColor,
          borderColor: t.borderColor || e.borderColor,
          textColor: t.textColor || e.textColor,
          classNames: e.classNames.concat(t.classNames),
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = n(42),
        l = n(11),
        u = n(2);
      (t.UNSCOPED_EVENT_UI_PROPS = {
        editable: Boolean,
        startEditable: Boolean,
        durationEditable: Boolean,
        constraint: null,
        overlap: null,
        allow: null,
        className: l.parseClassName,
        classNames: l.parseClassName,
        color: String,
        backgroundColor: String,
        borderColor: String,
        textColor: String,
      }),
        (t.processUnscopedUiProps = r),
        (t.processScopedUiProps = i);
      var d = {
        startEditable: null,
        durationEditable: null,
        constraints: [],
        overlap: null,
        allows: [],
        backgroundColor: "",
        borderColor: "",
        textColor: "",
        classNames: [],
      };
      t.combineEventUis = o;
    },
    function (e, t, n) {
      function r(e, t, n, r) {
        var s = u(t, n),
          l = {},
          d = p.parseRecurring(e, s, n.dateEnv, l);
        if (d) {
          var c = i(l, t, d.allDay, Boolean(d.duration), n);
          return (
            (c.recurringDef = {
              typeId: d.typeId,
              typeData: d.typeData,
              duration: d.duration,
            }),
            { def: c, instance: null }
          );
        }
        var f = {},
          h = a(e, s, n, f, r);
        if (h) {
          var c = i(f, t, h.allDay, h.hasEnd, n);
          return {
            def: c,
            instance: o(c.defId, h.range, h.forcedStartTzo, h.forcedEndTzo),
          };
        }
        return null;
      }
      function i(e, t, n, r, i) {
        var o = {},
          a = l(e, i, o);
        (a.defId = String(g++)),
          (a.sourceId = t),
          (a.allDay = n),
          (a.hasEnd = r);
        for (
          var s = 0, u = i.pluginSystem.hooks.eventDefParsers;
          s < u.length;
          s++
        ) {
          var d = u[s],
            c = {};
          d(a, o, c), (o = c);
        }
        return (
          (a.extendedProps = h.__assign(o, a.extendedProps || {})),
          Object.freeze(a.ui.classNames),
          Object.freeze(a.extendedProps),
          a
        );
      }
      function o(e, t, n, r) {
        return {
          instanceId: String(g++),
          defId: e,
          range: t,
          forcedStartTzo: null == n ? null : n,
          forcedEndTzo: null == r ? null : r,
        };
      }
      function a(e, t, n, r, i) {
        var o,
          a,
          l = s(e, r),
          u = l.allDay,
          d = null,
          p = !1,
          f = null;
        if ((o = n.dateEnv.createMarkerMeta(l.start))) d = o.marker;
        else if (!i) return null;
        return (
          null != l.end && (a = n.dateEnv.createMarkerMeta(l.end)),
          null == u &&
            (u =
              null != t
                ? t
                : (!o || o.isTimeUnspecified) && (!a || a.isTimeUnspecified)),
          u && d && (d = c.startOfDay(d)),
          a &&
            ((f = a.marker),
            u && (f = c.startOfDay(f)),
            d && f <= d && (f = null)),
          f
            ? (p = !0)
            : i ||
              ((p = n.opt("forceEventDuration") || !1),
              (f = n.dateEnv.add(
                d,
                u ? n.defaultAllDayEventDuration : n.defaultTimedEventDuration
              ))),
          {
            allDay: u,
            hasEnd: p,
            range: { start: d, end: f },
            forcedStartTzo: o ? o.forcedTzo : null,
            forcedEndTzo: a ? a.forcedTzo : null,
          }
        );
      }
      function s(e, n) {
        var r = d.refineProps(e, t.DATE_PROPS, {}, n);
        return (
          (r.start = null !== r.start ? r.start : r.date), delete r.date, r
        );
      }
      function l(e, n, r) {
        var i = {},
          o = d.refineProps(e, t.NON_DATE_PROPS, {}, i),
          a = f.processUnscopedUiProps(i, n, r);
        return (o.publicId = o.id), delete o.id, (o.ui = a), o;
      }
      function u(e, t) {
        var n = null;
        if (e) {
          n = t.state.eventSources[e].allDayDefault;
        }
        return null == n && (n = t.opt("allDayDefault")), n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var d = n(2),
        c = n(4),
        p = n(41),
        f = n(25),
        h = n(1);
      (t.NON_DATE_PROPS = {
        id: String,
        groupId: String,
        title: String,
        url: String,
        rendering: String,
        extendedProps: null,
      }),
        (t.DATE_PROPS = { start: null, date: null, end: null, allDay: null });
      var g = 0;
      (t.parseEvent = r), (t.parseEventDef = i), (t.createEventInstance = o);
    },
    function (e, t, n) {
      function r(e, t, n) {
        (e[t] || (e[t] = [])).push(n);
      }
      function i(e, t, n) {
        n
          ? e[t] &&
            (e[t] = e[t].filter(function (e) {
              return e !== n;
            }))
          : delete e[t];
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(1),
        a = n(2),
        s = n(147),
        l = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o.__extends(t, e),
            (t.prototype.on = function (e, t) {
              return r(this._handlers || (this._handlers = {}), e, t), this;
            }),
            (t.prototype.one = function (e, t) {
              return (
                r(this._oneHandlers || (this._oneHandlers = {}), e, t), this
              );
            }),
            (t.prototype.off = function (e, t) {
              return (
                this._handlers && i(this._handlers, e, t),
                this._oneHandlers && i(this._oneHandlers, e, t),
                this
              );
            }),
            (t.prototype.trigger = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              return this.triggerWith(e, this, t), this;
            }),
            (t.prototype.triggerWith = function (e, t, n) {
              return (
                this._handlers && a.applyAll(this._handlers[e], t, n),
                this._oneHandlers &&
                  (a.applyAll(this._oneHandlers[e], t, n),
                  delete this._oneHandlers[e]),
                this
              );
            }),
            (t.prototype.hasHandlers = function (e) {
              return (
                (this._handlers &&
                  this._handlers[e] &&
                  this._handlers[e].length) ||
                (this._oneHandlers &&
                  this._oneHandlers[e] &&
                  this._oneHandlers[e].length)
              );
            }),
            t
          );
        })(s.default);
      t.default = l;
    },
    function (e, t, n) {
      function r(e, t) {
        return (
          (!e && !t) ||
          (Boolean(e) === Boolean(t) &&
            a.isDateSpansEqual(e.dateSpan, t.dateSpan))
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(27),
        o = n(22),
        a = n(46),
        s = n(15),
        l = n(32),
        u = n(8),
        d = (function () {
          function e(e, t) {
            var n,
              r = this;
            (this.useSubjectCenter = !1),
              (this.requireInitial = !0),
              (this.initialHit = null),
              (this.movingHit = null),
              (this.finalHit = null),
              (this.handlePointerDown = function (e) {
                var t = r.dragging;
                (r.initialHit = null),
                  (r.movingHit = null),
                  (r.finalHit = null),
                  r.prepareHits(),
                  r.processFirstCoord(e),
                  r.initialHit || !r.requireInitial
                    ? (t.setIgnoreMove(!1), r.emitter.trigger("pointerdown", e))
                    : t.setIgnoreMove(!0);
              }),
              (this.handleDragStart = function (e) {
                r.emitter.trigger("dragstart", e), r.handleMove(e, !0);
              }),
              (this.handleDragMove = function (e) {
                r.emitter.trigger("dragmove", e), r.handleMove(e);
              }),
              (this.handlePointerUp = function (e) {
                r.releaseHits(), r.emitter.trigger("pointerup", e);
              }),
              (this.handleDragEnd = function (e) {
                r.movingHit && r.emitter.trigger("hitupdate", null, !0, e),
                  (r.finalHit = r.movingHit),
                  (r.movingHit = null),
                  r.emitter.trigger("dragend", e);
              }),
              t instanceof o.default
                ? (this.droppableHash = ((n = {}), (n[t.uid] = t), n))
                : (this.droppableHash = t),
              e.emitter.on("pointerdown", this.handlePointerDown),
              e.emitter.on("dragstart", this.handleDragStart),
              e.emitter.on("dragmove", this.handleDragMove),
              e.emitter.on("pointerup", this.handlePointerUp),
              e.emitter.on("dragend", this.handleDragEnd),
              (this.dragging = e),
              (this.emitter = new i.default());
          }
          return (
            (e.prototype.processFirstCoord = function (e) {
              var t,
                n = { left: e.pageX, top: e.pageY },
                r = n,
                i = e.subjectEl;
              i !== document &&
                ((t = s.computeRect(i)), (r = l.constrainPoint(r, t)));
              var o = (this.initialHit = this.queryHit(r.left, r.top));
              if (o) {
                if (this.useSubjectCenter && t) {
                  var a = l.intersectRects(t, o.rect);
                  a && (r = l.getRectCenter(a));
                }
                this.coordAdjust = l.diffPoints(r, n);
              } else this.coordAdjust = { left: 0, top: 0 };
            }),
            (e.prototype.handleMove = function (e, t) {
              var n = this.queryHit(
                e.pageX + this.coordAdjust.left,
                e.pageY + this.coordAdjust.top
              );
              (!t && r(this.movingHit, n)) ||
                ((this.movingHit = n),
                this.emitter.trigger("hitupdate", n, !1, e));
            }),
            (e.prototype.prepareHits = function () {
              var e = this.droppableHash;
              for (var t in e) e[t].requestPrepareHits();
            }),
            (e.prototype.releaseHits = function () {
              var e = this.droppableHash;
              for (var t in e) e[t].requestReleaseHits();
            }),
            (e.prototype.queryHit = function (e, t) {
              var n = this.droppableHash,
                r = null;
              for (var i in n) {
                var o = n[i],
                  a = o.queryHit(e, t);
                !a ||
                  (o.props.dateProfile &&
                    !u.rangeContainsRange(
                      o.props.dateProfile.activeRange,
                      a.dateSpan.range
                    )) ||
                  (r && !(a.layer > r.layer)) ||
                  (r = a);
              }
              return r;
            }),
            e
          );
        })();
      (t.default = d), (t.isHitsEqual = r);
    },
    function (e, t, n) {
      function r(e) {
        c.push(e);
      }
      function i(e) {
        return c[e];
      }
      function o(e) {
        return !c[e.sourceDefId].ignoreRange;
      }
      function a(e, t) {
        for (var n = c.length - 1; n >= 0; n--) {
          var r = c[n],
            i = r.parseMeta(e);
          if (i) return s("object" == typeof e ? e : {}, i, n, t);
        }
        return null;
      }
      function s(e, t, n, r) {
        var i = {},
          o = l.refineProps(e, d, {}, i),
          a = {},
          s = u.processUnscopedUiProps(i, r, a);
        return (
          (o.isFetching = !1),
          (o.latestFetchId = ""),
          (o.fetchRange = null),
          (o.publicId = String(e.id || "")),
          (o.sourceId = String(p++)),
          (o.sourceDefId = n),
          (o.meta = t),
          (o.ui = s),
          (o.extendedProps = a),
          o
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = n(2),
        u = n(25),
        d = {
          id: String,
          allDayDefault: Boolean,
          eventDataTransform: Function,
          success: Function,
          failure: Function,
        },
        c = [],
        p = 0;
      (t.registerEventSourceDef = r),
        (t.getEventSourceDef = i),
        (t.doesSourceNeedRange = o),
        (t.parseEventSource = a);
    },
    ,
    ,
    function (e, t) {
      function n(e, t) {
        return (
          e.left >= t.left &&
          e.left < t.right &&
          e.top >= t.top &&
          e.top < t.bottom
        );
      }
      function r(e, t) {
        var n = {
          left: Math.max(e.left, t.left),
          right: Math.min(e.right, t.right),
          top: Math.max(e.top, t.top),
          bottom: Math.min(e.bottom, t.bottom),
        };
        return n.left < n.right && n.top < n.bottom && n;
      }
      function i(e, t) {
        return {
          left: Math.min(Math.max(e.left, t.left), t.right),
          top: Math.min(Math.max(e.top, t.top), t.bottom),
        };
      }
      function o(e) {
        return { left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2 };
      }
      function a(e, t) {
        return { left: e.left - t.left, top: e.top - t.top };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pointInsideRect = n),
        (t.intersectRects = r),
        (t.constrainPoint = i),
        (t.getRectCenter = o),
        (t.diffPoints = a);
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = (function () {
          function e(e) {
            (this.calendarOptions = e), this.processIconOverride();
          }
          return (
            (e.prototype.processIconOverride = function () {
              this.iconOverrideOption &&
                this.setIconOverride(
                  this.calendarOptions[this.iconOverrideOption]
                );
            }),
            (e.prototype.setIconOverride = function (e) {
              var t, n;
              if ("object" == typeof e && e) {
                t = r.__assign({}, this.iconClasses);
                for (n in e) t[n] = this.applyIconOverridePrefix(e[n]);
                this.iconClasses = t;
              } else !1 === e && (this.iconClasses = {});
            }),
            (e.prototype.applyIconOverridePrefix = function (e) {
              var t = this.iconOverridePrefix;
              return t && 0 !== e.indexOf(t) && (e = t + e), e;
            }),
            (e.prototype.getClass = function (e) {
              return this.classes[e] || "";
            }),
            (e.prototype.getIconClass = function (e) {
              var t = this.iconClasses[e];
              return t ? this.baseIconClass + " " + t : "";
            }),
            (e.prototype.getCustomButtonIconClass = function (e) {
              var t;
              return this.iconOverrideCustomButtonOption &&
                (t = e[this.iconOverrideCustomButtonOption])
                ? this.baseIconClass + " " + this.applyIconOverridePrefix(t)
                : "";
            }),
            e
          );
        })();
      (t.default = i),
        (i.prototype.classes = {}),
        (i.prototype.iconClasses = {}),
        (i.prototype.baseIconClass = ""),
        (i.prototype.iconOverridePrefix = "");
    },
    function (e, t, n) {
      function r(e, t, n) {
        var r = {},
          i = !1;
        for (var o in t)
          o in e && (e[o] === t[o] || (n[o] && n[o](e[o], t[o])))
            ? (r[o] = e[o])
            : ((r[o] = t[o]), (i = !0));
        for (var o in e)
          if (!(o in t)) {
            i = !0;
            break;
          }
        return { anyChanges: i, comboProps: r };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1),
        o = 0,
        a = (function () {
          function e(e, t) {
            t && (e.view = this),
              (this.uid = String(o++)),
              (this.context = e),
              (this.dateEnv = e.dateEnv),
              (this.theme = e.theme),
              (this.view = e.view),
              (this.calendar = e.calendar),
              (this.isRtl = "rtl" === this.opt("dir"));
          }
          return (
            (e.addEqualityFuncs = function (e) {
              this.prototype.equalityFuncs = i.__assign(
                {},
                this.prototype.equalityFuncs,
                e
              );
            }),
            (e.prototype.opt = function (e) {
              return this.context.options[e];
            }),
            (e.prototype.receiveProps = function (e) {
              var t = r(this.props || {}, e, this.equalityFuncs),
                n = t.anyChanges,
                i = t.comboProps;
              (this.props = i), n && this.render(i);
            }),
            (e.prototype.render = function (e) {}),
            (e.prototype.destroy = function () {}),
            e
          );
        })();
      (t.default = a), (a.prototype.equalityFuncs = {});
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(45),
        o = n(2),
        a = n(191),
        s = n(62),
        l = n(192),
        u = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            (n.delay = null),
              (n.minDistance = 0),
              (n.touchScrollAllowed = !0),
              (n.mirrorNeedsRevert = !1),
              (n.isInteracting = !1),
              (n.isDragging = !1),
              (n.isDelayEnded = !1),
              (n.isDistanceSurpassed = !1),
              (n.delayTimeoutId = null),
              (n.onPointerDown = function (e) {
                n.isDragging ||
                  ((n.isInteracting = !0),
                  (n.isDelayEnded = !1),
                  (n.isDistanceSurpassed = !1),
                  o.preventSelection(document.body),
                  o.preventContextMenu(document.body),
                  e.isTouch || e.origEvent.preventDefault(),
                  n.emitter.trigger("pointerdown", e),
                  n.pointer.shouldIgnoreMove ||
                    ((n.origX = e.pageX),
                    (n.origY = e.pageY),
                    n.mirror.setIsVisible(!1),
                    n.mirror.start(e.subjectEl, e.pageX, e.pageY),
                    n.startDelay(e),
                    n.minDistance || n.handleDistanceSurpassed(e)));
              }),
              (n.onPointerMove = function (e) {
                if (n.isInteracting) {
                  if (
                    (n.emitter.trigger("pointermove", e),
                    !n.isDistanceSurpassed)
                  ) {
                    var t = e.pageX - n.origX,
                      r = e.pageY - n.origY,
                      i = n.minDistance,
                      o = void 0;
                    (o = t * t + r * r),
                      o >= i * i && n.handleDistanceSurpassed(e);
                  }
                  n.isDragging &&
                    ("scroll" !== e.origEvent.type &&
                      (n.mirror.handleMove(e.pageX, e.pageY),
                      n.autoScroller.handleMove(e.pageX, e.pageY)),
                    n.emitter.trigger("dragmove", e));
                }
              }),
              (n.onPointerUp = function (e) {
                n.isInteracting &&
                  ((n.isInteracting = !1),
                  o.allowSelection(document.body),
                  o.allowContextMenu(document.body),
                  n.emitter.trigger("pointerup", e),
                  n.isDragging && (n.autoScroller.stop(), n.tryStopDrag(e)),
                  n.delayTimeoutId &&
                    (clearTimeout(n.delayTimeoutId),
                    (n.delayTimeoutId = null)));
              });
            var r = (n.pointer = new i.default(t));
            return (
              r.emitter.on("pointerdown", n.onPointerDown),
              r.emitter.on("pointermove", n.onPointerMove),
              r.emitter.on("pointerup", n.onPointerUp),
              (n.mirror = new a.default()),
              (n.autoScroller = new l.default()),
              n
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.destroy = function () {
              this.pointer.destroy();
            }),
            (t.prototype.startDelay = function (e) {
              var t = this;
              "number" == typeof this.delay
                ? (this.delayTimeoutId = setTimeout(function () {
                    (t.delayTimeoutId = null), t.handleDelayEnd(e);
                  }, this.delay))
                : this.handleDelayEnd(e);
            }),
            (t.prototype.handleDelayEnd = function (e) {
              (this.isDelayEnded = !0), this.tryStartDrag(e);
            }),
            (t.prototype.handleDistanceSurpassed = function (e) {
              (this.isDistanceSurpassed = !0), this.tryStartDrag(e);
            }),
            (t.prototype.tryStartDrag = function (e) {
              this.isDelayEnded &&
                this.isDistanceSurpassed &&
                ((this.pointer.wasTouchScroll && !this.touchScrollAllowed) ||
                  ((this.isDragging = !0),
                  (this.mirrorNeedsRevert = !1),
                  this.autoScroller.start(e.pageX, e.pageY),
                  this.emitter.trigger("dragstart", e),
                  !1 === this.touchScrollAllowed &&
                    this.pointer.cancelTouchScroll()));
            }),
            (t.prototype.tryStopDrag = function (e) {
              this.mirror.stop(
                this.mirrorNeedsRevert,
                this.stopDrag.bind(this, e)
              );
            }),
            (t.prototype.stopDrag = function (e) {
              (this.isDragging = !1), this.emitter.trigger("dragend", e);
            }),
            (t.prototype.setIgnoreMove = function (e) {
              this.pointer.shouldIgnoreMove = e;
            }),
            (t.prototype.setMirrorIsVisible = function (e) {
              this.mirror.setIsVisible(e);
            }),
            (t.prototype.setMirrorNeedsRevert = function (e) {
              this.mirrorNeedsRevert = e;
            }),
            t
          );
        })(s.default);
      t.default = u;
    },
    function (e, t, n) {
      function r(e) {
        return i.mergeProps(e, o);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(12);
      (t.globalDefaults = {
        defaultRangeSeparator: " - ",
        titleRangeSeparator: " – ",
        cmdFormatter: null,
        defaultTimedEventDuration: "01:00:00",
        defaultAllDayEventDuration: { day: 1 },
        forceEventDuration: !1,
        nextDayThreshold: "00:00:00",
        columnHeader: !0,
        defaultView: "month",
        aspectRatio: 1.35,
        header: { left: "title", center: "", right: "today prev,next" },
        weekends: !0,
        weekNumbers: !1,
        weekNumberCalculation: "local",
        editable: !1,
        scrollTime: "06:00:00",
        minTime: "00:00:00",
        maxTime: "24:00:00",
        showNonCurrentDates: !0,
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timeZoneParam: "timeZone",
        timeZone: "local",
        timeZoneImpl: null,
        locale: "en",
        agendaEventMinHeight: 0,
        theme: !1,
        dragRevertDuration: 500,
        dragScroll: !0,
        allDayMaintainDuration: !1,
        unselectAuto: !0,
        dropAccept: "*",
        eventOrder: "start,-duration,allDay,title",
        eventLimit: !1,
        eventLimitClick: "popover",
        dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
        handleWindowResize: !0,
        windowResizeDelay: 100,
        longPressDelay: 1e3,
        eventDragMinDistance: 5,
      }),
        (t.rtlDefaults = {
          header: { left: "next,prev today", center: "", right: "title" },
          buttonIcons: {
            prev: "right-single-arrow",
            next: "left-single-arrow",
            prevYear: "right-double-arrow",
            nextYear: "left-double-arrow",
          },
          themeButtonIcons: {
            prev: "circle-triangle-e",
            next: "circle-triangle-w",
            nextYear: "seek-prev",
            prevYear: "seek-next",
          },
        });
      var o = [
        "header",
        "footer",
        "buttonText",
        "buttonIcons",
        "themeButtonIcons",
      ];
      t.mergeOptions = r;
    },
    function (e, t, n) {
      function r(e) {
        return {
          id: String(a++),
          deps: e.deps || [],
          reducers: e.reducers || [],
          eventDefParsers: e.eventDefParsers || [],
          eventDragMutationMassagers: e.eventDragMutationMassagers || [],
          eventDefMutationAppliers: e.eventDefMutationAppliers || [],
          dateSelectionTransformers: e.dateSelectionTransformers || [],
          datePointTransforms: e.datePointTransforms || [],
          dateSpanTransforms: e.dateSpanTransforms || [],
          viewConfigs: e.viewConfigs || {},
          viewSpecTransformers: e.viewSpecTransformers || [],
          viewPropsTransformers: e.viewPropsTransformers || [],
          isPropsValid: e.isPropsValid || null,
          externalDefTransforms: e.externalDefTransforms || [],
          eventResizeJoinTransforms: e.eventResizeJoinTransforms || [],
          viewContainerModifiers: e.viewContainerModifiers || [],
          eventDropTransformers: e.eventDropTransformers || [],
        };
      }
      function i(e, t) {
        return {
          reducers: e.reducers.concat(t.reducers),
          eventDefParsers: e.eventDefParsers.concat(t.eventDefParsers),
          eventDragMutationMassagers: e.eventDragMutationMassagers.concat(
            t.eventDragMutationMassagers
          ),
          eventDefMutationAppliers: e.eventDefMutationAppliers.concat(
            t.eventDefMutationAppliers
          ),
          dateSelectionTransformers: e.dateSelectionTransformers.concat(
            t.dateSelectionTransformers
          ),
          datePointTransforms: e.datePointTransforms.concat(
            t.datePointTransforms
          ),
          dateSpanTransforms: e.dateSpanTransforms.concat(t.dateSpanTransforms),
          viewConfigs: o.__assign({}, e.viewConfigs, t.viewConfigs),
          viewSpecTransformers: e.viewSpecTransformers.concat(
            t.viewSpecTransformers
          ),
          viewPropsTransformers: e.viewPropsTransformers.concat(
            t.viewPropsTransformers
          ),
          isPropsValid: t.isPropsValid || e.isPropsValid,
          externalDefTransforms: e.externalDefTransforms.concat(
            t.externalDefTransforms
          ),
          eventResizeJoinTransforms: e.eventResizeJoinTransforms.concat(
            t.eventResizeJoinTransforms
          ),
          viewContainerModifiers: e.viewContainerModifiers.concat(
            t.viewContainerModifiers
          ),
          eventDropTransformers: e.eventDropTransformers.concat(
            t.eventDropTransformers
          ),
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(1),
        a = 0;
      t.createPlugin = r;
      var s = (function () {
        function e() {
          (this.hooks = {
            reducers: [],
            eventDefParsers: [],
            eventDragMutationMassagers: [],
            eventDefMutationAppliers: [],
            dateSelectionTransformers: [],
            datePointTransforms: [],
            dateSpanTransforms: [],
            viewConfigs: {},
            viewSpecTransformers: [],
            viewPropsTransformers: [],
            isPropsValid: null,
            externalDefTransforms: [],
            eventResizeJoinTransforms: [],
            viewContainerModifiers: [],
            eventDropTransformers: [],
          }),
            (this.addedHash = {});
        }
        return (
          (e.prototype.add = function (e) {
            if (!this.addedHash[e.id]) {
              this.addedHash[e.id] = !0;
              for (var t = 0, n = e.deps; t < n.length; t++) {
                var r = n[t];
                this.add(r);
              }
              this.hooks = i(this.hooks, e);
            }
          }),
          e
        );
      })();
      t.PluginSystem = s;
    },
    ,
    ,
    ,
    function (e, t, n) {
      function r(e) {
        s.push(e);
      }
      function i(e, t, n, r) {
        for (var i = 0; i < s.length; i++) {
          var o = s[i].parse(e, t, r, n);
          if (o)
            return {
              allDay: o.allDay,
              duration: o.duration,
              typeData: o.typeData,
              typeId: i,
            };
        }
        return null;
      }
      function o(e, t, n) {
        var r = s[e.recurringDef.typeId],
          i = r.expand(e.recurringDef.typeData, e, t, n);
        return e.allDay && (i = i.map(a.startOfDay)), i;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(4),
        s = [];
      (t.registerRecurringType = r),
        (t.parseRecurring = i),
        (t.expandRecurringRanges = o);
    },
    function (e, t, n) {
      function r(e, t) {
        return o({ eventDrag: e }, t);
      }
      function i(e, t) {
        return o({ dateSelection: e }, t);
      }
      function o(e, t) {
        var n = t.view,
          r = h.__assign(
            {
              businessHours: n
                ? n.props.businessHours
                : g.createEmptyEventStore(),
              dateSelection: "",
              eventStore: t.state.eventStore,
              eventUiBases: t.eventUiBases,
              eventSelection: "",
              eventDrag: null,
              eventResize: null,
            },
            e
          );
        return (t.pluginSystem.hooks.isPropsValid || a)(r, t);
      }
      function a(e, t, n, r) {
        return (
          void 0 === n && (n = {}),
          !(e.eventDrag && !s(e, t, n, r)) &&
            !(e.dateSelection && !l(e, t, n, r))
        );
      }
      function s(e, t, n, r) {
        var i = e.eventDrag,
          o = i.mutatedEvents,
          a = o.defs,
          s = o.instances,
          l = y.compileEventUis(
            a,
            i.isEvent ? e.eventUiBases : { "": t.selectionConfig }
          );
        r && (l = S.mapHash(l, r));
        var d = E.excludeInstances(e.eventStore, i.affectedEvents.instances),
          c = d.defs,
          p = d.instances,
          f = y.compileEventUis(c, e.eventUiBases);
        for (var g in s) {
          var b = s[g],
            D = b.range,
            w = l[b.defId],
            T = a[b.defId];
          if (!u(w.constraints, D, d, e.businessHours, t)) return !1;
          var R = t.opt("eventOverlap");
          "function" != typeof R && (R = null);
          for (var _ in p) {
            var C = p[_];
            if (v.rangesIntersect(D, C.range)) {
              if (!1 === f[C.defId].overlap && i.isEvent) return !1;
              if (!1 === w.overlap) return !1;
              if (
                R &&
                !R(new m.default(t, c[C.defId], C), new m.default(t, T, b))
              )
                return !1;
            }
          }
          for (var M = 0, P = w.allows; M < P.length; M++) {
            var I = P[M],
              O = e.eventStore.defs[T.defId],
              H = e.eventStore.instances[g],
              k = h.__assign({}, n, { range: b.range, allDay: T.allDay });
            if (!I(t.buildDateSpanApi(k), new m.default(t, O, H))) return !1;
          }
        }
        return !0;
      }
      function l(e, t, n, r) {
        var i = e.eventStore,
          o = i.defs,
          a = i.instances,
          s = e.dateSelection,
          l = s.range,
          d = t.selectionConfig;
        if ((r && (d = r(d)), !u(d.constraints, l, i, e.businessHours, t)))
          return !1;
        var c = t.opt("selectOverlap");
        "function" != typeof c && (c = null);
        for (var p in a) {
          var f = a[p];
          if (v.rangesIntersect(l, f.range)) {
            if (!1 === d.overlap) return !1;
            if (c && !c(new m.default(t, o[f.defId], f))) return !1;
          }
        }
        for (var g = 0, y = d.allows; g < y.length; g++) {
          var E = y[g],
            S = h.__assign({}, n, s);
          if (!E(t.buildDateSpanApi(S), null)) return !1;
        }
        return !0;
      }
      function u(e, t, n, r, i) {
        for (var o = 0, a = e; o < a.length; o++) {
          if (!p(d(a[o], t, n, r, i), t)) return !1;
        }
        return !0;
      }
      function d(e, t, n, r, i) {
        return "businessHours" === e
          ? c(g.expandRecurring(r, t, i))
          : "string" == typeof e
          ? c(
              g.filterEventStoreDefs(n, function (t) {
                return t.groupId === e;
              })
            )
          : "object" == typeof e && e
          ? c(g.expandRecurring(e, t, i))
          : [];
      }
      function c(e) {
        var t = e.instances,
          n = [];
        for (var r in t) n.push(t[r].range);
        return n;
      }
      function p(e, t) {
        for (var n = 0, r = e; n < r.length; n++) {
          var i = r[n];
          if (v.rangeContainsRange(i, t)) return !0;
        }
        return !1;
      }
      function f(e, t) {
        return Array.isArray(e)
          ? g.parseEvents(e, "", t, !0)
          : "object" == typeof e && e
          ? g.parseEvents([e], "", t, !0)
          : null != e
          ? String(e)
          : null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var h = n(1),
        g = n(14),
        v = n(8),
        m = n(16),
        y = n(10),
        E = n(143),
        S = n(12);
      (t.isInteractionValid = r),
        (t.isDateSelectionValid = i),
        (t.isPropsValid = a),
        (t.normalizeConstraint = f);
    },
    function (e, t, n) {
      function r(e, t, n, r) {
        var o = p.compileEventUis(e.defs, t),
          s = u.createEmptyEventStore();
        for (var l in e.defs) {
          var d = e.defs[l];
          s.defs[l] = i(
            d,
            o[l],
            n,
            r.pluginSystem.hooks.eventDefMutationAppliers,
            r
          );
        }
        for (var c in e.instances) {
          var f = e.instances[c],
            d = s.defs[f.defId];
          s.instances[c] = a(f, d, o[f.defId], n, r);
        }
        return s;
      }
      function i(e, t, n, r, i) {
        var a = n.standardProps || {};
        null == a.hasEnd &&
          o(
            t.startEditable ? n.startDelta : null,
            t.durationEditable ? n.endDelta : null
          ) &&
          (a.hasEnd = !0);
        var l = s.__assign({}, e, a, { ui: s.__assign({}, e.ui, a.ui) });
        n.extendedProps &&
          (l.extendedProps = s.__assign({}, l.extendedProps, n.extendedProps));
        for (var u = 0, d = r; u < d.length; u++) {
          (0, d[u])(l, n, i);
        }
        return !l.hasEnd && i.opt("forceEventDuration") && (l.hasEnd = !0), l;
      }
      function o(e, t) {
        return (
          e && !l.asRoughMs(e) && (e = null),
          t && !l.asRoughMs(t) && (t = null),
          !(!e && !t) && (Boolean(e) !== Boolean(t) || !l.durationsEqual(e, t))
        );
      }
      function a(e, t, n, r, i) {
        var o = i.dateEnv,
          a = r.standardProps && !0 === r.standardProps.allDay,
          l = r.standardProps && !1 === r.standardProps.hasEnd,
          u = s.__assign({}, e);
        return (
          a && (u.range = d.computeAlignedDayRange(u.range)),
          r.startDelta &&
            n.startEditable &&
            (u.range = {
              start: o.add(u.range.start, r.startDelta),
              end: u.range.end,
            }),
          l
            ? (u.range = {
                start: u.range.start,
                end: i.getDefaultEventEnd(t.allDay, u.range.start),
              })
            : r.endDelta &&
              n.durationEditable &&
              (u.range = {
                start: u.range.start,
                end: o.add(u.range.end, r.endDelta),
              }),
          t.allDay &&
            (u.range = {
              start: c.startOfDay(u.range.start),
              end: c.startOfDay(u.range.end),
            }),
          u.range.end < u.range.start &&
            (u.range.end = i.getDefaultEventEnd(t.allDay, u.range.start)),
          u
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = n(1),
        l = n(9),
        u = n(14),
        d = n(2),
        c = n(4),
        p = n(10);
      t.applyMutationToEventStore = r;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(15),
        o = n(3),
        a = n(150),
        s = (function (e) {
          function t(t, n) {
            var r =
              e.call(
                this,
                o.createElement("div", { className: "fc-scroller" })
              ) || this;
            return (r.overflowX = t), (r.overflowY = n), r.applyOverflow(), r;
          }
          return (
            r.__extends(t, e),
            (t.prototype.clear = function () {
              this.setHeight("auto"), this.applyOverflow();
            }),
            (t.prototype.destroy = function () {
              o.removeElement(this.el);
            }),
            (t.prototype.applyOverflow = function () {
              o.applyStyle(this.el, {
                overflowX: this.overflowX,
                overflowY: this.overflowY,
              });
            }),
            (t.prototype.lockOverflow = function (e) {
              var t = this.overflowX,
                n = this.overflowY;
              (e = e || this.getScrollbarWidths()),
                "auto" === t &&
                  (t =
                    e.bottom || this.canScrollHorizontally()
                      ? "scroll"
                      : "hidden"),
                "auto" === n &&
                  (n =
                    e.left || e.right || this.canScrollVertically()
                      ? "scroll"
                      : "hidden"),
                o.applyStyle(this.el, { overflowX: t, overflowY: n });
            }),
            (t.prototype.setHeight = function (e) {
              o.applyStyleProp(this.el, "height", e);
            }),
            (t.prototype.getScrollbarWidths = function () {
              var e = i.computeEdges(this.el);
              return {
                left: e.scrollbarLeft,
                right: e.scrollbarRight,
                bottom: e.scrollbarBottom,
              };
            }),
            t
          );
        })(a.ElementScrollController);
      t.default = s;
    },
    function (e, t, n) {
      function r(e, t) {
        return {
          origEvent: e,
          isTouch: !1,
          subjectEl: t,
          pageX: e.pageX,
          pageY: e.pageY,
        };
      }
      function i(e, t) {
        var n,
          r,
          i = e.touches;
        return (
          i && i.length
            ? ((n = i[0].pageX), (r = i[0].pageY))
            : ((n = e.pageX), (r = e.pageY)),
          { origEvent: e, isTouch: !0, subjectEl: t, pageX: n, pageY: r }
        );
      }
      function o(e) {
        return 0 === e.button && !e.ctrlKey;
      }
      function a() {
        f++,
          setTimeout(function () {
            f--;
          }, d.touchMouseIgnoreWait);
      }
      function s() {
        h++ || window.addEventListener("touchmove", u, { passive: !1 });
      }
      function l() {
        --h || window.removeEventListener("touchmove", u, { passive: !1 });
      }
      function u(e) {
        g && e.preventDefault();
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var d = n(56),
        c = n(3),
        p = n(27);
      d.touchMouseIgnoreWait = 500;
      var f = 0,
        h = 0,
        g = !1,
        v = (function () {
          function e(e) {
            var t = this;
            (this.subjectEl = null),
              (this.downEl = null),
              (this.selector = ""),
              (this.handleSelector = ""),
              (this.shouldIgnoreMove = !1),
              (this.shouldWatchScroll = !0),
              (this.isDragging = !1),
              (this.isTouchDragging = !1),
              (this.wasTouchScroll = !1),
              (this.handleMouseDown = function (e) {
                if (!t.shouldIgnoreMouse() && o(e) && t.tryStart(e)) {
                  var n = r(e, t.subjectEl);
                  t.emitter.trigger("pointerdown", n),
                    t.initScrollWatch(n),
                    t.shouldIgnoreMove ||
                      document.addEventListener("mousemove", t.handleMouseMove),
                    document.addEventListener("mouseup", t.handleMouseUp);
                }
              }),
              (this.handleMouseMove = function (e) {
                var n = r(e, t.subjectEl);
                t.recordCoords(n), t.emitter.trigger("pointermove", n);
              }),
              (this.handleMouseUp = function (e) {
                document.removeEventListener("mousemove", t.handleMouseMove),
                  document.removeEventListener("mouseup", t.handleMouseUp),
                  t.emitter.trigger("pointerup", r(e, t.subjectEl)),
                  t.cleanup();
              }),
              (this.handleTouchStart = function (e) {
                if (t.tryStart(e)) {
                  t.isTouchDragging = !0;
                  var n = i(e, t.subjectEl);
                  t.emitter.trigger("pointerdown", n), t.initScrollWatch(n);
                  var r = e.target;
                  t.shouldIgnoreMove ||
                    r.addEventListener("touchmove", t.handleTouchMove),
                    r.addEventListener("touchend", t.handleTouchEnd),
                    r.addEventListener("touchcancel", t.handleTouchEnd),
                    window.addEventListener("scroll", t.handleTouchScroll, !0);
                }
              }),
              (this.handleTouchMove = function (e) {
                var n = i(e, t.subjectEl);
                t.recordCoords(n), t.emitter.trigger("pointermove", n);
              }),
              (this.handleTouchEnd = function (e) {
                if (t.isDragging) {
                  var n = e.target;
                  n.removeEventListener("touchmove", t.handleTouchMove),
                    n.removeEventListener("touchend", t.handleTouchEnd),
                    n.removeEventListener("touchcancel", t.handleTouchEnd),
                    window.removeEventListener(
                      "scroll",
                      t.handleTouchScroll,
                      !0
                    ),
                    t.emitter.trigger("pointerup", i(e, t.subjectEl)),
                    t.cleanup(),
                    (t.isTouchDragging = !1),
                    a();
                }
              }),
              (this.handleTouchScroll = function () {
                t.wasTouchScroll = !0;
              }),
              (this.handleScroll = function (e) {
                t.shouldIgnoreMove ||
                  t.emitter.trigger("pointermove", {
                    origEvent: e,
                    isTouch: t.isTouchDragging,
                    subjectEl: t.subjectEl,
                    pageX: window.pageXOffset - t.prevScrollX + t.prevPageX,
                    pageY: window.pageYOffset - t.prevScrollY + t.prevPageY,
                  });
              }),
              (this.containerEl = e),
              (this.emitter = new p.default()),
              e.addEventListener("mousedown", this.handleMouseDown),
              e.addEventListener("touchstart", this.handleTouchStart, {
                passive: !0,
              }),
              s();
          }
          return (
            (e.prototype.destroy = function () {
              this.containerEl.removeEventListener(
                "mousedown",
                this.handleMouseDown
              ),
                this.containerEl.removeEventListener(
                  "touchstart",
                  this.handleTouchStart,
                  { passive: !0 }
                ),
                l();
            }),
            (e.prototype.tryStart = function (e) {
              var t = this.querySubjectEl(e),
                n = e.target;
              return (
                !(
                  !t ||
                  (this.handleSelector &&
                    !c.elementClosest(n, this.handleSelector))
                ) &&
                ((this.subjectEl = t),
                (this.downEl = n),
                (this.isDragging = !0),
                (this.wasTouchScroll = !1),
                !0)
              );
            }),
            (e.prototype.cleanup = function () {
              (g = !1),
                (this.isDragging = !1),
                (this.subjectEl = null),
                (this.downEl = null),
                this.destroyScrollWatch();
            }),
            (e.prototype.querySubjectEl = function (e) {
              return this.selector
                ? c.elementClosest(e.target, this.selector)
                : this.containerEl;
            }),
            (e.prototype.shouldIgnoreMouse = function () {
              return f || this.isTouchDragging;
            }),
            (e.prototype.cancelTouchScroll = function () {
              this.isDragging && (g = !0);
            }),
            (e.prototype.initScrollWatch = function (e) {
              this.shouldWatchScroll &&
                (this.recordCoords(e),
                window.addEventListener("scroll", this.handleScroll, !0));
            }),
            (e.prototype.recordCoords = function (e) {
              this.shouldWatchScroll &&
                ((this.prevPageX = e.pageX),
                (this.prevPageY = e.pageY),
                (this.prevScrollX = window.pageXOffset),
                (this.prevScrollY = window.pageYOffset));
            }),
            (e.prototype.destroyScrollWatch = function () {
              this.shouldWatchScroll &&
                window.removeEventListener("scroll", this.handleScroll, !0);
            }),
            e
          );
        })();
      t.default = v;
    },
    function (e, t, n) {
      function r(e, t, n) {
        var r = i(e, t),
          o = r.range;
        if (!o.start) return null;
        if (!o.end) {
          if (null == n) return null;
          o.end = t.add(o.start, n);
        }
        return r;
      }
      function i(e, t) {
        var n = {},
          r = c.refineProps(e, h, {}, n),
          i = r.start ? t.createMarkerMeta(r.start) : null,
          o = r.end ? t.createMarkerMeta(r.end) : null,
          a = r.allDay;
        return (
          null == a &&
            (a = i && i.isTimeUnspecified && (!o || o.isTimeUnspecified)),
          (n.range = { start: i ? i.marker : null, end: o ? o.marker : null }),
          (n.allDay = a),
          n
        );
      }
      function o(e, t) {
        return (
          d.rangesEqual(e.range, t.range) && e.allDay === t.allDay && a(e, t)
        );
      }
      function a(e, t) {
        for (var n in t)
          if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
        for (var n in e) if (!(n in t)) return !1;
        return !0;
      }
      function s(e, t) {
        return {
          start: t.toDate(e.range.start),
          end: t.toDate(e.range.end),
          startStr: t.formatIso(e.range.start, { omitTime: e.allDay }),
          endStr: t.formatIso(e.range.end, { omitTime: e.allDay }),
          allDay: e.allDay,
        };
      }
      function l(e, t) {
        return {
          date: t.toDate(e.range.start),
          dateStr: t.formatIso(e.range.start, { omitTime: e.allDay }),
          allDay: e.allDay,
        };
      }
      function u(e, t, n) {
        var r = p.parseEventDef({ editable: !1 }, "", e.allDay, !0, n);
        return {
          def: r,
          ui: f.compileEventUi(r, t),
          instance: p.createEventInstance(r.defId, e.range),
          range: e.range,
          isStart: !0,
          isEnd: !0,
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var d = n(8),
        c = n(2),
        p = n(26),
        f = n(10),
        h = { start: null, end: null, allDay: Boolean };
      (t.parseDateSpan = r),
        (t.parseOpenDateSpan = i),
        (t.isDateSpansEqual = o),
        (t.buildDateSpanApi = s),
        (t.buildDatePointApi = l),
        (t.fabricateEventRange = u);
    },
    function (e, t, n) {
      function r(e) {
        "auto" === e && (e = null);
        var t;
        t = Array.isArray(e) ? e : "string" == typeof e ? [e] : [];
        var n = i(t) || {},
          r = s.mergeProps([l, n], ["buttonText"]),
          o = r.week;
        return (
          delete r.week,
          {
            codeArg: e,
            codes: t,
            week: o,
            simpleNumberFormat: new Intl.NumberFormat(e),
            options: r,
          }
        );
      }
      function i(e) {
        for (var t = 0; t < e.length; t++)
          for (
            var n = e[t].toLocaleLowerCase().split("-"), r = n.length;
            r > 0;
            r--
          ) {
            var i = n.slice(0, r).join("-");
            if (u[i]) return u[i];
          }
        return null;
      }
      function o(e, t) {
        u[e] = t;
      }
      function a() {
        return Object.keys(u);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = n(12),
        l = {
          week: { dow: 0, doy: 4 },
          dir: "ltr",
          buttonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            year: "year",
            today: "today",
            month: "month",
            week: "week",
            day: "day",
            list: "list",
          },
          weekLabel: "W",
          allDayText: "all-day",
          eventLimitText: "more",
          noEventsMessage: "No events to display",
        },
        u = {};
      (t.getLocale = r),
        (t.defineLocale = o),
        (t.getLocaleCodes = a),
        o("en", l);
    },
    function (e, t, n) {
      function r(e, t) {
        return (
          a.rangesEqual(e.activeRange, t.activeRange) &&
          a.rangesEqual(e.validRange, t.validRange)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(4),
        o = n(9),
        a = n(8),
        s = (function () {
          function e(e, t) {
            (this.viewSpec = e),
              (this.options = e.options),
              (this.dateEnv = t.dateEnv),
              (this.calendar = t),
              this.initHiddenDays();
          }
          return (
            (e.prototype.buildPrev = function (e) {
              var t = this.dateEnv,
                n = t.subtract(e.currentRange.start, e.dateIncrement);
              return this.build(n, -1);
            }),
            (e.prototype.buildNext = function (e) {
              var t = this.dateEnv,
                n = t.add(e.currentRange.start, e.dateIncrement);
              return this.build(n, 1);
            }),
            (e.prototype.build = function (e, t, n) {
              void 0 === n && (n = !1);
              var r,
                i,
                s,
                l,
                u,
                d,
                c = null,
                p = null;
              return (
                (r = this.buildValidRange()),
                (r = this.trimHiddenDays(r)),
                n && (e = a.constrainMarkerToRange(e, r)),
                (i = this.buildCurrentRangeInfo(e, t)),
                (s = /^(year|month|week|day)$/.test(i.unit)),
                (l = this.buildRenderRange(
                  this.trimHiddenDays(i.range),
                  i.unit,
                  s
                )),
                (l = this.trimHiddenDays(l)),
                (u = l),
                this.options.showNonCurrentDates ||
                  (u = a.intersectRanges(u, i.range)),
                (c = o.createDuration(this.options.minTime)),
                (p = o.createDuration(this.options.maxTime)),
                (u = this.adjustActiveRange(u, c, p)),
                (u = a.intersectRanges(u, r)),
                (d = a.rangesIntersect(i.range, r)),
                {
                  validRange: r,
                  currentRange: i.range,
                  currentRangeUnit: i.unit,
                  isRangeAllDay: s,
                  activeRange: u,
                  renderRange: l,
                  minTime: c,
                  maxTime: p,
                  isValid: d,
                  dateIncrement: this.buildDateIncrement(i.duration),
                }
              );
            }),
            (e.prototype.buildValidRange = function () {
              return (
                this.getRangeOption("validRange", this.calendar.getNow()) || {
                  start: null,
                  end: null,
                }
              );
            }),
            (e.prototype.buildCurrentRangeInfo = function (e, t) {
              var n,
                r = this,
                i = r.viewSpec,
                a = r.dateEnv,
                s = null,
                l = null,
                u = null;
              return (
                i.duration
                  ? ((s = i.duration),
                    (l = i.durationUnit),
                    (u = this.buildRangeFromDuration(e, t, s, l)))
                  : (n = this.options.dayCount)
                  ? ((l = "day"), (u = this.buildRangeFromDayCount(e, t, n)))
                  : (u = this.buildCustomVisibleRange(e))
                  ? (l = a.greatestWholeUnit(u.start, u.end).unit)
                  : ((s = this.getFallbackDuration()),
                    (l = o.greatestDurationDenominator(s).unit),
                    (u = this.buildRangeFromDuration(e, t, s, l))),
                { duration: s, unit: l, range: u }
              );
            }),
            (e.prototype.getFallbackDuration = function () {
              return o.createDuration({ day: 1 });
            }),
            (e.prototype.adjustActiveRange = function (e, t, n) {
              var r = this.dateEnv,
                a = e.start,
                s = e.end;
              return (
                this.viewSpec.class.prototype.usesMinMaxTime &&
                  (o.asRoughDays(t) < 0 &&
                    ((a = i.startOfDay(a)), (a = r.add(a, t))),
                  o.asRoughDays(n) > 1 &&
                    ((s = i.startOfDay(s)),
                    (s = i.addDays(s, -1)),
                    (s = r.add(s, n)))),
                { start: a, end: s }
              );
            }),
            (e.prototype.buildRangeFromDuration = function (e, t, n, r) {
              function a() {
                (u = p.startOf(e, f)),
                  (d = p.add(u, n)),
                  (c = { start: u, end: d });
              }
              var s,
                l,
                u,
                d,
                c,
                p = this.dateEnv,
                f = this.options.dateAlignment;
              return (
                f ||
                  ((s = this.options.dateIncrement),
                  s
                    ? ((l = o.createDuration(s)),
                      (f =
                        o.asRoughMs(l) < o.asRoughMs(n)
                          ? o.greatestDurationDenominator(
                              l,
                              !o.getWeeksFromInput(s)
                            ).unit
                          : r))
                    : (f = r)),
                o.asRoughDays(n) <= 1 &&
                  this.isHiddenDay(u) &&
                  ((u = this.skipHiddenDays(u, t)), (u = i.startOfDay(u))),
                a(),
                this.trimHiddenDays(c) ||
                  ((e = this.skipHiddenDays(e, t)), a()),
                c
              );
            }),
            (e.prototype.buildRangeFromDayCount = function (e, t, n) {
              var r,
                o = this.dateEnv,
                a = this.options.dateAlignment,
                s = 0,
                l = e;
              a && (l = o.startOf(l, a)),
                (l = i.startOfDay(l)),
                (l = this.skipHiddenDays(l, t)),
                (r = l);
              do {
                (r = i.addDays(r, 1)), this.isHiddenDay(r) || s++;
              } while (s < n);
              return { start: l, end: r };
            }),
            (e.prototype.buildCustomVisibleRange = function (e) {
              var t = this.dateEnv,
                n = this.getRangeOption("visibleRange", t.toDate(e));
              return !n || (null != n.start && null != n.end) ? n : null;
            }),
            (e.prototype.buildRenderRange = function (e, t, n) {
              return e;
            }),
            (e.prototype.buildDateIncrement = function (e) {
              var t,
                n = this.options.dateIncrement;
              return n
                ? o.createDuration(n)
                : (t = this.options.dateAlignment)
                ? o.createDuration(1, t)
                : e || o.createDuration({ days: 1 });
            }),
            (e.prototype.getRangeOption = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = this.options[e];
              if (("function" == typeof r && (r = r.apply(null, t)), r))
                return a.parseRange(r, this.dateEnv);
            }),
            (e.prototype.initHiddenDays = function () {
              var e,
                t = this.options.hiddenDays || [],
                n = [],
                r = 0;
              for (
                !1 === this.options.weekends && t.push(0, 6), e = 0;
                e < 7;
                e++
              )
                (n[e] = -1 !== t.indexOf(e)) || r++;
              if (!r) throw new Error("invalid hiddenDays");
              this.isHiddenDayHash = n;
            }),
            (e.prototype.trimHiddenDays = function (e) {
              var t = e.start,
                n = e.end;
              return (
                t && (t = this.skipHiddenDays(t)),
                n && (n = this.skipHiddenDays(n, -1, !0)),
                null == t || null == n || t < n ? { start: t, end: n } : null
              );
            }),
            (e.prototype.isHiddenDay = function (e) {
              return (
                e instanceof Date && (e = e.getUTCDay()),
                this.isHiddenDayHash[e]
              );
            }),
            (e.prototype.skipHiddenDays = function (e, t, n) {
              for (
                void 0 === t && (t = 1), void 0 === n && (n = !1);
                this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];

              )
                e = i.addDays(e, t);
              return e;
            }),
            e
          );
        })();
      (t.default = s), (t.isDateProfilesEqual = r);
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(2),
        o = n(48),
        a = n(4),
        s = n(9),
        l = n(27),
        u = n(3),
        d = n(22),
        c = n(10),
        p = n(20),
        f = n(1),
        h = (function (e) {
          function t(t, n, r, o) {
            var a =
              e.call(
                this,
                t,
                u.createElement("div", {
                  className: "fc-view fc-" + n.type + "-view",
                }),
                !0
              ) || this;
            return (
              (a.renderDatesMem = p.memoizeRendering(
                a.renderDatesWrap,
                a.unrenderDatesWrap
              )),
              (a.renderBusinessHoursMem = p.memoizeRendering(
                a.renderBusinessHours,
                a.unrenderBusinessHours,
                [a.renderDatesMem]
              )),
              (a.renderDateSelectionMem = p.memoizeRendering(
                a.renderDateSelectionWrap,
                a.unrenderDateSelectionWrap,
                [a.renderDatesMem]
              )),
              (a.renderEventsMem = p.memoizeRendering(
                a.renderEvents,
                a.unrenderEvents,
                [a.renderDatesMem]
              )),
              (a.renderEventSelectionMem = p.memoizeRendering(
                a.renderEventSelectionWrap,
                a.unrenderEventSelectionWrap,
                [a.renderEventsMem]
              )),
              (a.renderEventDragMem = p.memoizeRendering(
                a.renderEventDragWrap,
                a.unrenderEventDragWrap,
                [a.renderDatesMem]
              )),
              (a.renderEventResizeMem = p.memoizeRendering(
                a.renderEventResizeWrap,
                a.unrenderEventResizeWrap,
                [a.renderDatesMem]
              )),
              (a.viewSpec = n),
              (a.dateProfileGenerator = r),
              (a.type = n.type),
              (a.eventOrderSpecs = i.parseFieldSpecs(a.opt("eventOrder"))),
              (a.nextDayThreshold = s.createDuration(
                a.opt("nextDayThreshold")
              )),
              o.appendChild(a.el),
              a.initialize(),
              a
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.initialize = function () {}),
            Object.defineProperty(t.prototype, "activeStart", {
              get: function () {
                return this.dateEnv.toDate(
                  this.props.dateProfile.activeRange.start
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "activeEnd", {
              get: function () {
                return this.dateEnv.toDate(
                  this.props.dateProfile.activeRange.end
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "currentStart", {
              get: function () {
                return this.dateEnv.toDate(
                  this.props.dateProfile.currentRange.start
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "currentEnd", {
              get: function () {
                return this.dateEnv.toDate(
                  this.props.dateProfile.currentRange.end
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.render = function (e) {
              this.renderDatesMem(e.dateProfile),
                this.renderBusinessHoursMem(e.businessHours),
                this.renderDateSelectionMem(e.dateSelection),
                this.renderEventsMem(e.eventStore),
                this.renderEventSelectionMem(e.eventSelection),
                this.renderEventDragMem(e.eventDrag),
                this.renderEventResizeMem(e.eventResize);
            }),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this), this.renderDatesMem.unrender();
            }),
            (t.prototype.updateSize = function (e, t, n) {
              var r = this.calendar;
              (e || r.isViewUpdated || r.isDatesUpdated || r.isEventsUpdated) &&
                this.updateBaseSize(e, t, n);
            }),
            (t.prototype.updateBaseSize = function (e, t, n) {}),
            (t.prototype.renderDatesWrap = function (e) {
              this.renderDates(e),
                this.addScroll({ isDateInit: !0 }),
                this.startNowIndicator(e);
            }),
            (t.prototype.unrenderDatesWrap = function () {
              this.stopNowIndicator(), this.unrenderDates();
            }),
            (t.prototype.renderDates = function (e) {}),
            (t.prototype.unrenderDates = function () {}),
            (t.prototype.renderBusinessHours = function (e) {}),
            (t.prototype.unrenderBusinessHours = function () {}),
            (t.prototype.renderDateSelectionWrap = function (e) {
              e && this.renderDateSelection(e);
            }),
            (t.prototype.unrenderDateSelectionWrap = function (e) {
              e && this.unrenderDateSelection(e);
            }),
            (t.prototype.renderDateSelection = function (e) {}),
            (t.prototype.unrenderDateSelection = function (e) {}),
            (t.prototype.renderEvents = function (e) {}),
            (t.prototype.unrenderEvents = function () {}),
            (t.prototype.sliceEvents = function (e, t) {
              var n = this.props;
              return c.sliceEventStore(
                e,
                n.eventUiBases,
                n.dateProfile.activeRange,
                t ? this.nextDayThreshold : null
              ).fg;
            }),
            (t.prototype.renderEventSelectionWrap = function (e) {
              e && this.renderEventSelection(e);
            }),
            (t.prototype.unrenderEventSelectionWrap = function (e) {
              e && this.unrenderEventSelection(e);
            }),
            (t.prototype.renderEventSelection = function (e) {}),
            (t.prototype.unrenderEventSelection = function (e) {}),
            (t.prototype.renderEventDragWrap = function (e) {
              e && this.renderEventDrag(e);
            }),
            (t.prototype.unrenderEventDragWrap = function (e) {
              e && this.unrenderEventDrag(e);
            }),
            (t.prototype.renderEventDrag = function (e) {}),
            (t.prototype.unrenderEventDrag = function (e) {}),
            (t.prototype.renderEventResizeWrap = function (e) {
              e && this.renderEventResize(e);
            }),
            (t.prototype.unrenderEventResizeWrap = function (e) {
              e && this.unrenderEventResize(e);
            }),
            (t.prototype.renderEventResize = function (e) {}),
            (t.prototype.unrenderEventResize = function (e) {}),
            (t.prototype.startNowIndicator = function (e) {
              var t,
                n,
                r,
                i = this,
                o = this.dateEnv;
              this.opt("nowIndicator") &&
                (t = this.getNowIndicatorUnit(e)) &&
                ((n = this.updateNowIndicator.bind(this)),
                (this.initialNowDate = this.calendar.getNow()),
                (this.initialNowQueriedMs = new Date().valueOf()),
                (r =
                  o
                    .add(
                      o.startOf(this.initialNowDate, t),
                      s.createDuration(1, t)
                    )
                    .valueOf() - this.initialNowDate.valueOf()),
                (this.nowIndicatorTimeoutID = setTimeout(function () {
                  (i.nowIndicatorTimeoutID = null),
                    n(),
                    (r = "second" === t ? 1e3 : 6e4),
                    (i.nowIndicatorIntervalID = setInterval(n, r));
                }, r)));
            }),
            (t.prototype.updateNowIndicator = function () {
              this.props.dateProfile &&
                this.initialNowDate &&
                (this.unrenderNowIndicator(),
                this.renderNowIndicator(
                  a.addMs(
                    this.initialNowDate,
                    new Date().valueOf() - this.initialNowQueriedMs
                  )
                ),
                (this.isNowIndicatorRendered = !0));
            }),
            (t.prototype.stopNowIndicator = function () {
              this.isNowIndicatorRendered &&
                (this.nowIndicatorTimeoutID &&
                  (clearTimeout(this.nowIndicatorTimeoutID),
                  (this.nowIndicatorTimeoutID = null)),
                this.nowIndicatorIntervalID &&
                  (clearInterval(this.nowIndicatorIntervalID),
                  (this.nowIndicatorIntervalID = null)),
                this.unrenderNowIndicator(),
                (this.isNowIndicatorRendered = !1));
            }),
            (t.prototype.getNowIndicatorUnit = function (e) {}),
            (t.prototype.renderNowIndicator = function (e) {}),
            (t.prototype.unrenderNowIndicator = function () {}),
            (t.prototype.addScroll = function (e) {
              var t = this.queuedScroll || (this.queuedScroll = {});
              f.__assign(t, e);
            }),
            (t.prototype.popScroll = function () {
              this.applyQueuedScroll(), (this.queuedScroll = null);
            }),
            (t.prototype.applyQueuedScroll = function () {
              this.applyScroll(this.queuedScroll || {});
            }),
            (t.prototype.queryScroll = function () {
              var e = {};
              return (
                this.props.dateProfile && f.__assign(e, this.queryDateScroll()),
                e
              );
            }),
            (t.prototype.applyScroll = function (e) {
              e.isDateInit &&
                (delete e.isDateInit,
                this.props.dateProfile &&
                  f.__assign(e, this.computeInitialDateScroll())),
                this.props.dateProfile && this.applyDateScroll(e);
            }),
            (t.prototype.computeInitialDateScroll = function () {
              return {};
            }),
            (t.prototype.queryDateScroll = function () {
              return {};
            }),
            (t.prototype.applyDateScroll = function (e) {}),
            t
          );
        })(d.default);
      (t.default = h),
        l.default.mixInto(h),
        (h.prototype.usesMinMaxTime = !1),
        (h.prototype.dateProfileGeneratorClass = o.default);
    },
    function (e, t, n) {
      function r(e) {
        var t = e.eventRange.def,
          n = e.eventRange.instance.range,
          r = n.start ? n.start.valueOf() : 0,
          o = n.end ? n.end.valueOf() : 0;
        return i.__assign({}, t.extendedProps, t, {
          id: t.publicId,
          start: r,
          end: o,
          duration: o - r,
          allDay: Number(t.allDay),
          _seg: e,
        });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1),
        o = n(7),
        a = n(3),
        s = n(2),
        l = n(10),
        u = (function () {
          function e(e) {
            (this.segs = []), (this.isSizeDirty = !1), (this.context = e);
          }
          return (
            (e.prototype.renderSegs = function (e, t) {
              this.rangeUpdated(),
                (e = this.renderSegEls(e, t)),
                (this.segs = e),
                this.attachSegs(e, t),
                (this.isSizeDirty = !0),
                this.context.view.triggerRenderedSegs(this.segs, Boolean(t));
            }),
            (e.prototype.unrender = function (e, t) {
              this.context.view.triggerWillRemoveSegs(this.segs, Boolean(t)),
                this.detachSegs(this.segs),
                (this.segs = []);
            }),
            (e.prototype.rangeUpdated = function () {
              var e,
                t,
                n = this.context.options;
              (this.eventTimeFormat = o.createFormatter(
                n.eventTimeFormat || this.computeEventTimeFormat(),
                n.defaultRangeSeparator
              )),
                (e = n.displayEventTime),
                null == e && (e = this.computeDisplayEventTime()),
                (t = n.displayEventEnd),
                null == t && (t = this.computeDisplayEventEnd()),
                (this.displayEventTime = e),
                (this.displayEventEnd = t);
            }),
            (e.prototype.renderSegEls = function (e, t) {
              var n,
                r = "";
              if (e.length) {
                for (n = 0; n < e.length; n++) r += this.renderSegHtml(e[n], t);
                a.htmlToElements(r).forEach(function (t, n) {
                  var r = e[n];
                  t && (r.el = t);
                }),
                  (e = l.filterSegsViaEls(this.context.view, e, Boolean(t)));
              }
              return e;
            }),
            (e.prototype.getSegClasses = function (e, t, n, r) {
              var i = [
                "fc-event",
                e.isStart ? "fc-start" : "fc-not-start",
                e.isEnd ? "fc-end" : "fc-not-end",
              ].concat(e.eventRange.ui.classNames);
              return (
                t && i.push("fc-draggable"),
                n && i.push("fc-resizable"),
                r &&
                  (i.push("fc-mirror"),
                  r.isDragging && i.push("fc-dragging"),
                  r.isResizing && i.push("fc-resizing")),
                i
              );
            }),
            (e.prototype.getTimeText = function (e, t, n) {
              var r = e.def,
                i = e.instance;
              return this._getTimeText(
                i.range.start,
                r.hasEnd ? i.range.end : null,
                r.allDay,
                t,
                n,
                i.forcedStartTzo,
                i.forcedEndTzo
              );
            }),
            (e.prototype._getTimeText = function (e, t, n, r, i, o, a) {
              var s = this.context.dateEnv;
              return (
                null == r && (r = this.eventTimeFormat),
                null == i && (i = this.displayEventEnd),
                this.displayEventTime && !n
                  ? i && t
                    ? s.formatRange(e, t, r, {
                        forcedStartTzo: o,
                        forcedEndTzo: a,
                      })
                    : s.format(e, r, { forcedTzo: o })
                  : ""
              );
            }),
            (e.prototype.computeEventTimeFormat = function () {
              return { hour: "numeric", minute: "2-digit", omitZeroMinute: !0 };
            }),
            (e.prototype.computeDisplayEventTime = function () {
              return !0;
            }),
            (e.prototype.computeDisplayEventEnd = function () {
              return !0;
            }),
            (e.prototype.getSkinCss = function (e) {
              return {
                "background-color": e.backgroundColor,
                "border-color": e.borderColor,
                color: e.textColor,
              };
            }),
            (e.prototype.sortEventSegs = function (e) {
              var t = this.context.view.eventOrderSpecs,
                n = e.map(r);
              return (
                n.sort(function (e, n) {
                  return s.compareByFieldSpecs(e, n, t);
                }),
                n.map(function (e) {
                  return e._seg;
                })
              );
            }),
            (e.prototype.computeSizes = function (e) {
              (e || this.isSizeDirty) && this.computeSegSizes(this.segs);
            }),
            (e.prototype.assignSizes = function (e) {
              (e || this.isSizeDirty) &&
                (this.assignSegSizes(this.segs), (this.isSizeDirty = !1));
            }),
            (e.prototype.computeSegSizes = function (e) {}),
            (e.prototype.assignSegSizes = function (e) {}),
            (e.prototype.hideByHash = function (e) {
              if (e)
                for (var t = 0, n = this.segs; t < n.length; t++) {
                  var r = n[t];
                  e[r.eventRange.instance.instanceId] &&
                    (r.el.style.visibility = "hidden");
                }
            }),
            (e.prototype.showByHash = function (e) {
              if (e)
                for (var t = 0, n = this.segs; t < n.length; t++) {
                  var r = n[t];
                  e[r.eventRange.instance.instanceId] &&
                    (r.el.style.visibility = "");
                }
            }),
            (e.prototype.selectByInstanceId = function (e) {
              if (e)
                for (var t = 0, n = this.segs; t < n.length; t++) {
                  var r = n[t],
                    i = r.eventRange.instance;
                  i &&
                    i.instanceId === e &&
                    r.el &&
                    r.el.classList.add("fc-selected");
                }
            }),
            (e.prototype.unselectByInstanceId = function (e) {
              if (e)
                for (var t = 0, n = this.segs; t < n.length; t++) {
                  var r = n[t];
                  r.el && r.el.classList.remove("fc-selected");
                }
            }),
            e
          );
        })();
      (t.default = u), (t.buildSegCompareObj = r);
    },
    function (e, t, n) {
      function r(e) {
        var t = e.tagName;
        return "HTML" === t || "BODY" === t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(15),
        o = n(32),
        a = n(151),
        s = (function () {
          function e(e) {
            var t = i.computeRect(e);
            (this.origLeft = t.left),
              (this.origTop = t.top),
              (this.origRight = t.right),
              (this.origBottom = t.bottom),
              (this.scrollCaches = i.getClippingParents(e).map(function (e) {
                return new a.ElementScrollGeomCache(e, !0);
              }));
          }
          return (
            (e.prototype.destroy = function () {
              for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                t[e].destroy();
              }
            }),
            (e.prototype.computeLeft = function () {
              for (
                var e = this.origLeft, t = 0, n = this.scrollCaches;
                t < n.length;
                t++
              ) {
                var r = n[t];
                e += r.origScrollLeft - r.getScrollLeft();
              }
              return e;
            }),
            (e.prototype.computeTop = function () {
              for (
                var e = this.origTop, t = 0, n = this.scrollCaches;
                t < n.length;
                t++
              ) {
                var r = n[t];
                e += r.origScrollTop - r.getScrollTop();
              }
              return e;
            }),
            (e.prototype.isWithinClipping = function (e, t) {
              for (
                var n = { left: e, top: t }, i = 0, a = this.scrollCaches;
                i < a.length;
                i++
              ) {
                var s = a[i];
                if (
                  !r(s.getEventTarget()) &&
                  !o.pointInsideRect(n, s.clientRect)
                )
                  return !1;
              }
              return !0;
            }),
            e
          );
        })();
      t.default = s;
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = "4.0.0-alpha.4"),
        (t.internalApiVersion = 12);
      var r = n(186);
      t.OptionsInput = r.OptionsInput;
      var i = n(26);
      (t.EventInput = i.EventInput),
        (t.EventDef = i.EventDef),
        (t.EventDefHash = i.EventDefHash),
        (t.EventInstance = i.EventInstance),
        (t.EventInstanceHash = i.EventInstanceHash);
      var o = n(144);
      (t.BusinessHoursInput = o.BusinessHoursInput),
        (t.parseBusinessHours = o.parseBusinessHours);
      var a = n(2);
      (t.applyAll = a.applyAll),
        (t.debounce = a.debounce),
        (t.padStart = a.padStart),
        (t.isInt = a.isInt),
        (t.capitaliseFirstLetter = a.capitaliseFirstLetter),
        (t.parseFieldSpecs = a.parseFieldSpecs),
        (t.compareByFieldSpecs = a.compareByFieldSpecs),
        (t.compareByFieldSpec = a.compareByFieldSpec),
        (t.flexibleCompare = a.flexibleCompare),
        (t.log = a.log),
        (t.warn = a.warn),
        (t.computeVisibleDayRange = a.computeVisibleDayRange);
      var s = n(11);
      (t.htmlEscape = s.htmlEscape), (t.cssToStr = s.cssToStr);
      var l = n(57);
      (t.removeExact = l.removeExact), (t.isArraysEqual = l.isArraysEqual);
      var u = n(17);
      (t.memoize = u.memoize), (t.memoizeOutput = u.memoizeOutput);
      var d = n(20);
      (t.memoizeRendering = d.memoizeRendering),
        (t.MemoizedRendering = d.MemoizedRendering);
      var c = n(32);
      t.intersectRects = c.intersectRects;
      var p = n(12);
      (t.isPropsEqual = p.isPropsEqual),
        (t.mapHash = p.mapHash),
        (t.filterHash = p.filterHash);
      var f = n(3);
      (t.findElements = f.findElements),
        (t.findChildren = f.findChildren),
        (t.htmlToElement = f.htmlToElement),
        (t.createElement = f.createElement),
        (t.insertAfterElement = f.insertAfterElement),
        (t.prependToElement = f.prependToElement),
        (t.removeElement = f.removeElement),
        (t.appendToElement = f.appendToElement),
        (t.applyStyle = f.applyStyle),
        (t.applyStyleProp = f.applyStyleProp),
        (t.elementMatches = f.elementMatches),
        (t.forceClassName = f.forceClassName);
      var h = n(14);
      (t.EventStore = h.EventStore),
        (t.filterEventStoreDefs = h.filterEventStoreDefs),
        (t.createEmptyEventStore = h.createEmptyEventStore),
        (t.mergeEventStores = h.mergeEventStores);
      var g = n(25);
      (t.EventUiHash = g.EventUiHash),
        (t.EventUi = g.EventUi),
        (t.processScopedUiProps = g.processScopedUiProps),
        (t.combineEventUis = g.combineEventUis);
      var v = n(145);
      (t.Splitter = v.default), (t.SplittableProps = v.SplittableProps);
      var m = n(21);
      (t.buildGotoAnchorHtml = m.buildGotoAnchorHtml),
        (t.getAllDayHtml = m.getAllDayHtml),
        (t.getDayClasses = m.getDayClasses);
      var y = n(24);
      (t.preventDefault = y.preventDefault),
        (t.listenBySelector = y.listenBySelector),
        (t.whenTransitionDone = y.whenTransitionDone);
      var E = n(15);
      (t.computeInnerRect = E.computeInnerRect),
        (t.computeEdges = E.computeEdges),
        (t.computeHeightAndMargins = E.computeHeightAndMargins),
        (t.getClippingParents = E.getClippingParents);
      var S = n(146);
      t.unpromisify = S.unpromisify;
      var b = n(27);
      (t.EmitterMixin = b.default), (t.EmitterInterface = b.EmitterInterface);
      var D = n(8);
      (t.DateRange = D.DateRange),
        (t.rangeContainsMarker = D.rangeContainsMarker),
        (t.intersectRanges = D.intersectRanges),
        (t.rangesEqual = D.rangesEqual),
        (t.rangesIntersect = D.rangesIntersect);
      var w = n(59);
      t.defineThemeSystem = w.defineThemeSystem;
      var T = n(147);
      t.Mixin = T.default;
      var R = n(60);
      t.PositionCache = R.default;
      var _ = n(44);
      (t.ScrollComponent = _.default), (t.ScrollbarWidths = _.ScrollbarWidths);
      var C = n(33);
      t.Theme = C.default;
      var M = n(34);
      (t.Component = M.default), (t.ComponentContext = M.ComponentContext);
      var P = n(22);
      (t.DateComponent = P.default),
        (t.Seg = P.Seg),
        (t.EventSegUiInteractionState = P.EventSegUiInteractionState);
      var I = n(154);
      (t.Calendar = I.default),
        (t.DatePointTransform = I.DatePointTransform),
        (t.DateSpanTransform = I.DateSpanTransform);
      var O = n(49);
      (t.View = O.default), (t.ViewProps = O.ViewProps);
      var H = n(50);
      t.FgEventRenderer = H.default;
      var k = n(64);
      t.FillRenderer = k.default;
      var x = n(160);
      (t.AgendaView = x.default), (t.buildAgendaDayTable = x.buildDayTable);
      var z = n(161);
      t.AbstractAgendaView = z.default;
      var N = n(170);
      t.AbstractBasicView = N.default;
      var L = n(162);
      (t.TimeGrid = L.default), (t.TimeGridSeg = L.TimeGridSeg);
      var A = n(169);
      (t.TimeGridSlicer = A.TimeGridSlicer),
        (t.buildDayRanges = A.buildDayRanges);
      var j = n(69);
      t.DayGridSlicer = j.DayGridSlicer;
      var V = n(65);
      (t.DayGrid = V.default), (t.DayGridSeg = V.DayGridSeg);
      var U = n(171);
      (t.BasicView = U.default), (t.buildBasicDayTable = U.buildDayTable);
      var B = n(172);
      t.ListView = B.default;
      var F = n(48);
      (t.DateProfileGenerator = F.default), (t.DateProfile = F.DateProfile);
      var G = n(158);
      t.ViewDef = G.ViewDef;
      var W = n(157);
      (t.ViewSpec = W.ViewSpec),
        (t.ViewSpecTransformer = W.ViewSpecTransformer);
      var Y = n(46);
      (t.DateSpan = Y.DateSpan),
        (t.DateSpanApi = Y.DateSpanApi),
        (t.DatePointApi = Y.DatePointApi);
      var q = n(4);
      (t.DateMarker = q.DateMarker),
        (t.addDays = q.addDays),
        (t.startOfDay = q.startOfDay),
        (t.addMs = q.addMs),
        (t.diffWholeWeeks = q.diffWholeWeeks),
        (t.diffWholeDays = q.diffWholeDays),
        (t.diffDayAndTime = q.diffDayAndTime),
        (t.isValidDate = q.isValidDate);
      var Z = n(9);
      (t.Duration = Z.Duration),
        (t.createDuration = Z.createDuration),
        (t.isSingleDay = Z.isSingleDay),
        (t.multiplyDuration = Z.multiplyDuration),
        (t.addDurations = Z.addDurations),
        (t.asRoughMinutes = Z.asRoughMinutes),
        (t.asRoughSeconds = Z.asRoughSeconds),
        (t.asRoughMs = Z.asRoughMs),
        (t.wholeDivideDurations = Z.wholeDivideDurations),
        (t.greatestDurationDenominator = Z.greatestDurationDenominator);
      var X = n(63);
      (t.DateEnv = X.DateEnv), (t.DateMarkerMeta = X.DateMarkerMeta);
      var K = n(47);
      (t.defineLocale = K.defineLocale),
        (t.getLocale = K.getLocale),
        (t.getLocaleCodes = K.getLocaleCodes);
      var J = n(7);
      (t.DateFormatter = J.DateFormatter),
        (t.createFormatter = J.createFormatter),
        (t.VerboseFormattingArg = J.VerboseFormattingArg);
      var Q = n(155);
      (t.NamedTimeZoneImpl = Q.NamedTimeZoneImpl),
        (t.registerNamedTimeZoneImpl = Q.registerNamedTimeZoneImpl);
      var $ = n(58);
      t.registerCmdFormatter = $.registerCmdFormatter;
      var ee = n(156);
      t.parseMarker = ee.parse;
      var te = n(29);
      t.registerEventSourceDef = te.registerEventSourceDef;
      var ne = n(2);
      t.refineProps = ne.refineProps;
      var re = n(45);
      (t.PointerDragging = re.default),
        (t.PointerDragEvent = re.PointerDragEvent);
      var ie = n(62);
      t.ElementDragging = ie.default;
      var oe = n(211);
      t.Draggable = oe.default;
      var ae = n(213);
      t.ThirdPartyDraggable = ae.default;
      var se = n(28);
      t.Hit = se.Hit;
      var le = n(152);
      t.dateSelectionJoinTransformer = le.dateSelectionJoinTransformer;
      var ue = n(215);
      (t.formatDate = ue.formatDate), (t.formatRange = ue.formatRange);
      var de = n(36);
      t.globalDefaults = de.globalDefaults;
      var ce = n(41);
      (t.registerRecurringType = ce.registerRecurringType),
        (t.ParsedRecurring = ce.ParsedRecurring);
      var pe = n(37);
      (t.createPlugin = pe.createPlugin),
        (t.PluginDef = pe.PluginDef),
        (t.PluginDefInput = pe.PluginDefInput),
        (t.ViewPropsTransformer = pe.ViewPropsTransformer),
        (t.ViewContainerModifier = pe.ViewContainerModifier);
      var fe = n(216);
      (t.reducerFunc = fe.reducerFunc),
        (t.Action = fe.Action),
        (t.CalendarState = fe.CalendarState);
      var he = n(159);
      t.CalendarComponentProps = he.CalendarComponentProps;
      var ge = n(168);
      (t.computeFallbackHeaderFormat = ge.computeFallbackHeaderFormat),
        (t.renderDateCell = ge.renderDateCell);
      var ve = n(51);
      t.OffsetTracker = ve.default;
      var me = n(66);
      t.DaySeries = me.default;
      var ye = n(217);
      t.EventInteractionState = ye.EventInteractionState;
      var Ee = n(10);
      (t.EventRenderRange = Ee.EventRenderRange),
        (t.sliceEventStore = Ee.sliceEventStore),
        (t.hasBgRendering = Ee.hasBgRendering);
      var Se = n(67);
      (t.DayTable = Se.default),
        (t.DayTableSeg = Se.DayTableSeg),
        (t.DayTableCell = Se.DayTableCell);
      var be = n(68);
      (t.Slicer = be.default), (t.SlicedProps = be.SlicedProps);
      var De = n(43);
      t.EventMutation = De.EventMutation;
      var we = n(42);
      (t.Constraint = we.Constraint),
        (t.ConstraintInput = we.ConstraintInput),
        (t.AllowFunc = we.AllowFunc),
        (t.isPropsValid = we.isPropsValid);
      var Te = n(16);
      t.EventApi = Te.default;
    },
    function (e, t) {
      function n(e, t) {
        for (var n = 0, r = 0; r < e.length; )
          t(e[r]) ? (e.splice(r, 1), n++) : r++;
        return n;
      }
      function r(e, t) {
        for (var n = 0, r = 0; r < e.length; )
          e[r] === t ? (e.splice(r, 1), n++) : r++;
        return n;
      }
      function i(e, t) {
        var n,
          r = e.length;
        if (r !== t.length) return !1;
        for (n = 0; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.removeMatching = n),
        (t.removeExact = r),
        (t.isArraysEqual = i);
    },
    function (e, t, n) {
      function r(e, t) {
        a[e] = t;
      }
      function i(e) {
        return a[e];
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(7),
        a = {};
      (t.registerCmdFormatter = r), (t.getCmdFormatter = i);
      var s = (function () {
        function e(e, t) {
          (this.cmdStr = e), (this.separator = t);
        }
        return (
          (e.prototype.format = function (e, t) {
            return t.cmdFormatter(
              this.cmdStr,
              o.createVerboseFormattingArg(e, null, t, this.separator)
            );
          }),
          (e.prototype.formatRange = function (e, t, n) {
            return n.cmdFormatter(
              this.cmdStr,
              o.createVerboseFormattingArg(e, t, n, this.separator)
            );
          }),
          e
        );
      })();
      t.CmdFormatter = s;
    },
    function (e, t, n) {
      function r(e, t) {
        s[e] = t;
      }
      function i(e) {
        return e ? (!0 === e ? a.default : s[e]) : o.default;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(148),
        a = n(149),
        s = {};
      (t.defineThemeSystem = r), (t.getThemeSystemClass = i);
    },
    function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
        function e(e, t, n, r) {
          (this.originEl = e),
            (this.els = t),
            (this.isHorizontal = n),
            (this.isVertical = r);
        }
        return (
          (e.prototype.build = function () {
            var e = this.originEl,
              t = (this.originClientRect = e.getBoundingClientRect());
            this.isHorizontal && this.buildElHorizontals(t.left),
              this.isVertical && this.buildElVerticals(t.top);
          }),
          (e.prototype.buildElHorizontals = function (e) {
            for (var t = [], n = [], r = 0, i = this.els; r < i.length; r++) {
              var o = i[r],
                a = o.getBoundingClientRect();
              t.push(a.left - e), n.push(a.right - e);
            }
            (this.lefts = t), (this.rights = n);
          }),
          (e.prototype.buildElVerticals = function (e) {
            for (var t = [], n = [], r = 0, i = this.els; r < i.length; r++) {
              var o = i[r],
                a = o.getBoundingClientRect();
              t.push(a.top - e), n.push(a.bottom - e);
            }
            (this.tops = t), (this.bottoms = n);
          }),
          (e.prototype.leftToIndex = function (e) {
            var t,
              n = this.lefts,
              r = this.rights,
              i = n.length;
            for (t = 0; t < i; t++) if (e >= n[t] && e < r[t]) return t;
          }),
          (e.prototype.topToIndex = function (e) {
            var t,
              n = this.tops,
              r = this.bottoms,
              i = n.length;
            for (t = 0; t < i; t++) if (e >= n[t] && e < r[t]) return t;
          }),
          (e.prototype.getWidth = function (e) {
            return this.rights[e] - this.lefts[e];
          }),
          (e.prototype.getHeight = function (e) {
            return this.bottoms[e] - this.tops[e];
          }),
          e
        );
      })();
      t.default = n;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(190),
        i = n(152),
        o = n(193),
        a = n(194),
        s = n(153),
        l = n(195),
        u = (function () {
          function e() {
            (this.componentHash = {}), (this.listenerHash = {});
          }
          return (
            (e.prototype.registerComponent = function (e) {
              (this.componentHash[e.uid] = e), this.bindComponent(e);
            }),
            (e.prototype.unregisterComponent = function (e) {
              delete this.componentHash[e.uid], this.unbindComponent(e);
            }),
            (e.prototype.bindComponent = function (e) {
              this.listenerHash[e.uid] = {
                dateClicking: new r.default(e),
                dateSelecting: new i.default(e),
                eventClicking: new o.default(e),
                eventHovering: new a.default(e),
                eventDragging: new s.default(e),
                eventResizing: new l.default(e),
              };
            }),
            (e.prototype.unbindComponent = function (e) {
              var t = this.listenerHash[e.uid];
              t.dateClicking.destroy(),
                t.dateSelecting.destroy(),
                t.eventClicking.destroy(),
                t.eventHovering.destroy(),
                t.eventDragging.destroy(),
                t.eventResizing.destroy(),
                delete this.listenerHash[e.uid];
            }),
            e
          );
        })();
      (t.BrowserContext = u), (t.default = new u());
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(27),
        i = (function () {
          function e() {
            this.emitter = new r.default();
          }
          return (
            (e.prototype.destroy = function () {}),
            (e.prototype.setMirrorIsVisible = function (e) {}),
            (e.prototype.setMirrorNeedsRevert = function (e) {}),
            e
          );
        })();
      t.default = i;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(4),
        i = n(197),
        o = n(155),
        a = n(9),
        s = n(7),
        l = n(156),
        u = n(2),
        d = n(58),
        c = (function () {
          function e(e) {
            var t = (this.timeZone = e.timeZone),
              n = "local" !== t && "UTC" !== t;
            e.timeZoneImpl &&
              n &&
              (this.namedTimeZoneImpl = o.createNamedTimeZoneImpl(
                e.timeZoneImpl,
                t
              )),
              (this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl)),
              (this.calendarSystem = i.createCalendarSystem(e.calendarSystem)),
              (this.locale = e.locale),
              (this.weekDow = e.locale.week.dow),
              (this.weekDoy = e.locale.week.doy),
              "ISO" === e.weekNumberCalculation
                ? ((this.weekDow = 1), (this.weekDoy = 4))
                : "number" == typeof e.firstDay && (this.weekDow = e.firstDay),
              "function" == typeof e.weekNumberCalculation &&
                (this.weekNumberFunc = e.weekNumberCalculation),
              (this.weekLabel =
                null != e.weekLabel ? e.weekLabel : e.locale.options.weekLabel),
              "string" == typeof e.cmdFormatter &&
                (this.cmdFormatter = d.getCmdFormatter(e.cmdFormatter));
          }
          return (
            (e.prototype.createMarker = function (e) {
              var t = this.createMarkerMeta(e);
              return null === t ? null : t.marker;
            }),
            (e.prototype.createNowMarker = function () {
              return this.canComputeOffset
                ? this.timestampToMarker(new Date().valueOf())
                : r.arrayToUtcDate(r.dateToLocalArray(new Date()));
            }),
            (e.prototype.createMarkerMeta = function (e) {
              if ("string" == typeof e) return this.parse(e);
              var t = null;
              return (
                "number" == typeof e
                  ? (t = this.timestampToMarker(e))
                  : e instanceof Date
                  ? ((e = e.valueOf()),
                    isNaN(e) || (t = this.timestampToMarker(e)))
                  : Array.isArray(e) && (t = r.arrayToUtcDate(e)),
                null !== t && r.isValidDate(t)
                  ? { marker: t, isTimeUnspecified: !1, forcedTzo: null }
                  : null
              );
            }),
            (e.prototype.parse = function (e) {
              var t = l.parse(e);
              if (null === t) return null;
              var n = t.marker,
                r = null;
              return (
                null !== t.timeZoneOffset &&
                  (this.canComputeOffset
                    ? (n = this.timestampToMarker(
                        n.valueOf() - 60 * t.timeZoneOffset * 1e3
                      ))
                    : (r = t.timeZoneOffset)),
                {
                  marker: n,
                  isTimeUnspecified: t.isTimeUnspecified,
                  forcedTzo: r,
                }
              );
            }),
            (e.prototype.getYear = function (e) {
              return this.calendarSystem.getMarkerYear(e);
            }),
            (e.prototype.getMonth = function (e) {
              return this.calendarSystem.getMarkerMonth(e);
            }),
            (e.prototype.add = function (e, t) {
              var n = this.calendarSystem.markerToArray(e);
              return (
                (n[0] += t.years),
                (n[1] += t.months),
                (n[2] += t.days),
                (n[6] += t.milliseconds),
                this.calendarSystem.arrayToMarker(n)
              );
            }),
            (e.prototype.subtract = function (e, t) {
              var n = this.calendarSystem.markerToArray(e);
              return (
                (n[0] -= t.years),
                (n[1] -= t.months),
                (n[2] -= t.days),
                (n[6] -= t.milliseconds),
                this.calendarSystem.arrayToMarker(n)
              );
            }),
            (e.prototype.addYears = function (e, t) {
              var n = this.calendarSystem.markerToArray(e);
              return (n[0] += t), this.calendarSystem.arrayToMarker(n);
            }),
            (e.prototype.addMonths = function (e, t) {
              var n = this.calendarSystem.markerToArray(e);
              return (n[1] += t), this.calendarSystem.arrayToMarker(n);
            }),
            (e.prototype.diffWholeYears = function (e, t) {
              var n = this.calendarSystem;
              return r.timeAsMs(e) === r.timeAsMs(t) &&
                n.getMarkerDay(e) === n.getMarkerDay(t) &&
                n.getMarkerMonth(e) === n.getMarkerMonth(t)
                ? n.getMarkerYear(t) - n.getMarkerYear(e)
                : null;
            }),
            (e.prototype.diffWholeMonths = function (e, t) {
              var n = this.calendarSystem;
              return r.timeAsMs(e) === r.timeAsMs(t) &&
                n.getMarkerDay(e) === n.getMarkerDay(t)
                ? n.getMarkerMonth(t) -
                    n.getMarkerMonth(e) +
                    12 * (n.getMarkerYear(t) - n.getMarkerYear(e))
                : null;
            }),
            (e.prototype.greatestWholeUnit = function (e, t) {
              var n = this.diffWholeYears(e, t);
              return null !== n
                ? { unit: "year", value: n }
                : null !== (n = this.diffWholeMonths(e, t))
                ? { unit: "month", value: n }
                : null !== (n = r.diffWholeWeeks(e, t))
                ? { unit: "week", value: n }
                : null !== (n = r.diffWholeDays(e, t))
                ? { unit: "day", value: n }
                : ((n = r.diffHours(e, t)),
                  u.isInt(n)
                    ? { unit: "hour", value: n }
                    : ((n = r.diffMinutes(e, t)),
                      u.isInt(n)
                        ? { unit: "minute", value: n }
                        : ((n = r.diffSeconds(e, t)),
                          u.isInt(n)
                            ? { unit: "second", value: n }
                            : {
                                unit: "millisecond",
                                value: t.valueOf() - e.valueOf(),
                              })));
            }),
            (e.prototype.countDurationsBetween = function (e, t, n) {
              var i;
              return n.years && null !== (i = this.diffWholeYears(e, t))
                ? i / a.asRoughYears(n)
                : n.months && null !== (i = this.diffWholeMonths(e, t))
                ? i / a.asRoughMonths(n)
                : n.days && null !== (i = r.diffWholeDays(e, t))
                ? i / a.asRoughDays(n)
                : (t.valueOf() - e.valueOf()) / a.asRoughMs(n);
            }),
            (e.prototype.startOf = function (e, t) {
              return "year" === t
                ? this.startOfYear(e)
                : "month" === t
                ? this.startOfMonth(e)
                : "week" === t
                ? this.startOfWeek(e)
                : "day" === t
                ? r.startOfDay(e)
                : "hour" === t
                ? r.startOfHour(e)
                : "minute" === t
                ? r.startOfMinute(e)
                : "second" === t
                ? r.startOfSecond(e)
                : void 0;
            }),
            (e.prototype.startOfYear = function (e) {
              return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(e),
              ]);
            }),
            (e.prototype.startOfMonth = function (e) {
              return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(e),
                this.calendarSystem.getMarkerMonth(e),
              ]);
            }),
            (e.prototype.startOfWeek = function (e) {
              return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(e),
                this.calendarSystem.getMarkerMonth(e),
                e.getUTCDate() - ((e.getUTCDay() - this.weekDow + 7) % 7),
              ]);
            }),
            (e.prototype.computeWeekNumber = function (e) {
              return this.weekNumberFunc
                ? this.weekNumberFunc(this.toDate(e))
                : r.weekOfYear(e, this.weekDow, this.weekDoy);
            }),
            (e.prototype.format = function (e, t, n) {
              return (
                void 0 === n && (n = {}),
                t.format(
                  {
                    marker: e,
                    timeZoneOffset:
                      null != n.forcedTzo
                        ? n.forcedTzo
                        : this.offsetForMarker(e),
                  },
                  this
                )
              );
            }),
            (e.prototype.formatRange = function (e, t, n, i) {
              return (
                void 0 === i && (i = {}),
                i.isEndExclusive && (t = r.addMs(t, -1)),
                n.formatRange(
                  {
                    marker: e,
                    timeZoneOffset:
                      null != i.forcedStartTzo
                        ? i.forcedStartTzo
                        : this.offsetForMarker(e),
                  },
                  {
                    marker: t,
                    timeZoneOffset:
                      null != i.forcedEndTzo
                        ? i.forcedEndTzo
                        : this.offsetForMarker(t),
                  },
                  this
                )
              );
            }),
            (e.prototype.formatIso = function (e, t) {
              void 0 === t && (t = {});
              var n = null;
              return (
                t.omitTimeZoneOffset ||
                  (n =
                    null != t.forcedTzo
                      ? t.forcedTzo
                      : this.offsetForMarker(e)),
                s.buildIsoString(e, n, t.omitTime)
              );
            }),
            (e.prototype.timestampToMarker = function (e) {
              return "local" === this.timeZone
                ? r.arrayToUtcDate(r.dateToLocalArray(new Date(e)))
                : "UTC" !== this.timeZone && this.namedTimeZoneImpl
                ? r.arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(e))
                : new Date(e);
            }),
            (e.prototype.offsetForMarker = function (e) {
              return "local" === this.timeZone
                ? -r.arrayToLocalDate(r.dateToUtcArray(e)).getTimezoneOffset()
                : "UTC" === this.timeZone
                ? 0
                : this.namedTimeZoneImpl
                ? this.namedTimeZoneImpl.offsetForArray(r.dateToUtcArray(e))
                : null;
            }),
            (e.prototype.toDate = function (e, t) {
              return "local" === this.timeZone
                ? r.arrayToLocalDate(r.dateToUtcArray(e))
                : "UTC" === this.timeZone
                ? new Date(e.valueOf())
                : this.namedTimeZoneImpl
                ? new Date(
                    e.valueOf() -
                      1e3 *
                        this.namedTimeZoneImpl.offsetForArray(
                          r.dateToUtcArray(e)
                        ) *
                        60
                  )
                : new Date(e.valueOf() - (t || 0));
            }),
            e
          );
        })();
      t.DateEnv = c;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(11),
        i = n(3),
        o = n(10),
        a = (function () {
          function e(e) {
            (this.fillSegTag = "div"),
              (this.dirtySizeFlags = {}),
              (this.context = e),
              (this.containerElsByType = {}),
              (this.segsByType = {});
          }
          return (
            (e.prototype.getSegsByType = function (e) {
              return this.segsByType[e] || [];
            }),
            (e.prototype.renderSegs = function (e, t) {
              var n,
                r = this.renderSegEls(e, t),
                i = this.attachSegs(e, r);
              i &&
                (n =
                  this.containerElsByType[e] ||
                  (this.containerElsByType[e] = [])).push.apply(n, i),
                (this.segsByType[e] = r),
                "bgEvent" === e && this.context.view.triggerRenderedSegs(r, !1),
                (this.dirtySizeFlags[e] = !0);
            }),
            (e.prototype.unrender = function (e) {
              var t = this.segsByType[e];
              t &&
                ("bgEvent" === e &&
                  this.context.view.triggerWillRemoveSegs(t, !1),
                this.detachSegs(e, t));
            }),
            (e.prototype.renderSegEls = function (e, t) {
              var n,
                r = this,
                a = "";
              if (t.length) {
                for (n = 0; n < t.length; n++) a += this.renderSegHtml(e, t[n]);
                i.htmlToElements(a).forEach(function (e, n) {
                  var r = t[n];
                  e && (r.el = e);
                }),
                  "bgEvent" === e &&
                    (t = o.filterSegsViaEls(this.context.view, t, !1)),
                  (t = t.filter(function (e) {
                    return i.elementMatches(e.el, r.fillSegTag);
                  }));
              }
              return t;
            }),
            (e.prototype.renderSegHtml = function (e, t) {
              var n = null,
                i = [];
              return (
                "highlight" !== e &&
                  "businessHours" !== e &&
                  (n = { "background-color": t.eventRange.ui.backgroundColor }),
                "highlight" !== e && (i = i.concat(t.eventRange.ui.classNames)),
                "businessHours" === e
                  ? i.push("fc-bgevent")
                  : i.push("fc-" + e.toLowerCase()),
                "<" +
                  this.fillSegTag +
                  (i.length ? ' class="' + i.join(" ") + '"' : "") +
                  (n ? ' style="' + r.cssToStr(n) + '"' : "") +
                  "></" +
                  this.fillSegTag +
                  ">"
              );
            }),
            (e.prototype.detachSegs = function (e, t) {
              var n = this.containerElsByType[e];
              n &&
                (n.forEach(i.removeElement), delete this.containerElsByType[e]);
            }),
            (e.prototype.computeSizes = function (e) {
              for (var t in this.segsByType)
                (e || this.dirtySizeFlags[t]) &&
                  this.computeSegSizes(this.segsByType[t]);
            }),
            (e.prototype.assignSizes = function (e) {
              for (var t in this.segsByType)
                (e || this.dirtySizeFlags[t]) &&
                  this.assignSegSizes(this.segsByType[t]);
              this.dirtySizeFlags = {};
            }),
            (e.prototype.computeSegSizes = function (e) {}),
            (e.prototype.assignSegSizes = function (e) {}),
            e
          );
        })();
      t.default = a;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(3),
        o = n(15),
        a = n(60),
        s = n(204),
        l = n(165),
        u = n(205),
        d = n(206),
        c = n(4),
        p = n(7),
        f = n(22),
        h = n(207),
        g = n(8),
        v = n(21),
        m = n(164),
        y = n(20),
        E = p.createFormatter({ day: "numeric" }),
        S = p.createFormatter({ week: "numeric" }),
        b = (function (e) {
          function t(t, n, r) {
            var i = e.call(this, t, n) || this;
            (i.bottomCoordPadding = 0), (i.isCellSizesDirty = !1);
            var o = (i.eventRenderer = new l.default(i)),
              a = (i.fillRenderer = new d.default(i));
            i.mirrorRenderer = new u.default(i);
            var s = (i.renderCells = y.memoizeRendering(
              i._renderCells,
              i._unrenderCells
            ));
            return (
              (i.renderBusinessHours = y.memoizeRendering(
                a.renderSegs.bind(a, "businessHours"),
                a.unrender.bind(a, "businessHours"),
                [s]
              )),
              (i.renderDateSelection = y.memoizeRendering(
                a.renderSegs.bind(a, "highlight"),
                a.unrender.bind(a, "highlight"),
                [s]
              )),
              (i.renderBgEvents = y.memoizeRendering(
                a.renderSegs.bind(a, "bgEvent"),
                a.unrender.bind(a, "bgEvent"),
                [s]
              )),
              (i.renderFgEvents = y.memoizeRendering(
                o.renderSegs.bind(o),
                o.unrender.bind(o),
                [s]
              )),
              (i.renderEventSelection = y.memoizeRendering(
                o.selectByInstanceId.bind(o),
                o.unselectByInstanceId.bind(o),
                [i.renderFgEvents]
              )),
              (i.renderEventDrag = y.memoizeRendering(
                i._renderEventDrag,
                i._unrenderEventDrag,
                [s]
              )),
              (i.renderEventResize = y.memoizeRendering(
                i._renderEventResize,
                i._unrenderEventResize,
                [s]
              )),
              (i.renderProps = r),
              i
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.render = function (e) {
              var t = e.cells;
              (this.rowCnt = t.length),
                (this.colCnt = t[0].length),
                this.renderCells(t, e.isRigid),
                this.renderBusinessHours(e.businessHourSegs),
                this.renderDateSelection(e.dateSelectionSegs),
                this.renderBgEvents(e.bgEventSegs),
                this.renderFgEvents(e.fgEventSegs),
                this.renderEventSelection(e.eventSelection),
                this.renderEventDrag(e.eventDrag),
                this.renderEventResize(e.eventResize),
                this.segPopoverTile && this.updateSegPopoverTile();
            }),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this), this.renderCells.unrender();
            }),
            (t.prototype.getCellRange = function (e, t) {
              var n = this.props.cells[e][t].date;
              return { start: n, end: c.addDays(n, 1) };
            }),
            (t.prototype.updateSegPopoverTile = function (e, t) {
              var n = this.props;
              this.segPopoverTile.receiveProps({
                date: e || this.segPopoverTile.props.date,
                fgSegs: t || this.segPopoverTile.props.fgSegs,
                eventSelection: n.eventSelection,
                eventDragInstances: n.eventDrag
                  ? n.eventDrag.affectedInstances
                  : null,
                eventResizeInstances: n.eventResize
                  ? n.eventResize.affectedInstances
                  : null,
              });
            }),
            (t.prototype._renderCells = function (e, t) {
              var n,
                r,
                o = this,
                s = o.view,
                l = o.dateEnv,
                u = this,
                d = u.rowCnt,
                c = u.colCnt,
                p = "";
              for (n = 0; n < d; n++) p += this.renderDayRowHtml(n, t);
              for (
                this.el.innerHTML = p,
                  this.rowEls = i.findElements(this.el, ".fc-row"),
                  this.cellEls = i.findElements(
                    this.el,
                    ".fc-day, .fc-disabled-day"
                  ),
                  this.isRtl && this.cellEls.reverse(),
                  this.rowPositions = new a.default(
                    this.el,
                    this.rowEls,
                    !1,
                    !0
                  ),
                  this.colPositions = new a.default(
                    this.el,
                    this.cellEls.slice(0, c),
                    !0,
                    !1
                  ),
                  n = 0;
                n < d;
                n++
              )
                for (r = 0; r < c; r++)
                  this.publiclyTrigger("dayRender", [
                    {
                      date: l.toDate(e[n][r].date),
                      el: this.getCellEl(n, r),
                      view: s,
                    },
                  ]);
              this.isCellSizesDirty = !0;
            }),
            (t.prototype._unrenderCells = function () {
              this.removeSegPopover();
            }),
            (t.prototype.renderDayRowHtml = function (e, t) {
              var n = this.theme,
                r = ["fc-row", "fc-week", n.getClass("dayRow")];
              t && r.push("fc-rigid");
              var i = new m.default(this.context);
              return (
                '<div class="' +
                r.join(" ") +
                '"><div class="fc-bg"><table class="' +
                n.getClass("tableGrid") +
                '">' +
                i.renderHtml({
                  cells: this.props.cells[e],
                  dateProfile: this.props.dateProfile,
                  renderIntroHtml: this.renderProps.renderBgIntroHtml,
                }) +
                '</table></div><div class="fc-content-skeleton"><table>' +
                (this.getIsNumbersVisible()
                  ? "<thead>" + this.renderNumberTrHtml(e) + "</thead>"
                  : "") +
                "</table></div></div>"
              );
            }),
            (t.prototype.getIsNumbersVisible = function () {
              return (
                this.getIsDayNumbersVisible() ||
                this.renderProps.cellWeekNumbersVisible ||
                this.renderProps.colWeekNumbersVisible
              );
            }),
            (t.prototype.getIsDayNumbersVisible = function () {
              return this.rowCnt > 1;
            }),
            (t.prototype.renderNumberTrHtml = function (e) {
              var t = this.renderProps.renderNumberIntroHtml(e, this);
              return (
                "<tr>" +
                (this.isRtl ? "" : t) +
                this.renderNumberCellsHtml(e) +
                (this.isRtl ? t : "") +
                "</tr>"
              );
            }),
            (t.prototype.renderNumberCellsHtml = function (e) {
              var t,
                n,
                r = [];
              for (t = 0; t < this.colCnt; t++)
                (n = this.props.cells[e][t].date),
                  r.push(this.renderNumberCellHtml(n));
              return this.isRtl && r.reverse(), r.join("");
            }),
            (t.prototype.renderNumberCellHtml = function (e) {
              var t,
                n,
                r = this,
                i = r.view,
                o = r.dateEnv,
                a = "",
                s = g.rangeContainsMarker(
                  this.props.dateProfile.activeRange,
                  e
                ),
                l = this.getIsDayNumbersVisible() && s;
              return l || this.renderProps.cellWeekNumbersVisible
                ? ((t = v.getDayClasses(
                    e,
                    this.props.dateProfile,
                    this.context
                  )),
                  t.unshift("fc-day-top"),
                  this.renderProps.cellWeekNumbersVisible && (n = o.weekDow),
                  (a +=
                    '<td class="' +
                    t.join(" ") +
                    '"' +
                    (s
                      ? ' data-date="' + o.formatIso(e, { omitTime: !0 }) + '"'
                      : "") +
                    ">"),
                  this.renderProps.cellWeekNumbersVisible &&
                    e.getUTCDay() === n &&
                    (a += v.buildGotoAnchorHtml(
                      i,
                      { date: e, type: "week" },
                      { class: "fc-week-number" },
                      o.format(e, S)
                    )),
                  l &&
                    (a += v.buildGotoAnchorHtml(
                      i,
                      e,
                      { class: "fc-day-number" },
                      o.format(e, E)
                    )),
                  (a += "</td>"))
                : "<td></td>";
            }),
            (t.prototype.updateSize = function (e) {
              var t = this,
                n = t.fillRenderer,
                r = t.eventRenderer,
                i = t.mirrorRenderer;
              (e || this.isCellSizesDirty) &&
                (this.buildColPositions(),
                this.buildRowPositions(),
                (this.isCellSizesDirty = !1)),
                n.computeSizes(e),
                r.computeSizes(e),
                i.computeSizes(e),
                n.assignSizes(e),
                r.assignSizes(e),
                i.assignSizes(e);
            }),
            (t.prototype.buildColPositions = function () {
              this.colPositions.build();
            }),
            (t.prototype.buildRowPositions = function () {
              this.rowPositions.build(),
                (this.rowPositions.bottoms[this.rowCnt - 1] +=
                  this.bottomCoordPadding);
            }),
            (t.prototype.positionToHit = function (e, t) {
              var n = this,
                r = n.colPositions,
                i = n.rowPositions,
                o = r.leftToIndex(e),
                a = i.topToIndex(t);
              if (null != a && null != o)
                return {
                  row: a,
                  col: o,
                  dateSpan: { range: this.getCellRange(a, o), allDay: !0 },
                  dayEl: this.getCellEl(a, o),
                  relativeRect: {
                    left: r.lefts[o],
                    right: r.rights[o],
                    top: i.tops[a],
                    bottom: i.bottoms[a],
                  },
                };
            }),
            (t.prototype.getCellEl = function (e, t) {
              return this.cellEls[e * this.colCnt + t];
            }),
            (t.prototype._renderEventDrag = function (e) {
              e &&
                (this.eventRenderer.hideByHash(e.affectedInstances),
                this.fillRenderer.renderSegs("highlight", e.segs));
            }),
            (t.prototype._unrenderEventDrag = function (e) {
              e &&
                (this.eventRenderer.showByHash(e.affectedInstances),
                this.fillRenderer.unrender("highlight"));
            }),
            (t.prototype._renderEventResize = function (e) {
              e &&
                (this.eventRenderer.hideByHash(e.affectedInstances),
                this.fillRenderer.renderSegs("highlight", e.segs),
                this.mirrorRenderer.renderSegs(e.segs, {
                  isResizing: !0,
                  sourceSeg: e.sourceSeg,
                }));
            }),
            (t.prototype._unrenderEventResize = function (e) {
              e &&
                (this.eventRenderer.showByHash(e.affectedInstances),
                this.fillRenderer.unrender("highlight"),
                this.mirrorRenderer.unrender(e.segs, {
                  isResizing: !0,
                  sourceSeg: e.sourceSeg,
                }));
            }),
            (t.prototype.removeSegPopover = function () {
              this.segPopover && this.segPopover.hide();
            }),
            (t.prototype.limitRows = function (e) {
              var t,
                n,
                r = this.eventRenderer.rowStructs || [];
              for (t = 0; t < r.length; t++)
                this.unlimitRow(t),
                  !1 !==
                    (n =
                      !!e &&
                      ("number" == typeof e
                        ? e
                        : this.computeRowLevelLimit(t))) && this.limitRow(t, n);
            }),
            (t.prototype.computeRowLevelLimit = function (e) {
              var t,
                n,
                r = this.rowEls[e],
                o = r.getBoundingClientRect().bottom,
                a = i.findChildren(this.eventRenderer.rowStructs[e].tbodyEl);
              for (t = 0; t < a.length; t++)
                if (
                  ((n = a[t]),
                  n.classList.remove("fc-limited"),
                  n.getBoundingClientRect().bottom > o)
                )
                  return t;
              return !1;
            }),
            (t.prototype.limitRow = function (e, t) {
              var n,
                r,
                o,
                a,
                s,
                l,
                u,
                d,
                c,
                p,
                f,
                h,
                g,
                v,
                m,
                y = this,
                E = this,
                S = E.colCnt,
                b = E.isRtl,
                D = this.eventRenderer.rowStructs[e],
                w = [],
                T = 0,
                R = function (n) {
                  for (; T < n; )
                    (l = y.getCellSegs(e, T, t)),
                      l.length &&
                        ((c = r[t - 1][T]),
                        (m = y.renderMoreLink(e, T, l)),
                        (v = i.createElement("div", null, m)),
                        c.appendChild(v),
                        w.push(v[0])),
                      T++;
                };
              if (t && t < D.segLevels.length) {
                for (
                  n = D.segLevels[t - 1],
                    r = D.cellMatrix,
                    o = i.findChildren(D.tbodyEl).slice(t),
                    o.forEach(function (e) {
                      e.classList.add("fc-limited");
                    }),
                    a = 0;
                  a < n.length;
                  a++
                ) {
                  s = n[a];
                  var _ = b ? S - 1 - s.lastCol : s.firstCol,
                    C = b ? S - 1 - s.firstCol : s.lastCol;
                  for (R(_), d = [], u = 0; T <= C; )
                    (l = this.getCellSegs(e, T, t)),
                      d.push(l),
                      (u += l.length),
                      T++;
                  if (u) {
                    for (
                      c = r[t - 1][_], p = c.rowSpan || 1, f = [], h = 0;
                      h < d.length;
                      h++
                    )
                      (g = i.createElement("td", {
                        className: "fc-more-cell",
                        rowSpan: p,
                      })),
                        (l = d[h]),
                        (m = this.renderMoreLink(e, _ + h, [s].concat(l))),
                        (v = i.createElement("div", null, m)),
                        g.appendChild(v),
                        f.push(g),
                        w.push(g);
                    c.classList.add("fc-limited"),
                      i.insertAfterElement(c, f),
                      o.push(c);
                  }
                }
                R(this.colCnt), (D.moreEls = w), (D.limitedEls = o);
              }
            }),
            (t.prototype.unlimitRow = function (e) {
              var t = this.eventRenderer.rowStructs[e];
              t.moreEls &&
                (t.moreEls.forEach(i.removeElement), (t.moreEls = null)),
                t.limitedEls &&
                  (t.limitedEls.forEach(function (e) {
                    e.classList.remove("fc-limited");
                  }),
                  (t.limitedEls = null));
            }),
            (t.prototype.renderMoreLink = function (e, t, n) {
              var r = this,
                o = this,
                a = o.view,
                s = o.dateEnv,
                l = i.createElement("a", { className: "fc-more" });
              return (
                (l.innerText = this.getMoreLinkText(n.length)),
                l.addEventListener("click", function (i) {
                  var o = r.opt("eventLimitClick"),
                    l = r.props.cells[e][t].date,
                    u = i.currentTarget,
                    d = r.getCellEl(e, t),
                    c = r.getCellSegs(e, t),
                    p = r.resliceDaySegs(c, l),
                    f = r.resliceDaySegs(n, l);
                  "function" == typeof o &&
                    (o = r.publiclyTrigger("eventLimitClick", [
                      {
                        date: s.toDate(l),
                        allDay: !0,
                        dayEl: d,
                        moreEl: u,
                        segs: p,
                        hiddenSegs: f,
                        jsEvent: i,
                        view: a,
                      },
                    ])),
                    "popover" === o
                      ? r.showSegPopover(e, t, u, p)
                      : "string" == typeof o && a.calendar.zoomTo(l, o);
                }),
                l
              );
            }),
            (t.prototype.showSegPopover = function (e, t, n, r) {
              var i,
                a,
                l = this,
                u = this,
                d = u.calendar,
                c = u.view,
                p = u.theme,
                f = n.parentNode;
              (i = 1 === this.rowCnt ? c.el : this.rowEls[e]),
                (a = {
                  className: "fc-more-popover " + p.getClass("popover"),
                  parentEl: c.el,
                  top: o.computeRect(i).top,
                  autoHide: !0,
                  content: function (n) {
                    (l.segPopoverTile = new h.default(l.context, n)),
                      l.updateSegPopoverTile(l.props.cells[e][t].date, r);
                  },
                  hide: function () {
                    l.segPopoverTile.destroy(),
                      (l.segPopoverTile = null),
                      l.segPopover.destroy(),
                      (l.segPopover = null);
                  },
                }),
                this.isRtl
                  ? (a.right = o.computeRect(f).right + 1)
                  : (a.left = o.computeRect(f).left - 1),
                (this.segPopover = new s.default(a)),
                this.segPopover.show(),
                d.releaseAfterSizingTriggers();
            }),
            (t.prototype.resliceDaySegs = function (e, t) {
              for (
                var n = t,
                  i = c.addDays(n, 1),
                  o = { start: n, end: i },
                  a = [],
                  s = 0,
                  l = e;
                s < l.length;
                s++
              ) {
                var u = l[s],
                  d = u.eventRange,
                  p = d.range,
                  f = g.intersectRanges(p, o);
                f &&
                  a.push(
                    r.__assign({}, u, {
                      eventRange: {
                        def: d.def,
                        ui: r.__assign({}, d.ui, { durationEditable: !1 }),
                        instance: d.instance,
                        range: f,
                      },
                      isStart:
                        u.isStart && f.start.valueOf() === p.start.valueOf(),
                      isEnd: u.isEnd && f.end.valueOf() === p.end.valueOf(),
                    })
                  );
              }
              return a;
            }),
            (t.prototype.getMoreLinkText = function (e) {
              var t = this.opt("eventLimitText");
              return "function" == typeof t ? t(e) : "+" + e + " " + t;
            }),
            (t.prototype.getCellSegs = function (e, t, n) {
              for (
                var r,
                  i = this.eventRenderer.rowStructs[e].segMatrix,
                  o = n || 0,
                  a = [];
                o < i.length;

              )
                (r = i[o][t]), r && a.push(r), o++;
              return a;
            }),
            t
          );
        })(f.default);
      t.default = b;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(4),
        i = (function () {
          function e(e, t) {
            for (var n = e.start, i = e.end, o = [], a = [], s = -1; n < i; )
              t.isHiddenDay(n) ? o.push(s + 0.5) : (s++, o.push(s), a.push(n)),
                (n = r.addDays(n, 1));
            (this.dates = a), (this.indices = o), (this.cnt = a.length);
          }
          return (
            (e.prototype.sliceRange = function (e) {
              var t = this.getDateDayIndex(e.start),
                n = this.getDateDayIndex(r.addDays(e.end, -1)),
                i = Math.max(0, t),
                o = Math.min(this.cnt - 1, n);
              return (
                (i = Math.ceil(i)),
                (o = Math.floor(o)),
                i <= o
                  ? {
                      firstIndex: i,
                      lastIndex: o,
                      isStart: t === i,
                      isEnd: n === o,
                    }
                  : null
              );
            }),
            (e.prototype.getDateDayIndex = function (e) {
              var t = this.indices,
                n = Math.floor(r.diffDays(this.dates[0], e));
              return n < 0
                ? t[0] - 1
                : n >= t.length
                ? t[t.length - 1] + 1
                : t[n];
            }),
            e
          );
        })();
      t.default = i;
    },
    function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
        function e(e, t) {
          var n,
            r,
            i,
            o = e.dates;
          if (t) {
            for (
              r = o[0].getUTCDay(), n = 1;
              n < o.length && o[n].getUTCDay() !== r;
              n++
            );
            i = Math.ceil(o.length / n);
          } else (i = 1), (n = o.length);
          (this.rowCnt = i),
            (this.colCnt = n),
            (this.daySeries = e),
            (this.cells = this.buildCells()),
            (this.headerDates = this.buildHeaderDates());
        }
        return (
          (e.prototype.buildCells = function () {
            for (var e = [], t = 0; t < this.rowCnt; t++) {
              for (var n = [], r = 0; r < this.colCnt; r++)
                n.push(this.buildCell(t, r));
              e.push(n);
            }
            return e;
          }),
          (e.prototype.buildCell = function (e, t) {
            return { date: this.daySeries.dates[e * this.colCnt + t] };
          }),
          (e.prototype.buildHeaderDates = function () {
            for (var e = [], t = 0; t < this.colCnt; t++)
              e.push(this.cells[0][t].date);
            return e;
          }),
          (e.prototype.sliceRange = function (e) {
            var t = this.colCnt,
              n = this.daySeries.sliceRange(e),
              r = [];
            if (n)
              for (var i = n.firstIndex, o = n.lastIndex, a = i; a <= o; ) {
                var s = Math.floor(a / t),
                  l = Math.min((s + 1) * t, o + 1);
                r.push({
                  row: s,
                  firstCol: a % t,
                  lastCol: (l - 1) % t,
                  isStart: n.isStart && a === i,
                  isEnd: n.isEnd && l - 1 === o,
                }),
                  (a = l);
              }
            return r;
          }),
          e
        );
      })();
      t.default = n;
    },
    function (e, t, n) {
      function r(e) {
        var t = e.activeRange;
        return {
          start: l.addMs(t.start, e.minTime.milliseconds),
          end: l.addMs(t.end, e.maxTime.milliseconds - 864e5),
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(14),
        o = n(10),
        a = n(46),
        s = n(17),
        l = n(4),
        u = (function () {
          function e() {
            (this.sliceBusinessHours = s.memoize(this._sliceBusinessHours)),
              (this.sliceDateSelection = s.memoize(this._sliceDateSpan)),
              (this.sliceEventStore = s.memoize(this._sliceEventStore)),
              (this.sliceEventDrag = s.memoize(this._sliceInteraction)),
              (this.sliceEventResize = s.memoize(this._sliceInteraction));
          }
          return (
            (e.prototype.sliceProps = function (e, t, n, r) {
              for (var i = [], o = 4; o < arguments.length; o++)
                i[o - 4] = arguments[o];
              var a = e.eventUiBases,
                s = this.sliceEventStore.apply(
                  this,
                  [e.eventStore, a, t, n, r].concat(i)
                );
              return {
                dateSelectionSegs: this.sliceDateSelection.apply(
                  this,
                  [e.dateSelection, a, r].concat(i)
                ),
                businessHourSegs: this.sliceBusinessHours.apply(
                  this,
                  [e.businessHours, t, n, r].concat(i)
                ),
                fgEventSegs: s.fg,
                bgEventSegs: s.bg,
                eventDrag: this.sliceEventDrag.apply(
                  this,
                  [e.eventDrag, a, t, n, r].concat(i)
                ),
                eventResize: this.sliceEventResize.apply(
                  this,
                  [e.eventResize, a, t, n, r].concat(i)
                ),
                eventSelection: e.eventSelection,
              };
            }),
            (e.prototype.sliceNowDate = function (e, t) {
              for (var n = [], r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r];
              return this._sliceDateSpan.apply(
                this,
                [
                  { range: { start: e, end: l.addMs(e, 1) }, allDay: !1 },
                  {},
                  t,
                ].concat(n)
              );
            }),
            (e.prototype._sliceBusinessHours = function (e, t, n, o) {
              for (var a = [], s = 4; s < arguments.length; s++)
                a[s - 4] = arguments[s];
              return e
                ? this._sliceEventStore.apply(
                    this,
                    [
                      i.expandRecurring(e, r(t), o.calendar),
                      {},
                      t,
                      n,
                      o,
                    ].concat(a)
                  ).bg
                : [];
            }),
            (e.prototype._sliceEventStore = function (e, t, n, i, a) {
              for (var s = [], l = 5; l < arguments.length; l++)
                s[l - 5] = arguments[l];
              if (e) {
                var u = o.sliceEventStore(e, t, r(n), i);
                return {
                  bg: this.sliceEventRanges(u.bg, a, s),
                  fg: this.sliceEventRanges(u.fg, a, s),
                };
              }
              return { bg: [], fg: [] };
            }),
            (e.prototype._sliceInteraction = function (e, t, n, i, a) {
              for (var s = [], l = 5; l < arguments.length; l++)
                s[l - 5] = arguments[l];
              if (!e) return null;
              var u = o.sliceEventStore(e.mutatedEvents, t, r(n), i);
              return {
                segs: this.sliceEventRanges(u.fg, a, s),
                affectedInstances: e.affectedEvents.instances,
                isEvent: e.isEvent,
                sourceSeg: e.origSeg,
              };
            }),
            (e.prototype._sliceDateSpan = function (e, t, n) {
              for (var r = [], i = 3; i < arguments.length; i++)
                r[i - 3] = arguments[i];
              if (!e) return [];
              for (
                var o = a.fabricateEventRange(e, t, n.calendar),
                  s = this.sliceRange.apply(this, [e.range].concat(r)),
                  l = 0,
                  u = s;
                l < u.length;
                l++
              ) {
                var d = u[l];
                (d.component = n), (d.eventRange = o);
              }
              return s;
            }),
            (e.prototype.sliceEventRanges = function (e, t, n) {
              for (var r = [], i = 0, o = e; i < o.length; i++) {
                var a = o[i];
                r.push.apply(r, this.sliceEventRange(a, t, n));
              }
              return r;
            }),
            (e.prototype.sliceEventRange = function (e, t, n) {
              for (
                var r = this.sliceRange.apply(this, [e.range].concat(n)),
                  i = 0,
                  o = r;
                i < o.length;
                i++
              ) {
                var a = o[i];
                (a.component = t),
                  (a.eventRange = e),
                  (a.isStart = e.isStart && a.isStart),
                  (a.isEnd = e.isEnd && a.isEnd);
              }
              return r;
            }),
            e
          );
        })();
      t.default = u;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(22),
        o = n(68),
        a = n(51),
        s = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n.el) || this;
            return (r.slicer = new l()), (r.dayGrid = n), r;
          }
          return (
            r.__extends(t, e),
            (t.prototype.render = function (e) {
              var t = this.dayGrid,
                n = e.dateProfile,
                i = e.dayTable;
              t.receiveProps(
                r.__assign(
                  {},
                  this.slicer.sliceProps(e, n, e.nextDayThreshold, t, i),
                  { dateProfile: n, cells: i.cells, isRigid: e.isRigid }
                )
              );
            }),
            (t.prototype.prepareHits = function () {
              this.offsetTracker = new a.default(this.dayGrid.el);
            }),
            (t.prototype.releaseHits = function () {
              this.offsetTracker.destroy();
            }),
            (t.prototype.queryHit = function (e, t) {
              var n = this.offsetTracker;
              if (n.isWithinClipping(e, t)) {
                var r = n.computeLeft(),
                  i = n.computeTop(),
                  o = this.dayGrid.positionToHit(e - r, t - i);
                if (o)
                  return {
                    component: this.dayGrid,
                    dateSpan: o.dateSpan,
                    dayEl: o.dayEl,
                    rect: {
                      left: o.relativeRect.left + r,
                      right: o.relativeRect.right + r,
                      top: o.relativeRect.top + i,
                      bottom: o.relativeRect.bottom + i,
                    },
                    layer: 0,
                  };
              }
            }),
            t
          );
        })(i.default);
      (t.default = s), (s.prototype.isInteractable = !0);
      var l = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r.__extends(t, e),
          (t.prototype.sliceRange = function (e, t) {
            return t.sliceRange(e);
          }),
          t
        );
      })(o.default);
      t.DayGridSlicer = l;
    },
    function (t, n) {
      t.exports = e;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
        function e(e, t) {
          (this.calendar = e), (this.internalEventSource = t);
        }
        return (
          (e.prototype.remove = function () {
            this.calendar.dispatch({
              type: "REMOVE_EVENT_SOURCE",
              sourceId: this.internalEventSource.sourceId,
            });
          }),
          (e.prototype.refetch = function () {
            this.calendar.dispatch({
              type: "FETCH_EVENT_SOURCES",
              sourceIds: [this.internalEventSource.sourceId],
            });
          }),
          Object.defineProperty(e.prototype, "id", {
            get: function () {
              return this.internalEventSource.publicId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "url", {
            get: function () {
              return this.internalEventSource.meta.url;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
      t.default = n;
    },
    function (e, t, n) {
      function r(e, t, n, r, d) {
        switch (t.type) {
          case "RECEIVE_EVENTS":
            return i(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, d);
          case "ADD_EVENTS":
            return o(e, t.eventStore, r ? r.activeRange : null, d);
          case "MERGE_EVENTS":
            return f.mergeEventStores(e, t.eventStore);
          case "PREV":
          case "NEXT":
          case "SET_DATE":
          case "SET_VIEW_TYPE":
            return r ? f.expandRecurring(e, r.activeRange, d) : e;
          case "CHANGE_TIMEZONE":
            return a(e, t.oldDateEnv, d.dateEnv);
          case "MUTATE_EVENTS":
            return s(e, t.instanceId, t.mutation, t.fromApi, d);
          case "REMOVE_EVENT_INSTANCES":
            return u(e, t.instances);
          case "REMOVE_EVENT_DEF":
            return f.filterEventStoreDefs(e, function (e) {
              return e.defId !== t.defId;
            });
          case "REMOVE_EVENT_SOURCE":
            return l(e, t.sourceId);
          case "REMOVE_ALL_EVENT_SOURCES":
            return f.filterEventStoreDefs(e, function (e) {
              return !e.sourceId;
            });
          case "REMOVE_ALL_EVENTS":
            return f.createEmptyEventStore();
          case "RESET_EVENTS":
            return { defs: e.defs, instances: e.instances };
          default:
            return e;
        }
      }
      function i(e, t, n, r, i, o) {
        if (t && n === t.latestFetchId) {
          var a = f.parseEvents(f.transformRawEvents(i, t, o), t.sourceId, o);
          return (
            r && (a = f.expandRecurring(a, r, o)),
            f.mergeEventStores(l(e, t.sourceId), a)
          );
        }
        return e;
      }
      function o(e, t, n, r) {
        return n && (t = f.expandRecurring(t, n, r)), f.mergeEventStores(e, t);
      }
      function a(e, t, n) {
        var r = e.defs,
          i = c.mapHash(e.instances, function (e) {
            var i = r[e.defId];
            return i.allDay || i.recurringDef
              ? e
              : d.__assign({}, e, {
                  range: {
                    start: n.createMarker(
                      t.toDate(e.range.start, e.forcedStartTzo)
                    ),
                    end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo)),
                  },
                  forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
                  forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo,
                });
          });
        return { defs: r, instances: i };
      }
      function s(e, t, n, r, i) {
        var o = f.getRelevantEvents(e, t),
          a = r
            ? {
                "": {
                  startEditable: !0,
                  durationEditable: !0,
                  constraints: [],
                  overlap: null,
                  allows: [],
                  backgroundColor: "",
                  borderColor: "",
                  textColor: "",
                  classNames: [],
                },
              }
            : i.eventUiBases;
        return (
          (o = p.applyMutationToEventStore(o, a, n, i)),
          f.mergeEventStores(e, o)
        );
      }
      function l(e, t) {
        return f.filterEventStoreDefs(e, function (e) {
          return e.sourceId !== t;
        });
      }
      function u(e, t) {
        return {
          defs: e.defs,
          instances: c.filterHash(e.instances, function (e) {
            return !t[e.instanceId];
          }),
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var d = n(1),
        c = n(12),
        p = n(43),
        f = n(14);
      (t.default = r), (t.excludeInstances = u);
    },
    function (e, t, n) {
      function r(e, t) {
        return a.parseEvents(i(e), "", t);
      }
      function i(e) {
        var t;
        return (
          (t =
            !0 === e
              ? [{}]
              : Array.isArray(e)
              ? e.filter(function (e) {
                  return e.daysOfWeek;
                })
              : "object" == typeof e && e
              ? [e]
              : []),
          (t = t.map(function (e) {
            return o.__assign({}, s, e);
          }))
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(1),
        a = n(14),
        s = {
          startTime: "09:00",
          endTime: "17:00",
          daysOfWeek: [1, 2, 3, 4, 5],
          rendering: "inverse-background",
          classNames: "fc-nonbusiness",
          groupId: "_businessHours",
        };
      t.parseBusinessHours = r;
    },
    function (e, t, n) {
      function r(e, t, n) {
        var r = [];
        e && r.push(e), t && r.push(t);
        var i = { "": s.combineEventUis(r) };
        return n && l.__assign(i, n), i;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(14),
        o = n(12),
        a = n(17),
        s = n(25),
        l = n(1),
        u = i.createEmptyEventStore(),
        d = (function () {
          function e() {
            (this.getKeysForEventDefs = a.memoize(this._getKeysForEventDefs)),
              (this.splitDateSelection = a.memoize(this._splitDateSpan)),
              (this.splitEventStore = a.memoize(this._splitEventStore)),
              (this.splitIndividualUi = a.memoize(this._splitIndividualUi)),
              (this.splitEventDrag = a.memoize(this._splitInteraction)),
              (this.splitEventResize = a.memoize(this._splitInteraction)),
              (this.eventUiBuilders = {});
          }
          return (
            (e.prototype.splitProps = function (e) {
              var t = this,
                n = this.getKeyInfo(e),
                i = this.getKeysForEventDefs(e.eventStore),
                s = this.splitDateSelection(e.dateSelection),
                l = this.splitIndividualUi(e.eventUiBases, i),
                d = this.splitEventStore(e.eventStore, i),
                c = this.splitEventDrag(e.eventDrag),
                p = this.splitEventResize(e.eventResize),
                f = {};
              this.eventUiBuilders = o.mapHash(n, function (e, n) {
                return t.eventUiBuilders[n] || a.memoize(r);
              });
              for (var h in n) {
                var g = n[h],
                  v = d[h] || u,
                  m = this.eventUiBuilders[h];
                f[h] = {
                  businessHours: g.businessHours || e.businessHours,
                  dateSelection: s[h] || null,
                  eventStore: v,
                  eventUiBases: m(e.eventUiBases[""], g.ui, l[h]),
                  eventSelection: v.instances[e.eventSelection]
                    ? e.eventSelection
                    : "",
                  eventDrag: c[h] || null,
                  eventResize: p[h] || null,
                };
              }
              return f;
            }),
            (e.prototype._splitDateSpan = function (e) {
              var t = {};
              if (e)
                for (
                  var n = this.getKeysForDateSpan(e), r = 0, i = n;
                  r < i.length;
                  r++
                ) {
                  var o = i[r];
                  t[o] = e;
                }
              return t;
            }),
            (e.prototype._getKeysForEventDefs = function (e) {
              var t = this;
              return o.mapHash(e.defs, function (e) {
                return t.getKeysForEventDef(e);
              });
            }),
            (e.prototype._splitEventStore = function (e, t) {
              var n = e.defs,
                r = e.instances,
                o = {};
              for (var a in n)
                for (var s = 0, l = t[a]; s < l.length; s++) {
                  var u = l[s];
                  o[u] || (o[u] = i.createEmptyEventStore()),
                    (o[u].defs[a] = n[a]);
                }
              for (var d in r)
                for (var c = r[d], p = 0, f = t[c.defId]; p < f.length; p++) {
                  var u = f[p];
                  o[u] && (o[u].instances[d] = c);
                }
              return o;
            }),
            (e.prototype._splitIndividualUi = function (e, t) {
              var n = {};
              for (var r in e)
                if (r)
                  for (var i = 0, o = t[r]; i < o.length; i++) {
                    var a = o[i];
                    n[a] || (n[a] = {}), (n[a][r] = e[r]);
                  }
              return n;
            }),
            (e.prototype._splitInteraction = function (e) {
              var t = {};
              if (e) {
                var n = this._splitEventStore(
                    e.affectedEvents,
                    this._getKeysForEventDefs(e.affectedEvents)
                  ),
                  r = this._getKeysForEventDefs(e.mutatedEvents),
                  i = this._splitEventStore(e.mutatedEvents, r),
                  o = function (r) {
                    t[r] ||
                      (t[r] = {
                        affectedEvents: n[r] || u,
                        mutatedEvents: i[r] || u,
                        isEvent: e.isEvent,
                        origSeg: e.origSeg,
                      });
                  };
                for (var a in n) o(a);
                for (var a in i) o(a);
              }
              return t;
            }),
            e
          );
        })();
      t.default = d;
    },
    function (e, t) {
      function n(e, t, n) {
        var r = !1,
          i = function () {
            r || ((r = !0), t.apply(this, arguments));
          },
          o = function () {
            r || ((r = !0), n && n.apply(this, arguments));
          },
          a = e(i, o);
        a && "function" == typeof a.then && a.then(i, o);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.unpromisify = n);
    },
    function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
        function e() {}
        return (
          (e.mixInto = function (e) {
            this.mixIntoObj(e.prototype);
          }),
          (e.mixIntoObj = function (e) {
            var t = this;
            Object.getOwnPropertyNames(this.prototype).forEach(function (n) {
              e[n] || (e[n] = t.prototype[n]);
            });
          }),
          (e.mixOver = function (e) {
            var t = this;
            Object.getOwnPropertyNames(this.prototype).forEach(function (n) {
              e.prototype[n] = t.prototype[n];
            });
          }),
          e
        );
      })();
      t.default = n;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(33),
        o = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return r.__extends(t, e), t;
        })(i.default);
      (t.default = o),
        (o.prototype.classes = {
          widget: "fc-unthemed",
          widgetHeader: "fc-widget-header",
          widgetContent: "fc-widget-content",
          buttonGroup: "fc-button-group",
          button: "fc-button",
          cornerLeft: "fc-corner-left",
          cornerRight: "fc-corner-right",
          stateDefault: "fc-state-default",
          stateActive: "fc-state-active",
          stateDisabled: "fc-state-disabled",
          stateHover: "fc-state-hover",
          stateDown: "fc-state-down",
          popoverHeader: "fc-widget-header",
          popoverContent: "fc-widget-content",
          headerRow: "fc-widget-header",
          dayRow: "fc-widget-content",
          listView: "fc-widget-content",
        }),
        (o.prototype.baseIconClass = "fc-icon"),
        (o.prototype.iconClasses = {
          close: "fc-icon-x",
          prev: "fc-icon-left-single-arrow",
          next: "fc-icon-right-single-arrow",
          prevYear: "fc-icon-left-double-arrow",
          nextYear: "fc-icon-right-double-arrow",
        }),
        (o.prototype.iconOverrideOption = "buttonIcons"),
        (o.prototype.iconOverrideCustomButtonOption = "icon"),
        (o.prototype.iconOverridePrefix = "fc-icon-");
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(33),
        o = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return r.__extends(t, e), t;
        })(i.default);
      (t.default = o),
        (o.prototype.classes = {
          widget: "ui-widget",
          widgetHeader: "ui-widget-header",
          widgetContent: "ui-widget-content",
          buttonGroup: "fc-button-group",
          button: "ui-button",
          cornerLeft: "ui-corner-left",
          cornerRight: "ui-corner-right",
          stateDefault: "ui-state-default",
          stateActive: "ui-state-active",
          stateDisabled: "ui-state-disabled",
          stateHover: "ui-state-hover",
          stateDown: "ui-state-down",
          today: "ui-state-highlight",
          popoverHeader: "ui-widget-header",
          popoverContent: "ui-widget-content",
          headerRow: "ui-widget-header",
          dayRow: "ui-widget-content",
          listView: "ui-widget-content",
        }),
        (o.prototype.baseIconClass = "ui-icon"),
        (o.prototype.iconClasses = {
          close: "ui-icon-closethick",
          prev: "ui-icon-circle-triangle-w",
          next: "ui-icon-circle-triangle-e",
          prevYear: "ui-icon-seek-prev",
          nextYear: "ui-icon-seek-next",
        }),
        (o.prototype.iconOverrideOption = "themeButtonIcons"),
        (o.prototype.iconOverrideCustomButtonOption = "themeIcon"),
        (o.prototype.iconOverridePrefix = "ui-icon-");
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = (function () {
          function e() {}
          return (
            (e.prototype.getMaxScrollTop = function () {
              return this.getScrollHeight() - this.getClientHeight();
            }),
            (e.prototype.getMaxScrollLeft = function () {
              return this.getScrollWidth() - this.getClientWidth();
            }),
            (e.prototype.canScrollVertically = function () {
              return this.getMaxScrollTop() > 0;
            }),
            (e.prototype.canScrollHorizontally = function () {
              return this.getMaxScrollLeft() > 0;
            }),
            (e.prototype.canScrollUp = function () {
              return this.getScrollTop() > 0;
            }),
            (e.prototype.canScrollDown = function () {
              return this.getScrollTop() < this.getMaxScrollTop();
            }),
            (e.prototype.canScrollLeft = function () {
              return this.getScrollLeft() > 0;
            }),
            (e.prototype.canScrollRight = function () {
              return this.getScrollLeft() < this.getMaxScrollLeft();
            }),
            e
          );
        })();
      t.ScrollController = i;
      var o = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n.el = t), n;
        }
        return (
          r.__extends(t, e),
          (t.prototype.getScrollTop = function () {
            return this.el.scrollTop;
          }),
          (t.prototype.getScrollLeft = function () {
            return this.el.scrollLeft;
          }),
          (t.prototype.setScrollTop = function (e) {
            this.el.scrollTop = e;
          }),
          (t.prototype.setScrollLeft = function (e) {
            this.el.scrollLeft = e;
          }),
          (t.prototype.getScrollWidth = function () {
            return this.el.scrollWidth;
          }),
          (t.prototype.getScrollHeight = function () {
            return this.el.scrollHeight;
          }),
          (t.prototype.getClientHeight = function () {
            return this.el.clientHeight;
          }),
          (t.prototype.getClientWidth = function () {
            return this.el.clientWidth;
          }),
          t
        );
      })(i);
      t.ElementScrollController = o;
      var a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r.__extends(t, e),
          (t.prototype.getScrollTop = function () {
            return window.pageYOffset;
          }),
          (t.prototype.getScrollLeft = function () {
            return window.pageXOffset;
          }),
          (t.prototype.setScrollTop = function (e) {
            window.scroll(window.pageXOffset, e);
          }),
          (t.prototype.setScrollLeft = function (e) {
            window.scroll(e, window.pageYOffset);
          }),
          (t.prototype.getScrollWidth = function () {
            return document.documentElement.scrollWidth;
          }),
          (t.prototype.getScrollHeight = function () {
            return document.documentElement.scrollHeight;
          }),
          (t.prototype.getClientHeight = function () {
            return document.documentElement.clientHeight;
          }),
          (t.prototype.getClientWidth = function () {
            return document.documentElement.clientWidth;
          }),
          t
        );
      })(i);
      t.WindowScrollController = a;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(15),
        o = n(150),
        a = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (
              (r.handleScroll = function () {
                (r.scrollTop = r.scrollController.getScrollTop()),
                  (r.scrollLeft = r.scrollController.getScrollLeft()),
                  r.handleScrollChange();
              }),
              (r.scrollController = t),
              (r.doesListening = n),
              (r.scrollTop = r.origScrollTop = t.getScrollTop()),
              (r.scrollLeft = r.origScrollLeft = t.getScrollLeft()),
              (r.scrollWidth = t.getScrollWidth()),
              (r.scrollHeight = t.getScrollHeight()),
              (r.clientWidth = t.getClientWidth()),
              (r.clientHeight = t.getClientHeight()),
              (r.clientRect = r.computeClientRect()),
              r.doesListening &&
                r.getEventTarget().addEventListener("scroll", r.handleScroll),
              r
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.destroy = function () {
              this.doesListening &&
                this.getEventTarget().removeEventListener(
                  "scroll",
                  this.handleScroll
                );
            }),
            (t.prototype.getScrollTop = function () {
              return this.scrollTop;
            }),
            (t.prototype.getScrollLeft = function () {
              return this.scrollLeft;
            }),
            (t.prototype.setScrollTop = function (e) {
              this.scrollController.setScrollTop(e),
                this.doesListening ||
                  ((this.scrollTop = Math.max(
                    Math.min(e, this.getMaxScrollTop()),
                    0
                  )),
                  this.handleScrollChange());
            }),
            (t.prototype.setScrollLeft = function (e) {
              this.scrollController.setScrollLeft(e),
                this.doesListening ||
                  ((this.scrollLeft = Math.max(
                    Math.min(e, this.getMaxScrollLeft()),
                    0
                  )),
                  this.handleScrollChange());
            }),
            (t.prototype.getClientWidth = function () {
              return this.clientWidth;
            }),
            (t.prototype.getClientHeight = function () {
              return this.clientHeight;
            }),
            (t.prototype.getScrollWidth = function () {
              return this.scrollWidth;
            }),
            (t.prototype.getScrollHeight = function () {
              return this.scrollHeight;
            }),
            (t.prototype.handleScrollChange = function () {}),
            t
          );
        })(o.ScrollController);
      t.ScrollGeomCache = a;
      var s = (function (e) {
        function t(t, n) {
          return e.call(this, new o.ElementScrollController(t), n) || this;
        }
        return (
          r.__extends(t, e),
          (t.prototype.getEventTarget = function () {
            return this.scrollController.el;
          }),
          (t.prototype.computeClientRect = function () {
            return i.computeInnerRect(this.scrollController.el);
          }),
          t
        );
      })(a);
      t.ElementScrollGeomCache = s;
      var l = (function (e) {
        function t(t) {
          return e.call(this, new o.WindowScrollController(), t) || this;
        }
        return (
          r.__extends(t, e),
          (t.prototype.getEventTarget = function () {
            return window;
          }),
          (t.prototype.computeClientRect = function () {
            return {
              left: this.scrollLeft,
              right: this.scrollLeft + this.clientWidth,
              top: this.scrollTop,
              bottom: this.scrollTop + this.clientHeight,
            };
          }),
          (t.prototype.handleScrollChange = function () {
            this.clientRect = this.computeClientRect();
          }),
          t
        );
      })(a);
      t.WindowScrollGeomCache = l;
    },
    function (e, t, n) {
      function r(e) {
        var t = e.opt("selectLongPressDelay");
        return null == t && (t = e.opt("longPressDelay")), t;
      }
      function i(e, t, n) {
        var r = e.dateSpan,
          i = t.dateSpan,
          a = [r.range.start, r.range.end, i.range.start, i.range.end];
        a.sort(o.compareNumbers);
        for (var s = {}, u = 0, d = n; u < d.length; u++) {
          var c = d[u],
            p = c(e, t);
          if (!1 === p) return null;
          p && l.__assign(s, p);
        }
        return (s.range = { start: a[0], end: a[3] }), (s.allDay = r.allDay), s;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(2),
        a = n(28),
        s = n(35),
        l = n(1),
        u = (function () {
          function e(e) {
            var t = this;
            (this.dragSelection = null),
              (this.handlePointerDown = function (e) {
                var n = t,
                  i = n.component,
                  o = n.dragging,
                  a =
                    i.opt("selectable") &&
                    i.isValidDateDownEl(e.origEvent.target);
                o.setIgnoreMove(!a), (o.delay = e.isTouch ? r(i) : null);
              }),
              (this.handleDragStart = function (e) {
                t.component.calendar.unselect(e);
              }),
              (this.handleHitUpdate = function (e, n) {
                var r = t.component.calendar,
                  a = null,
                  s = !1;
                e &&
                  (((a = i(
                    t.hitDragging.initialHit,
                    e,
                    r.pluginSystem.hooks.dateSelectionTransformers
                  )) &&
                    t.component.isDateSelectionValid(a)) ||
                    ((s = !0), (a = null))),
                  a
                    ? r.dispatch({ type: "SELECT_DATES", selection: a })
                    : n || r.dispatch({ type: "UNSELECT_DATES" }),
                  s ? o.disableCursor() : o.enableCursor(),
                  n || (t.dragSelection = a);
              }),
              (this.handlePointerUp = function (e) {
                t.dragSelection &&
                  (t.component.calendar.triggerDateSelect(t.dragSelection, e),
                  (t.dragSelection = null));
              }),
              (this.component = e);
            var n = (this.dragging = new s.default(e.el));
            (n.touchScrollAllowed = !1),
              (n.minDistance = e.opt("selectMinDistance") || 0),
              (n.autoScroller.isEnabled = e.opt("dragScroll"));
            var l = (this.hitDragging = new a.default(this.dragging, e));
            l.emitter.on("pointerdown", this.handlePointerDown),
              l.emitter.on("dragstart", this.handleDragStart),
              l.emitter.on("hitupdate", this.handleHitUpdate),
              l.emitter.on("pointerup", this.handlePointerUp);
          }
          return (
            (e.prototype.destroy = function () {
              this.dragging.destroy();
            }),
            e
          );
        })();
      t.default = u;
    },
    function (e, t, n) {
      function r(e, t, n) {
        var r = e.dateSpan,
          i = t.dateSpan,
          o = r.range.start,
          a = i.range.start,
          s = {};
        r.allDay !== i.allDay &&
          ((s.allDay = i.allDay),
          (s.hasEnd = t.component.opt("allDayMaintainDuration")),
          i.allDay && (o = l.startOfDay(o)));
        var u = p.diffDates(
          o,
          a,
          e.component.dateEnv,
          e.component === t.component ? e.component.largeUnit : null
        );
        u.milliseconds && (s.allDay = !1);
        for (
          var d = { startDelta: u, endDelta: u, standardProps: s },
            c = 0,
            f = n;
          c < f.length;
          c++
        ) {
          (0, f[c])(d, e, t);
        }
        return d;
      }
      function i(e) {
        var t = e.opt("eventLongPressDelay");
        return null == t && (t = e.opt("longPressDelay")), t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(28),
        a = n(43),
        s = n(61),
        l = n(4),
        u = n(3),
        d = n(35),
        c = n(14),
        p = n(2),
        f = n(10),
        h = n(16),
        g = n(1),
        v = (function () {
          function e(t) {
            var n = this;
            (this.subjectSeg = null),
              (this.isDragging = !1),
              (this.eventRange = null),
              (this.relevantEvents = null),
              (this.receivingCalendar = null),
              (this.validMutation = null),
              (this.mutatedRelevantEvents = null),
              (this.handlePointerDown = function (e) {
                var t = e.origEvent.target,
                  r = n,
                  o = r.component,
                  a = r.dragging,
                  s = a.mirror,
                  l = o.calendar,
                  d = (n.subjectSeg = f.getElSeg(e.subjectEl)),
                  p = (n.eventRange = d.eventRange),
                  h = p.instance.instanceId;
                (n.relevantEvents = c.getRelevantEvents(l.state.eventStore, h)),
                  (a.minDistance = e.isTouch
                    ? 0
                    : o.opt("eventDragMinDistance")),
                  (a.delay =
                    e.isTouch && h !== o.props.eventSelection ? i(o) : null),
                  (s.parentNode = l.el),
                  (s.revertDuration = o.opt("dragRevertDuration"));
                var g =
                  n.component.isValidSegDownEl(t) &&
                  !u.elementClosest(t, ".fc-resizer");
                a.setIgnoreMove(!g),
                  (n.isDragging =
                    g && e.subjectEl.classList.contains("fc-draggable"));
              }),
              (this.handleDragStart = function (e) {
                var t = n.component.calendar,
                  r = n.eventRange,
                  i = r.instance.instanceId;
                e.isTouch
                  ? i !== n.component.props.eventSelection &&
                    t.dispatch({ type: "SELECT_EVENT", eventInstanceId: i })
                  : t.dispatch({ type: "UNSELECT_EVENT" }),
                  n.isDragging &&
                    (t.unselect(e),
                    t.publiclyTrigger("eventDragStart", [
                      {
                        el: n.subjectSeg.el,
                        event: new h.default(t, r.def, r.instance),
                        jsEvent: e.origEvent,
                        view: n.component.view,
                      },
                    ]));
              }),
              (this.handleHitUpdate = function (e, t) {
                if (n.isDragging) {
                  var i = n.relevantEvents,
                    s = n.hitDragging.initialHit,
                    l = n.component.calendar,
                    u = null,
                    d = null,
                    f = null,
                    h = !1,
                    g = {
                      affectedEvents: i,
                      mutatedEvents: c.createEmptyEventStore(),
                      isEvent: !0,
                      origSeg: n.subjectSeg,
                    };
                  if (e) {
                    var v = e.component;
                    (u = v.calendar),
                      l === u || (v.opt("editable") && v.opt("droppable"))
                        ? (d = r(
                            s,
                            e,
                            u.pluginSystem.hooks.eventDragMutationMassagers
                          )) &&
                          ((f = a.applyMutationToEventStore(
                            i,
                            u.eventUiBases,
                            d,
                            u
                          )),
                          (g.mutatedEvents = f),
                          n.component.isInteractionValid(g) ||
                            ((h = !0),
                            (d = null),
                            (f = null),
                            (g.mutatedEvents = c.createEmptyEventStore())))
                        : (u = null);
                  }
                  n.displayDrag(u, g),
                    h ? p.disableCursor() : p.enableCursor(),
                    t ||
                      (l === u && o.isHitsEqual(s, e) && (d = null),
                      n.dragging.setMirrorNeedsRevert(!d),
                      n.dragging.setMirrorIsVisible(
                        !e || !document.querySelector(".fc-mirror")
                      ),
                      (n.receivingCalendar = u),
                      (n.validMutation = d),
                      (n.mutatedRelevantEvents = f));
                }
              }),
              (this.handlePointerUp = function () {
                n.isDragging || n.cleanup();
              }),
              (this.handleDragEnd = function (e) {
                if (n.isDragging) {
                  var t = n.component.calendar,
                    r = n.component.view,
                    i = n.receivingCalendar,
                    o = n.eventRange.def,
                    a = n.eventRange.instance,
                    s = new h.default(t, o, a),
                    l = n.relevantEvents,
                    u = n.mutatedRelevantEvents,
                    d = n.hitDragging.finalHit;
                  if (
                    (n.clearDrag(),
                    t.publiclyTrigger("eventDragStop", [
                      {
                        el: n.subjectSeg.el,
                        event: s,
                        jsEvent: e.origEvent,
                        view: r,
                      },
                    ]),
                    n.validMutation)
                  ) {
                    if (i === t) {
                      t.dispatch({ type: "MERGE_EVENTS", eventStore: u });
                      for (
                        var c = {},
                          p = 0,
                          f = t.pluginSystem.hooks.eventDropTransformers;
                        p < f.length;
                        p++
                      ) {
                        var v = f[p];
                        g.__assign(c, v(n.validMutation, t));
                      }
                      g.__assign(c, {
                        el: e.subjectEl,
                        delta: n.validMutation.startDelta,
                        oldEvent: s,
                        event: new h.default(
                          t,
                          u.defs[o.defId],
                          a ? u.instances[a.instanceId] : null
                        ),
                        revert: function () {
                          t.dispatch({ type: "MERGE_EVENTS", eventStore: l });
                        },
                        jsEvent: e.origEvent,
                        view: r,
                      }),
                        t.publiclyTrigger("eventDrop", [c]);
                    } else if (i) {
                      t.publiclyTrigger("eventLeave", [
                        { draggedEl: e.subjectEl, event: s, view: r },
                      ]),
                        t.dispatch({
                          type: "REMOVE_EVENT_INSTANCES",
                          instances: n.mutatedRelevantEvents.instances,
                        }),
                        i.dispatch({
                          type: "MERGE_EVENTS",
                          eventStore: n.mutatedRelevantEvents,
                        }),
                        e.isTouch &&
                          i.dispatch({
                            type: "SELECT_EVENT",
                            eventInstanceId: a.instanceId,
                          });
                      var m = i.buildDatePointApi(d.dateSpan);
                      (m.draggedEl = e.subjectEl),
                        (m.jsEvent = e.origEvent),
                        (m.view = d.component),
                        i.publiclyTrigger("drop", [m]),
                        i.publiclyTrigger("eventReceive", [
                          {
                            draggedEl: e.subjectEl,
                            event: new h.default(
                              i,
                              u.defs[o.defId],
                              u.instances[a.instanceId]
                            ),
                            view: d.component,
                          },
                        ]);
                    }
                  } else t.publiclyTrigger("_noEventDrop");
                }
                n.cleanup();
              }),
              (this.component = t);
            var l = (this.dragging = new d.default(t.el));
            (l.pointer.selector = e.SELECTOR),
              (l.touchScrollAllowed = !1),
              (l.autoScroller.isEnabled = t.opt("dragScroll"));
            var v = (this.hitDragging = new o.default(
              this.dragging,
              s.default.componentHash
            ));
            (v.useSubjectCenter = t.useEventCenter),
              v.emitter.on("pointerdown", this.handlePointerDown),
              v.emitter.on("dragstart", this.handleDragStart),
              v.emitter.on("hitupdate", this.handleHitUpdate),
              v.emitter.on("pointerup", this.handlePointerUp),
              v.emitter.on("dragend", this.handleDragEnd);
          }
          return (
            (e.prototype.destroy = function () {
              this.dragging.destroy();
            }),
            (e.prototype.displayDrag = function (e, t) {
              var n = this.component.calendar,
                r = this.receivingCalendar;
              r &&
                r !== e &&
                (r === n
                  ? r.dispatch({
                      type: "SET_EVENT_DRAG",
                      state: {
                        affectedEvents: t.affectedEvents,
                        mutatedEvents: c.createEmptyEventStore(),
                        isEvent: !0,
                        origSeg: t.origSeg,
                      },
                    })
                  : r.dispatch({ type: "UNSET_EVENT_DRAG" })),
                e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
            }),
            (e.prototype.clearDrag = function () {
              var e = this.component.calendar,
                t = this.receivingCalendar;
              t && t.dispatch({ type: "UNSET_EVENT_DRAG" }),
                e !== t && e.dispatch({ type: "UNSET_EVENT_DRAG" });
            }),
            (e.prototype.cleanup = function () {
              (this.subjectSeg = null),
                (this.isDragging = !1),
                (this.eventRange = null),
                (this.relevantEvents = null),
                (this.receivingCalendar = null),
                (this.validMutation = null),
                (this.mutatedRelevantEvents = null);
            }),
            (e.SELECTOR = ".fc-draggable, .fc-resizable"),
            e
          );
        })();
      t.default = v;
    },
    function (e, t, n) {
      function r(e, t, n, r, i, o, a) {
        return new v.DateEnv({
          calendarSystem: "gregory",
          timeZone: t,
          timeZoneImpl: n,
          locale: g.getLocale(e),
          weekNumberCalculation: i,
          firstDay: r,
          weekLabel: o,
          cmdFormatter: a,
        });
      }
      function i(e) {
        return new (h.getThemeSystemClass(e.themeSystem || e.theme))(e);
      }
      function o(e) {
        var t = this.tryRerender.bind(this);
        return null != e && (t = c.debounce(t, e)), t;
      }
      function a(e) {
        return w.mapHash(e, function (e) {
          return e.ui;
        });
      }
      function s(e, t, n) {
        var r = { "": t };
        for (var i in e) {
          var o = e[i];
          o.sourceId && n[o.sourceId] && (r[i] = n[o.sourceId]);
        }
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = n(1),
        u = n(3),
        d = n(24),
        c = n(2),
        p = n(27),
        f = n(196),
        h = n(59),
        g = n(47),
        v = n(63),
        m = n(4),
        y = n(7),
        E = n(9),
        S = n(198),
        b = n(46),
        D = n(17),
        w = n(12),
        T = n(29),
        R = n(26),
        _ = n(142),
        C = n(16),
        M = n(14),
        P = n(25),
        I = n(45),
        O = n(153),
        H = n(157),
        k = n(37),
        x = n(159),
        z = n(1),
        N = (function () {
          function e(t, n) {
            var l = this;
            (this.buildDateEnv = D.memoize(r)),
              (this.buildTheme = D.memoize(i)),
              (this.buildEventUiSingleBase = D.memoize(
                this._buildEventUiSingleBase
              )),
              (this.buildSelectionConfig = D.memoize(
                this._buildSelectionConfig
              )),
              (this.buildEventUiBySource = D.memoizeOutput(a, w.isPropsEqual)),
              (this.buildEventUiBases = D.memoize(s)),
              (this.isRecentPointerDateSelect = !1),
              (this.actionQueue = []),
              (this.isReducing = !1),
              (this.needsRerender = !1),
              (this.needsFullRerender = !1),
              (this.isRendering = !1),
              (this.renderingPauseDepth = 0),
              (this.buildDelayedRerender = D.memoize(o)),
              (this.afterSizingTriggers = {}),
              (this.isViewUpdated = !1),
              (this.isDatesUpdated = !1),
              (this.isEventsUpdated = !1),
              (this.onDocumentPointerUp = function (e) {
                var t = l,
                  n = t.state,
                  r = t.documentPointer;
                if (!r.wasTouchScroll) {
                  if (n.dateSelection && !l.isRecentPointerDateSelect) {
                    var i = l.viewOpt("unselectAuto"),
                      o = l.viewOpt("unselectCancel");
                    !i || (i && u.elementClosest(r.downEl, o)) || l.unselect(e);
                  }
                  n.eventSelection &&
                    !u.elementClosest(r.downEl, O.default.SELECTOR) &&
                    l.dispatch({ type: "UNSELECT_EVENT" });
                }
                l.isRecentPointerDateSelect = !1;
              }),
              (this.el = t),
              (this.optionsManager = new f.default(n)),
              (this.pluginSystem = new k.PluginSystem());
            for (
              var d = e.defaultPlugins.concat(
                  this.optionsManager.computed.plugins || []
                ),
                c = 0,
                p = d;
              c < p.length;
              c++
            ) {
              var h = p[c];
              this.pluginSystem.add(h);
            }
            this.handleOptions(this.optionsManager.computed),
              this.publiclyTrigger("_init"),
              this.hydrate();
          }
          return (
            Object.defineProperty(e.prototype, "view", {
              get: function () {
                return this.component ? this.component.view : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.render = function () {
              this.component
                ? this.requestRerender(!0)
                : ((this.renderableEventStore = M.createEmptyEventStore()),
                  this.bindHandlers(),
                  this.executeRender());
            }),
            (e.prototype.destroy = function () {
              this.component &&
                (this.unbindHandlers(),
                this.component.destroy(),
                (this.component = null));
            }),
            (e.prototype.bindHandlers = function () {
              var e = this;
              this.removeNavLinkListener = d.listenBySelector(
                this.el,
                "click",
                "a[data-goto]",
                function (t, n) {
                  var r = n.getAttribute("data-goto");
                  r = r ? JSON.parse(r) : {};
                  var i = e.dateEnv.createMarker(r.date),
                    o = r.type,
                    a = e.viewOpt(
                      "navLink" + c.capitaliseFirstLetter(o) + "Click"
                    );
                  "function" == typeof a
                    ? a(i, t)
                    : ("string" == typeof a && (o = a), e.zoomTo(i, o));
                }
              );
              var t = (this.documentPointer = new I.default(document));
              (t.shouldIgnoreMove = !0),
                (t.shouldWatchScroll = !1),
                t.emitter.on("pointerup", this.onDocumentPointerUp),
                this.opt("handleWindowResize") &&
                  window.addEventListener(
                    "resize",
                    (this.windowResizeProxy = c.debounce(
                      this.windowResize.bind(this),
                      this.opt("windowResizeDelay")
                    ))
                  );
            }),
            (e.prototype.unbindHandlers = function () {
              this.removeNavLinkListener(),
                this.documentPointer.destroy(),
                this.windowResizeProxy &&
                  (window.removeEventListener("resize", this.windowResizeProxy),
                  (this.windowResizeProxy = null));
            }),
            (e.prototype.hydrate = function () {
              var e = this;
              this.state = this.buildInitialState();
              var t = this.opt("eventSources") || [],
                n = this.opt("events"),
                r = [];
              n && t.unshift(n);
              for (var i = 0, o = t; i < o.length; i++) {
                var a = o[i],
                  s = T.parseEventSource(a, this);
                s && r.push(s);
              }
              this.batchRendering(function () {
                e.dispatch({ type: "INIT" }),
                  e.dispatch({ type: "ADD_EVENT_SOURCES", sources: r }),
                  e.dispatch({
                    type: "SET_VIEW_TYPE",
                    viewType: e.opt("defaultView"),
                  });
              });
            }),
            (e.prototype.buildInitialState = function () {
              return {
                viewType: null,
                loadingLevel: 0,
                eventSourceLoadingLevel: 0,
                currentDate: this.getInitialDate(),
                dateProfile: null,
                eventSources: {},
                eventStore: M.createEmptyEventStore(),
                dateSelection: null,
                eventSelection: "",
                eventDrag: null,
                eventResize: null,
              };
            }),
            (e.prototype.dispatch = function (e) {
              if ((this.actionQueue.push(e), !this.isReducing)) {
                this.isReducing = !0;
                for (var t = this.state; this.actionQueue.length; )
                  this.state = this.reduce(
                    this.state,
                    this.actionQueue.shift(),
                    this
                  );
                var n = this.state;
                (this.isReducing = !1),
                  !t.loadingLevel && n.loadingLevel
                    ? this.publiclyTrigger("loading", [!0])
                    : t.loadingLevel &&
                      !n.loadingLevel &&
                      this.publiclyTrigger("loading", [!1]);
                var r = this.component && this.component.view;
                (t.eventStore !== n.eventStore || this.needsFullRerender) &&
                  t.eventStore &&
                  (this.isEventsUpdated = !0),
                  (t.dateProfile !== n.dateProfile || this.needsFullRerender) &&
                    (t.dateProfile &&
                      this.publiclyTrigger("datesDestroy", [
                        { view: r, el: r.el },
                      ]),
                    (this.isDatesUpdated = !0)),
                  (t.viewType !== n.viewType || this.needsFullRerender) &&
                    (t.viewType &&
                      this.publiclyTrigger("viewSkeletonDestroy", [
                        { view: r, el: r.el },
                      ]),
                    (this.isViewUpdated = !0)),
                  this.requestRerender();
              }
            }),
            (e.prototype.reduce = function (e, t, n) {
              return S.default(e, t, n);
            }),
            (e.prototype.requestRerender = function (e) {
              void 0 === e && (e = !1),
                (this.needsRerender = !0),
                (this.needsFullRerender = this.needsFullRerender || e),
                this.delayedRerender();
            }),
            (e.prototype.tryRerender = function () {
              this.component &&
                this.needsRerender &&
                !this.renderingPauseDepth &&
                !this.isRendering &&
                this.executeRender();
            }),
            (e.prototype.batchRendering = function (e) {
              this.renderingPauseDepth++,
                e(),
                this.renderingPauseDepth--,
                this.requestRerender();
            }),
            (e.prototype.executeRender = function () {
              var e = this.needsFullRerender;
              (this.needsRerender = !1),
                (this.needsFullRerender = !1),
                (this.isRendering = !0),
                this.renderComponent(e),
                (this.isRendering = !1),
                this.needsRerender && this.delayedRerender();
            }),
            (e.prototype.renderComponent = function (e) {
              var t = this,
                n = t.state,
                r = t.component,
                i = n.viewType,
                o = this.viewSpecs[i],
                a = e && r ? r.view.queryScroll() : null;
              if (!o) throw new Error('View type "' + i + '" is not valid');
              var s = (this.renderableEventStore =
                  n.eventSourceLoadingLevel &&
                  !this.opt("progressiveEventRendering")
                    ? this.renderableEventStore
                    : n.eventStore),
                u = this.buildEventUiSingleBase(o.options),
                d = this.buildEventUiBySource(n.eventSources),
                c = (this.eventUiBases = this.buildEventUiBases(s.defs, u, d));
              (!e && r) ||
                (r && (r.freezeHeight(), r.destroy()),
                (r = this.component =
                  new x.default(
                    {
                      calendar: this,
                      view: null,
                      dateEnv: this.dateEnv,
                      theme: this.theme,
                      options: this.optionsManager.computed,
                    },
                    this.el
                  ))),
                r.receiveProps(
                  l.__assign({}, n, {
                    viewSpec: o,
                    dateProfile: n.dateProfile,
                    dateProfileGenerator: this.dateProfileGenerators[i],
                    eventStore: s,
                    eventUiBases: c,
                    dateSelection: n.dateSelection,
                    eventSelection: n.eventSelection,
                    eventDrag: n.eventDrag,
                    eventResize: n.eventResize,
                  })
                ),
                a && r.view.applyScroll(a),
                this.isViewUpdated &&
                  ((this.isViewUpdated = !1),
                  this.publiclyTrigger("viewSkeletonRender", [
                    { view: r.view, el: r.view.el },
                  ])),
                this.isDatesUpdated &&
                  ((this.isDatesUpdated = !1),
                  this.publiclyTrigger("datesRender", [
                    { view: r.view, el: r.view.el },
                  ])),
                this.isEventsUpdated && (this.isEventsUpdated = !1),
                this.releaseAfterSizingTriggers();
            }),
            (e.prototype.setOption = function (e, t) {
              var n = this.dateEnv;
              this.optionsManager.add(e, t),
                this.handleOptions(this.optionsManager.computed),
                "height" === e || "contentHeight" === e || "aspectRatio" === e
                  ? this.resizeComponent()
                  : "timeZone" === e
                  ? this.dispatch({ type: "CHANGE_TIMEZONE", oldDateEnv: n })
                  : "defaultDate" === e ||
                    "defaultView" === e ||
                    /^(event|select)(Overlap|Constraint|Allow)$/.test(e) ||
                    ((this.needsFullRerender = !0),
                    this.dispatch({
                      type: "SET_VIEW_TYPE",
                      viewType: this.state.viewType,
                    }));
            }),
            (e.prototype.getOption = function (e) {
              return this.optionsManager.computed[e];
            }),
            (e.prototype.opt = function (e) {
              return this.optionsManager.computed[e];
            }),
            (e.prototype.viewOpt = function (e) {
              return this.viewOpts()[e];
            }),
            (e.prototype.viewOpts = function () {
              return this.viewSpecs[this.state.viewType].options;
            }),
            (e.prototype.handleOptions = function (e) {
              var t = this,
                n = this.pluginSystem.hooks;
              (this.defaultAllDayEventDuration = E.createDuration(
                e.defaultAllDayEventDuration
              )),
                (this.defaultTimedEventDuration = E.createDuration(
                  e.defaultTimedEventDuration
                )),
                (this.delayedRerender = this.buildDelayedRerender(
                  e.rerenderDelay
                )),
                (this.theme = this.buildTheme(e)),
                (this.dateEnv = this.buildDateEnv(
                  e.locale,
                  e.timeZone,
                  e.timeZoneImpl,
                  e.firstDay,
                  e.weekNumberCalculation,
                  e.weekLabel,
                  e.cmdFormatter
                )),
                (this.selectionConfig = this.buildSelectionConfig(e)),
                (this.viewSpecs = H.buildViewSpecs(
                  n.viewConfigs,
                  this.optionsManager,
                  n.viewSpecTransformers
                )),
                (this.dateProfileGenerators = w.mapHash(
                  this.viewSpecs,
                  function (e) {
                    return new e.class.prototype.dateProfileGeneratorClass(
                      e,
                      t
                    );
                  }
                ));
            }),
            (e.prototype._buildSelectionConfig = function (e) {
              return P.processScopedUiProps("select", e, this);
            }),
            (e.prototype._buildEventUiSingleBase = function (e) {
              return (
                e.editable && (e = l.__assign({}, e, { eventEditable: !0 })),
                P.processScopedUiProps("event", e, this)
              );
            }),
            (e.prototype.hasPublicHandlers = function (e) {
              return this.hasHandlers(e) || this.opt(e);
            }),
            (e.prototype.publiclyTrigger = function (e, t) {
              var n = this.opt(e);
              if ((this.triggerWith(e, this, t), n)) return n.apply(this, t);
            }),
            (e.prototype.publiclyTriggerAfterSizing = function (e, t) {
              var n = this.afterSizingTriggers;
              (n[e] || (n[e] = [])).push(t);
            }),
            (e.prototype.releaseAfterSizingTriggers = function () {
              var e = this.afterSizingTriggers;
              for (var t in e)
                for (var n = 0, r = e[t]; n < r.length; n++) {
                  var i = r[n];
                  this.publiclyTrigger(t, i);
                }
              this.afterSizingTriggers = {};
            }),
            (e.prototype.isValidViewType = function (e) {
              return Boolean(this.viewSpecs[e]);
            }),
            (e.prototype.changeView = function (e, t) {
              var n = null;
              t &&
                (t.start && t.end
                  ? (this.optionsManager.add("visibleRange", t),
                    this.handleOptions(this.optionsManager.computed))
                  : (n = this.dateEnv.createMarker(t))),
                this.unselect(),
                this.dispatch({
                  type: "SET_VIEW_TYPE",
                  viewType: e,
                  dateMarker: n,
                });
            }),
            (e.prototype.zoomTo = function (e, t) {
              var n;
              (t = t || "day"),
                (n = this.viewSpecs[t] || this.getUnitViewSpec(t)),
                this.unselect(),
                n
                  ? this.dispatch({
                      type: "SET_VIEW_TYPE",
                      viewType: n.type,
                      dateMarker: e,
                    })
                  : this.dispatch({ type: "SET_DATE", dateMarker: e });
            }),
            (e.prototype.getUnitViewSpec = function (e) {
              var t, n, r;
              t = this.component.header.viewsWithButtons;
              for (var i in this.viewSpecs) t.push(i);
              for (n = 0; n < t.length; n++)
                if ((r = this.viewSpecs[t[n]]) && r.singleUnit === e) return r;
            }),
            (e.prototype.getInitialDate = function () {
              var e = this.opt("defaultDate");
              return null != e ? this.dateEnv.createMarker(e) : this.getNow();
            }),
            (e.prototype.prev = function () {
              this.unselect(), this.dispatch({ type: "PREV" });
            }),
            (e.prototype.next = function () {
              this.unselect(), this.dispatch({ type: "NEXT" });
            }),
            (e.prototype.prevYear = function () {
              this.unselect(),
                this.dispatch({
                  type: "SET_DATE",
                  dateMarker: this.dateEnv.addYears(this.state.currentDate, -1),
                });
            }),
            (e.prototype.nextYear = function () {
              this.unselect(),
                this.dispatch({
                  type: "SET_DATE",
                  dateMarker: this.dateEnv.addYears(this.state.currentDate, 1),
                });
            }),
            (e.prototype.today = function () {
              this.unselect(),
                this.dispatch({ type: "SET_DATE", dateMarker: this.getNow() });
            }),
            (e.prototype.gotoDate = function (e) {
              this.unselect(),
                this.dispatch({
                  type: "SET_DATE",
                  dateMarker: this.dateEnv.createMarker(e),
                });
            }),
            (e.prototype.incrementDate = function (e) {
              var t = E.createDuration(e);
              t &&
                (this.unselect(),
                this.dispatch({
                  type: "SET_DATE",
                  dateMarker: this.dateEnv.add(this.state.currentDate, t),
                }));
            }),
            (e.prototype.getDate = function () {
              return this.dateEnv.toDate(this.state.currentDate);
            }),
            (e.prototype.formatDate = function (e, t) {
              var n = this.dateEnv;
              return n.format(n.createMarker(e), y.createFormatter(t));
            }),
            (e.prototype.formatRange = function (e, t, n) {
              var r = this.dateEnv;
              return r.formatRange(
                r.createMarker(e),
                r.createMarker(t),
                y.createFormatter(n, this.opt("defaultRangeSeparator")),
                n
              );
            }),
            (e.prototype.formatIso = function (e, t) {
              var n = this.dateEnv;
              return n.formatIso(n.createMarker(e), { omitTime: t });
            }),
            (e.prototype.windowResize = function (e) {
              e.target === window &&
                this.resizeComponent() &&
                this.publiclyTrigger("windowResize", [this.view]);
            }),
            (e.prototype.updateSize = function () {
              this.resizeComponent();
            }),
            (e.prototype.resizeComponent = function () {
              return (
                !(this.isResizing || !this.component) &&
                ((this.isResizing = !0),
                this.component.updateSize(!0),
                (this.isResizing = !1),
                !0)
              );
            }),
            (e.prototype.select = function (e, t) {
              var n;
              n =
                null == t
                  ? null != e.start
                    ? e
                    : { start: e, end: null }
                  : { start: e, end: t };
              var r = b.parseDateSpan(
                n,
                this.dateEnv,
                E.createDuration({ days: 1 })
              );
              r &&
                (this.dispatch({ type: "SELECT_DATES", selection: r }),
                this.triggerDateSelect(r));
            }),
            (e.prototype.unselect = function (e) {
              this.state.dateSelection &&
                (this.dispatch({ type: "UNSELECT_DATES" }),
                this.triggerDateUnselect(e));
            }),
            (e.prototype.triggerDateSelect = function (e, t) {
              var n = this.buildDateSpanApi(e);
              (n.jsEvent = t ? t.origEvent : null),
                (n.view = this.view),
                this.publiclyTrigger("select", [n]),
                t && (this.isRecentPointerDateSelect = !0);
            }),
            (e.prototype.triggerDateUnselect = function (e) {
              this.publiclyTrigger("unselect", [
                { jsEvent: e ? e.origEvent : null, view: this.view },
              ]);
            }),
            (e.prototype.triggerDateClick = function (e, t, n, r) {
              var i = this.buildDatePointApi(e);
              (i.dayEl = t),
                (i.jsEvent = r),
                (i.view = n),
                this.publiclyTrigger("dateClick", [i]);
            }),
            (e.prototype.buildDatePointApi = function (e) {
              for (
                var t = {},
                  n = 0,
                  r = this.pluginSystem.hooks.datePointTransforms;
                n < r.length;
                n++
              ) {
                var i = r[n];
                z.__assign(t, i(e, this));
              }
              return z.__assign(t, b.buildDatePointApi(e, this.dateEnv)), t;
            }),
            (e.prototype.buildDateSpanApi = function (e) {
              for (
                var t = {},
                  n = 0,
                  r = this.pluginSystem.hooks.dateSpanTransforms;
                n < r.length;
                n++
              ) {
                var i = r[n];
                z.__assign(t, i(e, this));
              }
              return z.__assign(t, b.buildDateSpanApi(e, this.dateEnv)), t;
            }),
            (e.prototype.getNow = function () {
              var e = this.opt("now");
              return (
                "function" == typeof e && (e = e()),
                null == e
                  ? this.dateEnv.createNowMarker()
                  : this.dateEnv.createMarker(e)
              );
            }),
            (e.prototype.getDefaultEventEnd = function (e, t) {
              var n = t;
              return (
                e
                  ? ((n = m.startOfDay(n)),
                    (n = this.dateEnv.add(n, this.defaultAllDayEventDuration)))
                  : (n = this.dateEnv.add(n, this.defaultTimedEventDuration)),
                n
              );
            }),
            (e.prototype.addEvent = function (e, t) {
              if (e instanceof C.default) {
                var n = e._def,
                  r = e._instance;
                return (
                  this.state.eventStore.defs[n.defId] ||
                    this.dispatch({
                      type: "ADD_EVENTS",
                      eventStore: M.eventTupleToStore({ def: n, instance: r }),
                    }),
                  e
                );
              }
              var i;
              if (t instanceof _.default) i = t.internalEventSource.sourceId;
              else if (null != t) {
                var o = this.getEventSourceById(t);
                if (!o)
                  return (
                    console.warn(
                      'Could not find an event source with ID "' + t + '"'
                    ),
                    null
                  );
                i = o.internalEventSource.sourceId;
              }
              var a = R.parseEvent(e, i, this);
              return a
                ? (this.dispatch({
                    type: "ADD_EVENTS",
                    eventStore: M.eventTupleToStore(a),
                  }),
                  new C.default(
                    this,
                    a.def,
                    a.def.recurringDef ? null : a.instance
                  ))
                : null;
            }),
            (e.prototype.getEventById = function (e) {
              var t = this.state.eventStore,
                n = t.defs,
                r = t.instances;
              e = String(e);
              for (var i in n) {
                var o = n[i];
                if (o.publicId === e) {
                  if (o.recurringDef) return new C.default(this, o, null);
                  for (var a in r) {
                    var s = r[a];
                    if (s.defId === o.defId) return new C.default(this, o, s);
                  }
                }
              }
              return null;
            }),
            (e.prototype.getEvents = function () {
              var e = this.state.eventStore,
                t = e.defs,
                n = e.instances,
                r = [];
              for (var i in n) {
                var o = n[i],
                  a = t[o.defId];
                r.push(new C.default(this, a, o));
              }
              return r;
            }),
            (e.prototype.removeAllEvents = function () {
              this.dispatch({ type: "REMOVE_ALL_EVENTS" });
            }),
            (e.prototype.rerenderEvents = function () {
              this.dispatch({ type: "RESET_EVENTS" });
            }),
            (e.prototype.getEventSources = function () {
              var e = this.state.eventSources,
                t = [];
              for (var n in e) t.push(new _.default(this, e[n]));
              return t;
            }),
            (e.prototype.getEventSourceById = function (e) {
              var t = this.state.eventSources;
              e = String(e);
              for (var n in t)
                if (t[n].publicId === e) return new _.default(this, t[n]);
              return null;
            }),
            (e.prototype.addEventSource = function (e) {
              if (e instanceof _.default)
                return (
                  this.state.eventSources[e.internalEventSource.sourceId] ||
                    this.dispatch({
                      type: "ADD_EVENT_SOURCES",
                      sources: [e.internalEventSource],
                    }),
                  e
                );
              var t = T.parseEventSource(e, this);
              return t
                ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [t] }),
                  new _.default(this, t))
                : null;
            }),
            (e.prototype.removeAllEventSources = function () {
              this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
            }),
            (e.prototype.refetchEvents = function () {
              this.dispatch({ type: "FETCH_EVENT_SOURCES" });
            }),
            (e.defaultPlugins = []),
            e
          );
        })();
      (t.default = N), p.default.mixInto(N);
    },
    function (e, t) {
      function n(e, t) {
        o[e] = t;
      }
      function r(e, t) {
        var n = o[e];
        return n ? new n(t) : null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
        function e(e) {
          this.name = e;
        }
        return e;
      })();
      t.NamedTimeZoneImpl = i;
      var o = {};
      (t.registerNamedTimeZoneImpl = n), (t.createNamedTimeZoneImpl = r);
    },
    function (e, t, n) {
      function r(e) {
        var t = null,
          n = !1,
          r = o.exec(e);
        r &&
          ((n = !r[1]),
          n
            ? (e += "T00:00:00Z")
            : (e =
                e.replace(a, function (e, n, r, i, o) {
                  return (
                    (t = n
                      ? 0
                      : (60 * parseInt(i, 10) + parseInt(o || 0, 10)) *
                        ("-" === r ? -1 : 1)),
                    ""
                  );
                }) + "Z"));
        var s = new Date(e);
        return i.isValidDate(s)
          ? { marker: s, isTimeUnspecified: n, timeZoneOffset: t }
          : null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(4),
        o = /^\s*\d{4}-\d\d-\d\d([T ]\d)?/,
        a = /(?:(Z)|([-+])(\d\d)(?::(\d\d))?)$/;
      t.parse = r;
    },
    function (e, t, n) {
      function r(e, t, n) {
        var r = d.parseViewConfigs(e),
          o = d.parseViewConfigs(t.overrides.views),
          s = a.compileViewDefs(r, o);
        return l.mapHash(s, function (e) {
          for (var r = i(e, o, t), a = 0, s = n; a < s.length; a++) {
            r = (0, s[a])(r);
          }
          return r;
        });
      }
      function i(e, t, n) {
        var r =
            e.overrides.duration ||
            e.defaults.duration ||
            n.dynamicOverrides.duration ||
            n.overrides.duration,
          i = null,
          a = "",
          l = "",
          d = {};
        if (r && (i = s.createDuration(r))) {
          var c = s.greatestDurationDenominator(i, !s.getWeeksFromInput(r));
          (a = c.unit),
            1 === c.value && ((l = a), (d = t[a] ? t[a].options : {}));
        }
        var p = function (t) {
          var n = t.buttonText || {},
            r = e.defaults.buttonTextKey;
          return null != r && null != n[r]
            ? n[r]
            : null != n[e.type]
            ? n[e.type]
            : null != n[l]
            ? n[l]
            : void 0;
        };
        return {
          type: e.type,
          class: e.class,
          duration: i,
          durationUnit: a,
          singleUnit: l,
          options: o.__assign(
            {},
            u.globalDefaults,
            e.defaults,
            n.dirDefaults,
            n.localeDefaults,
            n.overrides,
            d,
            e.overrides,
            n.dynamicOverrides
          ),
          buttonTextOverride:
            p(n.dynamicOverrides) || p(n.overrides) || e.overrides.buttonText,
          buttonTextDefault:
            p(n.localeDefaults) ||
            p(n.dirDefaults) ||
            e.defaults.buttonText ||
            p(u.globalDefaults) ||
            e.type,
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(1),
        a = n(158),
        s = n(9),
        l = n(12),
        u = n(36),
        d = n(200);
      t.buildViewSpecs = r;
    },
    function (e, t, n) {
      function r(e, t) {
        var n,
          r = {};
        for (n in e) i(n, r, e, t);
        for (n in t) i(n, r, e, t);
        return r;
      }
      function i(e, t, n, r) {
        if (t[e]) return t[e];
        var i = o(e, t, n, r);
        return i && (t[e] = i), i;
      }
      function o(e, t, n, r) {
        var o = n[e],
          l = r[e],
          u = function (e) {
            return o && null !== o[e] ? o[e] : l && null !== l[e] ? l[e] : null;
          },
          d = u("class"),
          c = u("superType");
        !c && d && (c = a(d, r) || a(d, n));
        var p = c ? i(c, t, n, r) : null;
        return (
          !d && p && (d = p.class),
          d
            ? {
                type: e,
                class: d,
                defaults: s.__assign(
                  {},
                  p ? p.defaults : {},
                  o ? o.options : {}
                ),
                overrides: s.__assign(
                  {},
                  p ? p.overrides : {},
                  l ? l.options : {}
                ),
              }
            : null
        );
      }
      function a(e, t) {
        var n = Object.getPrototypeOf(e.prototype);
        for (var r in t) {
          var i = t[r];
          if (i.class && i.class.prototype === n) return r;
        }
        return "";
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = n(1);
      t.compileViewDefs = r;
    },
    function (e, t, n) {
      function r(e, t) {
        var n;
        return (
          (n = /^(year|month)$/.test(e.currentRangeUnit)
            ? e.currentRange
            : e.activeRange),
          this.dateEnv.formatRange(
            n.start,
            n.end,
            h.createFormatter(t.titleFormat || i(e), t.titleRangeSeparator),
            { isEndExclusive: e.isRangeAllDay }
          )
        );
      }
      function i(e) {
        var t = e.currentRangeUnit;
        if ("year" === t) return { year: "numeric" };
        if ("month" === t) return { year: "numeric", month: "long" };
        var n = g.diffWholeDays(e.currentRange.start, e.currentRange.end);
        return null !== n && n > 1
          ? { year: "numeric", month: "short", day: "numeric" }
          : { year: "numeric", month: "long", day: "numeric" };
      }
      function o(e) {
        return e.map(function (e) {
          return new e();
        });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(1),
        s = n(34),
        l = n(201),
        u = n(3),
        d = n(8),
        c = n(144),
        p = n(17),
        f = n(15),
        h = n(7),
        g = n(4),
        v = n(20),
        m = n(1),
        y = (function (e) {
          function t(t, n) {
            var i = e.call(this, t) || this;
            (i._renderToolbars = v.memoizeRendering(i.renderToolbars)),
              (i.buildViewPropTransformers = p.memoize(o)),
              (i.el = n),
              u.prependToElement(
                n,
                (i.contentEl = u.createElement("div", {
                  className: "fc-view-container",
                }))
              );
            for (
              var a = i.calendar,
                s = 0,
                l = a.pluginSystem.hooks.viewContainerModifiers;
              s < l.length;
              s++
            ) {
              (0, l[s])(i.contentEl, a);
            }
            return (
              i.toggleElClassNames(!0),
              (i.computeTitle = p.memoize(r)),
              (i.parseBusinessHours = p.memoize(function (e) {
                return c.parseBusinessHours(e, i.calendar);
              })),
              i
            );
          }
          return (
            a.__extends(t, e),
            (t.prototype.destroy = function () {
              this.header && this.header.destroy(),
                this.footer && this.footer.destroy(),
                this.view && this.view.destroy(),
                u.removeElement(this.contentEl),
                this.toggleElClassNames(!1),
                e.prototype.destroy.call(this);
            }),
            (t.prototype.toggleElClassNames = function (e) {
              var t = this.el.classList,
                n = "fc-" + this.opt("dir"),
                r = this.theme.getClass("widget");
              e
                ? (t.add("fc"), t.add(n), t.add(r))
                : (t.remove("fc"), t.remove(n), t.remove(r));
            }),
            (t.prototype.render = function (e) {
              this.freezeHeight();
              var t = this.computeTitle(e.dateProfile, e.viewSpec.options);
              this._renderToolbars(
                e.viewSpec,
                e.dateProfile,
                e.dateProfileGenerator,
                t
              ),
                this.renderView(e, t),
                this.updateSize(),
                this.thawHeight();
            }),
            (t.prototype.renderToolbars = function (e, t, n, r) {
              var i = this.opt("header"),
                o = this.opt("footer"),
                s = this.calendar.getNow(),
                c = n.build(s),
                p = n.buildPrev(t),
                f = n.buildNext(t),
                h = {
                  title: r,
                  activeButton: e.type,
                  isTodayEnabled:
                    c.isValid && !d.rangeContainsMarker(t.currentRange, s),
                  isPrevEnabled: p.isValid,
                  isNextEnabled: f.isValid,
                };
              i
                ? (this.header ||
                    ((this.header = new l.default(
                      this.context,
                      "fc-header-toolbar"
                    )),
                    u.prependToElement(this.el, this.header.el)),
                  this.header.receiveProps(a.__assign({ layout: i }, h)))
                : this.header && (this.header.destroy(), (this.header = null)),
                o
                  ? (this.footer ||
                      ((this.footer = new l.default(
                        this.context,
                        "fc-footer-toolbar"
                      )),
                      u.appendToElement(this.el, this.footer.el)),
                    this.footer.receiveProps(a.__assign({ layout: o }, h)))
                  : this.footer &&
                    (this.footer.destroy(), (this.footer = null));
            }),
            (t.prototype.renderView = function (e, t) {
              var n = this.view,
                r = e.viewSpec,
                i = e.dateProfileGenerator;
              n && n.viewSpec === r
                ? n.addScroll(n.queryScroll())
                : (n && n.destroy(),
                  (n = this.view =
                    new r.class(
                      {
                        calendar: this.calendar,
                        view: null,
                        dateEnv: this.dateEnv,
                        theme: this.theme,
                        options: r.options,
                      },
                      r,
                      i,
                      this.contentEl
                    ))),
                (n.title = t);
              for (
                var o = {
                    dateProfile: e.dateProfile,
                    businessHours: this.parseBusinessHours(
                      r.options.businessHours
                    ),
                    eventStore: e.eventStore,
                    eventUiBases: e.eventUiBases,
                    dateSelection: e.dateSelection,
                    eventSelection: e.eventSelection,
                    eventDrag: e.eventDrag,
                    eventResize: e.eventResize,
                  },
                  a = this.buildViewPropTransformers(
                    this.calendar.pluginSystem.hooks.viewPropsTransformers
                  ),
                  s = 0,
                  l = a;
                s < l.length;
                s++
              ) {
                var u = l[s];
                m.__assign(o, u.transform(o, r, e, n));
              }
              n.receiveProps(o);
            }),
            (t.prototype.updateSize = function (e) {
              void 0 === e && (e = !1);
              var t = this.view;
              e && t.addScroll(t.queryScroll()),
                (e || null == this.isHeightAuto) && this.computeHeightVars(),
                t.updateSize(e, this.viewHeight, this.isHeightAuto),
                t.updateNowIndicator(),
                t.popScroll();
            }),
            (t.prototype.computeHeightVars = function () {
              var e = this.calendar,
                t = e.opt("height"),
                n = e.opt("contentHeight");
              (this.isHeightAuto = "auto" === t || "auto" === n),
                (this.viewHeight =
                  "number" == typeof n
                    ? n
                    : "function" == typeof n
                    ? n()
                    : "number" == typeof t
                    ? t - this.queryToolbarsHeight()
                    : "function" == typeof t
                    ? t() - this.queryToolbarsHeight()
                    : "parent" === t
                    ? this.el.parentNode.offsetHeight -
                      this.queryToolbarsHeight()
                    : Math.round(
                        this.contentEl.offsetWidth /
                          Math.max(this.opt("aspectRatio"), 0.5)
                      ));
            }),
            (t.prototype.queryToolbarsHeight = function () {
              var e = 0;
              return (
                this.header && (e += f.computeHeightAndMargins(this.header.el)),
                this.footer && (e += f.computeHeightAndMargins(this.footer.el)),
                e
              );
            }),
            (t.prototype.freezeHeight = function () {
              u.applyStyle(this.el, {
                height: this.el.offsetHeight,
                overflow: "hidden",
              });
            }),
            (t.prototype.thawHeight = function () {
              u.applyStyle(this.el, { height: "", overflow: "" });
            }),
            t
          );
        })(s.default);
      t.default = y;
    },
    function (e, t, n) {
      function r(e, t) {
        var n = new s.default(e.renderRange, t);
        return new l.default(n, !1);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1),
        o = n(161),
        a = n(167),
        s = n(66),
        l = n(67),
        u = n(169),
        d = n(69),
        c = n(17),
        p = (function (e) {
          function t(t, n, i, o) {
            var s = e.call(this, t, n, i, o) || this;
            return (
              (s.buildDayTable = c.memoize(r)),
              s.opt("columnHeader") &&
                (s.header = new a.default(
                  s.context,
                  s.el.querySelector(".fc-head-container")
                )),
              (s.simpleTimeGrid = new u.default(s.context, s.timeGrid)),
              s.dayGrid &&
                (s.simpleDayGrid = new d.default(s.context, s.dayGrid)),
              s
            );
          }
          return (
            i.__extends(t, e),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this),
                this.header && this.header.destroy(),
                this.simpleTimeGrid.destroy(),
                this.simpleDayGrid && this.simpleDayGrid.destroy();
            }),
            (t.prototype.render = function (t) {
              e.prototype.render.call(this, t);
              var n = this.props.dateProfile,
                r = this.buildDayTable(n, this.dateProfileGenerator),
                o = this.splitter.splitProps(t);
              this.header &&
                this.header.receiveProps({
                  dateProfile: n,
                  dates: r.headerDates,
                  datesRepDistinctDays: !0,
                  renderIntroHtml: this.renderHeadIntroHtml,
                }),
                this.simpleTimeGrid.receiveProps(
                  i.__assign({}, o.timed, { dateProfile: n, dayTable: r })
                ),
                this.simpleDayGrid &&
                  this.simpleDayGrid.receiveProps(
                    i.__assign({}, o.allDay, {
                      dateProfile: n,
                      dayTable: r,
                      nextDayThreshold: this.nextDayThreshold,
                      isRigid: !1,
                    })
                  );
            }),
            (t.prototype.renderNowIndicator = function (e) {
              this.simpleTimeGrid.renderNowIndicator(e);
            }),
            t
          );
        })(o.default);
      (t.default = p), (t.buildDayTable = r);
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(11),
        o = n(3),
        a = n(2),
        s = n(44),
        l = n(49),
        u = n(162),
        d = n(65),
        c = n(9),
        p = n(7),
        f = n(21),
        h = n(4),
        g = n(208),
        v = p.createFormatter({ week: "short" }),
        m = (function (e) {
          function t(t, n, r, a) {
            var l = e.call(this, t, n, r, a) || this;
            (l.splitter = new g.default()),
              (l.renderHeadIntroHtml = function () {
                var e,
                  t = l,
                  n = t.theme,
                  r = t.dateEnv,
                  o = l.props.dateProfile.renderRange,
                  a = h.diffDays(o.start, o.end);
                return l.opt("weekNumbers")
                  ? ((e = r.format(o.start, v)),
                    '<th class="fc-axis fc-week-number ' +
                      n.getClass("widgetHeader") +
                      '" ' +
                      l.axisStyleAttr() +
                      ">" +
                      f.buildGotoAnchorHtml(
                        l,
                        { date: o.start, type: "week", forceOff: a > 1 },
                        i.htmlEscape(e)
                      ) +
                      "</th>")
                  : '<th class="fc-axis ' +
                      n.getClass("widgetHeader") +
                      '" ' +
                      l.axisStyleAttr() +
                      "></th>";
              }),
              (l.renderTimeGridBgIntroHtml = function () {
                return (
                  '<td class="fc-axis ' +
                  l.theme.getClass("widgetContent") +
                  '" ' +
                  l.axisStyleAttr() +
                  "></td>"
                );
              }),
              (l.renderTimeGridIntroHtml = function () {
                return '<td class="fc-axis" ' + l.axisStyleAttr() + "></td>";
              }),
              (l.renderDayGridBgIntroHtml = function () {
                return (
                  '<td class="fc-axis ' +
                  l.theme.getClass("widgetContent") +
                  '" ' +
                  l.axisStyleAttr() +
                  "><span>" +
                  f.getAllDayHtml(l) +
                  "</span></td>"
                );
              }),
              (l.renderDayGridIntroHtml = function () {
                return '<td class="fc-axis" ' + l.axisStyleAttr() + "></td>";
              }),
              l.el.classList.add("fc-agenda-view"),
              (l.el.innerHTML = l.renderSkeletonHtml()),
              (l.scroller = new s.default("hidden", "auto"));
            var c = l.scroller.el;
            l.el.querySelector(".fc-body > tr > td").appendChild(c),
              c.classList.add("fc-time-grid-container");
            var p = o.createElement("div", { className: "fc-time-grid" });
            return (
              c.appendChild(p),
              (l.timeGrid = new u.default(l.context, p, {
                renderBgIntroHtml: l.renderTimeGridBgIntroHtml,
                renderIntroHtml: l.renderTimeGridIntroHtml,
              })),
              l.opt("allDaySlot") &&
                ((l.dayGrid = new d.default(
                  l.context,
                  l.el.querySelector(".fc-day-grid"),
                  {
                    renderNumberIntroHtml: l.renderDayGridIntroHtml,
                    renderBgIntroHtml: l.renderDayGridBgIntroHtml,
                    renderIntroHtml: l.renderDayGridIntroHtml,
                    colWeekNumbersVisible: !1,
                    cellWeekNumbersVisible: !1,
                  }
                )),
                (l.dayGrid.bottomCoordPadding =
                  l.el.querySelector(".fc-divider").offsetHeight)),
              l
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this),
                this.timeGrid.destroy(),
                this.dayGrid && this.dayGrid.destroy(),
                this.scroller.destroy();
            }),
            (t.prototype.renderSkeletonHtml = function () {
              var e = this.theme;
              return (
                '<table class="' +
                e.getClass("tableGrid") +
                '">' +
                (this.opt("columnHeader")
                  ? '<thead class="fc-head"><tr><td class="fc-head-container ' +
                    e.getClass("widgetHeader") +
                    '">&nbsp;</td></tr></thead>'
                  : "") +
                '<tbody class="fc-body"><tr><td class="' +
                e.getClass("widgetContent") +
                '">' +
                (this.opt("allDaySlot")
                  ? '<div class="fc-day-grid"></div><hr class="fc-divider ' +
                    e.getClass("widgetHeader") +
                    '" />'
                  : "") +
                "</td></tr></tbody></table>"
              );
            }),
            (t.prototype.getNowIndicatorUnit = function () {
              return this.timeGrid.getNowIndicatorUnit();
            }),
            (t.prototype.unrenderNowIndicator = function () {
              this.timeGrid.unrenderNowIndicator();
            }),
            (t.prototype.updateSize = function (t, n, r) {
              e.prototype.updateSize.call(this, t, n, r),
                this.timeGrid.updateSize(t),
                this.dayGrid && this.dayGrid.updateSize(t);
            }),
            (t.prototype.updateBaseSize = function (e, t, n) {
              var r,
                i,
                s,
                l = this;
              if (
                ((this.axisWidth = a.matchCellWidths(
                  o.findElements(this.el, ".fc-axis")
                )),
                !this.timeGrid.colEls)
              )
                return void (
                  n ||
                  ((i = this.computeScrollerHeight(t)),
                  this.scroller.setHeight(i))
                );
              var u = o.findElements(this.el, ".fc-row").filter(function (e) {
                return !l.scroller.el.contains(e);
              });
              (this.timeGrid.bottomRuleEl.style.display = "none"),
                this.scroller.clear(),
                u.forEach(a.uncompensateScroll),
                this.dayGrid &&
                  (this.dayGrid.removeSegPopover(),
                  (r = this.opt("eventLimit")),
                  r && "number" != typeof r && (r = 5),
                  r && this.dayGrid.limitRows(r)),
                n ||
                  ((i = this.computeScrollerHeight(t)),
                  this.scroller.setHeight(i),
                  (s = this.scroller.getScrollbarWidths()),
                  (s.left || s.right) &&
                    (u.forEach(function (e) {
                      a.compensateScroll(e, s);
                    }),
                    (i = this.computeScrollerHeight(t)),
                    this.scroller.setHeight(i)),
                  this.scroller.lockOverflow(s),
                  this.timeGrid.getTotalSlatHeight() < i &&
                    (this.timeGrid.bottomRuleEl.style.display = ""));
            }),
            (t.prototype.computeScrollerHeight = function (e) {
              return e - a.subtractInnerElHeight(this.el, this.scroller.el);
            }),
            (t.prototype.computeInitialDateScroll = function () {
              var e = c.createDuration(this.opt("scrollTime")),
                t = this.timeGrid.computeTimeTop(e.milliseconds);
              return (t = Math.ceil(t)), t && t++, { top: t };
            }),
            (t.prototype.queryDateScroll = function () {
              return { top: this.scroller.getScrollTop() };
            }),
            (t.prototype.applyDateScroll = function (e) {
              void 0 !== e.top && this.scroller.setScrollTop(e.top);
            }),
            (t.prototype.axisStyleAttr = function () {
              return null != this.axisWidth
                ? 'style="width:' + this.axisWidth + 'px"'
                : "";
            }),
            t
          );
        })(l.default);
      (t.default = m), (m.prototype.usesMinMaxTime = !0);
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(11),
        o = n(3),
        a = n(60),
        s = n(163),
        l = n(202),
        u = n(203),
        d = n(9),
        c = n(4),
        p = n(7),
        f = n(22),
        h = n(164),
        g = n(20),
        v = [
          { hours: 1 },
          { minutes: 30 },
          { minutes: 15 },
          { seconds: 30 },
          { seconds: 15 },
        ],
        m = (function (e) {
          function t(t, n, r) {
            var i = e.call(this, t, n) || this;
            (i.isSlatSizesDirty = !1),
              (i.isColSizesDirty = !1),
              (i.renderSlats = g.memoizeRendering(i._renderSlats));
            var o = (i.eventRenderer = new s.default(i)),
              a = (i.fillRenderer = new u.default(i));
            i.mirrorRenderer = new l.default(i);
            var d = (i.renderColumns = g.memoizeRendering(
              i._renderColumns,
              i._unrenderColumns
            ));
            return (
              (i.renderBusinessHours = g.memoizeRendering(
                a.renderSegs.bind(a, "businessHours"),
                a.unrender.bind(a, "businessHours"),
                [d]
              )),
              (i.renderDateSelection = g.memoizeRendering(
                i._renderDateSelection,
                i._unrenderDateSelection,
                [d]
              )),
              (i.renderFgEvents = g.memoizeRendering(
                o.renderSegs.bind(o),
                o.unrender.bind(o),
                [d]
              )),
              (i.renderBgEvents = g.memoizeRendering(
                a.renderSegs.bind(a, "bgEvent"),
                a.unrender.bind(a, "bgEvent"),
                [d]
              )),
              (i.renderEventSelection = g.memoizeRendering(
                o.selectByInstanceId.bind(o),
                o.unselectByInstanceId.bind(o),
                [i.renderFgEvents]
              )),
              (i.renderEventDrag = g.memoizeRendering(
                i._renderEventDrag,
                i._unrenderEventDrag,
                [d]
              )),
              (i.renderEventResize = g.memoizeRendering(
                i._renderEventResize,
                i._unrenderEventResize,
                [d]
              )),
              i.processOptions(),
              (n.innerHTML =
                '<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider ' +
                i.theme.getClass("widgetHeader") +
                '" style="display:none" />'),
              (i.rootBgContainerEl = n.querySelector(".fc-bg")),
              (i.slatContainerEl = n.querySelector(".fc-slats")),
              (i.bottomRuleEl = n.querySelector(".fc-divider")),
              (i.renderProps = r),
              i
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.processOptions = function () {
              var e,
                t,
                n = this.opt("slotDuration"),
                r = this.opt("snapDuration");
              (n = d.createDuration(n)),
                (r = r ? d.createDuration(r) : n),
                (e = d.wholeDivideDurations(n, r)),
                null === e && ((r = n), (e = 1)),
                (this.slotDuration = n),
                (this.snapDuration = r),
                (this.snapsPerSlot = e),
                (t = this.opt("slotLabelFormat")),
                Array.isArray(t) && (t = t[t.length - 1]),
                (this.labelFormat = p.createFormatter(
                  t || {
                    hour: "numeric",
                    minute: "2-digit",
                    omitZeroMinute: !0,
                    meridiem: "short",
                  }
                )),
                (t = this.opt("slotLabelInterval")),
                (this.labelInterval = t
                  ? d.createDuration(t)
                  : this.computeLabelInterval(n));
            }),
            (t.prototype.computeLabelInterval = function (e) {
              var t, n, r;
              for (t = v.length - 1; t >= 0; t--)
                if (
                  ((n = d.createDuration(v[t])),
                  null !== (r = d.wholeDivideDurations(n, e)) && r > 1)
                )
                  return n;
              return e;
            }),
            (t.prototype.render = function (e) {
              var t = e.cells;
              (this.colCnt = t.length),
                this.renderSlats(e.dateProfile),
                this.renderColumns(e.cells, e.dateProfile),
                this.renderBusinessHours(e.businessHourSegs),
                this.renderDateSelection(e.dateSelectionSegs),
                this.renderFgEvents(e.fgEventSegs),
                this.renderBgEvents(e.bgEventSegs),
                this.renderEventSelection(e.eventSelection),
                this.renderEventDrag(e.eventDrag),
                this.renderEventResize(e.eventResize);
            }),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this),
                this.renderSlats.unrender(),
                this.renderColumns.unrender();
            }),
            (t.prototype.updateSize = function (e) {
              var t = this,
                n = t.fillRenderer,
                r = t.eventRenderer,
                i = t.mirrorRenderer;
              (e || this.isSlatSizesDirty) &&
                (this.buildSlatPositions(), (this.isSlatSizesDirty = !1)),
                (e || this.isColSizesDirty) &&
                  (this.buildColPositions(), (this.isColSizesDirty = !1)),
                n.computeSizes(e),
                r.computeSizes(e),
                i.computeSizes(e),
                n.assignSizes(e),
                r.assignSizes(e),
                i.assignSizes(e);
            }),
            (t.prototype._renderSlats = function (e) {
              var t = this.theme;
              (this.slatContainerEl.innerHTML =
                '<table class="' +
                t.getClass("tableGrid") +
                '">' +
                this.renderSlatRowHtml(e) +
                "</table>"),
                (this.slatEls = o.findElements(this.slatContainerEl, "tr")),
                (this.slatPositions = new a.default(
                  this.el,
                  this.slatEls,
                  !1,
                  !0
                )),
                (this.isSlatSizesDirty = !0);
            }),
            (t.prototype.renderSlatRowHtml = function (e) {
              for (
                var t,
                  n,
                  r,
                  o = this,
                  a = o.dateEnv,
                  s = o.theme,
                  l = o.isRtl,
                  u = "",
                  f = c.startOfDay(e.renderRange.start),
                  h = e.minTime,
                  g = d.createDuration(0);
                d.asRoughMs(h) < d.asRoughMs(e.maxTime);

              )
                (t = a.add(f, h)),
                  (n = null !== d.wholeDivideDurations(g, this.labelInterval)),
                  (r =
                    '<td class="fc-axis fc-time ' +
                    s.getClass("widgetContent") +
                    '">' +
                    (n
                      ? "<span>" +
                        i.htmlEscape(a.format(t, this.labelFormat)) +
                        "</span>"
                      : "") +
                    "</td>"),
                  (u +=
                    '<tr data-time="' +
                    p.formatIsoTimeString(t) +
                    '"' +
                    (n ? "" : ' class="fc-minor"') +
                    ">" +
                    (l ? "" : r) +
                    '<td class="' +
                    s.getClass("widgetContent") +
                    '"></td>' +
                    (l ? r : "") +
                    "</tr>"),
                  (h = d.addDurations(h, this.slotDuration)),
                  (g = d.addDurations(g, this.slotDuration));
              return u;
            }),
            (t.prototype._renderColumns = function (e, t) {
              var n = this.theme,
                r = new h.default(this.context);
              (this.rootBgContainerEl.innerHTML =
                '<table class="' +
                n.getClass("tableGrid") +
                '">' +
                r.renderHtml({
                  cells: e,
                  dateProfile: t,
                  renderIntroHtml: this.renderProps.renderBgIntroHtml,
                }) +
                "</table>"),
                (this.colEls = o.findElements(
                  this.el,
                  ".fc-day, .fc-disabled-day"
                )),
                this.isRtl && this.colEls.reverse(),
                (this.colPositions = new a.default(
                  this.el,
                  this.colEls,
                  !0,
                  !1
                )),
                this.renderContentSkeleton(),
                (this.isColSizesDirty = !0);
            }),
            (t.prototype._unrenderColumns = function () {
              this.unrenderContentSkeleton();
            }),
            (t.prototype.renderContentSkeleton = function () {
              var e,
                t = [];
              t.push(this.renderProps.renderIntroHtml());
              for (var n = 0; n < this.colCnt; n++)
                t.push(
                  '<td><div class="fc-content-col"><div class="fc-event-container fc-mirror-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>'
                );
              this.isRtl && t.reverse(),
                (e = this.contentSkeletonEl =
                  o.htmlToElement(
                    '<div class="fc-content-skeleton"><table><tr>' +
                      t.join("") +
                      "</tr></table></div>"
                  )),
                (this.colContainerEls = o.findElements(e, ".fc-content-col")),
                (this.mirrorContainerEls = o.findElements(
                  e,
                  ".fc-mirror-container"
                )),
                (this.fgContainerEls = o.findElements(
                  e,
                  ".fc-event-container:not(.fc-mirror-container)"
                )),
                (this.bgContainerEls = o.findElements(
                  e,
                  ".fc-bgevent-container"
                )),
                (this.highlightContainerEls = o.findElements(
                  e,
                  ".fc-highlight-container"
                )),
                (this.businessContainerEls = o.findElements(
                  e,
                  ".fc-business-container"
                )),
                this.isRtl &&
                  (this.colContainerEls.reverse(),
                  this.mirrorContainerEls.reverse(),
                  this.fgContainerEls.reverse(),
                  this.bgContainerEls.reverse(),
                  this.highlightContainerEls.reverse(),
                  this.businessContainerEls.reverse()),
                this.el.appendChild(e);
            }),
            (t.prototype.unrenderContentSkeleton = function () {
              o.removeElement(this.contentSkeletonEl);
            }),
            (t.prototype.groupSegsByCol = function (e) {
              var t,
                n = [];
              for (t = 0; t < this.colCnt; t++) n.push([]);
              for (t = 0; t < e.length; t++) n[e[t].col].push(e[t]);
              return n;
            }),
            (t.prototype.attachSegsByCol = function (e, t) {
              var n, r, i;
              for (n = 0; n < this.colCnt; n++)
                for (r = e[n], i = 0; i < r.length; i++)
                  t[n].appendChild(r[i].el);
            }),
            (t.prototype.getNowIndicatorUnit = function () {
              return "minute";
            }),
            (t.prototype.renderNowIndicator = function (e, t) {
              if (this.colContainerEls) {
                var n,
                  r = this.computeDateTop(t),
                  i = [];
                for (n = 0; n < e.length; n++) {
                  var a = o.createElement("div", {
                    className: "fc-now-indicator fc-now-indicator-line",
                  });
                  (a.style.top = r + "px"),
                    this.colContainerEls[e[n].col].appendChild(a),
                    i.push(a);
                }
                if (e.length > 0) {
                  var s = o.createElement("div", {
                    className: "fc-now-indicator fc-now-indicator-arrow",
                  });
                  (s.style.top = r + "px"),
                    this.contentSkeletonEl.appendChild(s),
                    i.push(s);
                }
                this.nowIndicatorEls = i;
              }
            }),
            (t.prototype.unrenderNowIndicator = function () {
              this.nowIndicatorEls &&
                (this.nowIndicatorEls.forEach(o.removeElement),
                (this.nowIndicatorEls = null));
            }),
            (t.prototype.getTotalSlatHeight = function () {
              return this.slatContainerEl.offsetHeight;
            }),
            (t.prototype.computeDateTop = function (e, t) {
              return (
                t || (t = c.startOfDay(e)),
                this.computeTimeTop(e.valueOf() - t.valueOf())
              );
            }),
            (t.prototype.computeTimeTop = function (e) {
              var t,
                n,
                r = this.slatEls.length,
                i = this.props.dateProfile,
                o =
                  (e - d.asRoughMs(i.minTime)) / d.asRoughMs(this.slotDuration);
              return (
                (o = Math.max(0, o)),
                (o = Math.min(r, o)),
                (t = Math.floor(o)),
                (t = Math.min(t, r - 1)),
                (n = o - t),
                this.slatPositions.tops[t] + this.slatPositions.getHeight(t) * n
              );
            }),
            (t.prototype.computeSegVerticals = function (e) {
              var t,
                n,
                r,
                i = this.opt("agendaEventMinHeight");
              for (t = 0; t < e.length; t++)
                (n = e[t]),
                  (r = this.props.cells[n.col].date),
                  (n.top = this.computeDateTop(n.start, r)),
                  (n.bottom = Math.max(
                    n.top + i,
                    this.computeDateTop(n.end, r)
                  ));
            }),
            (t.prototype.assignSegVerticals = function (e) {
              var t, n;
              for (t = 0; t < e.length; t++)
                (n = e[t]), o.applyStyle(n.el, this.generateSegVerticalCss(n));
            }),
            (t.prototype.generateSegVerticalCss = function (e) {
              return { top: e.top, bottom: -e.bottom };
            }),
            (t.prototype.buildColPositions = function () {
              this.colPositions.build();
            }),
            (t.prototype.buildSlatPositions = function () {
              this.slatPositions.build();
            }),
            (t.prototype.positionToHit = function (e, t) {
              var n = this,
                r = n.dateEnv,
                i = n.snapsPerSlot,
                o = n.slatPositions,
                a = n.colPositions,
                s = a.leftToIndex(e),
                l = o.topToIndex(t);
              if (null != s && null != l) {
                var u = o.tops[l],
                  c = o.getHeight(l),
                  p = (t - u) / c,
                  f = Math.floor(p * i),
                  h = l * i + f,
                  g = this.props.cells[s].date,
                  v = d.addDurations(
                    this.props.dateProfile.minTime,
                    d.multiplyDuration(this.snapDuration, h)
                  ),
                  m = r.add(g, v);
                return {
                  col: s,
                  dateSpan: {
                    range: { start: m, end: r.add(m, this.snapDuration) },
                    allDay: !1,
                  },
                  dayEl: this.colEls[s],
                  relativeRect: {
                    left: a.lefts[s],
                    right: a.rights[s],
                    top: u,
                    bottom: u + c,
                  },
                };
              }
            }),
            (t.prototype._renderEventDrag = function (e) {
              e &&
                (this.eventRenderer.hideByHash(e.affectedInstances),
                e.isEvent
                  ? this.mirrorRenderer.renderSegs(e.segs, {
                      isDragging: !0,
                      sourceSeg: e.sourceSeg,
                    })
                  : this.fillRenderer.renderSegs("highlight", e.segs));
            }),
            (t.prototype._unrenderEventDrag = function (e) {
              e &&
                (this.eventRenderer.showByHash(e.affectedInstances),
                this.mirrorRenderer.unrender(e.segs, {
                  isDragging: !0,
                  sourceSeg: e.sourceSeg,
                }),
                this.fillRenderer.unrender("highlight"));
            }),
            (t.prototype._renderEventResize = function (e) {
              e &&
                (this.eventRenderer.hideByHash(e.affectedInstances),
                this.mirrorRenderer.renderSegs(e.segs, {
                  isResizing: !0,
                  sourceSeg: e.sourceSeg,
                }));
            }),
            (t.prototype._unrenderEventResize = function (e) {
              e &&
                (this.eventRenderer.showByHash(e.affectedInstances),
                this.mirrorRenderer.unrender(e.segs, {
                  isResizing: !0,
                  sourceSeg: e.sourceSeg,
                }));
            }),
            (t.prototype._renderDateSelection = function (e) {
              e &&
                (this.opt("selectMirror")
                  ? this.mirrorRenderer.renderSegs(e, { isSelecting: !0 })
                  : this.fillRenderer.renderSegs("highlight", e));
            }),
            (t.prototype._unrenderDateSelection = function (e) {
              this.mirrorRenderer.unrender(e, { isSelecting: !0 }),
                this.fillRenderer.unrender("highlight");
            }),
            t
          );
        })(f.default);
      t.default = m;
    },
    function (e, t, n) {
      function r(e) {
        var t,
          n,
          r,
          i = [];
        for (t = 0; t < e.length; t++) {
          for (n = e[t], r = 0; r < i.length && a(n, i[r]).length; r++);
          (n.level = r), (i[r] || (i[r] = [])).push(n);
        }
        return i;
      }
      function i(e) {
        var t, n, r, i, o;
        for (t = 0; t < e.length; t++)
          for (n = e[t], r = 0; r < n.length; r++)
            for (i = n[r], i.forwardSegs = [], o = t + 1; o < e.length; o++)
              a(i, e[o], i.forwardSegs);
      }
      function o(e) {
        var t,
          n,
          r = e.forwardSegs,
          i = 0;
        if (void 0 === e.forwardPressure) {
          for (t = 0; t < r.length; t++)
            (n = r[t]), o(n), (i = Math.max(i, 1 + n.forwardPressure));
          e.forwardPressure = i;
        }
      }
      function a(e, t, n) {
        void 0 === n && (n = []);
        for (var r = 0; r < t.length; r++) s(e, t[r]) && n.push(t[r]);
        return n;
      }
      function s(e, t) {
        return e.bottom > t.top && e.top < t.bottom;
      }
      function l(e) {
        var t = f.buildSegCompareObj(e);
        return (
          (t.forwardPressure = e.forwardPressure),
          (t.backwardCoord = e.backwardCoord),
          t
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = n(1),
        d = n(11),
        c = n(3),
        p = n(7),
        f = n(50),
        h = n(2),
        g = (function (e) {
          function t(t) {
            var n = e.call(this, t.context) || this;
            return (
              (n.timeGrid = t),
              (n.fullTimeFormat = p.createFormatter({
                hour: "numeric",
                minute: "2-digit",
                separator: n.context.options.defaultRangeSeparator,
              })),
              n
            );
          }
          return (
            u.__extends(t, e),
            (t.prototype.attachSegs = function (e, t) {
              (this.segsByCol = this.timeGrid.groupSegsByCol(e)),
                this.timeGrid.attachSegsByCol(
                  this.segsByCol,
                  this.timeGrid.fgContainerEls
                );
            }),
            (t.prototype.detachSegs = function (e) {
              e.forEach(function (e) {
                c.removeElement(e.el);
              }),
                (this.segsByCol = null);
            }),
            (t.prototype.computeSegSizes = function (e) {
              var t = this,
                n = t.timeGrid,
                r = t.segsByCol,
                i = n.colCnt;
              if ((n.computeSegVerticals(e), r))
                for (var o = 0; o < i; o++) this.computeSegHorizontals(r[o]);
            }),
            (t.prototype.assignSegSizes = function (e) {
              var t = this,
                n = t.timeGrid,
                r = t.segsByCol,
                i = n.colCnt;
              if ((n.assignSegVerticals(e), r))
                for (var o = 0; o < i; o++) this.assignSegCss(r[o]);
            }),
            (t.prototype.computeEventTimeFormat = function () {
              return { hour: "numeric", minute: "2-digit", meridiem: !1 };
            }),
            (t.prototype.computeDisplayEventEnd = function () {
              return !0;
            }),
            (t.prototype.renderSegHtml = function (e, t) {
              var n,
                r,
                i,
                o = e.eventRange,
                a = o.def,
                s = o.ui,
                l = a.allDay,
                u = s.startEditable,
                c =
                  e.isStart &&
                  s.durationEditable &&
                  this.context.options.eventResizableFromStart,
                p = e.isEnd && s.durationEditable,
                f = this.getSegClasses(e, u, c || p, t),
                g = d.cssToStr(this.getSkinCss(s));
              if (
                (f.unshift("fc-time-grid-event", "fc-v-event"),
                h.isMultiDayRange(o.range))
              ) {
                if (e.isStart || e.isEnd) {
                  var v = e.start,
                    m = e.end;
                  (n = this._getTimeText(v, m, l)),
                    (r = this._getTimeText(v, m, l, this.fullTimeFormat)),
                    (i = this._getTimeText(v, m, l, null, !1));
                }
              } else
                (n = this.getTimeText(o)),
                  (r = this.getTimeText(o, this.fullTimeFormat)),
                  (i = this.getTimeText(o, null, !1));
              return (
                '<a class="' +
                f.join(" ") +
                '"' +
                (a.url ? ' href="' + d.htmlEscape(a.url) + '"' : "") +
                (g ? ' style="' + g + '"' : "") +
                '><div class="fc-content">' +
                (n
                  ? '<div class="fc-time" data-start="' +
                    d.htmlEscape(i) +
                    '" data-full="' +
                    d.htmlEscape(r) +
                    '"><span>' +
                    d.htmlEscape(n) +
                    "</span></div>"
                  : "") +
                (a.title
                  ? '<div class="fc-title">' + d.htmlEscape(a.title) + "</div>"
                  : "") +
                '</div><div class="fc-bg"></div>' +
                (p ? '<div class="fc-resizer fc-end-resizer"></div>' : "") +
                "</a>"
              );
            }),
            (t.prototype.computeSegHorizontals = function (e) {
              var t, n, a;
              if (((e = this.sortEventSegs(e)), (t = r(e)), i(t), (n = t[0]))) {
                for (a = 0; a < n.length; a++) o(n[a]);
                for (a = 0; a < n.length; a++)
                  this.computeSegForwardBack(n[a], 0, 0);
              }
            }),
            (t.prototype.computeSegForwardBack = function (e, t, n) {
              var r,
                i = e.forwardSegs;
              if (void 0 === e.forwardCoord)
                for (
                  i.length
                    ? (this.sortForwardSegs(i),
                      this.computeSegForwardBack(i[0], t + 1, n),
                      (e.forwardCoord = i[0].backwardCoord))
                    : (e.forwardCoord = 1),
                    e.backwardCoord =
                      e.forwardCoord - (e.forwardCoord - n) / (t + 1),
                    r = 0;
                  r < i.length;
                  r++
                )
                  this.computeSegForwardBack(i[r], 0, e.forwardCoord);
            }),
            (t.prototype.sortForwardSegs = function (e) {
              var t = e.map(l),
                n = [
                  { field: "forwardPressure", order: -1 },
                  { field: "backwardCoord", order: 1 },
                ].concat(this.context.view.eventOrderSpecs);
              return (
                t.sort(function (e, t) {
                  return h.compareByFieldSpecs(e, t, n);
                }),
                t.map(function (e) {
                  return e._seg;
                })
              );
            }),
            (t.prototype.assignSegCss = function (e) {
              for (var t = 0, n = e; t < n.length; t++) {
                var r = n[t];
                c.applyStyle(r.el, this.generateSegCss(r)),
                  r.eventRange.def.title &&
                    r.bottom - r.top < 30 &&
                    r.el.classList.add("fc-short");
              }
            }),
            (t.prototype.generateSegCss = function (e) {
              var t,
                n,
                r = this.context.options.slotEventOverlap,
                i = e.backwardCoord,
                o = e.forwardCoord,
                a = this.timeGrid.generateSegVerticalCss(e),
                s = this.timeGrid.isRtl;
              return (
                r && (o = Math.min(1, i + 2 * (o - i))),
                s ? ((t = 1 - o), (n = i)) : ((t = i), (n = 1 - o)),
                (a.zIndex = e.level + 1),
                (a.left = 100 * t + "%"),
                (a.right = 100 * n + "%"),
                r &&
                  e.forwardPressure &&
                  (a[s ? "marginLeft" : "marginRight"] = 20),
                a
              );
            }),
            t
          );
        })(f.default);
      t.default = g;
    },
    function (e, t, n) {
      function r(e, t, n, r) {
        var a = n.dateEnv,
          s = n.theme,
          l = o.rangeContainsMarker(t.activeRange, e),
          u = i.getDayClasses(e, t, n);
        return (
          u.unshift("fc-day", s.getClass("widgetContent")),
          '<td class="' +
            u.join(" ") +
            '"' +
            (l ? ' data-date="' + a.formatIso(e, { omitTime: !0 }) + '"' : "") +
            (r ? " " + r : "") +
            "></td>"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(21),
        o = n(8),
        a = (function () {
          function e(e) {
            this.context = e;
          }
          return (
            (e.prototype.renderHtml = function (e) {
              var t = [];
              e.renderIntroHtml && t.push(e.renderIntroHtml());
              for (var n = 0, i = e.cells; n < i.length; n++) {
                var o = i[n];
                t.push(r(o.date, e.dateProfile, this.context, o.htmlAttrs));
              }
              return (
                e.cells.length ||
                  t.push(
                    '<td class="fc-day ' +
                      this.context.theme.getClass("widgetContent") +
                      '"></td>'
                  ),
                "rtl" === this.context.options.dir && t.reverse(),
                "<tr>" + t.join("") + "</tr>"
              );
            }),
            e
          );
        })();
      t.default = a;
    },
    function (e, t, n) {
      function r(e, t) {
        var n, r;
        for (n = 0; n < t.length; n++)
          if (((r = t[n]), r.firstCol <= e.lastCol && r.lastCol >= e.firstCol))
            return !0;
        return !1;
      }
      function i(e, t) {
        return e.leftCol - t.leftCol;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(1),
        a = n(3),
        s = n(166),
        l = (function (e) {
          function t(t) {
            var n = e.call(this, t.context) || this;
            return (n.dayGrid = t), n;
          }
          return (
            o.__extends(t, e),
            (t.prototype.attachSegs = function (e, t) {
              var n = (this.rowStructs = this.renderSegRows(e));
              this.dayGrid.rowEls.forEach(function (e, t) {
                e.querySelector(".fc-content-skeleton > table").appendChild(
                  n[t].tbodyEl
                );
              }),
                t || this.dayGrid.removeSegPopover();
            }),
            (t.prototype.detachSegs = function () {
              for (var e, t = this.rowStructs || []; (e = t.pop()); )
                a.removeElement(e.tbodyEl);
              this.rowStructs = null;
            }),
            (t.prototype.renderSegRows = function (e) {
              var t,
                n,
                r = [];
              for (t = this.groupSegRows(e), n = 0; n < t.length; n++)
                r.push(this.renderSegRow(n, t[n]));
              return r;
            }),
            (t.prototype.renderSegRow = function (e, t) {
              function n(e) {
                for (; o < e; )
                  (d = (E[r - 1] || [])[o]),
                    d
                      ? (d.rowSpan = (d.rowSpan || 1) + 1)
                      : ((d = document.createElement("td")), s.appendChild(d)),
                    (y[r][o] = d),
                    (E[r][o] = d),
                    o++;
              }
              var r,
                i,
                o,
                s,
                l,
                u,
                d,
                c = this.dayGrid,
                p = c.colCnt,
                f = c.isRtl,
                h = this.buildSegLevels(t),
                g = Math.max(1, h.length),
                v = document.createElement("tbody"),
                m = [],
                y = [],
                E = [];
              for (r = 0; r < g; r++) {
                if (
                  ((i = h[r]),
                  (o = 0),
                  (s = document.createElement("tr")),
                  m.push([]),
                  y.push([]),
                  E.push([]),
                  i)
                )
                  for (l = 0; l < i.length; l++) {
                    u = i[l];
                    var S = f ? p - 1 - u.lastCol : u.firstCol,
                      b = f ? p - 1 - u.firstCol : u.lastCol;
                    for (
                      n(S),
                        d = a.createElement(
                          "td",
                          { className: "fc-event-container" },
                          u.el
                        ),
                        S !== b ? (d.colSpan = b - S + 1) : (E[r][o] = d);
                      o <= b;

                    )
                      (y[r][o] = d), (m[r][o] = u), o++;
                    s.appendChild(d);
                  }
                n(p);
                var D = c.renderProps.renderIntroHtml();
                D &&
                  (c.isRtl
                    ? a.appendToElement(s, D)
                    : a.prependToElement(s, D)),
                  v.appendChild(s);
              }
              return {
                row: e,
                tbodyEl: v,
                cellMatrix: y,
                segMatrix: m,
                segLevels: h,
                segs: t,
              };
            }),
            (t.prototype.buildSegLevels = function (e) {
              var t,
                n,
                o,
                a = this.dayGrid,
                s = a.isRtl,
                l = a.colCnt,
                u = [];
              for (e = this.sortEventSegs(e), t = 0; t < e.length; t++) {
                for (n = e[t], o = 0; o < u.length && r(n, u[o]); o++);
                (n.level = o),
                  (n.leftCol = s ? l - 1 - n.lastCol : n.firstCol),
                  (n.rightCol = s ? l - 1 - n.firstCol : n.lastCol),
                  (u[o] || (u[o] = [])).push(n);
              }
              for (o = 0; o < u.length; o++) u[o].sort(i);
              return u;
            }),
            (t.prototype.groupSegRows = function (e) {
              var t,
                n = [];
              for (t = 0; t < this.dayGrid.rowCnt; t++) n.push([]);
              for (t = 0; t < e.length; t++) n[e[t].row].push(e[t]);
              return n;
            }),
            (t.prototype.computeDisplayEventEnd = function () {
              return 1 === this.dayGrid.colCnt;
            }),
            t
          );
        })(s.default);
      t.default = l;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(11),
        o = n(50),
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.renderSegHtml = function (e, t) {
              var n,
                r,
                o = this.context.options,
                a = e.eventRange,
                s = a.def,
                l = a.ui,
                u = s.allDay,
                d = l.startEditable,
                c =
                  u &&
                  e.isStart &&
                  l.durationEditable &&
                  o.eventResizableFromStart,
                p = u && e.isEnd && l.durationEditable,
                f = this.getSegClasses(e, d, c || p, t),
                h = i.cssToStr(this.getSkinCss(l)),
                g = "";
              return (
                f.unshift("fc-day-grid-event", "fc-h-event"),
                e.isStart &&
                  (n = this.getTimeText(a)) &&
                  (g = '<span class="fc-time">' + i.htmlEscape(n) + "</span>"),
                (r =
                  '<span class="fc-title">' +
                  (i.htmlEscape(s.title || "") || "&nbsp;") +
                  "</span>"),
                '<a class="' +
                  f.join(" ") +
                  '"' +
                  (s.url ? ' href="' + i.htmlEscape(s.url) + '"' : "") +
                  (h ? ' style="' + h + '"' : "") +
                  '><div class="fc-content">' +
                  ("rtl" === o.dir ? r + " " + g : g + " " + r) +
                  "</div>" +
                  (c ? '<div class="fc-resizer fc-start-resizer"></div>' : "") +
                  (p ? '<div class="fc-resizer fc-end-resizer"></div>' : "") +
                  "</a>"
              );
            }),
            (t.prototype.computeEventTimeFormat = function () {
              return {
                hour: "numeric",
                minute: "2-digit",
                omitZeroMinute: !0,
                meridiem: "narrow",
              };
            }),
            (t.prototype.computeDisplayEventEnd = function () {
              return !1;
            }),
            t
          );
        })(o.default);
      t.default = a;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(34),
        o = n(3),
        a = n(7),
        s = n(168),
        l = (function (e) {
          function t(t, n) {
            var r = e.call(this, t) || this;
            return (
              (n.innerHTML = ""),
              n.appendChild(
                (r.el = o.htmlToElement(
                  '<div class="fc-row ' +
                    r.theme.getClass("headerRow") +
                    '"><table class="' +
                    r.theme.getClass("tableGrid") +
                    '"><thead></thead></table></div>'
                ))
              ),
              (r.thead = r.el.querySelector("thead")),
              r
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.destroy = function () {
              o.removeElement(this.el);
            }),
            (t.prototype.render = function (e) {
              var t = e.dates,
                n = e.datesRepDistinctDays,
                r = [];
              e.renderIntroHtml && r.push(e.renderIntroHtml());
              for (
                var i = a.createFormatter(
                    this.opt("columnHeaderFormat") ||
                      s.computeFallbackHeaderFormat(n, t.length)
                  ),
                  o = 0,
                  l = t;
                o < l.length;
                o++
              ) {
                var u = l[o];
                r.push(
                  s.renderDateCell(
                    u,
                    e.dateProfile,
                    n,
                    t.length,
                    i,
                    this.context
                  )
                );
              }
              this.isRtl && r.reverse(),
                (this.thead.innerHTML = "<tr>" + r.join("") + "</tr>");
            }),
            t
          );
        })(i.default);
      t.default = l;
    },
    function (e, t, n) {
      function r(e, t) {
        return !e || t > 10
          ? { weekday: "short" }
          : t > 1
          ? {
              weekday: "short",
              month: "numeric",
              day: "numeric",
              omitCommas: !0,
            }
          : { weekday: "long" };
      }
      function i(e, t, n, r, i, u, d, c) {
        var p,
          f = u.view,
          h = u.dateEnv,
          g = u.theme,
          v = u.options,
          m = o.rangeContainsMarker(t.activeRange, e),
          y = ["fc-day-header", g.getClass("widgetHeader")];
        return (
          (p =
            "function" == typeof v.columnHeaderHtml
              ? v.columnHeaderHtml(e)
              : "function" == typeof v.columnHeaderText
              ? a.htmlEscape(v.columnHeaderText(e))
              : a.htmlEscape(h.format(e, i))),
          n
            ? (y = y.concat(s.getDayClasses(e, t, u, !0)))
            : y.push("fc-" + l.DAY_IDS[e.getUTCDay()]),
          '<th class="' +
            y.join(" ") +
            '"' +
            (m && n
              ? ' data-date="' + h.formatIso(e, { omitTime: !0 }) + '"'
              : "") +
            (d > 1 ? ' colspan="' + d + '"' : "") +
            (c ? " " + c : "") +
            ">" +
            (m
              ? s.buildGotoAnchorHtml(
                  f,
                  { date: e, forceOff: !n || 1 === r },
                  p
                )
              : p) +
            "</th>"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(8),
        a = n(11),
        s = n(21),
        l = n(4);
      (t.computeFallbackHeaderFormat = r), (t.renderDateCell = i);
    },
    function (e, t, n) {
      function r(e, t, n) {
        for (var r = [], i = 0, o = e.headerDates; i < o.length; i++) {
          var a = o[i];
          r.push({ start: n.add(a, t.minTime), end: n.add(a, t.maxTime) });
        }
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1),
        o = n(22),
        a = n(17),
        s = n(8),
        l = n(68),
        u = n(51),
        d = (function (e) {
          function t(t, n) {
            var i = e.call(this, t, n.el) || this;
            return (
              (i.buildDayRanges = a.memoize(r)),
              (i.slicer = new c()),
              (i.timeGrid = n),
              i
            );
          }
          return (
            i.__extends(t, e),
            (t.prototype.render = function (e) {
              var t = e.dateProfile,
                n = e.dayTable,
                r = (this.dayRanges = this.buildDayRanges(n, t, this.dateEnv));
              this.timeGrid.receiveProps(
                i.__assign(
                  {},
                  this.slicer.sliceProps(e, t, null, this.timeGrid, r),
                  { dateProfile: t, cells: n.cells[0] }
                )
              );
            }),
            (t.prototype.renderNowIndicator = function (e) {
              this.timeGrid.renderNowIndicator(
                this.slicer.sliceNowDate(e, this.timeGrid, this.dayRanges),
                e
              );
            }),
            (t.prototype.prepareHits = function () {
              this.offsetTracker = new u.default(this.timeGrid.el);
            }),
            (t.prototype.releaseHits = function () {
              this.offsetTracker.destroy();
            }),
            (t.prototype.queryHit = function (e, t) {
              var n = this.offsetTracker;
              if (n.isWithinClipping(e, t)) {
                var r = n.computeLeft(),
                  i = n.computeTop(),
                  o = this.timeGrid.positionToHit(e - r, t - i);
                if (o)
                  return {
                    component: this.timeGrid,
                    dateSpan: o.dateSpan,
                    dayEl: o.dayEl,
                    rect: {
                      left: o.relativeRect.left + r,
                      right: o.relativeRect.right + r,
                      top: o.relativeRect.top + i,
                      bottom: o.relativeRect.bottom + i,
                    },
                    layer: 0,
                  };
              }
            }),
            t
          );
        })(o.default);
      (t.default = d),
        (d.prototype.isInteractable = !0),
        (t.buildDayRanges = r);
      var c = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          i.__extends(t, e),
          (t.prototype.sliceRange = function (e, t) {
            for (var n = [], r = 0; r < t.length; r++) {
              var i = s.intersectRanges(e, t[r]);
              i &&
                n.push({
                  start: i.start,
                  end: i.end,
                  isStart: i.start.valueOf() === e.start.valueOf(),
                  isEnd: i.end.valueOf() === e.end.valueOf(),
                  col: r,
                });
            }
            return n;
          }),
          t
        );
      })(l.default);
      t.TimeGridSlicer = c;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(11),
        o = n(3),
        a = n(2),
        s = n(7),
        l = n(44),
        u = n(49),
        d = n(209),
        c = n(21),
        p = n(65),
        f = s.createFormatter({ week: "numeric" }),
        h = (function (e) {
          function t(t, n, r, a) {
            var s = e.call(this, t, n, r, a) || this;
            (s.renderHeadIntroHtml = function () {
              var e = s.theme;
              return s.colWeekNumbersVisible
                ? '<th class="fc-week-number ' +
                    e.getClass("widgetHeader") +
                    '" ' +
                    s.weekNumberStyleAttr() +
                    "><span>" +
                    i.htmlEscape(s.opt("weekLabel")) +
                    "</span></th>"
                : "";
            }),
              (s.renderDayGridNumberIntroHtml = function (e, t) {
                var n = s.dateEnv,
                  r = t.props.cells[e][0].date;
                return s.colWeekNumbersVisible
                  ? '<td class="fc-week-number" ' +
                      s.weekNumberStyleAttr() +
                      ">" +
                      c.buildGotoAnchorHtml(
                        s,
                        { date: r, type: "week", forceOff: 1 === t.colCnt },
                        n.format(r, f)
                      ) +
                      "</td>"
                  : "";
              }),
              (s.renderDayGridBgIntroHtml = function () {
                var e = s.theme;
                return s.colWeekNumbersVisible
                  ? '<td class="fc-week-number ' +
                      e.getClass("widgetContent") +
                      '" ' +
                      s.weekNumberStyleAttr() +
                      "></td>"
                  : "";
              }),
              (s.renderDayGridIntroHtml = function () {
                return s.colWeekNumbersVisible
                  ? '<td class="fc-week-number" ' +
                      s.weekNumberStyleAttr() +
                      "></td>"
                  : "";
              }),
              s.el.classList.add("fc-basic-view"),
              (s.el.innerHTML = s.renderSkeletonHtml()),
              (s.scroller = new l.default("hidden", "auto"));
            var u = s.scroller.el;
            s.el.querySelector(".fc-body > tr > td").appendChild(u),
              u.classList.add("fc-day-grid-container");
            var d = o.createElement("div", { className: "fc-day-grid" });
            u.appendChild(d);
            var h;
            return (
              s.opt("weekNumbers")
                ? s.opt("weekNumbersWithinDays")
                  ? ((h = !0), (s.colWeekNumbersVisible = !1))
                  : ((h = !1), (s.colWeekNumbersVisible = !0))
                : ((s.colWeekNumbersVisible = !1), (h = !1)),
              (s.dayGrid = new p.default(s.context, d, {
                renderNumberIntroHtml: s.renderDayGridNumberIntroHtml,
                renderBgIntroHtml: s.renderDayGridBgIntroHtml,
                renderIntroHtml: s.renderDayGridIntroHtml,
                colWeekNumbersVisible: s.colWeekNumbersVisible,
                cellWeekNumbersVisible: h,
              })),
              s
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this),
                this.dayGrid.destroy(),
                this.scroller.destroy();
            }),
            (t.prototype.renderSkeletonHtml = function () {
              var e = this.theme;
              return (
                '<table class="' +
                e.getClass("tableGrid") +
                '">' +
                (this.opt("columnHeader")
                  ? '<thead class="fc-head"><tr><td class="fc-head-container ' +
                    e.getClass("widgetHeader") +
                    '">&nbsp;</td></tr></thead>'
                  : "") +
                '<tbody class="fc-body"><tr><td class="' +
                e.getClass("widgetContent") +
                '"></td></tr></tbody></table>'
              );
            }),
            (t.prototype.weekNumberStyleAttr = function () {
              return null != this.weekNumberWidth
                ? 'style="width:' + this.weekNumberWidth + 'px"'
                : "";
            }),
            (t.prototype.hasRigidRows = function () {
              var e = this.opt("eventLimit");
              return e && "number" != typeof e;
            }),
            (t.prototype.updateSize = function (t, n, r) {
              e.prototype.updateSize.call(this, t, n, r),
                this.dayGrid.updateSize(t);
            }),
            (t.prototype.updateBaseSize = function (e, t, n) {
              var r,
                i,
                s = this.dayGrid,
                l = this.opt("eventLimit"),
                u = this.header ? this.header.el : null;
              if (!s.rowEls)
                return void (
                  n ||
                  ((r = this.computeScrollerHeight(t)),
                  this.scroller.setHeight(r))
                );
              this.colWeekNumbersVisible &&
                (this.weekNumberWidth = a.matchCellWidths(
                  o.findElements(this.el, ".fc-week-number")
                )),
                this.scroller.clear(),
                u && a.uncompensateScroll(u),
                s.removeSegPopover(),
                l && "number" == typeof l && s.limitRows(l),
                (r = this.computeScrollerHeight(t)),
                this.setGridHeight(r, n),
                l && "number" != typeof l && s.limitRows(l),
                n ||
                  (this.scroller.setHeight(r),
                  (i = this.scroller.getScrollbarWidths()),
                  (i.left || i.right) &&
                    (u && a.compensateScroll(u, i),
                    (r = this.computeScrollerHeight(t)),
                    this.scroller.setHeight(r)),
                  this.scroller.lockOverflow(i));
            }),
            (t.prototype.computeScrollerHeight = function (e) {
              return e - a.subtractInnerElHeight(this.el, this.scroller.el);
            }),
            (t.prototype.setGridHeight = function (e, t) {
              this.opt("monthMode")
                ? (t && (e *= this.dayGrid.rowCnt / 6),
                  a.distributeHeight(this.dayGrid.rowEls, e, !t))
                : t
                ? a.undistributeHeight(this.dayGrid.rowEls)
                : a.distributeHeight(this.dayGrid.rowEls, e, !0);
            }),
            (t.prototype.computeInitialDateScroll = function () {
              return { top: 0 };
            }),
            (t.prototype.queryDateScroll = function () {
              return { top: this.scroller.getScrollTop() };
            }),
            (t.prototype.applyDateScroll = function (e) {
              void 0 !== e.top && this.scroller.setScrollTop(e.top);
            }),
            t
          );
        })(u.default);
      (t.default = h), (h.prototype.dateProfileGeneratorClass = d.default);
    },
    function (e, t, n) {
      function r(e, t) {
        var n = new u.default(e.renderRange, t);
        return new d.default(n, /year|month|week/.test(e.currentRangeUnit));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1),
        o = n(170),
        a = n(167),
        s = n(69),
        l = n(17),
        u = n(66),
        d = n(67),
        c = (function (e) {
          function t(t, n, i, o) {
            var u = e.call(this, t, n, i, o) || this;
            return (
              (u.buildDayTable = l.memoize(r)),
              u.opt("columnHeader") &&
                (u.header = new a.default(
                  u.context,
                  u.el.querySelector(".fc-head-container")
                )),
              (u.simpleDayGrid = new s.default(u.context, u.dayGrid)),
              u
            );
          }
          return (
            i.__extends(t, e),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this),
                this.header && this.header.destroy(),
                this.simpleDayGrid.destroy();
            }),
            (t.prototype.render = function (t) {
              e.prototype.render.call(this, t);
              var n = this.props.dateProfile,
                r = (this.dayTable = this.buildDayTable(
                  n,
                  this.dateProfileGenerator
                ));
              this.header &&
                this.header.receiveProps({
                  dateProfile: n,
                  dates: r.headerDates,
                  datesRepDistinctDays: 1 === r.rowCnt,
                  renderIntroHtml: this.renderHeadIntroHtml,
                }),
                this.simpleDayGrid.receiveProps({
                  dateProfile: n,
                  dayTable: r,
                  businessHours: t.businessHours,
                  dateSelection: t.dateSelection,
                  eventStore: t.eventStore,
                  eventUiBases: t.eventUiBases,
                  eventSelection: t.eventSelection,
                  eventDrag: t.eventDrag,
                  eventResize: t.eventResize,
                  isRigid: this.hasRigidRows(),
                  nextDayThreshold: this.nextDayThreshold,
                });
            }),
            t
          );
        })(o.default);
      (t.default = c), (t.buildDayTable = r);
    },
    function (e, t, n) {
      function r(e) {
        for (
          var t = c.startOfDay(e.renderRange.start),
            n = e.renderRange.end,
            r = [],
            i = [];
          t < n;

        )
          r.push(t),
            i.push({ start: t, end: c.addDays(t, 1) }),
            (t = c.addDays(t, 1));
        return { dayDates: r, dayRanges: i };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1),
        o = n(3),
        a = n(11),
        s = n(2),
        l = n(49),
        u = n(44),
        d = n(210),
        c = n(4),
        p = n(7),
        f = n(8),
        h = n(21),
        g = n(10),
        v = n(17),
        m = n(20),
        y = (function (e) {
          function t(t, n, i, o) {
            var a = e.call(this, t, n, i, o) || this;
            (a.computeDateVars = v.memoize(r)),
              (a.eventStoreToSegs = v.memoize(a._eventStoreToSegs));
            var s = (a.eventRenderer = new d.default(a));
            (a.renderContent = m.memoizeRendering(
              s.renderSegs.bind(s),
              s.unrender.bind(s)
            )),
              a.el.classList.add("fc-list-view");
            for (
              var l = (a.theme.getClass("listView") || "").split(" "),
                c = 0,
                p = l;
              c < p.length;
              c++
            ) {
              var f = p[c];
              f && a.el.classList.add(f);
            }
            return (
              (a.scroller = new u.default("hidden", "auto")),
              a.el.appendChild(a.scroller.el),
              (a.contentEl = a.scroller.el),
              a
            );
          }
          return (
            i.__extends(t, e),
            (t.prototype.render = function (e) {
              var t = this.computeDateVars(e.dateProfile),
                n = t.dayDates,
                r = t.dayRanges;
              (this.dayDates = n),
                this.renderContent(
                  this.eventStoreToSegs(e.eventStore, e.eventUiBases, r)
                );
            }),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this), this.scroller.destroy();
            }),
            (t.prototype.updateSize = function (t, n, r) {
              e.prototype.updateSize.call(this, t, n, r),
                this.eventRenderer.computeSizes(t),
                this.eventRenderer.assignSizes(t),
                this.scroller.clear(),
                r || this.scroller.setHeight(this.computeScrollerHeight(n));
            }),
            (t.prototype.computeScrollerHeight = function (e) {
              return e - s.subtractInnerElHeight(this.el, this.scroller.el);
            }),
            (t.prototype._eventStoreToSegs = function (e, t, n) {
              return this.eventRangesToSegs(
                g.sliceEventStore(
                  e,
                  t,
                  this.props.dateProfile.activeRange,
                  this.nextDayThreshold
                ).fg,
                n
              );
            }),
            (t.prototype.eventRangesToSegs = function (e, t) {
              for (var n = [], r = 0, i = e; r < i.length; r++) {
                var o = i[r];
                n.push.apply(n, this.eventRangeToSegs(o, t));
              }
              return n;
            }),
            (t.prototype.eventRangeToSegs = function (e, t) {
              var n,
                r,
                i,
                o = this,
                a = o.dateEnv,
                s = o.nextDayThreshold,
                l = e.range,
                u = e.def.allDay,
                d = [];
              for (n = 0; n < t.length; n++)
                if (
                  (r = f.intersectRanges(l, t[n])) &&
                  ((i = {
                    component: this,
                    eventRange: e,
                    start: r.start,
                    end: r.end,
                    isStart:
                      e.isStart && r.start.valueOf() === l.start.valueOf(),
                    isEnd: e.isEnd && r.end.valueOf() === l.end.valueOf(),
                    dayIndex: n,
                  }),
                  d.push(i),
                  !i.isEnd &&
                    !u &&
                    n + 1 < t.length &&
                    l.end < a.add(t[n + 1].start, s))
                ) {
                  (i.end = l.end), (i.isEnd = !0);
                  break;
                }
              return d;
            }),
            (t.prototype.renderEmptyMessage = function () {
              this.contentEl.innerHTML =
                '<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">' +
                a.htmlEscape(this.opt("noEventsMessage")) +
                "</div></div></div>";
            }),
            (t.prototype.renderSegList = function (e) {
              var t,
                n,
                r,
                i = this.groupSegsByDay(e),
                a = o.htmlToElement(
                  '<table class="fc-list-table ' +
                    this.calendar.theme.getClass("tableList") +
                    '"><tbody></tbody></table>'
                ),
                s = a.querySelector("tbody");
              for (t = 0; t < i.length; t++)
                if ((n = i[t]))
                  for (
                    s.appendChild(this.buildDayHeaderRow(this.dayDates[t])),
                      n = this.eventRenderer.sortEventSegs(n),
                      r = 0;
                    r < n.length;
                    r++
                  )
                    s.appendChild(n[r].el);
              (this.contentEl.innerHTML = ""), this.contentEl.appendChild(a);
            }),
            (t.prototype.groupSegsByDay = function (e) {
              var t,
                n,
                r = [];
              for (t = 0; t < e.length; t++)
                (n = e[t]), (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
              return r;
            }),
            (t.prototype.buildDayHeaderRow = function (e) {
              var t = this.dateEnv,
                n = p.createFormatter(this.opt("listDayFormat")),
                r = p.createFormatter(this.opt("listDayAltFormat"));
              return o.createElement(
                "tr",
                {
                  className: "fc-list-heading",
                  "data-date": t.formatIso(e, { omitTime: !0 }),
                },
                '<td class="' +
                  (this.calendar.theme.getClass("tableListHeading") ||
                    this.calendar.theme.getClass("widgetHeader")) +
                  '" colspan="3">' +
                  (n
                    ? h.buildGotoAnchorHtml(
                        this,
                        e,
                        { class: "fc-list-heading-main" },
                        a.htmlEscape(t.format(e, n))
                      )
                    : "") +
                  (r
                    ? h.buildGotoAnchorHtml(
                        this,
                        e,
                        { class: "fc-list-heading-alt" },
                        a.htmlEscape(t.format(e, r))
                      )
                    : "") +
                  "</td>"
              );
            }),
            t
          );
        })(l.default);
      (t.default = y),
        (y.prototype.isInteractable = !0),
        (y.prototype.fgSegSelector = ".fc-list-item");
    },
    function (e, t, n) {
      function r(e, t, n) {
        for (
          var r = a.__assign({}, t.leftoverProps),
            i = 0,
            o = n.pluginSystem.hooks.externalDefTransforms;
          i < o.length;
          i++
        ) {
          var s = o[i];
          m.__assign(r, s(e, t));
        }
        var l = u.parseEventDef(
            r,
            t.sourceId,
            e.allDay,
            Boolean(t.duration),
            n
          ),
          d = e.range.start;
        e.allDay && t.startTime && (d = n.dateEnv.add(d, t.startTime));
        var c = t.duration
          ? n.dateEnv.add(d, t.duration)
          : n.getDefaultEventEnd(e.allDay, d);
        return {
          def: l,
          instance: u.createEventInstance(l.defId, { start: d, end: c }),
        };
      }
      function i(e) {
        var t = o(e, "event"),
          n = t ? JSON.parse(t) : { create: !1 };
        return p.parseDragMeta(n);
      }
      function o(e, t) {
        var n = c.dataAttrPrefix,
          r = (n ? n + "-" : "") + t;
        return e.getAttribute("data-" + r) || "";
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(1),
        s = n(28),
        l = n(61),
        u = n(26),
        d = n(14),
        c = n(56),
        p = n(212),
        f = n(16),
        h = n(3),
        g = n(2),
        v = n(42),
        m = n(1),
        y = (function () {
          function e(e, t) {
            var n = this;
            (this.receivingCalendar = null),
              (this.droppableEvent = null),
              (this.suppliedDragMeta = null),
              (this.dragMeta = null),
              (this.handleDragStart = function (e) {
                n.dragMeta = n.buildDragMeta(e.subjectEl);
              }),
              (this.handleHitUpdate = function (e, t, i) {
                var o = n.hitDragging.dragging,
                  a = null,
                  s = null,
                  l = !1,
                  u = {
                    affectedEvents: d.createEmptyEventStore(),
                    mutatedEvents: d.createEmptyEventStore(),
                    isEvent: n.dragMeta.create,
                    origSeg: null,
                  };
                e &&
                  ((a = e.component.calendar),
                  n.canDropElOnCalendar(i.subjectEl, a) &&
                    ((s = r(e.dateSpan, n.dragMeta, a)),
                    (u.mutatedEvents = d.eventTupleToStore(s)),
                    (l = !v.isInteractionValid(u, a)) &&
                      ((u.mutatedEvents = d.createEmptyEventStore()),
                      (s = null)))),
                  n.displayDrag(a, u),
                  o.setMirrorIsVisible(
                    t || !s || !document.querySelector(".fc-mirror")
                  ),
                  l ? g.disableCursor() : g.enableCursor(),
                  t ||
                    (o.setMirrorNeedsRevert(!s),
                    (n.receivingCalendar = a),
                    (n.droppableEvent = s));
              }),
              (this.handleDragEnd = function (e) {
                var t = n,
                  r = t.receivingCalendar,
                  i = t.droppableEvent;
                if ((n.clearDrag(), r && i)) {
                  var o = n.hitDragging.finalHit,
                    a = o.component.view,
                    s = n.dragMeta,
                    l = r.buildDatePointApi(o.dateSpan);
                  (l.draggedEl = e.subjectEl),
                    (l.jsEvent = e.origEvent),
                    (l.view = a),
                    r.publiclyTrigger("drop", [l]),
                    s.create &&
                      (r.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: d.eventTupleToStore(i),
                      }),
                      e.isTouch &&
                        r.dispatch({
                          type: "SELECT_EVENT",
                          eventInstanceId: i.instance.instanceId,
                        }),
                      r.publiclyTrigger("eventReceive", [
                        {
                          draggedEl: e.subjectEl,
                          event: new f.default(r, i.def, i.instance),
                          view: a,
                        },
                      ]));
                }
                (n.receivingCalendar = null), (n.droppableEvent = null);
              });
            var i = (this.hitDragging = new s.default(
              e,
              l.default.componentHash
            ));
            (i.requireInitial = !1),
              i.emitter.on("dragstart", this.handleDragStart),
              i.emitter.on("hitupdate", this.handleHitUpdate),
              i.emitter.on("dragend", this.handleDragEnd),
              (this.suppliedDragMeta = t);
          }
          return (
            (e.prototype.buildDragMeta = function (e) {
              return "object" == typeof this.suppliedDragMeta
                ? p.parseDragMeta(this.suppliedDragMeta)
                : "function" == typeof this.suppliedDragMeta
                ? p.parseDragMeta(this.suppliedDragMeta(e))
                : i(e);
            }),
            (e.prototype.displayDrag = function (e, t) {
              var n = this.receivingCalendar;
              n && n !== e && n.dispatch({ type: "UNSET_EVENT_DRAG" }),
                e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
            }),
            (e.prototype.clearDrag = function () {
              this.receivingCalendar &&
                this.receivingCalendar.dispatch({ type: "UNSET_EVENT_DRAG" });
            }),
            (e.prototype.canDropElOnCalendar = function (e, t) {
              var n = t.opt("dropAccept");
              return "function" == typeof n
                ? n(e)
                : "string" != typeof n || !n || Boolean(h.elementMatches(e, n));
            }),
            e
          );
        })();
      (t.default = y), (c.dataAttrPrefix = "");
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      var r = n(56);
      n(218), n(221), n(222), n(223), n(224);
      var i = n(225),
        o = n(226),
        a = n(227);
      n(154).default.defaultPlugins.push(i.default, o.default, a.default),
        (e.exports = r);
    },
    function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    function (e, t, n) {
      function r() {
        return null === s && (s = i()), s;
      }
      function i() {
        var e = a.createElement(
          "div",
          {
            style: {
              position: "absolute",
              top: -1e3,
              left: 0,
              border: 0,
              padding: 0,
              overflow: "scroll",
              direction: "rtl",
            },
          },
          "<div></div>"
        );
        document.body.appendChild(e);
        var t = e.firstChild,
          n = t.getBoundingClientRect().left > e.getBoundingClientRect().left;
        return a.removeElement(e), n;
      }
      function o(e) {
        return (e = Math.max(0, e)), (e = Math.round(e));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(3),
        s = null;
      (t.getIsRtlScrollbarOnLeft = r), (t.sanitizeScrollbarWidth = o);
    },
    function (e, t, n) {
      function r(e, t, n) {
        var r = Object.keys(e).length;
        return 1 === r && "short" === e.timeZoneName
          ? function (e) {
              return h.formatTimeZoneOffset(e.timeZoneOffset);
            }
          : 0 === r && t.week
          ? function (e) {
              return l(
                n.computeWeekNumber(e.marker),
                n.weekLabel,
                n.locale,
                t.week
              );
            }
          : i(e, t, n);
      }
      function i(e, t, n) {
        (e = p.__assign({}, e)),
          (t = p.__assign({}, t)),
          o(e, t),
          (e.timeZone = "UTC");
        var r,
          i = new Intl.DateTimeFormat(n.locale.codes, e);
        if (t.omitZeroMinute) {
          var s = p.__assign({}, e);
          delete s.minute, (r = new Intl.DateTimeFormat(n.locale.codes, s));
        }
        return function (o) {
          var s,
            l = o.marker;
          return (
            (s = r && !l.getUTCMinutes() ? r : i), a(s.format(l), o, e, t, n)
          );
        };
      }
      function o(e, t) {
        e.timeZoneName &&
          (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit")),
          "long" === e.timeZoneName && (e.timeZoneName = "short"),
          t.omitZeroMinute &&
            (e.second || e.millisecond) &&
            delete t.omitZeroMinute;
      }
      function a(e, t, n, r, i) {
        return (
          (e = e.replace(b, "")),
          "short" === n.timeZoneName &&
            (e = s(
              e,
              "UTC" === i.timeZone || null == t.timeZoneOffset
                ? "UTC"
                : h.formatTimeZoneOffset(t.timeZoneOffset)
            )),
          r.omitCommas && (e = e.replace(E, "").trim()),
          r.omitZeroMinute && (e = e.replace(":00", "")),
          !1 === r.meridiem
            ? (e = e.replace(y, "").trim())
            : "narrow" === r.meridiem
            ? (e = e.replace(y, function (e, t) {
                return t.toLocaleLowerCase();
              }))
            : "short" === r.meridiem
            ? (e = e.replace(y, function (e, t) {
                return t.toLocaleLowerCase() + "m";
              }))
            : "lowercase" === r.meridiem &&
              (e = e.replace(y, function (e) {
                return e.toLocaleLowerCase();
              })),
          (e = e.replace(S, " ")),
          (e = e.trim())
        );
      }
      function s(e, t) {
        var n = !1;
        return (
          (e = e.replace(D, function () {
            return (n = !0), t;
          })),
          n || (e += " " + t),
          e
        );
      }
      function l(e, t, n, r) {
        var i = [];
        return (
          "narrow" === r ? i.push(t) : "short" === r && i.push(t, " "),
          i.push(n.simpleNumberFormat.format(e)),
          n.options.isRtl && i.reverse(),
          i.join("")
        );
      }
      function u(e, t, n) {
        return n.getMarkerYear(e) !== n.getMarkerYear(t)
          ? 5
          : n.getMarkerMonth(e) !== n.getMarkerMonth(t)
          ? 4
          : n.getMarkerDay(e) !== n.getMarkerDay(t)
          ? 2
          : f.timeAsMs(e) !== f.timeAsMs(t)
          ? 1
          : 0;
      }
      function d(e, t) {
        var n = {};
        for (var r in e) (r in m && !(m[r] <= t)) || (n[r] = e[r]);
        return n;
      }
      function c(e, t, n, r) {
        for (var i = 0; i < e.length; ) {
          var o = e.indexOf(t, i);
          if (-1 === o) break;
          var a = e.substr(0, o);
          i = o + t.length;
          for (var s = e.substr(i), l = 0; l < n.length; ) {
            var u = n.indexOf(r, l);
            if (-1 === u) break;
            var d = n.substr(0, u);
            l = u + r.length;
            var c = n.substr(l);
            if (a === d && s === c) return { before: a, after: s };
          }
        }
        return null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var p = n(1),
        f = n(4),
        h = n(7),
        g = n(17),
        v = {
          week: 3,
          separator: 0,
          omitZeroMinute: 0,
          meridiem: 0,
          omitCommas: 0,
        },
        m = {
          timeZoneName: 7,
          era: 6,
          year: 5,
          month: 4,
          day: 2,
          weekday: 2,
          hour: 1,
          minute: 1,
          second: 1,
        },
        y = /\s*([ap])\.?m\.?/i,
        E = /,/g,
        S = /\s+/g,
        b = /\u200e/g,
        D = /UTC|GMT/,
        w = (function () {
          function e(e) {
            var t = {},
              n = {},
              i = 0;
            for (var o in e)
              o in v
                ? ((n[o] = e[o]), (i = Math.max(v[o], i)))
                : ((t[o] = e[o]), o in m && (i = Math.max(m[o], i)));
            (this.standardDateProps = t),
              (this.extendedSettings = n),
              (this.severity = i),
              (this.buildFormattingFunc = g.memoize(r));
          }
          return (
            (e.prototype.format = function (e, t) {
              return this.buildFormattingFunc(
                this.standardDateProps,
                this.extendedSettings,
                t
              )(e);
            }),
            (e.prototype.formatRange = function (e, t, n) {
              var i = this,
                o = i.standardDateProps,
                a = i.extendedSettings,
                s = u(e.marker, t.marker, n.calendarSystem);
              if (!s) return this.format(e, n);
              var l = s;
              !(l > 1) ||
                ("numeric" !== o.year && "2-digit" !== o.year) ||
                ("numeric" !== o.month && "2-digit" !== o.month) ||
                ("numeric" !== o.day && "2-digit" !== o.day) ||
                (l = 1);
              var p = this.format(e, n),
                f = this.format(t, n);
              if (p === f) return p;
              var h = d(o, l),
                g = r(h, a, n),
                v = g(e),
                m = g(t),
                y = c(p, v, f, m),
                E = a.separator || "";
              return y ? y.before + v + E + m + y.after : p + E + f;
            }),
            (e.prototype.getLargestUnit = function () {
              switch (this.severity) {
                case 7:
                case 6:
                case 5:
                  return "year";
                case 4:
                  return "month";
                case 3:
                  return "week";
                default:
                  return "day";
              }
            }),
            e
          );
        })();
      t.NativeFormatter = w;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(7),
        i = (function () {
          function e(e) {
            this.func = e;
          }
          return (
            (e.prototype.format = function (e, t) {
              return this.func(r.createVerboseFormattingArg(e, null, t));
            }),
            (e.prototype.formatRange = function (e, t, n) {
              return this.func(r.createVerboseFormattingArg(e, t, n));
            }),
            e
          );
        })();
      t.FuncFormatter = i;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(35),
        i = n(28),
        o = (function () {
          function e(e) {
            var t = this;
            (this.handlePointerDown = function (e) {
              var n = t.dragging;
              n.setIgnoreMove(!t.component.isValidDateDownEl(n.pointer.downEl));
            }),
              (this.handleDragEnd = function (e) {
                var n = t.component;
                if (!t.dragging.pointer.wasTouchScroll) {
                  var r = t.hitDragging,
                    o = r.initialHit,
                    a = r.finalHit;
                  o &&
                    a &&
                    i.isHitsEqual(o, a) &&
                    n.calendar.triggerDateClick(
                      o.dateSpan,
                      o.dayEl,
                      n.view,
                      e.origEvent
                    );
                }
              }),
              (this.component = e),
              (this.dragging = new r.default(e.el)),
              (this.dragging.autoScroller.isEnabled = !1);
            var n = (this.hitDragging = new i.default(this.dragging, e));
            n.emitter.on("pointerdown", this.handlePointerDown),
              n.emitter.on("dragend", this.handleDragEnd);
          }
          return (
            (e.prototype.destroy = function () {
              this.dragging.destroy();
            }),
            e
          );
        })();
      t.default = o;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(3),
        i = n(24),
        o = (function () {
          function e() {
            (this.isVisible = !1),
              (this.sourceEl = null),
              (this.mirrorEl = null),
              (this.sourceElRect = null),
              (this.parentNode = document.body),
              (this.zIndex = 9999),
              (this.revertDuration = 0);
          }
          return (
            (e.prototype.start = function (e, t, n) {
              (this.sourceEl = e),
                (this.sourceElRect = this.sourceEl.getBoundingClientRect()),
                (this.origScreenX = t - window.pageXOffset),
                (this.origScreenY = n - window.pageYOffset),
                (this.deltaX = 0),
                (this.deltaY = 0),
                this.updateElPosition();
            }),
            (e.prototype.handleMove = function (e, t) {
              (this.deltaX = e - window.pageXOffset - this.origScreenX),
                (this.deltaY = t - window.pageYOffset - this.origScreenY),
                this.updateElPosition();
            }),
            (e.prototype.setIsVisible = function (e) {
              e
                ? this.isVisible ||
                  (this.mirrorEl && (this.mirrorEl.style.display = ""),
                  (this.isVisible = e),
                  this.updateElPosition())
                : this.isVisible &&
                  (this.mirrorEl && (this.mirrorEl.style.display = "none"),
                  (this.isVisible = e));
            }),
            (e.prototype.stop = function (e, t) {
              var n = this,
                r = function () {
                  n.cleanup(), t();
                };
              e &&
              this.mirrorEl &&
              this.isVisible &&
              this.revertDuration &&
              (this.deltaX || this.deltaY)
                ? this.doRevertAnimation(r, this.revertDuration)
                : setTimeout(r, 0);
            }),
            (e.prototype.doRevertAnimation = function (e, t) {
              var n = this.mirrorEl,
                o = this.sourceEl.getBoundingClientRect();
              (n.style.transition = "top " + t + "ms,left " + t + "ms"),
                r.applyStyle(n, { left: o.left, top: o.top }),
                i.whenTransitionDone(n, function () {
                  (n.style.transition = ""), e();
                });
            }),
            (e.prototype.cleanup = function () {
              this.mirrorEl &&
                (r.removeElement(this.mirrorEl), (this.mirrorEl = null)),
                (this.sourceEl = null);
            }),
            (e.prototype.updateElPosition = function () {
              this.sourceEl &&
                this.isVisible &&
                r.applyStyle(this.getMirrorEl(), {
                  left: this.sourceElRect.left + this.deltaX,
                  top: this.sourceElRect.top + this.deltaY,
                });
            }),
            (e.prototype.getMirrorEl = function () {
              var e = this.sourceElRect,
                t = this.mirrorEl;
              return (
                t ||
                  ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)),
                  t.classList.add("fc-unselectable"),
                  t.classList.add("fc-dragging"),
                  r.applyStyle(t, {
                    position: "fixed",
                    zIndex: this.zIndex,
                    visibility: "",
                    boxSizing: "border-box",
                    width: e.right - e.left,
                    height: e.bottom - e.top,
                    right: "auto",
                    bottom: "auto",
                    margin: 0,
                  }),
                  this.parentNode.appendChild(t)),
                t
              );
            }),
            e
          );
        })();
      t.default = o;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(151),
        i = "function" == typeof performance ? performance.now : Date.now,
        o = (function () {
          function e() {
            var e = this;
            (this.isEnabled = !0),
              (this.scrollQuery = [window, ".fc-scroller"]),
              (this.edgeThreshold = 50),
              (this.maxVelocity = 300),
              (this.pointerScreenX = null),
              (this.pointerScreenY = null),
              (this.isAnimating = !1),
              (this.scrollCaches = null),
              (this.everMovedUp = !1),
              (this.everMovedDown = !1),
              (this.everMovedLeft = !1),
              (this.everMovedRight = !1),
              (this.animate = function () {
                if (e.isAnimating) {
                  var t = e.computeBestEdge(
                    e.pointerScreenX + window.pageXOffset,
                    e.pointerScreenY + window.pageYOffset
                  );
                  if (t) {
                    var n = i();
                    e.handleSide(t, (n - e.msSinceRequest) / 1e3),
                      e.requestAnimation(n);
                  } else e.isAnimating = !1;
                }
              });
          }
          return (
            (e.prototype.start = function (e, t) {
              this.isEnabled &&
                ((this.scrollCaches = this.buildCaches()),
                (this.pointerScreenX = null),
                (this.pointerScreenY = null),
                (this.everMovedUp = !1),
                (this.everMovedDown = !1),
                (this.everMovedLeft = !1),
                (this.everMovedRight = !1),
                this.handleMove(e, t));
            }),
            (e.prototype.handleMove = function (e, t) {
              if (this.isEnabled) {
                var n = e - window.pageXOffset,
                  r = t - window.pageYOffset,
                  o =
                    null === this.pointerScreenY ? 0 : r - this.pointerScreenY,
                  a =
                    null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
                o < 0
                  ? (this.everMovedUp = !0)
                  : o > 0 && (this.everMovedDown = !0),
                  a < 0
                    ? (this.everMovedLeft = !0)
                    : o > 0 && (this.everMovedRight = !0),
                  (this.pointerScreenX = n),
                  (this.pointerScreenY = r),
                  this.isAnimating ||
                    ((this.isAnimating = !0), this.requestAnimation(i()));
              }
            }),
            (e.prototype.stop = function () {
              if (this.isEnabled) {
                this.isAnimating = !1;
                for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                  t[e].destroy();
                }
                this.scrollCaches = null;
              }
            }),
            (e.prototype.requestAnimation = function (e) {
              (this.msSinceRequest = e), requestAnimationFrame(this.animate);
            }),
            (e.prototype.handleSide = function (e, t) {
              var n = e.scrollCache,
                r = this.edgeThreshold,
                i = r - e.distance,
                o = ((i * i) / (r * r)) * this.maxVelocity * t,
                a = 1;
              switch (e.name) {
                case "left":
                  a = -1;
                case "right":
                  n.setScrollLeft(n.getScrollLeft() + o * a);
                  break;
                case "top":
                  a = -1;
                case "bottom":
                  n.setScrollTop(n.getScrollTop() + o * a);
              }
            }),
            (e.prototype.computeBestEdge = function (e, t) {
              for (
                var n = this.edgeThreshold,
                  r = null,
                  i = 0,
                  o = this.scrollCaches;
                i < o.length;
                i++
              ) {
                var a = o[i],
                  s = a.clientRect,
                  l = e - s.left,
                  u = s.right - e,
                  d = t - s.top,
                  c = s.bottom - t;
                l >= 0 &&
                  u >= 0 &&
                  d >= 0 &&
                  c >= 0 &&
                  (d <= n &&
                    this.everMovedUp &&
                    a.canScrollUp() &&
                    (!r || r.distance > d) &&
                    (r = { scrollCache: a, name: "top", distance: d }),
                  c <= n &&
                    this.everMovedDown &&
                    a.canScrollDown() &&
                    (!r || r.distance > c) &&
                    (r = { scrollCache: a, name: "bottom", distance: c }),
                  l <= n &&
                    this.everMovedLeft &&
                    a.canScrollLeft() &&
                    (!r || r.distance > l) &&
                    (r = { scrollCache: a, name: "left", distance: l }),
                  u <= n &&
                    this.everMovedRight &&
                    a.canScrollRight() &&
                    (!r || r.distance > u) &&
                    (r = { scrollCache: a, name: "right", distance: u }));
              }
              return r;
            }),
            (e.prototype.buildCaches = function () {
              return this.queryScrollEls().map(function (e) {
                return e === window
                  ? new r.WindowScrollGeomCache(!1)
                  : new r.ElementScrollGeomCache(e, !1);
              });
            }),
            (e.prototype.queryScrollEls = function () {
              for (var e = [], t = 0, n = this.scrollQuery; t < n.length; t++) {
                var r = n[t];
                "object" == typeof r
                  ? e.push(r)
                  : e.push.apply(
                      e,
                      Array.prototype.slice.call(document.querySelectorAll(r))
                    );
              }
              return e;
            }),
            e
          );
        })();
      t.default = o;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(24),
        i = n(16),
        o = n(3),
        a = n(10),
        s = (function () {
          function e(e) {
            var t = this;
            (this.handleSegClick = function (e, n) {
              var r = t.component,
                s = a.getElSeg(n);
              if (s && r.isValidSegDownEl(e.target)) {
                var l = o.elementClosest(e.target, ".fc-has-url"),
                  u = l ? l.querySelector("a[href]").href : "";
                r.publiclyTrigger("eventClick", [
                  {
                    el: n,
                    event: new i.default(
                      r.calendar,
                      s.eventRange.def,
                      s.eventRange.instance
                    ),
                    jsEvent: e,
                    view: r.view,
                  },
                ]),
                  u && !e.defaultPrevented && (window.location.href = u);
              }
            }),
              (this.component = e),
              (this.destroy = r.listenBySelector(
                e.el,
                "click",
                e.fgSegSelector + "," + e.bgSegSelector,
                this.handleSegClick
              ));
          }
          return e;
        })();
      t.default = s;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(24),
        i = n(16),
        o = n(10),
        a = (function () {
          function e(e) {
            var t = this;
            (this.handleEventElRemove = function (e) {
              e === t.currentSegEl && t.handleSegLeave(null, t.currentSegEl);
            }),
              (this.handleSegEnter = function (e, n) {
                o.getElSeg(n) &&
                  (n.classList.add("fc-allow-mouse-resize"),
                  (t.currentSegEl = n),
                  t.triggerEvent("eventMouseEnter", e, n));
              }),
              (this.handleSegLeave = function (e, n) {
                t.currentSegEl &&
                  (n.classList.remove("fc-allow-mouse-resize"),
                  (t.currentSegEl = null),
                  t.triggerEvent("eventMouseLeave", e, n));
              }),
              (this.component = e),
              (this.removeHoverListeners = r.listenToHoverBySelector(
                e.el,
                e.fgSegSelector + "," + e.bgSegSelector,
                this.handleSegEnter,
                this.handleSegLeave
              )),
              e.calendar.on("eventElRemove", this.handleEventElRemove);
          }
          return (
            (e.prototype.destroy = function () {
              this.removeHoverListeners(),
                this.component.calendar.off(
                  "eventElRemove",
                  this.handleEventElRemove
                );
            }),
            (e.prototype.triggerEvent = function (e, t, n) {
              var r = this.component,
                a = o.getElSeg(n);
              (t && !r.isValidSegDownEl(t.target)) ||
                r.publiclyTrigger(e, [
                  {
                    el: n,
                    event: new i.default(
                      this.component.calendar,
                      a.eventRange.def,
                      a.eventRange.instance
                    ),
                    jsEvent: t,
                    view: r.view,
                  },
                ]);
            }),
            e
          );
        })();
      t.default = a;
    },
    function (e, t, n) {
      function r(e, t, n, r, i) {
        for (
          var o = e.component.dateEnv,
            a = e.dateSpan.range.start,
            s = t.dateSpan.range.start,
            l = u.diffDates(a, s, o, e.component.largeUnit),
            d = {},
            c = 0,
            p = i;
          c < p.length;
          c++
        ) {
          var h = p[c],
            g = h(e, t);
          if (!1 === g) return null;
          g && f.__assign(d, g);
        }
        if (n) {
          if (o.add(r.start, l) < r.end) return (d.startDelta = l), d;
        } else if (o.add(r.end, l) > r.start) return (d.endDelta = l), d;
        return null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(28),
        o = n(43),
        a = n(3),
        s = n(35),
        l = n(14),
        u = n(2),
        d = n(16),
        c = n(10),
        p = n(9),
        f = n(1),
        h = (function () {
          function e(e) {
            var t = this;
            (this.draggingSeg = null),
              (this.eventRange = null),
              (this.relevantEvents = null),
              (this.validMutation = null),
              (this.mutatedRelevantEvents = null),
              (this.handlePointerDown = function (e) {
                var n = t.component,
                  r = t.querySeg(e),
                  i = (t.eventRange = r.eventRange);
                (t.dragging.minDistance = n.opt("eventDragMinDistance")),
                  t.dragging.setIgnoreMove(
                    !t.component.isValidSegDownEl(e.origEvent.target) ||
                      (e.isTouch &&
                        t.component.props.eventSelection !==
                          i.instance.instanceId)
                  );
              }),
              (this.handleDragStart = function (e) {
                var n = t.component.calendar,
                  r = t.eventRange;
                (t.relevantEvents = l.getRelevantEvents(
                  n.state.eventStore,
                  t.eventRange.instance.instanceId
                )),
                  (t.draggingSeg = t.querySeg(e)),
                  n.unselect(),
                  n.publiclyTrigger("eventResizeStart", [
                    {
                      el: t.draggingSeg.el,
                      event: new d.default(n, r.def, r.instance),
                      jsEvent: e.origEvent,
                      view: t.component.view,
                    },
                  ]);
              }),
              (this.handleHitUpdate = function (e, n, a) {
                var s = t.component.calendar,
                  d = t.relevantEvents,
                  c = t.hitDragging.initialHit,
                  p = t.eventRange.instance,
                  f = null,
                  h = null,
                  g = !1,
                  v = {
                    affectedEvents: d,
                    mutatedEvents: l.createEmptyEventStore(),
                    isEvent: !0,
                    origSeg: t.draggingSeg,
                  };
                e &&
                  (f = r(
                    c,
                    e,
                    a.subjectEl.classList.contains("fc-start-resizer"),
                    p.range,
                    s.pluginSystem.hooks.eventResizeJoinTransforms
                  )),
                  f &&
                    ((h = o.applyMutationToEventStore(d, s.eventUiBases, f, s)),
                    (v.mutatedEvents = h),
                    t.component.isInteractionValid(v) ||
                      ((g = !0),
                      (f = null),
                      (h = null),
                      (v.mutatedEvents = null))),
                  h
                    ? s.dispatch({ type: "SET_EVENT_RESIZE", state: v })
                    : s.dispatch({ type: "UNSET_EVENT_RESIZE" }),
                  g ? u.disableCursor() : u.enableCursor(),
                  n ||
                    (f && i.isHitsEqual(c, e) && (f = null),
                    (t.validMutation = f),
                    (t.mutatedRelevantEvents = h));
              }),
              (this.handleDragEnd = function (e) {
                var n = t.component.calendar,
                  r = t.component.view,
                  i = t.eventRange.def,
                  o = t.eventRange.instance,
                  a = new d.default(n, i, o),
                  s = t.relevantEvents,
                  l = t.mutatedRelevantEvents;
                n.publiclyTrigger("eventResizeStop", [
                  {
                    el: t.draggingSeg.el,
                    event: a,
                    jsEvent: e.origEvent,
                    view: r,
                  },
                ]),
                  t.validMutation
                    ? (n.dispatch({ type: "MERGE_EVENTS", eventStore: l }),
                      n.publiclyTrigger("eventResize", [
                        {
                          el: t.draggingSeg.el,
                          startDelta:
                            t.validMutation.startDelta || p.createDuration(0),
                          endDelta:
                            t.validMutation.endDelta || p.createDuration(0),
                          prevEvent: a,
                          event: new d.default(
                            n,
                            l.defs[i.defId],
                            o ? l.instances[o.instanceId] : null
                          ),
                          revert: function () {
                            n.dispatch({ type: "MERGE_EVENTS", eventStore: s });
                          },
                          jsEvent: e.origEvent,
                          view: r,
                        },
                      ]))
                    : n.publiclyTrigger("_noEventResize"),
                  (t.draggingSeg = null),
                  (t.relevantEvents = null),
                  (t.validMutation = null);
              }),
              (this.component = e);
            var n = (this.dragging = new s.default(e.el));
            (n.pointer.selector = ".fc-resizer"),
              (n.touchScrollAllowed = !1),
              (n.autoScroller.isEnabled = e.opt("dragScroll"));
            var a = (this.hitDragging = new i.default(this.dragging, e));
            a.emitter.on("pointerdown", this.handlePointerDown),
              a.emitter.on("dragstart", this.handleDragStart),
              a.emitter.on("hitupdate", this.handleHitUpdate),
              a.emitter.on("dragend", this.handleDragEnd);
          }
          return (
            (e.prototype.destroy = function () {
              this.dragging.destroy();
            }),
            (e.prototype.querySeg = function (e) {
              return c.getElSeg(
                a.elementClosest(e.subjectEl, this.component.fgSegSelector)
              );
            }),
            e
          );
        })();
      t.default = h;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(2),
        o = n(36),
        a = n(47),
        s = (function () {
          function e(e) {
            (this.overrides = r.__assign({}, e)),
              (this.dynamicOverrides = {}),
              this.compute();
          }
          return (
            (e.prototype.add = function (e, t) {
              (this.dynamicOverrides[e] = t), this.compute();
            }),
            (e.prototype.compute = function () {
              var e, t, n, r;
              (e = i.firstDefined(
                this.dynamicOverrides.locale,
                this.overrides.locale,
                o.globalDefaults.locale
              )),
                (t = a.getLocale(e).options),
                (n = i.firstDefined(
                  this.dynamicOverrides.dir,
                  this.overrides.dir,
                  t.dir
                )),
                (r = "rtl" === n ? o.rtlDefaults : {}),
                (this.dirDefaults = r),
                (this.localeDefaults = t),
                (this.computed = o.mergeOptions([
                  o.globalDefaults,
                  r,
                  t,
                  this.overrides,
                  this.dynamicOverrides,
                ]));
            }),
            e
          );
        })();
      t.default = s;
    },
    function (e, t, n) {
      function r(e, t) {
        a[e] = t;
      }
      function i(e) {
        return new a[e]();
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(4),
        a = {};
      (t.registerCalendarSystem = r),
        (t.createCalendarSystem = i),
        r(
          "gregory",
          (function () {
            function e() {}
            return (
              (e.prototype.getMarkerYear = function (e) {
                return e.getUTCFullYear();
              }),
              (e.prototype.getMarkerMonth = function (e) {
                return e.getUTCMonth();
              }),
              (e.prototype.getMarkerDay = function (e) {
                return e.getUTCDate();
              }),
              (e.prototype.arrayToMarker = function (e) {
                return o.arrayToUtcDate(e);
              }),
              (e.prototype.markerToArray = function (e) {
                return o.dateToUtcArray(e);
              }),
              e
            );
          })()
        );
    },
    function (e, t, n) {
      function r(e, t, n) {
        for (
          var r = i(e.viewType, t),
            g = o(e.dateProfile, t, e.currentDate, r, n),
            v = f.default(e.eventSources, t, g, n),
            m = p.__assign({}, e, {
              viewType: r,
              dateProfile: g,
              currentDate: a(e.currentDate, t, g),
              eventSources: v,
              eventStore: h.default(e.eventStore, t, v, g, n),
              dateSelection: s(e.dateSelection, t, n),
              eventSelection: l(e.eventSelection, t),
              eventDrag: u(e.eventDrag, t, v, n),
              eventResize: d(e.eventResize, t, v, n),
              eventSourceLoadingLevel: c(v),
              loadingLevel: c(v),
            }),
            y = 0,
            E = n.pluginSystem.hooks.reducers;
          y < E.length;
          y++
        ) {
          m = (0, E[y])(m, t, n);
        }
        return m;
      }
      function i(e, t) {
        switch (t.type) {
          case "SET_VIEW_TYPE":
            return t.viewType;
          default:
            return e;
        }
      }
      function o(e, t, n, r, i) {
        var o;
        switch (t.type) {
          case "PREV":
            o = i.dateProfileGenerators[r].buildPrev(e);
            break;
          case "NEXT":
            o = i.dateProfileGenerators[r].buildNext(e);
            break;
          case "SET_DATE":
            (e.activeRange &&
              v.rangeContainsMarker(e.activeRange, t.dateMarker)) ||
              (o = i.dateProfileGenerators[r].build(t.dateMarker, void 0, !0));
            break;
          case "SET_VIEW_TYPE":
            o = i.dateProfileGenerators[r].build(t.dateMarker || n, void 0, !0);
        }
        return !o || !o.isValid || (e && g.isDateProfilesEqual(e, o)) ? e : o;
      }
      function a(e, t, n) {
        switch (t.type) {
          case "PREV":
          case "NEXT":
            return v.rangeContainsMarker(n.currentRange, e)
              ? e
              : n.currentRange.start;
          case "SET_DATE":
          case "SET_VIEW_TYPE":
            var r = t.dateMarker || e;
            return n.activeRange && !v.rangeContainsMarker(n.activeRange, r)
              ? n.currentRange.start
              : r;
          default:
            return e;
        }
      }
      function s(e, t, n) {
        switch (t.type) {
          case "SELECT_DATES":
            return t.selection;
          case "UNSELECT_DATES":
            return null;
          default:
            return e;
        }
      }
      function l(e, t) {
        switch (t.type) {
          case "SELECT_EVENT":
            return t.eventInstanceId;
          case "UNSELECT_EVENT":
            return "";
          default:
            return e;
        }
      }
      function u(e, t, n, r) {
        switch (t.type) {
          case "SET_EVENT_DRAG":
            var i = t.state;
            return {
              affectedEvents: i.affectedEvents,
              mutatedEvents: i.mutatedEvents,
              isEvent: i.isEvent,
              origSeg: i.origSeg,
            };
          case "UNSET_EVENT_DRAG":
            return null;
          default:
            return e;
        }
      }
      function d(e, t, n, r) {
        switch (t.type) {
          case "SET_EVENT_RESIZE":
            var i = t.state;
            return {
              affectedEvents: i.affectedEvents,
              mutatedEvents: i.mutatedEvents,
              isEvent: i.isEvent,
              origSeg: i.origSeg,
            };
          case "UNSET_EVENT_RESIZE":
            return null;
          default:
            return e;
        }
      }
      function c(e) {
        var t = 0;
        for (var n in e) e[n].isFetching && t++;
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var p = n(1),
        f = n(199),
        h = n(143),
        g = n(48),
        v = n(8);
      t.default = r;
    },
    function (e, t, n) {
      function r(e, t, n, r) {
        switch (t.type) {
          case "ADD_EVENT_SOURCES":
            return i(e, t.sources, n ? n.activeRange : null, r);
          case "REMOVE_EVENT_SOURCE":
            return o(e, t.sourceId);
          case "PREV":
          case "NEXT":
          case "SET_DATE":
          case "SET_VIEW_TYPE":
            return n ? a(e, n.activeRange, r) : e;
          case "FETCH_EVENT_SOURCES":
          case "CHANGE_TIMEZONE":
            return l(
              e,
              t.sourceIds ? h.arrayToHash(t.sourceIds) : c(e),
              n ? n.activeRange : null,
              r
            );
          case "RECEIVE_EVENTS":
          case "RECEIVE_EVENT_ERROR":
            return d(e, t.sourceId, t.fetchId, t.fetchRange);
          case "REMOVE_ALL_EVENT_SOURCES":
            return {};
          default:
            return e;
        }
      }
      function i(e, t, n, r) {
        for (var i = {}, o = 0, s = t; o < s.length; o++) {
          var l = s[o];
          i[l.sourceId] = l;
        }
        return n && (i = a(i, n, r)), p.__assign({}, e, i);
      }
      function o(e, t) {
        return h.filterHash(e, function (e) {
          return e.sourceId !== t;
        });
      }
      function a(e, t, n) {
        return l(
          e,
          h.filterHash(e, function (e) {
            return s(e, t, n);
          }),
          t,
          n
        );
      }
      function s(e, t, n) {
        return f.doesSourceNeedRange(e)
          ? !n.opt("lazyFetching") ||
              !e.fetchRange ||
              t.start < e.fetchRange.start ||
              t.end > e.fetchRange.end
          : !e.latestFetchId;
      }
      function l(e, t, n, r) {
        var i = {};
        for (var o in e) {
          var a = e[o];
          t[o] ? (i[o] = u(a, n, r)) : (i[o] = a);
        }
        return i;
      }
      function u(e, t, n) {
        var r = f.getEventSourceDef(e.sourceDefId),
          i = String(v++);
        return (
          r.fetch(
            { eventSource: e, calendar: n, range: t },
            function (r) {
              var o,
                a,
                s = r.rawEvents,
                l = n.opt("eventSourceSuccess");
              e.success && (a = e.success(s, r.response)),
                l && (o = l(s, r.response)),
                (s = a || o || s),
                n.dispatch({
                  type: "RECEIVE_EVENTS",
                  sourceId: e.sourceId,
                  fetchId: i,
                  fetchRange: t,
                  rawEvents: s,
                });
            },
            function (r) {
              var o = n.opt("eventSourceFailure");
              g.warn(r.message, r),
                e.failure && e.failure(r),
                o && o(r),
                n.dispatch({
                  type: "RECEIVE_EVENT_ERROR",
                  sourceId: e.sourceId,
                  fetchId: i,
                  fetchRange: t,
                  error: r,
                });
            }
          ),
          p.__assign({}, e, { isFetching: !0, latestFetchId: i })
        );
      }
      function d(e, t, n, r) {
        var i,
          o = e[t];
        return o && n === o.latestFetchId
          ? p.__assign(
              {},
              e,
              ((i = {}),
              (i[t] = p.__assign({}, o, { isFetching: !1, fetchRange: r })),
              i)
            )
          : e;
      }
      function c(e) {
        return h.filterHash(e, function (e) {
          return f.doesSourceNeedRange(e);
        });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var p = n(1),
        f = n(29),
        h = n(12),
        g = n(2);
      t.default = r;
      var v = 0;
    },
    function (e, t, n) {
      function r(e) {
        return a.mapHash(e, i);
      }
      function i(e) {
        "function" == typeof e && (e = { class: e });
        var t = {},
          n = o.refineProps(e, s, {}, t);
        return { superType: n.type, class: n.class, options: t };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(2),
        a = n(12);
      t.parseViewConfigs = r;
      var s = { type: String, class: null };
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(11),
        o = n(3),
        a = n(34),
        s = n(20),
        l = (function (e) {
          function t(t, n) {
            var r = e.call(this, t) || this;
            return (
              (r._renderLayout = s.memoizeRendering(
                r.renderLayout,
                r.unrenderLayout
              )),
              (r._updateTitle = s.memoizeRendering(r.updateTitle, null, [
                r._renderLayout,
              ])),
              (r._updateActiveButton = s.memoizeRendering(
                r.updateActiveButton,
                null,
                [r._renderLayout]
              )),
              (r._updateToday = s.memoizeRendering(r.updateToday, null, [
                r._renderLayout,
              ])),
              (r._updatePrev = s.memoizeRendering(r.updatePrev, null, [
                r._renderLayout,
              ])),
              (r._updateNext = s.memoizeRendering(r.updateNext, null, [
                r._renderLayout,
              ])),
              (r.el = o.createElement("div", { className: "fc-toolbar " + n })),
              r
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this),
                this._renderLayout.unrender(),
                o.removeElement(this.el);
            }),
            (t.prototype.render = function (e) {
              this._renderLayout(e.layout),
                this._updateTitle(e.title),
                this._updateActiveButton(e.activeButton),
                this._updateToday(e.isTodayEnabled),
                this._updatePrev(e.isPrevEnabled),
                this._updateNext(e.isNextEnabled);
            }),
            (t.prototype.renderLayout = function (e) {
              var t = this.el;
              (this.viewsWithButtons = []),
                o.appendToElement(t, this.renderSection("left", e.left)),
                o.appendToElement(t, this.renderSection("right", e.right)),
                o.appendToElement(t, this.renderSection("center", e.center)),
                o.appendToElement(t, '<div class="fc-clear"></div>');
            }),
            (t.prototype.unrenderLayout = function () {
              this.el.innerHTML = "";
            }),
            (t.prototype.renderSection = function (e, t) {
              var n = this,
                r = this,
                a = r.theme,
                s = r.calendar,
                l = s.optionsManager,
                u = s.viewSpecs,
                d = o.createElement("div", { className: "fc-" + e }),
                c = l.computed.customButtons || {},
                p = l.overrides.buttonText || {},
                f = l.computed.buttonText || {};
              return (
                t &&
                  t.split(" ").forEach(function (e, t) {
                    var r,
                      l = [],
                      h = !0;
                    if (
                      (e.split(",").forEach(function (e, t) {
                        var r, d, g, v, m, y, E, S, b;
                        if ("title" === e)
                          l.push(o.htmlToElement("<h2>&nbsp;</h2>")), (h = !1);
                        else if (
                          ((r = c[e])
                            ? ((g = function (e) {
                                r.click && r.click.call(S, e);
                              }),
                              (v = a.getCustomButtonIconClass(r)) ||
                                (v = a.getIconClass(e)) ||
                                (m = r.text))
                            : (d = u[e])
                            ? (n.viewsWithButtons.push(e),
                              (g = function () {
                                s.changeView(e);
                              }),
                              (m = d.buttonTextOverride) ||
                                (v = a.getIconClass(e)) ||
                                (m = d.buttonTextDefault))
                            : s[e] &&
                              ((g = function () {
                                s[e]();
                              }),
                              (m = p[e]) ||
                                (v = a.getIconClass(e)) ||
                                (m = f[e])),
                          g)
                        ) {
                          (E = [
                            "fc-" + e + "-button",
                            a.getClass("button"),
                            a.getClass("stateDefault"),
                          ]),
                            m
                              ? ((y = i.htmlEscape(m)), (b = ""))
                              : v &&
                                ((y = "<span class='" + v + "'></span>"),
                                (b = ' aria-label="' + e + '"')),
                            (S = o.htmlToElement(
                              '<button type="button" class="' +
                                E.join(" ") +
                                '"' +
                                b +
                                ">" +
                                y +
                                "</button>"
                            ));
                          var D = function () {
                            var e = a.getClass("stateActive"),
                              t = a.getClass("stateDisabled");
                            return !(
                              (e && S.classList.contains(e)) ||
                              (t && S.classList.contains(t))
                            );
                          };
                          S.addEventListener("click", function (e) {
                            var t = a.getClass("stateDisabled"),
                              n = a.getClass("stateHover");
                            (t && S.classList.contains(t)) ||
                              (g(e), !D() && n && S.classList.remove(n));
                          }),
                            S.addEventListener("mousedown", function (e) {
                              var t = a.getClass("stateDown");
                              D() && t && S.classList.add(t);
                            }),
                            S.addEventListener("mouseup", function (e) {
                              var t = a.getClass("stateDown");
                              t && S.classList.remove(t);
                            }),
                            S.addEventListener("mouseenter", function (e) {
                              var t = a.getClass("stateHover");
                              D() && t && S.classList.add(t);
                            }),
                            S.addEventListener("mouseleave", function (e) {
                              var t = a.getClass("stateHover"),
                                n = a.getClass("stateDown");
                              t && S.classList.remove(t),
                                n && S.classList.remove(n);
                            }),
                            l.push(S);
                        }
                      }),
                      h && l.length > 0)
                    ) {
                      var g = a.getClass("cornerLeft"),
                        v = a.getClass("cornerRight");
                      g && l[0].classList.add(g),
                        v && l[l.length - 1].classList.add(v);
                    }
                    if (l.length > 1) {
                      r = document.createElement("div");
                      var m = a.getClass("buttonGroup");
                      h && m && r.classList.add(m),
                        o.appendToElement(r, l),
                        d.appendChild(r);
                    } else o.appendToElement(d, l);
                  }),
                d
              );
            }),
            (t.prototype.updateToday = function (e) {
              this.toggleButtonEnabled("today", e);
            }),
            (t.prototype.updatePrev = function (e) {
              this.toggleButtonEnabled("prev", e);
            }),
            (t.prototype.updateNext = function (e) {
              this.toggleButtonEnabled("next", e);
            }),
            (t.prototype.updateTitle = function (e) {
              o.findElements(this.el, "h2").forEach(function (t) {
                t.innerText = e;
              });
            }),
            (t.prototype.updateActiveButton = function (e) {
              var t = this.theme.getClass("stateActive");
              o.findElements(this.el, "button").forEach(function (n) {
                e && n.classList.contains("fc-" + e + "-button")
                  ? n.classList.add(t)
                  : n.classList.remove(t);
              });
            }),
            (t.prototype.toggleButtonEnabled = function (e, t) {
              var n = this.theme.getClass("stateDisabled");
              o.findElements(this.el, ".fc-" + e + "-button").forEach(function (
                e
              ) {
                (e.disabled = !t),
                  t ? e.classList.remove(n) : e.classList.add(n);
              });
            }),
            t
          );
        })(a.default);
      t.default = l;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(163),
        o = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.attachSegs = function (e, t) {
              (this.segsByCol = this.timeGrid.groupSegsByCol(e)),
                this.timeGrid.attachSegsByCol(
                  this.segsByCol,
                  this.timeGrid.mirrorContainerEls
                ),
                (this.sourceSeg = t.sourceSeg);
            }),
            (t.prototype.generateSegCss = function (t) {
              var n = e.prototype.generateSegCss.call(this, t),
                r = this.sourceSeg;
              if (r && r.col === t.col) {
                var i = e.prototype.generateSegCss.call(this, r);
                (n.left = i.left),
                  (n.right = i.right),
                  (n.marginLeft = i.marginLeft),
                  (n.marginRight = i.marginRight);
              }
              return n;
            }),
            t
          );
        })(i.default);
      t.default = o;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(64),
        o = (function (e) {
          function t(t) {
            var n = e.call(this, t.context) || this;
            return (n.timeGrid = t), n;
          }
          return (
            r.__extends(t, e),
            (t.prototype.attachSegs = function (e, t) {
              var n,
                r = this.timeGrid;
              return (
                "bgEvent" === e
                  ? (n = r.bgContainerEls)
                  : "businessHours" === e
                  ? (n = r.businessContainerEls)
                  : "highlight" === e && (n = r.highlightContainerEls),
                r.attachSegsByCol(r.groupSegsByCol(t), n),
                t.map(function (e) {
                  return e.el;
                })
              );
            }),
            (t.prototype.computeSegSizes = function (e) {
              this.timeGrid.computeSegVerticals(e);
            }),
            (t.prototype.assignSegSizes = function (e) {
              this.timeGrid.assignSegVerticals(e);
            }),
            t
          );
        })(i.default);
      t.default = o;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(3),
        i = n(24),
        o = n(15),
        a = (function () {
          function e(e) {
            var t = this;
            (this.isHidden = !0),
              (this.margin = 10),
              (this.documentMousedown = function (e) {
                t.el && !t.el.contains(e.target) && t.hide();
              }),
              (this.options = e);
          }
          return (
            (e.prototype.show = function () {
              this.isHidden &&
                (this.el || this.render(),
                (this.el.style.display = ""),
                this.position(),
                (this.isHidden = !1),
                this.trigger("show"));
            }),
            (e.prototype.hide = function () {
              this.isHidden ||
                ((this.el.style.display = "none"),
                (this.isHidden = !0),
                this.trigger("hide"));
            }),
            (e.prototype.render = function () {
              var e = this,
                t = this.options,
                n = (this.el = r.createElement("div", {
                  className: "fc-popover " + (t.className || ""),
                  style: { top: "0", left: "0" },
                }));
              "function" == typeof t.content && t.content(n),
                t.parentEl.appendChild(n),
                i.listenBySelector(n, "click", ".fc-close", function (t) {
                  e.hide();
                }),
                t.autoHide &&
                  document.addEventListener(
                    "mousedown",
                    this.documentMousedown
                  );
            }),
            (e.prototype.destroy = function () {
              this.hide(),
                this.el && (r.removeElement(this.el), (this.el = null)),
                document.removeEventListener(
                  "mousedown",
                  this.documentMousedown
                );
            }),
            (e.prototype.position = function () {
              var e,
                t,
                n = this.options,
                i = this.el,
                a = i.getBoundingClientRect(),
                s = o.computeRect(i.offsetParent),
                l = o.computeClippingRect(n.parentEl);
              (e = n.top || 0),
                (t =
                  void 0 !== n.left
                    ? n.left
                    : void 0 !== n.right
                    ? n.right - a.width
                    : 0),
                (e = Math.min(e, l.bottom - a.height - this.margin)),
                (e = Math.max(e, l.top + this.margin)),
                (t = Math.min(t, l.right - a.width - this.margin)),
                (t = Math.max(t, l.left + this.margin)),
                r.applyStyle(i, { top: e - s.top, left: t - s.left });
            }),
            (e.prototype.trigger = function (e) {
              this.options[e] &&
                this.options[e].apply(
                  this,
                  Array.prototype.slice.call(arguments, 1)
                );
            }),
            e
          );
        })();
      t.default = a;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(3),
        o = n(165),
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.attachSegs = function (e, t) {
              var n = t.sourceSeg,
                r = (this.rowStructs = this.renderSegRows(e));
              this.dayGrid.rowEls.forEach(function (e, t) {
                var o,
                  a,
                  s = i.htmlToElement(
                    '<div class="fc-mirror-skeleton"><table></table></div>'
                  );
                n && n.row === t
                  ? (o = n.el)
                  : (o = e.querySelector(".fc-content-skeleton tbody")) ||
                    (o = e.querySelector(".fc-content-skeleton table")),
                  (a =
                    o.getBoundingClientRect().top -
                    e.getBoundingClientRect().top),
                  (s.style.top = a + "px"),
                  s.querySelector("table").appendChild(r[t].tbodyEl),
                  e.appendChild(s);
              });
            }),
            t
          );
        })(o.default);
      t.default = a;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(3),
        o = n(64),
        a = (function (e) {
          function t(t) {
            var n = e.call(this, t.context) || this;
            return (n.fillSegTag = "td"), (n.dayGrid = t), n;
          }
          return (
            r.__extends(t, e),
            (t.prototype.renderSegs = function (t, n) {
              "bgEvent" === t &&
                (n = n.filter(function (e) {
                  return e.eventRange.def.allDay;
                })),
                e.prototype.renderSegs.call(this, t, n);
            }),
            (t.prototype.attachSegs = function (e, t) {
              var n,
                r,
                i,
                o = [];
              for (n = 0; n < t.length; n++)
                (r = t[n]),
                  (i = this.renderFillRow(e, r)),
                  this.dayGrid.rowEls[r.row].appendChild(i),
                  o.push(i);
              return o;
            }),
            (t.prototype.renderFillRow = function (e, t) {
              var n,
                r,
                o,
                a = this.dayGrid,
                s = a.colCnt,
                l = a.isRtl,
                u = l ? s - 1 - t.lastCol : t.firstCol,
                d = l ? s - 1 - t.firstCol : t.lastCol,
                c = u,
                p = d + 1;
              (n = "businessHours" === e ? "bgevent" : e.toLowerCase()),
                (r = i.htmlToElement(
                  '<div class="fc-' +
                    n +
                    '-skeleton"><table><tr></tr></table></div>'
                )),
                (o = r.getElementsByTagName("tr")[0]),
                c > 0 &&
                  i.appendToElement(o, new Array(c + 1).join("<td></td>")),
                (t.el.colSpan = p - c),
                o.appendChild(t.el),
                p < s &&
                  i.appendToElement(o, new Array(s - p + 1).join("<td></td>"));
              var f = a.renderProps.renderIntroHtml();
              return (
                f &&
                  (a.isRtl
                    ? i.appendToElement(o, f)
                    : i.prependToElement(o, f)),
                r
              );
            }),
            t
          );
        })(o.default);
      t.default = a;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(22),
        o = n(166),
        a = n(11),
        s = n(7),
        l = n(51),
        u = n(15),
        d = n(32),
        c = n(4),
        p = n(3),
        f = n(20),
        h = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this,
              i = (r.eventRenderer = new g(r)),
              o = (r.renderFrame = f.memoizeRendering(r._renderFrame));
            return (
              (r.renderFgEvents = f.memoizeRendering(
                i.renderSegs.bind(i),
                i.unrender.bind(i),
                [o]
              )),
              (r.renderEventSelection = f.memoizeRendering(
                i.selectByInstanceId.bind(i),
                i.unselectByInstanceId.bind(i),
                [r.renderFgEvents]
              )),
              (r.renderEventDrag = f.memoizeRendering(
                i.hideByHash.bind(i),
                i.showByHash.bind(i),
                [o]
              )),
              (r.renderEventResize = f.memoizeRendering(
                i.hideByHash.bind(i),
                i.showByHash.bind(i),
                [o]
              )),
              r
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.render = function (e) {
              this.renderFrame(e.date),
                this.renderFgEvents(e.fgSegs),
                this.renderEventSelection(e.eventSelection),
                this.renderEventDrag(e.eventDragInstances),
                this.renderEventResize(e.eventResizeInstances);
            }),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this), this.renderFrame.unrender();
            }),
            (t.prototype._renderFrame = function (e) {
              var t = this,
                n = t.theme,
                r = t.dateEnv,
                i = r.format(
                  e,
                  s.createFormatter(this.opt("dayPopoverFormat"))
                );
              (this.el.innerHTML =
                '<div class="fc-header ' +
                n.getClass("popoverHeader") +
                '"><span class="fc-close ' +
                n.getIconClass("close") +
                '"></span><span class="fc-title">' +
                a.htmlEscape(i) +
                '</span><div class="fc-clear"></div></div><div class="fc-body ' +
                n.getClass("popoverContent") +
                '"><div class="fc-event-container"></div></div>'),
                (this.segContainerEl = this.el.querySelector(
                  ".fc-event-container"
                ));
            }),
            (t.prototype.prepareHits = function () {
              var e = u.computeRect(this.el);
              (this.width = e.right - e.left),
                (this.height = e.bottom - e.top),
                (this.offsetTracker = new l.default(this.el));
            }),
            (t.prototype.releaseHits = function () {
              this.offsetTracker.destroy();
            }),
            (t.prototype.queryHit = function (e, t) {
              var n = this.offsetTracker.computeLeft(),
                r = this.offsetTracker.computeTop(),
                i = {
                  left: n,
                  right: n + this.width,
                  top: r,
                  bottom: r + this.height,
                };
              if (d.pointInsideRect({ left: e, top: t }, i)) {
                var o = this.props.date;
                return {
                  component: this,
                  dateSpan: {
                    allDay: !0,
                    range: { start: o, end: c.addDays(o, 1) },
                  },
                  dayEl: this.el,
                  rect: i,
                  layer: 1,
                };
              }
              return null;
            }),
            t
          );
        })(i.default);
      (t.default = h),
        (h.prototype.isInteractable = !0),
        (h.prototype.useEventCenter = !1);
      var g = (function (e) {
        function t(t) {
          var n = e.call(this, t.context) || this;
          return (n.dayTile = t), n;
        }
        return (
          r.__extends(t, e),
          (t.prototype.attachSegs = function (e) {
            for (var t = 0, n = e; t < n.length; t++) {
              var r = n[t];
              this.dayTile.segContainerEl.appendChild(r.el);
            }
          }),
          (t.prototype.detachSegs = function (e) {
            for (var t = 0, n = e; t < n.length; t++) {
              var r = n[t];
              p.removeElement(r.el);
            }
          }),
          t
        );
      })(o.default);
      t.DayTileEventRenderer = g;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(145),
        o = n(10),
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.getKeyInfo = function () {
              return { allDay: {}, timed: {} };
            }),
            (t.prototype.getKeysForDateSpan = function (e) {
              return e.allDay ? ["allDay"] : ["timed"];
            }),
            (t.prototype.getKeysForEventDef = function (e) {
              return e.allDay
                ? o.hasBgRendering(e)
                  ? ["timed", "allDay"]
                  : ["allDay"]
                : ["timed"];
            }),
            t
          );
        })(i.default);
      t.default = a;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(48),
        o = n(4),
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.buildRenderRange = function (t, n, r) {
              var i,
                a = this.dateEnv,
                s = e.prototype.buildRenderRange.call(this, t, n, r),
                l = s.start,
                u = s.end;
              if (
                (/^(year|month)$/.test(n) &&
                  ((l = a.startOfWeek(l)),
                  (i = a.startOfWeek(u)),
                  i.valueOf() !== u.valueOf() && (u = o.addWeeks(i, 1))),
                this.options.monthMode && this.options.fixedWeekCount)
              ) {
                var d = Math.ceil(o.diffWeeks(l, u));
                u = o.addWeeks(u, 6 - d);
              }
              return { start: l, end: u };
            }),
            t
          );
        })(i.default);
      t.default = a;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(11),
        o = n(50),
        a = n(2),
        s = n(21),
        l = (function (e) {
          function t(t) {
            var n = e.call(this, t.context) || this;
            return (n.listView = t), n;
          }
          return (
            r.__extends(t, e),
            (t.prototype.attachSegs = function (e) {
              e.length
                ? this.listView.renderSegList(e)
                : this.listView.renderEmptyMessage();
            }),
            (t.prototype.detachSegs = function () {}),
            (t.prototype.renderSegHtml = function (e) {
              var t,
                n = this.context,
                r = n.view,
                o = n.theme,
                l = e.eventRange,
                u = l.def,
                d = l.instance,
                c = l.ui,
                p = u.url,
                f = ["fc-list-item"].concat(c.classNames),
                h = c.backgroundColor;
              return (
                (t = u.allDay
                  ? s.getAllDayHtml(r)
                  : a.isMultiDayRange(l.range)
                  ? e.isStart
                    ? i.htmlEscape(this._getTimeText(d.range.start, e.end, !1))
                    : e.isEnd
                    ? i.htmlEscape(this._getTimeText(e.start, d.range.end, !1))
                    : s.getAllDayHtml(r)
                  : i.htmlEscape(this.getTimeText(l))),
                p && f.push("fc-has-url"),
                '<tr class="' +
                  f.join(" ") +
                  '">' +
                  (this.displayEventTime
                    ? '<td class="fc-list-item-time ' +
                      o.getClass("widgetContent") +
                      '">' +
                      (t || "") +
                      "</td>"
                    : "") +
                  '<td class="fc-list-item-marker ' +
                  o.getClass("widgetContent") +
                  '"><span class="fc-event-dot"' +
                  (h ? ' style="background-color:' + h + '"' : "") +
                  '></span></td><td class="fc-list-item-title ' +
                  o.getClass("widgetContent") +
                  '"><a' +
                  (p ? ' href="' + i.htmlEscape(p) + '"' : "") +
                  ">" +
                  i.htmlEscape(u.title || "") +
                  "</a></td></tr>"
              );
            }),
            (t.prototype.computeEventTimeFormat = function () {
              return { hour: "numeric", minute: "2-digit", meridiem: "short" };
            }),
            t
          );
        })(o.default);
      t.default = l;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(35),
        i = n(173),
        o = n(36),
        a = (function () {
          function e(e, t) {
            void 0 === t && (t = {});
            var n = this;
            (this.handlePointerDown = function (e) {
              var t = n.dragging,
                r = n.settings,
                i = r.minDistance,
                a = r.longPressDelay;
              (t.minDistance =
                null != i
                  ? i
                  : e.isTouch
                  ? 0
                  : o.globalDefaults.eventDragMinDistance),
                (t.delay = e.isTouch
                  ? null != a
                    ? a
                    : o.globalDefaults.longPressDelay
                  : 0);
            }),
              (this.handleDragStart = function (e) {
                e.isTouch &&
                  n.dragging.delay &&
                  e.subjectEl.classList.contains("fc-event") &&
                  n.dragging.mirror.getMirrorEl().classList.add("fc-selected");
              }),
              (this.settings = t);
            var a = (this.dragging = new r.default(e));
            (a.touchScrollAllowed = !1),
              null != t.itemSelector && (a.pointer.selector = t.itemSelector),
              null != t.appendTo && (a.mirror.parentNode = t.appendTo),
              a.emitter.on("pointerdown", this.handlePointerDown),
              a.emitter.on("dragstart", this.handleDragStart),
              new i.default(a, t.eventData);
          }
          return (
            (e.prototype.destroy = function () {
              this.dragging.destroy();
            }),
            e
          );
        })();
      t.default = a;
    },
    function (e, t, n) {
      function r(e) {
        var t = {},
          n = o.refineProps(e, a, s, t);
        return (n.leftoverProps = t), n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(9),
        o = n(2),
        a = {
          startTime: i.createDuration,
          duration: i.createDuration,
          create: Boolean,
          sourceId: String,
        },
        s = { create: !0 };
      t.parseDragMeta = r;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(173),
        i = n(214),
        o = (function () {
          function e(e, t) {
            var n = document;
            e === document || e instanceof Element
              ? ((n = e), (t = t || {}))
              : (t = e || {});
            var o = (this.dragging = new i.default(n));
            "string" == typeof t.itemSelector
              ? (o.pointer.selector = t.itemSelector)
              : n === document && (o.pointer.selector = "[data-event]"),
              "string" == typeof t.mirrorSelector &&
                (o.mirrorSelector = t.mirrorSelector),
              new r.default(o, t.eventData);
          }
          return (
            (e.prototype.destroy = function () {
              this.dragging.destroy();
            }),
            e
          );
        })();
      t.default = o;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(45),
        o = n(62),
        a = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            (n.shouldIgnoreMove = !1),
              (n.mirrorSelector = ""),
              (n.currentMirrorEl = null),
              (n.handlePointerDown = function (e) {
                n.emitter.trigger("pointerdown", e),
                  n.shouldIgnoreMove || n.emitter.trigger("dragstart", e);
              }),
              (n.handlePointerMove = function (e) {
                n.shouldIgnoreMove || n.emitter.trigger("dragmove", e);
              }),
              (n.handlePointerUp = function (e) {
                n.emitter.trigger("pointerup", e),
                  n.shouldIgnoreMove || n.emitter.trigger("dragend", e);
              });
            var r = (n.pointer = new i.default(t));
            return (
              r.emitter.on("pointerdown", n.handlePointerDown),
              r.emitter.on("pointermove", n.handlePointerMove),
              r.emitter.on("pointerup", n.handlePointerUp),
              n
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.destroy = function () {
              this.pointer.destroy();
            }),
            (t.prototype.setIgnoreMove = function (e) {
              this.shouldIgnoreMove = e;
            }),
            (t.prototype.setMirrorIsVisible = function (e) {
              if (e)
                this.currentMirrorEl &&
                  ((this.currentMirrorEl.style.visibility = ""),
                  (this.currentMirrorEl = null));
              else {
                var t = this.mirrorSelector
                  ? document.querySelector(this.mirrorSelector)
                  : null;
                t &&
                  ((this.currentMirrorEl = t), (t.style.visibility = "hidden"));
              }
            }),
            t
          );
        })(o.default);
      t.default = a;
    },
    function (e, t, n) {
      function r(e, t) {
        void 0 === t && (t = {});
        var n = o(t),
          r = l.createFormatter(t),
          i = n.createMarkerMeta(e);
        return i ? n.format(i.marker, r, { forcedTzo: i.forcedTzo }) : "";
      }
      function i(e, t, n) {
        var r = o("object" == typeof n && n ? n : {}),
          i = l.createFormatter(n, d.globalDefaults.defaultRangeSeparator),
          a = r.createMarkerMeta(e),
          s = r.createMarkerMeta(t);
        return a && s
          ? r.formatRange(a.marker, s.marker, i, {
              forcedStartTzo: a.forcedTzo,
              forcedEndTzo: s.forcedTzo,
              isEndExclusive: n.isEndExclusive,
            })
          : "";
      }
      function o(e) {
        var t = e.locale || d.globalDefaults.locale;
        return (
          (e = a.__assign(
            {
              timeZone: d.globalDefaults.timeZone,
              timeZoneImpl: d.globalDefaults.timeZoneImpl,
              calendarSystem: "gregory",
            },
            e,
            { locale: u.getLocale(t) }
          )),
          new s.DateEnv(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(1),
        s = n(63),
        l = n(7),
        u = n(47),
        d = n(36);
      (t.formatDate = r), (t.formatRange = i);
    },
    function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(59),
        i = n(148),
        o = n(149),
        a = n(219),
        s = n(220);
      r.defineThemeSystem("standard", i.default),
        r.defineThemeSystem("jquery-ui", o.default),
        r.defineThemeSystem("bootstrap3", a.default),
        r.defineThemeSystem("bootstrap4", s.default);
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(33),
        o = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return r.__extends(t, e), t;
        })(i.default);
      (t.default = o),
        (o.prototype.classes = {
          widget: "fc-bootstrap3",
          tableGrid: "table-bordered",
          tableList: "table",
          tableListHeading: "active",
          buttonGroup: "btn-group",
          button: "btn btn-default",
          stateActive: "active",
          stateDisabled: "disabled",
          today: "alert alert-info",
          popover: "panel panel-default",
          popoverHeader: "panel-heading",
          popoverContent: "panel-body",
          headerRow: "panel-default",
          dayRow: "panel-default",
          listView: "panel panel-default",
        }),
        (o.prototype.baseIconClass = "glyphicon"),
        (o.prototype.iconClasses = {
          close: "glyphicon-remove",
          prev: "glyphicon-chevron-left",
          next: "glyphicon-chevron-right",
          prevYear: "glyphicon-backward",
          nextYear: "glyphicon-forward",
        }),
        (o.prototype.iconOverrideOption = "bootstrapGlyphicons"),
        (o.prototype.iconOverrideCustomButtonOption = "bootstrapGlyphicon"),
        (o.prototype.iconOverridePrefix = "glyphicon-");
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1),
        i = n(33),
        o = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return r.__extends(t, e), t;
        })(i.default);
      (t.default = o),
        (o.prototype.classes = {
          widget: "fc-bootstrap4",
          tableGrid: "table-bordered",
          tableList: "table",
          tableListHeading: "table-active",
          buttonGroup: "btn-group",
          button: "btn btn-primary",
          stateActive: "active",
          stateDisabled: "disabled",
          today: "alert alert-info",
          popover: "card card-primary",
          popoverHeader: "card-header",
          popoverContent: "card-body",
          headerRow: "table-bordered",
          dayRow: "table-bordered",
          listView: "card card-primary",
        }),
        (o.prototype.baseIconClass = "fa"),
        (o.prototype.iconClasses = {
          close: "fa-times",
          prev: "fa-chevron-left",
          next: "fa-chevron-right",
          prevYear: "fa-angle-double-left",
          nextYear: "fa-angle-double-right",
        }),
        (o.prototype.iconOverrideOption = "bootstrapFontAwesome"),
        (o.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome"),
        (o.prototype.iconOverridePrefix = "fa-");
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        n(29).registerEventSourceDef({
          ignoreRange: !0,
          parseMeta: function (e) {
            return Array.isArray(e)
              ? e
              : Array.isArray(e.events)
              ? e.events
              : null;
          },
          fetch: function (e, t) {
            t({ rawEvents: e.eventSource.meta });
          },
        });
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(146);
      n(29).registerEventSourceDef({
        parseMeta: function (e) {
          return "function" == typeof e
            ? e
            : "function" == typeof e.events
            ? e.events
            : null;
        },
        fetch: function (e, t, n) {
          var i = e.calendar.dateEnv,
            o = e.eventSource.meta;
          r.unpromisify(
            o.bind(null, {
              start: i.toDate(e.range.start),
              end: i.toDate(e.range.end),
              startStr: i.formatIso(e.range.start),
              endStr: i.formatIso(e.range.end),
              timeZone: i.timeZone,
            }),
            function (e) {
              t({ rawEvents: e });
            },
            n
          );
        },
      });
    },
    function (e, t, n) {
      function r(e, t, n) {
        var r,
          i,
          o,
          s,
          l = n.dateEnv,
          u = {};
        return (
          (r = e.startParam),
          null == r && (r = n.opt("startParam")),
          (i = e.endParam),
          null == i && (i = n.opt("endParam")),
          (o = e.timeZoneParam),
          null == o && (o = n.opt("timeZoneParam")),
          (s =
            "function" == typeof e.extraParams
              ? e.extraParams()
              : e.extraParams || {}),
          a.__assign(u, s),
          (u[r] = l.formatIso(t.start)),
          (u[i] = l.formatIso(t.end)),
          "local" !== l.timeZone && (u[o] = l.timeZone),
          u
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(70),
        o = n(29),
        a = n(1);
      o.registerEventSourceDef({
        parseMeta: function (e) {
          if ("string" == typeof e) e = { url: e };
          else if (!e || "object" != typeof e || !e.url) return null;
          return {
            url: e.url,
            method: (e.method || "GET").toUpperCase(),
            extraParams: e.data,
            startParam: e.startParam,
            endParam: e.endParam,
            timeZoneParam: e.timeZoneParam,
          };
        },
        fetch: function (e, t, n) {
          var o,
            a = e.eventSource.meta,
            s = r(a, e.range, e.calendar);
          (o =
            "GET" === a.method
              ? i.get(a.url).query(s)
              : i(a.method, a.url).send(s)),
            o.end(function (e, r) {
              var i;
              e
                ? n(e)
                : (r.body ? (i = r.body) : r.text && (i = JSON.parse(r.text)),
                  i
                    ? t({ rawEvents: i, response: r })
                    : n({ message: "Invalid JSON response", response: r }));
            });
        },
      });
    },
    function (e, t, n) {
      function r(e, t, n, r) {
        for (
          var o = e ? a.arrayToHash(e) : null,
            s = i.startOfDay(n.start),
            l = n.end,
            u = [];
          s < l;

        ) {
          var d = void 0;
          (o && !o[s.getUTCDay()]) || ((d = t ? r.add(s, t) : s), u.push(d)),
            (s = i.addDays(s, 1));
        }
        return u;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(4),
        o = n(9),
        a = n(12),
        s = n(2),
        l = n(41),
        u = n(8);
      l.registerRecurringType({
        parse: function (e, t, n, r) {
          var i = r.createMarker.bind(r),
            a = {
              daysOfWeek: null,
              startTime: o.createDuration,
              endTime: o.createDuration,
              startRecur: i,
              endRecur: i,
            },
            l = s.refineProps(e, a, {}, n),
            u = !1;
          for (var d in l)
            if (null != l[d]) {
              u = !0;
              break;
            }
          var c;
          return (
            (c = !l.startTime && !l.endTime && (null == t || t)),
            u
              ? {
                  allDay: c,
                  duration:
                    l.startTime && l.endTime
                      ? o.subtractDurations(l.endTime, l.startTime)
                      : null,
                  typeData: l,
                }
              : null
          );
        },
        expand: function (e, t, n, i) {
          var o = u.intersectRanges(n, {
            start: e.startRecur,
            end: e.endRecur,
          });
          return o ? r(e.daysOfWeek, e.startTime, o, i) : [];
        },
      });
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(37),
        i = n(171),
        o = r.createPlugin({
          viewConfigs: {
            basic: i.default,
            basicDay: { type: "basic", duration: { days: 1 } },
            basicWeek: { type: "basic", duration: { weeks: 1 } },
            month: {
              type: "basic",
              monthMode: !0,
              duration: { months: 1 },
              fixedWeekCount: !0,
            },
          },
        });
      t.default = o;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(37),
        i = n(160),
        o = r.createPlugin({
          viewConfigs: {
            agenda: {
              class: i.default,
              allDaySlot: !0,
              slotDuration: "00:30:00",
              slotEventOverlap: !0,
            },
            agendaDay: { type: "agenda", duration: { days: 1 } },
            agendaWeek: { type: "agenda", duration: { weeks: 1 } },
          },
        });
      t.default = o;
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(37),
        i = n(172),
        o = r.createPlugin({
          viewConfigs: {
            list: {
              class: i.default,
              buttonTextKey: "list",
              listDayFormat: { month: "long", day: "numeric", year: "numeric" },
            },
            listDay: {
              type: "list",
              duration: { days: 1 },
              listDayFormat: { weekday: "long" },
            },
            listWeek: {
              type: "list",
              duration: { weeks: 1 },
              listDayFormat: { weekday: "long" },
              listDayAltFormat: {
                month: "long",
                day: "numeric",
                year: "numeric",
              },
            },
            listMonth: {
              type: "list",
              duration: { month: 1 },
              listDayAltFormat: { weekday: "long" },
            },
            listYear: {
              type: "list",
              duration: { year: 1 },
              listDayAltFormat: { weekday: "long" },
            },
          },
        });
      t.default = o;
    },
  ]);
});

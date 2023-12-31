!(function (t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : t("object" == typeof exports ? require("jquery") : jQuery);
})(function (t) {
  var i = {
    element: "body",
    position: null,
    type: "info",
    allow_dismiss: !0,
    allow_duplicates: !0,
    newest_on_top: !1,
    showProgressbar: !1,
    placement: { from: "top", align: "right" },
    offset: 20,
    spacing: 10,
    z_index: 1060,
    delay: 5e3,
    timer: 1e3,
    url_target: "_blank",
    mouse_over: null,
    animate: { enter: "animated fadeInDown", exit: "animated fadeOutUp" },
    onShow: null,
    onShown: null,
    onClose: null,
    onClosed: null,
    onClick: null,
    icon_type: "class",
    template:
      '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="tim-icons icon-simple-remove"></i></button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
  };
  function s(s, e, n) {
    var a,
      o,
      l = {
        content: {
          message: "object" == typeof e ? e.message : e,
          title: e.title ? e.title : "",
          icon: e.icon ? e.icon : "",
          url: e.url ? e.url : "#",
          target: e.target ? e.target : "-",
        },
      };
    (n = t.extend(!0, {}, l, n)),
      (this.settings = t.extend(!0, {}, i, n)),
      (this._defaults = i),
      "-" === this.settings.content.target &&
        (this.settings.content.target = this.settings.url_target),
      (this.animations = {
        start:
          "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
        end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend",
      }),
      "number" == typeof this.settings.offset &&
        (this.settings.offset = {
          x: this.settings.offset,
          y: this.settings.offset,
        }),
      (this.settings.allow_duplicates ||
        (!this.settings.allow_duplicates &&
          ((a = this),
          (o = !1),
          t('[data-notify="container"]').each(function (i, s) {
            var e = t(s),
              n = e.find('[data-notify="title"]').html().trim(),
              l = e.find('[data-notify="message"]').html().trim(),
              r =
                n ===
                t("<div>" + a.settings.content.title + "</div>")
                  .html()
                  .trim(),
              d =
                l ===
                t("<div>" + a.settings.content.message + "</div>")
                  .html()
                  .trim(),
              c = e.hasClass("alert-" + a.settings.type);
            return r && d && c && (o = !0), !o;
          }),
          !o))) &&
        this.init();
  }
  (String.format = function () {
    var t = arguments,
      i = arguments[0];
    return i.replace(/(\{\{\d\}\}|\{\d\})/g, function (i) {
      return "{{" === i.substring(0, 2)
        ? i
        : (0, t[parseInt(i.match(/\d/)[0]) + 1]);
    });
  }),
    t.extend(s.prototype, {
      init: function () {
        var t = this;
        this.buildNotify(),
          this.settings.content.icon && this.setIcon(),
          "#" != this.settings.content.url && this.styleURL(),
          this.styleDismiss(),
          this.placement(),
          this.bind(),
          (this.notify = {
            $ele: this.$ele,
            update: function (i, s) {
              var e = {};
              for (var n in ("string" == typeof i ? (e[i] = s) : (e = i), e))
                switch (n) {
                  case "type":
                    this.$ele.removeClass("alert-" + t.settings.type),
                      this.$ele
                        .find('[data-notify="progressbar"] > .progress-bar')
                        .removeClass("progress-bar-" + t.settings.type),
                      (t.settings.type = e[n]),
                      this.$ele
                        .addClass("alert-" + e[n])
                        .find('[data-notify="progressbar"] > .progress-bar')
                        .addClass("progress-bar-" + e[n]);
                    break;
                  case "icon":
                    var a = this.$ele.find('[data-notify="icon"]');
                    "class" === t.settings.icon_type.toLowerCase()
                      ? a.removeClass(t.settings.content.icon).addClass(e[n])
                      : (a.is("img") || a.find("img"), a.attr("src", e[n])),
                      (t.settings.content.icon = e[i]);
                    break;
                  case "progress":
                    var o = t.settings.delay - t.settings.delay * (e[n] / 100);
                    this.$ele.data("notify-delay", o),
                      this.$ele
                        .find('[data-notify="progressbar"] > div')
                        .attr("aria-valuenow", e[n])
                        .css("width", e[n] + "%");
                    break;
                  case "url":
                    this.$ele.find('[data-notify="url"]').attr("href", e[n]);
                    break;
                  case "target":
                    this.$ele.find('[data-notify="url"]').attr("target", e[n]);
                    break;
                  default:
                    this.$ele.find('[data-notify="' + n + '"]').html(e[n]);
                }
              var l =
                this.$ele.outerHeight() +
                parseInt(t.settings.spacing) +
                parseInt(t.settings.offset.y);
              t.reposition(l);
            },
            close: function () {
              t.close();
            },
          });
      },
      buildNotify: function () {
        var i = this.settings.content;
        (this.$ele = t(
          String.format(
            this.settings.template,
            this.settings.type,
            i.title,
            i.message,
            i.url,
            i.target
          )
        )),
          this.$ele.attr(
            "data-notify-position",
            this.settings.placement.from + "-" + this.settings.placement.align
          ),
          this.settings.allow_dismiss ||
            this.$ele.find('[data-notify="dismiss"]').css("display", "none"),
          ((!(this.settings.delay <= 0) || this.settings.showProgressbar) &&
            this.settings.showProgressbar) ||
            this.$ele.find('[data-notify="progressbar"]').remove();
      },
      setIcon: function () {
        this.$ele.addClass("alert-with-icon"),
          "class" === this.settings.icon_type.toLowerCase()
            ? this.$ele
                .find('[data-notify="icon"]')
                .addClass(this.settings.content.icon)
            : this.$ele.find('[data-notify="icon"]').is("img")
            ? this.$ele
                .find('[data-notify="icon"]')
                .attr("src", this.settings.content.icon)
            : this.$ele
                .find('[data-notify="icon"]')
                .append(
                  '<img src="' +
                    this.settings.content.icon +
                    '" alt="Notify Icon" />'
                );
      },
      styleDismiss: function () {
        this.$ele
          .find('[data-notify="dismiss"]')
          .css({
            position: "absolute",
            right: "10px",
            top: "50%",
            marginTop: "-13px",
            zIndex: this.settings.z_index + 2,
          });
      },
      styleURL: function () {
        this.$ele
          .find('[data-notify="url"]')
          .css({
            backgroundImage:
              "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
            zIndex: this.settings.z_index + 1,
          });
      },
      placement: function () {
        var i = this,
          s = this.settings.offset.y,
          e = {
            display: "inline-block",
            margin: "0px auto",
            position: this.settings.position
              ? this.settings.position
              : "body" === this.settings.element
              ? "fixed"
              : "absolute",
            transition: "all .5s ease-in-out",
            zIndex: this.settings.z_index,
          },
          n = !1,
          a = this.settings;
        switch (
          (t(
            '[data-notify-position="' +
              this.settings.placement.from +
              "-" +
              this.settings.placement.align +
              '"]:not([data-closing="true"])'
          ).each(function () {
            s = Math.max(
              s,
              parseInt(t(this).css(a.placement.from)) +
                parseInt(t(this).outerHeight()) +
                parseInt(a.spacing)
            );
          }),
          !0 === this.settings.newest_on_top && (s = this.settings.offset.y),
          (e[this.settings.placement.from] = s + "px"),
          this.settings.placement.align)
        ) {
          case "left":
          case "right":
            e[this.settings.placement.align] = this.settings.offset.x + "px";
            break;
          case "center":
            (e.left = 0), (e.right = 0);
        }
        this.$ele.css(e).addClass(this.settings.animate.enter),
          t.each(["webkit-", "moz-", "o-", "ms-", ""], function (t, s) {
            i.$ele[0].style[s + "AnimationIterationCount"] = 1;
          }),
          t(this.settings.element).append(this.$ele),
          !0 === this.settings.newest_on_top &&
            ((s =
              parseInt(s) +
              parseInt(this.settings.spacing) +
              this.$ele.outerHeight()),
            this.reposition(s)),
          t.isFunction(i.settings.onShow) && i.settings.onShow.call(this.$ele),
          this.$ele
            .one(this.animations.start, function () {
              n = !0;
            })
            .one(this.animations.end, function () {
              i.$ele.removeClass(i.settings.animate.enter),
                t.isFunction(i.settings.onShown) &&
                  i.settings.onShown.call(this);
            }),
          setTimeout(function () {
            !n &&
              t.isFunction(i.settings.onShown) &&
              i.settings.onShown.call(this);
          }, 600);
      },
      bind: function () {
        var i = this;
        if (
          (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
            i.close();
          }),
          t.isFunction(i.settings.onClick) &&
            this.$ele.on("click", function (t) {
              t.target != i.$ele.find('[data-notify="dismiss"]')[0] &&
                i.settings.onClick.call(this, t);
            }),
          this.$ele
            .mouseover(function () {
              t(this).data("data-hover", "true");
            })
            .mouseout(function () {
              t(this).data("data-hover", "false");
            }),
          this.$ele.data("data-hover", "false"),
          this.settings.delay > 0)
        ) {
          i.$ele.data("notify-delay", i.settings.delay);
          var s = setInterval(function () {
            var t = parseInt(i.$ele.data("notify-delay")) - i.settings.timer;
            if (
              ("false" === i.$ele.data("data-hover") &&
                "pause" === i.settings.mouse_over) ||
              "pause" != i.settings.mouse_over
            ) {
              var e = ((i.settings.delay - t) / i.settings.delay) * 100;
              i.$ele.data("notify-delay", t),
                i.$ele
                  .find('[data-notify="progressbar"] > div')
                  .attr("aria-valuenow", e)
                  .css("width", e + "%");
            }
            t <= -i.settings.timer && (clearInterval(s), i.close());
          }, i.settings.timer);
        }
      },
      close: function () {
        var i = this,
          s = parseInt(this.$ele.css(this.settings.placement.from)),
          e = !1;
        this.$ele
          .attr("data-closing", "true")
          .addClass(this.settings.animate.exit),
          i.reposition(s),
          t.isFunction(i.settings.onClose) &&
            i.settings.onClose.call(this.$ele),
          this.$ele
            .one(this.animations.start, function () {
              e = !0;
            })
            .one(this.animations.end, function () {
              t(this).remove(),
                t.isFunction(i.settings.onClosed) &&
                  i.settings.onClosed.call(this);
            }),
          setTimeout(function () {
            !e &&
              (i.$ele.remove(),
              i.settings.onClosed && i.settings.onClosed(i.$ele));
          }, 600);
      },
      reposition: function (i) {
        var s = this,
          e =
            '[data-notify-position="' +
            this.settings.placement.from +
            "-" +
            this.settings.placement.align +
            '"]:not([data-closing="true"])',
          n = this.$ele.nextAll(e);
        !0 === this.settings.newest_on_top && (n = this.$ele.prevAll(e)),
          n.each(function () {
            t(this).css(s.settings.placement.from, i),
              (i =
                parseInt(i) +
                parseInt(s.settings.spacing) +
                t(this).outerHeight());
          });
      },
    }),
    (t.notify = function (t, i) {
      return new s(this, t, i).notify;
    }),
    (t.notifyDefaults = function (s) {
      return (i = t.extend(!0, {}, i, s));
    }),
    (t.notifyClose = function (i) {
      void 0 === i || "all" === i
        ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click")
        : "success" === i || "info" === i || "warning" === i || "danger" === i
        ? t(".alert-" + i + "[data-notify]")
            .find('[data-notify="dismiss"]')
            .trigger("click")
        : i
        ? t(i + "[data-notify]")
            .find('[data-notify="dismiss"]')
            .trigger("click")
        : t('[data-notify-position="' + i + '"]')
            .find('[data-notify="dismiss"]')
            .trigger("click");
    }),
    (t.notifyCloseExcept = function (i) {
      "success" === i || "info" === i || "warning" === i || "danger" === i
        ? t("[data-notify]")
            .not(".alert-" + i)
            .find('[data-notify="dismiss"]')
            .trigger("click")
        : t("[data-notify]")
            .not(i)
            .find('[data-notify="dismiss"]')
            .trigger("click");
    });
});

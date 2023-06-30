Chart.elements.Rectangle.prototype.draw = function () {
  var t,
    e,
    o,
    r,
    i,
    a,
    l,
    d,
    n = this._chart.ctx,
    _ = this._view,
    h = _.borderWidth;
  if (
    (_.horizontal
      ? ((t = _.base),
        (e = _.x),
        (o = _.y - _.height / 2),
        (r = _.y + _.height / 2),
        (i = e > t ? 1 : -1),
        (a = 1),
        (l = _.borderSkipped || "left"))
      : ((t = _.x - _.width / 2),
        (e = _.x + _.width / 2),
        (o = _.y),
        (r = _.base),
        (i = 1),
        (a = r > o ? 1 : -1),
        (l = _.borderSkipped || "bottom")),
    h)
  ) {
    var b = Math.min(Math.abs(t - e), Math.abs(o - r)),
      v = (h = h > b ? b : h) / 2,
      $ = t + ("left" !== l ? v * i : 0),
      u = e + ("right" !== l ? -v * i : 0),
      c = o + ("top" !== l ? v * a : 0),
      f = r + ("bottom" !== l ? -v * a : 0);
    $ !== u && ((o = c), (r = f)), c !== f && ((t = $), (e = u));
  }
  n.beginPath(),
    (n.fillStyle = _.backgroundColor),
    (n.strokeStyle = _.borderColor),
    (n.lineWidth = h);
  var T = [
      [t, r],
      [t, o],
      [e, o],
      [e, r],
    ],
    s = ["bottom", "left", "top", "right"].indexOf(l, 0);
  function p(t) {
    return T[(s + t) % 4];
  }
  -1 === s && (s = 0);
  var g = p(0);
  n.moveTo(g[0], g[1]);
  for (var m = 1; m < 4; m++) {
    (g = p(m)),
      4 == (nextCornerId = m + 1) && (nextCornerId = 0),
      (nextCorner = p(nextCornerId)),
      (width = T[2][0] - T[1][0]),
      (height = T[0][1] - T[1][1]),
      (x = T[1][0]),
      (y = T[1][1]);
    var d = 6;
    d > height / 2 && (d = height / 2),
      d > width / 2 && (d = width / 2),
      n.moveTo(x + d, y),
      n.lineTo(x + width - d, y),
      n.quadraticCurveTo(x + width, y, x + width, y + d),
      n.lineTo(x + width, y + height - d),
      n.quadraticCurveTo(x + width, y + height, x + width - d, y + height),
      n.lineTo(x + d, y + height),
      n.quadraticCurveTo(x, y + height, x, y + height - d),
      n.lineTo(x, y + d),
      n.quadraticCurveTo(x, y, x + d, y);
  }
  n.fill(), h && n.stroke();
};

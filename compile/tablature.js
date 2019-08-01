'use strict';
const t = a => ({value:`\x1b[1m${a}\x1b[0m`, length:a.length}), u = a => a.reduce((b, d) => ({...b, [d]:!0}), {}), v = (a, b, d, f) => {
  if (void 0 === a) {
    return " ".repeat(b);
  }
  let k = a;
  if (d) {
    const {value:m, length:g} = d(a);
    k = m;
    a = g;
  } else {
    a = `${a}`.length;
  }
  b -= a;
  if (f) {
    return f = Math.floor(b / 2), b -= f, " ".repeat(f) + k + " ".repeat(b);
  }
  f = " ".repeat(b);
  return `${k}${f}`;
}, w = (a, b) => (a = a[b]) ? a : d => ({value:d, length:`${d}`.replace(/\033\[.*?m/g, "").length}), x = (a, b, d, f = {}, k = {}) => {
  let m = 0;
  return a.map(g => {
    const e = d[g];
    if (!e) {
      throw Error(`Unknown field ${g}`);
    }
    var n = b[g];
    const q = w(f, g), r = k[g], [h, ...c] = `${n}`.split("\n");
    g = v(h, e, q, r);
    n = "";
    c.length && (n = "\n" + c.map(l => {
      const p = " ".repeat(m);
      l = v(l, e, q, r);
      return `${p}${l}`;
    }).join("\n"));
    m += e + 2;
    return `${g}${n}`;
  }).join("  ");
};
module.exports = function(a) {
  const {keys:b = [], data:d = [], headings:f = {}, replacements:k = {}, centerValues:m = [], centerHeadings:g = []} = a;
  var [e] = d;
  if (!e) {
    return "";
  }
  const n = u(m);
  a = u(g);
  e = Object.keys(e).reduce((h, c) => {
    const l = f[c];
    return {...h, [c]:l ? l.length : c.length};
  }, {});
  const q = d.reduce((h, c) => Object.keys(c).reduce((l, p) => {
    const y = h[p], {length:z} = w(k, p)(c[p]);
    return {...l, [p]:Math.max(z, y)};
  }, {}), e);
  e = b.reduce((h, c) => ({...h, [c]:f[c] || c}), {});
  const r = b.reduce((h, c) => ({...h, [c]:t}), {});
  a = x(b, e, q, r, a);
  e = d.map(h => x(b, h, q, k, n));
  return [a, ...e].join("\n");
};


//# sourceMappingURL=tablature.js.map
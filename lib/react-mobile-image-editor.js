import * as G from "react";
import Ie, { useContext as dt, useState as ie, useRef as W, useLayoutEffect as He, useMemo as pe, useEffect as Me, forwardRef as ft, useImperativeHandle as Xt, createElement as Vt } from "react";
import { History as Nt } from "stateshot";
import Ut from "use-image";
import { Group as Ee, Rect as ht, Stage as gt, Layer as pt, Image as vt, Text as xt, Line as wt, Transformer as mt } from "react-konva";
import Ht from "konva";
import Q from "@emotion/styled";
import { css as Ae } from "@emotion/react";
import Zt from "react-dom";
import { Html as Gt } from "react-konva-utils";
var je = {}, Jt = {
  get exports() {
    return je;
  },
  set exports(t) {
    je = t;
  }
}, _e = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var at;
function Kt() {
  if (at)
    return _e;
  at = 1;
  var t = Ie, s = Symbol.for("react.element"), c = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(R, g, O) {
    var w, l = {}, d = null, I = null;
    O !== void 0 && (d = "" + O), g.key !== void 0 && (d = "" + g.key), g.ref !== void 0 && (I = g.ref);
    for (w in g)
      n.call(g, w) && !T.hasOwnProperty(w) && (l[w] = g[w]);
    if (R && R.defaultProps)
      for (w in g = R.defaultProps, g)
        l[w] === void 0 && (l[w] = g[w]);
    return { $$typeof: s, type: R, key: d, ref: I, props: l, _owner: o.current };
  }
  return _e.Fragment = c, _e.jsx = L, _e.jsxs = L, _e;
}
var Fe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function qt() {
  return st || (st = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ie, s = Symbol.for("react.element"), c = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), R = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), m = Symbol.iterator, _ = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = m && e[m] || e[_];
      return typeof r == "function" ? r : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), x = 1; x < r; x++)
          i[x - 1] = arguments[x];
        $("error", e, i);
      }
    }
    function $(e, r, i) {
      {
        var x = y.ReactDebugCurrentFrame, D = x.getStackAddendum();
        D !== "" && (r += "%s", i = i.concat([D]));
        var j = i.map(function(P) {
          return String(P);
        });
        j.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var S = !1, p = !1, U = !1, ae = !1, ve = !1, xe;
    xe = Symbol.for("react.module.reference");
    function ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === T || ve || e === o || e === O || e === w || ae || e === I || S || p || U || typeof e == "object" && e !== null && (e.$$typeof === d || e.$$typeof === l || e.$$typeof === L || e.$$typeof === R || e.$$typeof === g || e.$$typeof === xe || e.getModuleId !== void 0));
    }
    function ee(e, r, i) {
      var x = e.displayName;
      if (x)
        return x;
      var D = r.displayName || r.name || "";
      return D !== "" ? i + "(" + D + ")" : i;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function H(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case c:
          return "Portal";
        case T:
          return "Profiler";
        case o:
          return "StrictMode";
        case O:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return de(r) + ".Consumer";
          case L:
            var i = e;
            return de(i._context) + ".Provider";
          case g:
            return ee(e, e.render, "ForwardRef");
          case l:
            var x = e.displayName || null;
            return x !== null ? x : H(e.type) || "Memo";
          case d: {
            var D = e, j = D._payload, P = D._init;
            try {
              return H(P(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, Y = 0, we, f, h, z, C, b, te;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function ne() {
      {
        if (Y === 0) {
          we = console.log, f = console.info, h = console.warn, z = console.error, C = console.group, b = console.groupCollapsed, te = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Y++;
      }
    }
    function se() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, e, {
              value: we
            }),
            info: re({}, e, {
              value: f
            }),
            warn: re({}, e, {
              value: h
            }),
            error: re({}, e, {
              value: z
            }),
            group: re({}, e, {
              value: C
            }),
            groupCollapsed: re({}, e, {
              value: b
            }),
            groupEnd: re({}, e, {
              value: te
            })
          });
        }
        Y < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = y.ReactCurrentDispatcher, he;
    function ge(e, r, i) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (D) {
            var x = D.stack.trim().match(/\n( *(at )?)/);
            he = x && x[1] || "";
          }
        return `
` + he + e;
      }
    }
    var ce = !1, le;
    {
      var me = typeof WeakMap == "function" ? WeakMap : Map;
      le = new me();
    }
    function Ce(e, r) {
      if (!e || ce)
        return "";
      {
        var i = le.get(e);
        if (i !== void 0)
          return i;
      }
      var x;
      ce = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = N.current, N.current = null, ne();
      try {
        if (r) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (K) {
              x = K;
            }
            Reflect.construct(e, [], P);
          } else {
            try {
              P.call();
            } catch (K) {
              x = K;
            }
            e.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            x = K;
          }
          e();
        }
      } catch (K) {
        if (K && x && typeof K.stack == "string") {
          for (var E = K.stack.split(`
`), J = x.stack.split(`
`), B = E.length - 1, X = J.length - 1; B >= 1 && X >= 0 && E[B] !== J[X]; )
            X--;
          for (; B >= 1 && X >= 0; B--, X--)
            if (E[B] !== J[X]) {
              if (B !== 1 || X !== 1)
                do
                  if (B--, X--, X < 0 || E[B] !== J[X]) {
                    var oe = `
` + E[B].replace(" at new ", " at ");
                    return e.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", e.displayName)), typeof e == "function" && le.set(e, oe), oe;
                  }
                while (B >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        ce = !1, N.current = j, se(), Error.prepareStackTrace = D;
      }
      var Re = e ? e.displayName || e.name : "", ye = Re ? ge(Re) : "";
      return typeof e == "function" && le.set(e, ye), ye;
    }
    function Ye(e, r, i) {
      return Ce(e, !1);
    }
    function u(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function a(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ce(e, u(e));
      if (typeof e == "string")
        return ge(e);
      switch (e) {
        case O:
          return ge("Suspense");
        case w:
          return ge("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Ye(e.render);
          case l:
            return a(e.type, r, i);
          case d: {
            var x = e, D = x._payload, j = x._init;
            try {
              return a(j(D), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, M = {}, Z = y.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, i = a(e.type, e._source, r ? r.type : null);
        Z.setExtraStackFrame(i);
      } else
        Z.setExtraStackFrame(null);
    }
    function Se(e, r, i, x, D) {
      {
        var j = Function.call.bind(F);
        for (var P in e)
          if (j(e, P)) {
            var E = void 0;
            try {
              if (typeof e[P] != "function") {
                var J = Error((x || "React class") + ": " + i + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              E = e[P](r, P, x, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              E = B;
            }
            E && !(E instanceof Error) && (V(D), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", i, P, typeof E), V(null)), E instanceof Error && !(E.message in M) && (M[E.message] = !0, V(D), k("Failed %s type: %s", i, E.message), V(null));
          }
      }
    }
    var ke = Array.isArray;
    function be(e) {
      return ke(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function $e(e) {
      try {
        return Ge(e), !1;
      } catch {
        return !0;
      }
    }
    function Ge(e) {
      return "" + e;
    }
    function Je(e) {
      if ($e(e))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), Ge(e);
    }
    var Pe = y.ReactCurrentOwner, Et = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ke, qe, Be;
    Be = {};
    function Lt(e) {
      if (F.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function St(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function kt(e, r) {
      if (typeof e.ref == "string" && Pe.current && r && Pe.current.stateNode !== r) {
        var i = H(Pe.current.type);
        Be[i] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(Pe.current.type), e.ref), Be[i] = !0);
      }
    }
    function Pt(e, r) {
      {
        var i = function() {
          Ke || (Ke = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function _t(e, r) {
      {
        var i = function() {
          qe || (qe = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Ft = function(e, r, i, x, D, j, P) {
      var E = {
        $$typeof: s,
        type: e,
        key: r,
        ref: i,
        props: P,
        _owner: j
      };
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function Dt(e, r, i, x, D) {
      {
        var j, P = {}, E = null, J = null;
        i !== void 0 && (Je(i), E = "" + i), St(r) && (Je(r.key), E = "" + r.key), Lt(r) && (J = r.ref, kt(r, D));
        for (j in r)
          F.call(r, j) && !Et.hasOwnProperty(j) && (P[j] = r[j]);
        if (e && e.defaultProps) {
          var B = e.defaultProps;
          for (j in B)
            P[j] === void 0 && (P[j] = B[j]);
        }
        if (E || J) {
          var X = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          E && Pt(P, X), J && _t(P, X);
        }
        return Ft(e, E, J, D, x, Pe.current, P);
      }
    }
    var Xe = y.ReactCurrentOwner, Qe = y.ReactDebugCurrentFrame;
    function Te(e) {
      if (e) {
        var r = e._owner, i = a(e.type, e._source, r ? r.type : null);
        Qe.setExtraStackFrame(i);
      } else
        Qe.setExtraStackFrame(null);
    }
    var Ve;
    Ve = !1;
    function Ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function et() {
      {
        if (Xe.current) {
          var e = H(Xe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ot(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + r + ":" + i + ".";
        }
        return "";
      }
    }
    var tt = {};
    function Mt(e) {
      {
        var r = et();
        if (!r) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
    }
    function nt(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Mt(r);
        if (tt[i])
          return;
        tt[i] = !0;
        var x = "";
        e && e._owner && e._owner !== Xe.current && (x = " It was passed a child from " + H(e._owner.type) + "."), Te(e), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, x), Te(null);
      }
    }
    function rt(e, r) {
      {
        if (typeof e != "object")
          return;
        if (be(e))
          for (var i = 0; i < e.length; i++) {
            var x = e[i];
            Ne(x) && nt(x, r);
          }
        else if (Ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var D = A(e);
          if (typeof D == "function" && D !== e.entries)
            for (var j = D.call(e), P; !(P = j.next()).done; )
              Ne(P.value) && nt(P.value, r);
        }
      }
    }
    function jt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var i;
        if (typeof r == "function")
          i = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === g || r.$$typeof === l))
          i = r.propTypes;
        else
          return;
        if (i) {
          var x = H(r);
          Se(i, e.props, "prop", x, e);
        } else if (r.PropTypes !== void 0 && !Ve) {
          Ve = !0;
          var D = H(r);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function It(e) {
      {
        for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
          var x = r[i];
          if (x !== "children" && x !== "key") {
            Te(e), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), Te(null);
            break;
          }
        }
        e.ref !== null && (Te(e), k("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    var ot = {};
    function it(e, r, i, x, D, j) {
      {
        var P = ue(e);
        if (!P) {
          var E = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Ot(D);
          J ? E += J : E += et();
          var B;
          e === null ? B = "null" : be(e) ? B = "array" : e !== void 0 && e.$$typeof === s ? (B = "<" + (H(e.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : B = typeof e, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, E);
        }
        var X = Dt(e, r, i, D, j);
        if (X == null)
          return X;
        if (P) {
          var oe = r.children;
          if (oe !== void 0)
            if (x)
              if (be(oe)) {
                for (var Re = 0; Re < oe.length; Re++)
                  rt(oe[Re], e);
                Object.freeze && Object.freeze(oe);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              rt(oe, e);
        }
        if (F.call(r, "key")) {
          var ye = H(e), K = Object.keys(r).filter(function(Bt) {
            return Bt !== "key";
          }), Ue = K.length > 0 ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ot[ye + Ue]) {
            var zt = K.length > 0 ? "{" + K.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ue, ye, zt, ye), ot[ye + Ue] = !0;
          }
        }
        return e === n ? It(X) : jt(X), X;
      }
    }
    function At(e, r, i) {
      return it(e, r, i, !0);
    }
    function $t(e, r, i) {
      return it(e, r, i, !1);
    }
    var Wt = $t, Yt = At;
    Fe.Fragment = n, Fe.jsx = Wt, Fe.jsxs = Yt;
  }()), Fe;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Kt() : t.exports = qt();
})(Jt);
const Qt = je.Fragment, v = je.jsx, q = je.jsxs, yt = Ie.createContext({
  width: 0,
  height: 0,
  pencilConfig: {
    stroke: "#df4b26",
    strokeWidth: 5,
    lineCap: "round",
    lineJoin: "round"
  },
  blurConfig: {
    stroke: "#fff",
    strokeWidth: 40,
    lineCap: "round",
    lineJoin: "round"
  },
  textConfig: {
    fill: "#df4b26",
    fontSize: 30,
    width: 300
  },
  editorColors: [
    "#FF2A1A",
    "#000000",
    "#999999",
    "#FF9416",
    "#F7673D",
    "#F9CA5A",
    "#19A049",
    "#24A8D0"
  ],
  activeTool: null,
  changeColor: () => {
  },
  handleSelectTool: () => {
  }
}), Le = () => dt(yt), en = ({
  width: t = 0,
  height: s = 0,
  editorColors: c = [
    "#FF2A1A",
    "#000000",
    "#999999",
    "#FF9416",
    "#F7673D",
    "#F9CA5A",
    "#19A049",
    "#24A8D0"
  ],
  blurConfig: n = {
    stroke: "#eaeaeaeb",
    strokeWidth: 30,
    lineCap: "round",
    lineJoin: "round"
  },
  children: o
}) => {
  const [T, L] = ie({
    stroke: c[0],
    strokeWidth: 5,
    lineCap: "round",
    lineJoin: "round"
  }), [R, g] = ie({
    fontSize: 30,
    fill: c[0],
    wrap: "word",
    width: t * 0.9
  }), [O, w] = ie(null), l = (I) => {
    w((m) => m === I ? null : I);
  }, d = (I) => {
    L((m) => ({
      ...Object.assign(m, {
        stroke: I
      })
    })), g((m) => ({
      ...Object.assign(m, {
        fill: I
      })
    }));
  };
  return /* @__PURE__ */ v(
    yt.Provider,
    {
      value: {
        width: t,
        height: s,
        pencilConfig: T,
        blurConfig: n,
        textConfig: R,
        editorColors: c,
        activeTool: O,
        changeColor: d,
        handleSelectTool: l
      },
      children: o
    }
  );
}, Ze = (t, s, c, n) => {
  const o = t / s, T = c / n;
  return o < T ? [o * n, n] : [c, 1 / o * c];
}, Ct = (t, s, c) => {
  const n = c * (Math.PI / 180), o = t * Math.cos(n) - s * Math.sin(n), T = t * Math.sin(n) + s * Math.cos(n);
  return [o, T];
}, bt = (t, s) => Math.sqrt(Math.pow(s.x - t.x, 2) + Math.pow(s.y - t.y, 2)), tn = (t, s) => ({
  x: (t.x + s.x) / 2,
  y: (t.y + s.y) / 2
}), ct = (t, s, c) => {
  switch (c / 90 % 4 + 1) {
    case 1:
      return [t, s];
    case 2:
      return [s, -t];
    case 3:
      return [-t, -s];
    case 4:
      return [-s, t];
    default:
      return [t, s];
  }
}, nn = (t, s, c) => {
  const n = document.createElement("canvas");
  n.width = s, n.height = c;
  const o = n.getContext("2d");
  return o.drawImage(t, 0, 0, s, c), o.getImageData(0, 0, s, c);
}, Tt = Ie.createContext({
  image: null,
  group: {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    rotation: 0
  },
  clipRect: {
    width: 0,
    height: 0,
    x: 0,
    y: 0
  },
  texts: [],
  lines: [],
  blurs: [],
  setLines: () => {
  },
  setTexts: () => {
  },
  setImage: () => {
  },
  setGroup: () => {
  },
  setBlurs: () => {
  },
  redo: () => {
  },
  undo: () => {
  }
}), We = () => dt(Tt), rn = ({
  children: t,
  image: s
}) => {
  const { width: c, height: n } = Le(), [o, T] = ie({
    group: {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      rotation: 0
    },
    clipRect: {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    },
    lines: [],
    texts: [],
    blurs: []
  }), [L, R] = ie(!1), g = W(o);
  g.current = o;
  const [O, w] = Ut(s), l = (S) => {
    T(S), g.current = S;
  }, d = W(), I = (S) => {
    var p;
    (p = d.current) == null || p.pushSync({
      ...g.current,
      lines: S(g.current.lines)
    });
  }, m = (S) => {
    var p;
    (p = d.current) == null || p.pushSync({
      ...g.current,
      blurs: S(g.current.blurs)
    });
  }, _ = (S) => {
    var p;
    (p = d.current) == null || p.pushSync({
      ...g.current,
      texts: S(g.current.texts)
    });
  }, A = (S, p) => {
    var U;
    (U = d.current) == null || U.pushSync({
      ...g.current,
      clipRect: Object.assign({}, g.current.clipRect, S),
      group: Object.assign({}, g.current.group, { rotation: p })
    });
  }, y = (S) => {
    var p;
    (p = d.current) == null || p.pushSync({
      ...g.current,
      group: Object.assign({}, g.current.group, S)
    });
  }, k = () => {
    var S, p;
    (S = d.current) != null && S.hasRedo && ((p = d.current) == null || p.redo().get());
  }, $ = () => {
    var S, p;
    (S = d.current) != null && S.hasUndo && ((p = d.current) == null || p.undo().get());
  };
  return He(() => {
    if (w === "loaded" && O) {
      const [S, p] = Ze(
        O.width,
        O.height,
        c,
        n
      );
      d.current = new Nt({
        initialState: {
          ...g.current,
          image: O,
          group: {
            width: S,
            height: p,
            x: 0,
            y: 0,
            rotation: 0
          },
          clipRect: {
            width: S,
            height: p,
            x: 0,
            y: 0
          }
        },
        delay: 0,
        onChange: l
      }), T((U) => ({
        ...U,
        group: {
          width: S,
          height: p,
          x: 0,
          y: 0,
          rotation: 0
        },
        clipRect: {
          width: S,
          height: p,
          x: 0,
          y: 0
        }
      })), R(!0);
    }
  }, [w]), /* @__PURE__ */ v(
    Tt.Provider,
    {
      value: {
        ...o,
        image: O,
        setGroup: y,
        setLines: I,
        setBlurs: m,
        setTexts: _,
        setImage: A,
        redo: k,
        undo: $
      },
      children: L && t
    }
  );
}, on = (t) => /* @__PURE__ */ G.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...t }, /* @__PURE__ */ G.createElement("path", { d: "M2.6291474,37.1542473 C2.9932144,37.5181419 3.53021322,37.645505 4.0308053,37.4817524 L17.4131966,33.8993297 C17.4131966,33.8993297 17.5042133,33.8629403 17.5315183,33.8538429 C17.7681619,33.7537718 17.9501954,33.5718245 17.9501954,33.5718245 L34.7520665,16.6052398 C34.7611681,16.5870451 33.1513228,18.3974222 35.1161335,16.186761 C35.8169624,15.3589008 37.3005354,13.3301883 37.3370253,10.5281998 C37.3460438,8.71782408 36.6088081,6.66181954 34.7520665,4.81505444 C32.9044265,2.95009459 30.847448,2.213208 29.0362148,2.22222222 C25.4137483,2.26779219 23.0746179,4.73317815 22.9562961,4.81505444 L6.14532327,21.7816392 C6.14532327,21.7816392 5.94508643,21.999976 5.86317135,22.200118 C5.84496798,22.2456049 5.81766296,22.3183838 5.81766296,22.3183838 L2.29238543,35.7623504 C2.12855527,36.2536081 2.25597869,36.7903527 2.6291474,37.1542473 Z M6.13205996,32.2561442 C6.13205996,32.2561442 6.7113846,32.12009 7.10863582,32.5191822 C7.4810588,32.8910636 7.4810588,33.4806316 7.4810588,33.4806316 L5.54445923,34.1881132 L6.13205996,32.2561442 Z M8.81716912,26.1591263 L12.1091434,27.6061887 L13.5568913,30.9026087 L9.65217723,32.2055653 C9.51401044,31.8092744 9.27972757,31.3169129 8.88324892,30.9146175 C8.45072674,30.4762958 7.92809578,30.260137 7.48956636,30.1460533 L8.81716912,26.1591263 Z M31.825925,8.12414251 C33.2973685,9.58179838 33.3085455,11.9563025 31.8508896,13.4277459 C31.8252594,13.4536186 31.7992536,13.4791166 31.7728806,13.5042317 L16.9707393,27.6003858 L15.361832,24.3334134 L11.7499499,22.3126037 L26.3187959,8.10275617 C27.8529745,6.60638208 30.3034146,6.6158981 31.825925,8.12414251 Z", id: "Shape", fillRule: "nonzero" })), an = (t) => /* @__PURE__ */ G.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 41 40", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...t }, /* @__PURE__ */ G.createElement("path", { d: "M14.0136054,25.4618474 L11.4739229,31.2851406 C10.6273578,33.0968408 9.53893333,34.2614878 8.20861678,34.7791165 C7.24111383,35.2967451 5.24566893,35.5555556 2.22222222,35.5555556 C2.58503583,35.0379269 3.1897161,33.8732799 4.03628118,32.0615797 C4.64097052,30.8969152 5.12471474,29.9910786 5.48752834,29.3440428 L16.1904762,3.33333333 L23.6281179,3.52744311 L34.6938776,29.5381526 C35.177629,31.0910386 35.9637134,32.7086038 37.0521542,34.3908969 C37.2940299,35.0379327 37.535902,35.4261484 37.7777778,35.5555556 C33.907766,35.5555556 31.5495129,35.3614477 30.7029478,34.9732262 C29.614507,34.4555976 28.5865506,32.9027349 27.6190476,30.3145917 L25.8049887,25.4618474 L14.0136054,25.4618474 Z M25.0793651,23.5207497 L20,9.9330656 L14.5578231,23.5207497 L25.0793651,23.5207497 Z", id: "A\\u5907\\u4EFD", fillRule: "nonzero" })), sn = (t) => /* @__PURE__ */ G.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...t }, /* @__PURE__ */ G.createElement("polygon", { id: "\\u8DEF\\u5F84", fillRule: "nonzero", points: "12.4894587 12.4501424 12.4894587 3.33333333 7.93105415 3.33333333 7.93105415 7.89173791 3.37264957 7.89173791 3.37264957 12.4501424 7.93105415 12.4501424 7.93105415 31.5954416 27.0763533 31.5954416 27.0763533 27.0370371 12.4894587 27.0370371" }), /* @__PURE__ */ G.createElement("polygon", { id: "\\u8DEF\\u5F84", fillRule: "nonzero", points: "38.0165242 27.0370371 33.4581197 27.0370371 33.4581197 7.89173791 14.3128205 7.89173791 14.3128205 12.4501424 28.8997151 12.4501424 28.8997151 36.1538462 33.4581197 36.1538462 33.4581197 31.5954416 38.0165242 31.5954416" })), cn = (t) => /* @__PURE__ */ G.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 41 40", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...t }, /* @__PURE__ */ G.createElement("path", { d: "M19.5555556,8.44444444 L30.6666667,8.44444444 L30.6666667,19.5555556 L19.5555556,19.5555556 L19.5555556,8.44444444 Z M8.44444444,19.5555556 L19.5555556,19.5555556 L19.5555556,30.6666667 L8.44444444,30.6666667 L8.44444444,19.5555556 Z", id: "\\u5F62\\u72B6", fillRule: "nonzero" }), /* @__PURE__ */ G.createElement("path", { d: "M31.1111111,37.7777778 L8.88888889,37.7777778 C5.20699056,37.7777778 2.22222222,34.7930094 2.22222222,31.1111111 L2.22222222,8.88888889 C2.22222222,5.20699056 5.20699056,2.22222222 8.88888889,2.22222222 L31.1111111,2.22222222 C34.7930094,2.22222222 37.7777778,5.20699056 37.7777778,8.88888889 L37.7777778,31.1111111 C37.7777778,34.7930094 34.7930094,37.7777778 31.1111111,37.7777778 Z M7.96296296,5.55555556 C6.63338857,5.55555556 5.55555556,6.63338857 5.55555556,7.96296296 L5.55555556,32.037037 C5.55555556,33.3666114 6.63338857,34.4444444 7.96296296,34.4444444 L32.037037,34.4444444 C33.3666114,34.4444444 34.4444444,33.3666114 34.4444444,32.037037 L34.4444444,7.96296296 C34.4444444,6.63338857 33.3666114,5.55555556 32.037037,5.55555556 L7.96296296,5.55555556 Z", id: "\\u5F62\\u72B6", fillRule: "nonzero" })), ln = (t) => /* @__PURE__ */ G.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...t }, /* @__PURE__ */ G.createElement("path", { d: "M17.5779596,8.54958017 L17.5779596,9.78258063 C17.5779596,10.8408584 18.4358632,11.6987621 19.494141,11.6987621 C20.5524188,11.6987621 21.4103224,10.8408584 21.4103224,9.78258063 L21.4103224,4.72371845 C21.4103224,3.496419 20.4153996,2.50149623 19.1881002,2.50149623 C18.5763176,2.50149623 17.9915961,2.75371146 17.5717539,3.19869512 L3.2331148,18.3959752 C2.0630494,19.6361077 2.0174257,21.5592807 3.12736825,22.8535021 L15.8639539,37.7046866 C16.6629229,38.6363048 18.065841,38.7438383 18.9974592,37.9448694 C19.4897309,37.5226902 19.7730202,36.9065365 19.7730202,36.2580253 L19.7730202,25.2321054 L19.7730202,25.2321054 C23.2058426,25.6262204 26.0618735,26.3972435 28.3411128,27.5451747 C28.3411128,27.5451747 28.3411128,27.5451747 28.3411128,27.5451747 C30.4830369,28.6239474 33.0939274,27.7620931 34.1727002,25.620169 C34.9201963,24.1360011 34.7551232,22.3553848 33.7475296,21.0339235 C33.0553456,20.1261947 32.2868819,19.29897 31.4421037,18.5522758 C28.2479816,15.7290114 24.3482408,13.9602893 19.742881,13.2461093 C18.8736739,13.111306 18.0597695,13.7066674 17.9249762,14.5758761 C17.9124536,14.6566279 17.9061644,14.7382238 17.9061644,14.8199408 C17.9061644,15.7914187 18.6317736,16.609832 19.5962554,16.726211 C22.0019735,17.0164528 24.3663523,17.8958982 26.6893918,19.3645475 C29.5542619,21.1757476 31.6020001,23.472523 32.8326067,26.2548737 C29.0492033,24.5029085 25.9618566,23.3648044 23.5705665,22.8405615 C22.0855021,22.5149906 20.6358973,22.2470078 19.2217523,22.0366132 C18.0078183,21.856015 16.8773204,22.6936906 16.696713,23.9076233 C16.680606,24.0158849 16.6725195,24.1251885 16.6725195,24.2346417 L16.6725195,33.6727049 L16.6725195,33.6727049 L7.30858708,22.4534377 C6.59165669,21.5944573 6.62515013,20.3364185 7.3867707,19.5168025 L17.5779596,8.54958017 L17.5779596,8.54958017 Z", id: "Path-9" })), un = [
  { icon: /* @__PURE__ */ v(on, {}), name: "Pencil" },
  { icon: /* @__PURE__ */ v(an, {}), name: "Words" },
  { icon: /* @__PURE__ */ v(sn, {}), name: "Cut" },
  { icon: /* @__PURE__ */ v(cn, {}), name: "Blur" },
  { icon: /* @__PURE__ */ v(ln, {}), name: "Recall" }
], dn = Q.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 20px;
  background: linear-gradient(180deg, rgba(71, 71, 71, 0) 0%, #222222 100%);
`, fn = Q.div`
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0;
`, hn = Ie.memo(Q.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  line-height: 20px;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
    fill: #fff;
  }
  ${(t) => t.isActive && Ae`
      color: #0096ff;
      background: #e6f5ff;
      box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);
      border-radius: 5px;
      border: 1px solid #0096ff;
      svg {
        fill: #0096ff;
      }
    `}
`), gn = Q.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  ${(t) => Ae`
      background: ${t.color};
      box-shadow: ${t.color === t.currentColor ? "0px 0px 4px 0px #0096ff" : "none"};
      border: ${t.color === t.currentColor ? "1px solid #0096FF;" : "1px solid #FFFFFF"};
    `}
`, pn = Q.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
`, vn = ({ children: t, onSelect: s }) => {
  const {
    activeTool: c,
    pencilConfig: n,
    editorColors: o,
    handleSelectTool: T,
    changeColor: L
  } = Le(), { undo: R } = We(), g = pe(() => ["Pencil"].includes(c), [c]), O = (w) => {
    switch (w) {
      case "Recall":
        R();
        break;
      case "Words":
        T("Words");
        break;
      case "Cut":
        T(w);
        break;
      default:
        T(w);
    }
    s == null || s();
  };
  return /* @__PURE__ */ q(dn, { children: [
    g && /* @__PURE__ */ v(pn, { children: o == null ? void 0 : o.map((w) => /* @__PURE__ */ v(
      gn,
      {
        color: w,
        currentColor: n.stroke,
        onClick: () => L(w)
      },
      w
    )) }),
    !["Words", "Cut"].includes(c) && /* @__PURE__ */ v(fn, { children: un.map((w) => /* @__PURE__ */ q(
      hn,
      {
        onClick: () => O(w.name),
        isActive: w.name === c,
        children: [
          w.icon,
          /* @__PURE__ */ v("span", { children: w.name })
        ]
      },
      w.name
    )) }),
    t
  ] });
}, De = 10, Oe = 10, lt = ({ tile: t }) => {
  if (t.isFilled, !t.color) {
    const L = t.data.length;
    let R = 0, g = 0, O = 0, w = 0;
    for (let d = 0; d < L; d += 4)
      R += t.data[d], g += t.data[d + 1], O += t.data[d + 2], w += t.data[d + 3];
    const l = L / 4;
    t.color = {
      r: Math.round(R / l),
      g: Math.round(g / l),
      b: Math.round(O / l),
      a: Math.round(w / l)
    };
  }
  const s = t.color, c = t.column * Oe, n = t.row * De, o = t.pixelWidth, T = t.pixelHeight;
  return /* @__PURE__ */ v(
    ht,
    {
      globalCompositeOperation: "source-over",
      x: c,
      y: n,
      width: o,
      height: T,
      fill: `rgba(${s.r}, ${s.g}, ${s.b}, ${s.a / 255})`
    }
  );
}, Rt = ({ currentBlur: t = [] }) => {
  const { width: s, height: c } = Le(), { image: n, group: o, blurs: T } = We(), L = W([]), R = Math.ceil(c / De), g = Math.ceil(s / Oe), [O, w] = ie(!1), l = (m, _, A) => {
    const y = [];
    let k = Math.max(0, Math.floor(_ / De) - Math.floor(A / 2));
    const $ = Math.max(0, Math.floor(m / Oe) - Math.floor(A / 2)), S = Math.min(R, k + A), p = Math.min(g, $ + A);
    for (; k < S; ) {
      let U = $;
      for (; U < p; )
        y.push(L.current[k * g + U]), U += 1;
      k += 1;
    }
    return y;
  }, d = pe(() => {
    const m = [];
    return O && t.forEach((_) => {
      m.push(...l(_.x, _.y, 5));
    }), m;
  }, [t, O]), I = pe(() => {
    const m = [];
    return O && T.forEach((_) => {
      _.forEach((A) => {
        m.push(...l(A.x, A.y, 5));
      });
    }), m;
  }, [T, O]);
  return Me(() => {
    const m = nn(n, o.width, o.height);
    for (let _ = 0; _ < R; _++)
      for (let A = 0; A < g; A++) {
        const y = {
          row: _,
          column: A,
          pixelWidth: Oe,
          pixelHeight: De,
          data: []
        };
        let k = [];
        const $ = (s * De * y.row + y.column * Oe) * 4, S = y.pixelHeight;
        for (let p = 0; p < S; p++) {
          const U = $ + s * 4 * p;
          k = [...k, ...m.data.slice(U, U + y.pixelWidth * 4)];
        }
        y.data = k, L.current.push(y);
      }
    w(!0);
  }, [n]), /* @__PURE__ */ q(Qt, { children: [
    d.length > 0 && /* @__PURE__ */ v(Ee, { children: d.map(
      (m, _) => m && /* @__PURE__ */ v(lt, { tile: m }, `${_}-${m.row}-${m.column}`)
    ) }),
    I.length > 0 && /* @__PURE__ */ v(Ee, { children: I.map(
      (m, _) => m && /* @__PURE__ */ v(lt, { tile: m }, `${_}-${m.row}-${m.column}`)
    ) })
  ] });
}, xn = (t) => {
  const [s, c] = ie({
    width: window.innerWidth,
    height: window.innerHeight
  });
  return Me(() => {
    var o, T;
    const n = () => {
      window.visualViewport && c({
        width: window.visualViewport.width,
        height: window.visualViewport.height
      });
    };
    return (o = window.visualViewport) == null || o.addEventListener("resize", n), (T = window.visualViewport) == null || T.addEventListener("scroll", n), () => {
      var L, R;
      (L = window.visualViewport) == null || L.removeEventListener("resize", n), (R = window.visualViewport) == null || R.removeEventListener("scroll", n);
    };
  }, []), Me(() => {
    t == null || t();
  }, [s]), s;
}, wn = (t) => Ae`
  background: ${t.color};
  box-shadow: ${t.color === t.currentColor ? "0px 0px 4px 0px rgba(0,150,255,1)" : "none"};
  border: ${t.color === t.currentColor ? "1px solid #0096FF;" : "1px solid #FFFFFF"};
`, mn = Q.div`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  color: #fff;
  background: #fff;
  box-sizing: border-box;
  ${wn}
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 30px;
    height: 30px;
    transform: translate(-50%, -50%);
    content: '';
  }
`, yn = (t) => Ae`
  transform: translateY(calc(${t.viewprotHeight - 20}px - 100%));
`, Cn = Q.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  transition: transform 0.2s ease;
  ${yn}
`, bn = Q.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 100px 15px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
`, Tn = Q.textarea`
  width: 100%;
  height: 105px;
  padding: 0 12px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 150, 255, 0.4);
  border-radius: 8px;
  border: 1px solid #38a1f6;
  resize: none;
  font-size: 30px;
  font-weight: 500;
  color: #222222;
  line-height: 42px;
`, Rn = Q.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  box-sizing: border-box;
  div {
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 200%;
      height: 200%;
      content: '';
      transform: translate(-50%, -50%);
    }
  }
`, En = ({
  defaultWord: t = "",
  onDone: s,
  onCancel: c
}) => {
  const n = W(null), o = xn(() => {
    var l;
    (l = n.current) == null || l.focus();
  }), { editorColors: T, textConfig: L, changeColor: R } = Le(), g = (l) => {
    l.stopPropagation(), c == null || c();
  }, O = (l) => {
    l.stopPropagation(), s == null || s(n.current.value);
  }, w = (l, d) => {
    var I;
    l.preventDefault(), l.stopPropagation(), R(d), (I = n.current) == null || I.focus();
  };
  return Me(() => {
    var l;
    (l = n.current) == null || l.focus(), n.current.value = t;
  }, []), Zt.createPortal(
    /* @__PURE__ */ q(bn, { onClick: (l) => l.stopPropagation(), children: [
      /* @__PURE__ */ q(Rn, { children: [
        /* @__PURE__ */ v("div", { onClick: g, children: "Cancel" }),
        /* @__PURE__ */ v("div", { onClick: O, children: "Done" })
      ] }),
      /* @__PURE__ */ v(
        Tn,
        {
          ref: n,
          autoComplete: "off",
          wrap: "hard",
          style: { color: L.fill }
        }
      ),
      /* @__PURE__ */ v(Cn, { viewprotHeight: o.height, children: T == null ? void 0 : T.map((l) => /* @__PURE__ */ v(
        mn,
        {
          color: l,
          currentColor: L.fill,
          onClick: (d) => w(d, l)
        },
        l
      )) })
    ] }),
    document.body
  );
}, Ln = (t) => /* @__PURE__ */ G.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...t }, /* @__PURE__ */ G.createElement("path", { d: "M5.18286303,19.7599081 L30.5474794,19.7599081 C31.1080723,19.7599081 31.6457047,19.9826027 32.0421038,20.3790017 C32.4385028,20.7754008 32.6611974,21.3130332 32.6611974,21.8736261 L32.6611974,40.8970884 C32.6611974,42.0644626 31.7148536,43.0108064 30.5474794,43.0108064 L5.18286303,43.0108064 C4.01548881,43.0108064 3.06914498,42.0644626 3.06914498,40.8970884 L3.06914498,21.8736261 C3.06914498,21.3130332 3.29183964,20.7754008 3.68823867,20.3790017 C4.08463769,19.9826027 4.62227015,19.7599081 5.18286303,19.7599081 L5.18286303,19.7599081 Z M7.29658108,23.9873441 L7.29658108,38.7833703 L28.4337613,38.7833703 L28.4337613,23.9873441 L7.29658108,23.9873441 Z", id: "\\u5F62\\u72B6", fill: "#FFFFFF", fillRule: "nonzero" }), /* @__PURE__ */ G.createElement("path", { d: "M26.0389188,13.171449 L26.0389188,16.3779592 C26.0389188,16.5380827 25.9484507,16.6844632 25.8052319,16.7560726 C25.6620132,16.827682 25.4906279,16.8122282 25.3625291,16.7161541 L18.0342686,11.2204872 C17.9278193,11.1406503 17.8651712,11.015354 17.8651712,10.8822923 C17.8651712,10.7492307 17.9278193,10.6239344 18.0342686,10.5440974 L25.3625291,5.04843056 C25.4906279,4.95235648 25.6620132,4.93690268 25.8052319,5.00851207 C25.9484507,5.08012147 26.0389188,5.226502 26.0389188,5.38662547 L26.0389188,8.94401291 C36.5395083,8.95218005 45.0475851,17.4668826 45.0475851,27.9674752 C45.0475851,28.722711 44.6448536,29.4206271 43.9908195,29.7982784 C43.3367854,30.1759296 42.5309487,30.1759296 41.8769146,29.7982784 C41.2228805,29.4206271 40.8200334,28.722711 40.820149,27.9674752 C40.8201531,19.8016303 34.2047597,13.1796148 26.0389188,13.171449 Z", id: "\\u8DEF\\u5F84", fill: "#FFFFFF", fillRule: "nonzero" })), ut = [
  "top-left",
  "top-center",
  "top-right",
  "middle-left",
  "middle-right",
  "bottom-left",
  "bottom-center",
  "bottom-right"
], Sn = () => {
  const t = W(
    {}
  ), s = (c) => {
    for (let n of ut) {
      const o = c.findOne(`.${n}`);
      o == null || o.fillPriority("pattern"), o == null || o.fillPatternRepeat("no-repeat"), o == null || o.fillPatternImage(t.current[n]), o == null || o.strokeEnabled(!1);
    }
    c == null || c.getLayer().batchDraw();
  };
  return He(() => {
    for (let c of ut)
      t.current[c] = kn(c);
  }, []), s;
}, kn = (t, s = "#0096FF") => {
  const c = document.createElement("canvas");
  c.width = 24, c.height = 24;
  const n = c.getContext("2d");
  switch (n.fillStyle = s, n.lineCap = "round", n.beginPath(), t) {
    case "top-left":
      n.lineTo(10, 10), n.lineTo(24, 10), n.lineTo(24, 12), n.lineTo(12, 12), n.lineTo(12, 24), n.lineTo(10, 24);
      break;
    case "top-center":
      n.lineTo(0, 14), n.lineTo(24, 14), n.lineTo(24, 12), n.lineTo(0, 12);
      break;
    case "top-right":
      n.lineTo(0, 10), n.lineTo(14, 10), n.lineTo(14, 24), n.lineTo(12, 24), n.lineTo(12, 12), n.lineTo(0, 12);
      break;
    case "bottom-center":
      n.lineTo(0, 10), n.lineTo(24, 10), n.lineTo(24, 12), n.lineTo(0, 12);
      break;
    case "middle-left":
      n.lineTo(12, 0), n.lineTo(12, 24), n.lineTo(14, 24), n.lineTo(14, 0);
      break;
    case "middle-right":
      n.lineTo(12, 0), n.lineTo(12, 24), n.lineTo(10, 24), n.lineTo(10, 0);
      break;
    case "bottom-left":
      n.lineTo(12, 0), n.lineTo(12, 12), n.lineTo(24, 12), n.lineTo(24, 14), n.lineTo(10, 14), n.lineTo(10, 0);
      break;
    case "bottom-right":
      n.lineTo(12, 12), n.lineTo(12, 0), n.lineTo(14, 0), n.lineTo(14, 14), n.lineTo(0, 14), n.lineTo(0, 12);
      break;
  }
  return n.closePath(), n.fill(), c;
}, Pn = Q.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
`, _n = Q.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  box-sizing: border-box;
  div {
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 200%;
      height: 200%;
      content: "";
      transform: translate(-50%, -50%);
    }
  }
`, Fn = ({ onCutDone: t }) => {
  const { image: s, texts: c, lines: n, group: o, clipRect: T } = We();
  let { width: L, height: R, handleSelectTool: g } = Le();
  const O = Sn(), w = W(null), l = W(null), d = W(null), I = W(null), m = W(null), _ = W(null), A = W(0), [y, k] = ie(T), [$, S] = ie(o.rotation), p = pe(() => {
    const f = $ / 90 % 4 + 1;
    let h = [L, R * 0.8];
    f % 2 === 0 && (h = [R * 0.8, L]);
    const [z] = Ze(
      y.width,
      y.height,
      ...h
    );
    return z / y.width;
  }, [y, $]), [U, ae] = pe(() => {
    const f = L / 2, h = R * 0.8 / 2, z = o.x + (y.x + y.width / 2) * p, C = o.y + (y.y + y.height / 2) * p, [b, te] = Ct(z, C, $), fe = isNaN(z - f) ? 0 : b - f, ne = isNaN(C - h) ? 0 : te - h;
    return [fe, ne];
  }, [o, y, $, p]), ve = o.x - U, xe = o.y - ae, ue = pe(() => {
    const f = document.createElement("canvas");
    f.width = y.width * p, f.height = y.height * p;
    const h = f.getContext("2d");
    return h.strokeStyle = "#0096FF", h.lineWidth = 1, h.lineCap = "round", h.beginPath(), h.lineTo(0, f.height / 3), h.lineTo(L, f.height / 3), h.stroke(), h.beginPath(), h.lineTo(0, f.height / 3 * 2), h.lineTo(L, f.height / 3 * 2), h.stroke(), h.beginPath(), h.lineTo(f.width / 3, 0), h.lineTo(f.width / 3, R), h.stroke(), h.beginPath(), h.lineTo(f.width / 3 * 2, 0), h.lineTo(f.width / 3 * 2, R), h.stroke(), f;
  }, [y.width, y.height, $]), ee = () => {
    var b, te;
    const f = I.current, h = f.scaleX(), z = f.scaleY(), C = {
      width: f.width() * h,
      height: f.height() * z,
      x: +((b = f.position().x) == null ? void 0 : b.toFixed(5)),
      y: +((te = f.position().y) == null ? void 0 : te.toFixed(5))
    };
    f.scaleX(1), f.scaleY(1), C.x < 0 && (C.width += C.x, C.x = 0, f.x(0)), C.y < 0 && (C.height += C.y, C.y = 0, f.y(0)), C.x + C.width > o.width && (C.width = o.width - C.x), C.y + C.height > o.height && (C.height = o.height - C.y), C.height = C.height < 0 ? -C.height : C.height, C.width = C.width < 0 ? -C.width : C.width, k(C);
  }, de = () => {
    t(y, $);
  }, H = () => {
    g(null);
  }, re = () => {
    S((f) => f + 90);
  }, Y = (f) => {
    var b, te, fe;
    f.evt.preventDefault();
    const h = w.current, z = f.evt.touches[0], C = f.evt.touches[1];
    if (z && C) {
      (b = d.current) != null && b.isDragging() && ((te = d.current) == null || te.stopDrag());
      const ne = {
        x: z.clientX,
        y: z.clientY
      }, se = {
        x: C.clientX,
        y: C.clientY
      }, N = tn(ne, se);
      if (!_.current) {
        _.current = N;
        return;
      }
      const he = bt(ne, se);
      A.current || (A.current = he);
      const ge = {
        x: (N.x - h.x()) / h.scaleX(),
        y: (N.y - h.y()) / h.scaleX()
      }, ce = h.scaleX() * (he / A.current);
      h.scaleX(ce), h.scaleY(ce);
      let le = N.x - _.current.x, me = N.y - _.current.y;
      [le, me] = ct(le, me, $);
      const Ce = {
        x: N.x - ge.x * ce + le,
        y: N.y - ge.y * ce + me
      };
      h.position(Ce), A.current = he, _.current = N;
      return;
    }
    if (z) {
      if ((fe = m.current) != null && fe.isTransforming())
        return;
      const ne = {
        x: z.clientX,
        y: z.clientY
      };
      if (!_.current)
        return _.current = ne;
      let se = ne.x - _.current.x, N = ne.y - _.current.y;
      [se, N] = ct(se, N, $), h.move({
        x: se,
        y: N
      }), _.current = ne;
    }
  }, we = () => {
    A.current = 0, _.current = null;
    const f = I.current, h = w.current, z = h.scaleX(), C = h.scaleY(), b = {
      width: f.width() / z,
      height: f.height() / C,
      x: (f.position().x - h.x()) / z,
      y: (f.position().y - h.y()) / C
    };
    h.scaleX(1), h.scaleY(1), h.position({
      x: 0,
      y: 0
    }), b.x < 0 && (b.width += b.x, b.x = 0, f.x(0)), b.y < 0 && (b.height += b.y, b.y = 0, f.y(0)), b.x + b.width > o.width && (b.width = o.width - b.x), b.y + b.height > o.height && (b.height = o.height - b.y), b.height = b.height < 0 ? -b.height : b.height, b.width = b.width < 0 ? -b.width : b.width, k(b);
  };
  return He(() => {
    var f;
    (f = m.current) == null || f.nodes([I.current]), O(m.current);
  }, []), /* @__PURE__ */ q(Pn, { children: [
    /* @__PURE__ */ v(
      gt,
      {
        ref: d,
        width: L,
        height: R,
        scale: {
          x: 0.96,
          y: 0.96
        },
        x: L * 0.02,
        y: R * 0.02,
        onTouchMove: Y,
        onTouchEnd: we,
        children: /* @__PURE__ */ q(pt, { children: [
          /* @__PURE__ */ q(
            Ee,
            {
              x: ve,
              y: xe,
              width: o.width,
              height: o.height,
              scaleX: p,
              scaleY: p,
              rotation: $,
              children: [
                /* @__PURE__ */ q(Ee, { ref: w, children: [
                  /* @__PURE__ */ v(
                    vt,
                    {
                      ref: l,
                      image: s,
                      width: o.width,
                      height: o.height
                    }
                  ),
                  /* @__PURE__ */ v(Rt, {}, "clipBlur"),
                  c.map((f, h) => /* @__PURE__ */ v(xt, { draggable: !0, ...f }, h)),
                  n.map((f, h) => /* @__PURE__ */ v(wt, { ...f }, h))
                ] }),
                /* @__PURE__ */ v(
                  ht,
                  {
                    ref: I,
                    x: y.x,
                    y: y.y,
                    width: y.width,
                    height: y.height,
                    fillPriority: "pattern",
                    fillPatternImage: ue,
                    fillPatternRepeat: "no-repeat",
                    fillPatternScale: {
                      x: 1 / p,
                      y: 1 / p
                    },
                    onTransformEnd: ee
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ v(mt, { ref: m, rotateEnabled: !1, anchorSize: 24 })
        ] })
      }
    ),
    /* @__PURE__ */ q(_n, { children: [
      /* @__PURE__ */ v("div", { onClick: H, children: "Cancel" }),
      /* @__PURE__ */ v("div", { onClick: re, children: /* @__PURE__ */ v(Ln, {}) }),
      /* @__PURE__ */ v("div", { onClick: de, children: "Done" })
    ] })
  ] });
}, Dn = (t) => /* @__PURE__ */ G.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...t }, /* @__PURE__ */ G.createElement("path", { d: "M32.5688783,3 C33.3575889,3 33.9969652,3.64172519 33.9969652,4.43333333 L33.9969652,4.43333333 L33.9969652,8.01666667 L42.572627,8.01666667 C43.0828333,8.01692271 43.5541473,8.29035109 43.8090295,8.73395398 C44.0639117,9.17755688 44.0636395,9.72394046 43.8083154,10.1672873 C43.5529914,10.6106342 43.0814052,10.8835894 42.5711989,10.8833333 L42.5711989,10.8833333 L41.0659953,10.8833333 L37.5886037,42.1773 C37.3457385,44.3538608 35.5121996,46 33.3300486,46 L33.3300486,46 L14.6692372,46 C12.4873832,46 10.6542959,44.3536371 10.4121101,42.1773 L10.4121101,42.1773 L6.93471856,10.8833333 L5.42808689,10.8833333 C4.63937628,10.8833333 4,10.2416081 4,9.45 C4,8.65839186 4.63937628,8.01666667 5.42808689,8.01666667 L5.42808689,8.01666667 L14.0037487,8.01666667 L14.0037487,4.43333333 C14.0037487,3.64172519 14.643125,3 15.4318356,3 L15.4318356,3 Z M38.1926845,10.8833333 L9.80802939,10.8833333 L13.2497188,41.8591 C13.3304676,42.5847271 13.9417707,43.1333334 14.6692372,43.1333334 L14.6692372,43.1333334 L33.3314767,43.1333334 C34.0589432,43.1333334 34.6702463,42.5847271 34.7509951,41.8591 L34.7509951,41.8591 L38.1926845,10.8833333 Z M28.2846176,14.4265333 C29.0733282,14.4265333 29.7127045,15.0682585 29.7127045,15.8598667 L29.7127045,15.8598667 L29.7127045,36.9040667 C29.7127045,37.6956748 29.0733282,38.3374 28.2846176,38.3374 C27.495907,38.3374 26.8565307,37.6956748 26.8565307,36.9040667 L26.8565307,36.9040667 L26.8565307,15.8598667 C26.8565307,15.0682585 27.495907,14.4265333 28.2846176,14.4265333 Z M20.4301397,14.4265333 C21.2188503,14.4265333 21.8582266,15.0682585 21.8582266,15.8598667 L21.8582266,15.8598667 L21.8582266,36.9040667 C21.8582266,37.6956748 21.2188503,38.3374 20.4301397,38.3374 C19.6414291,38.3374 19.0020528,37.6956748 19.0020528,36.9040667 L19.0020528,36.9040667 L19.0020528,15.8598667 C19.0020528,15.0682585 19.6414291,14.4265333 20.4301397,14.4265333 Z M31.1407914,5.86666667 L16.8599225,5.86666667 L16.8599225,8.01666667 L31.1407914,8.01666667 L31.1407914,5.86666667 Z", fillRule: "nonzero" })), On = Q.div`
  position: relative;
  background: #000;
`, Mn = Q.div`
  ${(t) => Ae`
    --optaicy: ${t.deleteAreaStatus === "active" ? 0.9 : 1};
    --fill-color: ${t.deleteAreaStatus === "active" ? "#ff6650" : "#0096ff"};
    --is-show: ${t.deleteAreaStatus === "none" ? "none" : "flex"};
  `}
  display: var(--is-show);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 80px;
  padding: 14px 0 15px;
  background: #e2f0fe;
  box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);
  border-radius: 10px;
  border: 1px solid var(--fill-color);
  font-size: 14px;
  font-weight: 500;
  color: var(--fill-color);
  line-height: 20px;
  opacity: var(--optaicy);
  transition: all 0.1s ease;
  box-sizing: border-box;
  svg {
    width: 24px;
    height: 24px;
    fill: var(--fill-color);
    transition: inherit;
  }
`, jn = ft(
  ({ toolbarBottom: t }, s) => {
    const {
      width: c,
      height: n,
      activeTool: o,
      pencilConfig: T,
      textConfig: L,
      handleSelectTool: R
    } = Le(), {
      image: g,
      texts: O,
      lines: w,
      group: l,
      clipRect: d,
      setLines: I,
      setTexts: m,
      setImage: _,
      setBlurs: A
    } = We(), [y, k] = ie(
      []
    ), [$, S] = ie("none"), p = W(null), U = W(null), ae = W(null), ve = W(null), xe = W(null), ue = W(null), ee = W(null), de = W(0), H = W(1), re = W(null), Y = pe(() => {
      const u = l.rotation / 90 % 4 + 1;
      let a = [c, n * 0.8];
      u % 2 === 0 && (a = [n * 0.8, c]);
      const [F] = Ze(
        d.width,
        d.height,
        ...a
      );
      return F / d.width;
    }, [d, l.rotation]), [we, f] = pe(() => {
      const u = c / 2, a = n * 0.8 / 2, F = l.x + (d.x + d.width / 2) * Y, M = l.y + (d.y + d.height / 2) * Y, [Z, V] = Ct(F, M, l.rotation), Se = isNaN(F - u) ? 0 : Z - u, ke = isNaN(M - a) ? 0 : V - a;
      return [Se, ke];
    }, [l, d, l.rotation, Y]), h = l.x - we, z = l.y - f, C = () => {
      const u = ae.current, a = u.getRelativePointerPosition();
      o === "Pencil" ? (ue.current = new Ht.Line({
        ...T,
        strokeWidth: T.strokeWidth / Y,
        points: a ? [a.x, a.y, a.x, a.y] : []
      }), u.add(ue.current)) : o === "Blur" && k((F) => [...F, a]);
    }, b = () => {
      var F;
      const u = ue.current, a = (F = ae.current) == null ? void 0 : F.getRelativePointerPosition();
      if (o === "Pencil" && u) {
        const M = u.points().concat([a.x, a.y]);
        u.points(M);
      }
      o === "Blur" && y.length && k((M) => [...M, a]);
    }, te = () => {
      const u = ue.current;
      o === "Pencil" && u && (I((a) => [
        ...a,
        {
          ...T,
          strokeWidth: T.strokeWidth / Y,
          points: u.points()
        }
      ]), setTimeout(() => {
        u.destroy(), ue.current = null;
      }, 50)), o === "Blur" && (A((a) => [...a, y]), k([]));
    }, fe = (u) => {
      if (u) {
        const a = L.fontSize / Y, F = L.width / Y, M = Math.min(F, u.length * a);
        m((Z) => [
          ...Z,
          {
            ...L,
            fontSize: a,
            text: u,
            align: "center",
            width: M,
            x: l.width / 2,
            y: l.height / 2,
            offsetX: M / 2,
            offsetY: a / 2,
            rotation: -l.rotation
          }
        ]), R(null);
      }
    }, ne = (u) => {
      var V;
      const a = u.target, F = a.absolutePosition(), M = a.height(), Z = (V = re.current) == null ? void 0 : V.y();
      F.y >= Z - M ? S("active") : S("show");
    }, se = (u) => {
      var M;
      const a = u.target, F = a.attrs.id.slice(-1);
      switch ($) {
        case "show":
        case "none":
          const Z = a.position();
          m((V) => (V[F].x = Z.x, V[F].y = Z.y, V));
          break;
        case "active":
          m((V) => (V.splice(F, 1), [...V]));
          break;
      }
      S("none"), a == null || a.moveTo(ve.current), $ === "active" && ((M = ee.current) == null || M.nodes([]));
    }, N = () => {
      var u;
      (u = ee.current) == null || u.nodes([]);
    }, he = (u, a) => {
      _(u, a), R(null);
    }, ge = (u) => {
      var a, F, M, Z;
      ["Blur", "Pencil"].includes(o) ? C() : u.target.className === "Text" ? (u.target.moveTo(ae.current), (a = ee.current) == null || a.nodes([u.target])) : u.target === xe.current && ((M = (F = ee.current) == null ? void 0 : F.nodes()[0]) == null || M.moveTo(ve.current), (Z = ee.current) == null || Z.nodes([]));
    }, ce = (u) => {
      var a;
      ["Blur", "Pencil"].includes(o) ? C() : u.target.className === "Text" && (u.target.moveTo(ae.current), (a = ee.current) == null || a.nodes([u.target]));
    }, le = (u) => {
      u.evt.preventDefault(), ["Blur", "Pencil"].includes(o) && b();
    }, me = (u) => {
      var a, F;
      if (u.evt.preventDefault(), ["Blur", "Pencil"].includes(o))
        b();
      else if (u.evt.touches.length > 1) {
        const M = ee.current.nodes()[0];
        M.draggable(!1);
        const Z = u.evt.touches[0], V = u.evt.touches[1];
        (a = p.current) != null && a.isDragging() && ((F = p.current) == null || F.stopDrag());
        const Se = {
          x: Z.clientX,
          y: Z.clientY
        }, ke = {
          x: V.clientX,
          y: V.clientY
        }, be = bt(Se, ke);
        de.current || (de.current = be, H.current = M.scaleX());
        let ze = (be / de.current - 1) * 0.8 + 1;
        const $e = H.current * ze;
        M.scaleX($e), M.scaleY($e);
      }
    }, Ce = (u) => {
      ["Blur", "Pencil"].includes(o) && te();
    }, Ye = (u) => {
      ["Blur", "Pencil"].includes(o) && te();
      const a = ee.current.nodes()[0];
      if (a && a.scaleX() > H.current) {
        const F = a.attrs.id.slice(-1);
        m((M) => (M[F].scaleX = a.scaleX(), M[F].scaleY = a.scaleY(), [...M]));
      }
      a == null || a.draggable(!0), de.current = 0, H.current = 1;
    };
    return Me(() => {
      var u;
      re.current = (u = p.current) == null ? void 0 : u.findOne(
        "#delete-area"
      );
    }, []), Xt(
      s,
      () => ({
        exportImage: () => {
          var u;
          return (u = ae.current) == null ? void 0 : u.toDataURL({
            x: d.x * Y - we,
            y: d.y * Y - f,
            width: d.width * Y,
            height: d.height * Y
          });
        }
      }),
      [d]
    ), /* @__PURE__ */ q(
      On,
      {
        style: {
          width: c,
          height: n
        },
        children: [
          /* @__PURE__ */ v(
            gt,
            {
              ref: p,
              width: c,
              height: n,
              onMouseDown: ge,
              onTouchStart: ce,
              onMouseMove: le,
              onTouchMove: me,
              onMouseUp: Ce,
              onTouchEnd: Ye,
              children: /* @__PURE__ */ q(pt, { ref: U, children: [
                /* @__PURE__ */ v(
                  Ee,
                  {
                    ref: ae,
                    x: h,
                    y: z,
                    width: l.width,
                    height: l.height,
                    scale: {
                      x: Y,
                      y: Y
                    },
                    rotation: l.rotation,
                    children: /* @__PURE__ */ q(
                      Ee,
                      {
                        ref: ve,
                        clipX: d.x,
                        clipY: d.y,
                        clipHeight: d.height,
                        clipWidth: d.width,
                        children: [
                          /* @__PURE__ */ v(
                            vt,
                            {
                              ref: xe,
                              image: g,
                              width: l.width,
                              height: l.height
                            }
                          ),
                          /* @__PURE__ */ v(Rt, { currentBlur: y }),
                          O.map((u, a) => /* @__PURE__ */ Vt(
                            xt,
                            {
                              ...u,
                              key: a,
                              id: `text-${a}`,
                              x: u.x,
                              y: u.y,
                              draggable: !0,
                              onDragMove: ne,
                              onDragEnd: se
                            }
                          )),
                          w.map((u, a) => /* @__PURE__ */ v(wt, { ...u }, a))
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ v(
                  Gt,
                  {
                    groupProps: {
                      id: "delete-area",
                      y: n - 120,
                      x: c / 2 - 75,
                      width: 150,
                      height: 80
                    },
                    children: /* @__PURE__ */ q(Mn, { deleteAreaStatus: $, children: [
                      /* @__PURE__ */ v(Dn, {}),
                      /* @__PURE__ */ v("div", { children: "Drag here to delete" })
                    ] })
                  }
                ),
                /* @__PURE__ */ v(
                  mt,
                  {
                    ref: ee,
                    rotateEnabled: !1,
                    resizeEnabled: !1,
                    anchorStroke: "rgba(0,0,0,0)",
                    anchorFill: "rgba(0,0,0,0)",
                    borderStroke: "#ccc"
                  }
                )
              ] })
            }
          ),
          o === "Cut" && /* @__PURE__ */ v(Fn, { onCutDone: he }),
          o === "Words" && /* @__PURE__ */ v(
            En,
            {
              onDone: fe,
              onCancel: () => R(null)
            }
          ),
          $ === "none" && /* @__PURE__ */ v(vn, { onSelect: N, children: t })
        ]
      }
    );
  }
), Nn = () => W({
  exportImage: () => ""
}), Un = ft(
  ({
    image: t,
    width: s = window.innerWidth,
    height: c = window.innerHeight,
    toolbarBottom: n
  }, o) => /* @__PURE__ */ v(en, { width: s, height: c, children: /* @__PURE__ */ v(rn, { image: t, children: /* @__PURE__ */ v(jn, { ref: o, toolbarBottom: n }) }) })
);
export {
  Un as default,
  Nn as useExport
};

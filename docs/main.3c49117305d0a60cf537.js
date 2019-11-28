(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
  "/o+h": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = function (e, t) {
      return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
        e.__proto__ = t
      } || function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
      })(e, t)
    };

    function o(e, t) {
      function n() {
        this.constructor = e
      }

      r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }

    var i = function () {
      return (i = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e
      }).apply(this, arguments)
    };

    function s(e) {
      var t = "function" == typeof Symbol && e[Symbol.iterator], n = 0;
      return t ? t.call(e) : {
        next: function () {
          return e && n >= e.length && (e = void 0), {value: e && e[n++], done: !e}
        }
      }
    }

    function a(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r, o, i = n.call(e), s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
      } catch (a) {
        o = {error: a}
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    }

    function l() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(a(arguments[t]));
      return e
    }

    var u = Array.isArray || function (e) {
      return e && "number" == typeof e.length
    };

    function c(e) {
      return null != e && "object" == typeof e
    }

    function p(e) {
      return "function" == typeof e
    }

    var d, h = {e: {}};

    function f() {
      try {
        return d.apply(this, arguments)
      } catch (e) {
        return h.e = e, h
      }
    }

    function g(e) {
      return d = e, f
    }

    var v = function (e) {
      function t(n) {
        var r = e.call(this, n ? n.length + " errors occurred during unsubscription:\n  " + n.map(function (e, t) {
          return t + 1 + ") " + e.toString()
        }).join("\n  ") : "") || this;
        return r.errors = n, r.name = "UnsubscriptionError", Object.setPrototypeOf(r, t.prototype), r
      }

      return o(t, e), t
    }(Error), y = function () {
      function e(e) {
        this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, e && (this._unsubscribe = e)
      }

      var t;
      return e.prototype.unsubscribe = function () {
        var e, t = !1;
        if (!this.closed) {
          var n = this._parent, r = this._parents, o = this._unsubscribe, i = this._subscriptions;
          this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
          for (var s = -1, a = r ? r.length : 0; n;) n.remove(this), n = ++s < a && r[s] || null;
          if (p(o) && g(o).call(this) === h && (t = !0, e = e || (h.e instanceof v ? m(h.e.errors) : [h.e])), u(i)) for (s = -1, a = i.length; ++s < a;) {
            var l = i[s];
            if (c(l) && g(l.unsubscribe).call(l) === h) {
              t = !0, e = e || [];
              var d = h.e;
              d instanceof v ? e = e.concat(m(d.errors)) : e.push(d)
            }
          }
          if (t) throw new v(e)
        }
      }, e.prototype.add = function (t) {
        if (!t || t === e.EMPTY) return e.EMPTY;
        if (t === this) return this;
        var n = t;
        switch (typeof t) {
          case"function":
            n = new e(t);
          case"object":
            if (n.closed || "function" != typeof n.unsubscribe) return n;
            if (this.closed) return n.unsubscribe(), n;
            if ("function" != typeof n._addParent) {
              var r = n;
              (n = new e)._subscriptions = [r]
            }
            break;
          default:
            throw new Error("unrecognized teardown " + t + " added to Subscription.")
        }
        return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n
      }, e.prototype.remove = function (e) {
        var t = this._subscriptions;
        if (t) {
          var n = t.indexOf(e);
          -1 !== n && t.splice(n, 1)
        }
      }, e.prototype._addParent = function (e) {
        var t = this._parent, n = this._parents;
        t && t !== e ? n ? -1 === n.indexOf(e) && n.push(e) : this._parents = [e] : this._parent = e
      }, e.EMPTY = ((t = new e).closed = !0, t), e
    }();

    function m(e) {
      return e.reduce(function (e, t) {
        return e.concat(t instanceof v ? t.errors : t)
      }, [])
    }

    var b = !1, _ = {
      Promise: void 0, set useDeprecatedSynchronousErrorHandling(e) {
        b = e
      }, get useDeprecatedSynchronousErrorHandling() {
        return b
      }
    };

    function w(e) {
      setTimeout(function () {
        throw e
      })
    }

    var x = {
        closed: !0, next: function (e) {
        }, error: function (e) {
          if (_.useDeprecatedSynchronousErrorHandling) throw e;
          w(e)
        }, complete: function () {
        }
      },
      C = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("rxSubscriber") : "@@rxSubscriber",
      E = function (e) {
        function t(t, n, r) {
          var o, i = e.call(this) || this;
          switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
            case 0:
              i.destination = x;
              break;
            case 1:
              if (!t) {
                i.destination = x;
                break
              }
              if ("object" == typeof t) {
                if ((o = t) instanceof E || "syncErrorThrowable" in o && o[C]) {
                  var s = t[C]();
                  i.syncErrorThrowable = s.syncErrorThrowable, i.destination = s, s.add(i)
                } else i.syncErrorThrowable = !0, i.destination = new T(i, t);
                break
              }
            default:
              i.syncErrorThrowable = !0, i.destination = new T(i, t, n, r)
          }
          return i
        }

        return o(t, e), t.prototype[C] = function () {
          return this
        }, t.create = function (e, n, r) {
          var o = new t(e, n, r);
          return o.syncErrorThrowable = !1, o
        }, t.prototype.next = function (e) {
          this.isStopped || this._next(e)
        }, t.prototype.error = function (e) {
          this.isStopped || (this.isStopped = !0, this._error(e))
        }, t.prototype.complete = function () {
          this.isStopped || (this.isStopped = !0, this._complete())
        }, t.prototype.unsubscribe = function () {
          this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
        }, t.prototype._next = function (e) {
          this.destination.next(e)
        }, t.prototype._error = function (e) {
          this.destination.error(e), this.unsubscribe()
        }, t.prototype._complete = function () {
          this.destination.complete(), this.unsubscribe()
        }, t.prototype._unsubscribeAndRecycle = function () {
          var e = this._parent, t = this._parents;
          return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = e, this._parents = t, this
        }, t
      }(y), T = function (e) {
        function t(t, n, r, o) {
          var i, s = e.call(this) || this;
          s._parentSubscriber = t;
          var a = s;
          return p(n) ? i = n : n && (i = n.next, r = n.error, o = n.complete, n !== x && (p((a = Object.create(n)).unsubscribe) && s.add(a.unsubscribe.bind(a)), a.unsubscribe = s.unsubscribe.bind(s))), s._context = a, s._next = i, s._error = r, s._complete = o, s
        }

        return o(t, e), t.prototype.next = function (e) {
          if (!this.isStopped && this._next) {
            var t = this._parentSubscriber;
            _.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
          }
        }, t.prototype.error = function (e) {
          if (!this.isStopped) {
            var t = this._parentSubscriber, n = _.useDeprecatedSynchronousErrorHandling;
            if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe()); else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : w(e), this.unsubscribe(); else {
              if (this.unsubscribe(), n) throw e;
              w(e)
            }
          }
        }, t.prototype.complete = function () {
          var e = this;
          if (!this.isStopped) {
            var t = this._parentSubscriber;
            if (this._complete) {
              var n = function () {
                return e._complete.call(e._context)
              };
              _.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
            } else this.unsubscribe()
          }
        }, t.prototype.__tryOrUnsub = function (e, t) {
          try {
            e.call(this._context, t)
          } catch (n) {
            if (this.unsubscribe(), _.useDeprecatedSynchronousErrorHandling) throw n;
            w(n)
          }
        }, t.prototype.__tryOrSetError = function (e, t, n) {
          if (!_.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
          try {
            t.call(this._context, n)
          } catch (r) {
            return _.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = r, e.syncErrorThrown = !0, !0) : (w(r), !0)
          }
          return !1
        }, t.prototype._unsubscribe = function () {
          var e = this._parentSubscriber;
          this._context = null, this._parentSubscriber = null, e.unsubscribe()
        }, t
      }(E), k = "function" == typeof Symbol && Symbol.observable || "@@observable";
    var S = function () {
      function e(e) {
        this._isScalar = !1, e && (this._subscribe = e)
      }

      return e.prototype.lift = function (t) {
        var n = new e;
        return n.source = this, n.operator = t, n
      }, e.prototype.subscribe = function (e, t, n) {
        var r = this.operator, o = function (e, t, n) {
          if (e) {
            if (e instanceof E) return e;
            if (e[C]) return e[C]()
          }
          return e || t || n ? new E(e, t, n) : new E(x)
        }(e, t, n);
        if (r ? r.call(o, this.source) : o.add(this.source || _.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), _.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
        return o
      }, e.prototype._trySubscribe = function (e) {
        try {
          return this._subscribe(e)
        } catch (t) {
          _.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t), e.error(t)
        }
      }, e.prototype.forEach = function (e, t) {
        var n = this;
        return new (t = I(t))(function (t, r) {
          var o;
          o = n.subscribe(function (t) {
            try {
              e(t)
            } catch (n) {
              r(n), o && o.unsubscribe()
            }
          }, r, t)
        })
      }, e.prototype._subscribe = function (e) {
        var t = this.source;
        return t && t.subscribe(e)
      }, e.prototype[k] = function () {
        return this
      }, e.prototype.pipe = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return 0 === e.length ? this : ((n = e) ? 1 === n.length ? n[0] : function (e) {
          return n.reduce(function (e, t) {
            return t(e)
          }, e)
        } : function () {
        })(this);
        var n
      }, e.prototype.toPromise = function (e) {
        var t = this;
        return new (e = I(e))(function (e, n) {
          var r;
          t.subscribe(function (e) {
            return r = e
          }, function (e) {
            return n(e)
          }, function () {
            return e(r)
          })
        })
      }, e.create = function (t) {
        return new e(t)
      }, e
    }();

    function I(e) {
      if (e || (e = _.Promise || Promise), !e) throw new Error("no Promise impl found");
      return e
    }

    var O = function (e) {
      function t() {
        var n = e.call(this, "object unsubscribed") || this;
        return n.name = "ObjectUnsubscribedError", Object.setPrototypeOf(n, t.prototype), n
      }

      return o(t, e), t
    }(Error), P = function (e) {
      function t(t, n) {
        var r = e.call(this) || this;
        return r.subject = t, r.subscriber = n, r.closed = !1, r
      }

      return o(t, e), t.prototype.unsubscribe = function () {
        if (!this.closed) {
          this.closed = !0;
          var e = this.subject, t = e.observers;
          if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) {
            var n = t.indexOf(this.subscriber);
            -1 !== n && t.splice(n, 1)
          }
        }
      }, t
    }(y), A = function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return n.destination = t, n
      }

      return o(t, e), t
    }(E), M = function (e) {
      function t() {
        var t = e.call(this) || this;
        return t.observers = [], t.closed = !1, t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
      }

      return o(t, e), t.prototype[C] = function () {
        return new A(this)
      }, t.prototype.lift = function (e) {
        var t = new N(this, this);
        return t.operator = e, t
      }, t.prototype.next = function (e) {
        if (this.closed) throw new O;
        if (!this.isStopped) for (var t = this.observers, n = t.length, r = t.slice(), o = 0; o < n; o++) r[o].next(e)
      }, t.prototype.error = function (e) {
        if (this.closed) throw new O;
        this.hasError = !0, this.thrownError = e, this.isStopped = !0;
        for (var t = this.observers, n = t.length, r = t.slice(), o = 0; o < n; o++) r[o].error(e);
        this.observers.length = 0
      }, t.prototype.complete = function () {
        if (this.closed) throw new O;
        this.isStopped = !0;
        for (var e = this.observers, t = e.length, n = e.slice(), r = 0; r < t; r++) n[r].complete();
        this.observers.length = 0
      }, t.prototype.unsubscribe = function () {
        this.isStopped = !0, this.closed = !0, this.observers = null
      }, t.prototype._trySubscribe = function (t) {
        if (this.closed) throw new O;
        return e.prototype._trySubscribe.call(this, t)
      }, t.prototype._subscribe = function (e) {
        if (this.closed) throw new O;
        return this.hasError ? (e.error(this.thrownError), y.EMPTY) : this.isStopped ? (e.complete(), y.EMPTY) : (this.observers.push(e), new P(this, e))
      }, t.prototype.asObservable = function () {
        var e = new S;
        return e.source = this, e
      }, t.create = function (e, t) {
        return new N(e, t)
      }, t
    }(S), N = function (e) {
      function t(t, n) {
        var r = e.call(this) || this;
        return r.destination = t, r.source = n, r
      }

      return o(t, e), t.prototype.next = function (e) {
        var t = this.destination;
        t && t.next && t.next(e)
      }, t.prototype.error = function (e) {
        var t = this.destination;
        t && t.error && this.destination.error(e)
      }, t.prototype.complete = function () {
        var e = this.destination;
        e && e.complete && this.destination.complete()
      }, t.prototype._subscribe = function (e) {
        return this.source ? this.source.subscribe(e) : y.EMPTY
      }, t
    }(M);

    function V(e) {
      return e && "function" == typeof e.schedule
    }

    var R = function (e) {
      function t(t, n, r) {
        var o = e.call(this) || this;
        return o.parent = t, o.outerValue = n, o.outerIndex = r, o.index = 0, o
      }

      return o(t, e), t.prototype._next = function (e) {
        this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
      }, t.prototype._error = function (e) {
        this.parent.notifyError(e, this), this.unsubscribe()
      }, t.prototype._complete = function () {
        this.parent.notifyComplete(this), this.unsubscribe()
      }, t
    }(E), D = function (e) {
      return function (t) {
        for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
        t.closed || t.complete()
      }
    }, j = function (e) {
      return function (t) {
        return e.then(function (e) {
          t.closed || (t.next(e), t.complete())
        }, function (e) {
          return t.error(e)
        }).then(null, w), t
      }
    };

    function H() {
      return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
    }

    var F = H(), z = function (e) {
      return function (t) {
        for (var n = e[F](); ;) {
          var r = n.next();
          if (r.done) {
            t.complete();
            break
          }
          if (t.next(r.value), t.closed) break
        }
        return "function" == typeof n.return && t.add(function () {
          n.return && n.return()
        }), t
      }
    }, L = function (e) {
      return function (t) {
        var n = e[k]();
        if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
        return n.subscribe(t)
      }
    }, B = function (e) {
      return e && "number" == typeof e.length && "function" != typeof e
    };

    function U(e) {
      return e && "function" != typeof e.subscribe && "function" == typeof e.then
    }

    var Z = function (e) {
      if (e instanceof S) return function (t) {
        return e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t)
      };
      if (e && "function" == typeof e[k]) return L(e);
      if (B(e)) return D(e);
      if (U(e)) return j(e);
      if (e && "function" == typeof e[F]) return z(e);
      var t = c(e) ? "an invalid object" : "'" + e + "'";
      throw new TypeError("You provided " + t + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
    }, q = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }

      return o(t, e), t.prototype.notifyNext = function (e, t, n, r, o) {
        this.destination.next(t)
      }, t.prototype.notifyError = function (e, t) {
        this.destination.error(e)
      }, t.prototype.notifyComplete = function (e) {
        this.destination.complete()
      }, t
    }(E);

    function $(e, t) {
      return function (n) {
        if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        return n.lift(new W(e, t))
      }
    }

    var W = function () {
      function e(e, t) {
        this.project = e, this.thisArg = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new X(e, this.project, this.thisArg))
      }, e
    }(), X = function (e) {
      function t(t, n, r) {
        var o = e.call(this, t) || this;
        return o.project = n, o.count = 0, o.thisArg = r || o, o
      }

      return o(t, e), t.prototype._next = function (e) {
        var t;
        try {
          t = this.project.call(this.thisArg, e, this.count++)
        } catch (n) {
          return void this.destination.error(n)
        }
        this.destination.next(t)
      }, t
    }(E);

    function Q(e, t) {
      return new S(t ? function (n) {
        var r = new y, o = 0;
        return r.add(t.schedule(function () {
          o !== e.length ? (n.next(e[o++]), n.closed || r.add(this.schedule())) : n.complete()
        })), r
      } : D(e))
    }

    function Y(e, t, n) {
      return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof t ? function (r) {
        return r.pipe(Y(function (n, r) {
          return (o = e(n, r), o instanceof S ? o : new S(Z(o))).pipe($(function (e, o) {
            return t(n, e, r, o)
          }));
          var o
        }, n))
      } : ("number" == typeof t && (n = t), function (t) {
        return t.lift(new K(e, n))
      })
    }

    var K = function () {
      function e(e, t) {
        void 0 === t && (t = Number.POSITIVE_INFINITY), this.project = e, this.concurrent = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new G(e, this.project, this.concurrent))
      }, e
    }(), G = function (e) {
      function t(t, n, r) {
        void 0 === r && (r = Number.POSITIVE_INFINITY);
        var o = e.call(this, t) || this;
        return o.project = n, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
      }

      return o(t, e), t.prototype._next = function (e) {
        this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
      }, t.prototype._tryNext = function (e) {
        var t, n = this.index++;
        try {
          t = this.project(e, n)
        } catch (r) {
          return void this.destination.error(r)
        }
        this.active++, this._innerSub(t, e, n)
      }, t.prototype._innerSub = function (e, t, n) {
        var r, o;
        this.add((r = e, o = new R(this, t, n), Z(r)(o)))
      }, t.prototype._complete = function () {
        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete()
      }, t.prototype.notifyNext = function (e, t, n, r, o) {
        this.destination.next(t)
      }, t.prototype.notifyComplete = function (e) {
        var t = this.buffer;
        this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
      }, t
    }(q);

    function J(e) {
      return e
    }

    function ee() {
      return function (e) {
        return e.lift(new te(e))
      }
    }

    var te = function () {
      function e(e) {
        this.connectable = e
      }

      return e.prototype.call = function (e, t) {
        var n = this.connectable;
        n._refCount++;
        var r = new ne(e, n), o = t.subscribe(r);
        return r.closed || (r.connection = n.connect()), o
      }, e
    }(), ne = function (e) {
      function t(t, n) {
        var r = e.call(this, t) || this;
        return r.connectable = n, r
      }

      return o(t, e), t.prototype._unsubscribe = function () {
        var e = this.connectable;
        if (e) {
          this.connectable = null;
          var t = e._refCount;
          if (t <= 0) this.connection = null; else if (e._refCount = t - 1, t > 1) this.connection = null; else {
            var n = this.connection, r = e._connection;
            this.connection = null, !r || n && r !== n || r.unsubscribe()
          }
        } else this.connection = null
      }, t
    }(E), re = function (e) {
      function t(t, n) {
        var r = e.call(this) || this;
        return r.source = t, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
      }

      return o(t, e), t.prototype._subscribe = function (e) {
        return this.getSubject().subscribe(e)
      }, t.prototype.getSubject = function () {
        var e = this._subject;
        return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
      }, t.prototype.connect = function () {
        var e = this._connection;
        return e || (this._isComplete = !1, (e = this._connection = new y).add(this.source.subscribe(new ie(this.getSubject(), this))), e.closed ? (this._connection = null, e = y.EMPTY) : this._connection = e), e
      }, t.prototype.refCount = function () {
        return ee()(this)
      }, t
    }(S).prototype, oe = {
      operator: {value: null},
      _refCount: {value: 0, writable: !0},
      _subject: {value: null, writable: !0},
      _connection: {value: null, writable: !0},
      _subscribe: {value: re._subscribe},
      _isComplete: {value: re._isComplete, writable: !0},
      getSubject: {value: re.getSubject},
      connect: {value: re.connect},
      refCount: {value: re.refCount}
    }, ie = function (e) {
      function t(t, n) {
        var r = e.call(this, t) || this;
        return r.connectable = n, r
      }

      return o(t, e), t.prototype._error = function (t) {
        this._unsubscribe(), e.prototype._error.call(this, t)
      }, t.prototype._complete = function () {
        this.connectable._isComplete = !0, this._unsubscribe(), e.prototype._complete.call(this)
      }, t.prototype._unsubscribe = function () {
        var e = this.connectable;
        if (e) {
          this.connectable = null;
          var t = e._connection;
          e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
        }
      }, t
    }(A);

    function se() {
      return new M
    }

    function ae(e) {
      return {providedIn: e.providedIn || null, factory: e.factory, value: void 0}
    }

    var le = function () {
      function e(e, t) {
        this._desc = e, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0 !== t ? ae({
          providedIn: t.providedIn || "root",
          factory: t.factory
        }) : void 0
      }

      return e.prototype.toString = function () {
        return "InjectionToken " + this._desc
      }, e
    }(), ue = "__parameters__";

    function ce(e, t, n) {
      var r = function (e) {
        return function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          if (e) {
            var r = e.apply(void 0, l(t));
            for (var o in r) this[o] = r[o]
          }
        }
      }(t);

      function o() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (this instanceof o) return r.apply(this, e), this;
        var n, i = new ((n = o).bind.apply(n, l([void 0], e)));
        return s.annotation = i, s;

        function s(e, t, n) {
          for (var r = e.hasOwnProperty(ue) ? e[ue] : Object.defineProperty(e, ue, {value: []})[ue]; r.length <= n;) r.push(null);
          return (r[n] = r[n] || []).push(i), e
        }
      }

      return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = e, o.annotationCls = o, o
    }

    var pe = "undefined" != typeof window && window,
      de = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
      he = "undefined" != typeof global && global, fe = pe || he || de, ge = Promise.resolve(0), ve = null;

    function ye() {
      if (!ve) {
        var e = fe.Symbol;
        if (e && e.iterator) ve = e.iterator; else for (var t = Object.getOwnPropertyNames(Map.prototype), n = 0; n < t.length; ++n) {
          var r = t[n];
          "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (ve = r)
        }
      }
      return ve
    }

    function me(e) {
      "undefined" == typeof Zone ? ge.then(function () {
        e && e.apply(null, null)
      }) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
    }

    function be(e, t) {
      return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
    }

    function _e(e) {
      if ("string" == typeof e) return e;
      if (e instanceof Array) return "[" + e.map(_e).join(", ") + "]";
      if (null == e) return "" + e;
      if (e.overriddenName) return "" + e.overriddenName;
      if (e.name) return "" + e.name;
      var t = e.toString();
      if (null == t) return "" + t;
      var n = t.indexOf("\n");
      return -1 === n ? t : t.substring(0, n)
    }

    function we(e) {
      return e.__forward_ref__ = we, e.toString = function () {
        return _e(this())
      }, e
    }

    function xe(e) {
      return "function" == typeof e && e.hasOwnProperty("__forward_ref__") && e.__forward_ref__ === we ? e() : e
    }

    var Ce = ce("Inject", function (e) {
        return {token: e}
      }), Ee = ce("Optional"), Te = ce("Self"), ke = ce("SkipSelf"), Se = "__source", Ie = new Object,
      Oe = new le("INJECTOR"), Pe = function () {
        function e() {
        }

        return e.prototype.get = function (e, t) {
          if (void 0 === t && (t = Ie), t === Ie) throw new Error("NullInjectorError: No provider for " + _e(e) + "!");
          return t
        }, e
      }(), Ae = function () {
        function e() {
        }

        return e.create = function (e, t) {
          return Array.isArray(e) ? new Le(e, t) : new Le(e.providers, e.parent, e.name || null)
        }, e.THROW_IF_NOT_FOUND = Ie, e.NULL = new Pe, e.ngInjectableDef = ae({
          providedIn: "any", factory: function () {
            return function (e, t) {
              if (void 0 === t && (t = 0), void 0 === $e) throw new Error("inject() must be called from an injection context");
              if (null === $e) {
                var n = e.ngInjectableDef;
                if (n && "root" == n.providedIn) return void 0 === n.value ? n.value = n.factory() : n.value;
                throw new Error("Injector: NOT_FOUND [" + _e(e) + "]")
              }
              return $e.get(e, 8 & t ? null : void 0, t)
            }(Oe)
          }
        }), e
      }(), Me = function (e) {
        return e
      }, Ne = [], Ve = Me, Re = function () {
        return Array.prototype.slice.call(arguments)
      }, De = {}, je = qe({provide: String, useValue: De}), He = Ae.NULL, Fe = /\n/gm, ze = "\u0275", Le = function () {
        function e(e, t, n) {
          void 0 === t && (t = He), void 0 === n && (n = null), this.parent = t, this.source = n;
          var r = this._records = new Map;
          r.set(Ae, {token: Ae, fn: Me, deps: Ne, value: this, useNew: !1}), r.set(Oe, {
            token: Oe,
            fn: Me,
            deps: Ne,
            value: this,
            useNew: !1
          }), function e(t, n) {
            if (n) if ((n = xe(n)) instanceof Array) for (var r = 0; r < n.length; r++) e(t, n[r]); else {
              if ("function" == typeof n) throw Ze("Function/Class not supported", n);
              if (!n || "object" != typeof n || !n.provide) throw Ze("Unexpected provider", n);
              var o = xe(n.provide), i = function (e) {
                var t = function (e) {
                  var t = Ne, n = e.deps;
                  if (n && n.length) {
                    t = [];
                    for (var r = 0; r < n.length; r++) {
                      var o = 6;
                      if ((l = xe(n[r])) instanceof Array) for (var i = 0, s = l; i < s.length; i++) {
                        var a = s[i];
                        a instanceof Ee || a == Ee ? o |= 1 : a instanceof ke || a == ke ? o &= -3 : a instanceof Te || a == Te ? o &= -5 : l = a instanceof Ce ? a.token : xe(a)
                      }
                      t.push({token: l, options: o})
                    }
                  } else if (e.useExisting) {
                    var l;
                    t = [{token: l = xe(e.useExisting), options: 6}]
                  } else if (!(n || je in e)) throw Ze("'deps' required", e);
                  return t
                }(e), n = Me, r = Ne, o = !1, i = xe(e.provide);
                if (je in e) r = e.useValue; else if (e.useFactory) n = e.useFactory; else if (e.useExisting) ; else if (e.useClass) o = !0, n = xe(e.useClass); else {
                  if ("function" != typeof i) throw Ze("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", e);
                  o = !0, n = i
                }
                return {deps: t, fn: n, useNew: o, value: r}
              }(n);
              if (!0 === n.multi) {
                var s = t.get(o);
                if (s) {
                  if (s.fn !== Re) throw Be(o)
                } else t.set(o, s = {token: n.provide, deps: [], useNew: !1, fn: Re, value: Ne});
                s.deps.push({token: o = n, options: 6})
              }
              var a = t.get(o);
              if (a && a.fn == Re) throw Be(o);
              t.set(o, i)
            }
          }(r, e)
        }

        return e.prototype.get = function (e, t, n) {
          void 0 === n && (n = 0);
          var r = this._records.get(e);
          try {
            return function e(t, n, r, o, i, s) {
              try {
                return function (t, n, r, o, i, s) {
                  var a, u;
                  if (!n || 4 & s) 2 & s || (a = o.get(t, i, 0)); else {
                    if ((a = n.value) == Ve) throw Error(ze + "Circular dependency");
                    if (a === Ne) {
                      n.value = Ve;
                      var c = n.useNew, p = n.fn, d = n.deps, h = Ne;
                      if (d.length) {
                        h = [];
                        for (var f = 0; f < d.length; f++) {
                          var g = d[f], v = g.options, y = 2 & v ? r.get(g.token) : void 0;
                          h.push(e(g.token, y, r, y || 4 & v ? o : He, 1 & v ? null : Ae.THROW_IF_NOT_FOUND, 0))
                        }
                      }
                      n.value = a = c ? new ((u = p).bind.apply(u, l([void 0], h))) : p.apply(void 0, h)
                    }
                  }
                  return a
                }(t, n, r, o, i, s)
              } catch (a) {
                throw a instanceof Error || (a = new Error(a)), (a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(t), n && n.value == Ve && (n.value = Ne), a
              }
            }(e, r, this._records, this.parent, t, n)
          } catch (i) {
            var o = i.ngTempTokenPath;
            throw e[Se] && o.unshift(e[Se]), i.message = Ue("\n" + i.message, o, this.source), i.ngTokenPath = o, i.ngTempTokenPath = null, i
          }
        }, e.prototype.toString = function () {
          var e = [];
          return this._records.forEach(function (t, n) {
            return e.push(_e(n))
          }), "StaticInjector[" + e.join(", ") + "]"
        }, e
      }();

    function Be(e) {
      return Ze("Cannot mix multi providers and regular providers", e)
    }

    function Ue(e, t, n) {
      void 0 === n && (n = null), e = e && "\n" === e.charAt(0) && e.charAt(1) == ze ? e.substr(2) : e;
      var r = _e(t);
      if (t instanceof Array) r = t.map(_e).join(" -> "); else if ("object" == typeof t) {
        var o = [];
        for (var i in t) if (t.hasOwnProperty(i)) {
          var s = t[i];
          o.push(i + ":" + ("string" == typeof s ? JSON.stringify(s) : _e(s)))
        }
        r = "{" + o.join(", ") + "}"
      }
      return "StaticInjectorError" + (n ? "(" + n + ")" : "") + "[" + r + "]: " + e.replace(Fe, "\n  ")
    }

    function Ze(e, t) {
      return new Error(Ue(e, t))
    }

    function qe(e) {
      for (var t in e) if (e[t] === De) return t;
      throw Error("!prop")
    }

    var $e = void 0;

    function We(e) {
      var t = $e;
      return $e = e, t
    }

    var Xe = function (e) {
      return e[e.Emulated = 0] = "Emulated", e[e.Native = 1] = "Native", e[e.None = 2] = "None", e
    }({}), Qe = new (function () {
      return function (e) {
        this.full = e, this.major = e.split(".")[0], this.minor = e.split(".")[1], this.patch = e.split(".").slice(2).join(".")
      }
    }())("6.0.7"), Ye = "ngDebugContext", Ke = "ngOriginalError", Ge = "ngErrorLogger";

    function Je(e) {
      return e[Ye]
    }

    function et(e) {
      return e[Ke]
    }

    function tt(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      e.error.apply(e, l(t))
    }

    var nt = function () {
      function e() {
        this._console = console
      }

      return e.prototype.handleError = function (e) {
        var t = this._findOriginalError(e), n = this._findContext(e), r = function (e) {
          return e[Ge] || tt
        }(e);
        r(this._console, "ERROR", e), t && r(this._console, "ORIGINAL ERROR", t), n && r(this._console, "ERROR CONTEXT", n)
      }, e.prototype._findContext = function (e) {
        return e ? Je(e) ? Je(e) : this._findContext(et(e)) : null
      }, e.prototype._findOriginalError = function (e) {
        for (var t = et(e); t && et(t);) t = et(t);
        return t
      }, e
    }(), rt = new le("The presence of this token marks an injector as being the root injector.");

    function ot(e) {
      return !!e && "function" == typeof e.then
    }

    var it = new le("Application Initializer"), st = function () {
      function e(e) {
        var t = this;
        this.appInits = e, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function (e, n) {
          t.resolve = e, t.reject = n
        })
      }

      return e.prototype.runInitializers = function () {
        var e = this;
        if (!this.initialized) {
          var t = [], n = function () {
            e.done = !0, e.resolve()
          };
          if (this.appInits) for (var r = 0; r < this.appInits.length; r++) {
            var o = this.appInits[r]();
            ot(o) && t.push(o)
          }
          Promise.all(t).then(function () {
            n()
          }).catch(function (t) {
            e.reject(t)
          }), 0 === t.length && n(), this.initialized = !0
        }
      }, e
    }(), at = new le("AppId");

    function lt() {
      return "" + ut() + ut() + ut()
    }

    function ut() {
      return String.fromCharCode(97 + Math.floor(25 * Math.random()))
    }

    var ct = new le("Platform Initializer"), pt = new le("Platform ID"), dt = new le("appBootstrapListener"),
      ht = function () {
        function e() {
        }

        return e.prototype.log = function (e) {
          console.log(e)
        }, e.prototype.warn = function (e) {
          console.warn(e)
        }, e
      }();

    function ft() {
      throw new Error("Runtime compiler is not loaded")
    }

    var gt = function () {
      function e() {
      }

      return e.prototype.compileModuleSync = function (e) {
        throw ft()
      }, e.prototype.compileModuleAsync = function (e) {
        throw ft()
      }, e.prototype.compileModuleAndAllComponentsSync = function (e) {
        throw ft()
      }, e.prototype.compileModuleAndAllComponentsAsync = function (e) {
        throw ft()
      }, e.prototype.clearCache = function () {
      }, e.prototype.clearCacheFor = function (e) {
      }, e
    }(), vt = function () {
      return function () {
      }
    }(), yt = function () {
      return function () {
      }
    }(), mt = function () {
      return function () {
      }
    }();

    function bt(e) {
      var t = Error("No component factory found for " + _e(e) + ". Did you add it to @NgModule.entryComponents?");
      return t[xt] = e, t
    }

    var _t, wt, xt = "ngComponent", Ct = function () {
      function e() {
      }

      return e.prototype.resolveComponentFactory = function (e) {
        throw bt(e)
      }, e
    }(), Et = function () {
      function e() {
      }

      return e.NULL = new Ct, e
    }(), Tt = function () {
      function e(e, t, n) {
        this._parent = t, this._ngModule = n, this._factories = new Map;
        for (var r = 0; r < e.length; r++) {
          var o = e[r];
          this._factories.set(o.componentType, o)
        }
      }

      return e.prototype.resolveComponentFactory = function (e) {
        var t = this._factories.get(e);
        if (!t && this._parent && (t = this._parent.resolveComponentFactory(e)), !t) throw bt(e);
        return new kt(t, this._ngModule)
      }, e
    }(), kt = function (e) {
      function t(t, n) {
        var r = e.call(this) || this;
        return r.factory = t, r.ngModule = n, r.selector = t.selector, r.componentType = t.componentType, r.ngContentSelectors = t.ngContentSelectors, r.inputs = t.inputs, r.outputs = t.outputs, r
      }

      return o(t, e), t.prototype.create = function (e, t, n, r) {
        return this.factory.create(e, t, n, r || this.ngModule)
      }, t
    }(mt), St = function () {
      return function () {
      }
    }(), It = function () {
      return function () {
      }
    }();

    function Ot() {
      var e = fe.wtf;
      return !(!e || !(_t = e.trace) || (wt = _t.events, 0))
    }

    var Pt = Ot();

    function At(e, t) {
      return null
    }

    var Mt = Pt ? function (e, t) {
      return void 0 === t && (t = null), wt.createScope(e, t)
    } : function (e, t) {
      return At
    }, Nt = Pt ? function (e, t) {
      return _t.leaveScope(e, t), t
    } : function (e, t) {
      return t
    }, Vt = function (e) {
      function t(t) {
        void 0 === t && (t = !1);
        var n = e.call(this) || this;
        return n.__isAsync = t, n
      }

      return o(t, e), t.prototype.emit = function (t) {
        e.prototype.next.call(this, t)
      }, t.prototype.subscribe = function (t, n, r) {
        var o, i = function (e) {
          return null
        }, s = function () {
          return null
        };
        t && "object" == typeof t ? (o = this.__isAsync ? function (e) {
          setTimeout(function () {
            return t.next(e)
          })
        } : function (e) {
          t.next(e)
        }, t.error && (i = this.__isAsync ? function (e) {
          setTimeout(function () {
            return t.error(e)
          })
        } : function (e) {
          t.error(e)
        }), t.complete && (s = this.__isAsync ? function () {
          setTimeout(function () {
            return t.complete()
          })
        } : function () {
          t.complete()
        })) : (o = this.__isAsync ? function (e) {
          setTimeout(function () {
            return t(e)
          })
        } : function (e) {
          t(e)
        }, n && (i = this.__isAsync ? function (e) {
          setTimeout(function () {
            return n(e)
          })
        } : function (e) {
          n(e)
        }), r && (s = this.__isAsync ? function () {
          setTimeout(function () {
            return r()
          })
        } : function () {
          r()
        }));
        var a = e.prototype.subscribe.call(this, o, i, s);
        return t instanceof y && t.add(a), a
      }, t
    }(M), Rt = function () {
      function e(e) {
        var t, n = e.enableLongStackTrace, r = void 0 !== n && n;
        if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Vt(!1), this.onMicrotaskEmpty = new Vt(!1), this.onStable = new Vt(!1), this.onError = new Vt(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
        Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), r && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (t = this)._inner = t._inner.fork({
          name: "angular",
          properties: {isAngularZone: !0},
          onInvokeTask: function (e, n, r, o, i, s) {
            try {
              return Ft(t), e.invokeTask(r, o, i, s)
            } finally {
              zt(t)
            }
          },
          onInvoke: function (e, n, r, o, i, s, a) {
            try {
              return Ft(t), e.invoke(r, o, i, s, a)
            } finally {
              zt(t)
            }
          },
          onHasTask: function (e, n, r, o) {
            e.hasTask(r, o), n === r && ("microTask" == o.change ? (t.hasPendingMicrotasks = o.microTask, Ht(t)) : "macroTask" == o.change && (t.hasPendingMacrotasks = o.macroTask))
          },
          onHandleError: function (e, n, r, o) {
            return e.handleError(r, o), t.runOutsideAngular(function () {
              return t.onError.emit(o)
            }), !1
          }
        })
      }

      return e.isInAngularZone = function () {
        return !0 === Zone.current.get("isAngularZone")
      }, e.assertInAngularZone = function () {
        if (!e.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
      }, e.assertNotInAngularZone = function () {
        if (e.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
      }, e.prototype.run = function (e, t, n) {
        return this._inner.run(e, t, n)
      }, e.prototype.runTask = function (e, t, n, r) {
        var o = this._inner, i = o.scheduleEventTask("NgZoneEvent: " + r, e, jt, Dt, Dt);
        try {
          return o.runTask(i, t, n)
        } finally {
          o.cancelTask(i)
        }
      }, e.prototype.runGuarded = function (e, t, n) {
        return this._inner.runGuarded(e, t, n)
      }, e.prototype.runOutsideAngular = function (e) {
        return this._outer.run(e)
      }, e
    }();

    function Dt() {
    }

    var jt = {};

    function Ht(e) {
      if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
        e._nesting++, e.onMicrotaskEmpty.emit(null)
      } finally {
        if (e._nesting--, !e.hasPendingMicrotasks) try {
          e.runOutsideAngular(function () {
            return e.onStable.emit(null)
          })
        } finally {
          e.isStable = !0
        }
      }
    }

    function Ft(e) {
      e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
    }

    function zt(e) {
      e._nesting--, Ht(e)
    }

    var Lt, Bt = function () {
      function e() {
        this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Vt, this.onMicrotaskEmpty = new Vt, this.onStable = new Vt, this.onError = new Vt
      }

      return e.prototype.run = function (e) {
        return e()
      }, e.prototype.runGuarded = function (e) {
        return e()
      }, e.prototype.runOutsideAngular = function (e) {
        return e()
      }, e.prototype.runTask = function (e) {
        return e()
      }, e
    }(), Ut = function () {
      function e(e) {
        var t = this;
        this._ngZone = e, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this._watchAngularEvents(), e.run(function () {
          t.taskTrackingZone = Zone.current.get("TaskTrackingZone")
        })
      }

      return e.prototype._watchAngularEvents = function () {
        var e = this;
        this._ngZone.onUnstable.subscribe({
          next: function () {
            e._didWork = !0, e._isZoneStable = !1
          }
        }), this._ngZone.runOutsideAngular(function () {
          e._ngZone.onStable.subscribe({
            next: function () {
              Rt.assertNotInAngularZone(), me(function () {
                e._isZoneStable = !0, e._runCallbacksIfReady()
              })
            }
          })
        })
      }, e.prototype.increasePendingRequestCount = function () {
        return this._pendingCount += 1, this._didWork = !0, this._pendingCount
      }, e.prototype.decreasePendingRequestCount = function () {
        if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
        return this._runCallbacksIfReady(), this._pendingCount
      }, e.prototype.isStable = function () {
        return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
      }, e.prototype._runCallbacksIfReady = function () {
        var e = this;
        if (this.isStable()) me(function () {
          for (; 0 !== e._callbacks.length;) {
            var t = e._callbacks.pop();
            clearTimeout(t.timeoutId), t.doneCb(e._didWork)
          }
          e._didWork = !1
        }); else {
          var t = this.getPendingTasks();
          this._callbacks = this._callbacks.filter(function (e) {
            return !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)
          }), this._didWork = !0
        }
      }, e.prototype.getPendingTasks = function () {
        return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function (e) {
          return {
            source: e.source,
            isPeriodic: e.data.isPeriodic,
            delay: e.data.delay,
            creationLocation: e.creationLocation,
            xhr: e.data.target
          }
        }) : []
      }, e.prototype.addCallback = function (e, t, n) {
        var r = this, o = -1;
        t && t > 0 && (o = setTimeout(function () {
          r._callbacks = r._callbacks.filter(function (e) {
            return e.timeoutId !== o
          }), e(r._didWork, r.getPendingTasks())
        }, t)), this._callbacks.push({doneCb: e, timeoutId: o, updateCb: n})
      }, e.prototype.whenStable = function (e, t, n) {
        if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
        this.addCallback(e, t, n), this._runCallbacksIfReady()
      }, e.prototype.getPendingRequestCount = function () {
        return this._pendingCount
      }, e.prototype.findProviders = function (e, t, n) {
        return []
      }, e
    }(), Zt = function () {
      function e() {
        this._applications = new Map, qt.addToWindow(this)
      }

      return e.prototype.registerApplication = function (e, t) {
        this._applications.set(e, t)
      }, e.prototype.unregisterApplication = function (e) {
        this._applications.delete(e)
      }, e.prototype.unregisterAllApplications = function () {
        this._applications.clear()
      }, e.prototype.getTestability = function (e) {
        return this._applications.get(e) || null
      }, e.prototype.getAllTestabilities = function () {
        return Array.from(this._applications.values())
      }, e.prototype.getAllRootElements = function () {
        return Array.from(this._applications.keys())
      }, e.prototype.findTestabilityInTree = function (e, t) {
        return void 0 === t && (t = !0), qt.findTestabilityInTree(this, e, t)
      }, e.ctorParameters = function () {
        return []
      }, e
    }(), qt = new (function () {
      function e() {
      }

      return e.prototype.addToWindow = function (e) {
      }, e.prototype.findTestabilityInTree = function (e, t, n) {
        return null
      }, e
    }()), $t = !0, Wt = !1, Xt = new le("AllowMultipleToken");

    function Qt() {
      return Wt = !0, $t
    }

    var Yt = function () {
      return function (e, t) {
        this.name = e, this.token = t
      }
    }();

    function Kt(e, t, n) {
      void 0 === n && (n = []);
      var r = "Platform: " + t, o = new le(r);
      return function (t) {
        void 0 === t && (t = []);
        var i = Gt();
        if (!i || i.injector.get(Xt, !1)) if (e) e(n.concat(t).concat({provide: o, useValue: !0})); else {
          var s = n.concat(t).concat({provide: o, useValue: !0});
          !function (e) {
            if (Lt && !Lt.destroyed && !Lt.injector.get(Xt, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
            Lt = e.get(Jt);
            var t = e.get(ct, null);
            t && t.forEach(function (e) {
              return e()
            })
          }(Ae.create({providers: s, name: r}))
        }
        return function (e) {
          var t = Gt();
          if (!t) throw new Error("No platform exists!");
          if (!t.injector.get(e, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
          return t
        }(o)
      }
    }

    function Gt() {
      return Lt && !Lt.destroyed ? Lt : null
    }

    var Jt = function () {
      function e(e) {
        this._injector = e, this._modules = [], this._destroyListeners = [], this._destroyed = !1
      }

      return e.prototype.bootstrapModuleFactory = function (e, t) {
        var n, r = this,
          o = "noop" === (n = t ? t.ngZone : void 0) ? new Bt : ("zone.js" === n ? void 0 : n) || new Rt({enableLongStackTrace: Qt()}),
          i = [{provide: Rt, useValue: o}];
        return o.run(function () {
          var t = Ae.create({providers: i, parent: r.injector, name: e.moduleType.name}), n = e.create(t),
            s = n.injector.get(nt, null);
          if (!s) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
          return n.onDestroy(function () {
            return nn(r._modules, n)
          }), o.runOutsideAngular(function () {
            return o.onError.subscribe({
              next: function (e) {
                s.handleError(e)
              }
            })
          }), function (e, t, o) {
            try {
              var i = ((s = n.injector.get(st)).runInitializers(), s.donePromise.then(function () {
                return r._moduleDoBootstrap(n), n
              }));
              return ot(i) ? i.catch(function (n) {
                throw t.runOutsideAngular(function () {
                  return e.handleError(n)
                }), n
              }) : i
            } catch (a) {
              throw t.runOutsideAngular(function () {
                return e.handleError(a)
              }), a
            }
            var s
          }(s, o)
        })
      }, e.prototype.bootstrapModule = function (e, t) {
        var n = this;
        void 0 === t && (t = []);
        var r = this.injector.get(vt), o = en({}, t);
        return r.createCompiler([o]).compileModuleAsync(e).then(function (e) {
          return n.bootstrapModuleFactory(e, o)
        })
      }, e.prototype._moduleDoBootstrap = function (e) {
        var t = e.injector.get(tn);
        if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach(function (e) {
          return t.bootstrap(e)
        }); else {
          if (!e.instance.ngDoBootstrap) throw new Error("The module " + _e(e.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
          e.instance.ngDoBootstrap(t)
        }
        this._modules.push(e)
      }, e.prototype.onDestroy = function (e) {
        this._destroyListeners.push(e)
      }, Object.defineProperty(e.prototype, "injector", {
        get: function () {
          return this._injector
        }, enumerable: !0, configurable: !0
      }), e.prototype.destroy = function () {
        if (this._destroyed) throw new Error("The platform has already been destroyed!");
        this._modules.slice().forEach(function (e) {
          return e.destroy()
        }), this._destroyListeners.forEach(function (e) {
          return e()
        }), this._destroyed = !0
      }, Object.defineProperty(e.prototype, "destroyed", {
        get: function () {
          return this._destroyed
        }, enumerable: !0, configurable: !0
      }), e
    }();

    function en(e, t) {
      return Array.isArray(t) ? t.reduce(en, e) : i({}, e, t)
    }

    var tn = function () {
      function e(e, t, n, r, o, i) {
        var s = this;
        this._zone = e, this._console = t, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = o, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Qt(), this._zone.onMicrotaskEmpty.subscribe({
          next: function () {
            s._zone.run(function () {
              s.tick()
            })
          }
        });
        var a = new S(function (e) {
          s._stable = s._zone.isStable && !s._zone.hasPendingMacrotasks && !s._zone.hasPendingMicrotasks, s._zone.runOutsideAngular(function () {
            e.next(s._stable), e.complete()
          })
        }), l = new S(function (e) {
          var t;
          s._zone.runOutsideAngular(function () {
            t = s._zone.onStable.subscribe(function () {
              Rt.assertNotInAngularZone(), me(function () {
                s._stable || s._zone.hasPendingMacrotasks || s._zone.hasPendingMicrotasks || (s._stable = !0, e.next(!0))
              })
            })
          });
          var n = s._zone.onUnstable.subscribe(function () {
            Rt.assertInAngularZone(), s._stable && (s._stable = !1, s._zone.runOutsideAngular(function () {
              e.next(!1)
            }))
          });
          return function () {
            t.unsubscribe(), n.unsubscribe()
          }
        });
        this.isStable = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = Number.POSITIVE_INFINITY, r = null, o = e[e.length - 1];
          return V(o) ? (r = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (n = e.pop())) : "number" == typeof o && (n = e.pop()), null === r && 1 === e.length && e[0] instanceof S ? e[0] : function (e) {
            return void 0 === e && (e = Number.POSITIVE_INFINITY), Y(J, e)
          }(n)(Q(e, r))
        }(a, l.pipe(function (e) {
          return ee()((t = se, function (e) {
            var n;
            n = "function" == typeof t ? t : function () {
              return t
            };
            var r = Object.create(e, oe);
            return r.source = e, r.subjectFactory = n, r
          })(e));
          var t
        }))
      }

      return e.prototype.bootstrap = function (e, t) {
        var n, r = this;
        if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
        n = e instanceof mt ? e : this._componentFactoryResolver.resolveComponentFactory(e), this.componentTypes.push(n.componentType);
        var o = n instanceof kt ? null : this._injector.get(St), i = n.create(Ae.NULL, [], t || n.selector, o);
        i.onDestroy(function () {
          r._unloadComponent(i)
        });
        var s = i.injector.get(Ut, null);
        return s && i.injector.get(Zt).registerApplication(i.location.nativeElement, s), this._loadComponent(i), Qt() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), i
      }, e.prototype.tick = function () {
        var t = this;
        if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
        var n = e._tickScope();
        try {
          this._runningTick = !0, this._views.forEach(function (e) {
            return e.detectChanges()
          }), this._enforceNoNewChanges && this._views.forEach(function (e) {
            return e.checkNoChanges()
          })
        } catch (r) {
          this._zone.runOutsideAngular(function () {
            return t._exceptionHandler.handleError(r)
          })
        } finally {
          this._runningTick = !1, Nt(n)
        }
      }, e.prototype.attachView = function (e) {
        var t = e;
        this._views.push(t), t.attachToAppRef(this)
      }, e.prototype.detachView = function (e) {
        var t = e;
        nn(this._views, t), t.detachFromAppRef()
      }, e.prototype._loadComponent = function (e) {
        this.attachView(e.hostView), this.tick(), this.components.push(e), this._injector.get(dt, []).concat(this._bootstrapListeners).forEach(function (t) {
          return t(e)
        })
      }, e.prototype._unloadComponent = function (e) {
        this.detachView(e.hostView), nn(this.components, e)
      }, e.prototype.ngOnDestroy = function () {
        this._views.slice().forEach(function (e) {
          return e.destroy()
        })
      }, Object.defineProperty(e.prototype, "viewCount", {
        get: function () {
          return this._views.length
        }, enumerable: !0, configurable: !0
      }), e._tickScope = Mt("ApplicationRef#tick()"), e
    }();

    function nn(e, t) {
      var n = e.indexOf(t);
      n > -1 && e.splice(n, 1)
    }

    var rn = function () {
      return function () {
      }
    }(), on = function () {
      return function () {
      }
    }(), sn = function (e) {
      return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e
    }({}), an = function () {
      return function () {
      }
    }(), ln = function () {
      return function (e) {
        this.nativeElement = e
      }
    }(), un = function () {
      function e() {
        this.dirty = !0, this._results = [], this.changes = new Vt, this.length = 0
      }

      return e.prototype.map = function (e) {
        return this._results.map(e)
      }, e.prototype.filter = function (e) {
        return this._results.filter(e)
      }, e.prototype.find = function (e) {
        return this._results.find(e)
      }, e.prototype.reduce = function (e, t) {
        return this._results.reduce(e, t)
      }, e.prototype.forEach = function (e) {
        this._results.forEach(e)
      }, e.prototype.some = function (e) {
        return this._results.some(e)
      }, e.prototype.toArray = function () {
        return this._results.slice()
      }, e.prototype[ye()] = function () {
        return this._results[ye()]()
      }, e.prototype.toString = function () {
        return this._results.toString()
      }, e.prototype.reset = function (e) {
        this._results = function e(t) {
          return t.reduce(function (t, n) {
            var r = Array.isArray(n) ? e(n) : n;
            return t.concat(r)
          }, [])
        }(e), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
      }, e.prototype.notifyOnChanges = function () {
        this.changes.emit(this)
      }, e.prototype.setDirty = function () {
        this.dirty = !0
      }, e.prototype.destroy = function () {
        this.changes.complete(), this.changes.unsubscribe()
      }, e
    }(), cn = function () {
      return function () {
      }
    }(), pn = function () {
      return function () {
      }
    }(), dn = function () {
      return function () {
      }
    }(), hn = function () {
      return function (e, t) {
        this.name = e, this.callback = t
      }
    }(), fn = function () {
      function e(e, t, n) {
        this._debugContext = n, this.nativeNode = e, t && t instanceof gn ? t.addChild(this) : this.parent = null, this.listeners = []
      }

      return Object.defineProperty(e.prototype, "injector", {
        get: function () {
          return this._debugContext.injector
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "componentInstance", {
        get: function () {
          return this._debugContext.component
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "context", {
        get: function () {
          return this._debugContext.context
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "references", {
        get: function () {
          return this._debugContext.references
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "providerTokens", {
        get: function () {
          return this._debugContext.providerTokens
        }, enumerable: !0, configurable: !0
      }), e
    }(), gn = function (e) {
      function t(t, n, r) {
        var o = e.call(this, t, n, r) || this;
        return o.properties = {}, o.attributes = {}, o.classes = {}, o.styles = {}, o.childNodes = [], o.nativeElement = t, o
      }

      return o(t, e), t.prototype.addChild = function (e) {
        e && (this.childNodes.push(e), e.parent = this)
      }, t.prototype.removeChild = function (e) {
        var t = this.childNodes.indexOf(e);
        -1 !== t && (e.parent = null, this.childNodes.splice(t, 1))
      }, t.prototype.insertChildrenAfter = function (e, t) {
        var n, r = this, o = this.childNodes.indexOf(e);
        -1 !== o && ((n = this.childNodes).splice.apply(n, l([o + 1, 0], t)), t.forEach(function (e) {
          e.parent && e.parent.removeChild(e), e.parent = r
        }))
      }, t.prototype.insertBefore = function (e, t) {
        var n = this.childNodes.indexOf(e);
        -1 === n ? this.addChild(t) : (t.parent && t.parent.removeChild(t), t.parent = this, this.childNodes.splice(n, 0, t))
      }, t.prototype.query = function (e) {
        return this.queryAll(e)[0] || null
      }, t.prototype.queryAll = function (e) {
        var t = [];
        return function e(t, n, r) {
          t.childNodes.forEach(function (t) {
            t instanceof gn && (n(t) && r.push(t), e(t, n, r))
          })
        }(this, e, t), t
      }, t.prototype.queryAllNodes = function (e) {
        var t = [];
        return function e(t, n, r) {
          t instanceof gn && t.childNodes.forEach(function (t) {
            n(t) && r.push(t), t instanceof gn && e(t, n, r)
          })
        }(this, e, t), t
      }, Object.defineProperty(t.prototype, "children", {
        get: function () {
          return this.childNodes.filter(function (e) {
            return e instanceof t
          })
        }, enumerable: !0, configurable: !0
      }), t.prototype.triggerEventHandler = function (e, t) {
        this.listeners.forEach(function (n) {
          n.name == e && n.callback(t)
        })
      }, t
    }(fn), vn = new Map;

    function yn(e) {
      return vn.get(e) || null
    }

    function mn(e) {
      vn.set(e.nativeNode, e)
    }

    function bn(e, t) {
      var n = xn(e), r = xn(t);
      return n && r ? function (e, t, n) {
        for (var r = e[ye()](), o = t[ye()](); ;) {
          var i = r.next(), s = o.next();
          if (i.done && s.done) return !0;
          if (i.done || s.done) return !1;
          if (!n(i.value, s.value)) return !1
        }
      }(e, t, bn) : !(n || !e || "object" != typeof e && "function" != typeof e || r || !t || "object" != typeof t && "function" != typeof t) || be(e, t)
    }

    var _n = function () {
      function e(e) {
        this.wrapped = e
      }

      return e.wrap = function (t) {
        return new e(t)
      }, e.unwrap = function (t) {
        return e.isWrapped(t) ? t.wrapped : t
      }, e.isWrapped = function (t) {
        return t instanceof e
      }, e
    }(), wn = function () {
      function e(e, t, n) {
        this.previousValue = e, this.currentValue = t, this.firstChange = n
      }

      return e.prototype.isFirstChange = function () {
        return this.firstChange
      }, e
    }();

    function xn(e) {
      return !!Cn(e) && (Array.isArray(e) || !(e instanceof Map) && ye() in e)
    }

    function Cn(e) {
      return null !== e && ("function" == typeof e || "object" == typeof e)
    }

    var En = function () {
      function e() {
      }

      return e.prototype.supports = function (e) {
        return xn(e)
      }, e.prototype.create = function (e) {
        return new kn(e)
      }, e
    }(), Tn = function (e, t) {
      return t
    }, kn = function () {
      function e(e) {
        this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = e || Tn
      }

      return e.prototype.forEachItem = function (e) {
        var t;
        for (t = this._itHead; null !== t; t = t._next) e(t)
      }, e.prototype.forEachOperation = function (e) {
        for (var t = this._itHead, n = this._removalsHead, r = 0, o = null; t || n;) {
          var i = !n || t && t.currentIndex < Pn(n, r, o) ? t : n, s = Pn(i, r, o), a = i.currentIndex;
          if (i === n) r--, n = n._nextRemoved; else if (t = t._next, null == i.previousIndex) r++; else {
            o || (o = []);
            var l = s - r, u = a - r;
            if (l != u) {
              for (var c = 0; c < l; c++) {
                var p = c < o.length ? o[c] : o[c] = 0, d = p + c;
                u <= d && d < l && (o[c] = p + 1)
              }
              o[i.previousIndex] = u - l
            }
          }
          s !== a && e(i, s, a)
        }
      }, e.prototype.forEachPreviousItem = function (e) {
        var t;
        for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t)
      }, e.prototype.forEachAddedItem = function (e) {
        var t;
        for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
      }, e.prototype.forEachMovedItem = function (e) {
        var t;
        for (t = this._movesHead; null !== t; t = t._nextMoved) e(t)
      }, e.prototype.forEachRemovedItem = function (e) {
        var t;
        for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
      }, e.prototype.forEachIdentityChange = function (e) {
        var t;
        for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t)
      }, e.prototype.diff = function (e) {
        if (null == e && (e = []), !xn(e)) throw new Error("Error trying to diff '" + _e(e) + "'. Only arrays and iterables are allowed");
        return this.check(e) ? this : null
      }, e.prototype.onDestroy = function () {
      }, e.prototype.check = function (e) {
        var t = this;
        this._reset();
        var n, r, o, i = this._itHead, s = !1;
        if (Array.isArray(e)) {
          this.length = e.length;
          for (var a = 0; a < this.length; a++) o = this._trackByFn(a, r = e[a]), null !== i && be(i.trackById, o) ? (s && (i = this._verifyReinsertion(i, r, o, a)), be(i.item, r) || this._addIdentityChange(i, r)) : (i = this._mismatch(i, r, o, a), s = !0), i = i._next
        } else n = 0, function (e, t) {
          if (Array.isArray(e)) for (var n = 0; n < e.length; n++) t(e[n]); else for (var r = e[ye()](), o = void 0; !(o = r.next()).done;) t(o.value)
        }(e, function (e) {
          o = t._trackByFn(n, e), null !== i && be(i.trackById, o) ? (s && (i = t._verifyReinsertion(i, e, o, n)), be(i.item, e) || t._addIdentityChange(i, e)) : (i = t._mismatch(i, e, o, n), s = !0), i = i._next, n++
        }), this.length = n;
        return this._truncate(i), this.collection = e, this.isDirty
      }, Object.defineProperty(e.prototype, "isDirty", {
        get: function () {
          return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
        }, enumerable: !0, configurable: !0
      }), e.prototype._reset = function () {
        if (this.isDirty) {
          var e = void 0, t = void 0;
          for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
          for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = t) e.previousIndex = e.currentIndex, t = e._nextMoved;
          this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
        }
      }, e.prototype._mismatch = function (e, t, n, r) {
        var o;
        return null === e ? o = this._itTail : (o = e._prev, this._remove(e)), null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (be(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, o, r)) : null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (be(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, o, r)) : e = this._addAfter(new Sn(t, n), o, r), e
      }, e.prototype._verifyReinsertion = function (e, t, n, r) {
        var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
        return null !== o ? e = this._reinsertAfter(o, e._prev, r) : e.currentIndex != r && (e.currentIndex = r, this._addToMoves(e, r)), e
      }, e.prototype._truncate = function (e) {
        for (; null !== e;) {
          var t = e._next;
          this._addToRemovals(this._unlink(e)), e = t
        }
        null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
      }, e.prototype._reinsertAfter = function (e, t, n) {
        null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
        var r = e._prevRemoved, o = e._nextRemoved;
        return null === r ? this._removalsHead = o : r._nextRemoved = o, null === o ? this._removalsTail = r : o._prevRemoved = r, this._insertAfter(e, t, n), this._addToMoves(e, n), e
      }, e.prototype._moveAfter = function (e, t, n) {
        return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e
      }, e.prototype._addAfter = function (e, t, n) {
        return this._insertAfter(e, t, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = e : this._additionsTail._nextAdded = e, e
      }, e.prototype._insertAfter = function (e, t, n) {
        var r = null === t ? this._itHead : t._next;
        return e._next = r, e._prev = t, null === r ? this._itTail = e : r._prev = e, null === t ? this._itHead = e : t._next = e, null === this._linkedRecords && (this._linkedRecords = new On), this._linkedRecords.put(e), e.currentIndex = n, e
      }, e.prototype._remove = function (e) {
        return this._addToRemovals(this._unlink(e))
      }, e.prototype._unlink = function (e) {
        null !== this._linkedRecords && this._linkedRecords.remove(e);
        var t = e._prev, n = e._next;
        return null === t ? this._itHead = n : t._next = n, null === n ? this._itTail = t : n._prev = t, e
      }, e.prototype._addToMoves = function (e, t) {
        return e.previousIndex === t ? e : (this._movesTail = null === this._movesTail ? this._movesHead = e : this._movesTail._nextMoved = e, e)
      }, e.prototype._addToRemovals = function (e) {
        return null === this._unlinkedRecords && (this._unlinkedRecords = new On), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e
      }, e.prototype._addIdentityChange = function (e, t) {
        return e.item = t, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = e : this._identityChangesTail._nextIdentityChange = e, e
      }, e
    }(), Sn = function () {
      return function (e, t) {
        this.item = e, this.trackById = t, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
      }
    }(), In = function () {
      function e() {
        this._head = null, this._tail = null
      }

      return e.prototype.add = function (e) {
        null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e)
      }, e.prototype.get = function (e, t) {
        var n;
        for (n = this._head; null !== n; n = n._nextDup) if ((null === t || t <= n.currentIndex) && be(n.trackById, e)) return n;
        return null
      }, e.prototype.remove = function (e) {
        var t = e._prevDup, n = e._nextDup;
        return null === t ? this._head = n : t._nextDup = n, null === n ? this._tail = t : n._prevDup = t, null === this._head
      }, e
    }(), On = function () {
      function e() {
        this.map = new Map
      }

      return e.prototype.put = function (e) {
        var t = e.trackById, n = this.map.get(t);
        n || (n = new In, this.map.set(t, n)), n.add(e)
      }, e.prototype.get = function (e, t) {
        var n = this.map.get(e);
        return n ? n.get(e, t) : null
      }, e.prototype.remove = function (e) {
        var t = e.trackById;
        return this.map.get(t).remove(e) && this.map.delete(t), e
      }, Object.defineProperty(e.prototype, "isEmpty", {
        get: function () {
          return 0 === this.map.size
        }, enumerable: !0, configurable: !0
      }), e.prototype.clear = function () {
        this.map.clear()
      }, e
    }();

    function Pn(e, t, n) {
      var r = e.previousIndex;
      if (null === r) return r;
      var o = 0;
      return n && r < n.length && (o = n[r]), r + t + o
    }

    var An = function () {
        function e() {
        }

        return e.prototype.supports = function (e) {
          return e instanceof Map || Cn(e)
        }, e.prototype.create = function () {
          return new Mn
        }, e
      }(), Mn = function () {
        function e() {
          this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
        }

        return Object.defineProperty(e.prototype, "isDirty", {
          get: function () {
            return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
          }, enumerable: !0, configurable: !0
        }), e.prototype.forEachItem = function (e) {
          var t;
          for (t = this._mapHead; null !== t; t = t._next) e(t)
        }, e.prototype.forEachPreviousItem = function (e) {
          var t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t)
        }, e.prototype.forEachChangedItem = function (e) {
          var t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) e(t)
        }, e.prototype.forEachAddedItem = function (e) {
          var t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
        }, e.prototype.forEachRemovedItem = function (e) {
          var t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
        }, e.prototype.diff = function (e) {
          if (e) {
            if (!(e instanceof Map || Cn(e))) throw new Error("Error trying to diff '" + _e(e) + "'. Only maps and objects are allowed")
          } else e = new Map;
          return this.check(e) ? this : null
        }, e.prototype.onDestroy = function () {
        }, e.prototype.check = function (e) {
          var t = this;
          this._reset();
          var n = this._mapHead;
          if (this._appendAfter = null, this._forEach(e, function (e, r) {
            if (n && n.key === r) t._maybeAddToChanges(n, e), t._appendAfter = n, n = n._next; else {
              var o = t._getOrCreateRecordForKey(r, e);
              n = t._insertBeforeOrAppend(n, o)
            }
          }), n) {
            n._prev && (n._prev._next = null), this._removalsHead = n;
            for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
          }
          return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
        }, e.prototype._insertBeforeOrAppend = function (e, t) {
          if (e) {
            var n = e._prev;
            return t._next = e, t._prev = n, e._prev = t, n && (n._next = t), e === this._mapHead && (this._mapHead = t), this._appendAfter = e, e
          }
          return this._appendAfter ? (this._appendAfter._next = t, t._prev = this._appendAfter) : this._mapHead = t, this._appendAfter = t, null
        }, e.prototype._getOrCreateRecordForKey = function (e, t) {
          if (this._records.has(e)) {
            var n = this._records.get(e);
            this._maybeAddToChanges(n, t);
            var r = n._prev, o = n._next;
            return r && (r._next = o), o && (o._prev = r), n._next = null, n._prev = null, n
          }
          var i = new Nn(e);
          return this._records.set(e, i), i.currentValue = t, this._addToAdditions(i), i
        }, e.prototype._reset = function () {
          if (this.isDirty) {
            var e = void 0;
            for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next;
            for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
            for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
            this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
          }
        }, e.prototype._maybeAddToChanges = function (e, t) {
          be(t, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = t, this._addToChanges(e))
        }, e.prototype._addToAdditions = function (e) {
          null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e)
        }, e.prototype._addToChanges = function (e) {
          null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e)
        }, e.prototype._forEach = function (e, t) {
          e instanceof Map ? e.forEach(t) : Object.keys(e).forEach(function (n) {
            return t(e[n], n)
          })
        }, e
      }(), Nn = function () {
        return function (e) {
          this.key = e, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
        }
      }(), Vn = function () {
        function e(e) {
          this.factories = e
        }

        return e.create = function (t, n) {
          if (null != n) {
            var r = n.factories.slice();
            t = t.concat(r)
          }
          return new e(t)
        }, e.extend = function (t) {
          return {
            provide: e, useFactory: function (n) {
              if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
              return e.create(t, n)
            }, deps: [[e, new ke, new Ee]]
          }
        }, e.prototype.find = function (e) {
          var t, n = this.factories.find(function (t) {
            return t.supports(e)
          });
          if (null != n) return n;
          throw new Error("Cannot find a differ supporting object '" + e + "' of type '" + ((t = e).name || typeof t) + "'")
        }, e.ngInjectableDef = ae({
          providedIn: "root", factory: function () {
            return new e([new En])
          }
        }), e
      }(), Rn = function () {
        function e(e) {
          this.factories = e
        }

        return e.create = function (t, n) {
          if (n) {
            var r = n.factories.slice();
            t = t.concat(r)
          }
          return new e(t)
        }, e.extend = function (t) {
          return {
            provide: e, useFactory: function (n) {
              if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
              return e.create(t, n)
            }, deps: [[e, new ke, new Ee]]
          }
        }, e.prototype.find = function (e) {
          var t = this.factories.find(function (t) {
            return t.supports(e)
          });
          if (t) return t;
          throw new Error("Cannot find a differ supporting object '" + e + "'")
        }, e
      }(), Dn = [new An], jn = new Vn([new En]), Hn = new Rn(Dn),
      Fn = Kt(null, "core", [{provide: pt, useValue: "unknown"}, {provide: Jt, deps: [Ae]}, {
        provide: Zt,
        deps: []
      }, {provide: ht, deps: []}]), zn = new le("LocaleId");

    function Ln() {
      return jn
    }

    function Bn() {
      return Hn
    }

    function Un(e) {
      return e || "en-US"
    }

    var Zn = function () {
        return function (e) {
        }
      }(), qn = function () {
        function e(e) {
          if (this.defaultDoc = e, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
            var t = this.inertDocument.createElement("html");
            this.inertDocument.appendChild(t), this.inertBodyElement = this.inertDocument.createElement("body"), t.appendChild(this.inertBodyElement)
          }
          this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function () {
            try {
              return !!window.DOMParser
            } catch (e) {
              return !1
            }
          }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
        }

        return e.prototype.getInertBodyElement_XHR = function (e) {
          e = "<body><remove></remove>" + e + "</body>";
          try {
            e = encodeURI(e)
          } catch (r) {
            return null
          }
          var t = new XMLHttpRequest;
          t.responseType = "document", t.open("GET", "data:text/html;charset=utf-8," + e, !1), t.send(null);
          var n = t.response.body;
          return n.removeChild(n.firstChild), n
        }, e.prototype.getInertBodyElement_DOMParser = function (e) {
          e = "<body><remove></remove>" + e + "</body>";
          try {
            var t = (new window.DOMParser).parseFromString(e, "text/html").body;
            return t.removeChild(t.firstChild), t
          } catch (n) {
            return null
          }
        }, e.prototype.getInertBodyElement_InertDocument = function (e) {
          var t = this.inertDocument.createElement("template");
          return "content" in t ? (t.innerHTML = e, t) : (this.inertBodyElement.innerHTML = e, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement)
        }, e.prototype.stripCustomNsAttrs = function (e) {
          for (var t = e.attributes, n = t.length - 1; 0 < n; n--) {
            var r = t.item(n).name;
            "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || e.removeAttribute(r)
          }
          for (var o = e.firstChild; o;) o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o), o = o.nextSibling
        }, e
      }(), $n = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
      Wn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

    function Xn(e) {
      return (e = String(e)).match($n) || e.match(Wn) ? e : (Qt() && console.warn("WARNING: sanitizing unsafe URL value " + e + " (see http://g.co/ng/security#xss)"), "unsafe:" + e)
    }

    function Qn(e) {
      var t, n, r = {};
      try {
        for (var o = s(e.split(",")), i = o.next(); !i.done; i = o.next()) r[i.value] = !0
      } catch (a) {
        t = {error: a}
      } finally {
        try {
          i && !i.done && (n = o.return) && n.call(o)
        } finally {
          if (t) throw t.error
        }
      }
      return r
    }

    function Yn() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n, r, o = {};
      try {
        for (var i = s(e), a = i.next(); !a.done; a = i.next()) {
          var l = a.value;
          for (var u in l) l.hasOwnProperty(u) && (o[u] = !0)
        }
      } catch (c) {
        n = {error: c}
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i)
        } finally {
          if (n) throw n.error
        }
      }
      return o
    }

    var Kn, Gn = Qn("area,br,col,hr,img,wbr"), Jn = Qn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
      er = Qn("rp,rt"), tr = Yn(er, Jn),
      nr = Yn(Gn, Yn(Jn, Qn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Yn(er, Qn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), tr),
      rr = Qn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), or = Qn("srcset"),
      ir = Yn(rr, or, Qn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width")),
      sr = function () {
        function e() {
          this.sanitizedSomething = !1, this.buf = []
        }

        return e.prototype.sanitizeChildren = function (e) {
          for (var t = e.firstChild; t;) if (t.nodeType === Node.ELEMENT_NODE ? this.startElement(t) : t.nodeType === Node.TEXT_NODE ? this.chars(t.nodeValue) : this.sanitizedSomething = !0, t.firstChild) t = t.firstChild; else for (; t;) {
            t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
            var n = this.checkClobberedElement(t, t.nextSibling);
            if (n) {
              t = n;
              break
            }
            t = this.checkClobberedElement(t, t.parentNode)
          }
          return this.buf.join("")
        }, e.prototype.startElement = function (e) {
          var t = e.nodeName.toLowerCase();
          if (nr.hasOwnProperty(t)) {
            this.buf.push("<"), this.buf.push(t);
            for (var n, r = e.attributes, o = 0; o < r.length; o++) {
              var i = r.item(o), s = i.name, a = s.toLowerCase();
              if (ir.hasOwnProperty(a)) {
                var l = i.value;
                rr[a] && (l = Xn(l)), or[a] && (n = l, l = (n = String(n)).split(",").map(function (e) {
                  return Xn(e.trim())
                }).join(", ")), this.buf.push(" ", s, '="', ur(l), '"')
              } else this.sanitizedSomething = !0
            }
            this.buf.push(">")
          } else this.sanitizedSomething = !0
        }, e.prototype.endElement = function (e) {
          var t = e.nodeName.toLowerCase();
          nr.hasOwnProperty(t) && !Gn.hasOwnProperty(t) && (this.buf.push("</"), this.buf.push(t), this.buf.push(">"))
        }, e.prototype.chars = function (e) {
          this.buf.push(ur(e))
        }, e.prototype.checkClobberedElement = function (e, t) {
          if (t && (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + e.outerHTML);
          return t
        }, e
      }(), ar = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, lr = /([^\#-~ |!])/g;

    function ur(e) {
      return e.replace(/&/g, "&amp;").replace(ar, function (e) {
        return "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";"
      }).replace(lr, function (e) {
        return "&#" + e.charCodeAt(0) + ";"
      }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function cr(e) {
      return "content" in e && function (e) {
        return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
      }(e) ? e.content : null
    }

    var pr = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
      dr = /^url\(([^)]+)\)$/, hr = function (e) {
        return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e
      }({}), fr = function () {
        return function () {
        }
      }();

    function gr(e, t, n) {
      var r = e.state, o = 1792 & r;
      return o === t ? (e.state = -1793 & r | n, e.initIndex = -1, !0) : o === n
    }

    function vr(e, t, n) {
      return (1792 & e.state) === t && e.initIndex <= n && (e.initIndex = n + 1, !0)
    }

    function yr(e, t) {
      return e.nodes[t]
    }

    function mr(e, t) {
      return e.nodes[t]
    }

    function br(e, t) {
      return e.nodes[t]
    }

    function _r(e, t) {
      return e.nodes[t]
    }

    function wr(e, t) {
      return e.nodes[t]
    }

    var xr = {
      setCurrentNode: void 0,
      createRootView: void 0,
      createEmbeddedView: void 0,
      createComponentView: void 0,
      createNgModuleRef: void 0,
      overrideProvider: void 0,
      overrideComponentView: void 0,
      clearOverrides: void 0,
      checkAndUpdateView: void 0,
      checkNoChangesView: void 0,
      destroyView: void 0,
      resolveDep: void 0,
      createDebugContext: void 0,
      handleEvent: void 0,
      updateDirectives: void 0,
      updateRenderer: void 0,
      dirtyParentQueries: void 0
    };

    function Cr(e, t, n, r) {
      var o = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + t + "'. Current value: '" + n + "'.";
      return r && (o += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"), function (e, t) {
        var n = new Error(e);
        return Er(n, t), n
      }(o, e)
    }

    function Er(e, t) {
      e[Ye] = t, e[Ge] = t.logError.bind(t)
    }

    function Tr(e) {
      return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + e)
    }

    var kr = function () {
    }, Sr = new Map;

    function Ir(e) {
      var t = Sr.get(e);
      return t || (t = _e(e) + "_" + Sr.size, Sr.set(e, t)), t
    }

    var Or = "$$undefined", Pr = "$$empty";

    function Ar(e) {
      return {id: Or, styles: e.styles, encapsulation: e.encapsulation, data: e.data}
    }

    var Mr = 0;

    function Nr(e, t, n, r) {
      return !(!(2 & e.state) && be(e.oldValues[t.bindingIndex + n], r))
    }

    function Vr(e, t, n, r) {
      return !!Nr(e, t, n, r) && (e.oldValues[t.bindingIndex + n] = r, !0)
    }

    function Rr(e, t, n, r) {
      var o = e.oldValues[t.bindingIndex + n];
      if (1 & e.state || !bn(o, r)) {
        var i = t.bindings[n].name;
        throw Cr(xr.createDebugContext(e, t.nodeIndex), i + ": " + o, i + ": " + r, 0 != (1 & e.state))
      }
    }

    function Dr(e) {
      for (var t = e; t;) 2 & t.def.flags && (t.state |= 8), t = t.viewContainerParent || t.parent
    }

    function jr(e, t) {
      for (var n = e; n && n !== t;) n.state |= 64, n = n.viewContainerParent || n.parent
    }

    function Hr(e, t, n, r) {
      try {
        return Dr(33554432 & e.def.nodes[t].flags ? mr(e, t).componentView : e), xr.handleEvent(e, t, n, r)
      } catch (o) {
        e.root.errorHandler.handleError(o)
      }
    }

    function Fr(e) {
      return e.parent ? mr(e.parent, e.parentNodeDef.nodeIndex) : null
    }

    function zr(e) {
      return e.parent ? e.parentNodeDef.parent : null
    }

    function Lr(e, t) {
      switch (201347067 & t.flags) {
        case 1:
          return mr(e, t.nodeIndex).renderElement;
        case 2:
          return yr(e, t.nodeIndex).renderText
      }
    }

    function Br(e) {
      return !!e.parent && !!(32768 & e.parentNodeDef.flags)
    }

    function Ur(e) {
      return !(!e.parent || 32768 & e.parentNodeDef.flags)
    }

    function Zr(e) {
      var t = {}, n = 0, r = {};
      return e && e.forEach(function (e) {
        var o = a(e, 2), i = o[0], s = o[1];
        "number" == typeof i ? (t[i] = s, n |= function (e) {
          return 1 << e % 32
        }(i)) : r[i] = s
      }), {matchedQueries: t, references: r, matchedQueryIds: n}
    }

    function qr(e, t) {
      return e.map(function (e) {
        var n, r, o;
        return Array.isArray(e) ? (r = (o = a(e, 2))[0], n = o[1]) : (r = 0, n = e), n && ("function" == typeof n || "object" == typeof n) && t && Object.defineProperty(n, Se, {
          value: t,
          configurable: !0
        }), {flags: r, token: n, tokenKey: Ir(n)}
      })
    }

    function $r(e, t, n) {
      var r = n.renderParent;
      return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === Xe.Native ? mr(e, n.renderParent.nodeIndex).renderElement : void 0 : t
    }

    var Wr = new WeakMap;

    function Xr(e) {
      var t = Wr.get(e);
      return t || ((t = e(function () {
        return kr
      })).factory = e, Wr.set(e, t)), t
    }

    function Qr(e, t, n, r, o) {
      3 === t && (n = e.renderer.parentNode(Lr(e, e.def.lastRenderRootNode))), Yr(e, t, 0, e.def.nodes.length - 1, n, r, o)
    }

    function Yr(e, t, n, r, o, i, s) {
      for (var a = n; a <= r; a++) {
        var l = e.def.nodes[a];
        11 & l.flags && Gr(e, l, t, o, i, s), a += l.childCount
      }
    }

    function Kr(e, t, n, r, o, i) {
      for (var s = e; s && !Br(s);) s = s.parent;
      for (var a = s.parent, l = zr(s), u = l.nodeIndex + l.childCount, c = l.nodeIndex + 1; c <= u; c++) {
        var p = a.def.nodes[c];
        p.ngContentIndex === t && Gr(a, p, n, r, o, i), c += p.childCount
      }
      if (!a.parent) {
        var d = e.root.projectableNodes[t];
        if (d) for (c = 0; c < d.length; c++) Jr(e, d[c], n, r, o, i)
      }
    }

    function Gr(e, t, n, r, o, i) {
      if (8 & t.flags) Kr(e, t.ngContent.index, n, r, o, i); else {
        var s = Lr(e, t);
        if (3 === n && 33554432 & t.flags && 48 & t.bindingFlags ? (16 & t.bindingFlags && Jr(e, s, n, r, o, i), 32 & t.bindingFlags && Jr(mr(e, t.nodeIndex).componentView, s, n, r, o, i)) : Jr(e, s, n, r, o, i), 16777216 & t.flags) for (var a = mr(e, t.nodeIndex).viewContainer._embeddedViews, l = 0; l < a.length; l++) Qr(a[l], n, r, o, i);
        1 & t.flags && !t.element.name && Yr(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, o, i)
      }
    }

    function Jr(e, t, n, r, o, i) {
      var s = e.renderer;
      switch (n) {
        case 1:
          s.appendChild(r, t);
          break;
        case 2:
          s.insertBefore(r, t, o);
          break;
        case 3:
          s.removeChild(r, t);
          break;
        case 0:
          i.push(t)
      }
    }

    var eo = /^:([^:]+):(.+)$/;

    function to(e) {
      if (":" === e[0]) {
        var t = e.match(eo);
        return [t[1], t[2]]
      }
      return ["", e]
    }

    function no(e) {
      for (var t = 0, n = 0; n < e.length; n++) t |= e[n].flags;
      return t
    }

    function ro(e, t, n, r, o, i) {
      e |= 1;
      var s = Zr(t);
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        flags: e,
        checkIndex: -1,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: s.matchedQueries,
        matchedQueryIds: s.matchedQueryIds,
        references: s.references,
        ngContentIndex: n,
        childCount: r,
        bindings: [],
        bindingFlags: 0,
        outputs: [],
        element: {
          ns: null,
          name: null,
          attrs: null,
          template: i ? Xr(i) : null,
          componentProvider: null,
          componentView: null,
          componentRendererType: null,
          publicProviders: null,
          allProviders: null,
          handleEvent: o || kr
        },
        provider: null,
        text: null,
        query: null,
        ngContent: null
      }
    }

    function oo(e, t, n, r, o, i, s, l, u, c, p, d) {
      void 0 === s && (s = []), c || (c = kr);
      var h = Zr(n), f = h.matchedQueries, g = h.references, v = h.matchedQueryIds, y = null, m = null;
      i && (y = (A = a(to(i), 2))[0], m = A[1]), l = l || [];
      for (var b = new Array(l.length), _ = 0; _ < l.length; _++) {
        var w = a(l[_], 3), x = w[0], C = w[2], E = a(to(w[1]), 2), T = E[0], k = E[1], S = void 0, I = void 0;
        switch (15 & x) {
          case 4:
            I = C;
            break;
          case 1:
          case 8:
            S = C
        }
        b[_] = {flags: x, ns: T, name: k, nonMinifiedName: k, securityContext: S, suffix: I}
      }
      u = u || [];
      var O = new Array(u.length);
      for (_ = 0; _ < u.length; _++) {
        var P = a(u[_], 2);
        O[_] = {type: 0, target: P[0], eventName: P[1], propName: null}
      }
      var A, M = (s = s || []).map(function (e) {
        var t = a(e, 2), n = t[1], r = a(to(t[0]), 2);
        return [r[0], r[1], n]
      });
      return d = function (e) {
        if (e && e.id === Or) {
          var t = null != e.encapsulation && e.encapsulation !== Xe.None || e.styles.length || Object.keys(e.data).length;
          e.id = t ? "c" + Mr++ : Pr
        }
        return e && e.id === Pr && (e = null), e || null
      }(d), p && (t |= 33554432), {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: e,
        flags: t |= 1,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: f,
        matchedQueryIds: v,
        references: g,
        ngContentIndex: r,
        childCount: o,
        bindings: b,
        bindingFlags: no(b),
        outputs: O,
        element: {
          ns: y,
          name: m,
          attrs: M,
          template: null,
          componentProvider: null,
          componentView: p || null,
          componentRendererType: d,
          publicProviders: null,
          allProviders: null,
          handleEvent: c || kr
        },
        provider: null,
        text: null,
        query: null,
        ngContent: null
      }
    }

    function io(e, t, n) {
      var r, o = n.element, i = e.root.selectorOrNode, s = e.renderer;
      if (e.parent || !i) {
        r = o.name ? s.createElement(o.name, o.ns) : s.createComment("");
        var l = $r(e, t, n);
        l && s.appendChild(l, r)
      } else r = s.selectRootElement(i);
      if (o.attrs) for (var u = 0; u < o.attrs.length; u++) {
        var c = a(o.attrs[u], 3);
        s.setAttribute(r, c[1], c[2], c[0])
      }
      return r
    }

    function so(e, t, n, r) {
      for (var o = 0; o < n.outputs.length; o++) {
        var i = n.outputs[o], s = ao(e, n.nodeIndex, (p = i.eventName, (c = i.target) ? c + ":" + p : p)), a = i.target,
          l = e;
        "component" === i.target && (a = null, l = t);
        var u = l.renderer.listen(a || r, i.eventName, s);
        e.disposables[n.outputIndex + o] = u
      }
      var c, p
    }

    function ao(e, t, n) {
      return function (r) {
        return Hr(e, t, n, r)
      }
    }

    function lo(e, t, n, r) {
      if (!Vr(e, t, n, r)) return !1;
      var o = t.bindings[n], i = mr(e, t.nodeIndex), s = i.renderElement, a = o.name;
      switch (15 & o.flags) {
        case 1:
          !function (e, t, n, r, o, i) {
            var s = t.securityContext, a = s ? e.root.sanitizer.sanitize(s, i) : i;
            a = null != a ? a.toString() : null;
            var l = e.renderer;
            null != i ? l.setAttribute(n, o, a, r) : l.removeAttribute(n, o, r)
          }(e, o, s, o.ns, a, r);
          break;
        case 2:
          !function (e, t, n, r) {
            var o = e.renderer;
            r ? o.addClass(t, n) : o.removeClass(t, n)
          }(e, s, a, r);
          break;
        case 4:
          !function (e, t, n, r, o) {
            var i = e.root.sanitizer.sanitize(hr.STYLE, o);
            if (null != i) {
              i = i.toString();
              var s = t.suffix;
              null != s && (i += s)
            } else i = null;
            var a = e.renderer;
            null != i ? a.setStyle(n, r, i) : a.removeStyle(n, r)
          }(e, o, s, a, r);
          break;
        case 8:
          !function (e, t, n, r, o) {
            var i = t.securityContext, s = i ? e.root.sanitizer.sanitize(i, o) : o;
            e.renderer.setProperty(n, r, s)
          }(33554432 & t.flags && 32 & o.flags ? i.componentView : e, o, s, a, r)
      }
      return !0
    }

    var uo = new Object, co = Ir(Ae), po = Ir(Oe), ho = Ir(St);

    function fo(e, t, n, r) {
      return n = xe(n), {index: -1, deps: qr(r, _e(t)), flags: e, token: t, value: n}
    }

    function go(e, t, n) {
      void 0 === n && (n = Ae.THROW_IF_NOT_FOUND);
      var r, o, i = We(e);
      try {
        if (8 & t.flags) return t.token;
        if (2 & t.flags && (n = null), 1 & t.flags) return e._parent.get(t.token, n);
        var s = t.tokenKey;
        switch (s) {
          case co:
          case po:
          case ho:
            return e
        }
        var a = e._def.providersByKey[s];
        if (a) {
          var l = e._providers[a.index];
          return void 0 === l && (l = e._providers[a.index] = vo(e, a)), l === uo ? void 0 : l
        }
        if (t.token.ngInjectableDef && (r = e, null != (o = t.token.ngInjectableDef).providedIn && (function (e, t) {
          return e._def.modules.indexOf(o.providedIn) > -1
        }(r) || "root" === o.providedIn && r._def.isRoot))) {
          var u = e._providers.length;
          return e._def.providersByKey[t.tokenKey] = {
            flags: 5120,
            value: t.token.ngInjectableDef.factory,
            deps: [],
            index: u,
            token: t.token
          }, e._providers[u] = uo, e._providers[u] = vo(e, e._def.providersByKey[t.tokenKey])
        }
        return 4 & t.flags ? n : e._parent.get(t.token, n)
      } finally {
        We(i)
      }
    }

    function vo(e, t) {
      var n;
      switch (201347067 & t.flags) {
        case 512:
          n = function (e, t, n) {
            var r = n.length;
            switch (r) {
              case 0:
                return new t;
              case 1:
                return new t(go(e, n[0]));
              case 2:
                return new t(go(e, n[0]), go(e, n[1]));
              case 3:
                return new t(go(e, n[0]), go(e, n[1]), go(e, n[2]));
              default:
                for (var o = new Array(r), i = 0; i < r; i++) o[i] = go(e, n[i]);
                return new (t.bind.apply(t, l([void 0], o)))
            }
          }(e, t.value, t.deps);
          break;
        case 1024:
          n = function (e, t, n) {
            var r = n.length;
            switch (r) {
              case 0:
                return t();
              case 1:
                return t(go(e, n[0]));
              case 2:
                return t(go(e, n[0]), go(e, n[1]));
              case 3:
                return t(go(e, n[0]), go(e, n[1]), go(e, n[2]));
              default:
                for (var o = Array(r), i = 0; i < r; i++) o[i] = go(e, n[i]);
                return t.apply(void 0, l(o))
            }
          }(e, t.value, t.deps);
          break;
        case 2048:
          n = go(e, t.deps[0]);
          break;
        case 256:
          n = t.value
      }
      return n === uo || null == n || "object" != typeof n || 131072 & t.flags || "function" != typeof n.ngOnDestroy || (t.flags |= 131072), void 0 === n ? uo : n
    }

    function yo(e, t) {
      var n = e.viewContainer._embeddedViews;
      if ((null == t || t >= n.length) && (t = n.length - 1), t < 0) return null;
      var r = n[t];
      return r.viewContainerParent = null, wo(n, t), xr.dirtyParentQueries(r), bo(r), r
    }

    function mo(e, t, n) {
      var r = t ? Lr(t, t.def.lastRenderRootNode) : e.renderElement, o = n.renderer.parentNode(r),
        i = n.renderer.nextSibling(r);
      Qr(n, 2, o, i, void 0)
    }

    function bo(e) {
      Qr(e, 3, null, null, void 0)
    }

    function _o(e, t, n) {
      t >= e.length ? e.push(n) : e.splice(t, 0, n)
    }

    function wo(e, t) {
      t >= e.length - 1 ? e.pop() : e.splice(t, 1)
    }

    var xo = new Object;

    function Co(e, t, n, r, o, i) {
      return new Eo(e, t, n, r, o, i)
    }

    var Eo = function (e) {
      function t(t, n, r, o, i, s) {
        var a = e.call(this) || this;
        return a.selector = t, a.componentType = n, a._inputs = o, a._outputs = i, a.ngContentSelectors = s, a.viewDefFactory = r, a
      }

      return o(t, e), Object.defineProperty(t.prototype, "inputs", {
        get: function () {
          var e = [], t = this._inputs;
          for (var n in t) e.push({propName: n, templateName: t[n]});
          return e
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(t.prototype, "outputs", {
        get: function () {
          var e = [];
          for (var t in this._outputs) e.push({propName: t, templateName: this._outputs[t]});
          return e
        }, enumerable: !0, configurable: !0
      }), t.prototype.create = function (e, t, n, r) {
        if (!r) throw new Error("ngModule should be provided");
        var o = Xr(this.viewDefFactory), i = o.nodes[0].element.componentProvider.nodeIndex,
          s = xr.createRootView(e, t || [], n, o, r, xo), a = br(s, i).instance;
        return n && s.renderer.setAttribute(mr(s, 0).renderElement, "ng-version", Qe.full), new To(s, new Oo(s), a)
      }, t
    }(mt), To = function (e) {
      function t(t, n, r) {
        var o = e.call(this) || this;
        return o._view = t, o._viewRef = n, o._component = r, o._elDef = o._view.def.nodes[0], o.hostView = n, o.changeDetectorRef = n, o.instance = r, o
      }

      return o(t, e), Object.defineProperty(t.prototype, "location", {
        get: function () {
          return new ln(mr(this._view, this._elDef.nodeIndex).renderElement)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(t.prototype, "injector", {
        get: function () {
          return new No(this._view, this._elDef)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(t.prototype, "componentType", {
        get: function () {
          return this._component.constructor
        }, enumerable: !0, configurable: !0
      }), t.prototype.destroy = function () {
        this._viewRef.destroy()
      }, t.prototype.onDestroy = function (e) {
        this._viewRef.onDestroy(e)
      }, t
    }(yt);

    function ko(e, t, n) {
      return new So(e, t, n)
    }

    var So = function () {
      function e(e, t, n) {
        this._view = e, this._elDef = t, this._data = n, this._embeddedViews = []
      }

      return Object.defineProperty(e.prototype, "element", {
        get: function () {
          return new ln(this._data.renderElement)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "injector", {
        get: function () {
          return new No(this._view, this._elDef)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "parentInjector", {
        get: function () {
          for (var e = this._view, t = this._elDef.parent; !t && e;) t = zr(e), e = e.parent;
          return e ? new No(e, t) : new No(this._view, null)
        }, enumerable: !0, configurable: !0
      }), e.prototype.clear = function () {
        for (var e = this._embeddedViews.length - 1; e >= 0; e--) {
          var t = yo(this._data, e);
          xr.destroyView(t)
        }
      }, e.prototype.get = function (e) {
        var t = this._embeddedViews[e];
        if (t) {
          var n = new Oo(t);
          return n.attachToViewContainerRef(this), n
        }
        return null
      }, Object.defineProperty(e.prototype, "length", {
        get: function () {
          return this._embeddedViews.length
        }, enumerable: !0, configurable: !0
      }), e.prototype.createEmbeddedView = function (e, t, n) {
        var r = e.createEmbeddedView(t || {});
        return this.insert(r, n), r
      }, e.prototype.createComponent = function (e, t, n, r, o) {
        var i = n || this.parentInjector;
        o || e instanceof kt || (o = i.get(St));
        var s = e.create(i, r, void 0, o);
        return this.insert(s.hostView, t), s
      }, e.prototype.insert = function (e, t) {
        if (e.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
        var n, r, o, i, s = e;
        return i = (n = this._data).viewContainer._embeddedViews, null == (r = t) && (r = i.length), (o = s._view).viewContainerParent = this._view, _o(i, r, o), function (e, t) {
          var n = Fr(t);
          if (n && n !== e && !(16 & t.state)) {
            t.state |= 16;
            var r = n.template._projectedViews;
            r || (r = n.template._projectedViews = []), r.push(t), function (e, n) {
              if (!(4 & n.flags)) {
                t.parent.def.nodeFlags |= 4, n.flags |= 4;
                for (var r = n.parent; r;) r.childFlags |= 4, r = r.parent
              }
            }(0, t.parentNodeDef)
          }
        }(n, o), xr.dirtyParentQueries(o), mo(n, r > 0 ? i[r - 1] : null, o), s.attachToViewContainerRef(this), e
      }, e.prototype.move = function (e, t) {
        if (e.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
        var n, r, o, i, s, a = this._embeddedViews.indexOf(e._view);
        return o = t, s = (i = (n = this._data).viewContainer._embeddedViews)[r = a], wo(i, r), null == o && (o = i.length), _o(i, o, s), xr.dirtyParentQueries(s), bo(s), mo(n, o > 0 ? i[o - 1] : null, s), e
      }, e.prototype.indexOf = function (e) {
        return this._embeddedViews.indexOf(e._view)
      }, e.prototype.remove = function (e) {
        var t = yo(this._data, e);
        t && xr.destroyView(t)
      }, e.prototype.detach = function (e) {
        var t = yo(this._data, e);
        return t ? new Oo(t) : null
      }, e
    }();

    function Io(e) {
      return new Oo(e)
    }

    var Oo = function () {
      function e(e) {
        this._view = e, this._viewContainerRef = null, this._appRef = null
      }

      return Object.defineProperty(e.prototype, "rootNodes", {
        get: function () {
          return Qr(this._view, 0, void 0, void 0, e = []), e;
          var e
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "context", {
        get: function () {
          return this._view.context
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "destroyed", {
        get: function () {
          return 0 != (128 & this._view.state)
        }, enumerable: !0, configurable: !0
      }), e.prototype.markForCheck = function () {
        Dr(this._view)
      }, e.prototype.detach = function () {
        this._view.state &= -5
      }, e.prototype.detectChanges = function () {
        var e = this._view.root.rendererFactory;
        e.begin && e.begin();
        try {
          xr.checkAndUpdateView(this._view)
        } finally {
          e.end && e.end()
        }
      }, e.prototype.checkNoChanges = function () {
        xr.checkNoChangesView(this._view)
      }, e.prototype.reattach = function () {
        this._view.state |= 4
      }, e.prototype.onDestroy = function (e) {
        this._view.disposables || (this._view.disposables = []), this._view.disposables.push(e)
      }, e.prototype.destroy = function () {
        this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), xr.destroyView(this._view)
      }, e.prototype.detachFromAppRef = function () {
        this._appRef = null, bo(this._view), xr.dirtyParentQueries(this._view)
      }, e.prototype.attachToAppRef = function (e) {
        if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
        this._appRef = e
      }, e.prototype.attachToViewContainerRef = function (e) {
        if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
        this._viewContainerRef = e
      }, e
    }();

    function Po(e, t) {
      return new Ao(e, t)
    }

    var Ao = function (e) {
      function t(t, n) {
        var r = e.call(this) || this;
        return r._parentView = t, r._def = n, r
      }

      return o(t, e), t.prototype.createEmbeddedView = function (e) {
        return new Oo(xr.createEmbeddedView(this._parentView, this._def, this._def.element.template, e))
      }, Object.defineProperty(t.prototype, "elementRef", {
        get: function () {
          return new ln(mr(this._parentView, this._def.nodeIndex).renderElement)
        }, enumerable: !0, configurable: !0
      }), t
    }(cn);

    function Mo(e, t) {
      return new No(e, t)
    }

    var No = function () {
      function e(e, t) {
        this.view = e, this.elDef = t
      }

      return e.prototype.get = function (e, t) {
        return void 0 === t && (t = Ae.THROW_IF_NOT_FOUND), xr.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), {
          flags: 0,
          token: e,
          tokenKey: Ir(e)
        }, t)
      }, e
    }();

    function Vo(e, t) {
      var n = e.def.nodes[t];
      if (1 & n.flags) {
        var r = mr(e, n.nodeIndex);
        return n.element.template ? r.template : r.renderElement
      }
      if (2 & n.flags) return yr(e, n.nodeIndex).renderText;
      if (20240 & n.flags) return br(e, n.nodeIndex).instance;
      throw new Error("Illegal state: read nodeValue for node index " + t)
    }

    function Ro(e) {
      return new Do(e.renderer)
    }

    var Do = function () {
      function e(e) {
        this.delegate = e
      }

      return e.prototype.selectRootElement = function (e) {
        return this.delegate.selectRootElement(e)
      }, e.prototype.createElement = function (e, t) {
        var n = a(to(t), 2), r = this.delegate.createElement(n[1], n[0]);
        return e && this.delegate.appendChild(e, r), r
      }, e.prototype.createViewRoot = function (e) {
        return e
      }, e.prototype.createTemplateAnchor = function (e) {
        var t = this.delegate.createComment("");
        return e && this.delegate.appendChild(e, t), t
      }, e.prototype.createText = function (e, t) {
        var n = this.delegate.createText(t);
        return e && this.delegate.appendChild(e, n), n
      }, e.prototype.projectNodes = function (e, t) {
        for (var n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n])
      }, e.prototype.attachViewAfter = function (e, t) {
        for (var n = this.delegate.parentNode(e), r = this.delegate.nextSibling(e), o = 0; o < t.length; o++) this.delegate.insertBefore(n, t[o], r)
      }, e.prototype.detachView = function (e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t], r = this.delegate.parentNode(n);
          this.delegate.removeChild(r, n)
        }
      }, e.prototype.destroyView = function (e, t) {
        for (var n = 0; n < t.length; n++) this.delegate.destroyNode(t[n])
      }, e.prototype.listen = function (e, t, n) {
        return this.delegate.listen(e, t, n)
      }, e.prototype.listenGlobal = function (e, t, n) {
        return this.delegate.listen(e, t, n)
      }, e.prototype.setElementProperty = function (e, t, n) {
        this.delegate.setProperty(e, t, n)
      }, e.prototype.setElementAttribute = function (e, t, n) {
        var r = a(to(t), 2), o = r[0], i = r[1];
        null != n ? this.delegate.setAttribute(e, i, n, o) : this.delegate.removeAttribute(e, i, o)
      }, e.prototype.setBindingDebugInfo = function (e, t, n) {
      }, e.prototype.setElementClass = function (e, t, n) {
        n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t)
      }, e.prototype.setElementStyle = function (e, t, n) {
        null != n ? this.delegate.setStyle(e, t, n) : this.delegate.removeStyle(e, t)
      }, e.prototype.invokeElementMethod = function (e, t, n) {
        e[t].apply(e, n)
      }, e.prototype.setText = function (e, t) {
        this.delegate.setValue(e, t)
      }, e.prototype.animate = function () {
        throw new Error("Renderer.animate is no longer supported!")
      }, e
    }();

    function jo(e, t, n, r) {
      return new Ho(e, t, n, r)
    }

    var Ho = function () {
      function e(e, t, n, r) {
        this._moduleType = e, this._parent = t, this._bootstrapComponents = n, this._def = r, this._destroyListeners = [], this._destroyed = !1, this.injector = this, function (e) {
          for (var t = e._def, n = e._providers = new Array(t.providers.length), r = 0; r < t.providers.length; r++) {
            var o = t.providers[r];
            4096 & o.flags || void 0 === n[r] && (n[r] = vo(e, o))
          }
        }(this)
      }

      return e.prototype.get = function (e, t, n) {
        void 0 === t && (t = Ae.THROW_IF_NOT_FOUND), void 0 === n && (n = 0);
        var r = 0;
        return 4 & n ? r |= 1 : 2 & n && (r |= 4), go(this, {token: e, tokenKey: Ir(e), flags: r}, t)
      }, Object.defineProperty(e.prototype, "instance", {
        get: function () {
          return this.get(this._moduleType)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "componentFactoryResolver", {
        get: function () {
          return this.get(Et)
        }, enumerable: !0, configurable: !0
      }), e.prototype.destroy = function () {
        if (this._destroyed) throw new Error("The ng module " + _e(this.instance.constructor) + " has already been destroyed.");
        this._destroyed = !0, function (e, t) {
          for (var n = e._def, r = new Set, o = 0; o < n.providers.length; o++) if (131072 & n.providers[o].flags) {
            var i = e._providers[o];
            if (i && i !== uo) {
              var s = i.ngOnDestroy;
              "function" != typeof s || r.has(i) || (s.apply(i), r.add(i))
            }
          }
        }(this), this._destroyListeners.forEach(function (e) {
          return e()
        })
      }, e.prototype.onDestroy = function (e) {
        this._destroyListeners.push(e)
      }, e
    }(), Fo = Ir(rn), zo = Ir(an), Lo = Ir(ln), Bo = Ir(pn), Uo = Ir(cn), Zo = Ir(dn), qo = Ir(Ae), $o = Ir(Oe);

    function Wo(e, t, n, r, o, i, s, l) {
      var u = [];
      if (s) for (var c in s) {
        var p = a(s[c], 2);
        u[p[0]] = {flags: 8, name: c, nonMinifiedName: p[1], ns: null, securityContext: null, suffix: null}
      }
      var d = [];
      if (l) for (var h in l) d.push({type: 1, propName: h, target: null, eventName: l[h]});
      return Xo(e, t |= 16384, n, r, o, o, i, u, d)
    }

    function Xo(e, t, n, r, o, i, s, a, l) {
      var u = Zr(n), c = u.matchedQueries, p = u.references, d = u.matchedQueryIds;
      l || (l = []), a || (a = []), i = xe(i);
      var h = qr(s, _e(o));
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: e,
        flags: t,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: c,
        matchedQueryIds: d,
        references: p,
        ngContentIndex: -1,
        childCount: r,
        bindings: a,
        bindingFlags: no(a),
        outputs: l,
        element: null,
        provider: {token: o, value: i, deps: h},
        text: null,
        query: null,
        ngContent: null
      }
    }

    function Qo(e, t) {
      return Jo(e, t)
    }

    function Yo(e, t) {
      for (var n = e; n.parent && !Br(n);) n = n.parent;
      return ei(n.parent, zr(n), !0, t.provider.value, t.provider.deps)
    }

    function Ko(e, t) {
      var n = ei(e, t.parent, (32768 & t.flags) > 0, t.provider.value, t.provider.deps);
      if (t.outputs.length) for (var r = 0; r < t.outputs.length; r++) {
        var o = t.outputs[r], i = n[o.propName].subscribe(Go(e, t.parent.nodeIndex, o.eventName));
        e.disposables[t.outputIndex + r] = i.unsubscribe.bind(i)
      }
      return n
    }

    function Go(e, t, n) {
      return function (r) {
        return Hr(e, t, n, r)
      }
    }

    function Jo(e, t) {
      var n = (8192 & t.flags) > 0, r = t.provider;
      switch (201347067 & t.flags) {
        case 512:
          return ei(e, t.parent, n, r.value, r.deps);
        case 1024:
          return function (e, t, n, r, o) {
            var i = o.length;
            switch (i) {
              case 0:
                return r();
              case 1:
                return r(ni(e, t, n, o[0]));
              case 2:
                return r(ni(e, t, n, o[0]), ni(e, t, n, o[1]));
              case 3:
                return r(ni(e, t, n, o[0]), ni(e, t, n, o[1]), ni(e, t, n, o[2]));
              default:
                for (var s = Array(i), a = 0; a < i; a++) s[a] = ni(e, t, n, o[a]);
                return r.apply(void 0, l(s))
            }
          }(e, t.parent, n, r.value, r.deps);
        case 2048:
          return ni(e, t.parent, n, r.deps[0]);
        case 256:
          return r.value
      }
    }

    function ei(e, t, n, r, o) {
      var i = o.length;
      switch (i) {
        case 0:
          return new r;
        case 1:
          return new r(ni(e, t, n, o[0]));
        case 2:
          return new r(ni(e, t, n, o[0]), ni(e, t, n, o[1]));
        case 3:
          return new r(ni(e, t, n, o[0]), ni(e, t, n, o[1]), ni(e, t, n, o[2]));
        default:
          for (var s = new Array(i), a = 0; a < i; a++) s[a] = ni(e, t, n, o[a]);
          return new (r.bind.apply(r, l([void 0], s)))
      }
    }

    var ti = {};

    function ni(e, t, n, r, o) {
      if (void 0 === o && (o = Ae.THROW_IF_NOT_FOUND), 8 & r.flags) return r.token;
      var i = e;
      2 & r.flags && (o = null);
      var s = r.tokenKey;
      s === Zo && (n = !(!t || !t.element.componentView)), t && 1 & r.flags && (n = !1, t = t.parent);
      for (var a = e; a;) {
        if (t) switch (s) {
          case Fo:
            return Ro(ri(a, t, n));
          case zo:
            return ri(a, t, n).renderer;
          case Lo:
            return new ln(mr(a, t.nodeIndex).renderElement);
          case Bo:
            return mr(a, t.nodeIndex).viewContainer;
          case Uo:
            if (t.element.template) return mr(a, t.nodeIndex).template;
            break;
          case Zo:
            return Io(ri(a, t, n));
          case qo:
          case $o:
            return Mo(a, t);
          default:
            var l = (n ? t.element.allProviders : t.element.publicProviders)[s];
            if (l) {
              var u = br(a, l.nodeIndex);
              return u || (u = {instance: Jo(a, l)}, a.nodes[l.nodeIndex] = u), u.instance
            }
        }
        n = Br(a), t = zr(a), a = a.parent, 4 & r.flags && (a = null)
      }
      var c = i.root.injector.get(r.token, ti);
      return c !== ti || o === ti ? c : i.root.ngModule.injector.get(r.token, o)
    }

    function ri(e, t, n) {
      var r;
      if (n) r = mr(e, t.nodeIndex).componentView; else for (r = e; r.parent && !Br(r);) r = r.parent;
      return r
    }

    function oi(e, t, n, r, o, i) {
      if (32768 & n.flags) {
        var s = mr(e, n.parent.nodeIndex).componentView;
        2 & s.def.flags && (s.state |= 8)
      }
      if (t.instance[n.bindings[r].name] = o, 524288 & n.flags) {
        i = i || {};
        var a = _n.unwrap(e.oldValues[n.bindingIndex + r]);
        i[n.bindings[r].nonMinifiedName] = new wn(a, o, 0 != (2 & e.state))
      }
      return e.oldValues[n.bindingIndex + r] = o, i
    }

    function ii(e, t) {
      if (e.def.nodeFlags & t) for (var n = e.def.nodes, r = 0, o = 0; o < n.length; o++) {
        var i = n[o], s = i.parent;
        for (!s && i.flags & t && ai(e, o, i.flags & t, r++), 0 == (i.childFlags & t) && (o += i.childCount); s && 1 & s.flags && o === s.nodeIndex + s.childCount;) s.directChildFlags & t && (r = si(e, s, t, r)), s = s.parent
      }
    }

    function si(e, t, n, r) {
      for (var o = t.nodeIndex + 1; o <= t.nodeIndex + t.childCount; o++) {
        var i = e.def.nodes[o];
        i.flags & n && ai(e, o, i.flags & n, r++), o += i.childCount
      }
      return r
    }

    function ai(e, t, n, r) {
      var o = br(e, t);
      if (o) {
        var i = o.instance;
        i && (xr.setCurrentNode(e, t), 1048576 & n && vr(e, 512, r) && i.ngAfterContentInit(), 2097152 & n && i.ngAfterContentChecked(), 4194304 & n && vr(e, 768, r) && i.ngAfterViewInit(), 8388608 & n && i.ngAfterViewChecked(), 131072 & n && i.ngOnDestroy())
      }
    }

    function li(e) {
      for (var t = e.def.nodeMatchedQueries; e.parent && Ur(e);) {
        var n = e.parentNodeDef;
        e = e.parent;
        for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++) 67108864 & (i = e.def.nodes[o]).flags && 536870912 & i.flags && (i.query.filterId & t) === i.query.filterId && wr(e, o).setDirty(), !(1 & i.flags && o + i.childCount < n.nodeIndex) && 67108864 & i.childFlags && 536870912 & i.childFlags || (o += i.childCount)
      }
      if (134217728 & e.def.nodeFlags) for (o = 0; o < e.def.nodes.length; o++) {
        var i;
        134217728 & (i = e.def.nodes[o]).flags && 536870912 & i.flags && wr(e, o).setDirty(), o += i.childCount
      }
    }

    function ui(e, t) {
      var n = wr(e, t.nodeIndex);
      if (n.dirty) {
        var r, o = void 0;
        if (67108864 & t.flags) {
          var i = t.parent.parent;
          o = ci(e, i.nodeIndex, i.nodeIndex + i.childCount, t.query, []), r = br(e, t.parent.nodeIndex).instance
        } else 134217728 & t.flags && (o = ci(e, 0, e.def.nodes.length - 1, t.query, []), r = e.component);
        n.reset(o);
        for (var s = t.query.bindings, a = !1, l = 0; l < s.length; l++) {
          var u = s[l], c = void 0;
          switch (u.bindingType) {
            case 0:
              c = n.first;
              break;
            case 1:
              c = n, a = !0
          }
          r[u.propName] = c
        }
        a && n.notifyOnChanges()
      }
    }

    function ci(e, t, n, r, o) {
      for (var i = t; i <= n; i++) {
        var s = e.def.nodes[i], a = s.matchedQueries[r.id];
        if (null != a && o.push(pi(e, s, a)), 1 & s.flags && s.element.template && (s.element.template.nodeMatchedQueries & r.filterId) === r.filterId) {
          var l = mr(e, i);
          if ((s.childMatchedQueries & r.filterId) === r.filterId && (ci(e, i + 1, i + s.childCount, r, o), i += s.childCount), 16777216 & s.flags) for (var u = l.viewContainer._embeddedViews, c = 0; c < u.length; c++) {
            var p = u[c], d = Fr(p);
            d && d === l && ci(p, 0, p.def.nodes.length - 1, r, o)
          }
          var h = l.template._projectedViews;
          if (h) for (c = 0; c < h.length; c++) {
            var f = h[c];
            ci(f, 0, f.def.nodes.length - 1, r, o)
          }
        }
        (s.childMatchedQueries & r.filterId) !== r.filterId && (i += s.childCount)
      }
      return o
    }

    function pi(e, t, n) {
      if (null != n) switch (n) {
        case 1:
          return mr(e, t.nodeIndex).renderElement;
        case 0:
          return new ln(mr(e, t.nodeIndex).renderElement);
        case 2:
          return mr(e, t.nodeIndex).template;
        case 3:
          return mr(e, t.nodeIndex).viewContainer;
        case 4:
          return br(e, t.nodeIndex).instance
      }
    }

    function di(e, t, n) {
      var r = $r(e, t, n);
      r && Kr(e, n.ngContent.index, 1, r, null, void 0)
    }

    function hi(e, t) {
      for (var n = Object.keys(t), r = n.length, o = new Array(r), i = 0; i < r; i++) {
        var s = n[i];
        o[t[s]] = s
      }
      return function (e, t, n) {
        for (var r = new Array(n.length), o = 0; o < n.length; o++) {
          var i = n[o];
          r[o] = {flags: 8, name: i, ns: null, nonMinifiedName: i, securityContext: null, suffix: null}
        }
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: 64,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: -1,
          childCount: 0,
          bindings: r,
          bindingFlags: no(r),
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: null
        }
      }(0, e, o)
    }

    function fi(e, t, n) {
      for (var r = new Array(n.length - 1), o = 1; o < n.length; o++) r[o - 1] = {
        flags: 8,
        name: null,
        ns: null,
        nonMinifiedName: null,
        securityContext: null,
        suffix: n[o]
      };
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: e,
        flags: 2,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        ngContentIndex: t,
        childCount: 0,
        bindings: r,
        bindingFlags: 8,
        outputs: [],
        element: null,
        provider: null,
        text: {prefix: n[0]},
        query: null,
        ngContent: null
      }
    }

    function gi(e, t, n) {
      var r, o = e.renderer;
      r = o.createText(n.text.prefix);
      var i = $r(e, t, n);
      return i && o.appendChild(i, r), {renderText: r}
    }

    function vi(e, t) {
      return (null != e ? e.toString() : "") + t.suffix
    }

    function yi(e, t, n, r) {
      for (var o = 0, i = 0, s = 0, a = 0, l = 0, u = null, c = null, p = !1, d = !1, h = null, f = 0; f < t.length; f++) {
        var g = t[f];
        if (g.nodeIndex = f, g.parent = u, g.bindingIndex = o, g.outputIndex = i, g.renderParent = c, s |= g.flags, l |= g.matchedQueryIds, g.element) {
          var v = g.element;
          v.publicProviders = u ? u.element.publicProviders : Object.create(null), v.allProviders = v.publicProviders, p = !1, d = !1, g.element.template && (l |= g.element.template.nodeMatchedQueries)
        }
        if (bi(u, g, t.length), o += g.bindings.length, i += g.outputs.length, !c && 3 & g.flags && (h = g), 20224 & g.flags) {
          p || (p = !0, u.element.publicProviders = Object.create(u.element.publicProviders), u.element.allProviders = u.element.publicProviders);
          var y = 0 != (32768 & g.flags);
          0 == (8192 & g.flags) || y ? u.element.publicProviders[Ir(g.provider.token)] = g : (d || (d = !0, u.element.allProviders = Object.create(u.element.publicProviders)), u.element.allProviders[Ir(g.provider.token)] = g), y && (u.element.componentProvider = g)
        }
        if (u ? (u.childFlags |= g.flags, u.directChildFlags |= g.flags, u.childMatchedQueries |= g.matchedQueryIds, g.element && g.element.template && (u.childMatchedQueries |= g.element.template.nodeMatchedQueries)) : a |= g.flags, g.childCount > 0) u = g, mi(g) || (c = g); else for (; u && f === u.nodeIndex + u.childCount;) {
          var m = u.parent;
          m && (m.childFlags |= u.childFlags, m.childMatchedQueries |= u.childMatchedQueries), c = (u = m) && mi(u) ? u.renderParent : u
        }
      }
      return {
        factory: null,
        nodeFlags: s,
        rootNodeFlags: a,
        nodeMatchedQueries: l,
        flags: e,
        nodes: t,
        updateDirectives: n || kr,
        updateRenderer: r || kr,
        handleEvent: function (e, n, r, o) {
          return t[n].element.handleEvent(e, r, o)
        },
        bindingCount: o,
        outputCount: i,
        lastRenderRootNode: h
      }
    }

    function mi(e) {
      return 0 != (1 & e.flags) && null === e.element.name
    }

    function bi(e, t, n) {
      var r = t.element && t.element.template;
      if (r) {
        if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
        if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + t.nodeIndex + "!")
      }
      if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + t.nodeIndex + "!");
      if (t.query) {
        if (67108864 & t.flags && (!e || 0 == (16384 & e.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + t.nodeIndex + "!");
        if (134217728 & t.flags && e) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + t.nodeIndex + "!")
      }
      if (t.childCount) {
        var o = e ? e.nodeIndex + e.childCount : n - 1;
        if (t.nodeIndex <= o && t.nodeIndex + t.childCount > o) throw new Error("Illegal State: childCount of node leads outside of parent, at index " + t.nodeIndex + "!")
      }
    }

    function _i(e, t, n, r) {
      var o = Ci(e.root, e.renderer, e, t, n);
      return Ei(o, e.component, r), Ti(o), o
    }

    function wi(e, t, n) {
      var r = Ci(e, e.renderer, null, null, t);
      return Ei(r, n, n), Ti(r), r
    }

    function xi(e, t, n, r) {
      var o, i = t.element.componentRendererType;
      return o = i ? e.root.rendererFactory.createRenderer(r, i) : e.root.renderer, Ci(e.root, o, e, t.element.componentProvider, n)
    }

    function Ci(e, t, n, r, o) {
      var i = new Array(o.nodes.length), s = o.outputCount ? new Array(o.outputCount) : null;
      return {
        def: o,
        parent: n,
        viewContainerParent: null,
        parentNodeDef: r,
        context: null,
        component: null,
        nodes: i,
        state: 13,
        root: e,
        renderer: t,
        oldValues: new Array(o.bindingCount),
        disposables: s,
        initIndex: -1
      }
    }

    function Ei(e, t, n) {
      e.component = t, e.context = n
    }

    function Ti(e) {
      var t;
      Br(e) && (t = mr(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
      for (var n = e.def, r = e.nodes, o = 0; o < n.nodes.length; o++) {
        var i = n.nodes[o];
        xr.setCurrentNode(e, o);
        var s = void 0;
        switch (201347067 & i.flags) {
          case 1:
            var a = io(e, t, i), l = void 0;
            if (33554432 & i.flags) {
              var u = Xr(i.element.componentView);
              l = xr.createComponentView(e, i, u, a)
            }
            so(e, l, i, a), s = {
              renderElement: a,
              componentView: l,
              viewContainer: null,
              template: i.element.template ? Po(e, i) : void 0
            }, 16777216 & i.flags && (s.viewContainer = ko(e, i, s));
            break;
          case 2:
            s = gi(e, t, i);
            break;
          case 512:
          case 1024:
          case 2048:
          case 256:
            (s = r[o]) || 4096 & i.flags || (s = {instance: Qo(e, i)});
            break;
          case 16:
            s = {instance: Yo(e, i)};
            break;
          case 16384:
            (s = r[o]) || (s = {instance: Ko(e, i)}), 32768 & i.flags && Ei(mr(e, i.parent.nodeIndex).componentView, s.instance, s.instance);
            break;
          case 32:
          case 64:
          case 128:
            s = {value: void 0};
            break;
          case 67108864:
          case 134217728:
            s = new un;
            break;
          case 8:
            di(e, t, i), s = void 0
        }
        r[o] = s
      }
      Vi(e, Ni.CreateViewNodes), Hi(e, 201326592, 268435456, 0)
    }

    function ki(e) {
      Oi(e), xr.updateDirectives(e, 1), Ri(e, Ni.CheckNoChanges), xr.updateRenderer(e, 1), Vi(e, Ni.CheckNoChanges), e.state &= -97
    }

    function Si(e) {
      1 & e.state ? (e.state &= -2, e.state |= 2) : e.state &= -3, gr(e, 0, 256), Oi(e), xr.updateDirectives(e, 0), Ri(e, Ni.CheckAndUpdate), Hi(e, 67108864, 536870912, 0);
      var t = gr(e, 256, 512);
      ii(e, 2097152 | (t ? 1048576 : 0)), xr.updateRenderer(e, 0), Vi(e, Ni.CheckAndUpdate), Hi(e, 134217728, 536870912, 0), ii(e, 8388608 | ((t = gr(e, 512, 768)) ? 4194304 : 0)), 2 & e.def.flags && (e.state &= -9), e.state &= -97, gr(e, 768, 1024)
    }

    function Ii(e, t, n, r, o, i, s, a, u, c, p, d, h) {
      return 0 === n ? function (e, t, n, r, o, i, s, a, l, u, c, p) {
        switch (201347067 & t.flags) {
          case 1:
            return function (e, t, n, r, o, i, s, a, l, u, c, p) {
              var d = t.bindings.length, h = !1;
              return d > 0 && lo(e, t, 0, n) && (h = !0), d > 1 && lo(e, t, 1, r) && (h = !0), d > 2 && lo(e, t, 2, o) && (h = !0), d > 3 && lo(e, t, 3, i) && (h = !0), d > 4 && lo(e, t, 4, s) && (h = !0), d > 5 && lo(e, t, 5, a) && (h = !0), d > 6 && lo(e, t, 6, l) && (h = !0), d > 7 && lo(e, t, 7, u) && (h = !0), d > 8 && lo(e, t, 8, c) && (h = !0), d > 9 && lo(e, t, 9, p) && (h = !0), h
            }(e, t, n, r, o, i, s, a, l, u, c, p);
          case 2:
            return function (e, t, n, r, o, i, s, a, l, u, c, p) {
              var d = !1, h = t.bindings, f = h.length;
              if (f > 0 && Vr(e, t, 0, n) && (d = !0), f > 1 && Vr(e, t, 1, r) && (d = !0), f > 2 && Vr(e, t, 2, o) && (d = !0), f > 3 && Vr(e, t, 3, i) && (d = !0), f > 4 && Vr(e, t, 4, s) && (d = !0), f > 5 && Vr(e, t, 5, a) && (d = !0), f > 6 && Vr(e, t, 6, l) && (d = !0), f > 7 && Vr(e, t, 7, u) && (d = !0), f > 8 && Vr(e, t, 8, c) && (d = !0), f > 9 && Vr(e, t, 9, p) && (d = !0), d) {
                var g = t.text.prefix;
                f > 0 && (g += vi(n, h[0])), f > 1 && (g += vi(r, h[1])), f > 2 && (g += vi(o, h[2])), f > 3 && (g += vi(i, h[3])), f > 4 && (g += vi(s, h[4])), f > 5 && (g += vi(a, h[5])), f > 6 && (g += vi(l, h[6])), f > 7 && (g += vi(u, h[7])), f > 8 && (g += vi(c, h[8])), f > 9 && (g += vi(p, h[9]));
                var v = yr(e, t.nodeIndex).renderText;
                e.renderer.setValue(v, g)
              }
              return d
            }(e, t, n, r, o, i, s, a, l, u, c, p);
          case 16384:
            return function (e, t, n, r, o, i, s, a, l, u, c, p) {
              var d = br(e, t.nodeIndex), h = d.instance, f = !1, g = void 0, v = t.bindings.length;
              return v > 0 && Nr(e, t, 0, n) && (f = !0, g = oi(e, d, t, 0, n, g)), v > 1 && Nr(e, t, 1, r) && (f = !0, g = oi(e, d, t, 1, r, g)), v > 2 && Nr(e, t, 2, o) && (f = !0, g = oi(e, d, t, 2, o, g)), v > 3 && Nr(e, t, 3, i) && (f = !0, g = oi(e, d, t, 3, i, g)), v > 4 && Nr(e, t, 4, s) && (f = !0, g = oi(e, d, t, 4, s, g)), v > 5 && Nr(e, t, 5, a) && (f = !0, g = oi(e, d, t, 5, a, g)), v > 6 && Nr(e, t, 6, l) && (f = !0, g = oi(e, d, t, 6, l, g)), v > 7 && Nr(e, t, 7, u) && (f = !0, g = oi(e, d, t, 7, u, g)), v > 8 && Nr(e, t, 8, c) && (f = !0, g = oi(e, d, t, 8, c, g)), v > 9 && Nr(e, t, 9, p) && (f = !0, g = oi(e, d, t, 9, p, g)), g && h.ngOnChanges(g), 65536 & t.flags && vr(e, 256, t.nodeIndex) && h.ngOnInit(), 262144 & t.flags && h.ngDoCheck(), f
            }(e, t, n, r, o, i, s, a, l, u, c, p);
          case 32:
          case 64:
          case 128:
            return function (e, t, n, r, o, i, s, a, l, u, c, p) {
              var d = t.bindings, h = !1, f = d.length;
              if (f > 0 && Vr(e, t, 0, n) && (h = !0), f > 1 && Vr(e, t, 1, r) && (h = !0), f > 2 && Vr(e, t, 2, o) && (h = !0), f > 3 && Vr(e, t, 3, i) && (h = !0), f > 4 && Vr(e, t, 4, s) && (h = !0), f > 5 && Vr(e, t, 5, a) && (h = !0), f > 6 && Vr(e, t, 6, l) && (h = !0), f > 7 && Vr(e, t, 7, u) && (h = !0), f > 8 && Vr(e, t, 8, c) && (h = !0), f > 9 && Vr(e, t, 9, p) && (h = !0), h) {
                var g = _r(e, t.nodeIndex), v = void 0;
                switch (201347067 & t.flags) {
                  case 32:
                    v = new Array(d.length), f > 0 && (v[0] = n), f > 1 && (v[1] = r), f > 2 && (v[2] = o), f > 3 && (v[3] = i), f > 4 && (v[4] = s), f > 5 && (v[5] = a), f > 6 && (v[6] = l), f > 7 && (v[7] = u), f > 8 && (v[8] = c), f > 9 && (v[9] = p);
                    break;
                  case 64:
                    v = {}, f > 0 && (v[d[0].name] = n), f > 1 && (v[d[1].name] = r), f > 2 && (v[d[2].name] = o), f > 3 && (v[d[3].name] = i), f > 4 && (v[d[4].name] = s), f > 5 && (v[d[5].name] = a), f > 6 && (v[d[6].name] = l), f > 7 && (v[d[7].name] = u), f > 8 && (v[d[8].name] = c), f > 9 && (v[d[9].name] = p);
                    break;
                  case 128:
                    var y = n;
                    switch (f) {
                      case 1:
                        v = y.transform(n);
                        break;
                      case 2:
                        v = y.transform(r);
                        break;
                      case 3:
                        v = y.transform(r, o);
                        break;
                      case 4:
                        v = y.transform(r, o, i);
                        break;
                      case 5:
                        v = y.transform(r, o, i, s);
                        break;
                      case 6:
                        v = y.transform(r, o, i, s, a);
                        break;
                      case 7:
                        v = y.transform(r, o, i, s, a, l);
                        break;
                      case 8:
                        v = y.transform(r, o, i, s, a, l, u);
                        break;
                      case 9:
                        v = y.transform(r, o, i, s, a, l, u, c);
                        break;
                      case 10:
                        v = y.transform(r, o, i, s, a, l, u, c, p)
                    }
                }
                g.value = v
              }
              return h
            }(e, t, n, r, o, i, s, a, l, u, c, p);
          default:
            throw"unreachable"
        }
      }(e, t, r, o, i, s, a, u, c, p, d, h) : function (e, t, n) {
        switch (201347067 & t.flags) {
          case 1:
            return function (e, t, n) {
              for (var r = !1, o = 0; o < n.length; o++) lo(e, t, o, n[o]) && (r = !0);
              return r
            }(e, t, n);
          case 2:
            return function (e, t, n) {
              for (var r = t.bindings, o = !1, i = 0; i < n.length; i++) Vr(e, t, i, n[i]) && (o = !0);
              if (o) {
                var s = "";
                for (i = 0; i < n.length; i++) s += vi(n[i], r[i]);
                s = t.text.prefix + s;
                var a = yr(e, t.nodeIndex).renderText;
                e.renderer.setValue(a, s)
              }
              return o
            }(e, t, n);
          case 16384:
            return function (e, t, n) {
              for (var r = br(e, t.nodeIndex), o = r.instance, i = !1, s = void 0, a = 0; a < n.length; a++) Nr(e, t, a, n[a]) && (i = !0, s = oi(e, r, t, a, n[a], s));
              return s && o.ngOnChanges(s), 65536 & t.flags && vr(e, 256, t.nodeIndex) && o.ngOnInit(), 262144 & t.flags && o.ngDoCheck(), i
            }(e, t, n);
          case 32:
          case 64:
          case 128:
            return function (e, t, n) {
              for (var r = t.bindings, o = !1, i = 0; i < n.length; i++) Vr(e, t, i, n[i]) && (o = !0);
              if (o) {
                var s = _r(e, t.nodeIndex), a = void 0;
                switch (201347067 & t.flags) {
                  case 32:
                    a = n;
                    break;
                  case 64:
                    for (a = {}, i = 0; i < n.length; i++) a[r[i].name] = n[i];
                    break;
                  case 128:
                    var u = n[0], c = n.slice(1);
                    a = u.transform.apply(u, l(c))
                }
                s.value = a
              }
              return o
            }(e, t, n);
          default:
            throw"unreachable"
        }
      }(e, t, r)
    }

    function Oi(e) {
      var t = e.def;
      if (4 & t.nodeFlags) for (var n = 0; n < t.nodes.length; n++) {
        var r = t.nodes[n];
        if (4 & r.flags) {
          var o = mr(e, n).template._projectedViews;
          if (o) for (var i = 0; i < o.length; i++) {
            var s = o[i];
            s.state |= 32, jr(s, e)
          }
        } else 0 == (4 & r.childFlags) && (n += r.childCount)
      }
    }

    function Pi(e, t, n, r, o, i, s, a, l, u, c, p, d) {
      return 0 === n ? function (e, t, n, r, o, i, s, a, l, u, c, p) {
        var d = t.bindings.length;
        d > 0 && Rr(e, t, 0, n), d > 1 && Rr(e, t, 1, r), d > 2 && Rr(e, t, 2, o), d > 3 && Rr(e, t, 3, i), d > 4 && Rr(e, t, 4, s), d > 5 && Rr(e, t, 5, a), d > 6 && Rr(e, t, 6, l), d > 7 && Rr(e, t, 7, u), d > 8 && Rr(e, t, 8, c), d > 9 && Rr(e, t, 9, p)
      }(e, t, r, o, i, s, a, l, u, c, p, d) : function (e, t, n) {
        for (var r = 0; r < n.length; r++) Rr(e, t, r, n[r])
      }(e, t, r), !1
    }

    function Ai(e, t) {
      if (wr(e, t.nodeIndex).dirty) throw Cr(xr.createDebugContext(e, t.nodeIndex), "Query " + t.query.id + " not dirty", "Query " + t.query.id + " dirty", 0 != (1 & e.state))
    }

    function Mi(e) {
      if (!(128 & e.state)) {
        if (Ri(e, Ni.Destroy), Vi(e, Ni.Destroy), ii(e, 131072), e.disposables) for (var t = 0; t < e.disposables.length; t++) e.disposables[t]();
        !function (e) {
          if (16 & e.state) {
            var t = Fr(e);
            if (t) {
              var n = t.template._projectedViews;
              n && (wo(n, n.indexOf(e)), xr.dirtyParentQueries(e))
            }
          }
        }(e), e.renderer.destroyNode && function (e) {
          for (var t = e.def.nodes.length, n = 0; n < t; n++) {
            var r = e.def.nodes[n];
            1 & r.flags ? e.renderer.destroyNode(mr(e, n).renderElement) : 2 & r.flags ? e.renderer.destroyNode(yr(e, n).renderText) : (67108864 & r.flags || 134217728 & r.flags) && wr(e, n).destroy()
          }
        }(e), Br(e) && e.renderer.destroy(), e.state |= 128
      }
    }

    var Ni = function (e) {
      return e[e.CreateViewNodes = 0] = "CreateViewNodes", e[e.CheckNoChanges = 1] = "CheckNoChanges", e[e.CheckNoChangesProjectedViews = 2] = "CheckNoChangesProjectedViews", e[e.CheckAndUpdate = 3] = "CheckAndUpdate", e[e.CheckAndUpdateProjectedViews = 4] = "CheckAndUpdateProjectedViews", e[e.Destroy = 5] = "Destroy", e
    }({});

    function Vi(e, t) {
      var n = e.def;
      if (33554432 & n.nodeFlags) for (var r = 0; r < n.nodes.length; r++) {
        var o = n.nodes[r];
        33554432 & o.flags ? Di(mr(e, r).componentView, t) : 0 == (33554432 & o.childFlags) && (r += o.childCount)
      }
    }

    function Ri(e, t) {
      var n = e.def;
      if (16777216 & n.nodeFlags) for (var r = 0; r < n.nodes.length; r++) {
        var o = n.nodes[r];
        if (16777216 & o.flags) for (var i = mr(e, r).viewContainer._embeddedViews, s = 0; s < i.length; s++) Di(i[s], t); else 0 == (16777216 & o.childFlags) && (r += o.childCount)
      }
    }

    function Di(e, t) {
      var n = e.state;
      switch (t) {
        case Ni.CheckNoChanges:
          0 == (128 & n) && (12 == (12 & n) ? ki(e) : 64 & n && ji(e, Ni.CheckNoChangesProjectedViews));
          break;
        case Ni.CheckNoChangesProjectedViews:
          0 == (128 & n) && (32 & n ? ki(e) : 64 & n && ji(e, t));
          break;
        case Ni.CheckAndUpdate:
          0 == (128 & n) && (12 == (12 & n) ? Si(e) : 64 & n && ji(e, Ni.CheckAndUpdateProjectedViews));
          break;
        case Ni.CheckAndUpdateProjectedViews:
          0 == (128 & n) && (32 & n ? Si(e) : 64 & n && ji(e, t));
          break;
        case Ni.Destroy:
          Mi(e);
          break;
        case Ni.CreateViewNodes:
          Ti(e)
      }
    }

    function ji(e, t) {
      Ri(e, t), Vi(e, t)
    }

    function Hi(e, t, n, r) {
      if (e.def.nodeFlags & t && e.def.nodeFlags & n) for (var o = e.def.nodes.length, i = 0; i < o; i++) {
        var s = e.def.nodes[i];
        if (s.flags & t && s.flags & n) switch (xr.setCurrentNode(e, s.nodeIndex), r) {
          case 0:
            ui(e, s);
            break;
          case 1:
            Ai(e, s)
        }
        s.childFlags & t && s.childFlags & n || (i += s.childCount)
      }
    }

    var Fi = !1;

    function zi(e, t, n, r, o, i) {
      var s = o.injector.get(on);
      return wi(Bi(e, o, s, t, n), r, i)
    }

    function Li(e, t, n, r, o, i) {
      var s = o.injector.get(on), a = Bi(e, o, new xs(s), t, n), l = Gi(r);
      return _s(as.create, wi, null, [a, l, i])
    }

    function Bi(e, t, n, r, o) {
      var i = t.injector.get(fr), s = t.injector.get(nt), a = n.createRenderer(null, null);
      return {
        ngModule: t,
        injector: e,
        projectableNodes: r,
        selectorOrNode: o,
        sanitizer: i,
        rendererFactory: n,
        renderer: a,
        errorHandler: s
      }
    }

    function Ui(e, t, n, r) {
      var o = Gi(n);
      return _s(as.create, _i, null, [e, t, o, r])
    }

    function Zi(e, t, n, r) {
      return n = Xi.get(t.element.componentProvider.provider.token) || Gi(n), _s(as.create, xi, null, [e, t, n, r])
    }

    function qi(e, t, n, r) {
      return jo(e, t, n, function (e) {
        var t = function (e) {
          var t = !1, n = !1;
          return 0 === $i.size ? {hasOverrides: t, hasDeprecatedOverrides: n} : (e.providers.forEach(function (e) {
            var r = $i.get(e.token);
            3840 & e.flags && r && (t = !0, n = n || r.deprecatedBehavior)
          }), e.modules.forEach(function (e) {
            Wi.forEach(function (r, o) {
              o.ngInjectableDef.providedIn === e && (t = !0, n = n || r.deprecatedBehavior)
            })
          }), {hasOverrides: t, hasDeprecatedOverrides: n})
        }(e), n = t.hasDeprecatedOverrides;
        return t.hasOverrides ? (function (e) {
          for (var t = 0; t < e.providers.length; t++) {
            var r = e.providers[t];
            n && (r.flags |= 4096);
            var o = $i.get(r.token);
            o && (r.flags = -3841 & r.flags | o.flags, r.deps = qr(o.deps), r.value = o.value)
          }
          if (Wi.size > 0) {
            var i = new Set(e.modules);
            Wi.forEach(function (t, r) {
              if (i.has(r.ngInjectableDef.providedIn)) {
                var o = {
                  token: r,
                  flags: t.flags | (n ? 4096 : 0),
                  deps: qr(t.deps),
                  value: t.value,
                  index: e.providers.length
                };
                e.providers.push(o), e.providersByKey[Ir(r)] = o
              }
            })
          }
        }(e = e.factory(function () {
          return kr
        })), e) : e
      }(r))
    }

    var $i = new Map, Wi = new Map, Xi = new Map;

    function Qi(e) {
      $i.set(e.token, e), "function" == typeof e.token && e.token.ngInjectableDef && "function" == typeof e.token.ngInjectableDef.providedIn && Wi.set(e.token, e)
    }

    function Yi(e, t) {
      var n = Xr(t.viewDefFactory), r = Xr(n.nodes[0].element.componentView);
      Xi.set(e, r)
    }

    function Ki() {
      $i.clear(), Wi.clear(), Xi.clear()
    }

    function Gi(e) {
      if (0 === $i.size) return e;
      var t = function (e) {
        for (var t = [], n = null, r = 0; r < e.nodes.length; r++) {
          var o = e.nodes[r];
          1 & o.flags && (n = o), n && 3840 & o.flags && $i.has(o.provider.token) && (t.push(n.nodeIndex), n = null)
        }
        return t
      }(e);
      if (0 === t.length) return e;
      e = e.factory(function () {
        return kr
      });
      for (var n = 0; n < t.length; n++) r(e, t[n]);
      return e;

      function r(e, t) {
        for (var n = t + 1; n < e.nodes.length; n++) {
          var r = e.nodes[n];
          if (1 & r.flags) return;
          if (3840 & r.flags) {
            var o = r.provider, i = $i.get(o.token);
            i && (r.flags = -3841 & r.flags | i.flags, o.deps = qr(i.deps), o.value = i.value)
          }
        }
      }
    }

    function Ji(e, t, n, r, o, i, s, a, l, u, c, p, d) {
      var h = e.def.nodes[t];
      return Ii(e, h, n, r, o, i, s, a, l, u, c, p, d), 224 & h.flags ? _r(e, t).value : void 0
    }

    function es(e, t, n, r, o, i, s, a, l, u, c, p, d) {
      var h = e.def.nodes[t];
      return Pi(e, h, n, r, o, i, s, a, l, u, c, p, d), 224 & h.flags ? _r(e, t).value : void 0
    }

    function ts(e) {
      return _s(as.detectChanges, Si, null, [e])
    }

    function ns(e) {
      return _s(as.checkNoChanges, ki, null, [e])
    }

    function rs(e) {
      return _s(as.destroy, Mi, null, [e])
    }

    var os, is, ss, as = function (e) {
      return e[e.create = 0] = "create", e[e.detectChanges = 1] = "detectChanges", e[e.checkNoChanges = 2] = "checkNoChanges", e[e.destroy = 3] = "destroy", e[e.handleEvent = 4] = "handleEvent", e
    }({});

    function ls(e, t) {
      is = e, ss = t
    }

    function us(e, t, n, r) {
      return ls(e, t), _s(as.handleEvent, e.def.handleEvent, null, [e, t, n, r])
    }

    function cs(e, t) {
      if (128 & e.state) throw Tr(as[os]);
      return ls(e, vs(e, 0)), e.def.updateDirectives(function (e, n, r) {
        for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
        var s = e.def.nodes[n];
        return 0 === t ? ds(e, s, r, o) : hs(e, s, r, o), 16384 & s.flags && ls(e, vs(e, n)), 224 & s.flags ? _r(e, s.nodeIndex).value : void 0
      }, e)
    }

    function ps(e, t) {
      if (128 & e.state) throw Tr(as[os]);
      return ls(e, ys(e, 0)), e.def.updateRenderer(function (e, n, r) {
        for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
        var s = e.def.nodes[n];
        return 0 === t ? ds(e, s, r, o) : hs(e, s, r, o), 3 & s.flags && ls(e, ys(e, n)), 224 & s.flags ? _r(e, s.nodeIndex).value : void 0
      }, e)
    }

    function ds(e, t, n, r) {
      if (Ii.apply(void 0, l([e, t, n], r))) {
        var o = 1 === n ? r[0] : r;
        if (16384 & t.flags) {
          for (var i = {}, s = 0; s < t.bindings.length; s++) {
            var a = t.bindings[s], u = o[s];
            8 & a.flags && (i[(h = a.nonMinifiedName, f = void 0, f = h.replace(/[$@]/g, "_"), "ng-reflect-" + (h = f.replace(fs, function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              return "-" + e[1].toLowerCase()
            })))] = gs(u))
          }
          var c = t.parent, p = mr(e, c.nodeIndex).renderElement;
          if (c.element.name) for (var d in i) null != (u = i[d]) ? e.renderer.setAttribute(p, d, u) : e.renderer.removeAttribute(p, d); else e.renderer.setValue(p, "bindings=" + JSON.stringify(i, null, 2))
        }
      }
      var h, f
    }

    function hs(e, t, n, r) {
      Pi.apply(void 0, l([e, t, n], r))
    }

    var fs = /([A-Z])/g;

    function gs(e) {
      try {
        return null != e ? e.toString().slice(0, 30) : e
      } catch (t) {
        return "[ERROR] Exception while trying to serialize the value"
      }
    }

    function vs(e, t) {
      for (var n = t; n < e.def.nodes.length; n++) {
        var r = e.def.nodes[n];
        if (16384 & r.flags && r.bindings && r.bindings.length) return n
      }
      return null
    }

    function ys(e, t) {
      for (var n = t; n < e.def.nodes.length; n++) {
        var r = e.def.nodes[n];
        if (3 & r.flags && r.bindings && r.bindings.length) return n
      }
      return null
    }

    var ms = function () {
      function e(e, t) {
        this.view = e, this.nodeIndex = t, null == t && (this.nodeIndex = t = 0), this.nodeDef = e.def.nodes[t];
        for (var n = this.nodeDef, r = e; n && 0 == (1 & n.flags);) n = n.parent;
        if (!n) for (; !n && r;) n = zr(r), r = r.parent;
        this.elDef = n, this.elView = r
      }

      return Object.defineProperty(e.prototype, "elOrCompView", {
        get: function () {
          return mr(this.elView, this.elDef.nodeIndex).componentView || this.view
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "injector", {
        get: function () {
          return Mo(this.elView, this.elDef)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "component", {
        get: function () {
          return this.elOrCompView.component
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "context", {
        get: function () {
          return this.elOrCompView.context
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "providerTokens", {
        get: function () {
          var e = [];
          if (this.elDef) for (var t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) {
            var n = this.elView.def.nodes[t];
            20224 & n.flags && e.push(n.provider.token), t += n.childCount
          }
          return e
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "references", {
        get: function () {
          var e = {};
          if (this.elDef) {
            bs(this.elView, this.elDef, e);
            for (var t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) {
              var n = this.elView.def.nodes[t];
              20224 & n.flags && bs(this.elView, n, e), t += n.childCount
            }
          }
          return e
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "componentRenderElement", {
        get: function () {
          var e = function (e) {
            for (; e && !Br(e);) e = e.parent;
            return e.parent ? mr(e.parent, zr(e).nodeIndex) : null
          }(this.elOrCompView);
          return e ? e.renderElement : void 0
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "renderNode", {
        get: function () {
          return 2 & this.nodeDef.flags ? Lr(this.view, this.nodeDef) : Lr(this.elView, this.elDef)
        }, enumerable: !0, configurable: !0
      }), e.prototype.logError = function (e) {
        for (var t, n, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
        2 & this.nodeDef.flags ? (t = this.view.def, n = this.nodeDef.nodeIndex) : (t = this.elView.def, n = this.elDef.nodeIndex);
        var i = function (e, t) {
          for (var n = -1, r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
          return n
        }(t, n), s = -1;
        t.factory(function () {
          return ++s === i ? (t = e.error).bind.apply(t, l([e], r)) : kr;
          var t
        }), s < i && (e.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), e.error.apply(e, l(r)))
      }, e
    }();

    function bs(e, t, n) {
      for (var r in t.references) n[r] = pi(e, t, t.references[r])
    }

    function _s(e, t, n, r) {
      var o = os, i = is, s = ss;
      try {
        os = e;
        var a = t.apply(n, r);
        return is = i, ss = s, os = o, a
      } catch (l) {
        if (Je(l) || !is) throw l;
        throw function (e, t) {
          return e instanceof Error || (e = new Error(e.toString())), Er(e, t), e
        }(l, ws())
      }
    }

    function ws() {
      return is ? new ms(is, ss) : null
    }

    var xs = function () {
      function e(e) {
        this.delegate = e
      }

      return e.prototype.createRenderer = function (e, t) {
        return new Cs(this.delegate.createRenderer(e, t))
      }, e.prototype.begin = function () {
        this.delegate.begin && this.delegate.begin()
      }, e.prototype.end = function () {
        this.delegate.end && this.delegate.end()
      }, e.prototype.whenRenderingDone = function () {
        return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null)
      }, e
    }(), Cs = function () {
      function e(e) {
        this.delegate = e, this.data = this.delegate.data
      }

      return e.prototype.destroyNode = function (e) {
        !function (e) {
          vn.delete(e.nativeNode)
        }(yn(e)), this.delegate.destroyNode && this.delegate.destroyNode(e)
      }, e.prototype.destroy = function () {
        this.delegate.destroy()
      }, e.prototype.createElement = function (e, t) {
        var n = this.delegate.createElement(e, t), r = ws();
        if (r) {
          var o = new gn(n, null, r);
          o.name = e, mn(o)
        }
        return n
      }, e.prototype.createComment = function (e) {
        var t = this.delegate.createComment(e), n = ws();
        return n && mn(new fn(t, null, n)), t
      }, e.prototype.createText = function (e) {
        var t = this.delegate.createText(e), n = ws();
        return n && mn(new fn(t, null, n)), t
      }, e.prototype.appendChild = function (e, t) {
        var n = yn(e), r = yn(t);
        n && r && n instanceof gn && n.addChild(r), this.delegate.appendChild(e, t)
      }, e.prototype.insertBefore = function (e, t, n) {
        var r = yn(e), o = yn(t), i = yn(n);
        r && o && r instanceof gn && r.insertBefore(i, o), this.delegate.insertBefore(e, t, n)
      }, e.prototype.removeChild = function (e, t) {
        var n = yn(e), r = yn(t);
        n && r && n instanceof gn && n.removeChild(r), this.delegate.removeChild(e, t)
      }, e.prototype.selectRootElement = function (e) {
        var t = this.delegate.selectRootElement(e), n = ws();
        return n && mn(new gn(t, null, n)), t
      }, e.prototype.setAttribute = function (e, t, n, r) {
        var o = yn(e);
        o && o instanceof gn && (o.attributes[r ? r + ":" + t : t] = n), this.delegate.setAttribute(e, t, n, r)
      }, e.prototype.removeAttribute = function (e, t, n) {
        var r = yn(e);
        r && r instanceof gn && (r.attributes[n ? n + ":" + t : t] = null), this.delegate.removeAttribute(e, t, n)
      }, e.prototype.addClass = function (e, t) {
        var n = yn(e);
        n && n instanceof gn && (n.classes[t] = !0), this.delegate.addClass(e, t)
      }, e.prototype.removeClass = function (e, t) {
        var n = yn(e);
        n && n instanceof gn && (n.classes[t] = !1), this.delegate.removeClass(e, t)
      }, e.prototype.setStyle = function (e, t, n, r) {
        var o = yn(e);
        o && o instanceof gn && (o.styles[t] = n), this.delegate.setStyle(e, t, n, r)
      }, e.prototype.removeStyle = function (e, t, n) {
        var r = yn(e);
        r && r instanceof gn && (r.styles[t] = null), this.delegate.removeStyle(e, t, n)
      }, e.prototype.setProperty = function (e, t, n) {
        var r = yn(e);
        r && r instanceof gn && (r.properties[t] = n), this.delegate.setProperty(e, t, n)
      }, e.prototype.listen = function (e, t, n) {
        if ("string" != typeof e) {
          var r = yn(e);
          r && r.listeners.push(new hn(t, n))
        }
        return this.delegate.listen(e, t, n)
      }, e.prototype.parentNode = function (e) {
        return this.delegate.parentNode(e)
      }, e.prototype.nextSibling = function (e) {
        return this.delegate.nextSibling(e)
      }, e.prototype.setValue = function (e, t) {
        return this.delegate.setValue(e, t)
      }, e
    }();

    function Es(e, t, n) {
      return new Ts(e, t, n)
    }

    var Ts = function (e) {
      function t(t, n, r) {
        var o = e.call(this) || this;
        return o.moduleType = t, o._bootstrapComponents = n, o._ngModuleDefFactory = r, o
      }

      return o(t, e), t.prototype.create = function (e) {
        !function () {
          if (!Fi) {
            Fi = !0;
            var e = Qt() ? {
              setCurrentNode: ls,
              createRootView: Li,
              createEmbeddedView: Ui,
              createComponentView: Zi,
              createNgModuleRef: qi,
              overrideProvider: Qi,
              overrideComponentView: Yi,
              clearOverrides: Ki,
              checkAndUpdateView: ts,
              checkNoChangesView: ns,
              destroyView: rs,
              createDebugContext: function (e, t) {
                return new ms(e, t)
              },
              handleEvent: us,
              updateDirectives: cs,
              updateRenderer: ps
            } : {
              setCurrentNode: function () {
              },
              createRootView: zi,
              createEmbeddedView: _i,
              createComponentView: xi,
              createNgModuleRef: jo,
              overrideProvider: kr,
              overrideComponentView: kr,
              clearOverrides: kr,
              checkAndUpdateView: Si,
              checkNoChangesView: ki,
              destroyView: Mi,
              createDebugContext: function (e, t) {
                return new ms(e, t)
              },
              handleEvent: function (e, t, n, r) {
                return e.def.handleEvent(e, t, n, r)
              },
              updateDirectives: function (e, t) {
                return e.def.updateDirectives(0 === t ? Ji : es, e)
              },
              updateRenderer: function (e, t) {
                return e.def.updateRenderer(0 === t ? Ji : es, e)
              }
            };
            xr.setCurrentNode = e.setCurrentNode, xr.createRootView = e.createRootView, xr.createEmbeddedView = e.createEmbeddedView, xr.createComponentView = e.createComponentView, xr.createNgModuleRef = e.createNgModuleRef, xr.overrideProvider = e.overrideProvider, xr.overrideComponentView = e.overrideComponentView, xr.clearOverrides = e.clearOverrides, xr.checkAndUpdateView = e.checkAndUpdateView, xr.checkNoChangesView = e.checkNoChangesView, xr.destroyView = e.destroyView, xr.resolveDep = ni, xr.createDebugContext = e.createDebugContext, xr.handleEvent = e.handleEvent, xr.updateDirectives = e.updateDirectives, xr.updateRenderer = e.updateRenderer, xr.dirtyParentQueries = li
          }
        }();
        var t = Xr(this._ngModuleDefFactory);
        return xr.createNgModuleRef(this.moduleType, e || Ae.NULL, this._bootstrapComponents, t)
      }, t
    }(It);
    n("yLV6");
    var ks = function () {
        return function () {
        }
      }(), Ss = function () {
        function e() {
          this.codeSnippetText = "Source Code", this.minValue2 = 1e3, this.maxValue2 = 2e3, this.step2 = 500, this.currentValues = [0, 0], this.currentValues2 = [2e3, 3500]
        }

        return e.prototype.onSliderChange = function (e) {
          this.currentValues = e
        }, e
      }(), Is = function () {
        return function () {
        }
      }(), Os = void 0,
      Ps = ["en", [["a", "p"], ["AM", "PM"], Os], [["AM", "PM"], Os, Os], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Os, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Os, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", Os, "{1} 'at' {0}", Os], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar", {}, function (e) {
        var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
        return 1 === t && 0 === n ? 1 : 5
      }], As = {}, Ms = function (e) {
        return e[e.Zero = 0] = "Zero", e[e.One = 1] = "One", e[e.Two = 2] = "Two", e[e.Few = 3] = "Few", e[e.Many = 4] = "Many", e[e.Other = 5] = "Other", e
      }({}), Ns = new le("UseV4Plurals"), Vs = function () {
        return function () {
        }
      }(), Rs = function (e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return r.locale = t, r.deprecatedPluralFn = n, r
        }

        return o(t, e), t.prototype.getPluralCategory = function (e, t) {
          switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(t || this.locale, e) : function (e) {
            return function (e) {
              var t = e.toLowerCase().replace(/_/g, "-"), n = As[t];
              if (n) return n;
              var r = t.split("-")[0];
              if (n = As[r]) return n;
              if ("en" === r) return Ps;
              throw new Error('Missing locale data for the locale "' + e + '".')
            }(e)[18]
          }(t || this.locale)(e)) {
            case Ms.Zero:
              return "zero";
            case Ms.One:
              return "one";
            case Ms.Two:
              return "two";
            case Ms.Few:
              return "few";
            case Ms.Many:
              return "many";
            default:
              return "other"
          }
        }, t
      }(Vs), Ds = function () {
        function e(e, t, n, r) {
          this._iterableDiffers = e, this._keyValueDiffers = t, this._ngEl = n, this._renderer = r, this._initialClasses = []
        }

        return Object.defineProperty(e.prototype, "klass", {
          set: function (e) {
            this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof e ? e.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
          }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "ngClass", {
          set: function (e) {
            this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof e ? e.split(/\s+/) : e, this._rawClass && (xn(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
          }, enumerable: !0, configurable: !0
        }), e.prototype.ngDoCheck = function () {
          if (this._iterableDiffer) {
            var e = this._iterableDiffer.diff(this._rawClass);
            e && this._applyIterableChanges(e)
          } else if (this._keyValueDiffer) {
            var t = this._keyValueDiffer.diff(this._rawClass);
            t && this._applyKeyValueChanges(t)
          }
        }, e.prototype._applyKeyValueChanges = function (e) {
          var t = this;
          e.forEachAddedItem(function (e) {
            return t._toggleClass(e.key, e.currentValue)
          }), e.forEachChangedItem(function (e) {
            return t._toggleClass(e.key, e.currentValue)
          }), e.forEachRemovedItem(function (e) {
            e.previousValue && t._toggleClass(e.key, !1)
          })
        }, e.prototype._applyIterableChanges = function (e) {
          var t = this;
          e.forEachAddedItem(function (e) {
            if ("string" != typeof e.item) throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + _e(e.item));
            t._toggleClass(e.item, !0)
          }), e.forEachRemovedItem(function (e) {
            return t._toggleClass(e.item, !1)
          })
        }, e.prototype._applyClasses = function (e) {
          var t = this;
          e && (Array.isArray(e) || e instanceof Set ? e.forEach(function (e) {
            return t._toggleClass(e, !0)
          }) : Object.keys(e).forEach(function (n) {
            return t._toggleClass(n, !!e[n])
          }))
        }, e.prototype._removeClasses = function (e) {
          var t = this;
          e && (Array.isArray(e) || e instanceof Set ? e.forEach(function (e) {
            return t._toggleClass(e, !1)
          }) : Object.keys(e).forEach(function (e) {
            return t._toggleClass(e, !1)
          }))
        }, e.prototype._toggleClass = function (e, t) {
          var n = this;
          (e = e.trim()) && e.split(/\s+/g).forEach(function (e) {
            t ? n._renderer.addClass(n._ngEl.nativeElement, e) : n._renderer.removeClass(n._ngEl.nativeElement, e)
          })
        }, e
      }(), js = function () {
        function e(e, t, n, r) {
          this.$implicit = e, this.ngForOf = t, this.index = n, this.count = r
        }

        return Object.defineProperty(e.prototype, "first", {
          get: function () {
            return 0 === this.index
          }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "last", {
          get: function () {
            return this.index === this.count - 1
          }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "even", {
          get: function () {
            return this.index % 2 == 0
          }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "odd", {
          get: function () {
            return !this.even
          }, enumerable: !0, configurable: !0
        }), e
      }(), Hs = function () {
        function e(e, t, n) {
          this._viewContainer = e, this._template = t, this._differs = n, this._differ = null
        }

        return Object.defineProperty(e.prototype, "ngForTrackBy", {
          get: function () {
            return this._trackByFn
          }, set: function (e) {
            Qt() && null != e && "function" != typeof e && console && console.warn && console.warn("trackBy must be a function, but received " + JSON.stringify(e) + ". See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), this._trackByFn = e
          }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "ngForTemplate", {
          set: function (e) {
            e && (this._template = e)
          }, enumerable: !0, configurable: !0
        }), e.prototype.ngOnChanges = function (e) {
          if ("ngForOf" in e) {
            var t = e.ngForOf.currentValue;
            if (!this._differ && t) try {
              this._differ = this._differs.find(t).create(this.ngForTrackBy)
            } catch (r) {
              throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((n = t).name || typeof n) + "'. NgFor only supports binding to Iterables such as Arrays.")
            }
          }
          var n
        }, e.prototype.ngDoCheck = function () {
          if (this._differ) {
            var e = this._differ.diff(this.ngForOf);
            e && this._applyChanges(e)
          }
        }, e.prototype._applyChanges = function (e) {
          var t = this, n = [];
          e.forEachOperation(function (e, r, o) {
            if (null == e.previousIndex) {
              var i = t._viewContainer.createEmbeddedView(t._template, new js(null, t.ngForOf, -1, -1), o),
                s = new Fs(e, i);
              n.push(s)
            } else null == o ? t._viewContainer.remove(r) : (i = t._viewContainer.get(r), t._viewContainer.move(i, o), s = new Fs(e, i), n.push(s))
          });
          for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record);
          r = 0;
          for (var o = this._viewContainer.length; r < o; r++) {
            var i = this._viewContainer.get(r);
            i.context.index = r, i.context.count = o
          }
          e.forEachIdentityChange(function (e) {
            t._viewContainer.get(e.currentIndex).context.$implicit = e.item
          })
        }, e.prototype._perViewChange = function (e, t) {
          e.context.$implicit = t.item
        }, e
      }(), Fs = function () {
        return function (e, t) {
          this.record = e, this.view = t
        }
      }(), zs = function () {
        function e(e, t) {
          this._viewContainer = e, this._context = new Ls, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = t
        }

        return Object.defineProperty(e.prototype, "ngIf", {
          set: function (e) {
            this._context.$implicit = this._context.ngIf = e, this._updateView()
          }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "ngIfThen", {
          set: function (e) {
            Bs("ngIfThen", e), this._thenTemplateRef = e, this._thenViewRef = null, this._updateView()
          }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "ngIfElse", {
          set: function (e) {
            Bs("ngIfElse", e), this._elseTemplateRef = e, this._elseViewRef = null, this._updateView()
          }, enumerable: !0, configurable: !0
        }), e.prototype._updateView = function () {
          this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
        }, e
      }(), Ls = function () {
        return function () {
          this.$implicit = null, this.ngIf = null
        }
      }();

    function Bs(e, t) {
      if (t && !t.createEmbeddedView) throw new Error(e + " must be a TemplateRef, but received '" + _e(t) + "'.")
    }

    var Us = function () {
      function e() {
      }

      return e.prototype.transform = function (e) {
        return JSON.stringify(e, null, 2)
      }, e
    }(), Zs = function () {
      return function () {
      }
    }(), qs = new le("DocumentToken"), $s = "server", Ws = function () {
      function e() {
      }

      return e.prototype.isNumberArray = function (e) {
        return !(!e || !e.length || e.filter(function (e) {
          return !isNaN(e)
        }).length !== e.length)
      }, e.prototype.isNullOrEmpty = function (e) {
        return null == e || "" === e
      }, e.prototype.toBoolean = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return "" === e || "true" === e || -1 !== t.indexOf(e)
      }, e.prototype.findNextValidStepValue = function (e, t) {
        for (var n = [], r = [], o = Math.sqrt(e), i = -1, s = 0; s < o; s++) e % s == 0 && (e / s === s ? n.push(s) : (n.push(s), r.push(e / s)));
        for (s = 0; s < r.length; s++) if (t > r[s]) {
          i = r[s];
          break
        }
        if (-1 === i) for (s = n.length - 1; s >= 0; s--) if (t > n[s]) {
          i = n[s];
          break
        }
        return -1 === i ? 1 : i
      }, e
    }(), Xs = function (e) {
      return e[e.left = 0] = "left", e[e.right = 1] = "right", e
    }({}), Qs = function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return n.el = t, n.sliderModel = [0, 0, 0], n.step = 1, n.sliderWidth = 0, n.totalDiff = 0, n.startClientX = 0, n.startPleft = 0, n.startPRight = 0, n.sliderInitiated = !1, n.initValues = [], n.currentValues = [0, 0], n.handlerX = [0, 0], n.isHandlerActive = !1, n.isTouchEventStart = !1, n.isMouseEventStart = !1, n.currentHandlerIndex = 0, n.stepIndicatorPositions = [], n.isDisabled = !1, n.hideTooltip = !1, n.hideValues = !1, n.handlerIndex = Xs, n.showStepIndicator = !1, n.multiRange = !0, n.onChange = new Vt, n
      }

      return o(t, e), Object.defineProperty(t.prototype, "setMinValues", {
        set: function (e) {
          isNaN(e) || (this.minValue = Number(e))
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(t.prototype, "setMaxValues", {
        set: function (e) {
          isNaN(e) || (this.maxValue = Number(e))
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(t.prototype, "setMinSelectedValues", {
        set: function (e) {
          isNaN(e) || this.minSelected === Number(e) || (this.minSelected = Number(e))
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(t.prototype, "setMaxSelectedValues", {
        set: function (e) {
          isNaN(e) || this.maxSelected === Number(e) || (this.maxSelected = Number(e))
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(t.prototype, "stepValue", {
        set: function (e) {
          isNaN(e) || (this.step = Number(e))
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(t.prototype, "setHideTooltip", {
        set: function (e) {
          this.hideTooltip = this.toBoolean(e)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(t.prototype, "setHideValues", {
        set: function (e) {
          this.hideValues = this.toBoolean(e)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(t.prototype, "setDisabled", {
        set: function (e) {
          this.isDisabled = this.toBoolean(e, "disabled")
        }, enumerable: !0, configurable: !0
      }), t.prototype.ngOnInit = function () {
        this.initializeSlider()
      }, t.prototype.ngOnChanges = function (e) {
        if (this.sliderInitiated) {
          if (!this.isNullOrEmpty(e.setMinSelectedValues) && e.setMinSelectedValues.previousValue === e.setMinSelectedValues.currentValue) return;
          if (!this.isNullOrEmpty(e.setMaxSelectedValues) && e.setMaxSelectedValues.previousValue === e.setMaxSelectedValues.currentValue) return;
          this.resetModel()
        }
      }, t.prototype.initializeSlider = function () {
        try {
          this.sliderWidth = this.el.nativeElement.children[0].children[0].offsetWidth, this.resetModel(), this.sliderInitiated = !0
        } catch (e) {
          console.error(e)
        }
      }, t.prototype.resetModel = function () {
        if (this.validateSliderValues(), this.sliderModel = [this.currentValues[0] - this.initValues[0], this.currentValues[1] - this.currentValues[0], this.initValues[1] - this.currentValues[1]], this.totalDiff = this.sliderModel.reduce(function (e, t) {
          return e + t
        }, 0), this.totalDiff % this.step != 0) {
          var e = this.findNextValidStepValue(this.totalDiff, this.step);
          console.warn('Invalid step value "' + this.step + '" : and took "' + e + '" as default step'), this.step = e
        }
        this.initializeStepIndicator(), this.setHandlerPosition()
      }, t.prototype.validateSliderValues = function () {
        this.isNullOrEmpty(this.minValue) || this.isNullOrEmpty(this.maxValue) ? (this.updateInitValues([0, 0]), this.updateCurrentValue([0, 0], !0)) : this.minValue > this.maxValue ? (this.updateInitValues([0, 0]), this.updateCurrentValue([0, 0], !0)) : (this.initValues = [this.minValue, this.maxValue], (this.isNullOrEmpty(this.minSelected) || this.minSelected < this.minValue || this.minSelected > this.maxValue) && (this.minSelected = this.minValue), (this.isNullOrEmpty(this.maxSelected) || this.maxSelected < this.minValue || this.maxSelected > this.maxValue) && (this.maxSelected = this.maxValue), this.minSelected > this.maxSelected && (this.minSelected = this.minValue, this.maxSelected = this.maxValue), this.updateCurrentValue([this.minSelected, this.maxSelected], !0))
      }, t.prototype.initializeStepIndicator = function () {
        if (this.showStepIndicator) {
          this.stepIndicatorPositions.length = 0;
          var e = this.totalDiff / this.step;
          if (this.sliderWidth / e >= 10) for (var t = this.sliderWidth / e, n = t; this.stepIndicatorPositions.length < e - 1;) this.stepIndicatorPositions.push(+n.toFixed(2)), n += t; else console.warn("As 'step' value is too small compared to min & max value difference and slider width,\n          Step Indicator can't be displayed!. Provide slight large value for 'step'")
        } else this.stepIndicatorPositions.length = 0
      }, t.prototype.updateCurrentValue = function (e, t) {
        void 0 === t && (t = !1), this.minSelected = this.currentValues[0] = e[0], this.maxSelected = this.currentValues[1] = e[1], t || this.onChange.emit(this.multiRange ? this.currentValues : [this.currentValues[0]])
      }, t.prototype.updateInitValues = function (e) {
        this.minValue = this.initValues[0] = e[0], this.maxValue = this.initValues[1] = e[1]
      }, t.prototype.setHandlerPosition = function () {
        var e = 0;
        this.updateCurrentValue([this.initValues[0] + this.sliderModel[0], this.initValues[1] - this.sliderModel[2]]);
        for (var t = 0, n = this.sliderModel.length - 1; t < n; t++) this.handlerX[t] = (e += this.sliderModel[t]) / this.totalDiff * 100
      }, t.prototype.setModelValue = function (e, t) {
        this.step > 1 && (t = Math.round(t / this.step) * this.step), this.sliderModel[e] = t
      }, t.prototype.setHandlerActiveOff = function () {
        this.isMouseEventStart = !1, this.isTouchEventStart = !1, this.isHandlerActive = !1
      }, t.prototype.setHandlerActive = function (e, t) {
        e.preventDefault(), this.isDisabled || (this.isNullOrEmpty(e.clientX) ? this.isNullOrEmpty(e.deltaX) || (this.startClientX = e.deltaX, this.isTouchEventStart = !0, this.isMouseEventStart = !1) : (this.startClientX = e.clientX, this.isMouseEventStart = !0, this.isTouchEventStart = !1), (this.isMouseEventStart || this.isTouchEventStart) && (this.currentHandlerIndex = t, this.startPleft = this.sliderModel[t], this.startPRight = this.sliderModel[t + 1], this.isHandlerActive = !0))
      }, t.prototype.handlerSliding = function (e) {
        if (this.isMouseEventStart && e.clientX || this.isTouchEventStart && e.deltaX) {
          var t = Math.round(((e.clientX || e.deltaX) - this.startClientX) / this.sliderWidth * this.totalDiff),
            n = this.startPleft + t, r = this.startPRight - t;
          n >= 0 && r >= 0 && (this.setModelValue(this.currentHandlerIndex, n), this.setModelValue(this.currentHandlerIndex + 1, r), this.setHandlerPosition())
        }
      }, t
    }(Ws), Ys = Ar({
      encapsulation: 0,
      styles: [['.slider[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.slider[_ngcontent-%COMP%]{display:block;width:100%;height:30px;padding:4px 10px;cursor:default;font-size:12px}.slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{width:100%;background:#e8e8e8;height:10px;position:relative;border-radius:5px;box-shadow:inset 1px 1px 5px #bababa}.slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.left-handle[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.right-handle[_ngcontent-%COMP%]{display:inline-block;width:22px;height:22px;background:#bedcb2;border:7px solid #71b357;border-radius:50%;position:absolute;top:-7px;margin-left:-10px;z-index:1;cursor:pointer;transition:left .2s ease}.slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.left-handle.last-active[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.right-handle.last-active[_ngcontent-%COMP%]{z-index:2}.slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.left-handle[_ngcontent-%COMP%]   .handle-tooltip[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.right-handle[_ngcontent-%COMP%]   .handle-tooltip[_ngcontent-%COMP%]{display:block;position:absolute;top:-34px;left:-14px;border:1px solid #8fc37a;border-radius:4px;padding:1px 4px;min-width:20px;text-align:center;background:#d9ebd2;color:#71b357;font-weight:700;transition:opacity .2s ease;opacity:0}.slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.left-handle[_ngcontent-%COMP%]   .handle-tooltip[_ngcontent-%COMP%]:before, .slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.right-handle[_ngcontent-%COMP%]   .handle-tooltip[_ngcontent-%COMP%]:before{content:"";border:5px solid transparent;border-top-color:#8fc37a;position:absolute;top:104%;left:33%}.slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.left-handle[_ngcontent-%COMP%]   .handle-tooltip[_ngcontent-%COMP%]:after, .slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.right-handle[_ngcontent-%COMP%]   .handle-tooltip[_ngcontent-%COMP%]:after{content:"";border:5px solid transparent;border-top-color:#d9ebd2;position:absolute;top:100%;left:33%}.slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.left-handle.active[_ngcontent-%COMP%] > .handle-tooltip[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.left-handle[_ngcontent-%COMP%]:hover > .handle-tooltip[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.right-handle.active[_ngcontent-%COMP%] > .handle-tooltip[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.right-handle[_ngcontent-%COMP%]:hover > .handle-tooltip[_ngcontent-%COMP%]{opacity:1}.slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   div.filler[_ngcontent-%COMP%]{display:block;width:100%;height:100%;position:relative;overflow:hidden;border-radius:5px;border:1px solid #bedcb2}.slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   div.filler[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block;height:100%;position:absolute;top:0;background:#bedcb2;transition:all .2s ease}.slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   div.filler[_ngcontent-%COMP%] > div.step-indicators[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.slider[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   div.filler[_ngcontent-%COMP%] > div.step-indicators[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:1px;display:inline-block;height:10px;background:#71b357;position:absolute;left:0}.slider[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%]{display:block;font-weight:700;margin-top:4px;width:102%;margin-left:-1%;color:#908f90}.slider[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{float:left}.slider[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{float:right}.slider.disabled[_ngcontent-%COMP%]{opacity:.4}.slider.disabled[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{box-shadow:none!important}.slider.disabled[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.left-handle[_ngcontent-%COMP%], .slider.disabled[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.right-handle[_ngcontent-%COMP%]{cursor:not-allowed}.slider.disabled[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.left-handle[_ngcontent-%COMP%]   .handle-tooltip[_ngcontent-%COMP%], .slider.disabled[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] > span.right-handle[_ngcontent-%COMP%]   .handle-tooltip[_ngcontent-%COMP%]{display:none}']],
      data: {}
    });

    function Ks(e) {
      return yi(0, [(e()(), oo(0, 0, null, null, 1, "span", [["class", "handle-tooltip"]], null, null, null, null, null)), (e()(), fi(1, null, ["", ""]))], null, function (e, t) {
        var n = t.component;
        e(t, 1, 0, n.currentValues[n.handlerIndex.left])
      })
    }

    function Gs(e) {
      return yi(0, [(e()(), oo(0, 0, null, null, 0, "span", [], [[4, "left", "px"]], null, null, null, null))], null, function (e, t) {
        e(t, 0, 0, t.context.$implicit)
      })
    }

    function Js(e) {
      return yi(0, [(e()(), oo(0, 0, null, null, 0, "span", [], [[4, "left", "%"], [4, "width", "%"]], null, null, null, null))], null, function (e, t) {
        var n = t.component;
        e(t, 0, 0, n.handlerX[0], n.handlerX[n.handlerIndex.right] - n.handlerX[n.handlerIndex.left])
      })
    }

    function ea(e) {
      return yi(0, [(e()(), oo(0, 0, null, null, 0, "span", [], [[4, "left", "%"], [4, "width", "%"]], null, null, null, null))], null, function (e, t) {
        e(t, 0, 0, 0, t.component.handlerX[0])
      })
    }

    function ta(e) {
      return yi(0, [(e()(), oo(0, 0, null, null, 1, "span", [["class", "handle-tooltip"]], null, null, null, null, null)), (e()(), fi(1, null, ["", ""]))], null, function (e, t) {
        var n = t.component;
        e(t, 1, 0, n.currentValues[n.handlerIndex.right])
      })
    }

    function na(e) {
      return yi(0, [(e()(), oo(0, 0, null, null, 4, "span", [["class", "right-handle"]], [[4, "left", "%"]], [[null, "mousedown"], [null, "panstart"]], function (e, t, n) {
        var r = !0, o = e.component;
        return "mousedown" === t && (r = !1 !== o.setHandlerActive(n, o.handlerIndex.right) && r), "panstart" === t && (r = !1 !== o.setHandlerActive(n, o.handlerIndex.right) && r), r
      }, null, null)), Wo(1, 278528, null, 0, Ds, [Vn, Rn, ln, an], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), hi(2, {
        active: 0,
        "last-active": 1
      }), (e()(), ro(16777216, null, null, 1, null, ta)), Wo(4, 16384, null, 0, zs, [pn, cn], {ngIf: [0, "ngIf"]}, null)], function (e, t) {
        var n = t.component,
          r = e(t, 2, 0, n.isHandlerActive && n.currentHandlerIndex === n.handlerIndex.right, n.currentHandlerIndex === n.handlerIndex.right);
        e(t, 1, 0, "right-handle", r), e(t, 4, 0, !n.hideTooltip)
      }, function (e, t) {
        var n = t.component;
        e(t, 0, 0, n.handlerX[n.handlerIndex.right])
      })
    }

    function ra(e) {
      return yi(0, [(e()(), oo(0, 0, null, null, 4, "div", [["class", "values"]], null, null, null, null, null)), (e()(), oo(1, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), fi(2, null, ["", ""])), (e()(), oo(3, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), fi(4, null, ["", ""]))], null, function (e, t) {
        var n = t.component;
        e(t, 2, 0, n.initValues[n.handlerIndex.left]), e(t, 4, 0, n.initValues[n.handlerIndex.right])
      })
    }

    function oa(e) {
      return yi(0, [(e()(), oo(0, 0, null, null, 18, "div", [["class", "slider"]], [[2, "disabled", null]], null, null, null, null)), (e()(), oo(1, 0, null, null, 15, "div", [["class", "bar"]], null, [[null, "mousemove"], [null, "panmove"]], function (e, t, n) {
        var r = !0, o = e.component;
        return "mousemove" === t && (r = !1 !== o.handlerSliding(n) && r), "panmove" === t && (r = !1 !== o.handlerSliding(n) && r), r
      }, null, null)), (e()(), oo(2, 0, null, null, 4, "span", [["class", "left-handle"]], [[4, "left", "%"]], [[null, "mousedown"], [null, "panstart"]], function (e, t, n) {
        var r = !0, o = e.component;
        return "mousedown" === t && (r = !1 !== o.setHandlerActive(n, o.handlerIndex.left) && r), "panstart" === t && (r = !1 !== o.setHandlerActive(n, o.handlerIndex.left) && r), r
      }, null, null)), Wo(3, 278528, null, 0, Ds, [Vn, Rn, ln, an], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), hi(4, {
        active: 0,
        "last-active": 1
      }), (e()(), ro(16777216, null, null, 1, null, Ks)), Wo(6, 16384, null, 0, zs, [pn, cn], {ngIf: [0, "ngIf"]}, null), (e()(), oo(7, 0, null, null, 7, "div", [["class", "filler"]], null, null, null, null, null)), (e()(), oo(8, 0, null, null, 2, "div", [["class", "step-indicators"]], null, null, null, null, null)), (e()(), ro(16777216, null, null, 1, null, Gs)), Wo(10, 802816, null, 0, Hs, [pn, cn, Vn], {ngForOf: [0, "ngForOf"]}, null), (e()(), ro(16777216, null, null, 1, null, Js)), Wo(12, 16384, null, 0, zs, [pn, cn], {ngIf: [0, "ngIf"]}, null), (e()(), ro(16777216, null, null, 1, null, ea)), Wo(14, 16384, null, 0, zs, [pn, cn], {ngIf: [0, "ngIf"]}, null), (e()(), ro(16777216, null, null, 1, null, na)), Wo(16, 16384, null, 0, zs, [pn, cn], {ngIf: [0, "ngIf"]}, null), (e()(), ro(16777216, null, null, 1, null, ra)), Wo(18, 16384, null, 0, zs, [pn, cn], {ngIf: [0, "ngIf"]}, null)], function (e, t) {
        var n = t.component,
          r = e(t, 4, 0, n.isHandlerActive && n.currentHandlerIndex === n.handlerIndex.left, n.currentHandlerIndex === n.handlerIndex.left);
        e(t, 3, 0, "left-handle", r), e(t, 6, 0, !n.hideTooltip), e(t, 10, 0, n.stepIndicatorPositions), e(t, 12, 0, n.multiRange), e(t, 14, 0, !n.multiRange), e(t, 16, 0, n.multiRange), e(t, 18, 0, !n.hideValues)
      }, function (e, t) {
        var n = t.component;
        e(t, 0, 0, n.isDisabled), e(t, 2, 0, n.handlerX[n.handlerIndex.left])
      })
    }

    var ia = n("DlQD");
    Error;
    var sa = function () {
      function e(e, t) {
        this.predicate = e, this.thisArg = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new aa(e, this.predicate, this.thisArg))
      }, e
    }(), aa = function (e) {
      function t(t, n, r) {
        var o = e.call(this, t) || this;
        return o.predicate = n, o.thisArg = r, o.count = 0, o
      }

      return o(t, e), t.prototype._next = function (e) {
        var t;
        try {
          t = this.predicate.call(this.thisArg, e, this.count++)
        } catch (n) {
          return void this.destination.error(n)
        }
        t && this.destination.next(e)
      }, t
    }(E), la = (Error, new S(function (e) {
      return e.complete()
    })), ua = function () {
      return function () {
      }
    }(), ca = function () {
      function e(e, t) {
        this.http = e, this.options = t, this.renderer || (this.renderer = new ia.Renderer)
      }

      return Object.defineProperty(e.prototype, "renderer", {
        get: function () {
          return this.options.renderer
        }, set: function (e) {
          this.options.renderer = e
        }, enumerable: !0, configurable: !0
      }), e.prototype.compile = function (e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = this.options);
        var r = this.precompile(e);
        return Object(ia.parse)(t ? this.decodeHtml(r) : r, n)
      }, e.prototype.getSource = function (e) {
        var t = this;
        if (!this.http) throw new Error("[ngx-markdown] When using the [src] attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information");
        return this.http.get(e, {responseType: "text"}).pipe($(function (n) {
          return t.handleExtension(e, n)
        }))
      }, e.prototype.highlight = function () {
        "undefined" != typeof Prism && Prism.highlightAll(!1)
      }, e.prototype.decodeHtml = function (e) {
        var t = document.createElement("textarea");
        return t.innerHTML = e, t.value
      }, e.prototype.handleExtension = function (e, t) {
        var n = e ? e.split(".").splice(-1).join() : null;
        return "md" !== n ? "```" + n + "\n" + t + "\n```" : t
      }, e.prototype.precompile = function (e) {
        return e ? e.split("\n").map(function (e) {
          return e.length > 0 && isNaN(t) && (t = e.search(/\S|$/)), t ? e.substring(t) : e
        }).join("\n") : "";
        var t
      }, e
    }(), pa = function () {
      function e(e, t) {
        this.element = e, this.markdownService = t, this.error = new Vt, this.load = new Vt
      }

      return Object.defineProperty(e.prototype, "data", {
        get: function () {
          return this._data
        }, set: function (e) {
          this._data = e, this.render(e)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "src", {
        get: function () {
          return this._src
        }, set: function (e) {
          var t = this;
          this._src = e, this.markdownService.getSource(e).subscribe(function (e) {
            t.render(e), t.load.emit(e)
          }, function (e) {
            return t.error.emit(e)
          })
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(e.prototype, "isTranscluded", {
        get: function () {
          return !this.data && !this.src
        }, enumerable: !0, configurable: !0
      }), e.prototype.ngAfterViewInit = function () {
        this.isTranscluded && this.render(this.element.nativeElement.innerHTML, !0)
      }, e.prototype.render = function (e, t) {
        void 0 === t && (t = !1), this.element.nativeElement.innerHTML = this.markdownService.compile(e, t), this.markdownService.highlight()
      }, e
    }(), da = {
      provide: ua,
      useValue: {gfm: !0, tables: !0, breaks: !1, pedantic: !1, sanitize: !1, smartLists: !0, smartypants: !1}
    }, ha = function () {
      function e() {
      }

      return e.forRoot = function (t) {
        return {ngModule: e, providers: l([ca], t ? [t.loader || [], t.markedOptions || da] : [da])}
      }, e.forChild = function () {
        return {ngModule: e}
      }, e
    }(), fa = Ar({
      encapsulation: 0,
      styles: ["[_nghost-%COMP%]     table{border-spacing:0;border-collapse:collapse;margin-bottom:16px}[_nghost-%COMP%]     table td, [_nghost-%COMP%]     table th{padding:6px 13px;border:1px solid #ddd}[_nghost-%COMP%]     table td[align=left], [_nghost-%COMP%]     table th[align=left]{text-align:left}[_nghost-%COMP%]     table td[align=center], [_nghost-%COMP%]     table th[align=center]{text-align:center}[_nghost-%COMP%]     table td[align=right], [_nghost-%COMP%]     table th[align=right]{text-align:right}[_nghost-%COMP%]     table tr:nth-child(2n){background-color:rgba(0,0,0,.03)}[_nghost-%COMP%]     blockquote{padding:0 1em;color:rgba(0,0,0,.535);border-left:.25em solid rgba(0,0,0,.11)}"],
      data: {}
    });

    function ga(e) {
      return yi(0, [{
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: -1,
        flags: 8,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        ngContentIndex: null,
        childCount: 0,
        bindings: [],
        bindingFlags: 0,
        outputs: [],
        element: null,
        provider: null,
        text: null,
        query: null,
        ngContent: {index: 0}
      }], null, null)
    }

    var va = Ar({
      encapsulation: 0,
      styles: [["a.white-btn[_ngcontent-%COMP%]{display:inline-block;color:#fff;font-size:14px;padding:4px 10px;border-radius:2px;border:1px solid #fff;margin-top:10px}a.white-btn[_ngcontent-%COMP%]:hover{text-decoration:none}span.github-icon[_ngcontent-%COMP%]{display:inline-block;width:16px;height:16px;background-image:url(github-icon.e616e631f7d9d2bcfa99.svg);margin-right:4px;position:relative;top:3px}@media(min-width:576px){span.github-icon[_ngcontent-%COMP%]{width:18px;height:18px}a.white-btn[_ngcontent-%COMP%]{font-size:16px;padding:8px 10px;border-radius:4px;float:right;margin-top:0}}"]],
      data: {}
    });

    function ya(e) {
      return yi(0, [(e()(), oo(0, 0, null, null, 11, "header", [], null, null, null, null, null)), (e()(), oo(1, 0, null, null, 10, "div", [["class", "container"]], null, null, null, null, null)), (e()(), oo(2, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (e()(), oo(3, 0, null, null, 4, "div", [["class", "col-12 col-sm-7"]], null, null, null, null, null)), (e()(), oo(4, 0, null, null, 1, "h2", [], null, null, null, null, null)), (e()(), fi(-1, null, ["NpnSlider"])), (e()(), oo(6, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), fi(-1, null, ["A Multi Range Slider Component"])), (e()(), oo(8, 0, null, null, 3, "div", [["class", "col"]], null, null, null, null, null)), (e()(), oo(9, 0, null, null, 2, "a", [["class", "white-btn"], ["href", "https://github.com/npnm/NpnSlider"]], null, null, null, null, null)), (e()(), oo(10, 0, null, null, 0, "span", [["class", "github-icon"]], null, null, null, null, null)), (e()(), fi(-1, null, ["Github"])), (e()(), oo(12, 0, null, null, 83, "div", [["class", "container demo-container"]], null, null, null, null, null)), (e()(), oo(13, 0, null, null, 6, "p", [], null, null, null, null, null)), (e()(), fi(-1, null, ["NpnSlider is a multi range slider component using "])), (e()(), oo(15, 0, null, null, 3, "em", [], null, null, null, null, null)), (e()(), fi(-1, null, ["Angular "])), (e()(), oo(17, 0, null, null, 1, "small", [], null, null, null, null, null)), (e()(), fi(-1, null, ["v6.0"])), (e()(), fi(-1, null, [". It can be used either as a multi range or a single range slider. By default, it is a multi range slider. "])), (e()(), oo(20, 0, null, null, 18, "div", [["class", "examples"]], null, null, null, null, null)), (e()(), oo(21, 0, null, null, 4, "h4", [], null, null, null, null, null)), (e()(), fi(-1, null, ["Basic Slider "])), (e()(), oo(23, 0, null, null, 2, "small", [], null, null, null, null, null)), (e()(), oo(24, 0, null, null, 1, "i", [], null, null, null, null, null)), (e()(), fi(-1, null, ["(Multi Range)"])), (e()(), oo(26, 0, null, null, 12, "div", [["class", "well"]], null, null, null, null, null)), (e()(), oo(27, 0, null, null, 5, "div", [["class", "well-body"]], null, null, null, null, null)), (e()(), oo(28, 0, null, null, 1, "npn-slider", [], null, [[null, "onChange"], ["document", "mouseup"], ["document", "panend"]], function (e, t, n) {
        var r = !0, o = e.component;
        return "document:mouseup" === t && (r = !1 !== Vo(e, 29).setHandlerActiveOff() && r), "document:panend" === t && (r = !1 !== Vo(e, 29).setHandlerActiveOff() && r), "onChange" === t && (r = !1 !== o.onSliderChange(n) && r), r
      }, oa, Ys)), Wo(29, 638976, null, 0, Qs, [ln], {
        setMinValues: [0, "setMinValues"],
        setMaxValues: [1, "setMaxValues"]
      }, {onChange: "onChange"}), (e()(), oo(30, 0, null, null, 2, "p", [], null, null, null, null, null)), (e()(), fi(31, null, ["Selected Values: ", ""])), (t = 0, n = Us, r = [], Xo(-1, t |= 16, null, 0, n, n, r)), (e()(), oo(33, 0, null, null, 5, "div", [["class", "code-snippet"]], null, null, null, null, null)), (e()(), oo(34, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), fi(35, null, ["", ""])), (e()(), oo(36, 0, null, null, 2, "div", [["markdown", ""]], null, null, null, ga, fa)), Wo(37, 4243456, null, 0, pa, [ln, ca], null, null), (e()(), fi(-1, 0, ['\n          ```html\n          <npn-slider [min]="2006" [max]="2020" (onChange)="onSliderChange($event)"></npn-slider>\n          ```\n        '])), (e()(), oo(39, 0, null, null, 17, "div", [["class", "examples"]], null, null, null, null, null)), (e()(), oo(40, 0, null, null, 1, "h4", [], null, null, null, null, null)), (e()(), fi(-1, null, ["Single Range Slider"])), (e()(), oo(42, 0, null, null, 9, "div", [["class", "well"]], null, null, null, null, null)), (e()(), oo(43, 0, null, null, 2, "div", [["class", "well-body"]], null, null, null, null, null)), (e()(), oo(44, 0, null, null, 1, "npn-slider", [], null, [["document", "mouseup"], ["document", "panend"]], function (e, t, n) {
        var r = !0;
        return "document:mouseup" === t && (r = !1 !== Vo(e, 45).setHandlerActiveOff() && r), "document:panend" === t && (r = !1 !== Vo(e, 45).setHandlerActiveOff() && r), r
      }, oa, Ys)), Wo(45, 638976, null, 0, Qs, [ln], {
        setMinValues: [0, "setMinValues"],
        setMaxValues: [1, "setMaxValues"],
        setMinSelectedValues: [2, "setMinSelectedValues"],
        multiRange: [3, "multiRange"]
      }, null), (e()(), oo(46, 0, null, null, 5, "div", [["class", "code-snippet"]], null, null, null, null, null)), (e()(), oo(47, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), fi(48, null, ["", ""])), (e()(), oo(49, 0, null, null, 2, "div", [["markdown", ""]], null, null, null, ga, fa)), Wo(50, 4243456, null, 0, pa, [ln, ca], null, null), (e()(), fi(-1, 0, ['\n          ```html\n          <npn-slider [multiRange]="false" [min]="2006" [max]="2020" [minSelected]="2010"></npn-slider>\n          ```\n        '])), (e()(), oo(52, 0, null, null, 4, "p", [["class", "notes"]], null, null, null, null, null)), (e()(), fi(-1, null, ["By using "])), (e()(), oo(54, 0, null, null, 1, "code", [], null, null, null, null, null)), (e()(), fi(-1, null, ["multiRange"])), (e()(), fi(-1, null, [" property, you can convert the slider as a single range slider"])), (e()(), oo(57, 0, null, null, 12, "div", [["class", "examples"]], null, null, null, null, null)), (e()(), oo(58, 0, null, null, 1, "h4", [], null, null, null, null, null)), (e()(), fi(-1, null, ["Multi Range Slider - with preselected values"])), (e()(), oo(60, 0, null, null, 9, "div", [["class", "well"]], null, null, null, null, null)), (e()(), oo(61, 0, null, null, 2, "div", [["class", "well-body"]], null, null, null, null, null)), (e()(), oo(62, 0, null, null, 1, "npn-slider", [], null, [["document", "mouseup"], ["document", "panend"]], function (e, t, n) {
        var r = !0;
        return "document:mouseup" === t && (r = !1 !== Vo(e, 63).setHandlerActiveOff() && r), "document:panend" === t && (r = !1 !== Vo(e, 63).setHandlerActiveOff() && r), r
      }, oa, Ys)), Wo(63, 638976, null, 0, Qs, [ln], {
        setMinValues: [0, "setMinValues"],
        setMaxValues: [1, "setMaxValues"],
        setMinSelectedValues: [2, "setMinSelectedValues"],
        setMaxSelectedValues: [3, "setMaxSelectedValues"],
        stepValue: [4, "stepValue"],
        showStepIndicator: [5, "showStepIndicator"]
      }, null), (e()(), oo(64, 0, null, null, 5, "div", [["class", "code-snippet"]], null, null, null, null, null)), (e()(), oo(65, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), fi(66, null, ["", ""])), (e()(), oo(67, 0, null, null, 2, "div", [["markdown", ""]], null, null, null, ga, fa)), Wo(68, 4243456, null, 0, pa, [ln, ca], null, null), (e()(), fi(-1, 0, ['\n          ```html\n          <npn-slider [min]="1000" [max]="5000"\n          [minSelected]="2000" [maxSelected]="4000"\n          [step]="500"\n          [showStepIndicator]="true">\n          </npn-slider>\n          ```\n        '])), (e()(), oo(70, 0, null, null, 12, "div", [["class", "examples"]], null, null, null, null, null)), (e()(), oo(71, 0, null, null, 1, "h4", [], null, null, null, null, null)), (e()(), fi(-1, null, ["Disabled Slider"])), (e()(), oo(73, 0, null, null, 9, "div", [["class", "well"]], null, null, null, null, null)), (e()(), oo(74, 0, null, null, 2, "div", [["class", "well-body"]], null, null, null, null, null)), (e()(), oo(75, 0, null, null, 1, "npn-slider", [["disabled", ""]], null, [["document", "mouseup"], ["document", "panend"]], function (e, t, n) {
        var r = !0;
        return "document:mouseup" === t && (r = !1 !== Vo(e, 76).setHandlerActiveOff() && r), "document:panend" === t && (r = !1 !== Vo(e, 76).setHandlerActiveOff() && r), r
      }, oa, Ys)), Wo(76, 638976, null, 0, Qs, [ln], {
        setMinValues: [0, "setMinValues"],
        setMaxValues: [1, "setMaxValues"],
        setDisabled: [2, "setDisabled"]
      }, null), (e()(), oo(77, 0, null, null, 5, "div", [["class", "code-snippet"]], null, null, null, null, null)), (e()(), oo(78, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), fi(79, null, ["", ""])), (e()(), oo(80, 0, null, null, 2, "div", [["markdown", ""]], null, null, null, ga, fa)), Wo(81, 4243456, null, 0, pa, [ln, ca], null, null), (e()(), fi(-1, 0, ['\n          ```html\n          <npn-slider [min]="1000" [max]="5000" disabled></npn-slider>\n          ```\n        '])), (e()(), oo(83, 0, null, null, 12, "div", [["class", "examples"]], null, null, null, null, null)), (e()(), oo(84, 0, null, null, 1, "h4", [], null, null, null, null, null)), (e()(), fi(-1, null, ["Slider With No Tooltip and Values"])), (e()(), oo(86, 0, null, null, 9, "div", [["class", "well"]], null, null, null, null, null)), (e()(), oo(87, 0, null, null, 2, "div", [["class", "well-body"]], null, null, null, null, null)), (e()(), oo(88, 0, null, null, 1, "npn-slider", [["hide-tooltip", ""], ["hide-values", ""]], null, [["document", "mouseup"], ["document", "panend"]], function (e, t, n) {
        var r = !0;
        return "document:mouseup" === t && (r = !1 !== Vo(e, 89).setHandlerActiveOff() && r), "document:panend" === t && (r = !1 !== Vo(e, 89).setHandlerActiveOff() && r), r
      }, oa, Ys)), Wo(89, 638976, null, 0, Qs, [ln], {
        setMinValues: [0, "setMinValues"],
        setMaxValues: [1, "setMaxValues"],
        setMinSelectedValues: [2, "setMinSelectedValues"],
        multiRange: [3, "multiRange"],
        setHideTooltip: [4, "setHideTooltip"],
        setHideValues: [5, "setHideValues"]
      }, null), (e()(), oo(90, 0, null, null, 5, "div", [["class", "code-snippet"]], null, null, null, null, null)), (e()(), oo(91, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), fi(92, null, ["", ""])), (e()(), oo(93, 0, null, null, 2, "div", [["markdown", ""]], null, null, null, ga, fa)), Wo(94, 4243456, null, 0, pa, [ln, ca], null, null), (e()(), fi(-1, 0, ['\n          ```html\n          <npn-slider hide-tooltip hide-values [min]="1000" [max]="2000" [minSelected]="1200"\n          [multiRange]="false"></npn-slider>\n          ```\n        '])), (e()(), oo(96, 0, null, null, 1, "footer", [], null, null, null, null, null)), (e()(), fi(-1, null, ["\nDocumetation for Version npn-slider-v1.3.1\n"]))], function (e, t) {
        e(t, 29, 0, 2006, 2020), e(t, 45, 0, 2006, 2020, 2010, !1), e(t, 63, 0, 1e3, 5e3, 2e3, 4e3, 500, !0), e(t, 76, 0, 1e3, 5e3, ""), e(t, 89, 0, 1e3, 1500, 1200, !1, "", "")
      }, function (e, t) {
        var n = t.component;
        e(t, 31, 0, function (e, t, n, r) {
          if (_n.isWrapped(r)) {
            r = _n.unwrap(r);
            var o = e.def.nodes[31].bindingIndex + 0, i = _n.unwrap(e.oldValues[o]);
            e.oldValues[o] = new _n(i)
          }
          return r
        }(t, 0, 0, Vo(t, 32).transform(n.currentValues))), e(t, 35, 0, n.codeSnippetText), e(t, 48, 0, n.codeSnippetText), e(t, 66, 0, n.codeSnippetText), e(t, 79, 0, n.codeSnippetText), e(t, 92, 0, n.codeSnippetText)
      });
      var t, n, r
    }

    function ma(e) {
      return yi(0, [(e()(), oo(0, 0, null, null, 1, "app-root", [], null, null, null, ya, va)), Wo(1, 49152, null, 0, Ss, [], null, null)], null, null)
    }

    var ba = Co("app-root", Ss, ma, {}, {}, []), _a = null;

    function wa() {
      return _a
    }

    var xa, Ca = {class: "className", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex"}, Ea = {
      "\b": "Backspace",
      "\t": "Tab",
      "\x7f": "Delete",
      "\x1b": "Escape",
      Del: "Delete",
      Esc: "Escape",
      Left: "ArrowLeft",
      Right: "ArrowRight",
      Up: "ArrowUp",
      Down: "ArrowDown",
      Menu: "ContextMenu",
      Scroll: "ScrollLock",
      Win: "OS"
    }, Ta = {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
      E: "5",
      F: "6",
      G: "7",
      H: "8",
      I: "9",
      J: "*",
      K: "+",
      M: "-",
      N: ".",
      O: "/",
      "`": "0",
      "\x90": "NumLock"
    };
    fe.Node && (xa = fe.Node.prototype.contains || function (e) {
      return !!(16 & this.compareDocumentPosition(e))
    });
    var ka, Sa = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }

      return o(t, e), t.prototype.parse = function (e) {
        throw new Error("parse not implemented")
      }, t.makeCurrent = function () {
        var e;
        e = new t, _a || (_a = e)
      }, t.prototype.hasProperty = function (e, t) {
        return t in e
      }, t.prototype.setProperty = function (e, t, n) {
        e[t] = n
      }, t.prototype.getProperty = function (e, t) {
        return e[t]
      }, t.prototype.invoke = function (e, t, n) {
        var r;
        (r = e)[t].apply(r, l(n))
      }, t.prototype.logError = function (e) {
        window.console && (console.error ? console.error(e) : console.log(e))
      }, t.prototype.log = function (e) {
        window.console && window.console.log && window.console.log(e)
      }, t.prototype.logGroup = function (e) {
        window.console && window.console.group && window.console.group(e)
      }, t.prototype.logGroupEnd = function () {
        window.console && window.console.groupEnd && window.console.groupEnd()
      }, Object.defineProperty(t.prototype, "attrToPropMap", {
        get: function () {
          return Ca
        }, enumerable: !0, configurable: !0
      }), t.prototype.contains = function (e, t) {
        return xa.call(e, t)
      }, t.prototype.querySelector = function (e, t) {
        return e.querySelector(t)
      }, t.prototype.querySelectorAll = function (e, t) {
        return e.querySelectorAll(t)
      }, t.prototype.on = function (e, t, n) {
        e.addEventListener(t, n, !1)
      }, t.prototype.onAndCancel = function (e, t, n) {
        return e.addEventListener(t, n, !1), function () {
          e.removeEventListener(t, n, !1)
        }
      }, t.prototype.dispatchEvent = function (e, t) {
        e.dispatchEvent(t)
      }, t.prototype.createMouseEvent = function (e) {
        var t = this.getDefaultDocument().createEvent("MouseEvent");
        return t.initEvent(e, !0, !0), t
      }, t.prototype.createEvent = function (e) {
        var t = this.getDefaultDocument().createEvent("Event");
        return t.initEvent(e, !0, !0), t
      }, t.prototype.preventDefault = function (e) {
        e.preventDefault(), e.returnValue = !1
      }, t.prototype.isPrevented = function (e) {
        return e.defaultPrevented || null != e.returnValue && !e.returnValue
      }, t.prototype.getInnerHTML = function (e) {
        return e.innerHTML
      }, t.prototype.getTemplateContent = function (e) {
        return "content" in e && this.isTemplateElement(e) ? e.content : null
      }, t.prototype.getOuterHTML = function (e) {
        return e.outerHTML
      }, t.prototype.nodeName = function (e) {
        return e.nodeName
      }, t.prototype.nodeValue = function (e) {
        return e.nodeValue
      }, t.prototype.type = function (e) {
        return e.type
      }, t.prototype.content = function (e) {
        return this.hasProperty(e, "content") ? e.content : e
      }, t.prototype.firstChild = function (e) {
        return e.firstChild
      }, t.prototype.nextSibling = function (e) {
        return e.nextSibling
      }, t.prototype.parentElement = function (e) {
        return e.parentNode
      }, t.prototype.childNodes = function (e) {
        return e.childNodes
      }, t.prototype.childNodesAsList = function (e) {
        for (var t = e.childNodes, n = new Array(t.length), r = 0; r < t.length; r++) n[r] = t[r];
        return n
      }, t.prototype.clearNodes = function (e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
      }, t.prototype.appendChild = function (e, t) {
        e.appendChild(t)
      }, t.prototype.removeChild = function (e, t) {
        e.removeChild(t)
      }, t.prototype.replaceChild = function (e, t, n) {
        e.replaceChild(t, n)
      }, t.prototype.remove = function (e) {
        return e.parentNode && e.parentNode.removeChild(e), e
      }, t.prototype.insertBefore = function (e, t, n) {
        e.insertBefore(n, t)
      }, t.prototype.insertAllBefore = function (e, t, n) {
        n.forEach(function (n) {
          return e.insertBefore(n, t)
        })
      }, t.prototype.insertAfter = function (e, t, n) {
        e.insertBefore(n, t.nextSibling)
      }, t.prototype.setInnerHTML = function (e, t) {
        e.innerHTML = t
      }, t.prototype.getText = function (e) {
        return e.textContent
      }, t.prototype.setText = function (e, t) {
        e.textContent = t
      }, t.prototype.getValue = function (e) {
        return e.value
      }, t.prototype.setValue = function (e, t) {
        e.value = t
      }, t.prototype.getChecked = function (e) {
        return e.checked
      }, t.prototype.setChecked = function (e, t) {
        e.checked = t
      }, t.prototype.createComment = function (e) {
        return this.getDefaultDocument().createComment(e)
      }, t.prototype.createTemplate = function (e) {
        var t = this.getDefaultDocument().createElement("template");
        return t.innerHTML = e, t
      }, t.prototype.createElement = function (e, t) {
        return (t = t || this.getDefaultDocument()).createElement(e)
      }, t.prototype.createElementNS = function (e, t, n) {
        return (n = n || this.getDefaultDocument()).createElementNS(e, t)
      }, t.prototype.createTextNode = function (e, t) {
        return (t = t || this.getDefaultDocument()).createTextNode(e)
      }, t.prototype.createScriptTag = function (e, t, n) {
        var r = (n = n || this.getDefaultDocument()).createElement("SCRIPT");
        return r.setAttribute(e, t), r
      }, t.prototype.createStyleElement = function (e, t) {
        var n = (t = t || this.getDefaultDocument()).createElement("style");
        return this.appendChild(n, this.createTextNode(e, t)), n
      }, t.prototype.createShadowRoot = function (e) {
        return e.createShadowRoot()
      }, t.prototype.getShadowRoot = function (e) {
        return e.shadowRoot
      }, t.prototype.getHost = function (e) {
        return e.host
      }, t.prototype.clone = function (e) {
        return e.cloneNode(!0)
      }, t.prototype.getElementsByClassName = function (e, t) {
        return e.getElementsByClassName(t)
      }, t.prototype.getElementsByTagName = function (e, t) {
        return e.getElementsByTagName(t)
      }, t.prototype.classList = function (e) {
        return Array.prototype.slice.call(e.classList, 0)
      }, t.prototype.addClass = function (e, t) {
        e.classList.add(t)
      }, t.prototype.removeClass = function (e, t) {
        e.classList.remove(t)
      }, t.prototype.hasClass = function (e, t) {
        return e.classList.contains(t)
      }, t.prototype.setStyle = function (e, t, n) {
        e.style[t] = n
      }, t.prototype.removeStyle = function (e, t) {
        e.style[t] = ""
      }, t.prototype.getStyle = function (e, t) {
        return e.style[t]
      }, t.prototype.hasStyle = function (e, t, n) {
        var r = this.getStyle(e, t) || "";
        return n ? r == n : r.length > 0
      }, t.prototype.tagName = function (e) {
        return e.tagName
      }, t.prototype.attributeMap = function (e) {
        for (var t = new Map, n = e.attributes, r = 0; r < n.length; r++) {
          var o = n.item(r);
          t.set(o.name, o.value)
        }
        return t
      }, t.prototype.hasAttribute = function (e, t) {
        return e.hasAttribute(t)
      }, t.prototype.hasAttributeNS = function (e, t, n) {
        return e.hasAttributeNS(t, n)
      }, t.prototype.getAttribute = function (e, t) {
        return e.getAttribute(t)
      }, t.prototype.getAttributeNS = function (e, t, n) {
        return e.getAttributeNS(t, n)
      }, t.prototype.setAttribute = function (e, t, n) {
        e.setAttribute(t, n)
      }, t.prototype.setAttributeNS = function (e, t, n, r) {
        e.setAttributeNS(t, n, r)
      }, t.prototype.removeAttribute = function (e, t) {
        e.removeAttribute(t)
      }, t.prototype.removeAttributeNS = function (e, t, n) {
        e.removeAttributeNS(t, n)
      }, t.prototype.templateAwareRoot = function (e) {
        return this.isTemplateElement(e) ? this.content(e) : e
      }, t.prototype.createHtmlDocument = function () {
        return document.implementation.createHTMLDocument("fakeTitle")
      }, t.prototype.getDefaultDocument = function () {
        return document
      }, t.prototype.getBoundingClientRect = function (e) {
        try {
          return e.getBoundingClientRect()
        } catch (t) {
          return {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
        }
      }, t.prototype.getTitle = function (e) {
        return e.title
      }, t.prototype.setTitle = function (e, t) {
        e.title = t || ""
      }, t.prototype.elementMatches = function (e, t) {
        return !!this.isElementNode(e) && (e.matches && e.matches(t) || e.msMatchesSelector && e.msMatchesSelector(t) || e.webkitMatchesSelector && e.webkitMatchesSelector(t))
      }, t.prototype.isTemplateElement = function (e) {
        return this.isElementNode(e) && "TEMPLATE" === e.nodeName
      }, t.prototype.isTextNode = function (e) {
        return e.nodeType === Node.TEXT_NODE
      }, t.prototype.isCommentNode = function (e) {
        return e.nodeType === Node.COMMENT_NODE
      }, t.prototype.isElementNode = function (e) {
        return e.nodeType === Node.ELEMENT_NODE
      }, t.prototype.hasShadowRoot = function (e) {
        return null != e.shadowRoot && e instanceof HTMLElement
      }, t.prototype.isShadowRoot = function (e) {
        return e instanceof DocumentFragment
      }, t.prototype.importIntoDoc = function (e) {
        return document.importNode(this.templateAwareRoot(e), !0)
      }, t.prototype.adoptNode = function (e) {
        return document.adoptNode(e)
      }, t.prototype.getHref = function (e) {
        return e.getAttribute("href")
      }, t.prototype.getEventKey = function (e) {
        var t = e.key;
        if (null == t) {
          if (null == (t = e.keyIdentifier)) return "Unidentified";
          t.startsWith("U+") && (t = String.fromCharCode(parseInt(t.substring(2), 16)), 3 === e.location && Ta.hasOwnProperty(t) && (t = Ta[t]))
        }
        return Ea[t] || t
      }, t.prototype.getGlobalEventTarget = function (e, t) {
        return "window" === t ? window : "document" === t ? e : "body" === t ? e.body : null
      }, t.prototype.getHistory = function () {
        return window.history
      }, t.prototype.getLocation = function () {
        return window.location
      }, t.prototype.getBaseHref = function (e) {
        var t, n = Ia || (Ia = document.querySelector("base")) ? Ia.getAttribute("href") : null;
        return null == n ? null : (t = n, ka || (ka = document.createElement("a")), ka.setAttribute("href", t), "/" === ka.pathname.charAt(0) ? ka.pathname : "/" + ka.pathname)
      },t.prototype.resetBaseElement = function () {
        Ia = null
      },t.prototype.getUserAgent = function () {
        return window.navigator.userAgent
      },t.prototype.setData = function (e, t, n) {
        this.setAttribute(e, "data-" + t, n)
      },t.prototype.getData = function (e, t) {
        return this.getAttribute(e, "data-" + t)
      },t.prototype.getComputedStyle = function (e) {
        return getComputedStyle(e)
      },t.prototype.supportsWebAnimation = function () {
        return "function" == typeof Element.prototype.animate
      },t.prototype.performanceNow = function () {
        return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
      },t.prototype.supportsCookies = function () {
        return !0
      },t.prototype.getCookie = function (e) {
        return function (e, t) {
          t = encodeURIComponent(t);
          try {
            for (var n = s(e.split(";")), r = n.next(); !r.done; r = n.next()) {
              var o = r.value, i = o.indexOf("="), l = a(-1 == i ? [o, ""] : [o.slice(0, i), o.slice(i + 1)], 2),
                u = l[1];
              if (l[0].trim() === t) return decodeURIComponent(u)
            }
          } catch (d) {
            c = {error: d}
          } finally {
            try {
              r && !r.done && (p = n.return) && p.call(n)
            } finally {
              if (c) throw c.error
            }
          }
          return null;
          var c, p
        }(document.cookie, e)
      },t.prototype.setCookie = function (e, t) {
        document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      },t
    }(function (e) {
      function t() {
        var t = e.call(this) || this;
        t._animationPrefix = null, t._transitionEnd = null;
        try {
          var n = t.createElement("div", document);
          if (null != t.getStyle(n, "animationName")) t._animationPrefix = ""; else for (var r = ["Webkit", "Moz", "O", "ms"], o = 0; o < r.length; o++) if (null != t.getStyle(n, r[o] + "AnimationName")) {
            t._animationPrefix = "-" + r[o].toLowerCase() + "-";
            break
          }
          var i = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
          };
          Object.keys(i).forEach(function (e) {
            null != t.getStyle(n, e) && (t._transitionEnd = i[e])
          })
        } catch (s) {
          t._animationPrefix = null, t._transitionEnd = null
        }
        return t
      }

      return o(t, e), t.prototype.getDistributedNodes = function (e) {
        return e.getDistributedNodes()
      }, t.prototype.resolveAndSetHref = function (e, t, n) {
        e.href = null == n ? t : t + "/../" + n
      }, t.prototype.supportsDOMEvents = function () {
        return !0
      }, t.prototype.supportsNativeShadowDOM = function () {
        return "function" == typeof document.body.createShadowRoot
      }, t.prototype.getAnimationPrefix = function () {
        return this._animationPrefix ? this._animationPrefix : ""
      }, t.prototype.getTransitionEnd = function () {
        return this._transitionEnd ? this._transitionEnd : ""
      }, t.prototype.supportsAnimation = function () {
        return null != this._animationPrefix && null != this._transitionEnd
      }, t
    }(function () {
      function e() {
        this.resourceLoaderType = null
      }

      return Object.defineProperty(e.prototype, "attrToPropMap", {
        get: function () {
          return this._attrToPropMap
        }, set: function (e) {
          this._attrToPropMap = e
        }, enumerable: !0, configurable: !0
      }), e
    }())), Ia = null, Oa = qs;

    function Pa() {
      return !!window.history.pushState
    }

    var Aa = function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return n._doc = t, n._init(), n
      }

      return o(t, e), t.prototype._init = function () {
        this.location = wa().getLocation(), this._history = wa().getHistory()
      }, t.prototype.getBaseHrefFromDOM = function () {
        return wa().getBaseHref(this._doc)
      }, t.prototype.onPopState = function (e) {
        wa().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", e, !1)
      }, t.prototype.onHashChange = function (e) {
        wa().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", e, !1)
      }, Object.defineProperty(t.prototype, "pathname", {
        get: function () {
          return this.location.pathname
        }, set: function (e) {
          this.location.pathname = e
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(t.prototype, "search", {
        get: function () {
          return this.location.search
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(t.prototype, "hash", {
        get: function () {
          return this.location.hash
        }, enumerable: !0, configurable: !0
      }), t.prototype.pushState = function (e, t, n) {
        Pa() ? this._history.pushState(e, t, n) : this.location.hash = n
      }, t.prototype.replaceState = function (e, t, n) {
        Pa() ? this._history.replaceState(e, t, n) : this.location.hash = n
      }, t.prototype.forward = function () {
        this._history.forward()
      }, t.prototype.back = function () {
        this._history.back()
      }, t.ctorParameters = function () {
        return [{type: void 0, decorators: [{type: Ce, args: [Oa]}]}]
      }, t
    }(Is), Ma = function () {
      function e(e) {
        this._doc = e, this._dom = wa()
      }

      return e.prototype.addTag = function (e, t) {
        return void 0 === t && (t = !1), e ? this._getOrCreateElement(e, t) : null
      }, e.prototype.addTags = function (e, t) {
        var n = this;
        return void 0 === t && (t = !1), e ? e.reduce(function (e, r) {
          return r && e.push(n._getOrCreateElement(r, t)), e
        }, []) : []
      }, e.prototype.getTag = function (e) {
        return e && this._dom.querySelector(this._doc, "meta[" + e + "]") || null
      }, e.prototype.getTags = function (e) {
        if (!e) return [];
        var t = this._dom.querySelectorAll(this._doc, "meta[" + e + "]");
        return t ? [].slice.call(t) : []
      }, e.prototype.updateTag = function (e, t) {
        if (!e) return null;
        t = t || this._parseSelector(e);
        var n = this.getTag(t);
        return n ? this._setMetaElementAttributes(e, n) : this._getOrCreateElement(e, !0)
      }, e.prototype.removeTag = function (e) {
        this.removeTagElement(this.getTag(e))
      }, e.prototype.removeTagElement = function (e) {
        e && this._dom.remove(e)
      }, e.prototype._getOrCreateElement = function (e, t) {
        if (void 0 === t && (t = !1), !t) {
          var n = this._parseSelector(e), r = this.getTag(n);
          if (r && this._containsAttributes(e, r)) return r
        }
        var o = this._dom.createElement("meta");
        this._setMetaElementAttributes(e, o);
        var i = this._dom.getElementsByTagName(this._doc, "head")[0];
        return this._dom.appendChild(i, o), o
      }, e.prototype._setMetaElementAttributes = function (e, t) {
        var n = this;
        return Object.keys(e).forEach(function (r) {
          return n._dom.setAttribute(t, r, e[r])
        }), t
      }, e.prototype._parseSelector = function (e) {
        var t = e.name ? "name" : "property";
        return t + '="' + e[t] + '"'
      }, e.prototype._containsAttributes = function (e, t) {
        var n = this;
        return Object.keys(e).every(function (r) {
          return n._dom.getAttribute(t, r) === e[r]
        })
      }, e
    }(), Na = new le("TRANSITION_ID"), Va = [{
      provide: it, useFactory: function (e, t, n) {
        return function () {
          n.get(st).donePromise.then(function () {
            var n = wa();
            Array.prototype.slice.apply(n.querySelectorAll(t, "style[ng-transition]")).filter(function (t) {
              return n.getAttribute(t, "ng-transition") === e
            }).forEach(function (e) {
              return n.remove(e)
            })
          })
        }
      }, deps: [Na, Oa, Ae], multi: !0
    }], Ra = function () {
      function e() {
      }

      return e.init = function () {
        var t;
        t = new e, qt = t
      }, e.prototype.addToWindow = function (e) {
        fe.getAngularTestability = function (t, n) {
          void 0 === n && (n = !0);
          var r = e.findTestabilityInTree(t, n);
          if (null == r) throw new Error("Could not find testability for element.");
          return r
        }, fe.getAllAngularTestabilities = function () {
          return e.getAllTestabilities()
        }, fe.getAllAngularRootElements = function () {
          return e.getAllRootElements()
        }, fe.frameworkStabilizers || (fe.frameworkStabilizers = []), fe.frameworkStabilizers.push(function (e) {
          var t = fe.getAllAngularTestabilities(), n = t.length, r = !1, o = function (t) {
            r = r || t, 0 == --n && e(r)
          };
          t.forEach(function (e) {
            e.whenStable(o)
          })
        })
      }, e.prototype.findTestabilityInTree = function (e, t, n) {
        if (null == t) return null;
        var r = e.getTestability(t);
        return null != r ? r : n ? wa().isShadowRoot(t) ? this.findTestabilityInTree(e, wa().getHost(t), !0) : this.findTestabilityInTree(e, wa().parentElement(t), !0) : null
      }, e
    }(), Da = function () {
      function e(e) {
        this._doc = e
      }

      return e.prototype.getTitle = function () {
        return wa().getTitle(this._doc)
      }, e.prototype.setTitle = function (e) {
        wa().setTitle(this._doc, e)
      }, e
    }();

    function ja(e, t) {
      "undefined" != typeof COMPILED && COMPILED || ((fe.ng = fe.ng || {})[e] = t)
    }

    var Ha = {ApplicationRef: tn, NgZone: Rt};

    function Fa(e) {
      return yn(e)
    }

    var za = new le("EventManagerPlugins"), La = function () {
      function e(e, t) {
        var n = this;
        this._zone = t, this._eventNameToPlugin = new Map, e.forEach(function (e) {
          return e.manager = n
        }), this._plugins = e.slice().reverse()
      }

      return e.prototype.addEventListener = function (e, t, n) {
        return this._findPluginFor(t).addEventListener(e, t, n)
      }, e.prototype.addGlobalEventListener = function (e, t, n) {
        return this._findPluginFor(t).addGlobalEventListener(e, t, n)
      }, e.prototype.getZone = function () {
        return this._zone
      }, e.prototype._findPluginFor = function (e) {
        var t = this._eventNameToPlugin.get(e);
        if (t) return t;
        for (var n = this._plugins, r = 0; r < n.length; r++) {
          var o = n[r];
          if (o.supports(e)) return this._eventNameToPlugin.set(e, o), o
        }
        throw new Error("No event manager plugin found for event " + e)
      }, e
    }(), Ba = function () {
      function e(e) {
        this._doc = e
      }

      return e.prototype.addGlobalEventListener = function (e, t, n) {
        var r = wa().getGlobalEventTarget(this._doc, e);
        if (!r) throw new Error("Unsupported event target " + r + " for event " + t);
        return this.addEventListener(r, t, n)
      }, e
    }(), Ua = function () {
      function e() {
        this._stylesSet = new Set
      }

      return e.prototype.addStyles = function (e) {
        var t = this, n = new Set;
        e.forEach(function (e) {
          t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e))
        }), this.onStylesAdded(n)
      }, e.prototype.onStylesAdded = function (e) {
      }, e.prototype.getAllStyles = function () {
        return Array.from(this._stylesSet)
      }, e
    }(), Za = function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return n._doc = t, n._hostNodes = new Set, n._styleNodes = new Set, n._hostNodes.add(t.head), n
      }

      return o(t, e), t.prototype._addStylesToHost = function (e, t) {
        var n = this;
        e.forEach(function (e) {
          var r = n._doc.createElement("style");
          r.textContent = e, n._styleNodes.add(t.appendChild(r))
        })
      }, t.prototype.addHost = function (e) {
        this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e)
      }, t.prototype.removeHost = function (e) {
        this._hostNodes.delete(e)
      }, t.prototype.onStylesAdded = function (e) {
        var t = this;
        this._hostNodes.forEach(function (n) {
          return t._addStylesToHost(e, n)
        })
      }, t.prototype.ngOnDestroy = function () {
        this._styleNodes.forEach(function (e) {
          return wa().remove(e)
        })
      }, t
    }(Ua), qa = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    }, $a = /%COMP%/g, Wa = "_nghost-%COMP%", Xa = "_ngcontent-%COMP%";

    function Qa(e, t, n) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        Array.isArray(o) ? Qa(e, o, n) : (o = o.replace($a, e), n.push(o))
      }
      return n
    }

    function Ya(e) {
      return function (t) {
        !1 === e(t) && (t.preventDefault(), t.returnValue = !1)
      }
    }

    var Ka = function () {
      function e(e, t) {
        this.eventManager = e, this.sharedStylesHost = t, this.rendererByCompId = new Map, this.defaultRenderer = new Ga(e)
      }

      return e.prototype.createRenderer = function (e, t) {
        if (!e || !t) return this.defaultRenderer;
        switch (t.encapsulation) {
          case Xe.Emulated:
            var n = this.rendererByCompId.get(t.id);
            return n || (n = new nl(this.eventManager, this.sharedStylesHost, t), this.rendererByCompId.set(t.id, n)), n.applyToHost(e), n;
          case Xe.Native:
            return new rl(this.eventManager, this.sharedStylesHost, e, t);
          default:
            if (!this.rendererByCompId.has(t.id)) {
              var r = Qa(t.id, t.styles, []);
              this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(t.id, this.defaultRenderer)
            }
            return this.defaultRenderer
        }
      }, e.prototype.begin = function () {
      }, e.prototype.end = function () {
      }, e
    }(), Ga = function () {
      function e(e) {
        this.eventManager = e, this.data = Object.create(null)
      }

      return e.prototype.destroy = function () {
      }, e.prototype.createElement = function (e, t) {
        return t ? document.createElementNS(qa[t], e) : document.createElement(e)
      }, e.prototype.createComment = function (e) {
        return document.createComment(e)
      }, e.prototype.createText = function (e) {
        return document.createTextNode(e)
      }, e.prototype.appendChild = function (e, t) {
        e.appendChild(t)
      }, e.prototype.insertBefore = function (e, t, n) {
        e && e.insertBefore(t, n)
      }, e.prototype.removeChild = function (e, t) {
        e && e.removeChild(t)
      }, e.prototype.selectRootElement = function (e) {
        var t = "string" == typeof e ? document.querySelector(e) : e;
        if (!t) throw new Error('The selector "' + e + '" did not match any elements');
        return t.textContent = "", t
      }, e.prototype.parentNode = function (e) {
        return e.parentNode
      }, e.prototype.nextSibling = function (e) {
        return e.nextSibling
      }, e.prototype.setAttribute = function (e, t, n, r) {
        if (r) {
          t = r + ":" + t;
          var o = qa[r];
          o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n)
        } else e.setAttribute(t, n)
      }, e.prototype.removeAttribute = function (e, t, n) {
        if (n) {
          var r = qa[n];
          r ? e.removeAttributeNS(r, t) : e.removeAttribute(n + ":" + t)
        } else e.removeAttribute(t)
      }, e.prototype.addClass = function (e, t) {
        e.classList.add(t)
      }, e.prototype.removeClass = function (e, t) {
        e.classList.remove(t)
      }, e.prototype.setStyle = function (e, t, n, r) {
        r & sn.DashCase ? e.style.setProperty(t, n, r & sn.Important ? "important" : "") : e.style[t] = n
      }, e.prototype.removeStyle = function (e, t, n) {
        n & sn.DashCase ? e.style.removeProperty(t) : e.style[t] = ""
      }, e.prototype.setProperty = function (e, t, n) {
        el(t, "property"), e[t] = n
      }, e.prototype.setValue = function (e, t) {
        e.nodeValue = t
      }, e.prototype.listen = function (e, t, n) {
        return el(t, "listener"), "string" == typeof e ? this.eventManager.addGlobalEventListener(e, t, Ya(n)) : this.eventManager.addEventListener(e, t, Ya(n))
      }, e
    }(), Ja = "@".charCodeAt(0);

    function el(e, t) {
      if (e.charCodeAt(0) === Ja) throw new Error("Found the synthetic " + t + " " + e + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.')
    }

    var tl, nl = function (e) {
      function t(t, n, r) {
        var o = e.call(this, t) || this;
        o.component = r;
        var i = Qa(r.id, r.styles, []);
        return n.addStyles(i), o.contentAttr = Xa.replace($a, r.id), o.hostAttr = Wa.replace($a, r.id), o
      }

      return o(t, e), t.prototype.applyToHost = function (t) {
        e.prototype.setAttribute.call(this, t, this.hostAttr, "")
      }, t.prototype.createElement = function (t, n) {
        var r = e.prototype.createElement.call(this, t, n);
        return e.prototype.setAttribute.call(this, r, this.contentAttr, ""), r
      }, t
    }(Ga), rl = function (e) {
      function t(t, n, r, o) {
        var i = e.call(this, t) || this;
        i.sharedStylesHost = n, i.hostEl = r, i.component = o, i.shadowRoot = r.createShadowRoot(), i.sharedStylesHost.addHost(i.shadowRoot);
        for (var s = Qa(o.id, o.styles, []), a = 0; a < s.length; a++) {
          var l = document.createElement("style");
          l.textContent = s[a], i.shadowRoot.appendChild(l)
        }
        return i
      }

      return o(t, e), t.prototype.nodeOrShadowRoot = function (e) {
        return e === this.hostEl ? this.shadowRoot : e
      }, t.prototype.destroy = function () {
        this.sharedStylesHost.removeHost(this.shadowRoot)
      }, t.prototype.appendChild = function (t, n) {
        return e.prototype.appendChild.call(this, this.nodeOrShadowRoot(t), n)
      }, t.prototype.insertBefore = function (t, n, r) {
        return e.prototype.insertBefore.call(this, this.nodeOrShadowRoot(t), n, r)
      }, t.prototype.removeChild = function (t, n) {
        return e.prototype.removeChild.call(this, this.nodeOrShadowRoot(t), n)
      }, t.prototype.parentNode = function (t) {
        return this.nodeOrShadowRoot(e.prototype.parentNode.call(this, this.nodeOrShadowRoot(t)))
      }, t
    }(Ga), ol = "undefined" != typeof Zone && Zone.__symbol__ || function (e) {
      return "__zone_symbol__" + e
    }, il = ol("addEventListener"), sl = ol("removeEventListener"), al = {}, ll = "__zone_symbol__propagationStopped";
    "undefined" != typeof Zone && Zone[ol("BLACK_LISTED_EVENTS")] && (tl = {});
    var ul = function (e) {
      return !!tl && tl.hasOwnProperty(e)
    }, cl = function (e) {
      var t = al[e.type];
      if (t) {
        var n = this[t];
        if (n) {
          var r = [e];
          if (1 === n.length) return (s = n[0]).zone !== Zone.current ? s.zone.run(s.handler, this, r) : s.handler.apply(this, r);
          for (var o = n.slice(), i = 0; i < o.length && !0 !== e[ll]; i++) {
            var s;
            (s = o[i]).zone !== Zone.current ? s.zone.run(s.handler, this, r) : s.handler.apply(this, r)
          }
        }
      }
    }, pl = function (e) {
      function t(t, n, r) {
        var o = e.call(this, t) || this;
        return o.ngZone = n, r && function (e) {
          return e === $s
        }(r) || o.patchEvent(), o
      }

      return o(t, e), t.prototype.patchEvent = function () {
        if ("undefined" != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
          var e = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
          Event.prototype.stopImmediatePropagation = function () {
            this && (this[ll] = !0), e && e.apply(this, arguments)
          }
        }
      }, t.prototype.supports = function (e) {
        return !0
      }, t.prototype.addEventListener = function (e, t, n) {
        var r = this, o = n;
        if (!e[il] || Rt.isInAngularZone() && !ul(t)) e.addEventListener(t, o, !1); else {
          var i = al[t];
          i || (i = al[t] = ol("ANGULAR" + t + "FALSE"));
          var s = e[i], a = s && s.length > 0;
          s || (s = e[i] = []);
          var l = ul(t) ? Zone.root : Zone.current;
          if (0 === s.length) s.push({zone: l, handler: o}); else {
            for (var u = !1, c = 0; c < s.length; c++) if (s[c].handler === o) {
              u = !0;
              break
            }
            u || s.push({zone: l, handler: o})
          }
          a || e[il](t, cl, !1)
        }
        return function () {
          return r.removeEventListener(e, t, o)
        }
      }, t.prototype.removeEventListener = function (e, t, n) {
        var r = e[sl];
        if (!r) return e.removeEventListener.apply(e, [t, n, !1]);
        var o = al[t], i = o && e[o];
        if (!i) return e.removeEventListener.apply(e, [t, n, !1]);
        for (var s = !1, a = 0; a < i.length; a++) if (i[a].handler === n) {
          s = !0, i.splice(a, 1);
          break
        }
        s ? 0 === i.length && r.apply(e, [t, cl, !1]) : e.removeEventListener.apply(e, [t, n, !1])
      }, t
    }(Ba), dl = {
      pan: !0,
      panstart: !0,
      panmove: !0,
      panend: !0,
      pancancel: !0,
      panleft: !0,
      panright: !0,
      panup: !0,
      pandown: !0,
      pinch: !0,
      pinchstart: !0,
      pinchmove: !0,
      pinchend: !0,
      pinchcancel: !0,
      pinchin: !0,
      pinchout: !0,
      press: !0,
      pressup: !0,
      rotate: !0,
      rotatestart: !0,
      rotatemove: !0,
      rotateend: !0,
      rotatecancel: !0,
      swipe: !0,
      swipeleft: !0,
      swiperight: !0,
      swipeup: !0,
      swipedown: !0,
      tap: !0
    }, hl = new le("HammerGestureConfig"), fl = function () {
      function e() {
        this.events = [], this.overrides = {}
      }

      return e.prototype.buildHammer = function (e) {
        var t = new Hammer(e, this.options);
        for (var n in t.get("pinch").set({enable: !0}), t.get("rotate").set({enable: !0}), this.overrides) t.get(n).set(this.overrides[n]);
        return t
      }, e
    }(), gl = function (e) {
      function t(t, n, r) {
        var o = e.call(this, t) || this;
        return o._config = n, o.console = r, o
      }

      return o(t, e), t.prototype.supports = function (e) {
        return !(!dl.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e) || !window.Hammer && (this.console.warn("Hammer.js is not loaded, can not bind '" + e + "' event."), 1))
      }, t.prototype.addEventListener = function (e, t, n) {
        var r = this, o = this.manager.getZone();
        return t = t.toLowerCase(), o.runOutsideAngular(function () {
          var i = r._config.buildHammer(e), s = function (e) {
            o.runGuarded(function () {
              n(e)
            })
          };
          return i.on(t, s), function () {
            return i.off(t, s)
          }
        })
      }, t.prototype.isCustomEvent = function (e) {
        return this._config.events.indexOf(e) > -1
      }, t
    }(Ba), vl = ["alt", "control", "meta", "shift"], yl = {
      alt: function (e) {
        return e.altKey
      }, control: function (e) {
        return e.ctrlKey
      }, meta: function (e) {
        return e.metaKey
      }, shift: function (e) {
        return e.shiftKey
      }
    }, ml = function (e) {
      function t(t) {
        return e.call(this, t) || this
      }

      return o(t, e), t.prototype.supports = function (e) {
        return null != t.parseEventName(e)
      }, t.prototype.addEventListener = function (e, n, r) {
        var o = t.parseEventName(n), i = t.eventCallback(o.fullKey, r, this.manager.getZone());
        return this.manager.getZone().runOutsideAngular(function () {
          return wa().onAndCancel(e, o.domEventName, i)
        })
      }, t.parseEventName = function (e) {
        var n = e.toLowerCase().split("."), r = n.shift();
        if (0 === n.length || "keydown" !== r && "keyup" !== r) return null;
        var o = t._normalizeKey(n.pop()), i = "";
        if (vl.forEach(function (e) {
          var t = n.indexOf(e);
          t > -1 && (n.splice(t, 1), i += e + ".")
        }), i += o, 0 != n.length || 0 === o.length) return null;
        var s = {};
        return s.domEventName = r, s.fullKey = i, s
      }, t.getEventFullKey = function (e) {
        var t = "", n = wa().getEventKey(e);
        return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), vl.forEach(function (r) {
          r != n && (0, yl[r])(e) && (t += r + ".")
        }), t += n
      }, t.eventCallback = function (e, n, r) {
        return function (o) {
          t.getEventFullKey(o) === e && r.runGuarded(function () {
            return n(o)
          })
        }
      }, t._normalizeKey = function (e) {
        switch (e) {
          case"esc":
            return "escape";
          default:
            return e
        }
      }, t
    }(Ba), bl = function () {
      return function () {
      }
    }(), _l = function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return n._doc = t, n
      }

      return o(t, e), t.prototype.sanitize = function (e, t) {
        if (null == t) return null;
        switch (e) {
          case hr.NONE:
            return t;
          case hr.HTML:
            return t instanceof xl ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "HTML"), function (e, t) {
              var n = null;
              try {
                Kn = Kn || new qn(e);
                var r = t ? String(t) : "";
                n = Kn.getInertBodyElement(r);
                var o = 5, i = r;
                do {
                  if (0 === o) throw new Error("Failed to sanitize html because the input is unstable");
                  o--, r = i, i = n.innerHTML, n = Kn.getInertBodyElement(r)
                } while (r !== i);
                var s = new sr, a = s.sanitizeChildren(cr(n) || n);
                return Qt() && s.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."), a
              } finally {
                if (n) for (var l = cr(n) || n; l.firstChild;) l.removeChild(l.firstChild)
              }
            }(this._doc, String(t)));
          case hr.STYLE:
            return t instanceof Cl ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "Style"), function (e) {
              if (!(e = String(e).trim())) return "";
              var t = e.match(dr);
              return t && Xn(t[1]) === t[1] || e.match(pr) && function (e) {
                for (var t = !0, n = !0, r = 0; r < e.length; r++) {
                  var o = e.charAt(r);
                  "'" === o && n ? t = !t : '"' === o && t && (n = !n)
                }
                return t && n
              }(e) ? e : (Qt() && console.warn("WARNING: sanitizing unsafe style value " + e + " (see http://g.co/ng/security#xss)."), "unsafe")
            }(t));
          case hr.SCRIPT:
            if (t instanceof El) return t.changingThisBreaksApplicationSecurity;
            throw this.checkNotSafeValue(t, "Script"), new Error("unsafe value used in a script context");
          case hr.URL:
            return t instanceof kl || t instanceof Tl ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "URL"), Xn(String(t)));
          case hr.RESOURCE_URL:
            if (t instanceof kl) return t.changingThisBreaksApplicationSecurity;
            throw this.checkNotSafeValue(t, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
          default:
            throw new Error("Unexpected SecurityContext " + e + " (see http://g.co/ng/security#xss)")
        }
      }, t.prototype.checkNotSafeValue = function (e, t) {
        if (e instanceof wl) throw new Error("Required a safe " + t + ", got a " + e.getTypeName() + " (see http://g.co/ng/security#xss)")
      }, t.prototype.bypassSecurityTrustHtml = function (e) {
        return new xl(e)
      }, t.prototype.bypassSecurityTrustStyle = function (e) {
        return new Cl(e)
      }, t.prototype.bypassSecurityTrustScript = function (e) {
        return new El(e)
      }, t.prototype.bypassSecurityTrustUrl = function (e) {
        return new Tl(e)
      }, t.prototype.bypassSecurityTrustResourceUrl = function (e) {
        return new kl(e)
      }, t
    }(bl), wl = function () {
      function e(e) {
        this.changingThisBreaksApplicationSecurity = e
      }

      return e.prototype.toString = function () {
        return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"
      }, e
    }(), xl = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }

      return o(t, e), t.prototype.getTypeName = function () {
        return "HTML"
      }, t
    }(wl), Cl = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }

      return o(t, e), t.prototype.getTypeName = function () {
        return "Style"
      }, t
    }(wl), El = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }

      return o(t, e), t.prototype.getTypeName = function () {
        return "Script"
      }, t
    }(wl), Tl = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }

      return o(t, e), t.prototype.getTypeName = function () {
        return "URL"
      }, t
    }(wl), kl = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }

      return o(t, e), t.prototype.getTypeName = function () {
        return "ResourceURL"
      }, t
    }(wl), Sl = Kt(Fn, "browser", [{provide: pt, useValue: "browser"}, {
      provide: ct, useValue: function () {
        Sa.makeCurrent(), Ra.init()
      }, multi: !0
    }, {provide: Is, useClass: Aa, deps: [Oa]}, {
      provide: Oa, useFactory: function () {
        return document
      }, deps: []
    }]);

    function Il() {
      return new nt
    }

    var Ol = function () {
      function e(e) {
        if (e) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
      }

      return e.withServerTransition = function (t) {
        return {ngModule: e, providers: [{provide: at, useValue: t.appId}, {provide: Na, useExisting: at}, Va]}
      }, e
    }();
    "undefined" != typeof window && window;
    var Pl = function () {
      function e() {
        this._accessors = []
      }

      return e.prototype.add = function (e, t) {
        this._accessors.push([e, t])
      }, e.prototype.remove = function (e) {
        for (var t = this._accessors.length - 1; t >= 0; --t) if (this._accessors[t][1] === e) return void this._accessors.splice(t, 1)
      }, e.prototype.select = function (e) {
        var t = this;
        this._accessors.forEach(function (n) {
          t._isSameGroup(n, e) && n[1] !== e && n[1].fireUncheck(e.value)
        })
      }, e.prototype._isSameGroup = function (e, t) {
        return !!e[0].control && e[0]._parent === t._control._parent && e[1].name === t.name
      }, e
    }(), Al = function () {
      return function () {
      }
    }(), Ml = function () {
      return function () {
      }
    }();
    var Nl = function () {
      function e(e) {
        var t = this;
        this.normalizedNames = new Map, this.lazyUpdate = null, e ? this.lazyInit = "string" == typeof e ? function () {
          t.headers = new Map, e.split("\n").forEach(function (e) {
            var n = e.indexOf(":");
            if (n > 0) {
              var r = e.slice(0, n), o = r.toLowerCase(), i = e.slice(n + 1).trim();
              t.maybeSetNormalizedName(r, o), t.headers.has(o) ? t.headers.get(o).push(i) : t.headers.set(o, [i])
            }
          })
        } : function () {
          t.headers = new Map, Object.keys(e).forEach(function (n) {
            var r = e[n], o = n.toLowerCase();
            "string" == typeof r && (r = [r]), r.length > 0 && (t.headers.set(o, r), t.maybeSetNormalizedName(n, o))
          })
        } : this.headers = new Map
      }

      return e.prototype.has = function (e) {
        return this.init(), this.headers.has(e.toLowerCase())
      }, e.prototype.get = function (e) {
        this.init();
        var t = this.headers.get(e.toLowerCase());
        return t && t.length > 0 ? t[0] : null
      }, e.prototype.keys = function () {
        return this.init(), Array.from(this.normalizedNames.values())
      }, e.prototype.getAll = function (e) {
        return this.init(), this.headers.get(e.toLowerCase()) || null
      }, e.prototype.append = function (e, t) {
        return this.clone({name: e, value: t, op: "a"})
      }, e.prototype.set = function (e, t) {
        return this.clone({name: e, value: t, op: "s"})
      }, e.prototype.delete = function (e, t) {
        return this.clone({name: e, value: t, op: "d"})
      }, e.prototype.maybeSetNormalizedName = function (e, t) {
        this.normalizedNames.has(t) || this.normalizedNames.set(t, e)
      }, e.prototype.init = function () {
        var t = this;
        this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(function (e) {
          return t.applyUpdate(e)
        }), this.lazyUpdate = null))
      }, e.prototype.copyFrom = function (e) {
        var t = this;
        e.init(), Array.from(e.headers.keys()).forEach(function (n) {
          t.headers.set(n, e.headers.get(n)), t.normalizedNames.set(n, e.normalizedNames.get(n))
        })
      }, e.prototype.clone = function (t) {
        var n = new e;
        return n.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this, n.lazyUpdate = (this.lazyUpdate || []).concat([t]), n
      }, e.prototype.applyUpdate = function (e) {
        var t = e.name.toLowerCase();
        switch (e.op) {
          case"a":
          case"s":
            var n = e.value;
            if ("string" == typeof n && (n = [n]), 0 === n.length) return;
            this.maybeSetNormalizedName(e.name, t);
            var r = ("a" === e.op ? this.headers.get(t) : void 0) || [];
            r.push.apply(r, l(n)), this.headers.set(t, r);
            break;
          case"d":
            var o = e.value;
            if (o) {
              var i = this.headers.get(t);
              if (!i) return;
              0 === (i = i.filter(function (e) {
                return -1 === o.indexOf(e)
              })).length ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, i)
            } else this.headers.delete(t), this.normalizedNames.delete(t)
        }
      }, e.prototype.forEach = function (e) {
        var t = this;
        this.init(), Array.from(this.normalizedNames.keys()).forEach(function (n) {
          return e(t.normalizedNames.get(n), t.headers.get(n))
        })
      }, e
    }(), Vl = function () {
      function e() {
      }

      return e.prototype.encodeKey = function (e) {
        return Rl(e)
      }, e.prototype.encodeValue = function (e) {
        return Rl(e)
      }, e.prototype.decodeKey = function (e) {
        return decodeURIComponent(e)
      }, e.prototype.decodeValue = function (e) {
        return decodeURIComponent(e)
      }, e
    }();

    function Rl(e) {
      return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
    }

    var Dl = function () {
      function e(e) {
        void 0 === e && (e = {});
        var t, n, r, o = this;
        if (this.updates = null, this.cloneFrom = null, this.encoder = e.encoder || new Vl, e.fromString) {
          if (e.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
          this.map = (t = e.fromString, n = this.encoder, r = new Map, t.length > 0 && t.split("&").forEach(function (e) {
            var t = e.indexOf("="),
              o = a(-1 == t ? [n.decodeKey(e), ""] : [n.decodeKey(e.slice(0, t)), n.decodeValue(e.slice(t + 1))], 2),
              i = o[0], s = o[1], l = r.get(i) || [];
            l.push(s), r.set(i, l)
          }), r)
        } else e.fromObject ? (this.map = new Map, Object.keys(e.fromObject).forEach(function (t) {
          var n = e.fromObject[t];
          o.map.set(t, Array.isArray(n) ? n : [n])
        })) : this.map = null
      }

      return e.prototype.has = function (e) {
        return this.init(), this.map.has(e)
      }, e.prototype.get = function (e) {
        this.init();
        var t = this.map.get(e);
        return t ? t[0] : null
      }, e.prototype.getAll = function (e) {
        return this.init(), this.map.get(e) || null
      }, e.prototype.keys = function () {
        return this.init(), Array.from(this.map.keys())
      }, e.prototype.append = function (e, t) {
        return this.clone({param: e, value: t, op: "a"})
      }, e.prototype.set = function (e, t) {
        return this.clone({param: e, value: t, op: "s"})
      }, e.prototype.delete = function (e, t) {
        return this.clone({param: e, value: t, op: "d"})
      }, e.prototype.toString = function () {
        var e = this;
        return this.init(), this.keys().map(function (t) {
          var n = e.encoder.encodeKey(t);
          return e.map.get(t).map(function (t) {
            return n + "=" + e.encoder.encodeValue(t)
          }).join("&")
        }).join("&")
      }, e.prototype.clone = function (t) {
        var n = new e({encoder: this.encoder});
        return n.cloneFrom = this.cloneFrom || this, n.updates = (this.updates || []).concat([t]), n
      }, e.prototype.init = function () {
        var e = this;
        null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(function (t) {
          return e.map.set(t, e.cloneFrom.map.get(t))
        }), this.updates.forEach(function (t) {
          switch (t.op) {
            case"a":
            case"s":
              var n = ("a" === t.op ? e.map.get(t.param) : void 0) || [];
              n.push(t.value), e.map.set(t.param, n);
              break;
            case"d":
              if (void 0 === t.value) {
                e.map.delete(t.param);
                break
              }
              var r = e.map.get(t.param) || [], o = r.indexOf(t.value);
              -1 !== o && r.splice(o, 1), r.length > 0 ? e.map.set(t.param, r) : e.map.delete(t.param)
          }
        }), this.cloneFrom = null)
      }, e
    }();

    function jl(e) {
      return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
    }

    function Hl(e) {
      return "undefined" != typeof Blob && e instanceof Blob
    }

    function Fl(e) {
      return "undefined" != typeof FormData && e instanceof FormData
    }

    var zl = function () {
      function e(e, t, n, r) {
        var o;
        if (this.url = t, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = e.toUpperCase(), function (e) {
          switch (e) {
            case"DELETE":
            case"GET":
            case"HEAD":
            case"OPTIONS":
            case"JSONP":
              return !1;
            default:
              return !0
          }
        }(this.method) || r ? (this.body = void 0 !== n ? n : null, o = r) : o = n, o && (this.reportProgress = !!o.reportProgress, this.withCredentials = !!o.withCredentials, o.responseType && (this.responseType = o.responseType), o.headers && (this.headers = o.headers), o.params && (this.params = o.params)), this.headers || (this.headers = new Nl), this.params) {
          var i = this.params.toString();
          if (0 === i.length) this.urlWithParams = t; else {
            var s = t.indexOf("?");
            this.urlWithParams = t + (-1 === s ? "?" : s < t.length - 1 ? "&" : "") + i
          }
        } else this.params = new Dl, this.urlWithParams = t
      }

      return e.prototype.serializeBody = function () {
        return null === this.body ? null : jl(this.body) || Hl(this.body) || Fl(this.body) || "string" == typeof this.body ? this.body : this.body instanceof Dl ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
      }, e.prototype.detectContentTypeHeader = function () {
        return null === this.body ? null : Fl(this.body) ? null : Hl(this.body) ? this.body.type || null : jl(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof Dl ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
      }, e.prototype.clone = function (t) {
        void 0 === t && (t = {});
        var n = t.method || this.method, r = t.url || this.url, o = t.responseType || this.responseType,
          i = void 0 !== t.body ? t.body : this.body,
          s = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
          a = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress, l = t.headers || this.headers,
          u = t.params || this.params;
        return void 0 !== t.setHeaders && (l = Object.keys(t.setHeaders).reduce(function (e, n) {
          return e.set(n, t.setHeaders[n])
        }, l)), t.setParams && (u = Object.keys(t.setParams).reduce(function (e, n) {
          return e.set(n, t.setParams[n])
        }, u)), new e(n, r, i, {params: u, headers: l, reportProgress: a, responseType: o, withCredentials: s})
      }, e
    }(), Ll = function (e) {
      return e[e.Sent = 0] = "Sent", e[e.UploadProgress = 1] = "UploadProgress", e[e.ResponseHeader = 2] = "ResponseHeader", e[e.DownloadProgress = 3] = "DownloadProgress", e[e.Response = 4] = "Response", e[e.User = 5] = "User", e
    }({}), Bl = function (e) {
      function t(t) {
        void 0 === t && (t = {});
        var n = e.call(this, t) || this;
        return n.type = Ll.Response, n.body = void 0 !== t.body ? t.body : null, n
      }

      return o(t, e), t.prototype.clone = function (e) {
        return void 0 === e && (e = {}), new t({
          body: void 0 !== e.body ? e.body : this.body,
          headers: e.headers || this.headers,
          status: void 0 !== e.status ? e.status : this.status,
          statusText: e.statusText || this.statusText,
          url: e.url || this.url || void 0
        })
      }, t
    }(function () {
      return function (e, t, n) {
        void 0 === t && (t = 200), void 0 === n && (n = "OK"), this.headers = e.headers || new Nl, this.status = void 0 !== e.status ? e.status : t, this.statusText = e.statusText || n, this.url = e.url || null, this.ok = this.status >= 200 && this.status < 300
      }
    }());

    function Ul(e, t) {
      return {
        body: t,
        headers: e.headers,
        observe: e.observe,
        params: e.params,
        reportProgress: e.reportProgress,
        responseType: e.responseType,
        withCredentials: e.withCredentials
      }
    }

    var Zl = function () {
      function e(e) {
        this.handler = e
      }

      return e.prototype.request = function (e, t, n) {
        var r, o = this;
        if (void 0 === n && (n = {}), e instanceof zl) r = e; else {
          var i;
          i = n.headers instanceof Nl ? n.headers : new Nl(n.headers);
          var s = void 0;
          n.params && (s = n.params instanceof Dl ? n.params : new Dl({fromObject: n.params})), r = new zl(e, t, void 0 !== n.body ? n.body : null, {
            headers: i,
            params: s,
            reportProgress: n.reportProgress,
            responseType: n.responseType || "json",
            withCredentials: n.withCredentials
          })
        }
        var a = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n, r, o = e[e.length - 1];
          switch (V(o) ? e.pop() : o = void 0, e.length) {
            case 0:
              return function (e) {
                return e ? function (e) {
                  return new S(function (t) {
                    return e.schedule(function () {
                      return t.complete()
                    })
                  })
                }(e) : la
              }(o);
            case 1:
              return o ? Q(e, o) : (n = e[0], (r = new S(function (e) {
                e.next(n), e.complete()
              }))._isScalar = !0, r.value = n, r);
            default:
              return Q(e, o)
          }
        }(r).pipe(Y(function (e) {
          return o.handler.handle(e)
        }, void 0, 1));
        if (e instanceof zl || "events" === n.observe) return a;
        var l, u = a.pipe((l = function (e) {
          return e instanceof Bl
        }, function (e) {
          return e.lift(new sa(l, void 0))
        }));
        switch (n.observe || "body") {
          case"body":
            switch (r.responseType) {
              case"arraybuffer":
                return u.pipe($(function (e) {
                  if (null !== e.body && !(e.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                  return e.body
                }));
              case"blob":
                return u.pipe($(function (e) {
                  if (null !== e.body && !(e.body instanceof Blob)) throw new Error("Response is not a Blob.");
                  return e.body
                }));
              case"text":
                return u.pipe($(function (e) {
                  if (null !== e.body && "string" != typeof e.body) throw new Error("Response is not a string.");
                  return e.body
                }));
              case"json":
              default:
                return u.pipe($(function (e) {
                  return e.body
                }))
            }
          case"response":
            return u;
          default:
            throw new Error("Unreachable: unhandled observe type " + n.observe + "}")
        }
      }, e.prototype.delete = function (e, t) {
        return void 0 === t && (t = {}), this.request("DELETE", e, t)
      }, e.prototype.get = function (e, t) {
        return void 0 === t && (t = {}), this.request("GET", e, t)
      }, e.prototype.head = function (e, t) {
        return void 0 === t && (t = {}), this.request("HEAD", e, t)
      }, e.prototype.jsonp = function (e, t) {
        return this.request("JSONP", e, {
          params: (new Dl).append(t, "JSONP_CALLBACK"),
          observe: "body",
          responseType: "json"
        })
      }, e.prototype.options = function (e, t) {
        return void 0 === t && (t = {}), this.request("OPTIONS", e, t)
      }, e.prototype.patch = function (e, t, n) {
        return void 0 === n && (n = {}), this.request("PATCH", e, Ul(n, t))
      }, e.prototype.post = function (e, t, n) {
        return void 0 === n && (n = {}), this.request("POST", e, Ul(n, t))
      }, e.prototype.put = function (e, t, n) {
        return void 0 === n && (n = {}), this.request("PUT", e, Ul(n, t))
      }, e
    }(), ql = function () {
      return function () {
      }
    }(), $l = Es(ks, [Ss], function (e) {
      return function (e) {
        for (var t = {}, n = [], r = !1, o = 0; o < e.length; o++) {
          var i = e[o];
          i.token === rt && (r = !0), 1073741824 & i.flags && n.push(i.token), i.index = o, t[Ir(i.token)] = i
        }
        return {factory: null, providersByKey: t, providers: e, modules: n, isRoot: r}
      }([fo(512, Et, Tt, [[8, [ba]], [3, Et], St]), fo(5120, zn, Un, [[3, zn]]), fo(4608, Vs, Rs, [zn, [2, Ns]]), fo(4608, gt, gt, []), fo(5120, at, lt, []), fo(5120, Vn, Ln, []), fo(5120, Rn, Bn, []), fo(4608, bl, _l, [qs]), fo(6144, fr, null, [bl]), fo(4608, hl, fl, []), fo(5120, za, function (e, t, n, r, o, i, s) {
        return [new pl(e, t, n), new ml(r), new gl(o, i, s)]
      }, [qs, Rt, [2, pt], qs, qs, hl, ht]), fo(4608, La, La, [za, Rt]), fo(135680, Za, Za, [qs]), fo(4608, Ka, Ka, [La, Za]), fo(6144, on, null, [Ka]), fo(6144, Ua, null, [Za]), fo(4608, Ut, Ut, [Rt]), fo(4608, Ma, Ma, [qs]), fo(4608, Da, Da, [qs]), fo(4608, Pl, Pl, []), fo(4608, ca, ca, [[2, Zl], ua]), fo(1073742336, Zs, Zs, []), fo(1024, nt, Il, []), fo(1024, it, function (e) {
        return [(t = e, ja("probe", Fa), ja("coreTokens", i({}, Ha, (t || []).reduce(function (e, t) {
          return e[t.name] = t.token, e
        }, {}))), function () {
          return Fa
        })];
        var t
      }, [[2, Yt]]), fo(512, st, st, [[2, it]]), fo(131584, tn, tn, [Rt, ht, Ae, nt, Et, st]), fo(1073742336, Zn, Zn, [tn]), fo(1073742336, Ol, Ol, [[3, Ol]]), fo(1073742336, Al, Al, []), fo(1073742336, Ml, Ml, []), fo(1073742336, ql, ql, []), fo(1073742336, ha, ha, []), fo(1073742336, ks, ks, []), fo(256, rt, !0, []), fo(256, ua, {
        gfm: !0,
        tables: !0,
        breaks: !1,
        pedantic: !1,
        sanitize: !1,
        smartLists: !0,
        smartypants: !1
      }, [])])
    });
    (function () {
      if (Wt) throw new Error("Cannot enable prod mode after platform setup.");
      $t = !1
    })(), Sl().bootstrapModuleFactory($l).catch(function (e) {
      return console.log(e)
    })
  }, 0: function (e, t, n) {
    e.exports = n("/o+h")
  }, DlQD: function (e, t, n) {
    !function (t) {
      "use strict";
      var n = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: g,
        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
        nptable: g,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
        table: g,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
        text: /^[^\n]+/
      };

      function r(e) {
        this.tokens = [], this.tokens.links = Object.create(null), this.options = e || b.defaults, this.rules = n.normal, this.options.pedantic ? this.rules = n.pedantic : this.options.gfm && (this.rules = this.options.tables ? n.tables : n.gfm)
      }

      n._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, n._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, n.def = p(n.def).replace("label", n._label).replace("title", n._title).getRegex(), n.bullet = /(?:[*+-]|\d+\.)/, n.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, n.item = p(n.item, "gm").replace(/bull/g, n.bullet).getRegex(), n.list = p(n.list).replace(/bull/g, n.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + n.def.source + ")").getRegex(), n._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", n._comment = /<!--(?!-?>)[\s\S]*?-->/, n.html = p(n.html, "i").replace("comment", n._comment).replace("tag", n._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), n.paragraph = p(n.paragraph).replace("hr", n.hr).replace("heading", n.heading).replace("lheading", n.lheading).replace("tag", n._tag).getRegex(), n.blockquote = p(n.blockquote).replace("paragraph", n.paragraph).getRegex(), n.normal = v({}, n), n.gfm = v({}, n.normal, {
        fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
        paragraph: /^/,
        heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
      }), n.gfm.paragraph = p(n.paragraph).replace("(?!", "(?!" + n.gfm.fences.source.replace("\\1", "\\2") + "|" + n.list.source.replace("\\1", "\\3") + "|").getRegex(), n.tables = v({}, n.gfm, {
        nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
        table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
      }), n.pedantic = v({}, n.normal, {
        html: p("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", n._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
      }), r.rules = n, r.lex = function (e, t) {
        return new r(t).lex(e)
      }, r.prototype.lex = function (e) {
        return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
      }, r.prototype.token = function (e, t) {
        var r, o, i, s, a, l, u, c, p, d, h, f, g, v, b, _;
        for (e = e.replace(/^ +$/gm, ""); e;) if ((i = this.rules.newline.exec(e)) && (e = e.substring(i[0].length), i[0].length > 1 && this.tokens.push({type: "space"})), i = this.rules.code.exec(e)) e = e.substring(i[0].length), i = i[0].replace(/^ {4}/gm, ""), this.tokens.push({
          type: "code",
          text: this.options.pedantic ? i : m(i, "\n")
        }); else if (i = this.rules.fences.exec(e)) e = e.substring(i[0].length), this.tokens.push({
          type: "code",
          lang: i[2],
          text: i[3] || ""
        }); else if (i = this.rules.heading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
          type: "heading",
          depth: i[1].length,
          text: i[2]
        }); else if (t && (i = this.rules.nptable.exec(e)) && (l = {
          type: "table",
          header: y(i[1].replace(/^ *| *\| *$/g, "")),
          align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
        }).header.length === l.align.length) {
          for (e = e.substring(i[0].length), h = 0; h < l.align.length; h++) l.align[h] = /^ *-+: *$/.test(l.align[h]) ? "right" : /^ *:-+: *$/.test(l.align[h]) ? "center" : /^ *:-+ *$/.test(l.align[h]) ? "left" : null;
          for (h = 0; h < l.cells.length; h++) l.cells[h] = y(l.cells[h], l.header.length);
          this.tokens.push(l)
        } else if (i = this.rules.hr.exec(e)) e = e.substring(i[0].length), this.tokens.push({type: "hr"}); else if (i = this.rules.blockquote.exec(e)) e = e.substring(i[0].length), this.tokens.push({type: "blockquote_start"}), i = i[0].replace(/^ *> ?/gm, ""), this.token(i, t), this.tokens.push({type: "blockquote_end"}); else if (i = this.rules.list.exec(e)) {
          for (e = e.substring(i[0].length), this.tokens.push(u = {
            type: "list_start",
            ordered: v = (s = i[2]).length > 1,
            start: v ? +s : "",
            loose: !1
          }), c = [], r = !1, g = (i = i[0].match(this.rules.item)).length, h = 0; h < g; h++) d = (l = i[h]).length, ~(l = l.replace(/^ *([*+-]|\d+\.) +/, "")).indexOf("\n ") && (d -= l.length, l = l.replace(this.options.pedantic ? /^ {1,4}/gm : new RegExp("^ {1," + d + "}", "gm"), "")), this.options.smartLists && h !== g - 1 && (s === (a = n.bullet.exec(i[h + 1])[0]) || s.length > 1 && a.length > 1 || (e = i.slice(h + 1).join("\n") + e, h = g - 1)), o = r || /\n\n(?!\s*$)/.test(l), h !== g - 1 && (r = "\n" === l.charAt(l.length - 1), o || (o = r)), o && (u.loose = !0), _ = void 0, (b = /^\[[ xX]\] /.test(l)) && (_ = " " !== l[1], l = l.replace(/^\[[ xX]\] +/, "")), c.push(p = {
            type: "list_item_start",
            task: b,
            checked: _,
            loose: o
          }), this.tokens.push(p), this.token(l, !1), this.tokens.push({type: "list_item_end"});
          if (u.loose) for (g = c.length, h = 0; h < g; h++) c[h].loose = !0;
          this.tokens.push({type: "list_end"})
        } else if (i = this.rules.html.exec(e)) e = e.substring(i[0].length), this.tokens.push({
          type: this.options.sanitize ? "paragraph" : "html",
          pre: !this.options.sanitizer && ("pre" === i[1] || "script" === i[1] || "style" === i[1]),
          text: i[0]
        }); else if (t && (i = this.rules.def.exec(e))) e = e.substring(i[0].length), i[3] && (i[3] = i[3].substring(1, i[3].length - 1)), f = i[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[f] || (this.tokens.links[f] = {
          href: i[2],
          title: i[3]
        }); else if (t && (i = this.rules.table.exec(e)) && (l = {
          type: "table",
          header: y(i[1].replace(/^ *| *\| *$/g, "")),
          align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          cells: i[3] ? i[3].replace(/(?: *\| *)?\n$/, "").split("\n") : []
        }).header.length === l.align.length) {
          for (e = e.substring(i[0].length), h = 0; h < l.align.length; h++) l.align[h] = /^ *-+: *$/.test(l.align[h]) ? "right" : /^ *:-+: *$/.test(l.align[h]) ? "center" : /^ *:-+ *$/.test(l.align[h]) ? "left" : null;
          for (h = 0; h < l.cells.length; h++) l.cells[h] = y(l.cells[h].replace(/^ *\| *| *\| *$/g, ""), l.header.length);
          this.tokens.push(l)
        } else if (i = this.rules.lheading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
          type: "heading",
          depth: "=" === i[2] ? 1 : 2,
          text: i[1]
        }); else if (t && (i = this.rules.paragraph.exec(e))) e = e.substring(i[0].length), this.tokens.push({
          type: "paragraph",
          text: "\n" === i[1].charAt(i[1].length - 1) ? i[1].slice(0, -1) : i[1]
        }); else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), this.tokens.push({
          type: "text",
          text: i[0]
        }); else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
        return this.tokens
      };
      var o = {
        escape: /^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: g,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
        nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
        strong: /^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
        em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
        code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: g,
        text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
      };

      function i(e, t) {
        if (this.options = t || b.defaults, this.links = e, this.rules = o.normal, this.renderer = this.options.renderer || new s, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
        this.options.pedantic ? this.rules = o.pedantic : this.options.gfm && (this.rules = this.options.breaks ? o.breaks : o.gfm)
      }

      function s(e) {
        this.options = e || b.defaults
      }

      function a() {
      }

      function l(e) {
        this.tokens = [], this.token = null, this.options = e || b.defaults, this.options.renderer = this.options.renderer || new s, this.renderer = this.options.renderer, this.renderer.options = this.options
      }

      function u(e, t) {
        return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
      }

      function c(e) {
        return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (e, t) {
          return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
        })
      }

      function p(e, t) {
        return e = e.source || e, t = t || "", {
          replace: function (t, n) {
            return n = (n = n.source || n).replace(/(^|[^\[])\^/g, "$1"), e = e.replace(t, n), this
          }, getRegex: function () {
            return new RegExp(e, t)
          }
        }
      }

      function d(e, t) {
        return h[" " + e] || (h[" " + e] = /^[^:]+:\/*[^\/]*$/.test(e) ? e + "/" : m(e, "/", !0)), e = h[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + t : e + t
      }

      o._escapes = /\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g, o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, o._email = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, o.autolink = p(o.autolink).replace("scheme", o._scheme).replace("email", o._email).getRegex(), o._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, o.tag = p(o.tag).replace("comment", n._comment).replace("attribute", o._attribute).getRegex(), o._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/, o._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f\\]*\)|[^\s\x00-\x1f()\\])*?)/, o._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, o.link = p(o.link).replace("label", o._label).replace("href", o._href).replace("title", o._title).getRegex(), o.reflink = p(o.reflink).replace("label", o._label).getRegex(), o.normal = v({}, o), o.pedantic = v({}, o.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
        link: p(/^!?\[(label)\]\((.*?)\)/).replace("label", o._label).getRegex(),
        reflink: p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", o._label).getRegex()
      }), o.gfm = v({}, o.normal, {
        escape: p(o.escape).replace("])", "~|])").getRegex(),
        url: p(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email", o._email).getRegex(),
        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^~+(?=\S)([\s\S]*?\S)~+/,
        text: p(o.text).replace("]|", "~]|").replace("|", "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()
      }), o.breaks = v({}, o.gfm, {
        br: p(o.br).replace("{2,}", "*").getRegex(),
        text: p(o.gfm.text).replace("{2,}", "*").getRegex()
      }), i.rules = o, i.output = function (e, t, n) {
        return new i(t, n).output(e)
      }, i.prototype.output = function (e) {
        for (var t, n, r, o, s, a, l = ""; e;) if (s = this.rules.escape.exec(e)) e = e.substring(s[0].length), l += s[1]; else if (s = this.rules.autolink.exec(e)) e = e.substring(s[0].length), r = "@" === s[2] ? "mailto:" + (n = u(this.mangle(s[1]))) : n = u(s[1]), l += this.renderer.link(r, null, n); else if (this.inLink || !(s = this.rules.url.exec(e))) {
          if (s = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(s[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(s[0]) && (this.inLink = !1), e = e.substring(s[0].length), l += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(s[0]) : u(s[0]) : s[0]; else if (s = this.rules.link.exec(e)) e = e.substring(s[0].length), this.inLink = !0, r = s[2], this.options.pedantic ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r)) ? (r = t[1], o = t[3]) : o = "" : o = s[3] ? s[3].slice(1, -1) : "", r = r.trim().replace(/^<([\s\S]*)>$/, "$1"), l += this.outputLink(s, {
            href: i.escapes(r),
            title: i.escapes(o)
          }), this.inLink = !1; else if ((s = this.rules.reflink.exec(e)) || (s = this.rules.nolink.exec(e))) {
            if (e = e.substring(s[0].length), t = (s[2] || s[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
              l += s[0].charAt(0), e = s[0].substring(1) + e;
              continue
            }
            this.inLink = !0, l += this.outputLink(s, t), this.inLink = !1
          } else if (s = this.rules.strong.exec(e)) e = e.substring(s[0].length), l += this.renderer.strong(this.output(s[4] || s[3] || s[2] || s[1])); else if (s = this.rules.em.exec(e)) e = e.substring(s[0].length), l += this.renderer.em(this.output(s[6] || s[5] || s[4] || s[3] || s[2] || s[1])); else if (s = this.rules.code.exec(e)) e = e.substring(s[0].length), l += this.renderer.codespan(u(s[2].trim(), !0)); else if (s = this.rules.br.exec(e)) e = e.substring(s[0].length), l += this.renderer.br(); else if (s = this.rules.del.exec(e)) e = e.substring(s[0].length), l += this.renderer.del(this.output(s[1])); else if (s = this.rules.text.exec(e)) e = e.substring(s[0].length), l += this.renderer.text(u(this.smartypants(s[0]))); else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
        } else {
          do {
            a = s[0], s[0] = this.rules._backpedal.exec(s[0])[0]
          } while (a !== s[0]);
          e = e.substring(s[0].length), "@" === s[2] ? r = "mailto:" + (n = u(s[0])) : (n = u(s[0]), r = "www." === s[1] ? "http://" + n : n), l += this.renderer.link(r, null, n)
        }
        return l
      }, i.escapes = function (e) {
        return e ? e.replace(i.rules._escapes, "$1") : e
      }, i.prototype.outputLink = function (e, t) {
        var n = t.href, r = t.title ? u(t.title) : null;
        return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, u(e[1]))
      }, i.prototype.smartypants = function (e) {
        return this.options.smartypants ? e.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026") : e
      }, i.prototype.mangle = function (e) {
        if (!this.options.mangle) return e;
        for (var t, n = "", r = e.length, o = 0; o < r; o++) t = e.charCodeAt(o), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
        return n
      }, s.prototype.code = function (e, t, n) {
        if (this.options.highlight) {
          var r = this.options.highlight(e, t);
          null != r && r !== e && (n = !0, e = r)
        }
        return t ? '<pre><code class="' + this.options.langPrefix + u(t, !0) + '">' + (n ? e : u(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : u(e, !0)) + "</code></pre>"
      }, s.prototype.blockquote = function (e) {
        return "<blockquote>\n" + e + "</blockquote>\n"
      }, s.prototype.html = function (e) {
        return e
      }, s.prototype.heading = function (e, t, n) {
        return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
      }, s.prototype.hr = function () {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
      }, s.prototype.list = function (e, t, n) {
        var r = t ? "ol" : "ul";
        return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
      }, s.prototype.listitem = function (e) {
        return "<li>" + e + "</li>\n"
      }, s.prototype.checkbox = function (e) {
        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
      }, s.prototype.paragraph = function (e) {
        return "<p>" + e + "</p>\n"
      }, s.prototype.table = function (e, t) {
        return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
      }, s.prototype.tablerow = function (e) {
        return "<tr>\n" + e + "</tr>\n"
      }, s.prototype.tablecell = function (e, t) {
        var n = t.header ? "th" : "td";
        return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
      }, s.prototype.strong = function (e) {
        return "<strong>" + e + "</strong>"
      }, s.prototype.em = function (e) {
        return "<em>" + e + "</em>"
      }, s.prototype.codespan = function (e) {
        return "<code>" + e + "</code>"
      }, s.prototype.br = function () {
        return this.options.xhtml ? "<br/>" : "<br>"
      }, s.prototype.del = function (e) {
        return "<del>" + e + "</del>"
      }, s.prototype.link = function (e, t, n) {
        if (this.options.sanitize) {
          try {
            var r = decodeURIComponent(c(e)).replace(/[^\w:]/g, "").toLowerCase()
          } catch (i) {
            return n
          }
          if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return n
        }
        this.options.baseUrl && !f.test(e) && (e = d(this.options.baseUrl, e));
        try {
          e = encodeURI(e).replace(/%25/g, "%")
        } catch (i) {
          return n
        }
        var o = '<a href="' + u(e) + '"';
        return t && (o += ' title="' + t + '"'), o + ">" + n + "</a>"
      }, s.prototype.image = function (e, t, n) {
        this.options.baseUrl && !f.test(e) && (e = d(this.options.baseUrl, e));
        var r = '<img src="' + e + '" alt="' + n + '"';
        return t && (r += ' title="' + t + '"'), r + (this.options.xhtml ? "/>" : ">")
      }, s.prototype.text = function (e) {
        return e
      }, a.prototype.strong = a.prototype.em = a.prototype.codespan = a.prototype.del = a.prototype.text = function (e) {
        return e
      }, a.prototype.link = a.prototype.image = function (e, t, n) {
        return "" + n
      }, a.prototype.br = function () {
        return ""
      }, l.parse = function (e, t) {
        return new l(t).parse(e)
      }, l.prototype.parse = function (e) {
        this.inline = new i(e.links, this.options), this.inlineText = new i(e.links, v({}, this.options, {renderer: new a})), this.tokens = e.reverse();
        for (var t = ""; this.next();) t += this.tok();
        return t
      }, l.prototype.next = function () {
        return this.token = this.tokens.pop()
      }, l.prototype.peek = function () {
        return this.tokens[this.tokens.length - 1] || 0
      }, l.prototype.parseText = function () {
        for (var e = this.token.text; "text" === this.peek().type;) e += "\n" + this.next().text;
        return this.inline.output(e)
      }, l.prototype.tok = function () {
        switch (this.token.type) {
          case"space":
            return "";
          case"hr":
            return this.renderer.hr();
          case"heading":
            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, c(this.inlineText.output(this.token.text)));
          case"code":
            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
          case"table":
            var e, t, n, r, o = "", i = "";
            for (n = "", e = 0; e < this.token.header.length; e++) n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
              header: !0,
              align: this.token.align[e]
            });
            for (o += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
              for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
                header: !1,
                align: this.token.align[r]
              });
              i += this.renderer.tablerow(n)
            }
            return this.renderer.table(o, i);
          case"blockquote_start":
            for (i = ""; "blockquote_end" !== this.next().type;) i += this.tok();
            return this.renderer.blockquote(i);
          case"list_start":
            i = "";
            for (var s = this.token.ordered, a = this.token.start; "list_end" !== this.next().type;) i += this.tok();
            return this.renderer.list(i, s, a);
          case"list_item_start":
            i = "";
            var l = this.token.loose;
            for (this.token.task && (i += this.renderer.checkbox(this.token.checked)); "list_item_end" !== this.next().type;) i += l || "text" !== this.token.type ? this.tok() : this.parseText();
            return this.renderer.listitem(i);
          case"html":
            return this.renderer.html(this.token.text);
          case"paragraph":
            return this.renderer.paragraph(this.inline.output(this.token.text));
          case"text":
            return this.renderer.paragraph(this.parseText())
        }
      };
      var h = {}, f = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

      function g() {
      }

      function v(e) {
        for (var t, n, r = 1; r < arguments.length; r++) for (n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
      }

      function y(e, t) {
        var n = e.replace(/\|/g, function (e, t, n) {
          for (var r = !1, o = t; --o >= 0 && "\\" === n[o];) r = !r;
          return r ? "|" : " |"
        }).split(/ \|/), r = 0;
        if (n.length > t) n.splice(t); else for (; n.length < t;) n.push("");
        for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
        return n
      }

      function m(e, t, n) {
        if (0 === e.length) return "";
        for (var r = 0; r < e.length;) {
          var o = e.charAt(e.length - r - 1);
          if (o !== t || n) {
            if (o === t || !n) break;
            r++
          } else r++
        }
        return e.substr(0, e.length - r)
      }

      function b(e, t, n) {
        if (null == e) throw new Error("marked(): input parameter is undefined or null");
        if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
        if (n || "function" == typeof t) {
          n || (n = t, t = null);
          var o, i, s = (t = v({}, b.defaults, t || {})).highlight, a = 0;
          try {
            o = r.lex(e, t)
          } catch (p) {
            return n(p)
          }
          i = o.length;
          var c = function (e) {
            if (e) return t.highlight = s, n(e);
            var r;
            try {
              r = l.parse(o, t)
            } catch (p) {
              e = p
            }
            return t.highlight = s, e ? n(e) : n(null, r)
          };
          if (!s || s.length < 3) return c();
          if (delete t.highlight, !i) return c();
          for (; a < o.length; a++) !function (e) {
            "code" !== e.type ? --i || c() : s(e.text, e.lang, function (t, n) {
              return t ? c(t) : null == n || n === e.text ? --i || c() : (e.text = n, e.escaped = !0, void (--i || c()))
            })
          }(o[a])
        } else try {
          return t && (t = v({}, b.defaults, t)), l.parse(r.lex(e, t), t)
        } catch (p) {
          if (p.message += "\nPlease report this to https://github.com/markedjs/marked.", (t || b.defaults).silent) return "<p>An error occurred:</p><pre>" + u(p.message + "", !0) + "</pre>";
          throw p
        }
      }

      g.exec = g, b.options = b.setOptions = function (e) {
        return v(b.defaults, e), b
      }, b.getDefaults = function () {
        return {
          baseUrl: null,
          breaks: !1,
          gfm: !0,
          headerIds: !0,
          headerPrefix: "",
          highlight: null,
          langPrefix: "language-",
          mangle: !0,
          pedantic: !1,
          renderer: new s,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          tables: !0,
          xhtml: !1
        }
      }, b.defaults = b.getDefaults(), b.Parser = l, b.parser = l.parse, b.Renderer = s, b.TextRenderer = a, b.Lexer = r, b.lexer = r.lex, b.InlineLexer = i, b.inlineLexer = i.output, b.parse = b, e.exports = b
    }(this || ("undefined" != typeof window ? window : global))
  }, RnVd: function (e, t) {
    function n(e) {
      return Promise.resolve().then(function () {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
      })
    }

    n.keys = function () {
      return []
    }, n.resolve = n, e.exports = n, n.id = "RnVd"
  }, yLV6: function (e, t, n) {
    var r;
    !function (o, i, s, a) {
      "use strict";
      var l, u = ["", "webkit", "Moz", "MS", "ms", "o"], c = i.createElement("div"), p = "function", d = Math.round,
        h = Math.abs, f = Date.now;

      function g(e, t, n) {
        return setTimeout(x(e, n), t)
      }

      function v(e, t, n) {
        return !!Array.isArray(e) && (y(e, n[t], n), !0)
      }

      function y(e, t, n) {
        var r;
        if (e) if (e.forEach) e.forEach(t, n); else if (e.length !== a) for (r = 0; r < e.length;) t.call(n, e[r], r, e), r++; else for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e)
      }

      function m(e, t, n) {
        var r = "DEPRECATED METHOD: " + t + "\n" + n + " AT \n";
        return function () {
          var t = new Error("get-stack-trace"),
            n = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
            i = o.console && (o.console.warn || o.console.log);
          return i && i.call(o.console, r, n), e.apply(this, arguments)
        }
      }

      l = "function" != typeof Object.assign ? function (e) {
        if (e === a || null === e) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
          var r = arguments[n];
          if (r !== a && null !== r) for (var o in r) r.hasOwnProperty(o) && (t[o] = r[o])
        }
        return t
      } : Object.assign;
      var b = m(function (e, t, n) {
        for (var r = Object.keys(t), o = 0; o < r.length;) (!n || n && e[r[o]] === a) && (e[r[o]] = t[r[o]]), o++;
        return e
      }, "extend", "Use `assign`."), _ = m(function (e, t) {
        return b(e, t, !0)
      }, "merge", "Use `assign`.");

      function w(e, t, n) {
        var r, o = t.prototype;
        (r = e.prototype = Object.create(o)).constructor = e, r._super = o, n && l(r, n)
      }

      function x(e, t) {
        return function () {
          return e.apply(t, arguments)
        }
      }

      function C(e, t) {
        return typeof e == p ? e.apply(t && t[0] || a, t) : e
      }

      function E(e, t) {
        return e === a ? t : e
      }

      function T(e, t, n) {
        y(O(t), function (t) {
          e.addEventListener(t, n, !1)
        })
      }

      function k(e, t, n) {
        y(O(t), function (t) {
          e.removeEventListener(t, n, !1)
        })
      }

      function S(e, t) {
        for (; e;) {
          if (e == t) return !0;
          e = e.parentNode
        }
        return !1
      }

      function I(e, t) {
        return e.indexOf(t) > -1
      }

      function O(e) {
        return e.trim().split(/\s+/g)
      }

      function P(e, t, n) {
        if (e.indexOf && !n) return e.indexOf(t);
        for (var r = 0; r < e.length;) {
          if (n && e[r][n] == t || !n && e[r] === t) return r;
          r++
        }
        return -1
      }

      function A(e) {
        return Array.prototype.slice.call(e, 0)
      }

      function M(e, t, n) {
        for (var r = [], o = [], i = 0; i < e.length;) {
          var s = t ? e[i][t] : e[i];
          P(o, s) < 0 && r.push(e[i]), o[i] = s, i++
        }
        return n && (r = t ? r.sort(function (e, n) {
          return e[t] > n[t]
        }) : r.sort()), r
      }

      function N(e, t) {
        for (var n, r, o = t[0].toUpperCase() + t.slice(1), i = 0; i < u.length;) {
          if ((r = (n = u[i]) ? n + o : t) in e) return r;
          i++
        }
        return a
      }

      var V = 1;

      function R(e) {
        var t = e.ownerDocument || e;
        return t.defaultView || t.parentWindow || o
      }

      var D = "ontouchstart" in o, j = N(o, "PointerEvent") !== a,
        H = D && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), F = 25, z = 1, L = 4, B = 8, U = 1,
        Z = 2, q = 4, $ = 8, W = 16, X = Z | q, Q = $ | W, Y = X | Q, K = ["x", "y"], G = ["clientX", "clientY"];

      function J(e, t) {
        var n = this;
        this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
          C(e.options.enable, [e]) && n.handler(t)
        }, this.init()
      }

      function ee(e, t, n) {
        var r = n.pointers.length, o = n.changedPointers.length, i = t & z && r - o == 0, s = t & (L | B) && r - o == 0;
        n.isFirst = !!i, n.isFinal = !!s, i && (e.session = {}), n.eventType = t, function (e, t) {
          var n = e.session, r = t.pointers, o = r.length;
          n.firstInput || (n.firstInput = te(t)), o > 1 && !n.firstMultiple ? n.firstMultiple = te(t) : 1 === o && (n.firstMultiple = !1);
          var i = n.firstInput, s = n.firstMultiple, l = s ? s.center : i.center, u = t.center = ne(r);
          t.timeStamp = f(), t.deltaTime = t.timeStamp - i.timeStamp, t.angle = se(l, u), t.distance = ie(l, u), function (e, t) {
            var n = t.center, r = e.offsetDelta || {}, o = e.prevDelta || {}, i = e.prevInput || {};
            t.eventType !== z && i.eventType !== L || (o = e.prevDelta = {
              x: i.deltaX || 0,
              y: i.deltaY || 0
            }, r = e.offsetDelta = {x: n.x, y: n.y}), t.deltaX = o.x + (n.x - r.x), t.deltaY = o.y + (n.y - r.y)
          }(n, t), t.offsetDirection = oe(t.deltaX, t.deltaY);
          var c, p, d = re(t.deltaTime, t.deltaX, t.deltaY);
          t.overallVelocityX = d.x, t.overallVelocityY = d.y, t.overallVelocity = h(d.x) > h(d.y) ? d.x : d.y, t.scale = s ? (c = s.pointers, ie((p = r)[0], p[1], G) / ie(c[0], c[1], G)) : 1, t.rotation = s ? function (e, t) {
            return se(r[1], r[0], G) + se(e[1], e[0], G)
          }(s.pointers) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length, function (e, t) {
            var n, r, o, i, s = e.lastInterval || t, l = t.timeStamp - s.timeStamp;
            if (t.eventType != B && (l > F || s.velocity === a)) {
              var u = t.deltaX - s.deltaX, c = t.deltaY - s.deltaY, p = re(l, u, c);
              r = p.x, o = p.y, n = h(p.x) > h(p.y) ? p.x : p.y, i = oe(u, c), e.lastInterval = t
            } else n = s.velocity, r = s.velocityX, o = s.velocityY, i = s.direction;
            t.velocity = n, t.velocityX = r, t.velocityY = o, t.direction = i
          }(n, t);
          var g = e.element;
          S(t.srcEvent.target, g) && (g = t.srcEvent.target), t.target = g
        }(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
      }

      function te(e) {
        for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
          clientX: d(e.pointers[n].clientX),
          clientY: d(e.pointers[n].clientY)
        }, n++;
        return {timeStamp: f(), pointers: t, center: ne(t), deltaX: e.deltaX, deltaY: e.deltaY}
      }

      function ne(e) {
        var t = e.length;
        if (1 === t) return {x: d(e[0].clientX), y: d(e[0].clientY)};
        for (var n = 0, r = 0, o = 0; o < t;) n += e[o].clientX, r += e[o].clientY, o++;
        return {x: d(n / t), y: d(r / t)}
      }

      function re(e, t, n) {
        return {x: t / e || 0, y: n / e || 0}
      }

      function oe(e, t) {
        return e === t ? U : h(e) >= h(t) ? e < 0 ? Z : q : t < 0 ? $ : W
      }

      function ie(e, t, n) {
        n || (n = K);
        var r = t[n[0]] - e[n[0]], o = t[n[1]] - e[n[1]];
        return Math.sqrt(r * r + o * o)
      }

      function se(e, t, n) {
        return n || (n = K), 180 * Math.atan2(t[n[1]] - e[n[1]], t[n[0]] - e[n[0]]) / Math.PI
      }

      J.prototype = {
        handler: function () {
        }, init: function () {
          this.evEl && T(this.element, this.evEl, this.domHandler), this.evTarget && T(this.target, this.evTarget, this.domHandler), this.evWin && T(R(this.element), this.evWin, this.domHandler)
        }, destroy: function () {
          this.evEl && k(this.element, this.evEl, this.domHandler), this.evTarget && k(this.target, this.evTarget, this.domHandler), this.evWin && k(R(this.element), this.evWin, this.domHandler)
        }
      };
      var ae = {mousedown: z, mousemove: 2, mouseup: L}, le = "mousedown", ue = "mousemove mouseup";

      function ce() {
        this.evEl = le, this.evWin = ue, this.pressed = !1, J.apply(this, arguments)
      }

      w(ce, J, {
        handler: function (e) {
          var t = ae[e.type];
          t & z && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = L), this.pressed && (t & L && (this.pressed = !1), this.callback(this.manager, t, {
            pointers: [e],
            changedPointers: [e],
            pointerType: "mouse",
            srcEvent: e
          }))
        }
      });
      var pe = {pointerdown: z, pointermove: 2, pointerup: L, pointercancel: B, pointerout: B},
        de = {2: "touch", 3: "pen", 4: "mouse", 5: "kinect"}, he = "pointerdown",
        fe = "pointermove pointerup pointercancel";

      function ge() {
        this.evEl = he, this.evWin = fe, J.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
      }

      o.MSPointerEvent && !o.PointerEvent && (he = "MSPointerDown", fe = "MSPointerMove MSPointerUp MSPointerCancel"), w(ge, J, {
        handler: function (e) {
          var t = this.store, n = !1, r = e.type.toLowerCase().replace("ms", ""), o = pe[r],
            i = de[e.pointerType] || e.pointerType, s = "touch" == i, a = P(t, e.pointerId, "pointerId");
          o & z && (0 === e.button || s) ? a < 0 && (t.push(e), a = t.length - 1) : o & (L | B) && (n = !0), a < 0 || (t[a] = e, this.callback(this.manager, o, {
            pointers: t,
            changedPointers: [e],
            pointerType: i,
            srcEvent: e
          }), n && t.splice(a, 1))
        }
      });
      var ve = {touchstart: z, touchmove: 2, touchend: L, touchcancel: B}, ye = "touchstart",
        me = "touchstart touchmove touchend touchcancel";

      function be() {
        this.evTarget = ye, this.evWin = me, this.started = !1, J.apply(this, arguments)
      }

      w(be, J, {
        handler: function (e) {
          var t = ve[e.type];
          if (t === z && (this.started = !0), this.started) {
            var n = (function (e, t) {
              var n = A(e.touches), r = A(e.changedTouches);
              return t & (L | B) && (n = M(n.concat(r), "identifier", !0)), [n, r]
            }).call(this, e, t);
            t & (L | B) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: "touch",
              srcEvent: e
            })
          }
        }
      });
      var _e = {touchstart: z, touchmove: 2, touchend: L, touchcancel: B},
        we = "touchstart touchmove touchend touchcancel";

      function xe() {
        this.evTarget = we, this.targetIds = {}, J.apply(this, arguments)
      }

      w(xe, J, {
        handler: function (e) {
          var t = _e[e.type], n = (function (e, t) {
            var n = A(e.touches), r = this.targetIds;
            if (t & (2 | z) && 1 === n.length) return r[n[0].identifier] = !0, [n, n];
            var o, i, s = A(e.changedTouches), a = [], l = this.target;
            if (i = n.filter(function (e) {
              return S(e.target, l)
            }), t === z) for (o = 0; o < i.length;) r[i[o].identifier] = !0, o++;
            for (o = 0; o < s.length;) r[s[o].identifier] && a.push(s[o]), t & (L | B) && delete r[s[o].identifier], o++;
            return a.length ? [M(i.concat(a), "identifier", !0), a] : void 0
          }).call(this, e, t);
          n && this.callback(this.manager, t, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: "touch",
            srcEvent: e
          })
        }
      });
      var Ce = 2500;

      function Ee() {
        J.apply(this, arguments);
        var e = x(this.handler, this);
        this.touch = new xe(this.manager, e), this.mouse = new ce(this.manager, e), this.primaryTouch = null, this.lastTouches = []
      }

      function Te(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
          var n = {x: t.clientX, y: t.clientY};
          this.lastTouches.push(n);
          var r = this.lastTouches;
          setTimeout(function () {
            var e = r.indexOf(n);
            e > -1 && r.splice(e, 1)
          }, Ce)
        }
      }

      w(Ee, J, {
        handler: function (e, t, n) {
          var r = "mouse" == n.pointerType;
          if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
            if ("touch" == n.pointerType) (function (e, t) {
              e & z ? (this.primaryTouch = t.changedPointers[0].identifier, Te.call(this, t)) : e & (L | B) && Te.call(this, t)
            }).call(this, t, n); else if (r && (function (e) {
              for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
                var o = this.lastTouches[r], i = Math.abs(t - o.x), s = Math.abs(n - o.y);
                if (i <= 25 && s <= 25) return !0
              }
              return !1
            }).call(this, n)) return;
            this.callback(e, t, n)
          }
        }, destroy: function () {
          this.touch.destroy(), this.mouse.destroy()
        }
      });
      var ke = N(c.style, "touchAction"), Se = ke !== a, Ie = function () {
        if (!Se) return !1;
        var e = {}, t = o.CSS && o.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (n) {
          e[n] = !t || o.CSS.supports("touch-action", n)
        }), e
      }();

      function Oe(e, t) {
        this.manager = e, this.set(t)
      }

      Oe.prototype = {
        set: function (e) {
          "compute" == e && (e = this.compute()), Se && this.manager.element.style && Ie[e] && (this.manager.element.style[ke] = e), this.actions = e.toLowerCase().trim()
        }, update: function () {
          this.set(this.manager.options.touchAction)
        }, compute: function () {
          var e = [];
          return y(this.manager.recognizers, function (t) {
            C(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
          }), function (e) {
            if (I(e, "none")) return "none";
            var t = I(e, "pan-x"), n = I(e, "pan-y");
            return t && n ? "none" : t || n ? t ? "pan-x" : "pan-y" : I(e, "manipulation") ? "manipulation" : "auto"
          }(e.join(" "))
        }, preventDefaults: function (e) {
          var t = e.srcEvent, n = e.offsetDirection;
          if (this.manager.session.prevented) t.preventDefault(); else {
            var r = this.actions, o = I(r, "none") && !Ie.none, i = I(r, "pan-y") && !Ie["pan-y"],
              s = I(r, "pan-x") && !Ie["pan-x"];
            if (o && 1 === e.pointers.length && e.distance < 2 && e.deltaTime < 250) return;
            if (!s || !i) return o || i && n & X || s && n & Q ? this.preventSrc(t) : void 0
          }
        }, preventSrc: function (e) {
          this.manager.session.prevented = !0, e.preventDefault()
        }
      };
      var Pe = 1, Ae = 2, Me = 4, Ne = 8, Ve = Ne, Re = 16;

      function De(e) {
        this.options = l({}, this.defaults, e || {}), this.id = V++, this.manager = null, this.options.enable = E(this.options.enable, !0), this.state = Pe, this.simultaneous = {}, this.requireFail = []
      }

      function je(e) {
        return e & Re ? "cancel" : e & Ne ? "end" : e & Me ? "move" : e & Ae ? "start" : ""
      }

      function He(e) {
        return e == W ? "down" : e == $ ? "up" : e == Z ? "left" : e == q ? "right" : ""
      }

      function Fe(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
      }

      function ze() {
        De.apply(this, arguments)
      }

      function Le() {
        ze.apply(this, arguments), this.pX = null, this.pY = null
      }

      function Be() {
        ze.apply(this, arguments)
      }

      function Ue() {
        De.apply(this, arguments), this._timer = null, this._input = null
      }

      function Ze() {
        ze.apply(this, arguments)
      }

      function qe() {
        ze.apply(this, arguments)
      }

      function $e() {
        De.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
      }

      function We(e, t) {
        return (t = t || {}).recognizers = E(t.recognizers, We.defaults.preset), new Xe(e, t)
      }

      function Xe(e, t) {
        var n;
        this.options = l({}, We.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new ((n = this).options.inputClass || (j ? ge : H ? xe : D ? Ee : ce))(n, ee), this.touchAction = new Oe(this, this.options.touchAction), Qe(this, !0), y(this.options.recognizers, function (e) {
          var t = this.add(new e[0](e[1]));
          e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
        }, this)
      }

      function Qe(e, t) {
        var n, r = e.element;
        r.style && (y(e.options.cssProps, function (o, i) {
          n = N(r.style, i), t ? (e.oldCssProps[n] = r.style[n], r.style[n] = o) : r.style[n] = e.oldCssProps[n] || ""
        }), t || (e.oldCssProps = {}))
      }

      De.prototype = {
        defaults: {}, set: function (e) {
          return l(this.options, e), this.manager && this.manager.touchAction.update(), this
        }, recognizeWith: function (e) {
          if (v(e, "recognizeWith", this)) return this;
          var t = this.simultaneous;
          return t[(e = Fe(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
        }, dropRecognizeWith: function (e) {
          return v(e, "dropRecognizeWith", this) ? this : (e = Fe(e, this), delete this.simultaneous[e.id], this)
        }, requireFailure: function (e) {
          if (v(e, "requireFailure", this)) return this;
          var t = this.requireFail;
          return -1 === P(t, e = Fe(e, this)) && (t.push(e), e.requireFailure(this)), this
        }, dropRequireFailure: function (e) {
          if (v(e, "dropRequireFailure", this)) return this;
          e = Fe(e, this);
          var t = P(this.requireFail, e);
          return t > -1 && this.requireFail.splice(t, 1), this
        }, hasRequireFailures: function () {
          return this.requireFail.length > 0
        }, canRecognizeWith: function (e) {
          return !!this.simultaneous[e.id]
        }, emit: function (e) {
          var t = this, n = this.state;

          function r(n) {
            t.manager.emit(n, e)
          }

          n < Ne && r(t.options.event + je(n)), r(t.options.event), e.additionalEvent && r(e.additionalEvent), n >= Ne && r(t.options.event + je(n))
        }, tryEmit: function (e) {
          if (this.canEmit()) return this.emit(e);
          this.state = 32
        }, canEmit: function () {
          for (var e = 0; e < this.requireFail.length;) {
            if (!(this.requireFail[e].state & (32 | Pe))) return !1;
            e++
          }
          return !0
        }, recognize: function (e) {
          var t = l({}, e);
          if (!C(this.options.enable, [this, t])) return this.reset(), void (this.state = 32);
          this.state & (Ve | Re | 32) && (this.state = Pe), this.state = this.process(t), this.state & (Ae | Me | Ne | Re) && this.tryEmit(t)
        }, process: function (e) {
        }, getTouchAction: function () {
        }, reset: function () {
        }
      }, w(ze, De, {
        defaults: {pointers: 1}, attrTest: function (e) {
          var t = this.options.pointers;
          return 0 === t || e.pointers.length === t
        }, process: function (e) {
          var t = this.state, n = e.eventType, r = t & (Ae | Me), o = this.attrTest(e);
          return r && (n & B || !o) ? t | Re : r || o ? n & L ? t | Ne : t & Ae ? t | Me : Ae : 32
        }
      }), w(Le, ze, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: Y}, getTouchAction: function () {
          var e = this.options.direction, t = [];
          return e & X && t.push("pan-y"), e & Q && t.push("pan-x"), t
        }, directionTest: function (e) {
          var t = this.options, n = !0, r = e.distance, o = e.direction, i = e.deltaX, s = e.deltaY;
          return o & t.direction || (t.direction & X ? (o = 0 === i ? U : i < 0 ? Z : q, n = i != this.pX, r = Math.abs(e.deltaX)) : (o = 0 === s ? U : s < 0 ? $ : W, n = s != this.pY, r = Math.abs(e.deltaY))), e.direction = o, n && r > t.threshold && o & t.direction
        }, attrTest: function (e) {
          return ze.prototype.attrTest.call(this, e) && (this.state & Ae || !(this.state & Ae) && this.directionTest(e))
        }, emit: function (e) {
          this.pX = e.deltaX, this.pY = e.deltaY;
          var t = He(e.direction);
          t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
        }
      }), w(Be, ze, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
          return ["none"]
        }, attrTest: function (e) {
          return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & Ae)
        }, emit: function (e) {
          1 !== e.scale && (e.additionalEvent = this.options.event + (e.scale < 1 ? "in" : "out")), this._super.emit.call(this, e)
        }
      }), w(Ue, De, {
        defaults: {event: "press", pointers: 1, time: 251, threshold: 9}, getTouchAction: function () {
          return ["auto"]
        }, process: function (e) {
          var t = this.options, n = e.pointers.length === t.pointers, r = e.distance < t.threshold,
            o = e.deltaTime > t.time;
          if (this._input = e, !r || !n || e.eventType & (L | B) && !o) this.reset(); else if (e.eventType & z) this.reset(), this._timer = g(function () {
            this.state = Ve, this.tryEmit()
          }, t.time, this); else if (e.eventType & L) return Ve;
          return 32
        }, reset: function () {
          clearTimeout(this._timer)
        }, emit: function (e) {
          this.state === Ve && (e && e.eventType & L ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)))
        }
      }), w(Ze, ze, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
          return ["none"]
        }, attrTest: function (e) {
          return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & Ae)
        }
      }), w(qe, ze, {
        defaults: {event: "swipe", threshold: 10, velocity: .3, direction: X | Q, pointers: 1},
        getTouchAction: function () {
          return Le.prototype.getTouchAction.call(this)
        },
        attrTest: function (e) {
          var t, n = this.options.direction;
          return n & (X | Q) ? t = e.overallVelocity : n & X ? t = e.overallVelocityX : n & Q && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && h(t) > this.options.velocity && e.eventType & L
        },
        emit: function (e) {
          var t = He(e.offsetDirection);
          t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
        }
      }), w($e, De, {
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 9,
          posThreshold: 10
        }, getTouchAction: function () {
          return ["manipulation"]
        }, process: function (e) {
          var t = this.options, n = e.pointers.length === t.pointers, r = e.distance < t.threshold,
            o = e.deltaTime < t.time;
          if (this.reset(), e.eventType & z && 0 === this.count) return this.failTimeout();
          if (r && o && n) {
            if (e.eventType != L) return this.failTimeout();
            var i = !this.pTime || e.timeStamp - this.pTime < t.interval,
              s = !this.pCenter || ie(this.pCenter, e.center) < t.posThreshold;
            if (this.pTime = e.timeStamp, this.pCenter = e.center, s && i ? this.count += 1 : this.count = 1, this._input = e, 0 == this.count % t.taps) return this.hasRequireFailures() ? (this._timer = g(function () {
              this.state = Ve, this.tryEmit()
            }, t.interval, this), Ae) : Ve
          }
          return 32
        }, failTimeout: function () {
          return this._timer = g(function () {
            this.state = 32
          }, this.options.interval, this), 32
        }, reset: function () {
          clearTimeout(this._timer)
        }, emit: function () {
          this.state == Ve && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
      }), We.VERSION = "2.0.7", We.defaults = {
        domEvents: !1,
        touchAction: "compute",
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[Ze, {enable: !1}], [Be, {enable: !1}, ["rotate"]], [qe, {direction: X}], [Le, {direction: X}, ["swipe"]], [$e], [$e, {
          event: "doubletap",
          taps: 2
        }, ["tap"]], [Ue]],
        cssProps: {
          userSelect: "none",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)"
        }
      }, Xe.prototype = {
        set: function (e) {
          return l(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
        }, stop: function (e) {
          this.session.stopped = e ? 2 : 1
        }, recognize: function (e) {
          var t = this.session;
          if (!t.stopped) {
            var n;
            this.touchAction.preventDefaults(e);
            var r = this.recognizers, o = t.curRecognizer;
            (!o || o && o.state & Ve) && (o = t.curRecognizer = null);
            for (var i = 0; i < r.length;) n = r[i], 2 === t.stopped || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(e), !o && n.state & (Ae | Me | Ne) && (o = t.curRecognizer = n), i++
          }
        }, get: function (e) {
          if (e instanceof De) return e;
          for (var t = this.recognizers, n = 0; n < t.length; n++) if (t[n].options.event == e) return t[n];
          return null
        }, add: function (e) {
          if (v(e, "add", this)) return this;
          var t = this.get(e.options.event);
          return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
        }, remove: function (e) {
          if (v(e, "remove", this)) return this;
          if (e = this.get(e)) {
            var t = this.recognizers, n = P(t, e);
            -1 !== n && (t.splice(n, 1), this.touchAction.update())
          }
          return this
        }, on: function (e, t) {
          if (e !== a && t !== a) {
            var n = this.handlers;
            return y(O(e), function (e) {
              n[e] = n[e] || [], n[e].push(t)
            }), this
          }
        }, off: function (e, t) {
          if (e !== a) {
            var n = this.handlers;
            return y(O(e), function (e) {
              t ? n[e] && n[e].splice(P(n[e], t), 1) : delete n[e]
            }), this
          }
        }, emit: function (e, t) {
          this.options.domEvents && function (e, t) {
            var n = i.createEvent("Event");
            n.initEvent(e, !0, !0), n.gesture = t, t.target.dispatchEvent(n)
          }(e, t);
          var n = this.handlers[e] && this.handlers[e].slice();
          if (n && n.length) {
            t.type = e, t.preventDefault = function () {
              t.srcEvent.preventDefault()
            };
            for (var r = 0; r < n.length;) n[r](t), r++
          }
        }, destroy: function () {
          this.element && Qe(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
      }, l(We, {
        INPUT_START: z,
        INPUT_MOVE: 2,
        INPUT_END: L,
        INPUT_CANCEL: B,
        STATE_POSSIBLE: Pe,
        STATE_BEGAN: Ae,
        STATE_CHANGED: Me,
        STATE_ENDED: Ne,
        STATE_RECOGNIZED: Ve,
        STATE_CANCELLED: Re,
        STATE_FAILED: 32,
        DIRECTION_NONE: U,
        DIRECTION_LEFT: Z,
        DIRECTION_RIGHT: q,
        DIRECTION_UP: $,
        DIRECTION_DOWN: W,
        DIRECTION_HORIZONTAL: X,
        DIRECTION_VERTICAL: Q,
        DIRECTION_ALL: Y,
        Manager: Xe,
        Input: J,
        TouchAction: Oe,
        TouchInput: xe,
        MouseInput: ce,
        PointerEventInput: ge,
        TouchMouseInput: Ee,
        SingleTouchInput: be,
        Recognizer: De,
        AttrRecognizer: ze,
        Tap: $e,
        Pan: Le,
        Swipe: qe,
        Pinch: Be,
        Rotate: Ze,
        Press: Ue,
        on: T,
        off: k,
        each: y,
        merge: _,
        extend: b,
        assign: l,
        inherit: w,
        bindFn: x,
        prefixed: N
      }), (void 0 !== o ? o : "undefined" != typeof self ? self : {}).Hammer = We, (r = (function () {
        return We
      }).call(t, n, t, e)) === a || (e.exports = r)
    }(window, document)
  }
}, [[0, 0]]]);

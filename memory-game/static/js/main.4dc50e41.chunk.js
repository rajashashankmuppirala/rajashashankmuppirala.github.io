(this.webpackJsonpmemoryGame = this.webpackJsonpmemoryGame || []).push([[0], Array(36).concat([function (t) {
    t.exports = JSON.parse('{"a":"memoryGame"}')
}, , , , , , , , , , , , , , , , , , , , function (t, e, a) {
    t.exports = a(92)
}, , , function (t, e, a) {
    t.exports = a.p + "./media/bee.ee9a8073.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/cheetah.b7262f53.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/croc.0e41b832.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/deer.5b9a2f77.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/dog.bfe4271b.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/dolphin.40b9276b.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/elephant.cb52ba95.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/fox.65532169.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/giraffe.6769b4c1.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/kangaroo.36602689.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/koala.0907daa2.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/lemur.b7991b0a.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/monkey.9c22ed4a.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/ostrich.b2dc5cca.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/panda.6f844508.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/rabbit.bf9198bf.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/rhino.8bcd07a1.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/shark.05b18c56.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/sheep.937ee6c0.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/snake.bad46740.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/tiger.2218c52f.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/tortoise.8c4e7aaa.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/tucan.9df862bc.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/zebra.26d43ecd.png"
}, function (t, e, a) {
    t.exports = a.p + "./media/card.33d780bd.png"
}, , , , , , , , , function (t, e, a) {
    "use strict";
    a.r(e);
    var n = a(98), s = a(24), r = a.n(s), i = a(34), o = a(10), c = a(11), p = a(16), u = a(15), l = a(0), d = a.n(l),
        f = [a(59), a(60), a(61), a(62), a(63), a(64), a(65), a(66), a(67), a(68), a(69), a(70), a(71), a(72), a(73), a(74), a(75), a(76), a(77), a(78), a(79), a(80), a(81), a(82)],
        m = a(93), h = a(94), g = a(6), b = a(95), x = a(96), y = a(97), v = a(35), w = a(2), k = v.a.get("window"),
        j = Math.floor(.125 * k.width), O = Math.floor(j * (323 / 222)), C = w.a.create({
            container: {backgroundColor: "gray", paddingTop: 10, flex: 1},
            title: {alignItems: "center", justifyContent: "center", textAlign: "center", color: "white", fontSize: 20},
            timer: {alignItems: "center", justifyContent: "center", textAlign: "center", color: "white", fontSize: 10},
            safearea: {alignItems: "center", justifyContent: "center", flex: 1},
            row: {
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                marginVertical: 10
            },
            card: {backgroundColor: "#fff", borderColor: "#fff", borderWidth: 5, borderRadius: 3},
            cardImage: {width: j, height: O}
        }), S = a(100), E = a(99), I = function (t) {
            Object(p.a)(n, t);
            var e = Object(u.a)(n);

            function n() {
                return Object(o.a)(this, n), e.apply(this, arguments)
            }

            return Object(c.a)(n, [{
                key: "render", value: function () {
                    var t = this.props.onPress, e = this.props.display ? this.props.displayImage : a(83);
                    return d.a.createElement(S.a, {onPress: t}, d.a.createElement(g.a, {style: C.card}, d.a.createElement(E.a, {
                        style: C.cardImage,
                        source: e
                    })))
                }
            }]), n
        }(d.a.Component), A = function (t) {
            Object(p.a)(a, t);
            var e = Object(u.a)(a);

            function a() {
                return Object(o.a)(this, a), e.apply(this, arguments)
            }

            return Object(c.a)(a, [{
                key: "render", value: function () {
                    return d.a.createElement(g.a, {style: C.row}, this.props.children)
                }
            }]), a
        }(d.a.Component), z = function (t) {
            Object(p.a)(a, t);
            var e = Object(u.a)(a);

            function a() {
                var t;
                return Object(o.a)(this, a), (t = e.call(this)).initRows = function () {
                    for (var e = [], a = [], n = []; e.length < 15;) {
                        var s = Math.floor(24 * Math.random());
                        -1 === e.indexOf(s) && e.push(s)
                    }
                    return e = e.concat(e), (e = t.shuffleArray(e)).map((function (t, e) {
                        var s = {};
                        s.id = e, s.display = !1, s.solved = !1, s.value = f[t], n.push(s), (e + 1) % 5 === 0 && (a.push(n), n = [])
                    })), a
                }, t.shuffleArray = function (t) {
                    for (var e = t.slice(), a = e.length; a; a -= 1) {
                        var n = Math.floor(Math.random() * a), s = e[a - 1];
                        e[a - 1] = e[n], e[n] = s
                    }
                    return e
                }, t.reset = function () {
                    var e = t.initRows();
                    t.setState({steps: 0, rows: e, lastselected: {}, count: 0, timer: 0})
                }, t.onCardSelect = function () {
                    var e = Object(i.a)(r.a.mark((function e(a) {
                        return r.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.setState({steps: t.state.steps + 1});
                                case 2:
                                    t.state.rows.map((function (e, n) {
                                        e.map(function () {
                                            var e = Object(i.a)(r.a.mark((function e(n) {
                                                return r.a.wrap((function (e) {
                                                    for (; ;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (n.id !== a.id) {
                                                                e.next = 16;
                                                                break
                                                            }
                                                            if (n.display = !0, 0 !== Object.keys(t.state.lastselected).length) {
                                                                e.next = 6;
                                                                break
                                                            }
                                                            t.setState({lastselected: n}), e.next = 16;
                                                            break;
                                                        case 6:
                                                            if (n.value !== t.state.lastselected.value || n.id === t.state.lastselected.id) {
                                                                e.next = 15;
                                                                break
                                                            }
                                                            return e.next = 9, t.setState({count: t.state.count + 2});
                                                        case 9:
                                                            console.log("match" + t.state.count), n.solved = !0, t.state.lastselected = {}, t.state.rows.map((function (e, a) {
                                                                e.map((function (e) {
                                                                    e.id === t.state.lastselected.id && (e.solved = !0)
                                                                }))
                                                            })), e.next = 16;
                                                            break;
                                                        case 15:
                                                            setTimeout((function () {
                                                                t.state.rows.map((function (e, n) {
                                                                    e.map((function (e) {
                                                                        e.id === t.state.lastselected.id && !0 !== e.solved && (e.display = !1, a.display = !1, t.state.lastselected = {})
                                                                    }))
                                                                })), t.setState({rows: t.state.rows})
                                                            }), 1e3);
                                                        case 16:
                                                        case"end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function (t) {
                                                return e.apply(this, arguments)
                                            }
                                        }())
                                    })), t.setState({rows: t.state.rows}), console.log(t.state.steps), 1 == t.state.steps && t.initTimer(), console.log("last" + t.state.count), 30 == t.state.count && t.onFinish();
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), t.initTimer = function () {
                    t.timer = setInterval((function () {
                        t.setState((function (t) {
                            return {timer: t.timer + 1}
                        }))
                    }), 1e3)
                }, t.displayAlert = function () {
                    "web" !== m.a.OS ? h.a.alert("Congratulations!!", "You have completed the puzzle in ".concat(t.state.steps, " steps and ").concat(t.state.timer, " seconds."), [{
                        text: "OK",
                        onPress: t.reset
                    }], {cancelable: !1}) : window.confirm("Congratulations!!", "You have completed the puzzle in ".concat(t.state.steps, " steps and ").concat(t.state.timer, " seconds.")) && t.reset()
                }, t.onFinish = function () {
                    clearInterval(t.timer), setTimeout((function () {
                        return t.displayAlert()
                    }), 1)
                }, t.state = {steps: 0, rows: t.initRows(), lastselected: {}, count: 0, timer: 0}, t
            }

            return Object(c.a)(a, [{
                key: "render", value: function () {
                    var t = this;
                    return d.a.createElement(g.a, {style: C.container}, d.a.createElement(b.a, {barStyle: "light-content"}), d.a.createElement(x.a, {style: C.title}, "Memory Game"), d.a.createElement(x.a, {
                        style: C.timer,
                        id: "timer"
                    }, "Timer:", this.state.timer), d.a.createElement(x.a, {style: C.timer}, "Steps:", this.state.steps), d.a.createElement(y.a, {style: C.safearea}, this.state.rows.map((function (e, a) {
                        return d.a.createElement(A, {key: a, index: a}, e.map((function (e, a) {
                            return d.a.createElement(I, {
                                key: e.id,
                                display: e.display,
                                solved: e.solved,
                                displayImage: e.value,
                                onPress: function () {
                                    return t.onCardSelect(e)
                                }
                            })
                        })))
                    }))))
                }
            }]), a
        }(d.a.Component), M = a(36);
    n.a.registerComponent(M.a, (function () {
        return z
    })), n.a.runApplication(M.a, {rootTag: document.getElementById("memory-game")})
}]), [[56, 1, 2]]]);
//# sourceMappingURL=main.4dc50e41.chunk.js.map

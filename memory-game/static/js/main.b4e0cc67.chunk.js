(this.webpackJsonpmemoryGame = this.webpackJsonpmemoryGame || []).push([[0], Array(36).concat([function (t) {
    t.exports = JSON.parse('{"a":"memoryGame"}');
}, , , , , , , , , , , , , , , , , , , , function (t, e, a) {
    t.exports = a(92);
}, , , function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/bee.ee9a8073.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/cheetah.b7262f53.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/croc.0e41b832.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/deer.5b9a2f77.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/dog.bfe4271b.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/dolphin.40b9276b.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/elephant.cb52ba95.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/fox.65532169.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/giraffe.6769b4c1.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/kangaroo.36602689.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/koala.0907daa2.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/lemur.b7991b0a.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/monkey.9c22ed4a.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/ostrich.b2dc5cca.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/panda.6f844508.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/rabbit.bf9198bf.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/rhino.8bcd07a1.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/shark.05b18c56.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/sheep.937ee6c0.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/snake.bad46740.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/tiger.2218c52f.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/tortoise.8c4e7aaa.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/tucan.9df862bc.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/zebra.26d43ecd.png';
}, function (t, e, a) {
    t.exports = a.p + 'memory-game/static/media/card.33d780bd.png';
}, , , , , , , , , function (t, e, a) {
    'use strict';
    a.r(e);
    var n = a(98), s = a(25), r = a.n(s), i = a(34), o = a(5), c = a(6), p = a(8), l = a(7), u = a(0), d = a.n(u),
        m = [a(59), a(60), a(61), a(62), a(63), a(64), a(65), a(66), a(67), a(68), a(69), a(70), a(71), a(72), a(73), a(74), a(75), a(76), a(77), a(78), a(79), a(80), a(81), a(82)],
        f = a(94), h = a(95), b = a(10), g = a(96), v = a(93), y = a(97), x = a(35), w = a(2), j = x.a.get('window'),
        O = Math.floor(.125 * j.width), k = Math.floor(O * (323 / 222)), E = w.a.create({
            container: {backgroundColor: 'gray', paddingTop: 10, flex: 1},
            title: {alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', fontSize: 20},
            timer: {alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', fontSize: 10},
            safearea: {alignItems: 'center', justifyContent: 'center', flex: 1},
            row: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                marginVertical: 10,
            },
            card: {backgroundColor: '#fff', borderColor: '#fff', borderWidth: 5, borderRadius: 3},
            cardImage: {width: O, height: k},
        }), C = a(100), S = a(99), I = function (t) {
            Object(p.a)(n, t);
            var e = Object(l.a)(n);

            function n() {
                return Object(o.a)(this, n), e.apply(this, arguments);
            }

            return Object(c.a)(n, [{
                key: 'render', value: function () {
                    var t = this.props.onPress, e = this.props.solved, n = this.props.isDisabled,
                        s = this.props.display ? this.props.displayImage : a(83);
                    return d.a.createElement(C.a, {
                        disabled: e || n,
                        onPress: t,
                    }, d.a.createElement(b.a, {style: E.card}, d.a.createElement(S.a, {style: E.cardImage, source: s})));
                },
            }]), n;
        }(d.a.Component), M = function (t) {
            Object(p.a)(a, t);
            var e = Object(l.a)(a);

            function a() {
                return Object(o.a)(this, a), e.apply(this, arguments);
            }

            return Object(c.a)(a, [{
                key: 'render', value: function () {
                    return d.a.createElement(b.a, {style: E.row}, this.props.children);
                },
            }]), a;
        }(d.a.Component), A = function (t) {
            Object(p.a)(a, t);
            var e = Object(l.a)(a);

            function a() {
                var t;
                return Object(o.a)(this, a), (t = e.call(this)).initTimer = function () {
                    t.timer = setInterval((function () {
                        t.setState((function (t) {
                            return {timer: t.timer + 1};
                        }));
                    }), 1e3);
                }, t.state = {timer: 0}, t.initTimer(), t;
            }

            return Object(c.a)(a, [{
                key: 'render', value: function () {
                    return d.a.createElement(C.a, null, d.a.createElement(v.a, {
                        style: E.timer,
                        id: 'timer',
                    }, 'Timer:', this.state.timer));
                },
            }]), a;
        }(d.a.Component), D = function (t) {
            Object(p.a)(a, t);
            var e = Object(l.a)(a);

            function a() {
                return Object(o.a)(this, a), e.apply(this, arguments);
            }

            return Object(c.a)(a, [{
                key: 'render', value: function () {
                    return console.log('steps called'), d.a.createElement(C.a, null, d.a.createElement(v.a, {
                        style: E.timer,
                        id: 'steps',
                    }, 'Moves:', this.props.total), d.a.createElement(v.a, {
                        style: E.timer,
                        id: 'steps',
                    }, 'Solved:', this.props.solved));
                },
            }]), a;
        }(d.a.Component), T = function (t) {
            Object(p.a)(a, t);
            var e = Object(l.a)(a);

            function a() {
                var t;
                return Object(o.a)(this, a), (t = e.call(this)).initRows = function () {
                    for (var e = [], a = [], n = []; e.length < 15;) {
                        var s = Math.floor(24 * Math.random());
                        -1 === e.indexOf(s) && e.push(s);
                    }
                    return e = e.concat(e), (e = t.shuffleArray(e)).map((function (t, e) {
                        var s = {};
                        s.id = e, s.display = !1, s.solved = !1, s.value = m[t], n.push(s), (e + 1) % 5 === 0 && (a.push(n), n = []);
                    })), a;
                }, t.shuffleArray = function (t) {
                    for (var e = t.slice(), a = e.length; a; a -= 1) {
                        var n = Math.floor(Math.random() * a), s = e[a - 1];
                        e[a - 1] = e[n], e[n] = s;
                    }
                    return e;
                }, t.reset = function () {
                    var e = t.initRows();
                    t.setState({rows: e, lastselected: {}, moves: 0, count: 0, isDisabled: !1});
                }, t.onCardSelect = function () {
                    var e = Object(i.a)(r.a.mark((function e(a) {
                        return r.a.wrap((function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        t.state.rows.map((function (e, n) {
                                            e.map(function () {
                                                var e = Object(i.a)(r.a.mark((function e(n) {
                                                    return r.a.wrap((function (e) {
                                                        for (; ;) {
                                                            switch (e.prev = e.next) {
                                                                case 0:
                                                                    n.id === a.id && (n.display = !0, 0 === Object.keys(t.state.lastselected).length ? t.setState({lastselected: n}) : n.value === t.state.lastselected.value && n.id !== t.state.lastselected.id ? (n.solved = !0, t.setState({
                                                                        moves: t.state.moves + 1,
                                                                        count: t.state.count + 1,
                                                                    }), t.state.rows.map((function (e, a) {
                                                                        e.map((function (e) {
                                                                            e.id === t.state.lastselected.id && (e.solved = !0, t.state.lastselected = {});
                                                                        }));
                                                                    })), t.setState({rows: t.state.rows})) : (setTimeout((function () {
                                                                        t.state.rows.map((function (e, n) {
                                                                            e.map((function (e) {
                                                                                e.id === t.state.lastselected.id && !0 !== e.solved && (e.display = !1, a.display = !1, t.setState({
                                                                                    moves: t.state.moves + 1,
                                                                                    lastselected: {},
                                                                                    isDisabled: !1,
                                                                                }));
                                                                            }));
                                                                        })), t.setState({rows: t.state.rows});
                                                                    }), 1e3), t.state.isDisabled = !0));
                                                                case 1:
                                                                case'end':
                                                                    return e.stop();
                                                            }
                                                        }
                                                    }), e);
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments);
                                                };
                                            }());
                                        })), t.setState({rows: t.state.rows}), 15 == t.count && t.onFinish();
                                    case 3:
                                    case'end':
                                        return e.stop();
                                }
                            }
                        }), e);
                    })));
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                }(), t.displayAlert = function () {
                    'web' !== f.a.OS ? h.a.alert('Congratulations!!', 'You have completed the game in '.concat(t.moves, ' moves.'), [{
                        text: 'OK',
                        onPress: t.reset,
                    }], {cancelable: !1}) : window.confirm('Congratulations!!', 'You have completed the game in '.concat(t.state.moves, ' moves.')) && t.reset();
                }, t.onFinish = function () {
                    clearInterval(t.timer), setTimeout((function () {
                        return t.displayAlert();
                    }), 1);
                }, t.state = {rows: t.initRows(), lastselected: {}, moves: 0, count: 0, isDisabled: !1}, t;
            }

            return Object(c.a)(a, [{
                key: 'render', value: function () {
                    var t = this;
                    return d.a.createElement(b.a, {style: E.container}, d.a.createElement(g.a, {barStyle: 'light-content'}), d.a.createElement(v.a, {style: E.title}, 'Memory Matching Game'), d.a.createElement(A, null), d.a.createElement(D, {
                        total: this.state.moves,
                        solved: this.state.count,
                    }), d.a.createElement(y.a, {style: E.safearea}, this.state.rows.map((function (e, a) {
                        return d.a.createElement(M, {key: a, index: a}, e.map((function (e, a) {
                            return d.a.createElement(I, {
                                key: e.id,
                                isDisabled: t.state.isDisabled,
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
        }(d.a.Component), G = a(36);
    n.a.registerComponent(G.a, (function () {
        return T
    })), n.a.runApplication(G.a, {rootTag: document.getElementById("memory-game")})
}]), [[56, 1, 2]]]);
//# sourceMappingURL=main.b4e0cc67.chunk.js.map

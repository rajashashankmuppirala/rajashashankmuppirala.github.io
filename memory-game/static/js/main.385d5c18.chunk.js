(this.webpackJsonpmemoryGame = this.webpackJsonpmemoryGame || []).push([[0], Array(36).concat([function (e) {
    e.exports = JSON.parse('{"a":"memoryGame"}');
}, , , , , , , , , , , , , , , , , , , , function (e, t, a) {
    e.exports = a(92);
}, , , function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/bee.ee9a8073.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/cheetah.b7262f53.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/croc.0e41b832.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/deer.5b9a2f77.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/dog.bfe4271b.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/dolphin.40b9276b.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/elephant.cb52ba95.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/fox.65532169.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/giraffe.6769b4c1.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/kangaroo.36602689.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/koala.0907daa2.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/lemur.b7991b0a.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/monkey.9c22ed4a.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/ostrich.b2dc5cca.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/panda.6f844508.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/rabbit.bf9198bf.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/rhino.8bcd07a1.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/shark.05b18c56.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/sheep.937ee6c0.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/snake.bad46740.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/tiger.2218c52f.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/tortoise.8c4e7aaa.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/tucan.9df862bc.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/zebra.26d43ecd.png';
}, function (e, t, a) {
    e.exports = a.p + 'memory-game/static/media/card.33d780bd.png';
}, , , , , , , , , function (e, t, a) {
    'use strict';
    a.r(t);
    var n = a(98), r = a(25), i = a.n(r), s = a(34), o = a(5), c = a(6), p = a(8), l = a(7), u = a(0), m = a.n(u),
        d = [a(59), a(60), a(61), a(62), a(63), a(64), a(65), a(66), a(67), a(68), a(69), a(70), a(71), a(72), a(73), a(74), a(75), a(76), a(77), a(78), a(79), a(80), a(81), a(82)],
        f = a(94), h = a(95), b = a(10), g = a(96), v = a(93), y = a(97), x = a(35), w = a(2), j = x.a.get('window'),
        O = Math.floor(.125 * j.width), k = Math.floor(O * (323 / 222)), E = w.a.create({
            container: {backgroundColor: 'gray', paddingTop: 50, flex: 1},
            title: {alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', fontSize: 20},
            timer: {
                paddingTop: 3,
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                fontSize: 14,
            },
            safearea: {paddingTop: 10, alignItems: 'center', justifyContent: 'center', flex: 1},
            row: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                marginVertical: 10,
            },
            card: {backgroundColor: '#fff', borderColor: '#fff', borderWidth: 5, borderRadius: 3},
            cardImage: {width: O, height: k},
        }), C = a(100), S = a(99), T = function (e) {
            Object(p.a)(n, e);
            var t = Object(l.a)(n);

            function n() {
                return Object(o.a)(this, n), t.apply(this, arguments);
            }

            return Object(c.a)(n, [{
                key: 'render', value: function () {
                    var e = this.props.onPress, t = this.props.solved, n = this.props.isDisabled,
                        r = this.props.display ? this.props.displayImage : a(83);
                    return m.a.createElement(C.a, {
                        disabled: t || n,
                        onPress: e,
                    }, m.a.createElement(b.a, {style: E.card}, m.a.createElement(S.a, {style: E.cardImage, source: r})));
                },
            }]), n;
        }(m.a.Component), I = function (e) {
            Object(p.a)(a, e);
            var t = Object(l.a)(a);

            function a() {
                return Object(o.a)(this, a), t.apply(this, arguments);
            }

            return Object(c.a)(a, [{
                key: 'render', value: function () {
                    return m.a.createElement(b.a, {style: E.row}, this.props.children);
                },
            }]), a;
        }(m.a.Component), M = function (e) {
            Object(p.a)(a, e);
            var t = Object(l.a)(a);

            function a() {
                var e;
                return Object(o.a)(this, a), (e = t.call(this)).initTimer = function () {
                    e.timer = setInterval((function () {
                        e.setState((function (e) {
                            return {timer: e.timer + 1};
                        }));
                    }), 1e3);
                }, e.stopTimer = function () {
                    clearInterval(e.timer);
                }, e.refreshTimer = function () {
                    clearInterval(e.timer), e.setState({timer: 0}), e.initTimer();
                }, e.state = {timer: 0}, e.initTimer(), e;
            }

            return Object(c.a)(a, [{
                key: 'render', value: function () {
                    return m.a.createElement(C.a, null, m.a.createElement(v.a, {
                        style: E.timer,
                        id: 'timer',
                    }, 'Timer: ', this.state.timer));
                },
            }]), a;
        }(m.a.Component), A = function (e) {
            Object(p.a)(a, e);
            var t = Object(l.a)(a);

            function a() {
                return Object(o.a)(this, a), t.apply(this, arguments);
            }

            return Object(c.a)(a, [{
                key: 'render', value: function () {
                    return m.a.createElement(C.a, null, m.a.createElement(v.a, {
                        style: E.timer,
                        id: 'steps',
                    }, 'Moves: ', this.props.total), m.a.createElement(v.a, {
                        style: E.timer,
                        id: 'steps',
                    }, 'Solved: ', this.props.solved));
                },
            }]), a;
        }(m.a.Component), D = function (e) {
            Object(p.a)(a, e);
            var t = Object(l.a)(a);

            function a() {
                var e;
                return Object(o.a)(this, a), (e = t.call(this)).initRows = function () {
                    for (var t = [], a = [], n = []; t.length < 15;) {
                        var r = Math.floor(24 * Math.random());
                        -1 === t.indexOf(r) && t.push(r);
                    }
                    return t = t.concat(t), (t = e.shuffleArray(t)).map((function (e, t) {
                        var r = {};
                        r.id = t, r.display = !1, r.solved = !1, r.value = d[e], n.push(r), (t + 1) % 5 === 0 && (a.push(n), n = []);
                    })), a;
                }, e.shuffleArray = function (e) {
                    for (var t = e.slice(), a = t.length; a; a -= 1) {
                        var n = Math.floor(Math.random() * a), r = t[a - 1];
                        t[a - 1] = t[n], t[n] = r;
                    }
                    return t;
                }, e.reset = function () {
                    e.timerElement.current.refreshTimer();
                    var t = e.initRows();
                    e.setState({rows: t, lastselected: {}, moves: 0, count: 0, isDisabled: !1});
                }, e.onCardSelect = function () {
                    var t = Object(s.a)(i.a.mark((function t(a) {
                        return i.a.wrap((function (t) {
                            for (; ;) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        return e.state.rows.map((function (t, n) {
                                            t.map(function () {
                                                var t = Object(s.a)(i.a.mark((function t(n) {
                                                    return i.a.wrap((function (t) {
                                                        for (; ;) {
                                                            switch (t.prev = t.next) {
                                                                case 0:
                                                                    if (n.id !== a.id) {
                                                                        t.next = 18;
                                                                        break;
                                                                    }
                                                                    if (n.display = !0, 0 !== Object.keys(e.state.lastselected).length) {
                                                                        t.next = 6;
                                                                        break;
                                                                    }
                                                                    e.setState({lastselected: n}), t.next = 18;
                                                                    break;
                                                                case 6:
                                                                    if (n.value !== e.state.lastselected.value || n.id === e.state.lastselected.id) {
                                                                        t.next = 16;
                                                                        break;
                                                                    }
                                                                    return n.solved = !0, t.next = 10, e.setState({
                                                                        moves: e.state.moves + 1,
                                                                        count: e.state.count + 1,
                                                                    });
                                                                case 10:
                                                                    return e.state.rows.map((function (t, a) {
                                                                        t.map((function (t) {
                                                                            t.id === e.state.lastselected.id && (t.solved = !0, e.state.lastselected = {});
                                                                        }));
                                                                    })), t.next = 13, e.setState({rows: e.state.rows});
                                                                case 13:
                                                                    15 == e.state.count && e.onFinish(), t.next = 18;
                                                                    break;
                                                                case 16:
                                                                    setTimeout((function () {
                                                                        e.state.rows.map((function (t, n) {
                                                                            t.map((function (t) {
                                                                                t.id === e.state.lastselected.id && !0 !== t.solved && (t.display = !1, a.display = !1, e.setState({
                                                                                    moves: e.state.moves + 1,
                                                                                    lastselected: {},
                                                                                    isDisabled: !1,
                                                                                }));
                                                                            }));
                                                                        })), e.setState({rows: e.state.rows});
                                                                    }), 1e3), e.state.isDisabled = !0;
                                                                case 18:
                                                                case'end':
                                                                    return t.stop();
                                                            }
                                                        }
                                                    }), t);
                                                })));
                                                return function (e) {
                                                    return t.apply(this, arguments);
                                                };
                                            }());
                                        })), t.next = 3, e.setState({rows: e.state.rows});
                                    case 3:
                                    case'end':
                                        return t.stop();
                                }
                            }
                        }), t);
                    })));
                    return function (e) {
                        return t.apply(this, arguments);
                    };
                }(), e.displayAlert = function () {
                    e.timerElement.current.stopTimer(), 'web' !== f.a.OS ? h.a.alert('Congratulations!!', 'You have completed the game in '.concat(e.state.moves, ' moves.'), [{
                        text: 'OK',
                        onPress: e.reset,
                    }], {cancelable: !1}) : window.confirm('Congratulations!!' + 'You have completed the game in '.concat(e.state.moves, ' moves.')) && e.reset();
                }, e.onFinish = function () {
                    setTimeout((function () {
                        return e.displayAlert();
                    }), 1);
                }, e.state = {
                    rows: e.initRows(),
                    lastselected: {},
                    moves: 0,
                    count: 0,
                    isDisabled: !1,
                }, e.timerElement = m.a.createRef(), e;
            }

            return Object(c.a)(a, [{
                key: 'render', value: function () {
                    var e = this;
                    return m.a.createElement(b.a, {style: E.container}, m.a.createElement(g.a, null), m.a.createElement(v.a, {style: E.title}, 'Memory Matching Game'), m.a.createElement(M, {ref: this.timerElement}), m.a.createElement(A, {
                        total: this.state.moves,
                        solved: this.state.count,
                    }), m.a.createElement(y.a, {style: E.safearea}, this.state.rows.map((function (t, a) {
                        return m.a.createElement(I, {key: a, index: a}, t.map((function (t, a) {
                            return m.a.createElement(T, {
                                key: t.id,
                                isDisabled: e.state.isDisabled,
                                display: t.display,
                                solved: t.solved,
                                displayImage: t.value,
                                onPress: function () {
                                    return e.onCardSelect(t)
                                }
                            })
                        })))
                    }))))
                }
            }]), a
        }(m.a.Component), R = a(36);
    n.a.registerComponent(R.a, (function () {
        return D
    })), n.a.runApplication(R.a, {rootTag: document.getElementById("memory-game")})
}]), [[56, 1, 2]]]);
//# sourceMappingURL=main.385d5c18.chunk.js.map

function Chess() {
    var self = this;
    this.chessmen = {
        redC1: { r: 0, c: 0, x: -144, y: 0, name: '车', color: 'red' },
        redC2: { r: 0, c: 8, x: -144, y: 0, name: '车', color: 'red' },
        redM1: { r: 0, c: 1, x: -108, y: 0, name: '马', color: 'red' },
        redM2: { r: 0, c: 7, x: -108, y: 0, name: '马', color: 'red' },
        redX1: { r: 0, c: 2, x: -72, y: 0, name: '相', color: 'red' },
        redX2: { r: 0, c: 6, x: -72, y: 0, name: '相', color: 'red' },
        redS1: { r: 0, c: 3, x: -36, y: 0, name: '仕', color: 'red' },
        redS2: { r: 0, c: 5, x: -36, y: 0, name: '仕', color: 'red' },
        redB2: { r: 0, c: 4, x: 0, y: 0, name: '帅', color: 'red' },
        redP1: { r: 2, c: 1, x: -180, y: 0, name: '炮', color: 'red' },
        redP2: { r: 2, c: 7, x: -180, y: 0, name: '炮', color: 'red' },
        redZ1: { r: 3, c: 0, x: -216, y: 0, name: '兵', color: 'red' },
        redZ2: { r: 3, c: 2, x: -216, y: 0, name: '兵', color: 'red' },
        redZ3: { r: 3, c: 4, x: -216, y: 0, name: '兵', color: 'red' },
        redZ4: { r: 3, c: 6, x: -216, y: 0, name: '兵', color: 'red' },
        redZ5: { r: 3, c: 8, x: -216, y: 0, name: '兵', color: 'red' },

        blueC1: { r: 9, c: 0, x: -144, y: -36, name: '车', color: 'black' },
        blueC2: { r: 9, c: 8, x: -144, y: -36, name: '车', color: 'black' },
        blueM1: { r: 9, c: 1, x: -108, y: -36, name: '马', color: 'black' },
        blueM2: { r: 9, c: 7, x: -108, y: -36, name: '马', color: 'black' },
        blueX1: { r: 9, c: 2, x: -72, y: -36, name: '象', color: 'black' },
        blueX2: { r: 9, c: 6, x: -72, y: -36, name: '象', color: 'black' },
        blueS1: { r: 9, c: 3, x: -36, y: -36, name: '士', color: 'black' },
        blueS2: { r: 9, c: 5, x: -36, y: -36, name: '士', color: 'black' },
        blueB2: { r: 9, c: 4, x: 0, y: -36, name: '将', color: 'black' },
        blueP1: { r: 7, c: 1, x: -180, y: -36, name: '炮', color: 'black' },
        blueP2: { r: 7, c: 7, x: -180, y: -36, name: '炮', color: 'black' },
        blueZ1: { r: 6, c: 0, x: -216, y: -36, name: '卒', color: 'black' },
        blueZ2: { r: 6, c: 2, x: -216, y: -36, name: '卒', color: 'black' },
        blueZ3: { r: 6, c: 4, x: -216, y: -36, name: '卒', color: 'black' },
        blueZ4: { r: 6, c: 6, x: -216, y: -36, name: '卒', color: 'black' },
        blueZ5: { r: 6, c: 8, x: -216, y: -36, name: '卒', color: 'black' }
    };
    this.$chess = $('#chess');
    this.flag = 'red';
    this.gameOver = false;

    this.$chess.on('click', '.red,.black', function () {
        if (self.gameOver) {
            return
        }
        if (!$(this).parent().hasClass('kill')) {
            $('.row>div').removeClass('border');
            $('.row').children().removeClass('move');
            $('.row').children().removeClass('kill');

            if ($(this).hasClass('red')) {
                if (self.flag === 'red') {
                    $(this).parent().addClass('border');
                    switch ($(this).html()) {
                        case '帅':
                            self.chuTuongMove('red', $(this));
                            break;
                        case '仕':
                            self.siMove('red', $(this));
                            break;
                        case '相':
                            self.tuongMove('red', $(this));
                            break;
                        case '马':
                            self.maMove('red', $(this));
                            break;
                        case '车':
                            self.xeMove('red', $(this));
                            break;
                        case '炮':
                            self.phaoMove('red', $(this));
                            break;
                        case '兵':
                            self.totMove('red', $(this));
                            break;
                    }
                }
            } else {

                if (self.flag === 'black') {
                    $(this).parent().addClass('border');
                    switch ($(this).html()) {
                        case '将':
                            self.chuTuongMove('black', $(this));
                            break;
                        case '士':
                            self.siMove('black', $(this));
                            break;
                        case '象':
                            self.tuongMove('black', $(this));
                            break;
                        case '马':
                            self.maMove('black', $(this));
                            break;
                        case '车':
                            self.xeMove('black', $(this));
                            break;
                        case '炮':
                            self.phaoMove('black', $(this));
                            break;
                        case '卒':
                            self.totMove('black', $(this));
                            break;
                    }
                }
            }
        }
    })
        .on('click', '.move,.kill', function () {
            var man = $('.border').html();
            $('.border').empty().removeClass('border');
            var child = $(this).children().html();
            $(this).html(man);
            $('.row').children().removeClass('move');
            $('.row').children().removeClass('kill');
            if (self.flag === 'red') {
                self.flag = 'black';
                $('.who').html('Black');
            } else {
                self.flag = 'red';
                $('.who').html('Red');
            }
            ;

            var shuaiX = '', shuaiY = '', jiangX = '', jiangY = '';
            $('.man').each(function () {
                if ($(this).html() === '帅') {
                    shuaiX = $(this).parent().attr('data-x');
                    shuaiY = $(this).parents('.row').attr('data-y');
                } else if ($(this).html() === '将') {
                    jiangX = $(this).parent().attr('data-x');
                    jiangY = $(this).parents('.row').attr('data-y');
                }
            });
            if (shuaiX === jiangX) {
                for (var i = parseInt(shuaiY) + 1; i < jiangY - shuaiY; i++) {
                    if ($('.row' + i).children().eq(shuaiX).children().length) {
                        break
                    }
                    if (i === jiangY - shuaiY - 1) {
                        self.gameOver = true;
                    }
                }
            }

            setTimeout(function () {
                if (self.gameOver) {
                    if (self.flag === 'red') {
                        alert('Red Win');
                    } else {
                        alert('Black Win')
                    }
                }

                if (child === '帅') {
                    self.gameOver = true;
                    alert('Black Win');
                } else if (child === '将') {
                    self.gameOver = true;
                    alert('Red Win');
                }
            }, 100)
        });

    this.init();
}

Chess.prototype = {
    constructor: Chess,
    init: function () {
        this.gameOver = false;
        this.flag = 'red';
        $('.row').children('div').empty();
        for (val in this.chessmen) {
            var el = this.chessmen[val];
            let cls = '.row' + el.r;
            this.$chess.find(cls).children('div').eq(el.c).html('<div class="man ' + el.color + '">' + el.name + '</div>');
        }
        $('.who').html('Red');
        $('div').removeClass('border move kill');
    },
    getPos: function (ths) {
        var y = parseInt(ths.parents('.row').attr('data-y')),
            x = parseInt(ths.parent().attr('data-x'));
        return { x: x, y: y }
    },
    move: function (type, x, y) {
        if (type === 'red') {
            if ($('.row' + y).children().eq(x).children('.black').length) {
                $('.row' + y).children().eq(x).addClass('kill');
            } else if ($('.row' + y).children().eq(x).children('.red').length) {

            } else {
                $('.row' + y).children().eq(x).addClass('move');
            }
        } else {
            if ($('.row' + y).children().eq(x).children('.black').length) {

            } else if ($('.row' + y).children().eq(x).children('.red').length) {
                $('.row' + y).children().eq(x).addClass('kill');
            } else {
                $('.row' + y).children().eq(x).addClass('move');
            }
        }
    },
    chuTuongMove: function (type, ths) {

        var self = this;
        let { x, y } = this.getPos(ths);
        var arr = [{ x: x - 1, y: y }, { x: x + 1, y: y }, { x: x, y: y - 1 }, { x: x, y: y + 1 }];
        $.each(arr, function (i, el) {
            if (el.x < 6 && el.x > 2 && el.y > -1 && el.y < 3) {
                self.move(type, el.x, el.y);
            } else if (el.x < 6 && el.x > 2 && el.y > 6 && el.y < 10) {
                self.move(type, el.x, el.y);
            }
        })
    },
    siMove: function (type, ths) {

        var self = this;
        let { x, y } = this.getPos(ths);
        let arr = [{ x: x - 1, y: y - 1 }, { x: x + 1, y: y - 1 }, { x: x - 1, y: y + 1 }, { x: x + 1, y: y + 1 }];
        $.each(arr, function (i, el) {
            if (el.y > -1 && el.y < 3 && el.x > 2 && el.x < 6) {
                self.move(type, el.x, el.y);
            } else if (el.y > 6 && el.y < 10 && el.x > 2 && el.x < 6) {
                self.move(type, el.x, el.y);
            }
        })
    },
    tuongMove: function (type, ths) {
        var self = this;
        let { x, y } = this.getPos(ths);
        let arr = [{ x: x - 2, y: y - 2 }, { x: x + 2, y: y - 2 }, { x: x - 2, y: y + 2 }, { x: x + 2, y: y + 2 }];
        $.each(arr, function (i, el) {
            if (el.y > -1 && el.y < 5 && type === 'red') {
                if ($('.row' + (el.y + y) / 2).children().eq((el.x + x) / 2).children().length === 0) {
                    self.move(type, el.x, el.y);
                }
            } else if (el.y > 4 && el.y < 10 && type === 'black') {
                if ($('.row' + (el.y + y) / 2).children().eq((el.x + x) / 2).children().length === 0) {
                    self.move(type, el.x, el.y);
                }
            }
        })
    },
    maMove: function (type, ths) {
        var self = this;
        let { x, y } = this.getPos(ths);
        let arr = [
            { x: x - 1, y: y - 2 },
            { x: x + 1, y: y - 2 },
            { x: x - 1, y: y + 2 },
            { x: x + 1, y: y + 2 },

            { x: x - 2, y: y - 1 },
            { x: x - 2, y: y + 1 },
            { x: x + 2, y: y - 1 },
            { x: x + 2, y: y + 1 }
        ];
        $.each(arr, function (i, el) {
            if ((x - el.x) === 2 && $('.row' + y).children().eq((x - 1)).children().length === 0) {
                self.move(type, el.x, el.y);
            } else if ((x - el.x) === -2 && $('.row' + y).children().eq((x + 1)).children().length === 0) {
                self.move(type, el.x, el.y);
            }
            if ((y - el.y) === 2 && $('.row' + (y - 1)).children().eq(x).children().length === 0) {
                self.move(type, el.x, el.y);
            } else if ((y - el.y) === -2 && $('.row' + (y + 1)).children().eq(x).children().length === 0) {
                self.move(type, el.x, el.y);
            }
        })
    },
    xeMove: function (type, ths) {
        var self = this;
        let { x, y } = this.getPos(ths);

        for (var i = y - 1; i > -1; i--) {
            if ($('.row' + i).children().eq(x).children().length === 0) {
                self.move(type, x, i);
            } else if ($('.row' + i).children().eq(x).children().length === 1) {
                self.move(type, x, i);
                break
            }
        }
        for (var i = y + 1; i < 10; i++) {
            if ($('.row' + i).children().eq(x).children().length === 0) {
                self.move(type, x, i);
            } else if ($('.row' + i).children().eq(x).children().length === 1) {
                self.move(type, x, i);
                break
            }
        }

        for (var i = x - 1; i > -1; i--) {
            if ($('.row' + y).children().eq(i).children().length === 0) {
                self.move(type, i, y);
            } else if ($('.row' + y).children().eq(i).children().length === 1) {
                self.move(type, i, y);
                break
            }
        }

        for (var i = x + 1; i < 10; i++) {
            if ($('.row' + y).children().eq(i).children().length === 0) {
                self.move(type, i, y);
            } else if ($('.row' + y).children().eq(i).children().length === 1) {
                self.move(type, i, y);
                break
            }
        }
    },
    phaoMove: function (type, ths) {
        var self = this;
        let { x, y } = this.getPos(ths);
        let count = 0;

        for (var i = y - 1; i > -1; i--) {
            if (i === y - 1) {
                count = 0;
            }
            if (count == 0) {
                if ($('.row' + i).children().eq(x).children().length === 0) {
                    self.move(type, x, i);
                } else if ($('.row' + i).children().eq(x).children().length === 1) {
                    count++;
                }
            } else if (count === 1) {
                if ($('.row' + i).children().eq(x).children().length === 0) {

                } else if ($('.row' + i).children().eq(x).children().length === 1) {
                    self.move(type, x, i);
                    break;
                }
            } else {
                break
            }

        }

        for (var i = y + 1; i < 10; i++) {
            if (i === y + 1) {
                count = 0;
            }

            if (count === 0) {
                if ($('.row' + i).children().eq(x).children().length === 0) {
                    self.move(type, x, i);
                } else if ($('.row' + i).children().eq(x).children().length === 1) {
                    count++;
                }
            } else if (count === 1) {
                if ($('.row' + i).children().eq(x).children().length === 0) {

                } else if ($('.row' + i).children().eq(x).children().length === 1) {
                    self.move(type, x, i);
                    break
                }
            } else {
                break
            }

        }

        for (var i = x - 1; i > -1; i--) {
            if (i === x - 1) {
                count = 0;
            }

            if (count === 0) {
                if ($('.row' + y).children().eq(i).children().length === 0) {
                    self.move(type, i, y);
                } else if ($('.row' + y).children().eq(i).children().length === 1) {
                    count++;
                }
            } else if (count === 1) {
                if ($('.row' + y).children().eq(i).children().length === 0) {

                } else if ($('.row' + y).children().eq(i).children().length === 1) {
                    self.move(type, i, y);
                    break
                }
            } else {
                break
            }

        }

        for (var i = x + 1; i < 10; i++) {
            if (i === x + 1) {
                count = 0;
            }

            if (count === 0) {
                if ($('.row' + y).children().eq(i).children().length === 0) {
                    self.move(type, i, y);
                } else if ($('.row' + y).children().eq(i).children().length === 1) {
                    count++;
                }
            } else if (count === 1) {
                if ($('.row' + y).children().eq(i).children().length === 0) {

                } else if ($('.row' + y).children().eq(i).children().length === 1) {
                    self.move(type, i, y);
                    break
                }
            } else {
                break
            }

        }
    },
    totMove: function (type, ths) {
        var self = this;
        let { x, y } = this.getPos(ths);
        if (type === 'red') {
            if (y < 5) {
                var arr = [{ x: x, y: y + 1 }];
            } else {
                var arr = [{ x: x - 1, y: y }, { x: x + 1, y: y }, { x: x, y: y + 1 }];
            }
            $.each(arr, function (i, el) {
                self.move(type, el.x, el.y);
            })
        } else {

            if (y < 5) {
                var arr = [{ x: x - 1, y: y }, { x: x + 1, y: y }, { x: x, y: y - 1 }];
            } else {
                var arr = [{ x: x, y: y - 1 }];
            }
            $.each(arr, function (i, el) {
                self.move(type, el.x, el.y);
            })
        }
    }
};
const chess = new Chess();
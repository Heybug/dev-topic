$.fn.extend({
    //---元素拖动插件
    dragging: function (data) {
        var $this = $(this);
        var $main = $(".u-box").width() - 50;
        var xPage;
        var yPage, offsetY;
        var X;//
        var Y;//
        var xRand = 0;//
        var yRand = 0;//
        var $father = $this.parent();
        var defaults = {
            move: 'both',
            randomPosition: true,
            hander: 1
        };
        var opt = $.extend({}, defaults, data);
        var movePosition = opt.move;
        var random = opt.randomPosition;

        var hander = opt.hander;

        if (hander == 1) {
            hander = $this;
        } else {
            hander = $this.find(opt.hander);
        }

        //---初始化
        // $father.css({"position": "relative"});
        // $this.css({"position": "absolute"});
        hander.css({"cursor": "move"});

        var faWidth = $father.width();
        var faHeight = $father.height();
        var thisWidth = $this.width() + parseInt($this.css('padding-left')) + parseInt($this.css('padding-right'));
        var thisHeight = $this.height() + parseInt($this.css('padding-top')) + parseInt($this.css('padding-bottom'));

        var mDown = false;
        var rRightDown = false, rLeftDown = false, rRightUp = false, rLeftUp = false, rRight = false, rLeft = false, rUp = false, rDown = false;
        var positionX;
        var positionY;
        var moveX;
        var moveY;

        if (random) {
            $thisRandom();
        }

        function $thisRandom() { //随机函数
            $this.each(function (index) {
                var randY = 100;//parseInt(Math.random() * (faHeight - thisHeight));///
                var randX = (faWidth - thisWidth) / 2;//parseInt(Math.random() * (faWidth - thisWidth));///
                if (movePosition.toLowerCase() == 'x') {
                    $(this).css({
                        left: randX
                    });
                } else if (movePosition.toLowerCase() == 'y') {
                    $(this).css({
                        top: randY
                    });
                } else if (movePosition.toLowerCase() == 'both') {
                    $(this).css({
                        top: randY,
                        left: randX
                    });
                }
            });
        }

        hander.mousedown(function (e) {
            e.offsetY = offsetY;
            $father.children().css({"zIndex": "0"});
            $this.css({"zIndex": "1"});
            mDown = true;
            X = e.pageX;
            Y = e.pageY;
            positionX = $this.position().left;
            positionY = $this.position().top;
            return false;
        });

        $(document).mouseup(function (e) {
            // $father.mouseup(function (e) {
            mDown = false;
            rRightDown = false, rLeftDown = false, rRightUp = false, rLeftUp = false, rRight = false, rLeft = false, rUp = false, rDown = false;
        });

        /*$this.children(".r").mousedown(function () {
            var r = $(this).attr("class");
            if (r.indexOf("rRightDown") > 0) {
                rRightDown = true;
            } else if (r.indexOf("rDown") > 0) {
                rDown = true;
            } else if (r.indexOf("rRight") > 0) {
                rRight = true;
            }
        });*/

        hander.unbind("mousemove");

        // $(document).mousemove(function (e) {
        $father.mousemove(function (e) {
            var thisTop = $this.position().top;
            offsetY = (e.offsetY > $this.height() * 0.1) ? e.offsetY : $this.height();

            xPage = e.pageX;//--
            moveX = positionX + xPage - X;


            yPage = e.pageY;//--
            moveY = positionY + yPage - Y;

            rRight && $this.width((xPage - $(".main").width() / 2 - $this.position().left));
            rDown && $this.height($this.height(offsetY - thisTop));

            if (rRightDown) {
                $this.css({
                    "width": xPage - $(".main").width() / 2 - $this.position().left,
                    "height": offsetY - thisTop
                });
            }

            $(".w").text("w:" + $this.width());
            $(".h").text("h:" + $this.height());

            function thisXMove() { //x轴移动
                if (mDown == true) {
                    $this.css({"left": moveX});
                } else {
                    return;
                }
                if (moveX < 0) {
                    $this.css({"left": "0"});
                }
                if (moveX > (faWidth - thisWidth)) {
                    $this.css({"left": faWidth - thisWidth});
                }
                return moveX;
            }

            function thisYMove() { //y轴移动
                if (mDown == true) {
                    $this.css({"top": moveY});
                } else {
                    return;
                }
                if (moveY < 0) {
                    $this.css({"top": "0"});
                }
                if (moveY > (faHeight - thisHeight)) {
                    $this.css({"top": faHeight - thisHeight});
                }
                return moveY;
            }

            function thisAllMove() { //全部移动
                if (mDown == true) {
                    $this.css({"left": moveX, "top": moveY});
                } else {
                    return;
                }
                // if (moveX < 0) {
                //     $this.css({"left": "0"});
                // }
                if (moveX > (faWidth - thisWidth)) {
                    $this.css({"left": faWidth - thisWidth});
                }

                if (moveY < 0) {
                    $this.css({"top": "0"});
                }
                if (moveY > (faHeight - thisHeight)) {
                    $this.css({"top": faHeight - thisHeight});
                }
            }

            if (movePosition.toLowerCase() == "x") {
                thisXMove();
            } else if (movePosition.toLowerCase() == "y") {
                thisYMove();
            } else if (movePosition.toLowerCase() == 'both') {
                thisAllMove();
            }
        });
    }
}); 
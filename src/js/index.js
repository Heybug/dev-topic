/**
 * Created by yQiu on 16-7-23.
 */

/** 扩展组件start **/
// 背景
var tempBg = Vue.extend({
    props: ['item', 'index'],
    template: "#temp-bg"
});

// 热区
var tempHot = Vue.extend({
    props: ['item', 'index'],
    template: "#temp-hot"
});
/** 扩展组件end **/

var i = 0;

var vm = new Vue({
    el: '#app',
    data: {
        index: 0,
        editType: true, // 切换pc||mobile
        currentView: 'tab01', // 属性栏
        items: [], // 所有数据
        tempItem: [], // 背景数据
        hotItem: [], // 热区数据
        copyHotItem: {}, // 保存当前热区的数据
        saveList: [], // 已保存的编辑
        imgPath: {
            status: false,
            path: ""
        } // 组图
    },
    //局部注册组件
    components: {
        tempBg: tempBg,
        tempHot: tempHot
    },
    methods: {
        init: function (obj, temp) {
            if (temp == "bg") {
                this.toggleTabs("tempBg");
                return false;
            }

            var localSaveList = localStorage.getItem("saveList");
            localSaveList && (this.saveList = localStorage.getItem("saveList").split(","));
        },
        //绑定tab的切换事件
        toggleTabs: function (tempText) {
            this.currentView = tempText;
        },
        add: function (type, hotData, copy) {
            if (type == 1) {
                if (this.imgPath.status) {
                    for (var j = 0; j < i; j++) {
                        this.items.push({
                            height: 101, // 背景图片高度
                            imgUrl: 'http://mobile.uzise.com/topic/mobile/uzise1111/images/640_1' + j + '.jpg',
                            hot: []
                        });
                    }
                } else {
                    // [mobile,pc]
                    var typeURL = (this.editType) ? ("/topic/mobile/20170104/img/img") : ("/topic/20170104/img/img");
                    this.items.push({
                        height: 102, // 背景图片高度
                        imgUrl: typeURL + ++i + '.jpg',
                        hot: []
                    });
                }
                this.tempItem = _.last(this.items);
                this.toggleTabs("tempBg");
                setTimeout(function () {
                    if (this.editType)
                        $('.main').animate({scrollTop: $('.main .u-box').height() + 'px'}, 200);
                    else
                        $('.main').animate({scrollTop: $('.main .m-u-box').height() + 'px'}, 200);
                }, 100);
            } else {
                var copy = (copy && hotData.hot.length);
                if (copy && hotData.hot.length) {
                    this.copyHotItem.w = _.last(hotData.hot).w;
                    this.copyHotItem.h = _.last(hotData.hot).h;
                }
                var thisHotData = {
                    w: (copy && hotData.hot.length > 0) ? (_.last(hotData.hot).w) : (200),
                    h: (copy && hotData.hot.length > 0) ? (_.last(hotData.hot).h) : (100),
                    x: (this.editType) ? (106) : (200),
                    y: (this.editType) ? (100) : (200),
                    href: "",
                    activeColor: "rgba(58,248,51,0.2)",
                    goods: {
                        status: false,
                        id: ""
                    },
                    coupon: {
                        status: false,
                        id: ""
                    },
                    customClass: {
                        status: false,
                        class: ""
                    }
                };

                hotData.hot.push(thisHotData);
                this.tempItem = _.last(_.last(this.items).hot);
                this.toggleTabs("tempHot");
            }
            vm.init();
        },
        remove: function (item) {
            var i = this.items.indexOf(item);
            this.items.splice(i, 1);
        },
        property: function ($this) {
            vm._data.tempItem.w = $this.width();
            vm._data.tempItem.h = $this.height();
            vm._data.tempItem.x = $this.position().left;
            vm._data.tempItem.y = $this.position().top;
        },
        funHot: function (item, hotIndex) {
            vm._data.tempItem = item.hot[hotIndex];
            this.toggleTabs("tempHot");

            var $dom = $(".absolute");
            $dom.draggable({
                stop: function () {
                    vm.property($(this));
                }
            });
            $dom.resizable({
                stop: function () {
                    vm.property($(this));
                }
            });
        },
        saveCode: function () {
            $.prompt({
                title: '专题名称',
                input: $('select[name=save-list]').val(),
                empty: false, // 是否允许为空
                onOK: function (input) {
                    if (vm._data.items.length > 0) {
                        var code = JSON.stringify(vm._data.items);
                        vm._data.saveList.push(input);
                        localStorage.setItem("saveList", _.uniq(vm._data.saveList));
                        localStorage.setItem(input, code);
                        // 更新列表
                        vm._data.saveList = localStorage.getItem("saveList").split(",");
                        $.toast("已保存临时编辑", "text");
                    }
                }
            });
        },
        importCode: function (listName) {
            var code = localStorage.getItem(listName);
            if (code.length > 0) {
                this.items = JSON.parse(code);
                this.tempItem = this.items[0];
                vm.toggleTabs("tempBg");
                // $.toast("已导入临时编辑", "text");
            }
        },
        exportCode: function () {
            var exportHtml = {
                hot: function (obj, index) {
                    var style = "";
                    if (vm._data.editType) {
                        // 计算百分比坐标
                        var percent = function bfb(a1, a2) {
                            var z = ((a1 / a2) * 100).toFixed(3) + "%";
                            return z;
                        };
                        var h = $('.u-img').eq(index).children(".u-bg-img").height();
                        style = 'width: ' + percent(obj.w, 414) + '; height: ' + percent(obj.h, h) + '; top: ' + percent(obj.y, h) + '; left: ' + percent(obj.x, 414);
                    } else {
                        style = 'width: ' + obj.w + 'px; height: ' + obj.h + 'px; top: ' + obj.y + 'px; left: ' + obj.x + 'px';
                    }
                    var $a = $("<a>", {
                        href: ((!obj.goods.status && !obj.coupon.status && !obj.customClass.status) && obj.href) ? obj.href : "javascript:;",
                        class: "son",
                        style: style
                    });
                    // 跳转方式
                    if (!vm._data.editType && obj.href)
                        $a.attr("target", "_blank");

                    // 设置领取优惠券
                    if (obj.coupon.status) {
                        $a.addClass("get-coupon");
                        $a.attr("data-cid", obj.coupon.id);
                    }

                    // 添加自定义类
                    if (obj.customClass.status) {
                        $a.addClass(obj.customClass.class);
                    }
                    return "        " + $a[0].outerHTML + "\n";
                },
                uBgImg: function (obj) {
                    var bgImg = '        <img class="u-bg-img" src="' + obj.imgUrl + '" alt="">\n';
                    return bgImg;
                }
            };

            var uBoxStart = '<div id="vm" class="u-box">';

            var uImgStart = '   <div class="u-img">';

            var htmlCode = "";
            // 背景
            htmlCode += uBoxStart + "\n";
            for (var i = 0; i < this.items.length; i++) {
                htmlCode += uImgStart + "\n";
                // 热区
                var hot = this.items[i].hot;
                for (var j = 0; j < hot.length; j++) {
                    htmlCode += exportHtml.hot(hot[j], i);
                }
                htmlCode += exportHtml.uBgImg(this.items[i]);
                htmlCode += '   </div>\n';
            }
            !this.editType && ( htmlCode += '   <div class="u-clear"></div>\n');
            htmlCode += '</div>';

            var code = "<textarea style='width:100%;height: 300px;'>" + htmlCode + "</textarea>";
            $.modal({
                title: "Code",
                text: code
            });
        },
        delTopic: function () {
            var name = $('select[name=save-list]').val();
            name && $.confirm({
                title: '是否删除 ' + name + ' 编辑记录',
                text: '删除后无法恢复',
                onOK: function () {
                    vm._data.saveList = _.without(vm._data.saveList, name);
                    localStorage.setItem("saveList", _.uniq(vm._data.saveList));
                }
            });
        }
    }
});
vm.init();
function cl(item) {
    vm.toggleTabs("tempBg");
    vm._data.tempItem = item;
}

hotkeys('command+a,command+b,command+d,command+s', function (event, handler) {
    switch (handler.key) {
        case "command+a":// 添加一个热区
            (vm._data.items.length ) ? vm.add(0, vm._data.tempItem) : vm.add(1);
            break;
        case "command+b":// 添加一张背景
            vm.add(1);
            break;
        case "command+d":// 复制上一个热区
            vm.add(0, vm._data.tempItem, true);
            break;
        case "command+s":// 保存
            vm.saveCode();
            break;
    }
    return false;
});

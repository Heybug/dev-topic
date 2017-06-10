<template>
    <div id="app">
        <nav>
            <div id="mty">专题制作</div>
            <div class="wrapper">
                <el-button type="primary" size="small">保存</el-button>
                <el-button type="primary" size="small">导入</el-button>
                <el-button type="primary" size="small">构建</el-button>
            </div>
            <div id="ruler">
                <i @click="funRuler"></i>
                <span v-for="(item,i) in rulerData.scale" :style="{left:item.left+'px'}">{{item.txt}}</span>
            </div>
            <div class="rulerV" @click="rmRuler" :style="{left:rulerData.x+'px'}"></div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                rulerData: {
                    x: -1,
                    scale: []
                },
                radio: 'Topic',
                num1: 12,
                value1: true,
                value2: false,
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        beforeCreate: function () {
            this.$nextTick(function () {
                var wRuler = document.getElementById('ruler').offsetWidth;
                console.log(wRuler);
                for (var i = 0; i < wRuler; i += 50) {
                    this.rulerData.scale.push({txt: i, left: i});
                }
            })
        },
        methods: {
            // 标尺
            funRuler: function (event) {
                this.rulerData.x = event.layerX + 35;
            },
            rmRuler: function () {
                this.rulerData.x = -1;
            },
            open() {
                this.$alert('这是一段内容', '测试🦉', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'success',
                            message: `🦉: hello world!`
                        });
                    }
                });
            },
            handleChange(value) {
                console.log(value);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="less">
    @color1: #303030;
    @color2: #434a54;

    @navHeight: 50px;

    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        width: 100%;
        height: 100%;
        background-color: @color2;
        overflow: hidden;
    }

    #app {
        position: relative;
        width: 100%;
        height: 100%;
    }

    nav {
        position: relative;
        height: @navHeight;
        background: @color1;
        &:after {
            position: absolute;
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: #000;
            left: 0;
            bottom: 0;
        }
    }

    #mty {
        width: 200px;
        height: 100%;
        line-height: @navHeight;
        text-align: center;
        font-size: 25px;
        color: #fff;
        float: left;
    }

    .wrapper {
        float: right;
        height: @navHeight;
        line-height: @navHeight;
        margin-right: 50px;
    }

    #ruler {
        position: absolute;
        cursor: pointer;
        width: 100%;
        height: 18px;
        top: @navHeight;
        left: 0;
        right: 0;
        margin-left: 35px;
        background: #303030 url(./assets/ruler.gif);
        background-position: 1px -82px;
        i {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
        }
        span {
            position: absolute;
            top: -1px;
            color: #bdbdbd;
            font-size: 12px;
        }
    }

    .rulerV {
        position: fixed;
        cursor: pointer;
        width: 1px;
        height: 100%;
        top: @navHeight;
        left: -1px;
        z-index: 2;
        background-color: #3af833;
        transition: left .3s;
    }
</style>

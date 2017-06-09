<template>
    <div id="app">
        <nav>
            <div id="mty">专题制作</div>
            <span class="wrapper">
                <el-button type="success">成功按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
                <el-button type="info">信息按钮</el-button>
            </span>
            <div id="ruler" @click.self="funRuler">
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

<style>
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        width: 100%;
        height: 100%;
        background-color: #434a54;
    }

    #app {
        position: relative;
        width: 100%;
        height: 100%;
    }

    nav {
        position: relative;
        height: 80px;
        background: #303030;
    }

    nav:after {
        position: absolute;
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #000;
        left: 0;
        bottom: 0;
    }

    #mty {
        width: 200px;
        height: 100%;
        line-height: 80px;
        text-align: center;
        font-size: 30px;
        color: #fff;
        float: left;
    }

    .wrapper {
        float: right;
        height: 80px;
        line-height: 80px;
    }

    #ruler {
        position: absolute;
        cursor: pointer;
        width: 100%;
        height: 18px;
        top: 80px;
        margin-left: 35px;
        background: #303030 url(./assets/ruler.gif);
        background-position: 1px -82px;
    }

    #ruler span {
        position: absolute;
        top: -1px;
        color: #bdbdbd;
        font-size: 12px;
    }

    .rulerV {
        position: fixed;
        cursor: pointer;
        width: 1px;
        height: 100%;
        top: 80px;
        left: -1px;
        background-color: #3af833;
        transition: left .3s;
    }
</style>

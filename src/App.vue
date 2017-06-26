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
        <div id="main-content">main</div>
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
    @import "assets/less/app.less";
</style>

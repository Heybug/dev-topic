<template>
    <div id="app">
        <nav>
            <div id="mty">专题制作</div>
            <div class="wrapper">
                <el-button type="primary" size="small" @click="open">保存</el-button>
                <el-button type="primary" size="small">导入</el-button>
                <el-button type="primary" size="small">构建</el-button>
            </div>
            <div id="ruler">
                <i @click="funRuler"></i>
                <span v-for="(item,i) in rulerData.scale" :style="{left:item.left+'px'}">{{item.txt}}</span>
            </div>
            <div class="rulerV" @click="rmRuler" :style="{left:rulerData.x+'px'}"></div>
        </nav>
        <!--工具栏组件-->
        <router-view></router-view>

        <!--专题编辑组件-->
        <Edit></Edit>

        <!--属性面板-->
        <Attribute></Attribute>
    </div>
</template>

<script>
    import Edit from './components/Edit.vue'
    import Attribute from './components/Attribute.vue'

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
        components: {Edit, Attribute},
        beforeCreate: function () {
            this.$nextTick(function () {
                var wRuler = document.getElementById('ruler').offsetWidth;
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

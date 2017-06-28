<template>
    <div>
        <ul class="tool-bar">
            <li @click="addBackgroundImg">图片</li>
            <li @click="addHot">热区</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'toolbar',
        data () {
            return {
                images: 2
            }
        },
        methods: {
            addBackgroundImg: function () {
                this.images += 1;
                // 触发组件 A 中的事件
                window.bus.$emit('id-selected', this.images);
            },
            addHot: function () {
                this.$message({
                    type: 'success',
                    message: this.message
                });
            }
        }
    }
</script>

<style lang="less">
    @import '../assets/less/toolBar.less';
</style>

<template>
    <div>
        <ul class="tool-bar">
            <li @click="addBackgroundImg" v-for="item in toolbar">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'toolbar',
        data () {
            return {
                images: 2,
                toolbar: ['图片', '热区']
            }
        },
        methods: {
            addBackgroundImg: function () {
                this.images += 1;
                // 触发组件 A 中的事件
                window.bus.$emit('id-selected', this.images);
            },
            msg: function () {
                this.$message({
                    type: 'success',
                    message: this.message
                });
            }
        }
    }
    // 触发组件 A 中的事件
    //    bus.$emit('id-selected', 1);
    //    console.log(window.bus);
</script>

<style lang="less">
    @import '../assets/less/toolBar.less';
</style>

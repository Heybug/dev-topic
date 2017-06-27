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
                toolbar: ['图片', '热区']
            }
        },
        methods: {
            addBackgroundImg: function () {
                this.$message({
                    type: 'success',
                    message: `测试添加背景图片`
                });
            }
        }
    }
</script>

<style lang="less">
    @import '../assets/less/toolBar.less';
</style>

<template>
    <div id="div-wrap">
        hello template
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
    @import "../assets/less/Attributed";
</style>
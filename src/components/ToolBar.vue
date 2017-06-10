<template>
    <div>
        <ul class="tool-bar">
            <li v-for="item in toolbar">{{item}}</li>
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
        methods: {}
    }
</script>

<style lang="less">

    .tool-bar {
        position: fixed;
        top: @navHeight2;
        bottom: 0;
        width: 35px;
        display: flex;
        flex-direction: column;
        text-align: center;
        z-index: 10;
        background: #303030;
        li {
            font-size: 12px;
            color: #fff;
            height: 35px;
            line-height: 35px;
            cursor: pointer;
        }
        &:after {
            position: absolute;
            content: '';
            display: block;
            width: 1px;
            height: 100%;
            background-color: #000;
            top: 0;
            right: 0;
        }
    }

    .el-menu-vertical-demo {
        position: absolute;
        width: 200px;
        top: 50px;
        right: 0;
        border-radius: 0;
    }
</style>

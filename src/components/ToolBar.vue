<template>
    <div>
        <ul class="tool-bar">
            <li v-for="item in toolbar">{{item}}</li>
        </ul>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    export default {
        components: {ElRow},
        name: 'toolbar',
        data () {
            return {
                toolbar: ['图片', '热区']
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .tool-bar {
        position: fixed;
        top: 80px;
        bottom: 0;
        width: 35px;
        display: flex;
        flex-direction: column;
        text-align: center;
        background: #324157;
    }

    .tool-bar li {
        font-size: 12px;
        color: #fff;
        height: 35px;
        line-height: 35px;
    }

    .el-menu-vertical-demo {
        position: absolute;
        width: 200px;
        top: 80px;
        right: 0;
        border-radius: 0;
    }
</style>

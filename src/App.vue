<template>
    <div id="app">
        <nav>
            <div id="mty">🦉</div>
            <span class="wrapper">
                <el-button type="success">成功按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
                <el-button type="info">信息按钮</el-button>
            </span>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                radio: '🦉',
                num1: 12,
                value1: true,
                value2: false,
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
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
        background-color: #48576a;
    }

    #app {
        position: relative;
        width: 100%;
        height: 100%;
    }

    nav {
        position: relative;
        height: 80px;
        background: #1f2d3d;
    }

    #mty {
        font-size: 60px;
        width: 150px;
        height: 100%;
        text-align: center;
        float: left;
    }

    .wrapper {
        float: right;
        height: 80px;
        line-height: 80px;
    }
</style>

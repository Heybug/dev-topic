<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <div id="mty">🦉</div>
        <router-view></router-view>
        <el-button type="text" @click="open">点击打开 Message Box</el-button>

        <el-radio class="radio" v-model="radio" label="🦉">🦉</el-radio>
        <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>

        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>

        <div class="swicth">
            <el-switch
                    v-model="value1"
                    on-text=""
                    off-text="">
            </el-switch>
            <el-switch
                    v-model="value2"
                    on-color="#13ce66"
                    off-color="#ff4949">
            </el-switch>
        </div>
    </div>
</template>

<script>
    /*export default {
     name: 'app'
     }*/
    export default {
        name: 'app',
        data () {
            return {
                radio: '🦉',
                num1: 12,
                value1: true,
                value2: false,
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
            }
        }
    }
</script>

<style>
    #mty {
        font-size: 120px;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

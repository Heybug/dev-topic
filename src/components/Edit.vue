<template>
    <div id="topic-edit-wrap" @click="addBackgroundImg">
        <img :src="'http://www.omicy.com/assets/pc/20170627/img'+index+'.jpg'" alt="" v-for="(item,index) in images" v-if="index>0">
    </div>
</template>

<script>
    export default {
        name: 'topic-edit',
        data () {
            return {
                images: 2,
                msg: 'edit wrap'
            }
        },
        created: function () {
            var edit = this;
            // 在组件 B 创建的钩子中监听事件
            window.bus.$on('id-selected', function (id) {
                edit.images = id;
                setTimeout(function () {
                    var editDom = document.getElementById('topic-edit-wrap');
                    editDom.scrollTop = editDom.scrollHeight;
                }, 200);
            })
        },
        methods: {
            addBackgroundImg: function () {
//                this.images++;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import "../assets/less/edit.less";
</style>

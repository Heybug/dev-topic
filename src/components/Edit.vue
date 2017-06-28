<template>
    <div id="topic-edit-wrap">
        <div class="topic-content-wrap">
            <div class="topic-image-wrap" @click.stop="thisImage" v-for="(item,index) in images" v-if="index>0">
                <img :src="'http://www.omicy.com/assets/pc/20170627/img'+index+'.jpg'" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: 'topic-edit',
        data () {
            return {
                images: 2,
                msg: 'edit wrap'
            }
        },
        created: function () {
            let edit = this;
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
            thisImage: function (event) {

                var $dom = $(event.target).parent();
                $dom.append("<p class='txt-demo'>lkl</P>");

                console.log($dom);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import "../assets/less/edit.less";
</style>

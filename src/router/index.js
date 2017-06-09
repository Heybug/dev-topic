import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ToolBar from '@/components/ToolBar'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/ToolBar',
            name: 'ToolBar',
            component: ToolBar
        }
    ]
})

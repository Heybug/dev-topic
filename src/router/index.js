import Vue from 'vue'
import Router from 'vue-router'
import ToolBar from '@/components/ToolBar'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'ToolBar',
            component: ToolBar
        }
    ]
})

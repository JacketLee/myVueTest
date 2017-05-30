import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout/layout'


const Notification = resolve => require(['../components/noticifation'],resolve);
const fromCheck = resolve => require(['../components/form'],resolve);
const tableV = resolve =>require(['../views/table/table'],resolve);
const Section = resolve =>require(['../components/selection'],resolve);
const Transfer = resolve =>require(['../components/transfer'],resolve);
const user = resolve =>require(['../components/user'],resolve);

Vue.use(Router)

export default new Router({
  routes: [
    {
       path: '/',
       name: '第一导航内容',
       redirect:'/dashboard',
       component: layout,
       children:[
       { path:'dashboard', component:Section, name:'首页内容'}
       ]
    },
    {
      path:'/table',
      name:'第二导航内容',
      redirect: '/table/tableIndex',
      component:layout,
      children: [
            { path : 'tableIndex', component : tableV, name:'表格' }
      ]
    },
    {
      path: '/addInfo',
      name: '第三导航内容',
      redirect: '/addInfo/index',
      component: layout,
      children: [
          {path : 'index', component: Notification, name:'通知插件'}
      ]
    },
    {
      path: '/transfer',
      name: '穿梭框内容',
      redirect: '/transfer/index',
      component:layout,
      children:[
          {path:'index',component:Transfer,name:'穿梭框'}
      ]
    },
    {
      path: '/fromCheck',
      name: '表单修改',
      redirect: '/fromCheck/index',
      component:layout,
      children:[
          {path:'index',component:fromCheck,name:'表单信息修改'}
      ]
    },
    {
      path: '/user',
      name: '列表信息',
      redirect: '/user/index',
      component:layout,
      children:[
          {path:'index',component:user,name:'列表详细信息'}
      ]
    }
  ]
})

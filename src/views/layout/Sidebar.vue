<template>
    <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark">
    <router-link to="/"> <el-menu-item index="1"><i class="el-icon-menu"></i>首页</el-menu-item></router-link>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>插件</template>
          <router-link class="commonNav" to="/transfer"><el-menu-item index="2-1">穿梭框</el-menu-item></router-link>
          <router-link class="commonNav" to="/table"><el-menu-item index="2-2">表格</el-menu-item></router-link>
          <router-link class="commonNav" to="/addInfo"><el-menu-item index="2-3">级联及提示弹窗</el-menu-item></router-link>  
          <router-link class="commonNav" to="/user"><el-menu-item index="2-4">列表</el-menu-item></router-link> 
      </el-submenu>   
      <router-link to="/fromCheck"> <el-menu-item index="3"><i class="el-icon-setting"></i>修改表单信息</el-menu-item></router-link> 
    </el-menu>
</template>

<style>
  .el-menu{
    min-height: 100%;
  }
</style>
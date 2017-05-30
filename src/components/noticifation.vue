<template>
  <div class="contain">
    <el-button plain @click="open3">成功</el-button>
    <el-button plain @click="open4">警告</el-button>
    <el-button plain @click="open5">消息</el-button>
    <el-button plain @click="open6">错误</el-button>
    <template>
      <div class="cascader">
        <el-cascader :options="options2" @active-item-change="handleItemChange" :props="props"></el-cascader>
      </div>
      <div class="notiDatePick">
          <el-time-picker is-range v-model="value3" placeholder="选择时间范围"></el-time-picker>
      </div>
    </template>
  </div> 
</template>

<script>
  export default {
    data() {
      return {
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
        value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    },
    methods: {
      open3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open6() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      },

      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      }
    }
  }
</script>

<style>
    .contain{
      text-align: center;
    }
    .cascader{
        margin-top: 30px;
    }
    .notiDatePick{
        margin-top: 20px;
    }
</style>
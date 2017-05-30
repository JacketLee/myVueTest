<template>
  <el-transfer v-model="value4" :props="{ key: 'value',label: 'desc'}" :data="data3"></el-transfer>
</template>

<script>
  export default {
    data() {
      const generateData3 = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `备选项 ${ i }`,
          });
        }
        return data;
      };
      return {
        data3: generateData3(),
        value4: []
      };
    }
  };
</script>

<style>
	.el-transfer{
		width: 500px;
		margin: 0 auto;
	}
</style>
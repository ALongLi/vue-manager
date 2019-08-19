<template>
  <div>
    <el-table :data="data" border stripe>
      <!-- <el-table-column
        v-for="col in columns"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width"
      ></el-table-column>-->
      <el-table-column prop="author" label="姓名" width="120"></el-table-column>
      <el-table-column prop="author" label="姓名" width="120"></el-table-column>
      <el-table-column prop="author" label="姓名" width="120"></el-table-column>
      <el-table-column prop="author" label="姓名" width="120"></el-table-column>
      <el-table-column prop="author" label="姓名" width="120"></el-table-column>
      <el-table-column prop="author" label="姓名" width="120"></el-table-column>
      <el-table-column prop="author" label="姓名" width="120"></el-table-column>
      <el-table-column prop="author" label="姓名" width="120"></el-table-column>
      <el-table-column prop="author" label="姓名" width="120"></el-table-column>
      <el-table-column prop="author" label="姓名" width="120"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import fetch from "@/fetch";
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    async getData() {
      const data = await fetch.getTableList({});
      try {
        const data3 = await fetch.getTableList3({});
      } catch (error) {}
      try {
        const data2 = await fetch.getTableList2({});
      } catch (error) {
        console.log(error);
      }
      this.data = data;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

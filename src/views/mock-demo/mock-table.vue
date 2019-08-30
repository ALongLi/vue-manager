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

      this.data = data;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

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
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .get("api/table")
        .then(res => {
          debugger;
          this.data = res.data;
        })
        .catch(function() {});
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

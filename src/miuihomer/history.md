<el-table ref="multipleTable"
:data="tableData"
tooltip-effect="dark"
align="center"
style="width: 100%">
<el-table-column type="selection"
width="55">
</el-table-column>
<el-table-column label="版本名称">
<template slot-scope="scope">{{ scope.row.name }}</template>
</el-table-column>
<el-table-column label="版本号"
width="70">
<template slot-scope="scope">{{ scope.row.code }}</template>
</el-table-column>
<el-table-column prop="year"
label="年份"
width="60">
</el-table-column>
<el-table-column prop="updates"
label="更新次数"
width="80"
show-overflow-tooltip>
</el-table-column>
</el-table>

<script>
  export default {
    data() {
      return {
        tableData: [{
          code: '0915',
          year: '23年',
          updates: 3
        }, {
          code: '0821',
          year: '23年',
          updates: 3
        }, {
          code: '0809',
          year: '23年',
          updates: 3
        }, {
          code: '0717',
          year: '23年',
          updates: 3
        }, {
          code: '0707',
          year: '23年',
          updates: 3
        }, {
          code: '0303',
          year: '23年',
          updates: 4
        }, {
          code: '0221',
          year: '23年',
          updates: 3
        }, {
          code: '0111',
          year: '23年',
          updates: 9
        }, {
          code: '0103',
          year: '23年',
          updates: 3
        }, {
          code: '1220',
          year: '22年',
          updates: 5
        }, {
          code: '1214',
          year: '22年',
          updates: 3
        }, {
          code: '1202',
          year: '22年',
          updates: 1
        }],
        multipleSelection: []
      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
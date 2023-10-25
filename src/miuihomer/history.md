<div>
<el-col v-for="(history,index) in historyData" :span="24">
<el-checkbox
    :key="history.id"
    v-model="history.ischecked"
    :disabled="true">
    {{history.code}} 丨 {{history.year}} 丨 {{history.updates}}
</el-checkbox>
</el-col>
</div>
<script>
  export default {
    historyData: [],
    data() {
      return {
        historyData: [{
            id: 12,
            ischecked: true,
          code: '0915',
          year: '23年',
          updates: 4
        }, {
          id: 11,
            ischecked: true,
          code: '0821',
          year: '23年',
          updates: 3
        }, {
          id: 10,
            ischecked: true,
          code: '0809',
          year: '23年',
          updates: 3
        }, {
          id: 9,
            ischecked: true,
          code: '0717',
          year: '23年',
          updates: 3
        }, {
          id: 8,
            ischecked: true,
          code: '0707',
          year: '23年',
          updates: 3
        }, {
          id: 7,
            ischecked: true,
          code: '0303',
          year: '23年',
          updates: 4
        }, {
          id: 6,
            ischecked: true,
          code: '0221',
          year: '23年',
          updates: 3
        }, {
          id: 5,
            ischecked: true,
          code: '0111',
          year: '23年',
          updates: 9
        }, {
          id: 4,
            ischecked: true,
          code: '0103',
          year: '23年',
          updates: 3
        }, {
          id: 3,
            ischecked: true,
          code: '1220',
          year: '22年',
          updates: 5
        }, {
          id: 2,
            ischecked: true,
          code: '1214',
          year: '22年',
          updates: 3
        }, {
          id: 1,
            ischecked: true,
            code: '1202',
          year: '22年',
          updates: 1
        }]
      }
    },
    methods: {
    }
  }
</script>
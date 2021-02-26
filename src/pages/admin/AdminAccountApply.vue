<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="All">
        <el-table
          :data="tableData.sort((front,back)=>back.date.localeCompare(front.date))"
          style="width: 100%;"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="date" label="Date" width="180">
          </el-table-column>
          <el-table-column prop="id" label="ID" width="180"> </el-table-column>
          <el-table-column prop="email" label="Email" width="180">
          </el-table-column>
          <el-table-column prop="nickName" label="NickName" width="180"> </el-table-column>
          <el-table-column label="Operation">
            <template #default="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleAccess(scope.$index, scope.row)"
                  :disabled="scope.row.state === 1"
                  >Pass</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleFail(scope.$index, scope.row)"
                  :disabled="scope.row.state === -1"
                  >Refuse</el-button
                >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="Accessed">Accessed</el-tab-pane>
      <el-tab-pane label="UnderReview">UnderReview</el-tab-pane>
      <el-tab-pane label="Failed">Failed</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";


export default {
  name: "AdminAccountApply",
  setup() {
    const state = reactive({
      tableData: [
        {
          id: "123",
          state: -1,
          email: "487768086@qq.com",
          date: new Date().toJSON().substring(0, 10),
          nickName: "mengxun",
        },
        {
          id: "2",
          state: 0,
          email: "487768086@qq.com",
          date: new Date().toJSON().substring(0, 10),
          nickName: "mengxun",
        },
        {
          id: "3",
          state: 1,
          email: "487768086@qq.com",
          date: new Date().toJSON().substring(0, 10),
          nickName: "mengxun",
        },
        {
          id: "4",
          state: -1,
          email: "487768086@qq.com",
          date: new Date().toJSON().substring(0, 10),
          nickName: "mengxun",
        },
        {
          id: "5",
          state: 1,
          email: "487768086@qq.com",
          date: new Date("2001-2-1").toJSON().substring(0, 10),
          nickName: "mengxun",
        },
        {
          id: "6",
          state: 0,
          email: "487768086@qq.com",
          date: new Date().toJSON().substring(0, 10),
          nickName: "mengxun",
        },
        {
          id: "1",
          state: -1,
          email: "487768086@qq.com",
          date: new Date("2025-2-1").toJSON().substring(0, 10),
          nickName: "mengxun",
        },
        {
          id: "2",
          state: 0,
          email: "487768086@qq.com",
          date: new Date().toJSON().substring(0, 10),
          nickName: "mengxun",
        },
        {
          id: "3",
          state: 1,
          email: "487768086@qq.com",
          date: new Date().toJSON().substring(0, 10),
          nickName: "mengxun",
        },
        {
          id: "4",
          state: -1,
          email: "487768086@qq.com",
          date: new Date().toJSON().substring(0, 10),
          nickName: "mengxun",
        },
        {
          id: "5",
          state: 1,
          email: "487768086@qq.com",
          date: new Date().toJSON().substring(0, 10),
          nickName: "mengxun",
        },
        {
          id: "6",
          state: 0,
          email: "487768086@qq.com",
          date: new Date().toJSON().substring(0, 10),
          nickName: "mengxun",
        },
      ],
    });

    const methods = {
      tableRowClassName({ row }) {
        if (row.state === 1) {
          return "success-row";
        } else if (row.state === 0) {
          return "warning-row";
        } else if (row.state === -1) {
          return "wrong-row";
        }
        return "";
      },
      handleAccess(index, row){
        console.log(index,row)
      },
      handleFail(index,row){
        console.log(index,row)
      }
    }

    return {
      ...toRefs(state),
      ...methods,
    };
  },
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.el-table .wrong-row {
  background: rgb(253, 239, 230);
}
</style>
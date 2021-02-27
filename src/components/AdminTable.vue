<template>
  <el-table
    :data="pageData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <!-- .sort((front,back)=>back.date.localeCompare(front.date)) -->
    <el-table-column prop="date" label="Date" width="180"> </el-table-column>
    <el-table-column prop="id" label="ID" width="180"> </el-table-column>
    <el-table-column prop="email" label="Email" width="180"> </el-table-column>
    <el-table-column prop="nickName" label="NickName" width="180">
    </el-table-column>
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
  <el-pagination
    style="margin-top: 10px"
    background
    layout="prev, pager, next"
    :total="pageTotal"
    :current-page="currentPage"
    @update:current-page="changePage($event)"
  >
  </el-pagination>
</template>

<script>
import { reactive, toRefs } from "vue";
import {onMounted} from 'vue'

import {GroupArray}  from '../utils/utils'

export default {
  name: "AdminTable",
  setup() {

    const state = reactive({
      allTableData:[], 
      tableData: [],
      pageData:[],
      pageTotal: 1,
      currentPage: 1
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
      handleAccess(index, row) {
        console.log(index, row);
      },
      handleFail(index, row) {
        console.log(index, row);
      },

      changeShowType(showType) {
          //批量修改，用于测试
        const allData = state.allTableData
        var tableData = null;
        state.currentPage = 1
        switch (showType) {
          case "all":
            tableData = allData;
            break;
          case "accessed":
            tableData = allData.filter((val) => {
              return val.state === 1;
            });
            break;
          case "underReview":
            tableData = allData.filter((val) => {
              return val.state === 0;
            });
            break;
          case "failed":
            tableData = allData.filter((val) => {
              return val.state === -1;
            });
            break;
          default:
            break;
        }
        state.tableData = tableData;
        this.pageSetting()     
      },

      changePage($event) {
        state.currentPage = $event;
        const data = state.tableData;
        state.pageData = GroupArray(data,10)[parseInt($event - 1)]
      },

      pageSetting() {
        //确认有多少页
        const pageNum = Math.ceil(state.tableData.length / 10);
        state.pageTotal = pageNum * 10;
        this.changePage(state.currentPage)
      },
    };

     onMounted(function(){
      state.allTableData = [
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
        {
          id: "3",
          state: 1,
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
        {
          id: "3",
          state: 1,
          email: "487768086@qq.com",
          date: new Date().toJSON().substring(0, 10),
          nickName: "mengxun",
        },
      ].map((item,index) => {
        item.id = index.toString()
        return item
      })
      state.tableData = state.allTableData
      methods.pageSetting()
    })

    return {
      ...toRefs(state),
      ...methods,
      onMounted
    };
  },
};
</script>

<style>
</style>
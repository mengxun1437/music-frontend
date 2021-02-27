<template>
  <div>
    <el-table
    :data="tableData.filter(data => !search || data.nickName.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="Avatar"
     >
      <template #default="scope">
         <el-avatar shape="square" size="small" :src="scope.row.avatar"></el-avatar>
      </template>
    </el-table-column>
    <el-table-column
      label="NickName"
      prop="nickName">
    </el-table-column>
    <el-table-column
      label="Created"
      prop="created">
    </el-table-column>
    <el-table-column
      label="Updated"
      prop="updated">
    </el-table-column>
    <el-table-column
      align="right">
      <template #header>
        <el-input
          v-model="search"
          size="mini"
          placeholder="Search"/>
      </template>
      <template #default="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
  style="margin-top:10px"
  background
  layout="prev, pager, next"
  :total="100">
</el-pagination>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import {onMounted} from 'vue'


export default {
    name:'AdminList',
    setup(){

      onMounted(()=> {
         for(let index = 0 ;index < 123 ;index ++){
          state.allTableData.push( {
            id:index.toString(),
            avatar:'http://qopwj0sbn.hn-bkt.clouddn.com/20210227105154.jpg',
            email:'487768086@qq.com',
            nickName:index.toString(),
            created:'2018-09-01',
            updated:'2018-10-20'
          })
        }
        state.tableData = state.allTableData
      })

      const state = reactive({
        allTableData:[],
        tableData:[],
        pageData:[],
        search:''
      })

      const methods = {
        handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }

    }

  

      return {
        ...toRefs(state),
        ...methods,
        onMounted
      }
    }
}
</script>

<style>

</style>
<template>
  <div>
    <el-table
    :data="pageData"
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
    <el-table-column label="Email" prop="email"> </el-table-column>
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
          @update:model-value="searchByNickName()"
          size="mini"
          placeholder="Search By NickName"/>
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
  :current-page="currentPage"
  @update:current-page="changePage($event)"
  :total="pageTotal">
</el-pagination>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import {onMounted} from 'vue'
import {GroupArray} from '../../utils/utils'


export default {
    name:'UserList',
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
        methods.pageSetting()
      })

      const state = reactive({
        allTableData:[],
        tableData:[],
        pageData:[],
        pageTotal:10,
        currentPage:1,
        search:''
      })

      const methods = {
        handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index,row) {
        console.log(index, row);
      },
      pageSetting(){
        const pageNum = Math.ceil(state.tableData.length / 10 )
        state.pageTotal = pageNum * 10

        this.changePage(1)
      },
      changePage($event){
        state.currentPage = $event
        state.pageData = GroupArray(state.tableData,10)[state.currentPage - 1]
      },
      searchByNickName(){
        const search = state.search
        console.log('search:',search)
        state.tableData = state.allTableData.filter(data => !search || data.nickName.toLowerCase().includes(search.toLowerCase()))
        this.pageSetting()
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
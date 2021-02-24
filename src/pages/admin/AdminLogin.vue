<template>
  <div class="body">
    <div class="login-canvas">
       <div class="login-form">
         
      <el-row class="top">
        <span>Welcome to Music Management Page</span> 
      </el-row>
      
      <el-row class="top">
        <span class="input-tag">AdminName</span>
      </el-row>
      <el-row>
        <el-input
          placeholder="Input the Admin Name Here!"
          v-model="adminName"
          clearable
        ></el-input>
      </el-row>

      <el-row class="top">
        <span class="input-tag">AdminPassword</span>
      </el-row>
      <el-row>
        <el-input
          placeholder="Input the Admin Password Here!"
          v-model="adminPassword"
          show-password
          clearable
        ></el-input>
      </el-row>

      <el-row class="button-row"
        ><el-button style="width:80%;" type="primary" @click="enter()">Enter</el-button>
      </el-row>
    </div>
    </div>
  </div>
</template> 

<script>
import { reactive, toRefs } from "vue";
import { ElMessage } from "element-plus";

export default {
  name: "AdminLogin",
  setup() {
    const state = reactive({
      adminName: "",
      adminPassword: "",
    });

    const methods = {
      // 进入，执行check()判断是否符合输入标准，在执行后端请求login()看是否成功
      enter() {
        if (!this.check()) return;
        this.login();
      },
      //检查输入格式是否正确
      check() {
        if (state.adminName.length == 0 || state.adminPassword.length == 0) {
          ElMessage.warning("AdminName or AdminPassword Wrong Format!");
          return false;
        }
        return true;
      },
      //后端验证
      login() {
        ElMessage.success("Access");
      },
    };

    return {
      ...toRefs(state),
      ...methods,
    };
  },
};
</script>

<style>
.body {
  margin: 0;
  padding: 0;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-canvas {
  border-radius: 5px;
  width: 325px;
  height: 300px;
  padding:10px;
  background-color: bisque;
  display: flex;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.top{
  margin-top:10px;
}


.input-tag {
  line-height: 40px;
}

.button-row{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
</style>
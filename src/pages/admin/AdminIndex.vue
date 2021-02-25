<template>
  <div>
    <el-container>
      <el-aside> 
        <el-menu
          :uniqueOpened="false"
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-user"></i>
              <span>Account</span>
            </template>
            <el-menu-item-group>
              <el-submenu index="1-1">
                <template #title>Admin Management</template>
                <el-menu-item-group>
                  <el-menu-item index="1-1-1" @click="setCurrentTab($event)"
                    >Admin Account Apply</el-menu-item
                  >
                  <el-menu-item index="1-1-2" @click="setCurrentTab($event)"
                    >Admin List</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="1-2">
                <template #title>User Management</template>
                <el-menu-item-group>
                  <el-menu-item index="1-2-1" @click="setCurrentTab($event)"
                    >User List</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template #title>
              <i class="el-icon-headset"></i>
              <span>Music</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click="setCurrentTab($event)"
                >Upload Music</el-menu-item
              >
              <el-menu-item index="2-2" @click="setCurrentTab($event)"
                >Music List</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-row>
            <el-col :span="18">
              <span class="current-tab">>>>{{ currentTab }}</span>
            </el-col>
            <el-col :span="6">
              Admin:<span class="admin-name">{{ adminName }}</span>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <div v-if="currentTab === ''">Welcome to Management Page</div>
          <div v-else>
            <div v-if="currentTab == 'Admin Account Apply'">
              <admin-account-apply></admin-account-apply>
            </div>
            <div v-else-if="currentTab == 'Admin List'">
              <admin-list></admin-list>
            </div>
            <div v-else-if="currentTab == 'User List'">
              <user-list></user-list>
            </div>
            <div v-else-if="currentTab == 'Upload Music'">
              <upload-music></upload-music>
            </div>
            <div v-else-if="currentTab == 'Music List'">
              <music-list></music-list>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import AdminAccountApply from "./AdminAccountApply";
import AdminList from './AdminList';
import UserList from "./UserList";
import UploadMusic from "./UploadMusic";
import MusicList from "./MusicList";

export default {
  name: "AdminIndex",
  components: {
    AdminAccountApply,
    AdminList,
    UserList,
    UploadMusic,
    MusicList
  },
  setup() {
    const state = reactive({
      adminName: "Mengxun",
      currentTab: "",
      menu: [
        {
          index: "1-1-1",
          item: "Admin Account Apply",
        },
        {
          index: "1-1-2",
          item: "Admin List",
        },
        {
          index: "1-2-1",
          item: "User List",
        },
        {
          index: "2-1",
          item: "Upload Music",
        },
        {
          index: "2-2",
          item: "Music List",
        },
      ],
    });

    const methods = {
      setCurrentTab($event) {
        state.currentTab = state.menu.find((val) => {
          return val.index == $event.index;
        }).item;
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
.current-tab {
  color: royalblue;
  font-weight: 900;
  float: left;
}

.admin-name {
  color: slateblue;
  font-weight: 800;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
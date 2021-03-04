<template>
  <div>
    <el-form label-position="right">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="MusicName">
            <el-input v-model="music.name" placeholder="MusicName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="MusicAuthor">
            <el-input
              v-model="music.author"
              placeholder="MusicAuthor"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="MusicType">
            <el-button
              style="width: 100%"
              @click="showMusicTypesDialog = true"
              >{{
                music.type.length === 0
                  ? "Select Music Types"
                  : "Chosen " + music.type.length.toString() + " Type"
              }}</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="MusicCover">
            <el-upload
              :auto-upload="false"
              limit="1"
              :multiple="false"
              accept="image/png,image/jpeg,image/jpg"
              list-type="picture"
              :on-change="handleCoverChangeFileList"
              :on-remove="handleCoverClearFileList"
            >
              <!-- :on-change="handleChangeFileList(file,fileList)" -->
              <el-button
                type="primary"
                v-if="music.cover.fileList.length === 0"
                >Select Music Cover <i class="el-icon-upload el-icon--right"></i
              ></el-button>
              <template #tip v-if="music.cover.fileList.length === 0">
                <div class="el-upload__tip">只能上传 jpg/png/jpeg 文件</div>
              </template>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="MusicFile">
            <el-upload
              :auto-upload="false"
              limit="1"
              :multiple="false"
              accept=".mp3"
              list-type="text"
              :on-change="handleMusicChangeFileList"
              :on-remove="handleMusicClearFileList"
            >
              <el-button type="primary" v-if="music.file.fileList.length === 0"
                >Select Music File <i class="el-icon-upload el-icon--right"></i
              ></el-button>
              <template #tip v-if="music.file.fileList.length === 0">
                <div class="el-upload__tip">只能上传 mp3 文件</div>
              </template>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top:50px">
        <el-col :span="20">

        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="upLoadMusic()">Upload Now</el-button>
        </el-col> 
      </el-row>
    </el-form>

    <el-dialog title="MusicTypes" v-model="showMusicTypesDialog">
      <el-checkbox-group v-model="music.type">
        <el-checkbox
          v-for="type in musicTypes"
          :label="type.typeId"
          :key="type"
          >{{ type.typeName }}</el-checkbox
        >
      </el-checkbox-group>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import {ElMessage} from 'element-plus'

export default {
  name: "UploadMusic",
  setup() {
    const state = reactive({
      music: {
        name: "",
        author: "",
        type: [],
        cover: {
          fileList: [],
        },
        file:{
          fileList: []
        }
      },
      musicTypes: [
        {
          typeId: "1",
          typeName: "国风",
        },
        {
          typeId: "2",
          typeName: "流行",
        },
        {
          typeId: "3",
          typeName: "流行",
        },
        {
          typeId: "4",
          typeName: "流行",
        },
        {
          typeId: "5",
          typeName: "流行",
        },
        {
          typeId: "6",
          typeName: "流行",
        },
        {
          typeId: "456",
          typeName: "流行",
        },
        {
          typeId: "456",
          typeName: "流行",
        },
        {
          typeId: "456",
          typeName: "流行",
        },
        {
          typeId: "456",
          typeName: "流行",
        },
        {
          typeId: "456",
          typeName: "流行",
        },
        {
          typeId: "456",
          typeName: "流行",
        },
        {
          typeId: "456",
          typeName: "流行",
        },
        {
          typeId: "456",
          typeName: "流行",
        },
        {
          typeId: "456",
          typeName: "流行",
        },
        {
          typeId: "456",
          typeName: "流行",
        },
        {
          typeId: "456",
          typeName: "流行",
        },
        {
          typeId: "456",
          typeName: "流行",
        },
      ],
      showMusicTypesDialog: false,
    });

    const methods = {
      handleCoverChangeFileList(file) {
        //  console.log(file,fileList)
        var tmpFile = {
          name: file.name,
          url: file.url,
        };

        state.music.cover.fileList.push(tmpFile);
      },
      handleCoverClearFileList() {
        // console.log(file,fileList)
        state.music.cover.fileList = [];
      },

      handleMusicChangeFileList(file) {
        //  console.log(file,fileList)
        var tmpFile = {
          name: file.name,
          url: file.url,
        };

        state.music.file.fileList.push(tmpFile);
      },
      handleMusicClearFileList() {
        // console.log(file,fileList)
        state.music.file.fileList = [];
      },

      checkBeforeSubmit(){
        if(state.music.name.length === 0){
          ElMessage.warning("Music Name Format Error!");
          return false;
        }else if(state.music.author.length === 0){
          ElMessage.warning("Music Author Format Error!")
          return false
        }else if(state.music.type.length === 0){
          ElMessage.warning("Music Type Format Error!")
          return false
        }else if(state.music.cover.fileList.length === 0){
          ElMessage.warning("Music cover Format Error!")
          return false
        }else if(state.music.file.fileList.length === 0){
          ElMessage.warning("Music File Format Error!")
          return false
        }
        return true
      },

      upLoadMusic(){
        if(!this.checkBeforeSubmit()){
          return
        }

      }
    };

    return {
      ...toRefs(state),
      ...methods,
    };
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
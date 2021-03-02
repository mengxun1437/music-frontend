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
            accept="mp3"
            >
              <el-button type="primary"
                >Select Music Cover <i class="el-icon-upload el-icon--right"></i
              ></el-button>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="MusicFile">
            <el-upload>
              <el-button type="primary"
                >Select Music File <i class="el-icon-upload el-icon--right"></i
              ></el-button>
            </el-upload>
          </el-form-item>
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
export default {
  name: "UploadMusic",
  setup() {
    const state = reactive({
      music: {
        name: "",
        author: "",
        type: [],
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

    const methods = {};

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
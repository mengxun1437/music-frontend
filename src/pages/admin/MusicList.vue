<template>
  <div>
    <el-row>
      <el-col :span="18"></el-col>
      <el-col :span="6">
        <el-input
          v-model="search"
          placeholder="Search By Music Name or Author"
          @input="searchByNameOrAuthor()"
        ></el-input>
      </el-col>
    </el-row>
    <el-row v-for="index in Math.ceil(pageMusicList.length / 6)" :key="index">
      <el-col
        :span="4"
        v-for="(music, i) in pageMusicList.slice(
          (index - 1) * 6,
          index * 6 > pageMusicList.length ? pageMusicList.length : index * 6
        )"
        :key="i"
      >
        <el-card style="width: 130px; border-radius: 20px" shadow="hover">
          <img :src="music.cover" class="image" />
          <div style="padding: 4px">
            <span>{{ music.name }}</span>
            <span>{{ music.author }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      style="margin-top: 10px"
      background
      layout="prev, pager, next"
      :current-page="currentPage"
      @update:current-page="changePage($event)"
      :total="pageTotal"
    >
    </el-pagination>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { GroupArray } from "../../utils/utils";

export default {
  name: "MusicList",

  setup() {
    onMounted(() => {
      for (let index = 0; index < 200; index++) {
        var item = {
          id: index.toString(),
          name: index.toString(),
          author: index.toString(),
          cover:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          file: "",
        };
        state.allMusicList.push(item);
      }
      item = {
          id: '123423',
          name: 'mengxunweqweqweqwe',
          author:'123',
          cover:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          file: "",
        };
      
      state.allMusicList.push(item)
      state.searchMusicList = state.allMusicList;
      methods.pageSetting();
    });

    const state = reactive({
      allMusicList: [],
      searchMusicList: [],
      pageMusicList: [],
      search: "",
      currentPage: 1,
      pageTotal: 1,
    });

    const methods = {
      pageSetting() {
        const pageNum = Math.ceil(state.searchMusicList.length / 18);
        state.pageTotal = pageNum * 10;

        this.changePage(1);
      },
      changePage($event) {
        state.currentPage = $event;
        state.pageMusicList = GroupArray(state.searchMusicList, 18)[
          state.currentPage - 1
        ];
      },

      searchByNameOrAuthor() {
        const search = state.search;
        // console.log('search:',search)
        state.searchMusicList = state.allMusicList.filter(
          (data) =>
            !search ||
            data.name.toLowerCase().includes(search.toLowerCase()) ||
            data.author.toLowerCase().includes(search.toLowerCase())
        );
        this.pageSetting();
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
.image {
  width: 80px;
  border-radius: 10px;
}
</style>
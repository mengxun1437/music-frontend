<template>
  <div>
    <el-tabs type="border-card" @tab-click="tabClick($event)">
      <el-tab-pane label="All">
        <admin-table ref="showAll"></admin-table>
      </el-tab-pane>
      <el-tab-pane label="Accessed">
        <admin-table  ref="showAccessed"></admin-table>
      </el-tab-pane>
      <el-tab-pane label="UnderReview"><admin-table  ref="showUnderReview"></admin-table></el-tab-pane>
      <el-tab-pane label="Failed"><admin-table  ref="showFailed"></admin-table></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AdminTable from "../../components/AdminTable";

export default {
  name: "AdminAccountApply",
  components: {
    AdminTable,
  },
  setup() {
    const methods = {
      tabClick($event) {
        const currentTab = $event.props.label;
        switch (currentTab) {
          case "All":
            this.$refs.showAll.changeShowType("all");
            break;
          case "Accessed":
            this.$refs.showAccessed.changeShowType("accessed");
            break;
          case "UnderReview":
            this.$refs.showUnderReview.changeShowType("underReview");
            break;
          case "Failed":
            this.$refs.showFailed.changeShowType("failed");
            break;
          default:
            break;
        }
      },
    };

    return {
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
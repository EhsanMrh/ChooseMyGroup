<template>
  <div class="groups">
    <Group v-for="myGroup in allGroups" :key="myGroup.ta" :myGroup="myGroup" />
  </div>
</template>

<script>
import Group from "./Group";
import chooseMyGroup from "./shared/findGroup";

export default {
  name: "Groups",
  components: {
    Group
  },
  computed: {
    allGroups() {
      return chooseMyGroup(ta, stu);
    }
  }
};
</script>

<style lang="scss">
.groups {
  background-image: linear-gradient(to right top, #667eea, #764ba2);
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  overflow: auto;
  padding: $padding-medium;
  width: 100%;
}
</style>
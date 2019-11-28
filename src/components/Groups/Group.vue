<template>
  <div class="group">
    <h3 class="group__ta">{{myGroup.ta}}</h3>
    <ul class="group__students">
      <li v-for="(student,index) in myGroup['students']" :key="index" class="group__students-student">{{student}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Group",
  props: {
    myGroup: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang='scss'>
.group {
  background-color: $white;
  border-radius: 2rem;
  margin: 2rem;
  width: 30rem;
  overflow: hidden;

  &__ta {
    align-items: center;
    background-color: $yellow;
    display: flex;
    color: $blue;
    height: 20%;
    justify-content: center;
    padding: $padding-medium $padding-small;
    margin: 0;
  }

  &__students {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-evenly;
    padding: 0;
    margin: 0;
  }
}
</style>

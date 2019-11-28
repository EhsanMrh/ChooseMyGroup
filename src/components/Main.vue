<template>
  <div class="main">
      <Groups />
  </div>
</template>

<script>
import Groups from './Groups';

export default {
    name: 'Main',
    components: {
        Groups
    }
}
</script>

<style lang="scss">
.main {
    height: 100vh;
    width: 100vw;
}
</style>
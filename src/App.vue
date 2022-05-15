<template>
  <router-view/>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style lang="scss">
@import "@/assets/var";
*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a
{
  text-decoration: none;
  color: inherit;
}
#app {
  text-align: center;
  color: $color-text;
  min-height: 100vh;
  font-family: $font-main;
}
body {
  background-color: $color-white;
}
</style>

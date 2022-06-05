<template>
  <div class="toast" :class="{active: toast.state, error: toast.error}">
    <div class="toast-content">
      {{ toast.message }}
      <i class="toast-close" @click="closeToast()"></i>
    </div>
  </div>
</template>

<script>
// import store from "@/store";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "ComponentNotification",
  methods: {
    ...mapMutations([
      'closeToast'
    ]),
  },
  computed: {
    ...mapGetters([
        'toast'
    ]),
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/var";
.toast {
  position: fixed;
  top: -6em;
  left: 50%;
  transform: translateX(-50%);
  margin: 0.5em 0;
  width: fit-content;
  max-width: calc(100% - 1em);
  background-color: $color-dark-green;
  color: $color-white;
  border: 1px solid $color-white;
  border-radius: 3px;
  z-index: 99999;
  transition: top 0.4s ease-in-out, background-color 0s ease-in-out 2s;
  &.active {
    top: 0;
    &.error {
      background-color: $color-red;
      transition: top 0.4s ease-in-out, background-color 0s ease-in-out 0s;
    }
  }
  &-content {
    position: relative;
    padding: 1em 2em;
  }
  &-close {
    position: absolute;
    right: 5px;
    top: 10px;
    width: 10px;
    height: 10px;
    cursor: pointer;
    &:after, &:before {
      content: "";
      position: absolute;
      right: 0.3px;
      top: 3.5px;
      background-color: $color-white;
      border-radius: 10px;
      width: 100%;
      height: 2px;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>
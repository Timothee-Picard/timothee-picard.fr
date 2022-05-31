<template>
  <div class="experience">
    <div class="date">
          <span>
            <time datetime="2010">2010</time>
            -
            <time datetime="2012">2012</time>
          </span>
    </div>
    <div class="dropdown">
      <div class="ico" :class="{ open : state }" @click="toggle()">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="thread"></div>
    </div>
    <div class="experience-content">
      <h4>MASTERS DEGREE - UNIVERSITY NAME</h4>
      <p :class="{ open : state }">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentExperience",
  data() {
    return {
      state: this.default
    }
  },
  props: ['default'],
  methods: {
    toggle() {
      (this.state) ? this.state = false : this.state = true
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/var";
.thread {
  width: 0;
  height: 100%;
  border-left: 4px dashed $color-white;
  margin: auto;
}
.experience {
  display: flex;
  gap: 2em;
}
.date span {
  display: flex;
  background-color: $color-red;
  padding: 1em;
  border-radius: 5px;
}
.ico {
  height: 52px;
  width: 52px;
  position: relative;
  background-color: $color-white;
  border: 1px solid $color-dark-green;
  border-radius: 5px;
  .line {
    width: 25px;
    height: 4px;
    background-color: $color-dark-green;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    &:nth-of-type(1) {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
  &.open {
    .line {
      &:nth-of-type(1) {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }
  }
}
.experience-content {
  flex-grow: 1;
  text-align: left;
  padding: 1em;
  border: 1px solid $color-white;
}
.experience-content p {
  margin-top: 0.5em;
  height: 0;
  overflow: hidden;
  transition: 0.3s;
  &.open {
    height: 100px;
  }
}
</style>
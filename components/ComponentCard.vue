<template>
  <div class="card-hover">
    <div class="face face1">
      <i class="fa-regular fa-hand-pointer"></i>
      <div class="content">
        <slot name="icon">
          <i :class="classIcon ? classIcon : 'fa-solid fa-code'"></i>
        </slot>
        <h3>
          <slot name="title">Launch</slot>
        </h3>
      </div>
    </div>
    <div class="face face2">
      <div class="content">
        <p><slot>aaaaaaaaaaa</slot></p>
        <a v-if="linkTo" :href="linkTo">En savoir plus</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentCard",
  props: ['linkTo', 'classIcon']
}
</script>

<style scoped lang="scss">
@import "../assets/var";
.card-hover {
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 524px) {
  }
  .face {
    width: 320px;
    max-width: 100vw;
    height: 200px;
    transition: 0.5s;
    &.face1{
      background: $color-dark-green;
      color: rgba(247, 247, 247, 0.6);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
      transform: translateY(100px);
      .fa-hand-pointer {
        position: absolute;
        top: 1em;
        right: 1em;
        font-size: 1.4em;
        display: none;
        @media only screen and (max-width: 1023px)
        {
          display: block;
        }
      }
      .content {
        font-size: 1.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-center;
        gap: 1em;
        i {
          font-size: 2em;
        }
      }
    }
    &.face2{
      position: relative;
      background: $color-white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      box-sizing: border-box;
      z-index: -1;
      box-shadow: 0 10px 50px rgba(0, 0, 0, 0.4);
      transform: translateY(-100px);
      .content {
        text-align: left;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        p {
          width: 100%;
        }
        a {
          border: 1px solid $color-dark-green;
          padding: 0.5em;
          transition: 0.5s;
          &:hover, &:focus {
            cursor: pointer;
            background-color: $color-red;
            border-color: $color-red;
            color: $color-white;
          }
        }
      }
    }
  }
  &:hover, &:focus-within{
    .face{
      &.face1{
        background: $color-red;
        color: rgba(247, 247, 247, 1);
        transform: translateY(0);
      }
      &.face2{
        transform: translateY(0);
      }
    }
  }
}
</style>

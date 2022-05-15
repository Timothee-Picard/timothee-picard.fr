<template>
  <div class="card-hover">
    <div class="face face1">
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
        <a :href="linkTo">En savoir plus</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHover",
  props: ['linkTo', 'classIcon']
}
</script>

<style scoped lang="scss">
@import "@/assets/var";
.card-hover {
  position: relative;
  z-index: 1;
  .face {
    width: 350px;
    height: 200px;
    transition: 0.5s;
    &.face1{
      background: $color-dark-green;
      color: rgba(247, 247, 247, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
      transform: translateY(100px);
      .content {
        font-size: 1.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
      padding: 20px;
      box-sizing: border-box;
      z-index: -1;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
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
          padding: 0.5em;
          border: 1px solid $color-dark-green;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  &:hover{
    .face{
      &.face1{
        background: #7C2738;
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
<template>
  <div class="home">
    <header>
      <div class="main-header">
        <h1>Timothée Picard</h1>
        <h2>d<span class="type" style="--n:23">éveloppeur web frontend</span></h2>
        <div class="links">
          <a href="https://github.com/Timothee-Picard/" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://fr.linkedin.com/in/timoth%C3%A9e-picard" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <aside>
        <div class="imageProfile">
          <div><img src="@/assets/profile.png" alt=""></div>
        </div>
      </aside>
    </header>
    <div class="container">
      <card-hover v-bind:classIcon="'fa-solid fa-laptop-code'" v-bind:linkTo="'http://www.google.com'">
        <template #title>Développement</template>
        zkoujrezj keziuj jhziu hje dj zeidhn zeiojcdnez jdni
      </card-hover>
      <card-hover v-bind:class-icon="'fa-solid fa-fill-drip'">
        <template #title>Graphisme</template>
      </card-hover>
      <card-hover v-bind:class-icon="'fa-solid fa-list-check'">
        <template #title>Gestion de projet</template>
      </card-hover>
    </div>
  </div>
</template>

<script>
import CardHover from "@/components/CardHover";
export default {
  name: 'HomeView',
  components: {
    CardHover
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/var";

.container{
  width: 100%;
  min-height: 500px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 1023px)
  {
    flex-direction: column;
  }
  justify-content: center;
  align-items: center;
  gap: 3em;
}

.type {
  color:#0000;
  background:
      linear-gradient(-90deg, #92b8bd 5px, rgba(23, 22, 22, 0) 0) 10px 0,
      linear-gradient(#ffffff 0 0) 0 0;
  background-size: calc(var(--n)*1ch) 200%;
  -webkit-background-clip: padding-box,text;
  background-clip: padding-box, text;
  background-repeat: no-repeat;
  animation:
      b .7s infinite steps(1),
      t calc(var(--n)*.3s) steps(var(--n)) forwards;
}

@keyframes t{
  from {background-size:0 200%}
}
@keyframes b{
  50% {background-position:0 -100%,0 0}
}
header
{
  display: flex;
  flex-wrap: wrap;
  .main-header, aside
  {
    min-height: 70vh;
    width: 50%;
    padding: 10px;
    @media only screen and (max-width: 1023px)
    {
      min-height: 60vh;
      width: 100%;
    }
  }
  .main-header
  {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $color-dark-green;
    h1, h2, .links
    {
      color: $color-white;
    }
    h1
    {
      font-size: 5em;
      @media only screen and (max-width: 524px)
        {
          font-size: 3em;
        }
    }
    h2 {
      font-size: 2.5em;
      overflow: hidden;
      font-size:50px;
      padding:20px;
      &:before {
        content: "a";
        width: 100%;
        color: transparent;
      }
      @media only screen and (max-width: 524px)
        {
          font-size: 1.5em;
        }
    }
    .links
    {
      position: absolute;
      top: 1em;
      right: 1em;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      font-size: 1.8em;
      @media only screen and (max-width: 524px)
      {
        flex-direction: row;
      }
      @media only screen and (max-width: 1023px)
      {
        gap: 0.3em;
        font-size: 1.5em;
      }
      a{
        padding: 0.3em;
        background-size: 100% 200%;
        background-position: 0% 5%;
        transition: background-position 0.5s, color 0.5s;
        &:nth-of-type(1)
        {
          color: #000;
          background-image: linear-gradient($color-dark-green 50%, #000 50%);
        }
        &:nth-of-type(2)
        {
          color: #0e76a8;
          background-image: linear-gradient($color-dark-green 50%, #0e76a8 50%);
        }
        &:hover
        {
          background-position: 0% 100%;
          color: #fff;
        }
      }
    }
  }
  aside
  {
    display: flex;
    justify-content: center;
    align-items: center;
    .imageProfile
    {
      position: relative;
      padding: 1em;
      border: 1em solid $color-dark-green;
      &::before
      {
        content: '';
        position: absolute;
        top: -1em;
        left: 62%;
        height: 1em;
        width: 4em;
        background-color: $color-white;
        transition: 0.5s;
      }
      &::after
      {
        content: '';
        position: absolute;
        bottom: -1em;
        left: 15%;
        height: 1em;
        width: 4em;
        background-color: $color-white;
        transition: 0.5s;
      }
      >div
      {
        overflow: hidden;
        height: 30em;
        @media only screen and (max-width: 1439px)
        {
          height: 20em;
        }
        @media only screen and (max-width: 424px)
        {
          height: 15em;
        }
        img
        {
          height: 100%;
          transition: 0.5s;
          max-width: 100%;
          object-fit: cover;
        }
        &:hover img
        {
          transform: scale(1.1);
        }
      }
      &:hover
      {
        &:after
        {
          width: 8em;
          left: 62%;
        }
        &:before
        {
          width: 8em;
          left: 15%;
        }
      }
    }
  }
}
</style>

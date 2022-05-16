<template>
  <div class="home">
    <header>
      <div class="main-header">
        <h1>Timothée Picard</h1>
        <h2>D<span class="type" style="--n:23">éveloppeur web frontend</span></h2>
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
      <card-hover v-bind:class-icon="'fa-solid fa-fill-drip'" v-bind:linkTo="'http://www.google.com'">
        <template #title>Graphisme</template>
      </card-hover>
      <card-hover v-bind:class-icon="'fa-solid fa-list-check'" v-bind:linkTo="'http://www.google.com'">
        <template #title>Gestion de projet</template>
      </card-hover>
    </div>
  </div>
  <section class="triangle">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt velit a enim dictum, nec euismod
      erat feugiat. Duis ut enim ac augue pretium vehicula vel vel lectus. Sed placerat mauris felis, non bibendum
      nunc cursus eu. Nulla pharetra suscipit elementum. Vestibulum in nisl eu sapien feugiat fringilla. Curabitur
      suscipit vestibulum felis, in ullamcorper magna vulputate at. Etiam sit amet sem id nunc eleifend consequat.
      Curabitur eget nibh fermentum, eleifend massa ut, vehicula orci. Nunc id dapibus nisi. Donec posuere odio sit
      amet eros eleifend, sed dictum tortor ullamcorper. Maecenas at velit mollis, efficitur leo sed, egestas nisi.
      Sed aliquam eleifend est, eget posuere eros scelerisque in.

      Morbi pulvinar malesuada libero non congue. Cras sed lectus eget neque mollis consectetur non et justo. Curabitur
      sit amet turpis rutrum, blandit massa ac, hendrerit odio. In lacinia enim orci, sit amet hendrerit sapien maximus
      quis. Duis posuere dui sed orci bibendum, at condimentum sem porttitor. Proin porta iaculis blandit. Sed non orci
      sollicitudin, sagittis elit sed, fringilla erat. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus.

      Fusce quis magna tortor. Sed vitae velit vitae lorem elementum pellentesque. Sed sagittis dignissim pellentesque.
      Donec pharetra justo vel sollicitudin fringilla. Praesent porttitor ac urna ut congue. Pellentesque aliquam augue
      at faucibus finibus. Vestibulum pharetra hendrerit rhoncus. Quisque semper felis est, id luctus risus placerat id.
      Curabitur lacinia sodales neque, rutrum pulvinar sem hendrerit nec. In pretium dolor tincidunt dui mollis aliquam.
      Donec eget iaculis lacus. Praesent egestas aliquet velit, rutrum feugiat tortor lacinia eget. Nulla non
      pellentesque leo. Proin ac tortor dignissim, vehicula lorem non, elementum mi. Sed orci eros, porttitor efficitur
      velit sed, euismod dignissim ligula.
    </p>
  </section>

  <section>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt velit a enim dictum, nec euismod
      erat feugiat. Duis ut enim ac augue pretium vehicula vel vel lectus. Sed placerat mauris felis, non bibendum
      nunc cursus eu. Nulla pharetra suscipit elementum. Vestibulum in nisl eu sapien feugiat fringilla. Curabitur
      suscipit vestibulum felis, in ullamcorper magna vulputate at. Etiam sit amet sem id nunc eleifend consequat.
      Curabitur eget nibh fermentum, eleifend massa ut, vehicula orci. Nunc id dapibus nisi. Donec posuere odio sit
      amet eros eleifend, sed dictum tortor ullamcorper. Maecenas at velit mollis, efficitur leo sed, egestas nisi.
      Sed aliquam eleifend est, eget posuere eros scelerisque in.

      Morbi pulvinar malesuada libero non congue. Cras sed lectus eget neque mollis consectetur non et justo. Curabitur
      sit amet turpis rutrum, blandit massa ac, hendrerit odio. In lacinia enim orci, sit amet hendrerit sapien maximus
      quis. Duis posuere dui sed orci bibendum, at condimentum sem porttitor. Proin porta iaculis blandit. Sed non orci
      sollicitudin, sagittis elit sed, fringilla erat. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus.

      Fusce quis magna tortor. Sed vitae velit vitae lorem elementum pellentesque. Sed sagittis dignissim pellentesque.
      Donec pharetra justo vel sollicitudin fringilla. Praesent porttitor ac urna ut congue. Pellentesque aliquam augue
      at faucibus finibus. Vestibulum pharetra hendrerit rhoncus. Quisque semper felis est, id luctus risus placerat id.
      Curabitur lacinia sodales neque, rutrum pulvinar sem hendrerit nec. In pretium dolor tincidunt dui mollis aliquam.
      Donec eget iaculis lacus. Praesent egestas aliquet velit, rutrum feugiat tortor lacinia eget. Nulla non
      pellentesque leo. Proin ac tortor dignissim, vehicula lorem non, elementum mi. Sed orci eros, porttitor efficitur
      velit sed, euismod dignissim ligula.
    </p>
  </section>
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
.triangle {
  position: relative;
  background: $color-dark-green;
  margin-bottom: 50px;
  padding: 7em 0 5em;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 70px 0 70px;
    border-color: $color-white transparent transparent transparent;
    left: 50%;
    transform: translateX(-50%);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 70px 0 70px;
    border-color: $color-dark-green transparent transparent transparent;
    left: 50%;
    transform: translateX(-50%) translateY(100%);
  }
}

section {
  p {
    max-width: 900px;
    margin: auto;
  }
}
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
      t calc(var(--n)*.2s) steps(var(--n)) forwards;
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
      text-transform: capitalize;
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
      text-transform: capitalize;
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
      &::before, &::after
      {
        content: '';
        position: absolute;
        height: 1em;
        width: 4em;
        background-color: $color-white;
        transition: 0.5s;
        @media only screen and (max-width: 424px)
        {
          width: 3em;
        }
      }
      &::before
      {
        top: -1em;
        left: 62%;
      }
      &::after
      {
        bottom: -1em;
        left: 15%;
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
        &:after,&:before
        {
          width: 8em;
          @media only screen and (max-width: 424px)
          {
            width: 6em;
          }
        }
        &:after
        {
          left: 62%;
          @media only screen and (max-width: 1439px)
          {
            left: 48%;
          }
        }
        &:before
        {
          left: 15%;
        }
      }
    }
  }
}
</style>

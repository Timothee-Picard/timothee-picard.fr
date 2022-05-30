<template>
  <section class="container">
    <card-hover v-bind:classIcon="'fa-solid fa-laptop-code'"> <!-- v-bind:linkTo="'http://www.google.com'" -->
      <template #title>Développement</template>
      <bold>Frontend:</bold><br>
      Vuejs, Angular, Reactjs <br>
      <bold>Backend:</bold><br>
      Php, Ruby, Nodejs<br>
      <bold>Framework:</bold><br>
      Symfony, Wordpress, Rails, Strapi
    </card-hover>
    <card-hover v-bind:class-icon="'fa-solid fa-fill-drip'">
      <template #title>Graphisme</template>
      <bold>Image:</bold><br>
      Photoshop, Figma, Lightroom <br>
      <bold>Vidéo:</bold><br>
      Première Pro, Animate<br>
    </card-hover>
    <card-hover v-bind:class-icon="'fa-solid fa-list-check'">
      <template #title>Cahier des charges</template>
      <bold>Gestion de projet:</bold><br>
      Trello, Gant, Clickup<br>
      <bold>Design:</bold><br>
      Webdesign, UI / UX<br>
      <bold>Test:</bold><br>
      Fonctionnel, Performances<br>
    </card-hover>
  </section>
</template>

<script>
import CardHover from "@/components/CardHover";
export default {
  name: "SectionSkills",
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
bold {
  font-weight: bold
}
</style>

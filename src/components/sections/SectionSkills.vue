<template>
  <section class="container">
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
</style>
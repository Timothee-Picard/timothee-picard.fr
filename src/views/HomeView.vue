<template>
  <component-navigation></component-navigation>
  <section-header class="section" id="accueil"></section-header>
  <section-skills class="section" id="competences"></section-skills>
  <section-experience class="section" id="experiences"></section-experience>
  <section-education class="section" id="diplomes"></section-education>
  <section-contact class="section" id="contact"></section-contact>
</template>

<script>
import SectionHeader from "@/components/sections/SectionHeader"
import SectionSkills from "@/components/sections/SectionSkills"
import SectionExperience from "@/components/sections/SectionExperience";
import SectionEducation from "@/components/sections/SectionEducation";
import ComponentNavigation from "@/components/ComponentNavigation";
import SectionContact from "@/components/sections/SectionContact";

export default {
  name: 'HomeView',
  components: {
    SectionHeader,
    SectionSkills,
    SectionExperience,
    SectionEducation,
    ComponentNavigation,
    SectionContact,
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/var";
.section:not(#section1) {
  scroll-margin-top: -1px;
}
</style>

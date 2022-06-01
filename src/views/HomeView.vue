<template>
  <component-navigation></component-navigation>
  <section-header class="section" id="section1"></section-header>
  <section-skills class="section" id="section2"></section-skills>
  <section-experience class="section" id="section3"></section-experience>
  <section-education class="section" id="section4"></section-education>
</template>

<script>
import SectionHeader from "@/components/sections/SectionHeader"
import SectionSkills from "@/components/sections/SectionSkills"
import SectionExperience from "@/components/sections/SectionExperience";
import SectionEducation from "@/components/sections/SectionEducation";
import ComponentNavigation from "@/components/ComponentNavigation";
export default {
  name: 'HomeView',
  components: {
    SectionHeader,
    SectionSkills,
    SectionExperience,
    SectionEducation,
    ComponentNavigation,
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/var";
.section:not(#section1) {
  scroll-margin-top: -1px;
}
</style>

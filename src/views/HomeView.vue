<template>
  <section-header></section-header>
  <section-skills></section-skills>
  <section-experience></section-experience>
  <section-education></section-education>
</template>

<script>
import SectionHeader from "@/components/sections/SectionHeader"
import SectionSkills from "@/components/sections/SectionSkills"
import SectionExperience from "@/components/sections/SectionExperience";
import SectionEducation from "@/components/sections/SectionEducation";
export default {
  name: 'HomeView',
  components: {
    SectionHeader,
    SectionSkills,
    SectionExperience,
    SectionEducation,
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/var";
.triangle {
  position: relative;
  background: $color-dark-green;
  color: $color-white;
  margin-bottom: 50px;
  padding: 7em 0 5em;
  &::before {
    content: '';
    position: absolute;
    top: -3px;
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
    bottom: 3px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 70px 0 70px;
    border-color: $color-dark-green transparent transparent transparent;
    left: 50%;
    transform: translateX(-50%) translateY(100%);
  }
}
</style>

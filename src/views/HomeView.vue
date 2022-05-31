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
</style>

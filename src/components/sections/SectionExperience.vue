<template>
  <section>
    <div class="content">
      <h3>Expérience profesionelle</h3>
      <component-experience default="true"></component-experience>
      <component-experience></component-experience>
      <component-experience></component-experience>
      <component-experience></component-experience>
    </div>
  </section>
</template>

<script>
import ComponentExperience from "@/components/ComponentExperience"
export default {
  name: "SectionExperience",
  components: {
    ComponentExperience
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/var";
section {
  position: relative;
  background: $color-dark-green;
  color: $color-white;
  margin-bottom: 50px;
  padding: 5em 0;
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

section .content {
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 2em 0;
  overflow-y: hidden;
}
</style>
<template>
  <section>
    <div class="main-contact">
      <div class="content">
        <p><i class="fa-solid fa-envelope"></i><span>timothee-picard@outlook.fr</span></p>
        <p><i class="fa-solid fa-phone"></i><span>+33 6 89 65 50 88</span></p>
      </div>
    </div>
    <aside>
      BBB
    </aside>
  </section>
</template>

<script>
export default {
  name: "SectionContact"
}
</script>

<style scoped lang="scss">
@import "@/assets/var";
section {
  display: flex;
  flex-wrap: wrap;
}
.main-contact, aside {
  padding: 5em 0;
  width: 50%;
  min-height: 50vh;
  @media only screen and (max-width: 1023px)
  {
    min-height: 40vh;
    width: 100%;
  }
}
.main-contact {
  background-color: $color-dark-green;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2em;
    width: fit-content;
    margin: auto;
    font-size: 1.5em;
    color: $color-white;
    @media only screen and (max-width: 767px)
    {
      font-size: 1em;
      i {
        margin-right: 0.5em;
      }
    }
    @media only screen and (max-width: 330px)
    {
      font-size: 0.8em;
    }
  }
}
i {
  margin-right: 1.5em;
}
</style>
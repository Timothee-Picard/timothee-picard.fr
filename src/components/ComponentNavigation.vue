<template>
  <nav>
    <ul>
      <li id="menuSection1" class="active">
        <a href="#section1">
          <span>Accueil</span>
          <div class="circle"></div>
        </a>
      </li>
      <li id="menuSection2">
        <a href="#section2">
          <span>Compétences</span>
          <div class="circle"></div></a>
      </li>
      <li id="menuSection3">
        <a href="#section3">
          <span>Expériences</span>
          <div class="circle"></div>
        </a>
      </li>
      <li id="menuSection4">
        <a href="#section4">
          <span>Diplômes</span>
          <div class="circle"></div>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "ComponentNavigation",
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      const sections = document.querySelectorAll('.section')
      const nav = document.querySelector('nav')
      const  li = nav.querySelectorAll('li')
      sections.forEach((element, i) => {
        if(element.getBoundingClientRect().bottom > 0 & element.getBoundingClientRect().y <= 0) {
          li[i].classList.add("active")
        } else {
          li[i].classList.remove("active")
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/var";
nav {
  position: fixed;
  top: 50%;
  right: 0.5em;
  transform: translateY(-50%);
  z-index: 999;
  @media only screen and (max-width: 1023px)
  {
    right: 0.3em;
  }
}
ul {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 2em;
}
li {
  display: flex;
  justify-content: right;
  a {
    display: flex;
    justify-content: right;
    gap: 1em;
    width: min-content;
  }
  @media only screen and (max-width: 1023px)
  {
    span {
      display: none;
    }
  }
  &.active .circle {
    background-color: $color-red;
  }
  &:hover {
    color: $color-red;
  }
}
.circle {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: $color-dark-green;
  border: 2px solid $color-white;
}
</style>
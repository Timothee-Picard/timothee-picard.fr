<template>
  <nav>
    <ul>
      <li>
        <a href="#accueil">
          <span>Accueil</span>
          <div class="circle"></div>
        </a>
      </li>
      <li>
        <a href="#competences">
          <span>Compétences</span>
          <div class="circle"></div></a>
      </li>
      <li>
        <a href="#experiences">
          <span>Expériences</span>
          <div class="circle"></div>
        </a>
      </li>
      <li>
        <a href="#diplomes">
          <span>Diplômes</span>
          <div class="circle"></div>
        </a>
      </li>
      <li>
        <a href="#contact">
          <span>Contact</span>
          <div class="circle"></div>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "ComponentNavigation",
  data() {
    return {
      savedIndex: null,
    }
  },
  created () {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  mounted() {
    this.handleScroll()
  },
  beforeUnmount () {
    if (process.client){
      console.log(window.innerWidth, window.innerHeight);
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll () {
      const sections = [...document.querySelectorAll('.section')]
      const data = sections.map(section => section.offsetTop)
      const trigger = window.scrollY + (window.innerHeight / 3)
      for (const i of data) {
        const index = data.indexOf(i)
        if (trigger >= data[index] && trigger < data[index+1]){
          if (index !== this.savedIndex) {
            this.savedIndex = index
            this.addClassAndClear(index)
          }
          break
        }
        if (index === data.length -1 && trigger >= data[index]) {
          if (index !== this.savedIndex) {
            this.savedIndex = index
            this.addClassAndClear(index)
          }
        }
      }
    },
    addClassAndClear(index) {
      const navLinks = [...document.querySelectorAll("nav li")]
      const elToClean = navLinks.find(navLink => navLink.className.includes("active"))
      if (elToClean) elToClean.classList.remove("active")
      navLinks[index].classList.add("active")
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/var";
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
  span {
    @media only screen and (max-width: 1439px)
    {
      color: transparent;
      background-clip: text;
      background-color: $color-dark-green;
      width: 0;
      transition: width 0.3s;
    }
    @media only screen and (max-width: 1023px)
    {
      display: none;
    }
  }
  &.active .circle {
    background-color: $color-red;
  }
  &:hover {
    color: $color-red;
    span {
      width: 120px;
      @media only screen and (max-width: 1439px)
      {
        background-color: $color-red;
      }
    }
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

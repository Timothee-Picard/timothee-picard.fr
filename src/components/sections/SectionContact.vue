<template>
  <section>
    <div class="main-contact">
      <div class="content">
        <p><i class="fa-solid fa-envelope"></i><span>timothee-picard@outlook.fr</span></p>
        <p><i class="fa-solid fa-phone"></i><span>+33 6 89 65 50 88</span></p>
      </div>
    </div>
    <aside>
      <form ref="form" @submit.prevent="sendEmail">
        <div class="form-group">
          <input type="text" name="name" id="name" placeholder=" ">
          <label for="name">Nom</label>
        </div>
        <div class="form-group">
          <input type="text" name="firstname" id="firstname" placeholder=" ">
          <label for="firstname">Prénom</label>
        </div>
        <div class="form-group">
          <input type="email" name="email" id="email" placeholder=" " required>
          <label for="email">Email</label>
        </div>
        <div class="form-group">
          <textarea id="message" name="message" cols="30" rows="10" placeholder=" " required></textarea>
         <label for="message">Message</label>
        </div>
        <div class="form-group">
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </aside>
  </section>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import emailjs from '@emailjs/browser';

export default {
  name: "SectionContact",
  methods: {
    sendEmail() {
      emailjs.sendForm(process.env.VUE_APP_SERVICE_ID, process.env.VUE_APP_TEMPLATE_ID, this.$refs.form, process.env.VUE_APP_PUBLIC_KEY)
          .then((result) => {
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/var";
form {
  width: 50%;
  text-align: left;
  @media only screen and (max-width: 767px)
  {
    width: 80%;
  }
}
.form-group {
  position: relative;
  padding-top: 40px;
  button[type=submit]{
    background-color: transparent;
    border: 1px solid $color-dark-green;
    font-family: $font-main;
    font-size: 1em;
    color: $color-dark-green;
    padding: 1em 4em;
    cursor: pointer;
    &:hover {
      background-color: $color-red;
      border: 1px solid $color-red;
      color: $color-white;
    }
  }
  label {
    position: absolute;
    top: 50px;
    left: 0.8em;
    transition: 0.3s;
  }
  input, textarea {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid $color-dark-green;
    width: 100%;
    padding: 1em;
    resize: none;
    &:focus, &:not(:placeholder-shown){
      &+label {
        top: 20px;
        left: 0;
      }
    }
  }
  input {
    height: 3em;
  }
  textarea {
    /* width */
    &::-webkit-scrollbar {
      width: 14px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: $color-white;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: $color-dark-green;
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 9999px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #305f7091;
    }
  }
}
section {
  display: flex;
  flex-wrap: wrap;
}
.main-contact, aside {
  padding: 5em 0;
  width: 50%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1023px)
  {
    min-height: inherit;
    padding: 10em 0;
    width: 100%;
  }
}
.main-contact {
  background-color: $color-dark-green;
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
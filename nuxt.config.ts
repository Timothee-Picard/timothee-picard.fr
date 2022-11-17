// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['nuxt-icon'],
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'timothee-picard.fr',
            meta: [
                { name: 'description', content: 'Portfolio de timothée picard développeur web frontend' }
            ],
        }
    }
});

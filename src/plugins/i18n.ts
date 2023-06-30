import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import de from '../locales/de.json';
import nl from '../locales/nl.json';
import fr from '../locales/fr.json';

 export default defineNuxtPlugin(({ vueApp }) => {
   const i18n = createI18n({
     legacy: false,
     globalInjection: true,
     locale: 'en',
     messages: {
       en,
       nl,
       de,
       fr
     }
   })
  vueApp.use(i18n)
})

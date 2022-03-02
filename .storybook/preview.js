import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import '../resources/sass/app.scss'

Vue.use(VueCompositionAPI);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

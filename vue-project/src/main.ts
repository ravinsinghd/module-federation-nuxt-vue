//theme
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import NavBar from './components/NavBar.vue';
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue);
app.component('Button', Button);
app.component('NavBar', NavBar);
app.mount('#app');

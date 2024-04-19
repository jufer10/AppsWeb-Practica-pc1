import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from "primevue/config";

// Application Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';

// Icons
import 'primeicons/primeicons.css';

// PrimeFlex Support
import 'primeflex/primeflex.css';

// PrimeVue Components
import Card         from "primevue/card";
import Button       from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Sidebar      from "primevue/sidebar";
import Avatar       from "primevue/avatar";
import Menu         from "primevue/menu";
import Menubar      from "primevue/menubar";
import Toolbar      from "primevue/toolbar";
import i18n from "./i18n.js";

// Application instance
const app = createApp(App);

// PrimeVue Setup
app.use(PrimeVue, { ripple: true })
    .component('pv-menubar', Menubar)

// i18n Setup
app.use(i18n);

// Application Component Mounting
app.mount('#app');

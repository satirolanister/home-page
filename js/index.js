import head from './components/assets/head.js';
import footer  from './components/assets/footer.js'
import route  from './route/route.js';

Vue.component('cabecera', head);
Vue.component('pie', footer);

new Vue({
	el: "#app",
	router: route
})


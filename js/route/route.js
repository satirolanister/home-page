import about  from '../components/about.js';
import content  from '../components/content.js';
import home from '../components/home.js'

const routes = [
    {
        path:"/",
        component: home 
    },
    {
        path:"/about",
        component : about
    },
    {
        path:"/content",
        component: content
    }
]

const router = new VueRouter({
    routes: routes,
    base: '/'
});

export default router;
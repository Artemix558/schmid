import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '@/components/HomeComponent';
import NavBar from '@/components/NavbarComponent';
import Login from '@/components/auth/LoginComponent';
import Register from '@/components/auth/RegisterComponent';
import form from '@/components/demenagements/FormComponent';

const routes = [
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Register',
    component: Register
  },
  {
    path: '/',
    component: NavBar,
    redirect: { name: 'Acceuil' },
    children:[
      {
        name:'Acceuil',
        path:'/Acceuil',
        components:{
          default:NavBar,
          two:Acceuil
        }
      },
      {
        name:'form',
        path:'/Add-Moving',
        components:{
          default:NavBar,
          two:form
        }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

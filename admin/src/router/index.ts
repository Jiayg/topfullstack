import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import CourseEdit from '../views/courses/Edit.vue';
import CourseList from '../views/courses/List.vue';
import CourseCrud from '../views/courses/Crud.vue';
import ResourceCrud from '../views/ResourceCrud.vue';
import Home from '../views/Home.vue';
import Main from '../views/Main.vue';

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      { name: 'home', path: '/', component: Home },
      { name: 'courseslist', path: '/:resource/list', component: ResourceCrud, props: true },
      // { name: 'coursesedit', path: '/courses/edit/:id', component: CourseEdit, props: true },
      // { name: 'coursescreate', path: '/courses/edit', component: CourseEdit }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router

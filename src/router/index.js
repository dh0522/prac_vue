import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Users from '@/pages/Users.vue';
import Admins from '@/pages/Admins.vue';
import Login from '@/pages/Login.vue';
import About from '@/pages/About.vue';
import PostList from '@/pages/Post/PostList.vue';
import AddPost from '@/pages/Post/AddPost.vue';
import EditPost from '@/pages/Post/EditPost.vue';
import NotFound from '@/pages/NotFound.vue';
import MessageCreate from '@/pages/Message/MessageCreate.vue';
import MessageDetails from '@/pages/Message/MessageDetails.vue';
import MessageList from '@/pages/Message/MessageList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/users', component: Users },
        { path: '/admins', component: Admins },
        { path: '/about', component: About },
        { path: '/posts', component: PostList },
        { path: '/posts/add', component: AddPost },
        { path: '/posts/:id', component: EditPost },
        { path: '/messages/list', component: MessageList},
        { path: '/messages/write', component: MessageCreate },
        { path: '/messages/:messageNo', component: MessageDetails },
        { path: '/:paths(.*)*', component: NotFound },
    ]
})

export default router;
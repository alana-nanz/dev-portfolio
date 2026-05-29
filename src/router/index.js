import { createRouter, createMemoryHistory } from 'vue-router';
import About from "@/views/AboutView.vue";
import Work from "@/views/WorkView.vue";
import Skills from "@/views/SkillsView.vue";

const router = createRouter({
	history: createMemoryHistory(),
	routes: [
		{
			path: '/',
			name: 'about',
			component: About,
		},
		{
			path: '/work',
			name: 'work',
			component: Work,
		},
		{
			path: '/skills',
			name: 'skills',
			component: Skills,
		},
	],
});

export default router;

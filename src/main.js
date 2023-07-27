import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import VueSvgInlinePlugin from 'vue-svg-inline-plugin';
import App from '@/App.vue';
import router from './router';

const pinia = createPinia();
const app = createApp(App);

pinia.use(({ store }) => {
	// eslint-disable-next-line
	store.$router = markRaw(router);
});

app.use(VueSvgInlinePlugin, {
	directive: {
		name: 'v-svg-inline',
		spriteModifierName: 'sprite',
	},
});

app.use(router);
app.use(pinia);
app.mount('#app');

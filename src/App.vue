<template>
	<div class="wrapper">
		<MckLogoSVG class="logo" width="125" height="125" />
		<RouterView v-slot="{ Component }" v-if="loaded">
			<transition :name="transitionName" :mode="transitionMode"
				@before-enter="inTransition = true"
				@after-enter="inTransition = false">
				<component :is="Component" />
			</transition>
		</RouterView>
		<h3 v-else>No config data could be loaded. Please make sure the WordPress site
			is running, and the API urls are set correctly in the .env file.</h3>
	</div>
</template>

<script>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouterTransition } from '@/composables/router-transition';
import { useConfigStore } from '@/stores/config.store';
import MckLogoSVG from "@/assets/logo.svg";

export default {
	name: "App",
	components: {
		MckLogoSVG,
	},
	setup() {
		const inTransition = ref(false);
		const { name: transitionName, mode: transitionMode } = useRouterTransition();

		const config = useConfigStore();
		const { loaded } = storeToRefs(config);
		config.load();

		return { loaded, inTransition, transitionName, transitionMode };
	},
};
</script>

<style lang="scss">
@import '../public/bootstrap-reboot.min.css';
@import 'assets/styles/utilities/';
@import 'assets/base.css';

html, body {
	height: 100%;
	margin: 0;
	overflow: hidden;
	font-family: $body-font;
}

.wrapper {
	height: 100%;
	width: 100%;
}

#app {
	height: 100%;
	margin: 0 auto;
}
</style>

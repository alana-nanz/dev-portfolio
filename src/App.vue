<template>
	<div class="wrapper">
		<HeaderNav class="header-nav" />
		<RouterView v-slot="{ Component }" class="view">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</RouterView>
	</div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useConfigStore } from '@/stores/config.store';
import HeaderNav from '@/components/HeaderNav.vue';

export default {
	name: "App",
	components: {
		HeaderNav,
	},
	setup() {
		const config = useConfigStore();
		const { loaded } = storeToRefs(config);
		config.load();

		return { loaded };
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
	color: $dark-color;
}

#app {
	height: 100%;
	margin: 0 auto;
	background-color: $light-color;
}

.wrapper {
	max-height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	gap: $spacing-md;
	padding: $spacing-lg $spacing-xxl;
}

.header-nav,
.view {
	width: 50%;
	max-width: 600px;
}
</style>

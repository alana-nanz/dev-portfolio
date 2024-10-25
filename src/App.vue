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
	background-color: $light-color;
	color: $dark-color;
	font-family: $body-font;
	margin: 0;
}

#app {
	margin: 0 auto;
}

.wrapper {
	width: 100%;
	padding: $spacing-sm;

	@include tablet {
		max-height: 100%;
		display: flex;
		justify-content: center;
		gap: $spacing-md;
		padding: $spacing-lg;
	}

	@include desktop { padding: $spacing-xl; }
}

.header-nav,
.view {
	@include tablet {
		width: 50%;
		max-width: 600px;
	}
}
</style>

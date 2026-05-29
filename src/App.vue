<template>
	<div class="wrapper">
		<HeaderNav class="header-nav" />
		<div class="view">
			<div class="section-heading">
				<p class="number">01</p>
				<h3 class="title">About Me</h3>
			</div>
			<RouterView v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" />
				</transition>
			</RouterView>
		</div>
		<FooterContact class="footer" />
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
	min-height: 100vh;
	width: 100%;
	margin: 0 auto;
	position: relative;

	@include tablet-landscape {
		display: flex;
		justify-content: center;
	}
}

.header-nav {
	padding: $spacing-sm;

	@include tablet-landscape {
		border-right: 1px solid $neutral-medium-color;
		padding: $spacing-lg;
		width: 25vw;
		height: 100vh;
		overflow: hidden;
		position: fixed;
		left: 0;
		top:	0;
	}
}

.view {
	padding: $spacing-sm;

	@include tablet-landscape {
		padding: $spacing-lg;
		width: 75vw;
		margin-left: 25vw;
	}
}

.section-heading {
	display: flex;
	align-items: flex-end;
	margin-bottom: $spacing-md;

	.number {
		color: $neutral-light-color;
		font-size: var(--fs-xxl);
		font-weight: 700;
		line-height: $line-height-snug;
		margin-bottom: 0;
	}

	h3.title {
		font-family: $heading-font;
		font-size: var(--fs-500);
		font-weight: 700;
		letter-spacing: $letter-spacing-plus;
		line-height: $line-height-snug;
		margin-bottom: $spacing-sm;
	}
}

.footer {
	margin: $spacing-lg 0 0;

	@include tablet-landscape {
		margin: 0;
		position: fixed;
		bottom: $spacing-lg;
		left: $spacing-lg;
	}
}
</style>

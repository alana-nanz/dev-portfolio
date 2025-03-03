<template>
	<div class="wrapper">
		<HeaderNav class="header-nav" />
		<RouterView v-slot="{ Component }" class="view">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</RouterView>
		<FooterContact class="footer" />
	</div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import FooterContact from "@/components/FooterContact.vue";

export default {
	name: "App",
	components: {
		HeaderNav,
		FooterContact,
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
	height: 100vh;
	width: 100%;
	max-width: 1400px;
	padding: $spacing-sm;
	margin: 0 auto;
	position: relative;

	@include tablet {
		max-height: 1000px;
		display: flex;
		justify-content: center;
		gap: $spacing-md;
		padding: $spacing-lg;
	}

	@include desktop {
		max-height: 800px;
		padding: $spacing-xl;
	}
}

.header-nav,
.view {
	@include tablet { width: 50%;}
}

.footer {
	margin: $spacing-lg 0 0;

	@include tablet {
		margin: 0;
		position: absolute;
		bottom: $spacing-lg;
		left: $spacing-lg;
	}

	@include desktop {
		bottom: $spacing-xl;
		left: $spacing-xl;
	}
}
</style>

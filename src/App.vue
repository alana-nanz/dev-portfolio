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
	width: 100%;
	padding: $spacing-sm;
	margin: 0 auto;
	position: relative;

	@include tablet-landscape {
		display: flex;
		justify-content: center;
		gap: $spacing-md;
		padding: $spacing-lg;
	}
}

.header-nav,
.view {
	@include tablet-landscape { width: 50%; }
}

.footer {
	margin: $spacing-lg 0 0;

	@include tablet-landscape {
		margin: 0;
		position: fixed;
		top: calc(100vh - $spacing-lg);
		left: $spacing-lg;
		transform: translateY(-100%);
	}
}
</style>

<template>
	<transition name="slide-up">
		<div class="banner" v-if="show">
			<div class="message wysiwyg-content">
				<p class="content"><strong>This browser is out of date and doesn't
					have support for some web features required to run this game.</strong> <br />
				This game is best played in a modern browser like <a href="https://www.google.com/chrome/">chrome</a>.</p>
			</div>
			<Button class="close-btn" @click="close()">
				<img class="close-x" svg-inline src="@/assets/ui/close-x.svg" />
			</Button>
		</div>
	</transition>
</template>

<script>
import { IS_IE11 } from '@/constants';

export default {
	name: 'BrowserMessage',
	data: () => ({ show: IS_IE11 }),
	methods: {
		close() {
			this.show = false;
		},
	},
};
</script>

<style lang="scss" scoped>
	.banner {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: $z-top + $z-top;
	}

	.message {
		display: block;
		width: 100vw;
		padding: 1em 2em;

		font-family: $body-font;
		font-size: $font-size-sm;
		text-align: center;
		color: $brand-highlight-color;

		background: $brand-text-color;

		transition: all $ui-transition-duration;

		/deep/ a {
			color: $brand-highlight-color;
			text-decoration: underline;
		}
	}

	.close-btn {
		background: none;
		border: none;
		color: white;
		height: 25px;
		width: 25px;
		margin: 20px;
		padding: 0;
		position: absolute;
		top: 0;
		left: 0;

		@include mobile {
			display: none;
		}
	}

	.close-x {
		height: 100%;
		width: 100%;
		stroke: white;
		stroke-width: 0.5px;
	}
</style>

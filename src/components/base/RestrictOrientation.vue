<template>
	<div class="setup-screen message wysiwyg-content">
		<p>Please rotate your device to continue playing.</p>
	</div>
</template>

<script>

export default {
	name: 'RestrictOrientation',
};
</script>

<style lang="scss" scoped>
	.message {
		display: flex;

		width: 100vw;
		height: 100vh;
		padding: 20%;
		justify-content: center;
		align-items: center;
		overflow-x: hidden;

		font-family: $heading-font;
		font-size: $heading-size-lg;
		text-align: center;
		color: $off-white;

		position: fixed;
		top: 100%;
		left: 0;
		right: 0;
		z-index: $z-top + $z-top;

		transition: all $ui-transition-duration;

		@include currency-pattern();

		@include mobile-landscape() {
			top: 0;
			padding-left: unquote('max(2.5, env(safe-area-inset-left))');
			padding-right: unquote('max(2.5, env(safe-area-inset-right))');
		}

		@include tablet-portrait() {
			top: 0;
			padding-left: unquote('max(2.5, env(safe-area-inset-left))');
			padding-right: unquote('max(2.5, env(safe-area-inset-right))');
		}
	}
</style>

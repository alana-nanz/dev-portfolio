<template>
	<div :class="['btn', { disabled }]" @click="press" @keyup.enter="press" role="button" tabindex="0">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'BaseButton',
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		press() {
			if (!this.disabled) {
				this.$emit("press");
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.btn {
	display: block;
	padding: 1em 2.2em;
	margin: 20px 0;

	font-family: $heading-font;
	font-size: $font-size-lg;
	font-weight: $font-weight-bold;
	letter-spacing: $letter-spacing-plus;
	text-transform: uppercase;
	text-align: center;
	line-height: 1;

	border-width: $border-width;
	border-style: solid;
	transition: all $ui-transition-duration;
	user-select: none;

	&:focus,
	&:active,
	&:hover {
		cursor: pointer;
		outline: none;
		color: $primary-color;
	}

	&.disabled {
		color: lighten($primary-color-dark, 30%);
		background: $primary-color-dark;
		cursor: not-allowed;

		&:hover { color: lighten($primary-color-dark, 30%); }
	}
}
</style>

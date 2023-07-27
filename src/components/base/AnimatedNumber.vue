<template>
	<span class="animated-number">{{ animatedNumber }}</span>
</template>

<script>
import gsap from 'gsap';

export default {
	props: {
		number: {
			type: Number,
			required: true,
		},
		precision: {
			type: Number,
			default: 0,
		},
		duration: {
			type: Number,
			default: 0.5,
		},
		options: {
			type: Object,
			default: () => ({}),
		},
	},
	data() {
		return {
			tweenedNumber: 0,
		};
	},
	computed: {
		animatedNumber() {
			const numbers = this.tweenedNumber.toFixed(this.precision).split('.');
			numbers[0] = numbers[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
			return numbers.join('.');
		},
	},
	watch: {
		number(newValue) {
			gsap.to(this.$data, this.duration, {
				tweenedNumber: newValue,
				onComplete: () => {
					this.$emit('tweenComplete');
				},
			});
		},
	},
	created() {
		this.tweenedNumber = this.number;
	},
};
</script>

<style lang="scss" scoped>
</style>

<template>
	<span class="animated-letter">{{ animatedLetter }}</span>
</template>

<script>
import gsap from 'gsap';

export default {
	props: {
		letter: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			tweenedLetterCode: 0,
		};
	},
	computed: {
		animatedLetter() {
			return String.fromCharCode(this.tweenedLetterCode);
		},
	},
	watch: {
		letter(newLetter) {
			gsap.to(this.$data, 0.5, {
				tweenedLetterCode: newLetter.charCodeAt(),
				onComplete: () => {
					this.$emit('tweenComplete');
				},
			});
		},
	},
	created() {
		this.tweenedLetterCode = this.letter.charCodeAt();
	},
};
</script>

<style lang="scss" scoped>
</style>

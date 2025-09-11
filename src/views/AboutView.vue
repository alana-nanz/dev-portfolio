<template>
	<div class="about view">
		<p>Currently, I'm a <strong>Developer</strong> at <a href="https://cylndr.com/" target="_blank">Cylndr Studios</a>, the production team behind advertising agency, <a href="https://mckinney.com/" target="_blank">McKinney</a>. I started as a Junior Developer in 2022 and was promoted after only 18 months. At Cylndr, I've developed enterprise websites, landing pages, interactive games, HTML emails, animated banners, and web applications for internal initiatives and clients, including:</p>
		<div class="logos">
			<img class="logo" v-for="logo in logos" :key="logo" :src="logo.img" :alt="logo.name">
		</div>
		<p>I bring a blend of technical expertise and creative problem-solving to my work after transitioning from a career in nonprofit arts management. I've always been creative, with a strong eye for detail. After working in platforms like WordPress and Drupal, I wanted to see what was under the hood and learn how to code. After creating my first website from scratch, I was hooked!</p>
		<p>When I'm not coding, you can find me doing puzzles, cooking new recipes, walking the local trails with my bernedoodle, or going on adventures with my two daughters and wonderful husband.</p>
	</div>
</template>

<script>
import Indivior from "@/assets/images/logos/indivior.png";
import LittleCaesars from "@/assets/images/logos/little_caesars.png";
import Popeyes from "@/assets/images/logos/popeyes.png";
import Sherwin from "@/assets/images/logos/sherwin.png";

export default {
	name: "AboutView",
	data() {
		return {
			logos: [
				{ name: "Little Caesars", img: LittleCaesars },
				{ name: "Sherwin Williams", img: Sherwin },
				{ name: "Popeyes", img: Popeyes },
				{ name: "Indivior", img: Indivior },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.logos {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: $spacing-md;
	margin: $spacing-md auto;
	max-width: 600px;

	@include tablet { gap: $spacing-sm; }
}

.logo {
	width: calc(50% - $spacing-md);

	@include tablet { width: 120px; }
}
</style>

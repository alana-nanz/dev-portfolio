<template>
	<div class="about view">
		<p>Currently, I'm a Developer at <a href="https://cylndr.com/" target="_blank"><b>Cylndr Studios</b></a>, where I've developed enterprise websites, landing pages, interactive games, HTML emails, animated banners, and web applications for internal initiatives and clients, including:</p>
		<div class="logos">
			<img class="logo" v-for="logo in logos" :key="logo" :src="logo.img" :alt="logo.name">
		</div>
		<p>In addition to my full-time role, I take on freelance projects, delivering thoughtful, reliable digital experiences for clients such as:</p>
		<div class="logos freelance-logos">
			<img class="logo" src="@/assets/images/logos/publix.png" :alt="Publix">
		</div>
		<p>Beyond coding, I collaborate with designers, producers, and strategists to bring creative concepts to life and ensure technology enhances the overall brand and user experience. My work often involves developing solutions that streamline workflows and improve efficiency.</p>
		<p>I actively integrate AI into my development workflow, using it to speed up problem-solving, explore technical approaches, and improve code quality. It’s become a core part of how I work more efficiently and iterate faster.</p>
		<p>I bring a blend of technical expertise and creative problem-solving to my work, shaped by my training as a classical pianist and prior career in arts management.</p>
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
	margin: $spacing-md 0;
	max-width: 600px;

	@include tablet {
		gap: $spacing-sm;
		margin: calc($spacing-sm + $spacing-xxs) $spacing-sm;
	}
}

.freelance-logos { justify-content: center; }

.logo {
	width: calc(50% - $spacing-md);

	@include tablet { width: 120px; }
}
</style>

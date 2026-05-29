<template>
	<div class="about">
		<p>Currently, I'm a Developer at <a href="https://cylndr.com/" target="_blank" rel="noopener noreferrer"><b>Cylndr Studios</b></a>, where I've developed enterprise websites, landing pages, interactive games, TikTok Effects, HTML emails, animated banners, and web applications for internal initiatives and clients, including:</p>
		<div class="logos">
			<img class="logo" v-for="logo in logos" :key="logo" :src="logo.img" :alt="logo.name">
		</div>
		<p>In addition to my full-time role, I take on freelance projects, delivering thoughtful, reliable digital experiences for clients such as:</p>
		<div class="logos freelance-logos">
			<img class="logo" src="@/assets/images/logos/publix.png" :alt="Publix">
			<Tropicana class="logo" :alt="Tropicana" />
		</div>
		<hr />
		<p>Beyond coding, I collaborate with designers, producers, and strategists to bring creative concepts to life and ensure technology enhances the overall brand and user experience. My work often involves developing solutions that streamline workflows and improve efficiency.</p>
		<p class="ai-section">I actively integrate AI into my development workflow, using it to speed up problem-solving, explore technical approaches, and improve code quality. It’s become a core part of how I work more efficiently and iterate faster.</p>
		<p>I bring a blend of technical expertise and creative problem-solving to my work, shaped by my training as a classical pianist and prior career in arts management.</p>
		<p class="personal">When I'm not coding, you can find me doing puzzles, cooking new recipes, walking the local trails with my bernedoodle, or going on adventures with my two daughters and wonderful husband.</p>
		<div class="call-out">
			<span class="music-note">&#9835;</span>
			<div class="text">
				<p class="call-out-title">Classical Pianist &#8594; Developer</p>
				<p class="call-out-desc">Composing elegant solutions with the same precision it takes to play Chopin.</p>
			</div>
		</div>
	</div>
</template>

<script>
import Ross from "@/assets/images/logos/ross.png";
import LittleCaesars from "@/assets/images/logos/little_caesars.png";
import Popeyes from "@/assets/images/logos/popeyes.png";
import Sherwin from "@/assets/images/logos/sherwin.png";
import TexasPete from "@/assets/images/logos/texas-pete.png";
import Tropicana from "@/assets/images/logos/tropicana.svg";

export default {
	name: "AboutView",
	components: { Tropicana },
	data() {
		return {
			logos: [
				{ name: "Little Caesars", img: LittleCaesars },
				{ name: "Sherwin Williams", img: Sherwin },
				{ name: "Popeyes", img: Popeyes },
				{ name: "Ross", img: Ross },
				{ name: "Texas Pete", img: TexasPete },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.about {
	max-width: 1000px;
}

.logos {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: $spacing-sm $spacing-md;
	margin: $spacing-sm auto;
	width: 100%;

	@include tablet { gap: $spacing-md; }

	&:first-of-type { margin-bottom: $spacing-md; }
}

.logo {
	width: calc(33% - 1.3em);
	max-width: 100px;
	filter: grayscale(100%);
	transition: filter $ui-transition-duration ease;

	&:hover { filter: grayscale(0%); }

	@include tablet { width: calc(20% - 1.6em); }
}

a:hover {
	text-decoration: underline;
}

hr {
	border: none;
	border-top: 1px solid $neutral-medium-color;
	margin: $spacing-md 0;
}

.ai-section {
	margin: $spacing-md 0 $spacing-md 1.5em;
	position: relative;

	&::before {
		content: '';
		width: 2px;
		height: 100%;
		background-color: $accent-color;
		position: absolute;
		left: -1.5em;
		top: 0;
	}
}

.personal { margin: $spacing-md 0; }

.call-out {
	background-color: $dark-color;
	color: $light-color;
	display: flex;
	align-items: center;
	gap: $spacing-md;
	border-radius: $spacing-sm;
	padding: $spacing-sm $spacing-md;

	.music-note {
		color: $accent-color;
		font-family: $heading-font;
		font-size: var(--fs-xl);
		font-weight: 900;
		line-height: $line-height-snug;
	}

	.call-out-title {
		font-family: $heading-font;
		font-weight: 700;
		margin-bottom: $spacing-xxs;
	}

	.call-out-desc {
		margin-bottom: 0;
	}
}
</style>

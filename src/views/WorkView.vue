<template>
	<div class="projects view">
		<div class="projects">
			<div class="project" v-for="project in projects" :key="project.name">
				<div class="project-img">
					<img :src="project.image" :alt="project.name">
				</div>
				<a :href="project.link" target="_blank" class="name">{{ project.name }}</a>
				<p>{{ project.description }}</p>
				<p><strong>Highlights: </strong>{{ project.tools }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import CryptoImg from "@/assets/images/projects/crypto-craze.png";
import BlackerImg from "@/assets/images/projects/blacker.png";
import McKinneyImg from "@/assets/images/projects/mckinney.png";
import CheilImg from "@/assets/images/projects/cheil.png";
import AttentionImg from "@/assets/images/projects/attention.png";
import PrideImg from "@/assets/images/projects/pride.png";
import CylndrImg from "@/assets/images/projects/cylndr.png";
import SlickImg from "@/assets/images/projects/slick.png";

export default {
	name: "ProjectsView",
	data() {
		return {
			projects: [
				{
					name: "Cylndr",
					image: CylndrImg,
					link: "https://cylndr.com/",
					description: "Agency website featuring a horizontal scroll",
					tools: "Vue, Sanity, GSAP",
				},
				{
					name: "McKinney",
					image: McKinneyImg,
					link: "https://mckinney.com/",
					description: "Agency website with reusable custom block components",
					tools: "Vue, WordPress, custom Gutenberg blocks, Advanced Custom Fields (ACF), Storybook",
				},
				{
					name: "Slick Wheels",
					image: SlickImg,
					link: "https://shadysamslickwheels.com/",
					description: "Education game about buying a car for client NGPF",
					tools: "Vue, Pinia state management, WordPress",
				},
				{
					name: "Crypto Craze",
					image: CryptoImg,
					link: "https://playcryptocraze.com/",
					description: "Educational game about investing in cryptocurrencies for client NGPF",
					tools: "Vue, Pinia state management, SVG animations",
				},
				{
					name: "Hearting Pride",
					image: PrideImg,
					link: "https://heartingpride.com/",
					description: "Digital hub featuring Pride content and LGBTQ+ creators",
					tools: "Firebase, Python, Google Drive & Sheets APIs, Google Cloud Storage",
				},
				{
					name: "Attention Arc",
					image: AttentionImg,
					link: "https://attentionarc.com/",
					description: "Landing page for our sister media agency",
					tools: "Vue, WordPress, video transparency effects with HTML5 Canvas",
				},
				{
					name: "Cheil Agency Network",
					image: CheilImg,
					link: "https://cheilagencynetwork.com/",
					description: "Landing page showcasing five agencies",
					tools: "Vue, WordPress, Hubspot",
				},
				{
					name: "Are You Blacker Than ChatGPT?",
					image: BlackerImg,
					link: "https://www.areyoublackerthanchatgpt.com/",
					description: "Internal DEI initiative game designed to reveal and explore AI biases related to black culture",
					tools: "Vue, Sanity CMS, ChatGPT",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.projects {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: $spacing-md;
}

.project {
	width: 100%;

	@include tablet { width: calc(50% - $spacing-sm); }
}

.project-img {
	aspect-ratio: 16 / 9;
	margin-bottom: $spacing-xxs;

	img {
		border-radius: 10px;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
}

.name { font-weight: $font-weight-bold; }

p { margin: 0; }
</style>

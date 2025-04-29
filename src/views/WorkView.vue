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
import BrandAIImg from "@/assets/images/projects/brandai.png";
import CryptoImg from "@/assets/images/projects/crypto-craze.png";
import BlackerImg from "@/assets/images/projects/blacker.png";
import McKinneyImg from "@/assets/images/projects/mckinney.png";

export default {
	name: "ProjectsView",
	data() {
		return {
			projects: [
				{
					name: "Crypto Craze",
					image: CryptoImg,
					link: "https://playcryptocraze.com/",
					description: "Educational game about investing in cryptocurrencies for client NGPF",
					tools: "Vue, Pinia state management, SVG animations",
				},
				{
					name: "Are You Blacker Than ChatGPT?",
					image: BlackerImg,
					link: "https://www.areyoublackerthanchatgpt.com/",
					description: "Internal DEI initiative game designed to reveal and explore AI biases related to black culture",
					tools: "Vue, Sanity CMS, ChatGPT",
				},
				{
					name: "BrandAI",
					image: BrandAIImg,
					link: "https://mckinney.com/brandai/",
					description: "Proprietary AI app for measuring a brand's market attention compared to its competitors",
					tools: "API, Vue, Highcharts, Jira",
				},
				{
					name: "McKinney",
					image: McKinneyImg,
					link: "https://mckinney.com/",
					description: "Primary agency website with reusable custom block components",
					tools: "Storybook, WordPress, Vue, custom Gutenberg blocks, Advanced Custom Fields (ACF)",
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

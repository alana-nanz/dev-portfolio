<template>
	<div class="skills view">
		<div class="skill" v-for="skill in skills" :key="skill.category">
			<p class="category">{{ skill.category }}</p>
			<ul>
				<li v-for="item in skill.type" :key="item">{{ item }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "SkillsView",
	data() {
		return {
			skills: [
				{
					category: "Languages",
					type: ["HTML", "CSS / SCSS", "Javascript"],
				},
				{
					category: "Frameworks & Libraries",
					type: ["Vue.js", "Nuxt.js", "Storybook.js", "Highcharts", "GSAP"],
				},
				{
					category: "Tools",
					type: ["Git", "Vercel", "Firebase", "WP Engine", "Figma", "Google Analytics", "APIs", "Jira"],
				},
				{
					category: "CMS & CRM",
					type: ["WordPress", "Sanity", "Contentful", "Hubspot", "Veeva", "Salesforce"],
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.skills {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: $spacing-md;
}

.skill {
	width: 100%;
}

.category {
	font-weight: $font-weight-bold;
	text-align: center;
}

ul {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	gap: $spacing-xs;
	margin: 0;
	padding: 0;

	li {
		@include flex-column-center;
		list-style-type: none;
		background-color: $accent-color-light;
		border-radius: 10px;
		text-align: center;
		text-transform: uppercase;
		padding: $spacing-xs;
		width: 40%;

		@include desktop { width: 30%; }
	}
}
</style>

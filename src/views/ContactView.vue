<template>
	<div class="contact view">
		<h3>Let's Connect!</h3>
		<div class="contact-section">
			<p class="title">Hire me</p>
			<a href="tel:386-793-6423" target="_blank">386-793-6423</a><br>
			<a href="mailto:readalana@gmail.com" target="_blank">readalana@gmail.com</a><br>
			<a href="" target="_blank">Resume</a>
		</div>
		<div class="contact-section">
			<p class="title">Follow me</p>
			<a href="https://github.com/alana-nanz" target="_blank"><LinkedinIcon class="icon" /></a>
			<a href="https://www.linkedin.com/in/alanananz" target="_blank"><GithubIcon class="icon" /></a>
		</div>
		<div class="contact-section">
			<p class="title">Meet me</p>
			<p>Cary, NC</p>
			<p>Let's grab coffee virtually or in-person!</p>
		</div>
	</div>
</template>

<script>
import LinkedinIcon from "@/assets/images/linkedin.svg";
import GithubIcon from "@/assets/images/github.svg";

export default {
	name: "ContactView",
	components: {
		LinkedinIcon,
		GithubIcon,
	},
};
</script>

<style lang="scss" scoped>
h3 {
	font-size: var(--fs-500);
	margin-bottom: $spacing-md;
}

.contact-section { margin: $spacing-md 0; }

.title { font-weight: $font-weight-bold; }

p { margin-bottom: $spacing-xxs; }

.icon {
	height: 30px;
	margin: $spacing-xxs $spacing-sm 0 0;
}
</style>

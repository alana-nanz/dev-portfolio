<template>
	<footer class="footer-contact">
		<div class="icons">
			<a v-for="icon in icons" :key="icon" :href="icon.link" target="_blank">
				<component :is="icon.svg" class="icon" />
				<p class="sr-only">{{ icon.copy }}</p>
			</a>
		</div>
		<p class="copyright">Copyright 2024 | Alana Nanz</p>
	</footer>
</template>

<script>
import LinkedinIcon from "@/assets/images/linkedin.svg";
import GithubIcon from "@/assets/images/github.svg";
import ResumeIcon from "@/assets/images/file.svg";
import EmailIcon from "@/assets/images/envelope.svg";
import Resume from "@/assets/Alana_Nanz_Resume.pdf";

export default {
	name: "FooterContact",
	components: {
		LinkedinIcon,
		GithubIcon,
		EmailIcon,
		ResumeIcon,
	},
	data() {
		return {
			icons: [
				{ link: "https://www.linkedin.com/in/alanananz", svg: "LinkedinIcon", copy: "Linkedin Icon" },
				{ link: "https://github.com/alana-nanz", svg: "GithubIcon", copy: "Github Icon" },
				{ link: "mailto:readalana@gmail.com", svg: "EmailIcon", copy: "Email Icon" },
				{ link: Resume, svg: "ResumeIcon", copy: "Resume Icon" },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
footer {
	@include flex-column-center;
	gap: $spacing-xs;
}

.icons {
	display: flex;
	align-items: center;
	gap: $spacing-sm;
}

.icon {
	height: 30px;
	transition: all $ui-transition-duration;

	&:hover {
		transform: scale(1.25);

		&:deep(path) { fill: $accent-color-light; }
	}
}

.copyright { font-size: var(--fs-300); }
</style>

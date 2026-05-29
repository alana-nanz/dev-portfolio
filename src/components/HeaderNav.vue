<template>
	<header>
		<h1>Alana<br>Nanz</h1>
		<h2>Developer</h2>
		<p>Proficient at transforming design mockups into user-friendly,
			<br>responsive applications with meticulous attention to detail.
		</p>
		<nav>
			<ul>
				<li v-for="section in sections" :key="section">
					<a href="#" @click.prevent="navigate(section)" :class="{ 'active': activeSection(section) }">
						{{ section }}
					</a>
				</li>
			</ul>
		</nav>
		<div class="copyright">
			<Icon class="icon" />
			<p>Copyright 2024 | Alana Nanz</p>
		</div>
	</header>
</template>

<script>
import Icon from "@/assets/images/icon.svg";

export default {
	name: "HeaderNav",
	components: {
		Icon,
	},
	data() {
		return {
			sections: ['About', 'Projects', 'Skills', 'Contact'],
		};
	},
	methods: {
		activeSection(section) {
			return this.$route.name === section.toLowerCase();
		},
		navigate(section) {
			if (section === 'About') {
				this.$router.push('/');
			} else {
				this.$router.push(`/${section}`);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
h1 {
	font-family: $heading-font;
	font-size: var(--fs-lg);
	font-weight: 900;
	line-height: $line-height-snug;
}

h2 {
	font-family: $heading-font;
	font-size: var(--fs-400);
	font-weight: 700;
	margin: 1.5em 0;
	text-transform: uppercase;
	letter-spacing: $letter-spacing-plus;
	position: relative;
	width: max-content;

	&::after {
		content: '';
		background-color: $accent-color;
		width: 50px;
		height: 2px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: calc(100% + $spacing-xs);
		animation: line-grow 1s ease-out forwards;
	}
}

@keyframes line-grow {
	0% { width: 0; }
	100% { width: 50px; }
}
h2 { margin-bottom: $spacing-xs; }

p { margin-bottom: 0; }

ul {
	margin: $spacing-lg 0 $spacing-xxl;
	padding: 0;
}

li {
	list-style-type: none;
	margin-bottom: $spacing-sm;
}

a {
	color: $neutral-dark-color;
	letter-spacing: $letter-spacing-plus;
	text-transform: uppercase;
	position: relative;

	&::after {
		content: '';
		background-color: $accent-color;
		border-radius: 50%;
		width: 6px;
		height: 6px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: -12px;
		opacity: 0;
		transition: opacity $ui-transition-duration;
	}

	&.active {
		color: $accent-color;
		font-weight: $font-weight-bold;
	}
}

.copyright {
	display: flex;
	align-items: flex-end;
	gap: $spacing-xs;
	font-size: var(--fs-300);
}

.icon {
	height: 25px;
}
</style>

<template>
	<header>
		<h1>Alana Nanz</h1>
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
header { position: relative; }

h1 {
	font-size: var(--fs-lg);
	font-weight: 900;
	line-height: $line-height-relaxed;
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
	color: $dark-color;
	text-transform: uppercase;

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

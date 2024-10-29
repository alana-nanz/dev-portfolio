<template>
	<header>
		<h1>Alana Nanz</h1>
		<h2>Developer</h2>
		<p class="intro">Proficient at transforming design mockups into user-friendly, responsive applications with meticulous attention to detail.
		</p>
		<p class="intro">Enthusiastic about creating scalable architecture and writing clean code.
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
	</header>
</template>

<script>
export default {
	name: "HeaderNav",
	data() {
		return {
			sections: ['About', 'Work', 'Skills'],
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

.intro {
	max-width: 475px;
	margin-bottom: $spacing-xs;
}

p { margin-bottom: 0; }

ul {
	margin: $spacing-sm 0 0;
	padding: 0;
	display: flex;
	gap: $spacing-md;
	position: relative;
	width: 100%;

	&::after {
		content: '';
		width: 100%;
		height: 1px;
		background-color: $accent-color;
		position: absolute;
		bottom: $spacing-xs;
	}

	@include tablet {
		display: block;
		margin: $spacing-lg 0;

		&::after { display: none; }
	}
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
</style>

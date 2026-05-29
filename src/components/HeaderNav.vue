<template>
	<header>
		<h1>Alana<br>Nanz</h1>
		<h2>Developer</h2>
		<p class="intro">Proficient at transforming designs into user-friendly, responsive applications with meticulous attention to detail. Enthusiastic about creating scalable architecture and writing clean code.
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

.intro {
	max-width: 475px;
	margin-bottom: $spacing-xs;
}

p { margin-bottom: 0; }

ul {
	margin: $spacing-md 0 0;
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

	@include tablet-landscape {
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
</style>

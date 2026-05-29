<template>
	<div class="skills">
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
};
</script>

<style lang="scss" scoped>
</style>

import { useRoute } from "vue-router";
import { watch, ref } from 'vue';

const DEFAULT_TRANSITION_VALUES = {
	name: "fade",
	mode: "",
};

export function useRouterTransition() {
	const route = useRoute();
	const active = ref(false);
	const name = ref(DEFAULT_TRANSITION_VALUES.name);
	const mode = ref(DEFAULT_TRANSITION_VALUES.mode);

	const update = function update(transition) {
		let next = typeof transition === "function" ? transition() : transition;

		if (typeof next === "string") {
			next = { ...DEFAULT_TRANSITION_VALUES, name: next };
		} else if (typeof next === "object") {
			next = { ...DEFAULT_TRANSITION_VALUES, ...next };
		}

		name.value = next.name;
		mode.value = next.mode;
	};

	watch(() => route.meta.transition, update);

	return { active, name, mode };
}

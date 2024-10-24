import { defineStore, acceptHMRUpdate } from 'pinia';

export const useConfigStore = defineStore('config', {
	state: () => ({
		data: {},
	}),
	getters: {
		loaded: (state) => Object.keys(state.data).length > 0,
		array: (state) => (key) => state.data[key].map((data) => data),
		constants: (state) => state.data.config,
	},
	actions: {
		async load() {
			const config = window.DATA;

			// this.data = config;
		},
	},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useConfigStore, import.meta.hot));
}

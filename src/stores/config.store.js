import { defineStore, acceptHMRUpdate } from 'pinia';
import { useApiStore } from '@/stores/api.store';
import { CONFIG_ENDPOINT } from '@/constants';

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
			let config = window.DATA;

			if (!config) {
				const apiStore = useApiStore();
				config = await apiStore.get({ endpoint: CONFIG_ENDPOINT });
			}

			this.data = config;
		},
	},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useConfigStore, import.meta.hot));
}

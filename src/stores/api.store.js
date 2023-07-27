import { defineStore, acceptHMRUpdate } from 'pinia';

export const useApiStore = defineStore('api', {
	state: () => ({
		loading: false,
	}),
	getters: {
		headers: () => (customHeaders) => {
			const headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append("Content-Type", 'application/json');

			if (customHeaders) {
				customHeaders.forEach(({ key, value }) => headers.append(key, value));
			}

			return headers;
		},
	},
	actions: {
		async get(request) {
			return this.execute({
				...request,
				headers: this.headers(request.headers),
				method: "GET",
			});
		},
		async post(request) {
			return this.execute({
				...request,
				body: JSON.stringify(request.body),
				headers: this.headers(request.headers),
				method: "POST",
			});
		},
		async execute(request) {
			let data = false;
			const { endpoint, ...options } = request;

			this.loading = true;
			try {
				const response = await fetch(endpoint, options);
				data = await response.json();
			} catch (error) {
				console.warn(`API Error: ${error}`);
			}
			this.loading = false;

			return data;
		},
	},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useApiStore, import.meta.hot));
}

import commonConfig from "./vite.common.js";
import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		...commonConfig,
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		server: {
			proxy: {
				'^/(wp-json|wp-content)/.*': {
					target: env.WP_DEV_PROXY ?? "http://localhost/",
					changeOrigin: true,
				},
			},
			port: 3000,
		},
	}
});

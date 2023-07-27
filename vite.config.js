import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';
import fastGlob from "fast-glob";
import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';
import eslint from '@rollup/plugin-eslint';

const sassGlobalFileList = fastGlob.sync(["src/assets/styles/globals/**/*.scss"]).map(
	(file) => `@import "${file}";`
);

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [
			vue(),
			svgLoader({
				svgoConfig: {
					plugins: [{
						name: 'preset-default',
						params: {
							overrides: {
								inlineStyles: false,
								removeViewBox: false,
								cleanupIDs: false,
							},
							removeStyleElement: true,
						},
					}],
				},
			}),
			{...eslint({include: 'src/**/*.+(js|vue)'}), enforce: 'pre'}
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: sassGlobalFileList.join("\n")
				},
			},
		},
		server: {
			proxy: {
				'^/(wp-json|wp-content)/.*': {
					target: env.WP_DEV_PROXY ?? "http://localhost/",
					changeOrigin: true,
				},
			},
		},
	}
});

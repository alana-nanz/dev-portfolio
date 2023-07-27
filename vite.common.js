import fastGlob from "fast-glob";
import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';
import eslint from '@rollup/plugin-eslint';

export default {
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
						},
						removeStyleElement: true,
					},
				}],
			},
		}),
		{...eslint({include: 'src/**/*.+(js|vue)'}), enforce: 'pre'}
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: fastGlob.sync(["src/assets/styles/globals/**/*.scss"]).map(
					(file) => `@import "${file}";`
				).join("\n")
			},
		},
	},
};

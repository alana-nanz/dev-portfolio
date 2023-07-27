<template>
	<div class="asset-loader-screen">
	</div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';

export default {
	name: 'AssetLoader',
	data() {
		return {
			progress: 0,
			rotation: 0,
			assetIndex: 0,
			listeners: {
				completion: null,
				progress: null,
			},
		};
	},
	computed: {
		...mapState({
			loader: (state) => state.assets.loader,
			assets: (state) => state.config.assets,
			manifestKey: (state) => state.assets.manifestKey,
			completionAction: (state) => state.assets.completionAction,
			soundFileType: (state) => state.sound.fileType,
		}),
		...mapGetters(["configLoaded", "isLoaded"]),
	},
	methods: {
		...mapMutations(["loadManifest", "setXHR"]),
		parseManifest(manifest) {
			let assets = [];

			// reset xhr in case it was set in previous manifest
			this.setXHR({ xhr: false });

			Object.keys(manifest).forEach((key) => {
				let list = manifest[key];

				if (key === "svg") {
					this.setXHR({ xhr: true });
				}

				if (key === "sounds") {
					list = list[this.soundFileType];
				}

				assets = assets.concat(list);
			});

			return assets;
		},
		updateProgress() {
			const rotation = Math.floor(this.loader.progress * 360);
			this.progress = this.loader.progress * 100;

			if (rotation > this.rotation) {
				this.rotation = rotation;
			}
		},
		completeLoad() {
			if (this.manifestKey === "critical") {
				this.loadManifest({
					key: "general",
					manifest: this.parseManifest(this.assets.general),
				});
			}

			this.$store.dispatch(this.completionAction);
		},
	},
	mounted() {
		this.listeners.completion = this.loader.on('complete', this.completeLoad);
		this.listeners.progress = this.loader.on('progress', this.updateProgress);

		if (!this.isLoaded() && this.manifestKey === "critical") {
			this.loadManifest({
				manifest: this.parseManifest(this.assets.critical),
			});
		}
	},
	beforeUnmount() {
		this.loader.off('complete', this.listeners.completion);
		this.loader.off('progress', this.listeners.progress);
	},
};
</script>

<style lang="scss" scoped>
	.spinner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.spinner-img {
		width: 335px;
		height: 375px;
		transform-origin: center 67%;
		transition: transform 150ms linear;

		@include mobile {
			width: 201px;
			height: 225px;
		}
	}

	.percent {
		display: block;
		font-size: 60px;
		font-weight: 700;
		z-index: 99;
		transform: translate3d(0, 100%, 0);
		letter-spacing: .07em;
		color: $brand-color-primary;
		line-height: 1;

		@include mobile {
			transform: translate3d(0, 60%, 0);
			font-size: 50px;
		}
	}
</style>

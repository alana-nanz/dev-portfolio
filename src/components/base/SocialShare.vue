<template>
	<div class="share-group">
		<a class="share-link" :href="facebookShareURL" target="_blank" @click="trackShare('Facebook')">
			<img class="social-icon" src="@/assets/images/fb-icon.svg" />
		</a>
		<a class="share-link" :href="twitterShareURL" target="_blank" @click="trackShare('Twitter')">
			<img class="social-icon" src="@/assets/images/twitter-icon.svg" />
		</a>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	name: 'SocialShare',
	computed: {
		...mapState({
			social: (state) => state.global.api.data.social,
		}),
		encodedUrl() {
			return encodeURIComponent(window.location.origin);
		},
		facebookShareURL() {
			return `https://www.facebook.com/sharer/sharer.php?u=${this.encodedUrl}&quote=${encodeURIComponent(this.shareText)}`;
		},
		twitterShareURL() {
			return `https://twitter.com/share?url=${this.encodedUrl}&text=${encodeURIComponent(this.shareText)}`;
		},
		shareText() {
			return this.social.twitter.share_text;
		},
	},
	methods: {
		...mapActions('global/analytics', { trackEvent: 'trackEvent' }),
		trackShare(site) {
			this.trackEvent({
				eventCategory: 'End Game',
				eventAction: 'Share',
				eventLabel: site,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
	.share-group { display: flex; }

	.share-link {
		display: inline-block;
		width: 50px;
		height: 50px;

		@include mobile {
			width: 40px;
			height: 40px;
		}

		& + & { margin-left: 1rem; }
	}
</style>

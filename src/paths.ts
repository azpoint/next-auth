const paths = {
	homePath() {
		return '/'
	},
	topicShowPath(topicSlug: string) {
		return `/topics/${topicSlug}`
	},
	postCreatePath(topicSlug: string) {
		return `/topics/${topicSlug}/post/new`
	},
	postShowPath(topicSlug: string, postId: string) {
		return `/topics/${topicSlug}/post/${postId}`
	}
}

export default paths
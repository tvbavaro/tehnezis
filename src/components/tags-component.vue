<template v-if="tags">
    <div class="tags tags__wrapper" ref="tagsContainer">
        <tagItem class="tags__item" v-for="(tag, index) in tags.slice(0, maxTagsLength)" :key="tag.id" :text="tag.text"
            :icon="tag.icon" :hasLastTag="index < maxTagsLength - 1" />
    </div>
</template>

<script>
import tagItem from './tag-item.vue';
export default {
    data: () => ({
        maxTagsLength: null
    }),
    props: {
        tags: {
            type: Array,
            requared: true
        }
    },
    components: {
        tagItem
    },
    created() {
        window.addEventListener("resize", this.setTagsLength);
        this.setTagsLength();
    },
    destroyed() {
        window.removeEventListener("resize", this.setTagsLength);
    },
    methods: {
        async setTagsLength() {
            this.maxTagsLength = this.tags.length;
            await this.$nextTick();
            const tagsContainerWidth = this.$refs.tagsContainer.getBoundingClientRect().width;
            const tags = Array.from(this.$refs.tagsContainer.children);
            let tagsWidth = 0;
            let counter = 0;

            for (const tag of tags) {
                tagsWidth += tag.getBoundingClientRect().width;
                if (tagsWidth < tagsContainerWidth && tag.classList.contains('tag')) {
                    counter++;
                }
            }

            this.maxTagsLength = counter;
        }
    },
};
</script>

<style lang="scss">
@use '../styles/variables' as *;
.tags {
    &__wrapper {
        display: flex;
        align-items: center;
        height: $tags-wrapper-height;
        overflow: hidden;
    }

    &__item {
        height: 100%;
        display: flex;
        align-items: center;
    }
}
</style>
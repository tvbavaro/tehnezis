<template>
    <fragment>
        <v-chip class="tag">{{ text }}
            <v-icon class="tag__icon" v-if="icon">{{ icon }}</v-icon>
        </v-chip>
        <v-icon class="devider" v-if="hasLastTag">mdi-circle-small</v-icon>
    </fragment>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            requared: true
        },
        icon: {
            type: String,
            requared: false
        },
        hasLastTag: {
            type: Boolean,
            requared: true
        }
    }
}
</script>

<style lang="scss">
@use '../styles/variables' as *;
.tag {
    line-height: $tag-lh;
    flex-shrink: 0;
}
.devider {
    line-height: $tag-lh;
    flex-shrink: 0;
}
</style>
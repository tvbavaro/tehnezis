<template>
  <v-app>
    <section class="main main__grid">
      <tagsComponent :tags="tags" class="main__grid_row"/>
      <tagsComponent :tags="tags" class="main__grid_row position_jc-sb"/>
      <tagsComponent :tags="tags" class="position_jc-fs"/>
      <tagsComponent :tags="tags" class="position_jc-sb"/>
    </section>

  </v-app>
</template>

<script>
import tagsComponent from './components/tags-component.vue';
export default {
  name: 'App',

  data: () => ({
    tags: [
      {
        id: 1,
        text: 'Lorem added text',
        icon: 'mdi-bus'
      },
      {
        id: 2,
        text: 'Lorem2',
        icon: 'mdi-clock'
      },
      {
        id: 3,
        text: 'Lorem3',
      },
      {
        id: 4,
        text: 'Lorem4 external text',
        icon: 'mdi-account'
      },
      {
        id: 5,
        text: 'Lorem5 added extra text for tag',
        icon: 'mdi-star'
      }
    ]
  }),

  components: {
    tagsComponent
  }
};
</script>

<style lang="scss">
.main {
  &__grid {
    display: grid;
    grid-template-columns: repeat(2,1fr);

    &_row {
      grid-column: 1/3;
    }
  }
}
.position {
  &_jc-fs {
    justify-content: flex-start;
  }

  &_jc-sb {
    justify-content: space-between;
  }
}
</style>
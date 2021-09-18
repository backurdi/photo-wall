<template>
  <figure v-lazyload class="image__wrapper">
    <ImageLoading class="image__spinner" />
    <img class="image__item" :data-url="source" alt="random image" />
  </figure>
</template>

<script>
import ImageLoading from "./loading.component.vue";
import LazyLoadDirective from '../directives/LazyLoadDirective';

export default {
  name: "ImageItem",
  directives: {
    lazyload: LazyLoadDirective
  },
  components: {
    ImageLoading
  },
  props: {
    source: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.image {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 0;
    position: relative;

    &.loaded {
      .image {
        &__item {
          visibility: visible;
          opacity: 1;
          border: 0;
        }

        &__spinner {
          display: none;
          width: 100%;
        }
      }
    }
  }

  &__item {
    width: 100%;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    visibility: hidden;
    height: 100%;
  }
}
@media only screen and (max-width: 500px) {
  .image__wrapper {
    padding-bottom: 100%;
  }
}
@media only screen and (min-width: 501px) {
  .image__wrapper {
    padding-bottom: 66.66%;
  }
}
@media only screen and (min-width: 1901px) {
  .image__wrapper {
    padding-bottom: 56.25%;
  }
}
</style>

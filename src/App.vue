<template>
  <div class="application__wrapper">
    <div class="image-wall__top-bar">
      <h2>Photo Wall</h2>
      <div class="image-wall__top-bar__toggle">
        <p>
          See
          <span>{{photoWallToggle ? 'old':'new'}}</span> aspect-ratio
        </p>
        <label class="switch">
          <input type="checkbox" v-model="photoWallToggle" />
          <span class="slider"></span>
        </label>
      </div>
    </div>
    <div class="image-wall__wrapper">
      <p>
        Using
        <span>{{photoWallToggle?'new':'old'}}</span> css aspect-ratio
      </p>
      <div v-if="photoWallToggle" class="image-wall__container">
        <ImageNew
          v-for="(image, index) in Array(102)"
          :key="index"
          :source="'https://picsum.photos/200/300?random='+index"
        ></ImageNew>
      </div>
      <div v-if="!photoWallToggle" class="image-wall__container">
        <ImageOld
          v-for="(image, index) in Array(102)"
          :key="index"
          :source="'https://picsum.photos/200/300?random='+index"
        ></ImageOld>
      </div>
    </div>
  </div>
</template>

<script>
import ImageNew from './components/image-new.component.vue';
import ImageOld from './components/image-old.component.vue';

export default {
  name: 'App',
  components: {
    ImageNew,
    ImageOld
  },
  data:()=>({
    photoWallToggle: false,
  }),
}
</script>

<style lang="scss">
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: rgb(48, 2, 173);

      &:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
    }

    &:focus + .slider {
      box-shadow: 0 0 1px rgb(48, 2, 173);
    }
  }
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
}

.image-wall {
  &__top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    &__toggle {
      display: flex;
      align-items: center;

      p {
        margin-right: 10px;
      }
    }
  }

  &__wrapper {
    p {
      margin-bottom: 40px;
    }
  }

  &__container {
    display: grid;
  }

  @media only screen and (max-width: 500px) {
    &__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (min-width: 501px) {
    &__container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media only screen and (min-width: 1901px) {
    &__container {
      grid-template-columns: repeat(6, 1fr);
    }
  }
}
</style>

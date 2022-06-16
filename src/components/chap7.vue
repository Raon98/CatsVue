<template>
  <div>
    <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        :slides-per-view="1.2"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide v-for="n in 7" :key="n"> {{ n }} </swiper-slide>
    </swiper>
  </div>
  <p>슬라이스쇼 </p>

</template>

<script>

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { EffectCards } from "swiper";
// Import Swiper styles
import "swiper/css";
SwiperCore.use([EffectCards]);
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name : 'chap7',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 300px;
  height: 320px;
  margin-right: 5px;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #000;
}
.swiper-slide:nth-child(1n) {
  background-color: palevioletred;
}
.swiper-slide:nth-child(2n) {
  background-color: skyblue;
}
.swiper-slide:nth-child(3n) {
  background-color: peru;
}
.swiper-slide:nth-child(4n) {
  background-color: cadetblue;
}
.swiper-slide:nth-child(5n) {
  background-color: plum;
}
.swiper-slide:nth-child(6n) {
  background-color: goldenrod;
}
.swiper-slide:nth-child(7n) {
  background-color: palegreen;
}
</style>
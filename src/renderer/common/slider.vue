<template>
  <el-carousel
    :interval="4000"
    type="card"
    height="200px"
  >
    <el-carousel-item v-for="(item,index) in image_list" :key="index">
      <img class="medium" :src="item.url" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import slider from "@/assets/images/slider.jpg";
export default {
  name: "slider",
  data() {
    return {
      image_list: [
        {
          url: slider
        },
        {
          url: slider
        },
        {
          url: slider
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.el-carousel__item img {
  height: 100%;
  line-height: 200px;
  margin: 0;
}
</style>

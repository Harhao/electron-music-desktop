<template>
  <div class="category-wrapper">
    <div class="category-list">
      <div
        class="category-item"
        v-for="(item, index) in categoryList"
        :key="index"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      categoryList: [
        {
          label: "门店音乐",
          value: 1
        },
        {
          label: "节奏控",
          value: 2
        },
        {
          label: "门店音乐",
          value: 1
        },
        {
          label: "节奏控",
          value: 2
        },
        {
          label: "门店音乐",
          value: 1
        },
        {
          label: "节奏控",
          value: 2
        },
        {
          label: "门店音乐",
          value: 1
        },
        {
          label: "节奏控",
          value: 2
        },
        {
          label: "门店音乐",
          value: 1
        },
        {
          label: "节奏控",
          value: 2
        },
        {
          label: "门店音乐",
          value: 1
        },
        {
          label: "节奏控",
          value: 2
        },
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.category-wrapper {
  width: 100%;
  height: auto;
  font-family: 'source-beauty-light';
  .category-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    .category-item {
      flex: 0 0 16%;
      text-align: center;
      color: #fff;
      height: 35px;
      line-height: 35px;
      font-size: 14px;
      background-color: #353434;
      border-radius: 5px;
      margin-top: 10px;
      cursor: pointer;
      &:hover {
        color: #17d28d;
        filter: brightness(0.8);
      }
    }
  }
}
</style>

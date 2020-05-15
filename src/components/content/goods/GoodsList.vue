<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.acm" :good-item="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-evenly;
  padding-bottom: 49px;
}
</style>
<template>
  <div class="recommend">
    <div v-for="item in commends" :key="item.acm" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    commends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  font-size: 15px;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
recommend-item {
  flex: 1;
}
img {
  width: 100%;
}
</style>
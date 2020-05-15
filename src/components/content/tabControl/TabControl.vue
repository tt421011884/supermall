<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in items"
      :key="item"
      class="tab-control-item"
      :class="{active: index === currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabclick", index);
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  font-size: 14px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding: 5px;
  height: 100%;
  border-bottom: 2px solid var(--color-high-text);
}
</style>
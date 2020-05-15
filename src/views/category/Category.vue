<template>
  <div ref="wrapper" class="wrapper" @pullingUp="message">
    <ul class="content">
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
      <li>Loading</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

export default {
  name: "Category",
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      scrollY: true,
      pullUpLoad: true
    });
    this.scroll.on("pullingUp", this.message);
  },
  data() {
    return {
      scroll: null
    };
  },
  methods: {
    message() {
      console.log("laoding is a good man");
      this.scroll.finishPullUp();
    }
  }
};
</script>

<style>
.wrapper {
  height: 100px;
  background-color: gray;
  /* overflow: hidden; */
}
</style>




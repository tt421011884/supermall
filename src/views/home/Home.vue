<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :commends="recommend"></recommend-view>
    <feature></feature>
    <tab-control :items="['流行', '新款', '精选']" class="tab-control" @tabclick="changeStyle"></tab-control>
    <goods-list :goods="goods[getType].list"></goods-list>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import Feature from "./childComps/FeatureView";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentIndex: 0
    };
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
    });
    this.getGoodsInfo("pop");
    this.getGoodsInfo("new");
    this.getGoodsInfo("sell");
  },
  methods: {
    getGoodsInfo(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page = page;
      });
    },
    changeStyle(index) {
      this.currentIndex = index + 1;
    }
  },
  computed: {
    getType() {
      switch (this.currentIndex) {
        case 1:
          return "pop";
          break;
        case 2:
          return "new";
        default:
          return "sell";
          break;
      }
    }
  }
};
</script>










<style>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
.tab-control {
  position: sticky;
  top: 43px;
  z-index: 99;
}
</style>
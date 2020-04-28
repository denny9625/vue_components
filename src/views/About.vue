<template>
  <div class="scroll-wrap">
    <div class="scroll-content" :style="{ top, transition }">
      <div v-for="(item, index) in prizeList" :key="index" class="ctx">
        <div
          :class="{
            item_in: activeIndex - item.l_index == -2 && item.l_index != 2,
            item_act:
              Math.abs(activeIndex - item.l_index) == 1 ||
              (activeIndex == 0 && item.l_index == 2),
            item_out: item.l_index < activeIndex,
            item_n: Math.abs(activeIndex - item.l_index) >= 2,
          }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
let list: PriceList[] = [
  { name: "test1", l_index: 0 },
  { name: "test2", l_index: 1 },
  { name: "test3", l_index: 2 },
  { name: "test4", l_index: 3 },
];

const list1: any = [];

list.forEach((item) => {
  const obj = Object.create(item);
  obj.name = item.name;
  obj.l_index = list.length + list1.length;
  list1.push(obj);
});
list = list.concat(list1);

interface PriceList {
  name: string;
  l_index: number;
}

@Component
export default class About extends Vue {
  private prizeList: PriceList[] = [];
  private activeIndex: number = 0;
  private intnum: any;
  private transition: string = "top 0.5s";
  private created() {
    this.ScrollUp();
    this.prizeList = list;
  }
  get top() {
    return -this.activeIndex * 50 + "px";
  }
  private ScrollUp() {
    this.intnum = setInterval(() => {
      this.activeIndex += 1;
      if (this.activeIndex === this.prizeList.length / 2) {
        setTimeout(() => {
          this.transition = "none";
          this.activeIndex = 0;
          setTimeout(() => {
            this.transition = "top 0.5s";
          }, 500);
        }, 1000);
      }
    }, 2000);
  }
}
</script>
<style scoped>
p {
  margin: 0;
  padding: 0;
}
.item_n {
  opacity: 0;
}
.item_act {
  opacity: 1;
}
.item_in {
  transition: all 1s;
  opacity: 1;
}
.item_out {
  transition: all 0.5s;
  opacity: 0;
}
.scroll-wrap {
  height: 250px;
  position: fixed;
  bottom: 50px;
  left: 50px;
}
.scroll-content {
  position: relative;
  transition: top 0.5s;
}
.scroll-content .ctx {
  line-height: 50px;
  text-align: center;
}
</style>

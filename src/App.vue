<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
// tslint:disable
import { Component, Vue, Watch } from "vue-property-decorator";
// import HelloWorld from './components/HelloWorld.vue';

@Component({
  name: "App",
})
export default class App extends Vue {
  private transitionName: string = "slide-left";

  @Watch("$route")
  watchRoute(to: any, from: any) {
    if (to.meta.index > from.meta.index) {
      // 设置动画名称
      this.transitionName = "slide-left";
    } else {
      this.transitionName = "slide-right";
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html {
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  -webkit-overflow-scrolling: touch;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
</style>

<template>
  <div><canvas id="progressBar" :width="width" :height="height"></canvas></div>
</template>

<script lang="ts">
// tslint: disable
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import ProcessFun from "./ProcessController";

@Component
export default class ProcessBar extends Vue {
  @Prop({ default: 100 }) percent!: number;
  @Prop({ default: 100 }) width!: number;
  @Prop({ default: 100 }) height!: number;
  @Prop({ default: 10 }) lineWidth!: number;
  @Prop({ default: "#72de8e" }) color!: string;
  @Prop({ default: "#ccc" }) bg_color!: string;
  private _percent: number = this.percent;
  private in: boolean = false;
  private working: boolean = false;
  private ani: any;
  private steps: number = 0;
  mounted() {
    this.$nextTick(() => {
      this.test();
    });
  }
  private test() {
    this.in = true;
    let ctxs = (document as any).querySelector("#progressBar").getContext("2d"),
      that = this,
      circle = new ProcessFun(
        ctxs,
        this.width,
        this.height,
        this.lineWidth,
        this.color,
        this.bg_color
      ),
      eachs = this.percent,
      currentIndex = 0,
      max = eachs;
    this.ani = setInterval(() => {
      if (that.steps <= max || that.steps === 100) {
        circle.clearFill();
        if (that.steps > 100) {
          that.steps = 100;
        }
        circle.fill(that.steps);
        that.steps++;
      } else {
        clearInterval(this.ani);
        that._percent = that.percent;
        if (max <= 100) {
          max = max + eachs;
          currentIndex++;
        }
      }
    }, 20);
  }
}
</script>

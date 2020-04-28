<template>
  <div><canvas id="progressBar" :width="width" :height="height"></canvas></div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import ProcessFun from "./ProcessController";

@Component
export default class ProcessBar extends Vue {
  @Prop()
  percent: number = 100;
  @Prop()
  width: number = 100;
  @Prop()
  height: number = 100;
  @Prop()
  lineWidth: number = 10;
  @Prop()
  color: string = "#72de8e";
  @Prop()
  bg_color: string = "#ccc";
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
            max = eachs,
            ani = setInterval(function() {
              if (that.steps <= max || that.steps == 100) {
                circle.clearFill();
                if (that.steps > 100) {
                  that.steps = 100;
                }
                circle.fill(that.steps);
                that.steps++;
              } else {
                clearInterval(ani);
                that._percent = that.percent;
                if (max <= 100) {
                  max = max + eachs;
                  currentIndex++;
                }
              }
            }, 20);
  }
}
// export default {
//   name: "processBar",
//   data() {
//     return {
//       _percent: this.percent,
//       in: false,
//       working: false,
//       ani: null,
//       steps: 0,
//     };
//   },
//   mounted() {
//     this.$nextTick(() => {
//       this.test();
//     });
//   },
//   watch: {
//     percent: {
//       immediate: true,
//       handler(val) {
//         if (val < 0) {
//           val = 0;
//         }
//         this.percent = val;
//         if (this.in) this.add();
//       },
//     },
//   },
//   methods: {
//     test() {
//       this.in = true;
//       let ctxs = document.querySelector("#progressBar").getContext("2d"),
//         that = this,
//         circle = new ProcessFun(
//           ctxs,
//           this.width,
//           this.height,
//           this.lineWidth,
//           this.color,
//           this.bg_color
//         ),
//         eachs = this.percent,
//         currentIndex = 0,
//         max = eachs,
//         ani = setInterval(function() {
//           if (that.steps <= max || that.steps == 100) {
//             circle.clearFill();
//             if (that.steps > 100) {
//               that.steps = 100;
//             }
//             circle.fill(that.steps);
//             that.steps++;
//           } else {
//             clearInterval(ani);
//             that._percent = that.percent;
//             if (max <= 100) {
//               max = max + eachs;
//               currentIndex++;
//             }
//           }
//         }, 20);
//     },
//     add() {
//       let ctxs = document.querySelector("#progressBar").getContext("2d"),
//         that = this,
//         circle = new ProcessFun(
//           ctxs,
//           this.width,
//           this.height,
//           this.lineWidth,
//           this.color,
//           this.bg_color
//         ),
//         eachs = this.percent,
//         currentIndex = 0,
//         max = eachs;
//       if (this.working) {
//         clearInterval(this.ani);
//       } else {
//         that.steps = this._percent;
//       }
//       this.ani = setInterval(function() {
//         that.working = true;
//         if ((that.steps != max || that.steps == 100) && eachs > 0) {
//           circle.clearFill();
//           if (that._percent > that.percent) {
//             that.steps -= 0.1;
//             that.steps = that.steps.toFixed(1);
//             that.steps *= 1;
//           } else {
//             that.steps += 0.1;
//             that.steps = that.steps.toFixed(1);
//             that.steps *= 1;
//           }
//           if (that.steps < 0) that.steps = 0;
//           else if (that.steps > 100) that.steps = 100;
//           circle.fill(that.steps);
//         } else {
//           clearInterval(that.ani);
//           that.working = false;
//           that._percent = eachs;
//           if (max <= 100) {
//             max = max + eachs;
//             currentIndex++;
//           }
//         }
//       }, 20);
//     },
//   },
// };
</script>

export default class ProcessFun {
  private ctx: any;
  private width: number;
  private height: number;
  private lineWidth: number;
  private tColor: string;
  private bgColor: string;
  constructor(
    ctxs: any,
    width: number,
    height: number,
    lineWidth: number,
    color: string,
    bgColor: string,
  ) {
    this.ctx = ctxs;
    this.width = width;
    this.height = height;
    this.lineWidth = lineWidth;
    this.tColor = color;
    this.bgColor = bgColor;
  }
  public clearFill() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  public fill(x: number) {
    this.fillBg();
    this.fillArc(x);
    this.fillText(x);
  }
  private setArea(width: number, height: number) {
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
  }
  private fillBg() {
    this.ctx.beginPath();
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.strokeStyle = "#eee";
    this.ctx.arc(
      this.width / 2,
      this.height / 2,
      45,
      0.3 * Math.PI,
      0.7 * Math.PI,
      true,
    );
    this.ctx.stroke();
  }
  private fillArc(x: number) {
    this.ctx.beginPath();
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.lineCap = "round";
    this.ctx.strokeStyle = this.tColor;
    this.ctx.arc(
      this.width / 2,
      this.width / 2,
      45,
      0.7 * Math.PI,
      ((x * 2.88 + 126) * Math.PI) / 180,
    );
    this.ctx.stroke();
  }
  private fillText(x: number) {
    this.ctx.font = "normal normal bold 20px Arial blod";
    this.ctx.fillStyle = this.tColor;
    this.ctx.textBaseline = "middle";
    this.ctx.textAlign = "center";
    this.ctx.fillText(x.toFixed(1) + "%", this.width / 2, this.width / 2);
  }
}

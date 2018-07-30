<template lang="pug">
  .canvas-wrapper
    canvas(ref="main" @mousemove="rotateCannon($event)")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { setInterval } from 'timers';

export default Component({})(
  class RadioDefense extends Vue {
    mousePositionX = 0;
    mousePositionY = 0;
    rotateCannon() {
      this.mousePositionX = event.x;
      this.mousePositionY = event.y;
    };
    mounted() {
      const red = "#E7465D";
      const yellow = '#F5AF5F';
      const blue = '#3676BB';
      const background = '#001D2E';
      const vm = this;
      const main = this.$refs['main']; 
      const ctx = this.$refs['main'].getContext('2d');
      const ww = window.innerWidth;
      const wh = window.innerHeight;

      const degToPi = Math.PI * 2 / 360;

      main.width = ww;
      main.height = wh;

      class bullet {
        constructor(args) {
          const def = {
            x: 0,
            y: 0,
            s: {
              x: 0,
              y: 0,
            },
          };
          Object.assign(this, def, args);
        };
        update() {
          this.x += this.s.x;
          this.y += this.s.y;
        };
        draw() {
          ctx.save();
            ctx.translate(this.x, this.y);
          ctx.restore();
        };
      }
      class Ship {
        constructor(args) {
          const def = {
            x: 0,
            y: 0,
            r: 60,
            deg: 50 * degToPi,
          };
          Object.assign(this, def, args);
        };
        draw() {
          ctx.save()
          ctx.rotate(this.deg);

          ctx.fillStyle = 'white';
          ctx.fillRect(100, -25/2, 25, 25);

          ctx.beginPath();
          ctx.arc(0, 0, this.r, 0, Math.PI * 2);
          ctx.strokeStyle = 'white';
          ctx.lineWidth = 12;
          ctx.shadowBlur = 20;
          ctx.shadowColor = 'white';
          ctx.stroke();

          for (let i =0; i < 3; i++) {
            ctx.lineWidth = 5;
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -this.r);
            ctx.stroke();
            ctx.rotate(Math.PI * 2 / 3);
          }
          ctx.restore();
        };
      };
      let ship,ship2;

      function init() {
        ship = new Ship({
          deg: 0 * degToPi,
        });
        ship2 = new Ship({
          deg: 45 * degToPi,
          r: 120,
        });
        ship3 = new Ship({
          deg: 45 * degToPi,
          r: 250,
        });
      };
      function update() {
        // ship.deg = vm.mousePositionX / 50;
      };
      function draw() {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, ww, wh);

        // Grid
        const span = 50;
        ctx.beginPath();
        for (let i = 0; i < ww; i += span) {
          ctx.moveTo(i, 0);
          ctx.lineTo(i, wh);
        }
        for (let i = 0; i < wh; i += span) {
          ctx.moveTo(0, i);
          ctx.lineTo(ww, i);
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, .2)';
        ctx.stroke();

        // 船
        ctx.save();
          ctx.translate(ww/2, wh/2);
          ship.draw();
          ship2.draw();
          ship3.draw();
        ctx.restore();

        ctx.fillStyle = 'white';
        ctx.fillRect(ship.x, ship.y, 50, 50);
        requestAnimationFrame(draw);
      };

      init();
      let fps = 60;
      setInterval(update, 1000/fps);
      requestAnimationFrame(draw);
      // setInterval(draw, 5);
      // ctx.beginPath();
      // ctx.moveTo(100, 100);
      // ctx.lineTo(500, 100);
      // ctx.lineTo(300, 400);
      // ctx.closePath();

      // ctx.fillStyle = 'red';
      // ctx.fill();
      // ctx.strokeStyle = 'black';
      // ctx.lineWidth = 10;
      // ctx.stroke();

      // ctx.fillRect(0, 0, 200, 200);

    };
  }
);
</script>

<style lang="scss" scoped>
  canvas {
    height: calc(100vh - 41.38px);
    width: 100%;
    border: 5px solid #222;
  }
</style>

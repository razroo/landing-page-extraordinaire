import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'razroo-particle-rain',
  templateUrl: './particle-rain.component.html',
  styleUrls: ['./particle-rain.component.scss']
})
export class ParticleRainComponent implements AfterViewInit, OnDestroy  {

  number = 200;
  linkDistance = 120;
  linkWidth = 1;
  moveSpeed = 1;
  size = Math.random() * (3 - 0.3) + 0.3;
  minSize = 0.3;
  repulseDistance = 140;
  repulseDuration = 0.4;
  canvasHeight = 0;
  canvasWidth = 0;
  interaction = {
    status: 'mouseleave',
    pos_x: 0,
    pos_y: 0,
  };
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  particlesList: SingleParticle[] = [];
  animating = true;
  particlesDetailList: any[] = [];

  redraw = 0;
  @ViewChild('particles', {static: true}) particlesCanvas: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.canvas = this.particlesCanvas.nativeElement;
    this.context = this.canvas.getContext('2d');
    this.setCanvasSize();
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.number; i++) {
      const size = Math.floor(Math.random() * 3) + 1;
      this.particlesList.push(this.createParticle(size));
    }
    this.render();
  }

  ngOnDestroy() {
    this.animating = false;
  }

  setCanvasSize() {
    this.canvasHeight = this.canvas.offsetHeight;
    this.canvasWidth = this.canvas.offsetWidth;
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
  }

  createParticle(size: number): SingleParticle {
    let x = Math.random() * this.canvasWidth;
    let y = Math.random() * this.canvasHeight;
    const vx = Math.random() - 0.5;
    const vy = Math.random() - 0.5;

    if (x > this.canvasWidth - size * 2) {
      x = x - size;
    } else if (x < size * 2) {
      x = x + size;
    }
    if (y > this.canvasHeight - size * 2) {
      y = y - size;
    } else if (y < size * 2) {
      y = y + size;
    }

    return {
      x: x,
      y: y,
      vx: vx,
      vy: vy
    };
  }

  randomIntFromInterval(min, max) { // min and max included
    return Math.random() * (max - min) + min;
  }

  drawSingleParticle(p: SingleParticle, size: number, opacity: number) {
    this.context.fillStyle = `rgba(0,0,111, ${opacity})`;
    this.context.beginPath();
    this.context.rect(p.x, p.y, size, size);
    this.context.closePath();
    this.context.fill();
  }

  particlesDraw() {
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    for (let i = 0, l = this.particlesList.length; i < l; i++) {
      if(!this.particlesDetailList[i]) {
        this.particlesDetailList.push({
          size: Math.floor(Math.random() * 3) + 1,
          opacity: this.randomIntFromInterval(0.1, 0.4)
        });
      }
      this.update(this.particlesDetailList[i].size, l, i);
      this.drawSingleParticle(this.particlesList[i], this.particlesDetailList[i].size, this.particlesDetailList[i].opacity);
    }
  }

  update(size: number, l: number, i: number) {
    let p: SingleParticle = {
      vx: 0,
      vy: 0,
      x: 0,
      y: 0
    };
    let p2: SingleParticle = {
      vx: 0,
      vy: 0,
      x: 0,
      y: 0
    };
    let ms = 0;

    p = this.particlesList[i];
    ms = this.moveSpeed / 2;
    p.x += p.vx * ms;
    p.y += p.vy * ms;

    if (p.x - size > this.canvasWidth) {
      p.x = - size;
      p.y = Math.random() * this.canvasHeight;
    } else if (p.x + size < 0) {
      p.x = this.canvasWidth + size;
      p.y = Math.random() * this.canvasHeight;
    }
    if (p.y - size > this.canvasHeight) {
      p.y = - size;
      p.x = Math.random() * this.canvasWidth;
    } else if (p.y + size < 0) {
      p.y = this.canvasHeight + size;
      p.x = Math.random() * this.canvasWidth;
    }

  }

  render() {
    this.particlesDraw();
    if (this.animating) {
      window.requestAnimationFrame(callback => this.render());
    }
  }


}

interface SingleParticle {
  vx: number;
  vy: number;
  x: number;
  y: number;
}

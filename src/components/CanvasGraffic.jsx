import React, { Component, createRef } from 'react';

class CanvasGraffic extends Component {
  constructor() {
    super();
    this.canvasRef = createRef();
    // this.drawRect = this.drawRect.bind(this);
    this.legendCreate = this.legendCreate.bind(this);
    this.drawbackgound = this.drawbackgound.bind(this);
    this.drawBars = this.drawBars.bind(this);
    this.clearCanvas = this.clearCanvas.bind(this);
  }

  componentDidMount() {
    this.drawbackgound();
  }

  componentDidUpdate() {
    this.clearCanvas();
    this.drawbackgound();
  }

  clearCanvas() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  drawbackgound() {
    const {
      width, height, lineColor, fontSizeBackground, widthLine,
      fontBackground, maxPercent, percentSide,
    } = this.props;
    const sidePercent = percentSide === 'right' ? width - (fontSizeBackground * 4) : 10;
    const percent = maxPercent === '70%' ? 8 : maxPercent === '50%' ? 6 : 11;
    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');
    const largeCent = height / (percent + 1);
    let pass = height - largeCent;
    let cents = 0;
    Array(percent).fill(0).forEach(() => {
      context.beginPath();
      context.strokeStyle = lineColor;
      context.lineWidth = widthLine;
      context.moveTo(0, pass);
      context.lineTo(width, pass);
      context.stroke();
      context.closePath();
      context.fillStyle = lineColor;
      context.font = `${fontSizeBackground}px ${fontBackground}`;
      context.fillText(`${cents}%`, sidePercent, pass - (widthLine * 2));
      pass -= largeCent;
      cents += 10;
    });
    this.drawBars();
  }

  drawBars() {
    const {
      data, colors, widthBar, width, height, fontSizeBar, fontBar, maxPercent,
      fontColorBlack, fontColor, top, legend,
    } = this.props;
    const canvas = this.canvasRef.current;
    const fontSize = +fontSizeBar || 20;
    const fontType = fontBar || 'serif';
    const percent = maxPercent === '70%' ? 8 : maxPercent === '50%' ? 6 : 11;
    const largeCent = height / (percent + 1);
    const context = canvas.getContext('2d');
    const keys = Object.keys(data);
    const total = Object.values(data).reduce((sum, crr) => sum + +crr, 0);
    const initBar = height - (height / (percent + 1));
    const pass = +widthBar / 2;
    const positionInt = (width / 2) - ((keys.length / 2) * (+widthBar + pass));
    let x = positionInt;

    keys.forEach((name, i) => {
      context.font = `${fontSize}px ${fontType}`;
      const percents = `${((+data[name] * 100) / total).toFixed(1)}%`;
      const cents = ((+data[name] * (10 * largeCent)) / total);
      context.fillStyle = colors[i];
      context.fillRect(x, initBar, +widthBar, -cents);
      if (fontColorBlack) context.fillStyle = fontColor || 'black';
      context.fillText(name, x + (widthBar / 8), initBar + fontSize);
      if (top) context.fillText(percents, x + (widthBar / 4), initBar - cents - (fontSizeBar / 2));
      x += (pass + +widthBar);
    });
    if (legend) this.legendCreate();
  }

  legendCreate() {
    const {
      fontLegendSize, borderLegend, colorBorderLegend, colorLegend, // colors // legend, fontLegend,
      data, width,
    } = this.props;
    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');
    const maxLength = Math.max(...Object.keys(data).map((val) => val.length)) * +fontLegendSize;
    const legendWith = maxLength + (+fontLegendSize * 5);
    const legendHeight = ((+fontLegendSize * 2) * Object.keys(data).length) + (+fontLegendSize * 2);
    const xInit = width - (legendWith + 10);
    const yInit = 10;
    console.log(legendHeight + +borderLegend);
    context.fillStyle = colorBorderLegend;
    context.fillRect(
      xInit - borderLegend,
      yInit - borderLegend, legendWith + +borderLegend,
      legendHeight + +borderLegend,
    );
    context.fillStyle = colorLegend;
    context.fillRect(xInit, yInit, legendWith - +borderLegend, legendHeight - +borderLegend);
  }

  // drawRect() {
  //   const canvas = this.canvasRef.current;
  //   const context = canvas.getContext('2d');
  //   // context.fillRect(25, 25, 100, 100);
  //   // context.clearRect(45, 45, 60, 60);
  //   context.strokeRect(0, 60, 100, 50);
  //   this.legendCreate();
  // }

  render() {
    const { width, height, backgroundColor } = this.props;
    return (
      <canvas
        className="canvas"
        ref={this.canvasRef}
        width={width}
        height={height}
        style={{ border: '1px solid black', backgroundColor }}
      />
    );
  }
}

export default CanvasGraffic;

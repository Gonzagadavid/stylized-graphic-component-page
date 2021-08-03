import React from 'react';
import { connect } from 'react-redux';
import CanvasGraffic from '../components/CanvasGraffic';

const GrafficPage = (props) => {
  const {
    data, colors, height, width, backgroundColor, lineColor, fontBar,
    fontSizeBackground, widthLine, fontBackground, maxPercent, percentSide,
    widthBar, fontSizeBar, fontColorBlack, fontColor, top,
  } = props;

  return (
    <div className="content">
      <h2>Grafico com barras</h2>
      <CanvasGraffic
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        lineColor={lineColor}
        fontSizeBackground={fontSizeBackground}
        fontBackground={fontBackground}
        widthLine={widthLine}
        maxPercent={maxPercent}
        percentSide={percentSide}
        data={data}
        colors={colors}
        widthBar={widthBar}
        fontSizeBar={fontSizeBar}
        fontBar={fontBar}
        fontColorBlack={fontColorBlack}
        fontColor={fontColor}
        top={top}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  colors: state.colors,
  width: state.width,
  height: state.height,
  backgroundColor: state.backgroundColor,
  lineColor: state.lineColor,
  fontSizeBackground: state.fontSizeBackground,
  percentSide: state.percentSide,
  widthLine: state.widthLine,
  fontBackground: state.fontBackground,
  maxPercent: state.maxPercent,
  widthBar: state.widthBar,
  fontSizeBar: state.fontSizeBar,
  fontBar: state.fontBar,
  fontColorBlack: state.fontColorBlack,
  fontColor: state.fontColor,
  top: state.top,
});
export default connect(mapStateToProps)(GrafficPage);

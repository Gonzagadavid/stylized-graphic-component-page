import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import './CodePage.css';
import Highlight from 'react-highlight';
import { GiConfirmed } from 'react-icons/gi';
import { FaRegCopy } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

const CodePage = ({
  heightGraph, widthGraph, backgroundColor, lineColor, fontBar, fontSizeBackground,
  widthLine, fontBackground, percentSide, widthBar, fontSizeBar,
  fontColordifBar, fontColor, topPercent, withLegend, fontLegend, fontLegendSize, colorLegend,
  borderLegend, colorBorderLegend, fontColorLegend, baseName, legendSide, legendVertical,
  widthBorder, borderColor, data, maxPercent, colors,
}) => {
  const objectCode = useRef(null);
  const npm = useRef(null);
  const importLine = useRef(null);
  const importComp = useRef(null);
  const objData = `${Object
    .entries(data)
    .reduce((str, arr, i) => `${str}${i !== 0 ? ',' : ''} ${arr[0]}: ${arr[1]}`, '')} `;

  const [copied, setCopied] = useState(false);
  const copyToClip = (ref) => {
    const tempInput = document.createElement('textarea');
    tempInput.value = ref.current.innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (document.queryCommandSupported('copy')
    && (
    <div className="CodePage">
      {copied ? (
        <p className="copied">
          <GiConfirmed />
          <span><FormattedMessage id="codePage.copied" /></span>
        </p>
      ) : ''}
      <h2><FormattedMessage id="codePage.finishing" /></h2>
      <p><FormattedMessage id="codePage.createFile" /></p>
      <div className="code">
        <button type="button" className="copy-button" onClick={() => copyToClip(objectCode)}>
          <FaRegCopy />
        </button>
        <Highlight className="language-javascript">
          <p ref={objectCode}>
            {
            `
//style.js
            
const style = { 
  widthGraph: '${widthGraph}',
  widthBorder: '${widthBorder}',
  heightGraph: '${heightGraph}',
  backgroundColor: '${backgroundColor}',
  lineColor: '${lineColor}',
  fontSizeBackground: '${fontSizeBackground}',
  percentSide: '${percentSide}',
  widthLine: '${widthLine}',
  fontBackground: '${fontBackground}',
  widthBar: '${widthBar}',
  fontSizeBar: '${fontSizeBar}',
  fontBar: '${fontBar}',
  fontColordifBar: ${fontColordifBar},
  fontColor: '${fontColor}',
  topPercent: ${topPercent},
  withLegend: ${withLegend},
  fontLegend: '${fontLegend}',
  fontLegendSize: '${fontLegendSize}',
  fontColorLegend: '${fontColorLegend}',
  colorLegend: '${colorLegend}',
  borderLegend: '${borderLegend}',
  colorBorderLegend: '${colorBorderLegend}',
  baseName: ${baseName},
  legendSide: '${legendSide}',
  legendVertical: '${legendVertical}',
  borderColor: '${borderColor}',
}

export default style
`
}
          </p>
        </Highlight>
      </div>
      <p>
        <FormattedMessage id="codePage.installLib" />
      </p>
      <div className="code">
        <button type="button" className="copy-button" onClick={() => copyToClip(npm)}>
          <FaRegCopy />
        </button>
        <Highlight className="language-shell">
          <p ref={npm}>
            npm i stylized-graphic-component
          </p>
        </Highlight>
        <em>
          <FormattedMessage id="codePage.version" />
        </em>
        <em>npm i stylized-graphic-component@1.0.5</em>
      </div>
      <p>
        <FormattedMessage id="codePage.importProps" />
      </p>
      <div className="code">
        <button type="button" className="copy-button" onClick={() => copyToClip(importLine)}>
          <FaRegCopy />
        </button>
        <Highlight className="language-javascript">
          <p ref={importLine}>
            {'import { GraphicComponent } from \'stylized-graphic-component\'' }
          </p>
        </Highlight>
      </div>
      <div className="code">
        <button type="button" className="copy-button" onClick={() => copyToClip(importComp)}>
          <FaRegCopy />
        </button>
        <Highlight className="language-javascript">
          <p ref={importComp}>
            {
              `
import React from 'react';
import { GraphicComponent } from 'stylized-graphic-component'
import style from ./path/style

const GraphicPage = () => (
  <div className="graphic">
  <GraphicComponent
      style={style}
      data={{${objData}}}
      maxPercent={'${maxPercent}'}
      colors={[${colors.map((color) => `'${color}'`)}]}
    />
  </div>
)

export default GraphicPage;
`
            }
          </p>
        </Highlight>
      </div>
    </div>
    )
  );
};

const mapStateToProps = (state) => ({
  style: state,
  data: state.data,
  colors: state.colors,
  widthGraph: state.widthGraph,
  heightGraph: state.heightGraph,
  widthBorder: state.widthBorder,
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
  fontColordifBar: state.fontColordifBar,
  fontColor: state.fontColor,
  topPercent: state.topPercent,
  withLegend: state.withLegend,
  fontLegend: state.fontLegend,
  fontLegendSize: state.fontLegendSize,
  fontColorLegend: state.fontColorLegend,
  colorLegend: state.colorLegend,
  borderLegend: state.borderLegend,
  colorBorderLegend: state.colorBorderLegend,
  baseName: state.baseName,
  legendSide: state.legendSide,
  legendVertical: state.legendVertical,
  borderColor: state.borderColor,
});
export default connect(mapStateToProps)(CodePage);

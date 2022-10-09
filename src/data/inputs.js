export const inputBackground = [
  { type: 'color', name: 'backgroundColor', labelText: 'backgroundColor' },
  { type: 'color', name: 'lineColor', labelText: 'lineColor' },
  { type: 'number', name: 'widthLine', labelText: 'widthLine' },
  { type: 'number', name: 'fontSizeBackground', labelText: 'fontSizeBackground' },
  { type: 'text', name: 'fontBackground', labelText: 'fontBackground' },
  { type: 'number', name: 'widthGraph', labelText: 'widthGraph' },
  { type: 'number', name: 'heightGraph', labelText: 'heightGraph' },
  { type: 'number', name: 'widthBorder', labelText: 'widthBorder' },
  { type: 'color', name: 'borderColor', labelText: 'borderColor' },
  {
    type: 'radio', name: 'percentSide', labelText: 'percentSideLeft', value: 'left',
  },
  {
    type: 'radio', name: 'percentSide', labelText: 'percentSideRight', value: 'right',
  },
];

export const inputData = [
  { type: 'text', name: 'dataName' },
  { type: 'number', name: 'qty' },
  { type: 'color', name: 'color' },
];

export const inputBar = [
  { type: 'checkbox', name: 'fontColordifBar' },
  { type: 'number', name: 'widthBar' },
  { type: 'number', name: 'fontSizeBar' },
  { type: 'text', name: 'fontBar' },
  { type: 'checkbox', name: 'topPercent' },
  { type: 'checkbox', name: 'baseName' },
];

export const legend = [
  { type: 'number', name: 'fontLegendSize', labelText: 'fontLegendSize' },
  { type: 'color', name: 'fontColorLegend', labelText: 'fontColorLegend' },
  { type: 'color', name: 'colorLegend', labelText: 'colorLegend' },
  { type: 'number', name: 'borderLegend', labelText: 'borderLegend' },
  { type: 'color', name: 'colorBorderLegend', labelText: 'colorBorderLegend' },
  {
    type: 'radio', name: 'legendSide', labelText: 'legendSideLeft', value: 'left',
  },
  {
    type: 'radio', name: 'legendSide', labelText: 'legendSideRight', value: 'right',
  },
  {
    type: 'radio', name: 'legendVertical', labelText: 'legendVerticalTop', value: 'atop',
  },
  {
    type: 'radio', name: 'legendVertical', labelText: 'legendVerticalLower', value: 'bottom',
  },
];

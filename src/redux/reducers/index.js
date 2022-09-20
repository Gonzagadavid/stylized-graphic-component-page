import {
  ADD_BACKGROUND, ADD_COLOR, ADD_DATA, ADD_LEGEND,
  ADD_STYLEBAR, EDIT_COLOR, EDIT_QTY, LANGUAGE, REMOVE_DATA,
} from '../actions';

const INITIAL_STATE = {
  data: { Acertos: 4, Erros: 3 },
  colors: ['#2e9e3b', '#862323'],
  maxPercent: '100%',
  widthGraph: '1000',
  widthBorder: '3',
  heightGraph: '500',
  backgroundColor: '#191736',
  lineColor: '#407991',
  fontSizeBackground: '25',
  percentSide: 'left',
  widthLine: '1',
  fontBackground: 'comic',
  widthBar: '102',
  fontSizeBar: '15',
  fontBar: 'monospace',
  fontColordifBar: false,
  fontColor: 'black',
  topPercent: false,
  withLegend: true,
  fontLegend: 'monospace',
  fontLegendSize: '23',
  fontColorLegend: '#191740',
  colorLegend: '#407991',
  borderLegend: '8',
  colorBorderLegend: '#191740',
  baseName: false,
  legendSide: 'right',
  legendVertical: 'atop',
  borderColor: '#407991',
  locale: 'pt-BR',
};

const reducerData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: { ...state.data, ...action.state } };

    case ADD_COLOR:
      return { ...state, colors: [...state.colors, action.state] };

    case ADD_BACKGROUND:
      document.body.style.width = `${+action.state.widthGraph + 500}px`;
      return { ...state, ...action.state };

    case ADD_STYLEBAR:
      return { ...state, ...action.state };

    case ADD_LEGEND:
      return { ...state, ...action.state };

    case REMOVE_DATA:
      return {
        ...state,
        data: Object
          .keys(state.data)
          .filter((key) => key !== action.state.name)
          .reduce((newState, name) => ({ ...newState, [name]: state.data[name] }), {}),
        colors: state.colors.filter((color) => color !== action.state.color),
      };

    case EDIT_COLOR:
      return {
        ...state,
        colors: state
          .colors
          .map((color, index) => (index === action.state.index ? action.state.color : color)),
      };

    case EDIT_QTY:
      return {
        ...state,
        data: { ...state.data, [action.state.name]: action.state.qty },
      };

    case LANGUAGE:
      return { ...state, locale: action.state };

    default: return state;
  }
};

export default reducerData;

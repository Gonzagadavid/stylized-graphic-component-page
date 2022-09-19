export const ADD_DATA = 'ADD_DATA';
export const ADD_COLOR = 'ADD_COLOR';
export const ADD_BACKGROUND = 'ADD_BACKGROUND';
export const ADD_STYLEBAR = 'ADD_STYLEBAR';
export const ADD_LEGEND = 'ADD_LEGEND';
export const REMOVE_DATA = 'REMOVE_DATA';
export const EDIT_COLOR = 'EDIT_COLOR';
export const EDIT_QTY = 'EDIT_QTY';
export const LANGUAGE = 'LANGUAGE';

export const actionAddData = (state) => ({ type: ADD_DATA, state });

export const actionAddColor = (state) => ({ type: ADD_COLOR, state });

export const actionAddBackground = (state) => ({ type: ADD_BACKGROUND, state });

export const actionAddStyleBar = (state) => ({ type: ADD_STYLEBAR, state });

export const actionAddLegend = (state) => ({ type: ADD_LEGEND, state });

export const actionRemoveData = (state) => ({ type: REMOVE_DATA, state });

export const actionEditColor = (state) => ({ type: EDIT_COLOR, state });

export const actionEditQty = (state) => ({ type: EDIT_QTY, state });

export const actionLanguage = (state) => ({ type: LANGUAGE, state });

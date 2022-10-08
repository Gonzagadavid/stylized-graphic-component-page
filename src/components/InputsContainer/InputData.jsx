import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';
import { inputData } from '../../data/inputs';
import { actionAddColor, actionAddData } from '../../redux/actions';
import Input from '../Input/Input';
import './InputContainer.css';

const InputData = ({ addData, addColor }) => {
  const INITIAL_STATE = { dataName: '', qty: 0, color: 'black' };

  const [state, setState] = useState(INITIAL_STATE);

  const handlerChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const insertData = () => {
    const { dataName, qty, color } = state;
    addData({ [dataName]: qty });
    addColor(color);
    setState(INITIAL_STATE);
  };

  return (
    <div className="InputConatiner">
      <h3><FormattedMessage id="navSetComponent.data" /></h3>
      {
        inputData.map(({ type, name, labelText }) => (
          <Input
            type={type}
            name={name}
            labelText={labelText}
            value={state[name]}
            change={handlerChange}
          />
        ))
      }
      <button type="button" onClick={insertData}>Inserir Dado</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addData: (state) => dispatch(actionAddData(state)),
  addColor: (state) => dispatch(actionAddColor(state)),
});

export default connect(null, mapDispatchToProps)(InputData);

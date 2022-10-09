import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { connect } from 'react-redux';
import { inputBar } from '../../data/inputs';
import { actionAddStyleBar } from '../../redux/actions';
import Input from '../Input/Input';
import './InputContainer.css';

const InputBar = ({ addStyleBar, state }) => {
  const { formatMessage } = useIntl();
  const handlerChange = ({ target }) => {
    const {
      name, value, checked, type,
    } = target;
    const checkbox = type === 'checkbox';
    const valueInput = checkbox ? checked : value;
    addStyleBar({ [name]: valueInput });
  };

  return (
    <div className="InputConatiner">
      <h3><FormattedMessage id="navSetComponent.styleBar" /></h3>
      {
         state.fontColordifBar
        && (
        <Input
          type="color"
          name="fontColor"
          labelText={formatMessage({ id: 'inputLabel.inputBar.fontColor' })}
          value={state.fontColor}
          change={handlerChange}
        />
        )
        }
      {
        inputBar.map(({ name, type }) => (
          <Input
            type={type}
            name={name}
            labelText={formatMessage({ id: `inputLabel.inputBar.${name}` })}
            checked={state[name]}
            value={state[name]}
            change={handlerChange}
          />
        ))
        }

    </div>
  );
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  addStyleBar: (state) => dispatch(actionAddStyleBar(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBar);

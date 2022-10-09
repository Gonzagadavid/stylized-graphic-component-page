import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { connect } from 'react-redux';
import { inputBackground } from '../../data/inputs';
import { actionAddBackground } from '../../redux/actions';
import Input from '../Input/Input';
import Select from '../Select/Select';
import './InputContainer.css';

const InputBackground = ({ state, addBackground }) => {
  const { formatMessage } = useIntl();
  const handlerChange = ({ target }) => {
    const { name, value } = target;
    addBackground({ [name]: value });
  };

  return (
    <div className="InputConatiner">
      <h3><FormattedMessage id="navSetComponent.background" /></h3>
      {
        inputBackground.map(({
          type, name, labelText, value,
        }) => (
          <Input
            type={type}
            key={labelText}
            name={name}
            labelText={formatMessage({ id: `inputLabel.inputBackground.${labelText}` })}
            value={value || state[name]}
            change={handlerChange}
          />
        ))
      }
      <Select
        name="maxPercent"
        labelText="Porcetagem a ser exibida:"
        value={state.maxPercent}
        change={handlerChange}
        options={['100%', '70%', '50%']}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  addBackground: (state) => dispatch(actionAddBackground(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBackground);

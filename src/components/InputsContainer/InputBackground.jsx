import React from 'react';
import { connect } from 'react-redux';
import { inputBackground } from '../../data/inputs';
import { actionAddBackground } from '../../redux/actions';
import Input from '../Input/Input';
import Select from '../Select/Select';
import './InputContainer.css';

const InputBackground = ({ state, addBackground }) => {
  const handlerChange = ({ target }) => {
    const { name, value } = target;
    addBackground({ [name]: value });
  };

  return (
    <div className="InputConatiner">
      <h3>Estilo Background</h3>
      {
        inputBackground.map(({
          type, name, labelText, value,
        }) => (
          <Input
            type={type}
            key={labelText}
            name={name}
            labelText={labelText}
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

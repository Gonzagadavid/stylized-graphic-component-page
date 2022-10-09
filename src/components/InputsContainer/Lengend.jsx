import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { connect } from 'react-redux';
import { legend } from '../../data/inputs';
import { actionAddLegend } from '../../redux/actions';
import Input from '../Input/Input';
import './InputContainer.css';

const Legend = ({ state, addLegend }) => {
  const { formatMessage } = useIntl();
  const handlerChange = ({ target }) => {
    const {
      name, value, checked, type,
    } = target;
    const checkbox = type === 'checkbox';
    const valueInput = checkbox ? checked : value;
    addLegend({ [name]: valueInput });
  };

  return (
    <div className="InputConatiner">
      <h3><FormattedMessage id="navSetComponent.subtitle" /></h3>
      <Input type="checkbox" name="withLegend" labelText={formatMessage({ id: 'inputLabel.legend.withSub' })} checked={state.withLegend} change={handlerChange} />
      { state.withLegend
        && (
          <>
            {legend.map(({
              name, type, value, checked, labelText,
            }) => (
              <Input
                type={type}
                name={name}
                labelText={formatMessage({ id: `inputLabel.legend.${labelText}` })}
                checked={checked}
                value={value || state[name]}
                change={handlerChange}
              />
            ))}
          </>
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({ state });

const mapDispacthToProps = (dispatch) => ({
  addLegend: (state) => dispatch(actionAddLegend(state)),
});

export default connect(mapStateToProps, mapDispacthToProps)(Legend);

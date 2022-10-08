import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { actionEditColor, actionEditQty, actionRemoveData } from '../../redux/actions';
import EditBar from '../EditBar/EditBar';
import './InputContainer.css';

const EditBarContainer = ({
  data, colors, removeData, editColor, editQty,
}) => {
  const names = Object.keys(data);
  return (
    <div className="InputConatiner">
      <h3><FormattedMessage id="navSetComponent.editBar" /></h3>
      {names.map((name, index) => (
        <EditBar
          text={name}
          key={name}
          color={colors[index]}
          qty={data[name]}
          remove={() => removeData({ name, color: colors[index] })}
          changeColor={({ target: { value } }) => editColor({ index, color: value })}
          changeQty={({ target: { value } }) => editQty({ name, qty: value })}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  colors: state.colors,
});

const mapDispatchToProps = (dispatch) => ({
  removeData: (state) => dispatch(actionRemoveData(state)),
  editColor: (state) => dispatch(actionEditColor(state)),
  editQty: (state) => dispatch(actionEditQty(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBarContainer);

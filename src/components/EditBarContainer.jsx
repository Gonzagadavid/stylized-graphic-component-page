import React from 'react';
import { connect } from 'react-redux';
import { actionEditColor, actionEditQty, actionRemoveData } from '../redux/actions';
import EditBar from './EditBar/EditBar';

const EditBarContainer = ({
  data, colors, removeData, editColor, editQty,
}) => {
  const names = Object.keys(data);
  return (
    <fieldset>
      <legend>Editar Barras</legend>
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
    </fieldset>
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
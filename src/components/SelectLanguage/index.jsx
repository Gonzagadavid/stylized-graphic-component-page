import React from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { selectLanguages } from '../../constants/selectStyles';
import messages from '../../locales/languages';
import { actionLanguage } from '../../redux/actions';
import './style.css';

const SelectLanguage = () => {
  const dispatch = useDispatch();
  const setLanguage = (value) => { dispatch(actionLanguage(value)); };
  const options = Object.keys(messages)
    .map((tag) => ({ value: tag, label: tag, code: tag.split('-')[1] }));
  return (
    <div className="SelectLanguage">
      <Select
        defaultValue={options[0]}
        styles={selectLanguages}
        width="200px"
        options={options}
        onChange={({ value }) => setLanguage(value)}
        getOptionLabel={(e) => (
          <div>
            <span style={{ marginRight: 10 }}>{e.label}</span>
            <img src={`https://flagcdn.com/${e.code.toLowerCase()}.svg`} alt="flag" width="20px" />
          </div>
        )}
      />
    </div>
  );
};

export default SelectLanguage;

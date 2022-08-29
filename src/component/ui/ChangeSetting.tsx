import React, { FC } from 'react';
import { Field } from 'formik';

interface ChangeSettingProps {
  title: string;
  type: string;
  name: string;
  placeHolder: string;
  touched?: boolean;
  errors?: string;
}

const ChangeSetting: FC<ChangeSettingProps> = ({
  name,
  placeHolder,
  title,
  type,
  touched,
  errors,
}) => {
  return (
    <div
      className={`change-setting ${
        touched && errors && 'change-setting_disable'
      }`}
    >
      <h3 className='form__title'>{title}</h3>
      <Field
        name={name}
        type={type}
        className='form__input'
        placeholder={placeHolder}
      />
    </div>
  );
};

export default ChangeSetting;

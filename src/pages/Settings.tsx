import React, { FC } from 'react';
import '../styles/Settings.scss';
import SideBar from '../component/ui/SideBar';
import { Formik, FormikErrors, Form, Field } from 'formik';
import ButtonSubmit from '../component/ui/ButtonSubmit';
import ChangeSetting from '../component/ui/ChangeSetting';
import '../styles/Register.scss';
import ChangeSettingsList from '../component/ui/ChangeSettingsList';

interface initialValues {
  userName: string;
  userAvatar: string;
  userPassword: string;
  userAge: number;
  userStatus: string;
  userJob: string;
}

interface ErrorsValues {
  userName?: string;
  userAvatar?: string;
  userPassword?: string;
  userAge?: string;
  userStatus?: string;
  userJob?: string;
}

const Settings: FC = () => {
  const initialValues: initialValues = {
    userName: '',
    userAvatar: '',
    userPassword: '',
    userAge: 0,
    userStatus: '',
    userJob: '',
  };
  const validate = ({
    userAge,
    userAvatar,
    userJob,
    userName,
    userPassword,
    userStatus,
  }: initialValues): ErrorsValues => {
    const errors: FormikErrors<initialValues> = {};
    if (!/.{1,}/.test(String(userAge)))
      errors.userAge = 'Поле должно быть заполнено!';
    if (!/.{1,}/.test(userAvatar))
      errors.userAge = 'Поле должно быть заполнено!';
    if (!/.{1,}/.test(userJob)) errors.userAge = 'Поле должно быть заполнено!';
    if (!/.{1,}/.test(userName)) errors.userAge = 'Поле должно быть заполнено!';
    if (!/.{1,}/.test(userPassword))
      errors.userAge = 'Поле должно быть заполнено!';
    if (!/.{1,}/.test(userStatus))
      errors.userAge = 'Поле должно быть заполнено!';
    return errors;
  };
  return (
    <div className='settings'>
      <SideBar />
      <div className='setting'>
        <div className='setting__countainer'>
          <h2 className='setting__title'>Настройки</h2>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={({}: initialValues, actions) => {
              console.log();
            }}
          >
            {({ errors, touched, isValid, dirty }) => (
              <Form className='form form_settings'>
                <ChangeSettingsList errors={errors} touched={touched} />
                <ButtonSubmit
                  text='Сохранить'
                  isDisabled={!isValid || !dirty}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Settings;

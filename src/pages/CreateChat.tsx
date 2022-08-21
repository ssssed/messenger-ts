import { Formik, Form, Field, FormikErrors } from 'formik';
import React, { FC } from 'react';
import ButtonSubmit from '../component/ui/ButtonSubmit';
import { createChatInit } from '../types/CreateChat';
import '../styles/Register.scss';
import { useNavigate } from 'react-router-dom';

const CreateChat: FC = () => {
  const navigate = useNavigate();
  const initialValues: createChatInit = {
    userName: '',
  };
  const validate = ({ userName }: createChatInit): createChatInit => {
    const errors: FormikErrors<createChatInit> = {};
    if (!/.{1,}/.test(userName))
      errors.userName = 'Поле должно быть заполнено!';
    return errors;
  };
  return (
    <div className='create-chat'>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={({ userName }: createChatInit, actions) => {
          console.log(userName);
          console.log('Чат создан');
          navigate('/');
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className='form'>
            <div className='form__container'>
              <h2 className='form__title'>Создать чат</h2>
              <Field
                name='userName'
                type='text'
                className='form__input'
                placeholder='Имя собеседника'
              />
              <span className='form__error'>
                {touched.userName && errors.userName}
              </span>
              <ButtonSubmit text='Войти' isDisabled={!isValid || !dirty} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateChat;

import { Formik, Form, Field, FormikErrors } from 'formik';
import React, { FC } from 'react';
import ButtonSubmit from '../component/ui/ButtonSubmit';
import { createChatInit } from '../types/CreateChat';
import { useNavigate } from 'react-router-dom';
import SideBar from '../component/ui/SideBar';
import '../styles/Register.scss';
import '../styles/CreateChat.scss';
import { createChat } from '../store/chatSlice';
import { useAppDispatch, useAppSelector } from '../hook/rtkhook';
import { dateForm } from '../hook/date';

const CreateChat: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { chats } = useAppSelector(state => state.chat)
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
      <SideBar />
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={({ userName }: createChatInit, actions) => {
          console.log(userName);
          console.log('Чат создан');
          dispatch(createChat({id: chats.length + 1, avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.X_GOJwn_pJsMl3RYuDzqLAHaFj%26pid%3DApi&f=1', message: [], lastMessage: '', name: userName, time: dateForm(), totaltime: (+dateForm().split(':')[0] * 60 * 60 * 60) + (+dateForm().split(':')[1] * 60 * 60)}))
          navigate('/');
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className='form' style={{margin: '0 auto'}}>
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

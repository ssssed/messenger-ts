import React, { FC } from 'react';
import ChangeSetting from './ChangeSetting';
import '../../styles/ChangeSettingsList.scss';

interface ErrorsValues {
  userName?: string;
  userAvatar?: string;
  userPassword?: string;
  userAge?: string;
  userStatus?: string;
  userJob?: string;
}

interface TouchedValues {
  userName?: boolean;
  userAvatar?: boolean;
  userPassword?: boolean;
  userAge?: boolean;
  userStatus?: boolean;
  userJob?: boolean;
}

interface ChangeSettingsListProps {
  errors: ErrorsValues;
  touched: TouchedValues;
}

const ChangeSettingsList = React.memo<ChangeSettingsListProps>(
  ({ errors, touched }) => {
    return (
      <div className='settings-list__container'>
        <ChangeSetting
          title='Изменить имя пользователя'
          name='userName'
          placeHolder='Имя пользователя'
          type='text'
          errors={errors.userName}
          touched={touched.userName}
        />
        <ChangeSetting
          title='Изменить пароль'
          name='userPassword'
          placeHolder='Пароль'
          type='password'
          errors={errors.userPassword}
          touched={touched.userPassword}
        />
        <ChangeSetting
          title='Изменить аватарку'
          name='userAvatar'
          placeHolder='Ссылка на новую аватарку'
          type='text'
          errors={errors.userAvatar}
          touched={touched.userAvatar}
        />
        <ChangeSetting
          title='Изменить возраст'
          name='userAge'
          placeHolder='Ваш возраст'
          type='number'
          errors={errors.userAge}
          touched={touched.userAge}
        />
        <ChangeSetting
          title='Изменить статуса'
          name='userStatus'
          placeHolder='Ваш статус'
          type='text'
          errors={errors.userStatus}
          touched={touched.userStatus}
        />
        <ChangeSetting
          title='Изменить должность'
          name='userJob'
          placeHolder='Ваша должность'
          type='text'
          errors={errors.userJob}
          touched={touched.userJob}
        />
      </div>
    );
  }
);

export default ChangeSettingsList;

import React from 'react';
import { Formik, Field, Form, FormikErrors } from 'formik';
import ButtonSubmit from '../component/ui/ButtonSubmit';
import '../styles/Register.scss';
import { initialValues } from '../types/FormTypes';
import { useAppDispatch } from '../hook/rtkhook';
import { toggleLogin } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const navigateToMain = () => navigate('/');
	const initialValues: initialValues = {
		login: '',
		password: '',
	};
	const validate = ({ login, password }: initialValues): initialValues => {
		const errors: FormikErrors<initialValues> = {};
		if (!/.{1,}/.test(login)) errors.login = 'Поле должно быть заполнено!';
		if (!/.{1,}/.test(password))
			errors.password = 'Поле должно быть заполнено!';
		return errors;
	};
	return (
		<Formik
			initialValues={initialValues}
			validate={validate}
			onSubmit={({ login, password }: initialValues, actions) => {
				console.log(login, password);
				actions.setValues({
					login: '',
					password: '',
				});
				actions.setTouched({
					login: false,
					password: false,
				});
				dispatch(toggleLogin(true));
				navigateToMain();
			}}
		>
			{({ errors, touched, isValid, dirty }) => (
				<Form className='form'>
					<div className='form__container'>
						<h2 className='form__title'>Войти</h2>
						<Field
							name='login'
							type='email'
							className='form__input'
							placeholder='Login'
						/>
						<span className='form__error'>{touched.login && errors.login}</span>
						<Field
							name='password'
							type='password'
							className='form__input'
							placeholder='Пароль'
						/>
						<span className='form__error'>
							{touched.password && errors.password}
						</span>
						<ButtonSubmit text='Войти' isDisabled={!isValid || !dirty} />
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default Login;

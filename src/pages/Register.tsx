import { Field, Form, Formik, FormikErrors } from 'formik';
import React from 'react';
import ButtonSubmit from '../component/ui/ButtonSubmit';
import '../styles/Register.scss';
import { initialValues } from '../types/FormTypes';

const Register: React.FC = () => {
	const initialValues: initialValues = {
		login: '',
		password: '',
	};

	const validate = ({ login, password }: initialValues): initialValues => {
		const errors: FormikErrors<initialValues> = {};
		if (!/[A-Za-z0-9]{5,15}\@[a-z]{2,8}\.[a-z]{2,}/g.test(login))
			errors.login = 'Введите коректный адрес электронной почты';
		else if (/[0-9]{5,15}\@[a-z]{2,8}\.[a-z]{2,}/g.test(login))
			errors.login = 'В почте должна быть хоть 1 буква';
		if (!/.{5,15}$/g.test(password))
			errors.password = 'Длинна пароля должна быть от 5 до 15 символов';
		else if (!/[A-Z]{1,}/g.test(password))
			errors.password = 'В пароле должна быть хотя бы одна буква';
		else if (!/[0-9]{1,}/g.test(password))
			errors.password = 'В пароле должна быть хотя бы одна цифра';
		else if (!/[!@#$%^&*]{1,}/g.test(password))
			errors.password =
				'В пароле должны присутствовать спец символы такие как: !@#$%^&*';
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
			}}
		>
			{({ errors, touched, isValid, dirty }) => (
				<Form className='form'>
					<div className='form__container'>
						<h2 className='form__title'>Регистрация</h2>
						<Field
							className='form__input'
							type='email'
							name='login'
							require='true'
						/>
						<span className='form__error'>{touched.login && errors.login}</span>
						<Field
							className='form__input'
							type='password'
							name='password'
							require='true'
						/>
						<span className='form__error'>
							{touched.password && errors.password}
						</span>
						<ButtonSubmit
							text='зарегистрироваться'
							isDisabled={!isValid || !dirty}
						/>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default Register;

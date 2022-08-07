import React, { FC } from 'react';
import '../../styles/Button.scss';

interface ButtonSubmitProps {
	text: string;
	isDisabled: boolean;
	className?: string;
}

const ButtonSubmit: FC<ButtonSubmitProps> = ({
	text,
	isDisabled,
	className,
}) => {
	return (
		<button
			type='submit'
			className={`button ${
				!isDisabled ? 'button_gradient' : 'button_disable'
			} ${className}`}
			disabled={isDisabled}
		>
			{text}
		</button>
	);
};

export default ButtonSubmit;

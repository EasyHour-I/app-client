import cn from 'classnames';

import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FormControl, FormControlProps } from '../FormControl';

import styles from './InputFormControl.module.scss';

export interface InputFormControlProps
    extends Omit<FormControlProps, 'marginTo'> {
    id: string;
    type?: 'text' | 'password' | 'email' | 'url';
    register: UseFormRegister<FieldValues>;
    maxLength?: number;
    readonly?: boolean;
    disabled?: boolean;
    stretch?: boolean;
}

export const InputFormControl: React.FC<InputFormControlProps> = ({
    type = 'text',
    id,
    register,
    readonly,
    maxLength,
    disabled,
    stretch,
    ...props
}) => {
    return (
        <FormControl marginTo="label" {...props}>
            <input
                {...register(props.name)}
                className={cn(styles.input, stretch && styles.stretch)}
                name={props.name}
                type={type}
                id={id}
                readOnly={readonly}
                disabled={disabled}
                maxLength={maxLength}
            />
        </FormControl>
    );
};

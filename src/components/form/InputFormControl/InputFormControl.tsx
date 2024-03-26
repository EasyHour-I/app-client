import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FormControl, FormControlProps } from '../FormControl';
import styles from './InputFormControl.module.scss';
import cn from 'classnames';

export interface InputFormControlProps
    extends Omit<FormControlProps, 'marginTo'> {
    id: string;
    type?: 'text' | 'password' | 'email' | 'url';
    register: UseFormRegister<FieldValues>;
    maxLength?: number;
    readonly?: boolean;
    disabled?: boolean;
}

export const InputFormControl: React.FC<InputFormControlProps> = ({
    type = 'text',
    id,
    register,
    readonly,
    maxLength,
    disabled,
    ...props
}) => {
    return (
        <FormControl marginTo="label" {...props}>
            <input
                {...register(props.name)}
                className={cn(styles.input)}
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

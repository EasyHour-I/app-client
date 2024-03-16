import { UseFormRegister, FieldValues } from 'react-hook-form';
import { FormControl, FormControlProps } from '../FormControl';
import styles from './RadioButtonsFormControl.module.scss';
import cn from 'classnames';

export interface RadioOption {
    label: string;
    value: number | string;
}

export interface RadioButtonsFormControlProps extends FormControlProps {
    options: RadioOption[];
    register: UseFormRegister<FieldValues>;
}

export const RadioButtonsFormControl: React.FC<
    RadioButtonsFormControlProps
> = ({ options, register, ...props }) => {
    return (
        <FormControl marginTo="children" {...props}>
            {options.map((option) => (
                <div className={styles.radio__container}>
                    <input
                        type="radio"
                        className={cn(
                            styles.radio,
                            props.errors && styles.error
                        )}
                        id={option.value as string}
                        value={option.value}
                        {...register(props.name)}
                    />
                    <label htmlFor={option.value as string}>
                        {option.label}
                    </label>
                </div>
            ))}
        </FormControl>
    );
};

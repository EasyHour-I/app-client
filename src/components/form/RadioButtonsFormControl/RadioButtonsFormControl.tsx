import { UseFormRegister, FieldValues } from 'react-hook-form';
import { FormControl, FormControlProps } from '../FormControl';
import styles from './RadioButtonsFormControl.module.scss';

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
        <FormControl {...props}>
            {options.map((option) => (
                <div className={styles.radio__container}>
                    <input
                        type="radio"
                        className={styles.radio}
                        id={option.label}
                        value={option.value}
                        {...register(props.name)}
                    />
                    <label htmlFor={option.label}>{option.label}</label>
                </div>
            ))}
        </FormControl>
    );
};

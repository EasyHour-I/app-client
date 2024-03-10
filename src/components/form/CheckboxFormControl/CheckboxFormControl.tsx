import { UseFormRegister, FieldValues } from 'react-hook-form';
import { FormControl, FormControlProps } from '../FormControl';
import styles from './CheckboxFormControl.module.scss';

export interface CheckboxOption {
    label: string;
    value: number | string;
    checked?: boolean;
}

export interface CheckboxFormControlProps extends FormControlProps {
    type: 'checkbox' | 'switch';
    options: CheckboxOption[];
    register: UseFormRegister<FieldValues>;
}

export const CheckboxFormControl: React.FC<CheckboxFormControlProps> = ({
    type,
    options,
    register,
    ...props
}) => {
    return (
        <FormControl {...props}>
            {options.map((option) => (
                <div className={styles.checkbox__container}>
                    <input
                        type="checkbox"
                        className={
                            type == 'checkbox' ? styles.checkbox : styles.switch
                        }
                        id={option.label}
                        value={option.value}
                        {...register(props.name)}
                        defaultChecked={option.checked}
                    />
                    <label htmlFor={option.label}>{option.label}</label>
                </div>
            ))}
        </FormControl>
    );
};

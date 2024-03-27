import { UseFormRegister, FieldValues } from 'react-hook-form';
import { FormControl, FormControlProps } from '../FormControl';
import styles from './CheckboxFormControl.module.scss';
import cn from 'classnames';

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
        <FormControl marginTo="children" {...props}>
            {options.map((option) => (
                <div className={styles.checkbox__container} key={option.value}>
                    <input
                        type="checkbox"
                        className={cn(
                            type == 'checkbox'
                                ? styles.checkbox
                                : styles.switch,
                            props.errors && styles.error
                        )}
                        id={option.value as string}
                        value={option.value}
                        {...register(props.name)}
                        defaultChecked={option.checked}
                    />
                    <label htmlFor={option.value as string}>
                        {option.label}
                    </label>
                </div>
            ))}
        </FormControl>
    );
};

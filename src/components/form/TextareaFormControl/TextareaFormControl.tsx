import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FormControl, FormControlProps } from '../FormControl';
import styles from './TextareaFormControl.module.scss';
import cn from 'classnames';

const NO_ROWS = 0;
const ROWS_DEFAULT_NUMBER = 5;

export interface TextareaFormControlProps
    extends Omit<FormControlProps, 'marginTo'> {
    id: string;
    register: UseFormRegister<FieldValues>;
    rows?: number;
    maxLength?: number;
    readonly?: boolean;
    disabled?: boolean;
}

export const TextareaFormControl: React.FC<TextareaFormControlProps> = ({
    id,
    register,
    rows,
    readonly,
    maxLength,
    disabled,
    ...props
}) => {
    return (
        <FormControl marginTo="label" {...props}>
            <textarea
                {...register(props.name)}
                className={cn(styles.textarea)}
                name={props.name}
                id={id}
                rows={
                    rows && Number.isInteger(rows) && rows > NO_ROWS
                        ? rows
                        : ROWS_DEFAULT_NUMBER
                }
                readOnly={readonly}
                disabled={disabled}
                maxLength={maxLength}
            />
        </FormControl>
    );
};

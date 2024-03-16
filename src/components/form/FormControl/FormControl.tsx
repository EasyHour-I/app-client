import { PropsWithChildren } from 'react';
import { FieldErrors } from 'react-hook-form';
import styles from './FormControl.module.scss';
import cn from 'classnames';

export interface FormControlProps {
    name: string;
    label: string;
    errors?: FieldErrors;
    required?: boolean;
    className?: string;
    marginTo?: 'label' | 'children';
}

export const FormControl: React.FC<PropsWithChildren<FormControlProps>> = ({
    label,
    required,
    name,
    children,
    errors,
    className,
    marginTo,
}) => {
    return (
        <div className={cn(styles.container, className)}>
            <label
                className={cn(
                    required ? styles.required : '',
                    marginTo == 'label' && styles.margin
                )}
            >
                {label}
            </label>
            <div
                className={cn(
                    styles.children__container,
                    marginTo == 'children' && styles.margin
                )}
            >
                {children}
            </div>
            {errors?.[name] && <span>{errors[name]?.message as string}</span>}
            <span>Error text</span>
        </div>
    );
};

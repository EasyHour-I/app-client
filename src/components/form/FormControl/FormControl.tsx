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
}

export const FormControl: React.FC<PropsWithChildren<FormControlProps>> = ({
    label,
    required,
    name,
    children,
    errors,
    className,
}) => {
    return (
        <div className={cn(styles.container, className)}>
            <label className={required ? styles.required : ''}>{label}</label>
            <div className={styles.children__container}>{children}</div>
            {errors?.[name] && <span>{errors[name]?.message as string}</span>}
            <span>Error text</span>
        </div>
    );
};

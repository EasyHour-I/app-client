import React from 'react';
import styles from './Button.module.scss';
import './Button.module.scss';
import cn from 'classnames';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    icon?: string;
    color?: 'primary' | 'secondary' | 'accent';
    transparent?: boolean;
    size?: 'small' | 'big';
    stretch?: boolean;
    childred?: React.ReactNode;
}

const buttonTypes: { [key: string]: string } = {
    primary: styles.primary,
    primaryIcon: styles.primary_icon,
    primaryTextIcon: styles.primary_text_icon,
    secondary: styles.secondary,
    secondaryIcon: styles.secondary_icon,
    secondaryTextIcon: styles.secondary_text_icon,
    accent: styles.accent,
    accentIcon: styles.accent_icon,
    accentTextIcon: styles.accent_text_icon,
};

export const Button: React.FC<ButtonProps> = ({
    text,
    icon,
    className,
    color,
    transparent,
    size,
    stretch,
    childred,
    ...props
}: ButtonProps) => {
    const buttonType = `${color || 'primary'}${
        text && icon ? 'TextIcon' : icon ? 'Icon' : ''
    }`;

    const buttonSize = size === 'small' ? styles.small : '';

    const buttonStretch = stretch ? styles.stretch : '';

    return (
        <button
            className={cn(
                buttonTypes[buttonType],
                buttonSize,
                buttonStretch,
                transparent && styles.transparent,
                className
            )}
            {...props}
        >
            {icon && (
                <span
                    className="material-symbols-rounded"
                    data-icon={icon}
                ></span>
            )}
            {childred ?? text}
        </button>
    );
};

import styles from './LayoutWrapper.module.scss';

export interface LayoutWrapperProps {
    title: string;
    children?: React.ReactNode;
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
    title,
    children,
}) => {
    return (
        <div className={styles.container}>
            <h1>{title} -</h1>
            <div className={styles.page_wrapper}>{children}</div>
        </div>
    );
};

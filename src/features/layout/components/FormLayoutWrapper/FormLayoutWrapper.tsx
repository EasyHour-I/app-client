import { Button } from '@/components/Button';

import styles from './FormLayoutWrapper.module.scss';
import { Link } from 'react-router-dom';

export interface FormLayoutWrapperProps {
    children?: React.ReactNode;
}

export const FormLayoutWrapper: React.FC<FormLayoutWrapperProps> = ({
    children,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.button_container}>
                <Link to={'..'}>
                    <Button
                        text="back"
                        icon="arrow_back_ios"
                        size="small"
                        color="secondary"
                        transparent
                    />
                </Link>
            </div>
            <div className={styles.page_wrapper}>{children}</div>
        </div>
    );
};

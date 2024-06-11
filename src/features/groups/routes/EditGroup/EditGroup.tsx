import { useParams } from 'react-router-dom';

import { FormLayoutWrapper } from '@/features/layout/components/FormLayoutWrapper';

export const EditGroup: React.FC = () => {
    const { groupId } = useParams();
    return (
        <FormLayoutWrapper>
            <h1>Page</h1>
            <p>content - {groupId}</p>
        </FormLayoutWrapper>
    );
};

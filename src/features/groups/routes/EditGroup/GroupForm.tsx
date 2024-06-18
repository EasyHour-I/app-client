import { useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormLayoutWrapper } from '@/features/layout/components/FormLayoutWrapper';
import { InputFormControl } from '@/components/form';
import { Button } from '@/components/Button';

import styles from './EditGroup.module.scss';

export interface GroupFormProps {
    type: 'create' | 'edit';
}

export const GroupForm: React.FC<GroupFormProps> = ({ type }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { groupId } = useParams();

    const onSubmit: SubmitHandler<object> = (data: object) => {
        console.log('submit data', data);
        if (type === 'create') {
            console.log('create');
            return;
        }
        console.log(`edit - ${groupId}`);
    };

    return (
        <FormLayoutWrapper>
            <h1>Edit Group</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <InputFormControl
                    id="name"
                    name="name"
                    label="Name"
                    register={register}
                    errors={errors}
                    stretch
                />
                <div className={styles.row_inputs_container}>
                    <InputFormControl
                        id="TimesPerWeek"
                        name="TimesPerWeek"
                        label="Times Per Week"
                        type="number"
                        register={register}
                        errors={errors}
                    />
                    <InputFormControl
                        id="length"
                        name="length"
                        label="length"
                        type="time"
                        register={register}
                        errors={errors}
                    />
                </div>

                <Button text="Save Changes" />
            </form>
        </FormLayoutWrapper>
    );
};

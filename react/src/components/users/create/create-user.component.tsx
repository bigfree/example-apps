import { Button, Group, Modal, Select, TextInput, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { IconX, IconCheck, IconPlus } from '@tabler/icons-react';
import { FC, Fragment } from 'react';
import { z, ZodRawShape } from 'zod';
import { useCreateUser } from '../../../resources/users';
import { AccountStatusEnum, CreateUser } from '../../../types/User';

type AnyObj = Record<PropertyKey, unknown>

type ZodObj<T extends AnyObj> = {
    [key in keyof T]: z.ZodType<T[key]>
}

const zObject = <T extends AnyObj>(arg: ZodObj<T>) => z.object(arg as ZodRawShape);

const schema = zObject<CreateUser>({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    email: z.string().email(),
    status: z.nativeEnum(AccountStatusEnum),
});

const CreateUserComponent: FC = (): JSX.Element => {
    const [opened, { open, close }] = useDisclosure(false);
    const form = useForm<CreateUser>({
        validate: zodResolver(schema),
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            status: AccountStatusEnum.PENDING,
        },
    });

    const createUserMutation = useCreateUser();

    const handleSubmit = async (values: typeof form.values) => {
        await createUserMutation.mutateAsync(values, {
            onError: (error) => {
                console.log(error.response.data.response.message);
                notifications.show({
                    id: 'create-user-error',
                    title: 'Create new user',
                    message: error.response.data.response.message,
                    autoClose: 3000,
                    icon: <IconX size='1.2rem' />,
                    color: 'red',
                    withCloseButton: false,
                });
            },
            onSuccess: () => {
                form.reset();
                close();
                notifications.show({
                    id: 'create-user-success',
                    title: 'Create new user',
                    message: `${values.firstName} ${values.lastName} has been successfully created 🎉`,
                    autoClose: 3000,
                    icon: <IconCheck size='1.2rem' />,
                    color: 'green',
                    withCloseButton: false,
                });
            },
        });
    };

    return (
        <Fragment>
            <Modal.Root opened={opened} onClose={close}>
                <Modal.Overlay />
                <Modal.Content>
                    <Modal.Header sx={(theme) => ({
                        borderBottom: `1px solid ${theme.colors.gray[3]}`,
                        marginBottom: theme.spacing.sm,
                    })}>
                        <Modal.Title>
                            <Title order={4}>Create new user</Title>
                        </Modal.Title>
                        <Modal.CloseButton />
                    </Modal.Header>
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <Modal.Body>
                            <Group grow mb={'sm'}>
                                <TextInput
                                    withAsterisk
                                    label='First name'
                                    {...form.getInputProps('firstName')}
                                />
                                <TextInput
                                    withAsterisk
                                    label='Last name'
                                    {...form.getInputProps('lastName')}
                                />
                            </Group>
                            <TextInput
                                withAsterisk
                                label='Email'
                                mb={'sm'}
                                {...form.getInputProps('email')}
                            />
                            <Select
                                label='User status'
                                placeholder='Pick one'
                                data={[
                                    { value: AccountStatusEnum.ACTIVE, label: 'Active' },
                                    { value: AccountStatusEnum.PENDING, label: 'Pending' },
                                    { value: AccountStatusEnum.SUSPEND, label: 'Suspend' },
                                    { value: AccountStatusEnum.DELETED, label: 'Deleted' },
                                ]}
                                {...form.getInputProps('status')}
                            />
                        </Modal.Body>
                        <Group
                            position={'right'}
                            spacing={'sm'}
                            px={'md'}
                            pb={'md'}
                        >
                            <Button variant={'light'} color={'gray.7'} onClick={close}>Cancel</Button>
                            <Button type={'submit'}>Create</Button>
                        </Group>
                    </form>
                </Modal.Content>
                {/* Modal content */}
            </Modal.Root>

            <Button
                size={'sm'}
                variant={'default'}
                leftIcon={<IconPlus size='1rem' />}
                onClick={open}
            >
                Create user
            </Button>
        </Fragment>
    );
};

export default CreateUserComponent;
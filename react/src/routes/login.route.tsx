import { Anchor, Box, Button, Center, Group, Paper, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';
import { FC } from 'react';
import { z } from 'zod';
import { LoginAuthUser } from '../types/User';
import { zObject } from '../types/zod';

const schema = zObject<LoginAuthUser>({
    email: z.string().email(),
    password: z.string().nonempty(),
});

const LoginRoute: FC = (): JSX.Element => {
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm<LoginAuthUser>({
        validate: zodResolver(schema),
        initialValues: {
            email: '',
            password: '',
        },
        // validate: {
        //     email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
        //     password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        // },
    });

    const handleSubmit = (values: typeof form.values) => {
        console.log(values);
    };

    return (
        <Box sx={(theme) => ({
            background: theme.colors.gray[0],
            height: '100vh'
        })}>
            <Center mx='auto'>
                <Paper
                    shadow={'md'}
                    radius='md'
                    p='xl'
                    sx={{
                        marginTop: 80,
                        width: 400,
                    }}
                    withBorder
                >
                    <Text size='lg' weight={500} mb={'md'}>
                        Welcome to MyCRM
                    </Text>

                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <Stack>
                            {/*{type === 'register' && (*/}
                            {/*    <Fragment>*/}
                            {/*        <TextInput*/}
                            {/*            label='First name'*/}
                            {/*            placeholder='Your first name'*/}
                            {/*            {...form.getInputProps('firstName')}*/}
                            {/*            radius='md'*/}
                            {/*        />*/}
                            {/*        <TextInput*/}
                            {/*            label='Last name'*/}
                            {/*            placeholder='Your last name'*/}
                            {/*            {...form.getInputProps('lastName')}*/}
                            {/*            radius='md'*/}
                            {/*        />*/}
                            {/*    </Fragment>*/}
                            {/*)}*/}

                            <TextInput
                                withAsterisk
                                label='Email'
                                placeholder='hello@mantine.dev'
                                {...form.getInputProps('email')}
                                radius='md'
                            />

                            <PasswordInput
                                withAsterisk
                                label='Password'
                                placeholder='Your password'
                                {...form.getInputProps('password')}
                                radius='md'
                            />

                            {/*{type === 'register' && (*/}
                            {/*    <Checkbox*/}
                            {/*        label='I accept terms and conditions'*/}
                            {/*        checked={form.values.terms}*/}
                            {/*        onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}*/}
                            {/*    />*/}
                            {/*)}*/}
                        </Stack>

                        <Group position='apart' mt='xl'>
                            <Anchor
                                component='button'
                                type='button'
                                color='dimmed'
                                onClick={() => toggle()}
                                size='xs'
                            >
                                {type === 'register'
                                    ? 'Already have an account? Login'
                                    : 'Don\'t have an account? Register'}
                            </Anchor>
                            <Button type={'submit'} radius='xl'>
                                {upperFirst(type)}
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Center>
        </Box>
    );
};

export default LoginRoute;
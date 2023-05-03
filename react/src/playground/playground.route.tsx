import {
    DocumentNode,
    gql,
    OnDataOptions,
    useApolloClient,
    useMutation,
    useQuery,
    useSubscription,
} from '@apollo/client';
import { Button, Flex, Paper, Stack, Textarea, TextInput } from '@mantine/core';
import { useForm, UseFormReturnType } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import { FC, Fragment } from 'react';
import { Query, Subscription, Task, TaskCreateInput } from '../generated/client';

const GET_TASKS: DocumentNode = gql`
    query GetTasks($taskWhereInput: TaskWhereInput!) {
        tasks(taskWhereInput: $taskWhereInput) {
            id
            name
            content
        }
    }
`;

const CREATE_TASK: DocumentNode = gql`
    mutation CreateTask($taskCreateInput: TaskCreateInput!) {
        createTask(taskCreateInput: $taskCreateInput) {
            id
            name
            content
        }
    }
`;

const TASKS_SUBSCRIPTION: DocumentNode = gql`
    subscription Subscription {
        taskAdded {
            id
            createdAt
        }
    }
`;

const PlaygroundRoute: FC = (): JSX.Element => {
    const client = useApolloClient();

    const form: UseFormReturnType<TaskCreateInput, (values: TaskCreateInput) => TaskCreateInput> = useForm({
        initialValues: {
            name: '',
            content: '',
        },
    });

    const [createTask, {data: createdTask}] = useMutation(CREATE_TASK, {
        update(cache, {data: {createTask}}) {
            cache.modify({
                fields: {
                    tasks(existingTasks) {
                        const newTaskRef = cache.writeFragment({
                            data: createTask,
                            fragment: gql`
                                fragment NewTask on Task {
                                    id
                                }
                            `
                        });
                        return [...existingTasks, newTaskRef];
                    }
                }
            })
        }
    });

    const { data } = useQuery<Query>(GET_TASKS, {
        fetchPolicy: 'cache-first',
        variables: {
            taskWhereInput: {},
        },
    });

    const {data: tasksSubData, loading} = useSubscription(TASKS_SUBSCRIPTION, {
        onData(newTask: OnDataOptions<Subscription>) {
            console.log(newTask.data.data?.taskAdded.id);
            notifications.show({
                id: 'create-task-success',
                title: 'Create new task',
                message: `Task:${newTask.data.data?.taskAdded.id} has been successfully created at (${newTask.data.data?.taskAdded.createdAt}) 🎉`,
                autoClose: 3000,
                icon: <IconCheck size='1.2rem' />,
                withCloseButton: false,
            });
        }
    });

    const handleRefetchButton = async () => {
        await client.refetchQueries({
            include: [GET_TASKS],
        });
    }

    return (
        <Fragment>
            <Paper p={'sm'}>
                <form onSubmit={form.onSubmit(async (values) => {
                    await createTask<Task>({
                        variables: {
                            taskCreateInput: values
                        },
                        optimisticResponse: {
                            createTask: {
                                id: 'temp-id',
                                name: values.name,
                                content: values.content,
                                __typename: 'Task'
                            }
                        }
                    });

                })}>
                    <TextInput
                        label="Name"
                        placeholder="Task name"
                        {...form.getInputProps('name')}
                    />
                    <Textarea
                        label="Content"
                        placeholder="Task content"
                        mb={'sm'}
                        {...form.getInputProps('content')}
                    />
                    <Button type={'submit'}>Ulozit</Button>
                    <Button type={'button'} color={'gray.7'} ml={'sm'} onClick={handleRefetchButton}>Refetch</Button>
                </form>
            </Paper>
            <hr/>
            <Stack p={'sm'}>
                {data?.tasks.map((task, index) => (
                    <Paper shadow={'xs'} p={'sm'} key={index}>
                        <Flex gap={'md'}>
                            <div>{task.id}</div>
                            <div>{task.name}</div>
                            <div>{task.content}</div>
                        </Flex>
                    </Paper>
                ))}
            </Stack>
        </Fragment>
    );
};

export default PlaygroundRoute;
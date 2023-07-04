import { ColorInput, Grid, MantineTheme, NumberInput, Select, Stack, Textarea, TextInput } from '@mantine/core';
import { ChangeEvent, FC, Fragment } from 'react';
import { NodeTypeGeometryEnum } from '../../../__generated__/graphql';
import { useNodeTypeFormContext } from '../../../context/nodeType-form.context';

const NodeTypesPropsFormComponent: FC = () => {
    const { values: formValues, setFieldValue } = useNodeTypeFormContext();
    return (
        <Fragment>
            <Stack
                justify={'flex-start'}
                spacing={'md'}
                p={'md'}
                m={'md'}
                sx={(theme: MantineTheme) => ({
                    border: `1px solid ${theme.colors.gray[3]}`,
                    boxShadow: `3px 3px 0 0 rgba(0, 0, 0, .05)`,
                })}
            >
                <Grid>
                    <Grid.Col span={8}>
                        <TextInput
                            withAsterisk
                            label='Name'
                            value={formValues.name}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setFieldValue('name', event.target.value)}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <ColorInput
                            label={'Color'}
                            value={formValues.nodeTypeData.color ?? ''}
                            onChange={(value: string) => setFieldValue('nodeTypeData.color', value)}
                        />
                    </Grid.Col>
                </Grid>
                <TextInput
                    label='External ID'
                    value={formValues.externalId ?? ''}
                    mb={'sm'}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setFieldValue('externalId', event.target.value)}
                />
            </Stack>
            <Stack
                justify={'flex-start'}
                spacing={'md'}
                p={'md'}
                m={'md'}
                sx={(theme: MantineTheme) => ({
                    border: `1px solid ${theme.colors.gray[3]}`,
                    boxShadow: `3px 3px 0 0 rgba(0, 0, 0, .05)`,
                })}
            >
                <Grid>
                    <Grid.Col span={6}>
                        <Select
                            label='Geometry'
                            placeholder='Pick one'
                            value={formValues.nodeTypeData.geometry}
                            data={[
                                { value: NodeTypeGeometryEnum.Square, label: 'Square' },
                                { value: NodeTypeGeometryEnum.Circle, label: 'Circle' },
                                { value: NodeTypeGeometryEnum.Triangle, label: 'Triangle' },
                            ]}
                            onChange={(value: NodeTypeGeometryEnum) => setFieldValue('nodeTypeData.geometry', value)}
                        />
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <NumberInput
                            label='Width'
                            value={formValues.nodeTypeData.width ?? ''}
                            mb={'sm'}
                            min={150}
                            max={600}
                            stepHoldDelay={500}
                            stepHoldInterval={(holdIntervalValue: number) => Math.max(1000 / holdIntervalValue ** 2, 25)}
                            onChange={(value: number) => setFieldValue('nodeTypeData.width', value)}
                            formatter={(value: string): string => !Number.isNaN(parseFloat(value))
                                ? `${value}px`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                                : 'auto'
                            }
                        />
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <NumberInput
                            label='Height'
                            value={formValues.nodeTypeData.height ?? ''}
                            mb={'sm'}
                            max={100}
                            min={40}
                            stepHoldDelay={500}
                            stepHoldInterval={(holdIntervalValue: number) => Math.max(1000 / holdIntervalValue ** 2, 25)}
                            onChange={(value: number) => setFieldValue('nodeTypeData.height', value)}
                            formatter={(value: string): string => !Number.isNaN(parseFloat(value))
                                ? `${value}px`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                                : 'auto'
                            }
                        />
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col>
                        <Textarea
                            label='Description'
                            value={formValues.nodeTypeData.description ?? ''}
                            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setFieldValue('nodeTypeData.description', event.target.value)}
                        />
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col span={12}>
                        <TextInput
                            label='Acronym'
                            value={formValues.nodeTypeData.acronym ?? ''}
                            mb={'sm'}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setFieldValue('nodeTypeData.acronym', event.target.value)}
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
        </Fragment>
    );
};

export default NodeTypesPropsFormComponent;
import { ActionIcon, Box, CSSObject, MantineTheme, TextInput } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';
import { ChangeEvent, FC, Fragment, memo, useCallback } from 'react';
import { shallow } from 'zustand/shallow';
import useNodeTypesFilterStore, { NodeTypesFilterStore } from '../../../store/NodeTypesFilter.store';

/**
 * SearchContainerStyles
 * @param {MantineTheme} theme
 * @returns {CSSObject}
 */
const searchContainerStyles = (theme: MantineTheme): CSSObject => ({
    margin: theme.spacing.md,
    marginBottom: theme.colors.md,
    backgroundColor: theme.colors.gray[0],
});

/**
 * SearchInputStyles
 * @param {MantineTheme} theme
 * @returns {CSSObject}
 */
const searchInputStyles = (theme: MantineTheme): CSSObject => ({
    padding: theme.spacing.xs,
    border: `1px solid ${theme.colors.gray[2]}`,
});

/**
 * NodeTypesSearchComponent
 * @returns {JSX.Element}
 * @constructor
 */
const NodeTypesSearchComponent: FC = () => {
    const {
        name,
        setName,
    } = useNodeTypesFilterStore((store: NodeTypesFilterStore) => ({
        name: store.name,
        setName: store.setName,
    }), shallow);

    const setTextAction = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }, [name]);

    const clearTextAction = useCallback(() => {
        setName('');
    }, []);

    return (
        <Box sx={searchContainerStyles}>
            <TextInput
                icon={
                    <IconSearch size={'1.2rem'} />
                }
                rightSection={
                    <Fragment>
                        {'' !== name && (
                            <ActionIcon onClick={clearTextAction}>
                                <IconX size={'1.2rem'} />
                            </ActionIcon>
                        )}
                    </Fragment>
                }
                variant={'unstyled'}
                value={name}
                onChange={setTextAction}
                placeholder='Search node type'
                sx={searchInputStyles}
            />
        </Box>
    );
};

export default memo(NodeTypesSearchComponent);